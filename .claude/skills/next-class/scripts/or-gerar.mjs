// Gera resumo (bsc), quizz e gabarito de uma aula via OpenRouter (modelos grátis).
// Uso: node .claude/skills/next-class/scripts/or-gerar.mjs <id> [--n 10] [--so-quizz] [--out <pasta>] [--force]
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { chat, extrairJson, acharAula, RAIZ, MODELOS } from './or-lib.mjs';

const args = process.argv.slice(2);
const id = args.find(a => /^\d+(\.\d+)+$/.test(a));
const opt = n => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
if (!id) { console.error('uso: or-gerar.mjs <id> [--n N] [--so-quizz] [--out pasta] [--force]'); process.exit(1); }

const aula = acharAula(id);
const lerUm = dir => {
  if (!existsSync(dir)) return '';
  const f = readdirSync(dir).find(x => x.endsWith('.txt') || (x.endsWith('.md') && !x.endsWith('.resumo.md')));
  return f ? readFileSync(join(dir, f), 'utf8') : '';
};
const transcricao = lerUm(join(aula.pasta, 'transcription'));
const resumoProf = lerUm(join(aula.pasta, 'summary'));
if (!transcricao && !resumoProf) { console.error('Sem transcrição nem resumo do professor.'); process.exit(1); }

// Faixas de "Aulas curtas" (estimadas pelo tamanho da transcrição, ~900 caracteres/min).
const min = transcricao.length / 900;
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
  { role: 'user', content: `Crie NO MÁXIMO ${N} perguntas de múltipla escolha (A–D) sobre esta aula, seguindo estas regras de nível e relevância:\n\n${regras}\n\nRegras extras: distribua a letra correta entre A, B, C e D; as 4 alternativas com tamanho parecido; só use o que está na aula (e, se preciso, o que as aulas ANTERIORES ensinaram). É proibido usar, em pergunta ou alternativa, qualquer tema de aula POSTERIOR, inclusive o que o professor anuncia para o próximo vídeo.\n\nFormato de saída (JSON):\n{"perguntas":[{"enunciado":"...","alternativas":{"A":"...","B":"...","C":"...","D":"..."},"correta":"C","porque":"explicação da correta","erradas":{"A":"por que está errada","B":"...","D":"..."},"conceito":"nome curto","resumo":"enunciado resumido"}]}\n\nRESUMO GERADO:\n${resumo}\n\n${fonte}` },
], { validar, temperature: 0.5 });
const perguntas = r2.valor;
if (!perguntas.length) {
  console.log('SEM QUIZZ: a aula não ensina conteúdo que sustente perguntas (abertura/anúncio de temas). Só o resumo foi gerado.');
  process.exit(0);
}

