// Aplica o quizz básico de uma aula no terminal, sem gastar tokens do Claude.
// Uso: node .claude/skills/next-class/scripts/or-aplicar.mjs <id> [--sem-refacao]
// Sem tentativa anterior: aplica do início. Com erradas pendentes: só refaz as erradas. Tudo certo: pergunta se refaz do início (--reiniciar força).
// Grava o resultado, atualiza o acompanhamento.md e refaz as erradas com perguntas novas (OpenRouter).
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import readline from 'node:readline/promises';
import { chat, extrairJson, acharAula, RAIZ } from './or-lib.mjs';
import { checarVicios, corrigir } from './or-revisao.mjs';

const args = process.argv.slice(2);
const id = args.find(a => /^\d+(\.\d+)+$/.test(a));
if (!id) { console.error('uso: or-aplicar.mjs <id> [--sem-refacao]'); process.exit(1); }

const aula = acharAula(id);
const dirQ = join(aula.pasta, 'quizz');
const arqQ = join(dirQ, `quizz.${aula.titulo}.md`);
const arqG = join(dirQ, `quizz.${aula.titulo}.gabarito.md`);
const arqR = join(dirQ, `quizz.${aula.titulo}.resultado.md`);
if (!existsSync(arqQ) || !existsSync(arqG)) { console.error(`Quizz não encontrado em ${dirQ}. Rode or-gerar.mjs ${id} antes.`); process.exit(1); }

// ---- leitura dos arquivos -------------------------------------------------
const blocos = t => t.split(/^## /m).slice(1);
const perguntas = blocos(readFileSync(arqQ, 'utf8')).map(b => {
  const [titulo, ...resto] = b.trim().split('\n');
  const alt = {};
  resto.forEach(l => { const m = l.match(/^- ([A-D])\) (.*)/); if (m) alt[m[1]] = m[2]; });
  return { enunciado: titulo.replace(/^\d+\.\s*/, ''), alt };
});
const gabarito = blocos(readFileSync(arqG, 'utf8')).map(b => ({
  correta: b.match(/\*\*Correta: ([A-D])\*\*/)?.[1],
  porque: b.match(/\*\*Por quê:\*\* (.*)/)?.[1] ?? '',
  erradas: Object.fromEntries([...b.matchAll(/^- \*\*([A-D]):\*\* (.*)/gm)].map(m => [m[1], m[2]])),
  conceito: b.match(/\*\*Conceito:\*\* (.*)/)?.[1] ?? '',
}));
if (perguntas.length !== gabarito.length || gabarito.some(g => !g.correta)) { console.error('Quizz e gabarito não batem.'); process.exit(1); }

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const hoje = new Date().toISOString().slice(0, 10);

async function perguntar(p, g, rotulo) {
  console.log(`\n${rotulo}. ${p.enunciado}`);
  for (const l of 'ABCD') console.log(`  ${l}) ${p.alt[l]}`);
  let r;
  do { r = (await rl.question('\nSua resposta (A-D): ')).trim().toUpperCase(); } while (!/^[A-D]$/.test(r));
  if (r === g.correta) console.log(`✅ Correto! ${g.porque}`);
  else {
    console.log(`❌ Errado. Correta: ${g.correta}. ${g.porque}`);
    for (const [l, t] of Object.entries(g.erradas)) if (l !== g.correta) console.log(`   ${l}: ${t}`);
  }
  return r;
}

// ---- estado do quizz (pelo acompanhamento.md, coluna Padrão) ---------------
const arqA = join(RAIZ, 'acompanhamento.md');
let linhas = readFileSync(arqA, 'utf8').split('\n');
const ehLinha = (l, q) => l.startsWith(`| ${id} | `) && l.split('|')[3]?.trim() === `q${q}`;
const celulas = linhas.filter(l => l.startsWith(`| ${id} | `)).map(l => ({ q: Number(l.split('|')[3].trim().replace('q', '')), v: (l.split('|')[4] ?? '').trim() }));
const jaTentou = celulas.some(c => /[✅❌]/.test(c.v));
const pendentes = celulas.filter(c => c.v.includes('❌')).map(c => c.q - 1).filter(i => i >= 0 && i < perguntas.length);

