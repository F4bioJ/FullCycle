// Gera resumo (bsc), quizz e gabarito de uma aula via OpenRouter (modelos grátis).
// Uso: node .claude/skills/next-class/scripts/or-gerar.mjs <id> [--duracao mm:ss] [--n 10] [--so-quizz] [--rodadas 3] [--out <pasta>] [--force]
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { chat, extrairJson, acharAula, formatarQuizz, RAIZ } from './or-lib.mjs';
import { revisarQuizz } from './or-revisao.mjs';

const args = process.argv.slice(2);
const id = args.find(a => /^\d+(\.\d+)+$/.test(a));
const opt = n => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
if (!id) { console.error('uso: or-gerar.mjs <id> [--duracao mm:ss] [--n N] [--so-quizz] [--out pasta] [--force]'); process.exit(1); }

const aula = acharAula(id);
const lerUm = dir => {
  if (!existsSync(dir)) return '';
  const f = readdirSync(dir).find(x => x.endsWith('.txt') || (x.endsWith('.md') && !x.endsWith('.resumo.md')));
  return f ? readFileSync(join(dir, f), 'utf8') : '';
};
const transcricao = lerUm(join(aula.pasta, 'transcription'));
const resumoProf = lerUm(join(aula.pasta, 'summary'));
if (!transcricao && !resumoProf) { console.error('Sem transcrição nem resumo do professor.'); process.exit(1); }

// Faixas de "Aulas curtas". Usa a duração real do vídeo (--duracao mm:ss, campo `duracao` do
// list-lessons.js); sem ela, estima pelo tamanho da transcrição (~900 caracteres/min), o que
// erra perto dos cortes (a 2.3.2, de 10:56, foi estimada em 9,8 min e caiu na faixa de 5).
const dur = opt('duracao');
if (dur && !/^\d+:\d{2}$/.test(dur)) { console.error('--duracao deve ser mm:ss (ex.: 10:56)'); process.exit(1); }
const min = dur ? Number(dur.split(':')[0]) + Number(dur.split(':')[1]) / 60 : transcricao.length / 900;
console.log(`duração: ${dur ? dur + ' (informada)' : '~' + min.toFixed(1) + ' min (estimada pela transcrição)'}`);
const faixa = min >= 10 ? { n: 10, pal: '500 a 1000' } : min >= 5 ? { n: 5, pal: '250 a 500' } : { n: 3, pal: '100 a 250' };
const N = Number(opt('n') ?? faixa.n);

const saida = opt('out') ?? aula.pasta;
const dirResumo = join(saida, 'summary'), dirQuizz = join(saida, 'quizz');
mkdirSync(dirResumo, { recursive: true });
mkdirSync(dirQuizz, { recursive: true });
const arqResumo = join(dirResumo, `${aula.titulo}.resumo.md`);
const arqQuizz = join(dirQuizz, `quizz.${aula.titulo}.md`);
const arqGab = join(dirQuizz, `quizz.${aula.titulo}.gabarito.md`);
const gravar = (f, t) => {
  if (existsSync(f) && !args.includes('--force')) { console.log(`já existe, mantido: ${f}`); return false; }
  writeFileSync(f, t);
  console.log(`gravado: ${f}`);
  return true;
};

const fonte = `# TRANSCRIÇÃO\n${transcricao}\n\n# RESUMO DO PROFESSOR\n${resumoProf}`;

// 1. Resumo
let resumo;
if (args.includes('--so-quizz') && existsSync(arqResumo)) resumo = readFileSync(arqResumo, 'utf8');
else {
  const r = await chat([
    { role: 'system', content: 'Você escreve resumos de estudo em português do Brasil. Não acrescente nada que a aula não disse.' },
    { role: 'user', content: `Escreva um resumo próprio do conteúdo desta aula, cobrindo todos os conceitos apresentados pelo professor, na ordem dele. Tamanho: ${faixa.pal} palavras. Formato: Markdown, começando com "# ${aula.titulo} — resumo", depois um título "##" por conceito. Responda só com o Markdown.\n\n${fonte}` },
  ]);
  resumo = r.texto.trim() + '\n';
  console.log(`resumo: modelo ${r.model}`);
  gravar(arqResumo, resumo);
}

if (args.includes('--so-resumo')) { console.log('--so-resumo: quizz não gerado.'); process.exit(0); }