// 3. Validação por um segundo modelo (diferente do gerador): confere cada pergunta contra a aula.
const modelosOutros = MODELOS.filter(m => m !== r2.model);
const pend = [];
async function validarQuizz() {
  const lista = perguntas.map((p, i) => `${i + 1}. ${p.enunciado}\n` + 'ABCD'.split('').map(l => `   ${l}) ${p.alternativas[l]}`).join('\n') + `\n   Gabarito: ${p.correta}`).join('\n\n');
  const v = await chat([
    { role: 'system', content: 'Você é um revisor rigoroso de quizzes em português do Brasil. Responda somente com JSON válido.' },
    { role: 'user', content: `Revise o quizz abaixo contra o conteúdo da aula. Para cada pergunta, aponte problema SOMENTE se: (a) o gabarito está errado; (b) mais de uma alternativa é defensável; (c) a pergunta ou uma alternativa cobra ou cita algo que a aula NÃO ENSINOU, ou um tema de aula POSTERIOR (técnica ou conceito anunciado como "próximo vídeo"/"próxima aula", mesmo comparado ou contrastado; só vale o que a aula e as aulas ANTERIORES ensinaram) (inventado ou vindo de conhecimento externo; um tema apenas mencionado ou anunciado pelo professor, sem explicação, conta como NÃO ensinado); (d) alguma alternativa é absurda ou entrega a resposta. Não critique estilo.\n\nJSON: {"problemas":[{"pergunta":1,"problema":"..."}]}  (lista vazia se tudo OK)\n\nQUIZZ:\n${lista}\n\nAULA:\n${resumo}\n\n${fonte}` },
  ], { modelos: modelosOutros, validar: t => { const o = extrairJson(t); if (!Array.isArray(o.problemas)) throw new Error('JSON inválido'); return o.problemas; }, temperature: 0.1 });
  console.log(`validação: modelo ${v.model}, ${v.valor.length} problema(s)`);
  return v.valor;
}
try {
  for (let rodada = 1; rodada <= 2; rodada++) {
    const probs = (await validarQuizz()).filter(p => perguntas[p.pergunta - 1]);
    if (!probs.length) { pend.length = 0; break; }
    pend.length = 0; pend.push(...probs);
    if (rodada === 2) break;
    // pede a correção só das perguntas apontadas, ao gerador
    const corr = await chat([
      { role: 'system', content: 'Você elabora quizzes em português do Brasil. Responda somente com JSON válido.' },
      { role: 'user', content: `Corrija APENAS as perguntas apontadas, mantendo o mesmo formato. Se a pergunta cobra algo que a aula não disse ou um tema de aula posterior (anunciado como próxima aula), troque por outra pergunta sobre o mesmo conceito, baseada na aula.\n\nProblemas:\n${probs.map(p => `- Pergunta ${p.pergunta}: ${p.problema}`).join('\n')}\n\nPerguntas atuais (JSON):\n${JSON.stringify(probs.map(p => ({ pergunta: p.pergunta, ...perguntas[p.pergunta - 1] })))}\n\nResponda: {"perguntas":[{"pergunta":<número original>,"enunciado":"","alternativas":{"A":"","B":"","C":"","D":""},"correta":"","porque":"","erradas":{},"conceito":"","resumo":""}]}\n\nAULA:\n${resumo}\n\n${fonte}` },
    ], { validar: t => { const q = extrairJson(t).perguntas; if (!Array.isArray(q) || q.some(x => !x.alternativas || !'ABCD'.includes(x.correta) || !x.enunciado)) throw new Error('JSON inválido'); return q; }, temperature: 0.3 });
    corr.valor.forEach(c => { if (perguntas[c.pergunta - 1]) perguntas[c.pergunta - 1] = c; });
  }
} catch (e) { console.log('validação não concluída:', e.message.split('\n')[0]); pend.push({ pergunta: 0, problema: 'validação não concluída' }); }
if (pend.length) console.log('PENDENTE (revise à mão):', JSON.stringify(pend));
else console.log('validação: OK');

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

const cab = `# Quizz — ${aula.titulo}\n\n**Capítulo:** ${aula.capitulo} · **Aula:** ${aula.numero}\n**Base:** material da aula\n\n---\n\n`;
gravar(arqQuizz, cab + perguntas.map((p, i) => `## ${i + 1}. ${p.enunciado}\n` + 'ABCD'.split('').map(l => `- ${l}) ${p.alternativas[l]}`).join('\n')).join('\n\n') + '\n');
gravar(arqGab, `# Gabarito — ${aula.titulo}\n\n` + perguntas.map((p, i) =>
  `## ${i + 1}. ${p.resumo ?? p.enunciado}\n**Correta: ${p.correta}**\n**Por quê:** ${p.porque}\n` +
  Object.entries(p.erradas ?? {}).filter(([l]) => l !== p.correta).map(([l, t]) => `- **${l}:** ${t}`).join('\n') +
  `\n**Conceito:** ${p.conceito}`).join('\n\n') + '\n');
const dist = {};
perguntas.forEach(p => { dist[p.correta] = (dist[p.correta] ?? 0) + 1; });
console.log('distribuição das corretas:', JSON.stringify(dist));