// Sem tentativa: aplica do início. Tentou e há erradas: só refaz as erradas. Tentou e acertou tudo: pergunta.
let modo = 'inicio';
if (args.includes('--reiniciar')) modo = 'inicio';
else if (jaTentou && pendentes.length) {
  modo = 'pendentes';
  console.log(`
O quizz de ${id} já foi respondido e há ${pendentes.length} questão(ões) pendente(s): ${pendentes.map(i => 'q' + (i + 1)).join(', ')}. Vou reaplicar só as pendentes, com perguntas novas. (Para refazer do início: --reiniciar.)`);
} else if (jaTentou) {
  const o = (await rl.question(`
O quizz de ${id} já foi respondido e não há questões incorretas pendentes. Deseja refazer do início? (s/n) `)).trim().toLowerCase();
  if (o !== 's') { rl.close(); console.log('Nada a fazer.'); process.exit(0); }
}

function celula(q, valor) {
  const i = linhas.findIndex(l => ehLinha(l, q));
  if (i >= 0) { const c = linhas[i].split('|'); c[4] = ` ${valor} `; linhas[i] = c.join('|'); return; }
  const ult = linhas.reduce((a, l, k) => (/^\| \S+ \| .* \| q\d+ \|/.test(l) ? k : a), -1);
  linhas.splice(ult + 1, 0, `| ${id} | ${aula.titulo} | q${q} | ${valor} | — |`);
}
const lerCel = q => { const l = linhas.find(x => ehLinha(x, q)); const m = l?.split('|')[4]?.match(/(✅|❌)(?: (\d+)x)?/); return m ? { ok: m[1] === '✅', n: Number(m[2] ?? 0) } : { ok: false, n: 0 }; };
const salvarAcomp = (nota) => {
  const t = linhas.join('\n').replace(/^Atualizado em .*\./m, `Atualizado em ${hoje}.`);
  writeFileSync(arqA, t.trimEnd() + (nota ? `
${nota}` : '') + '\n');
  linhas = t.split('\n');
};