// 2. Quizz + gabarito (JSON validado)
const regras = readFileSync(join(RAIZ, '.claude/skills/next-class/references/quiz.md'), 'utf8').split('## Formato dos arquivos')[0];
function validar(t) {
  const q = extrairJson(t).perguntas;
  if (!Array.isArray(q)) throw new Error('JSON sem lista de perguntas');
  q.forEach((p, i) => {
    if (!p.enunciado || !p.alternativas || ['A', 'B', 'C', 'D'].some(l => !p.alternativas[l])) throw new Error(`pergunta ${i + 1} incompleta`);
    if (!'ABCD'.includes(p.correta)) throw new Error(`pergunta ${i + 1}: letra correta inválida`);
    if (!p.porque || !p.conceito) throw new Error(`pergunta ${i + 1}: sem explicação/conceito`);
  });
  return q.slice(0, N);
}
const r2 = await chat([
  { role: 'system', content: 'Você elabora quizzes difíceis e justos em português do Brasil. Responda somente com JSON válido.' },
  { role: 'user', content: `Crie NO MÁXIMO ${N} perguntas de múltipla escolha (A–D) sobre esta aula, seguindo estas regras de nível e relevância:\n\n${regras}\n\nRegras extras: distribua a letra correta entre A, B, C e D; as 4 alternativas com tamanho parecido (a correta NÃO pode ser a mais longa nem a mais detalhada); palavras absolutas ("sempre", "nunca", "só", "apenas", "elimina", "garante") não podem aparecer só nas erradas; nenhuma alternativa errada pode ser descartável por quem estudou pela metade; o enunciado não pode descrever a correta nem excluir as erradas; só use o que está na aula (e, se preciso, o que as aulas ANTERIORES ensinaram). É proibido usar, em pergunta ou alternativa, qualquer tema de aula POSTERIOR, inclusive o que o professor anuncia para o próximo vídeo.\n\nFormato de saída (JSON):\n{"perguntas":[{"enunciado":"...","alternativas":{"A":"...","B":"...","C":"...","D":"..."},"correta":"C","porque":"explicação da correta","erradas":{"A":"por que está errada","B":"...","D":"..."},"conceito":"nome curto","resumo":"enunciado resumido"}]}\n\nRESUMO GERADO:\n${resumo}\n\n${fonte}` },
], { validar, temperature: 0.5 });
const perguntas = r2.valor;
if (!perguntas.length) {
  console.log('SEM QUIZZ: a aula não ensina conteúdo que sustente perguntas (abertura/anúncio de temas). Só o resumo foi gerado.');
  process.exit(0);
}

// 3. Revisão programada (or-revisao.mjs): checagem por código dos vícios que entregam a resposta
// + revisão por outro modelo grátis (gabarito, escopo, alternativas descartáveis), corrigindo o
// apontado e checando de novo, até 3 checagens.
const pend = await revisarQuizz(perguntas, `${resumo}\n\n${fonte}`, { regras, modeloGerador: r2.model, rodadas: Number(opt('rodadas') ?? 3) });
if (pend.length) console.log('PENDENTE (revise à mão):', JSON.stringify(pend));
else console.log('revisão: OK');

// Embaralha as alternativas por código para distribuir a letra correta (modelos tendem a concentrar em B).
const alvo = [...'ABCD'.repeat(Math.ceil(perguntas.length / 4))].slice(0, perguntas.length).sort(() => Math.random() - 0.5);
perguntas.forEach((p, i) => {
  const outras = [...'ABCD'].filter(l => l !== p.correta).sort(() => Math.random() - 0.5);
  const ordem = {}; // letra nova -> letra antiga
  ordem[alvo[i]] = p.correta;
  [...'ABCD'].filter(l => l !== alvo[i]).forEach((l, k) => { ordem[l] = outras[k]; });
  const alt = {}, err = {};
  for (const l of 'ABCD') { alt[l] = p.alternativas[ordem[l]]; if (ordem[l] !== p.correta) err[l] = p.erradas?.[ordem[l]] ?? ''; }
  p.alternativas = alt; p.erradas = err; p.correta = alvo[i];
});
console.log(`quizz: modelo ${r2.model}, ${perguntas.length} perguntas`);

const txt = formatarQuizz(aula, perguntas);
gravar(arqQuizz, txt.quizz);
gravar(arqGab, txt.gabarito);
const dist = {};
perguntas.forEach(p => { dist[p.correta] = (dist[p.correta] ?? 0) + 1; });
console.log('distribuição das corretas:', JSON.stringify(dist));