// ---- aplicação -------------------------------------------------------------
let erradas = pendentes;
if (modo === 'inicio') {
  console.log(`
Quizz: ${aula.titulo} (${perguntas.length} perguntas)`);
  const respostas = [];
  for (let i = 0; i < perguntas.length; i++) respostas.push(await perguntar(perguntas[i], gabarito[i], `${i + 1}/${perguntas.length}`));
  const acertos = respostas.filter((r, i) => r === gabarito[i].correta).length;
  console.log(`
Pontuação: ${acertos}/${perguntas.length}`);

  // resultado.md
  let tent = 1, base = `# Resultado — ${aula.titulo}
`;
  if (existsSync(arqR)) { base = readFileSync(arqR, 'utf8').trimEnd() + '\n'; tent = (base.match(/^## Tentativa /gm) ?? []).length + 1; }
  erradas = respostas.map((r, i) => i).filter(i => respostas[i] !== gabarito[i].correta);
  let sec = `
## Tentativa ${tent} — ${hoje}
**Pontuação:** ${acertos}/${perguntas.length}

| # | Resposta | Correta | |
|---|---|---|---|
` +
    respostas.map((r, i) => `| ${i + 1} | ${r} | ${gabarito[i].correta} | ${r === gabarito[i].correta ? '✅' : '❌'} |`).join('\n') + '\n';
  if (erradas.length) sec += '\n### Para refazer\n' + erradas.map(i => `- **Q${i + 1} — ${gabarito[i].conceito}:** marcou ${respostas[i]}, a correta era ${gabarito[i].correta}.`).join('\n') + '\n';
  writeFileSync(arqR, base + sec);

  // acompanhamento.md
  respostas.forEach((r, i) => celula(i + 1, r === gabarito[i].correta ? '✅' : '❌'));
  salvarAcomp(`- ${hoje}: ${id} (${aula.titulo}) padrão aplicado pelo terminal (or-aplicar): ${acertos}/${perguntas.length}.${erradas.length ? ' Erradas: ' + erradas.map(i => 'q' + (i + 1)).join(', ') + '.' : ''}`);
}

// ---- refação das erradas (perguntas novas, geradas no OpenRouter) ----------
if (erradas.length && !args.includes('--sem-refacao')) {
  console.log(`\nVamos refazer as ${erradas.length} errada(s), com perguntas novas sobre os mesmos conceitos.`);
  const fonte = (() => {
    const d = join(aula.pasta, 'summary'); const f = existsSync(d) && readdirSync(d).find(x => x.endsWith('.resumo.md'));
    const t = join(aula.pasta, 'transcription'); const ft = existsSync(t) && readdirSync(t).find(x => x.endsWith('.txt'));
    return (f ? readFileSync(join(d, f), 'utf8') : '') + (ft ? '\n\n--- TRANSCRIÇÃO ---\n' + readFileSync(join(t, ft), 'utf8') : '');
  })();
  const regras = readFileSync(join(RAIZ, '.claude/skills/next-class/references/quiz.md'), 'utf8').split('## Formato dos arquivos')[0];
  const notas = [];
  for (const i of erradas) {
    let passou = false, p, g, rod = 0;
    while (!passou && rod < 3) {
      rod++;
      let r;
      console.log(`\nGerando pergunta nova para a Q${i + 1} no OpenRouter. Pode levar alguns minutos...`);
      try {
        r = await chat([
          { role: 'system', content: 'Você elabora perguntas difíceis e justas em português do Brasil. Responda somente com JSON válido.' },
          { role: 'user', content: `O aluno errou esta pergunta:\n${perguntas[i].enunciado}\nConceito: ${gabarito[i].conceito}\n\nCrie UMA pergunta NOVA (cenário diferente, sem repetir o texto da original) sobre o mesmo conceito, de múltipla escolha A–D, seguindo estas regras:\n${regras}\n\nREGRA DE ESCOPO (obrigatória): a pergunta e TODAS as alternativas só podem usar conceitos, termos e afirmações que a aula abaixo efetivamente ensina. É proibido usar termos ou mecanismos que a aula não menciona (ex.: KV cache, FLOPs, prefill, decoding, largura de banda, VRAM, quantização), mesmo que sejam corretos. A dificuldade vem do cenário e do raciocínio sobre o que a aula ensinou, nunca de jargão externo. Se um termo não aparece no texto da aula, não use. Também é proibido citar, comparar ou contrastar com temas de aulas POSTERIORES (o que o professor anuncia para o próximo vídeo); só vale a aula e o que as aulas anteriores ensinaram.\n\nBase de conteúdo (resumo gerado + transcrição da aula):\n${fonte}\n\nJSON: {"enunciado":"...","alternativas":{"A":"","B":"","C":"","D":""},"correta":"B","porque":"...","erradas":{"A":"...","C":"...","D":"..."}}`.replace(/\n{3,}/g, '\n\n') },
        ], { validar: t => { const o = extrairJson(t); if (!o.enunciado || ['A', 'B', 'C', 'D'].some(l => !o.alternativas?.[l]) || !'ABCD'.includes(o.correta)) throw new Error('JSON inválido'); return o; }, temperature: 0.7 });
      } catch (e) { console.log(`Não consegui gerar a refação da Q${i + 1}: ${e.message}`); break; }
      let n = r.valor;
      // revisão programada: se a checagem por código achar vício que entrega a resposta, pede uma correção
      const vicios = checarVicios(n);
      if (vicios.length) {
        try {
          const lista = [n];
          await corrigir(lista, vicios.map(problema => ({ pergunta: 1, problema })), fonte, { regras });
          n = lista[0];
        } catch { /* segue com a pergunta como veio */ }
      }
      // embaralha para a correta cair numa letra aleatória
      const alvo = 'ABCD'[Math.floor(Math.random() * 4)];
      const outras = [...'ABCD'].filter(l => l !== n.correta).sort(() => Math.random() - 0.5);
      const ordem = { [alvo]: n.correta };[...'ABCD'].filter(l => l !== alvo).forEach((l, k) => { ordem[l] = outras[k]; });
      p = { enunciado: n.enunciado, alt: Object.fromEntries([...'ABCD'].map(l => [l, n.alternativas[ordem[l]]])) };
      g = { correta: alvo, porque: n.porque, erradas: Object.fromEntries([...'ABCD'].filter(l => l !== alvo).map(l => [l, n.erradas?.[ordem[l]] ?? ''])) };
      const resp = await perguntar(p, g, `Refação da Q${i + 1}`);
      passou = resp === g.correta;
      const c = lerCel(i + 1);
      celula(i + 1, `${passou ? '✅' : '❌'} ${c.n + 1}x`);
      salvarAcomp();
      notas.push(`- **Q${i + 1} — ${gabarito[i].conceito}:** ${passou ? '✅' : '❌'} na ${c.n + 1}ª refação.`);
      if (!passou) { const o = (await rl.question('\nTentar outra pergunta nova sobre o mesmo conceito? (s/n) ')).trim().toLowerCase(); if (o !== 's') break; }
    }
  }
  if (notas.length) writeFileSync(arqR, (existsSync(arqR) ? readFileSync(arqR, 'utf8') : `# Resultado — ${aula.titulo}
`).trimEnd() + `\n\n### Refação — ${hoje}\n` + notas.join('\n') + '\n');
}
rl.close();
console.log('\nResultado e acompanhamento.md atualizados. Rode /upd-dashboard no Claude Code (ou me peça) para sincronizar o dashboard.');
