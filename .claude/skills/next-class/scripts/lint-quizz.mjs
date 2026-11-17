// Lint determinístico dos vícios que entregam a resposta (references/quiz.md).
// Uso: node lint-quizz.mjs "<quizz.<título>.md>" "<quizz.<título>.gabarito.md>"
// Sai com código 1 se houver alerta. Não substitui o validador: só pega o mecânico.
import { readFileSync } from 'node:fs';

const [perguntasPath, gabaritoPath] = process.argv.slice(2);
if (!perguntasPath || !gabaritoPath) {
  console.error('Uso: node lint-quizz.mjs <perguntas.md> <gabarito.md>');
  process.exit(2);
}

const ABSOLUTOS = [
  'sempre', 'nunca', 'só', 'somente', 'apenas', 'únic[oa]s?', 'todos', 'todas', 'nenhum[a]?',
  'de vez', 'elimina\\w*', 'garante\\w*', 'qualquer', 'jamais', 'completamente', 'totalmente',
  'impossível', 'obrigatoriamente', 'exclusivamente',
].map((p) => new RegExp(`(?<![\\p{L}])(${p})(?![\\p{L}])`, 'iu'));
const STOP = new Set(('de da do das dos que para por com uma um os as em no na nos nas se ao aos ou e é '
  + 'como mais mas já só não sua seu suas seus isso essa esse esta este pela pelo entre sobre quando').split(' '));

const lerPerguntas = (txt) =>
  [...txt.matchAll(/^## (\d+)\. (.+)\n((?:- [A-D]\) .+\n?){4})/gm)].map((m) => ({
    n: +m[1],
    enunciado: m[2],
    alts: Object.fromEntries([...m[3].matchAll(/^- ([A-D])\) (.+)$/gm)].map((a) => [a[1], a[2]])),
  }));
const lerGabarito = (txt) =>
  [...txt.matchAll(/^## (\d+)\..*\n\*\*Correta: ([A-D])\*\*/gm)].map((m) => ({ n: +m[1], letra: m[2] }));

const perguntas = lerPerguntas(readFileSync(perguntasPath, 'utf8') + '\n');
const gabarito = lerGabarito(readFileSync(gabaritoPath, 'utf8'));
const alertas = [];
const palavras = (s) => new Set((s.toLowerCase().match(/[\p{L}]{5,}/gu) ?? []).filter((w) => !STOP.has(w)));

if (perguntas.length !== gabarito.length) {
  alertas.push(`Geral: ${perguntas.length} perguntas e ${gabarito.length} entradas no gabarito`);
}

for (const p of perguntas) {
  const g = gabarito.find((x) => x.n === p.n);
  if (!g) continue;
  const certa = g.letra;
  const erradas = Object.keys(p.alts).filter((l) => l !== certa);

  // 1) correta mais longa
  const tam = Object.fromEntries(Object.entries(p.alts).map(([l, t]) => [l, t.length]));
  const maxErrada = Math.max(...erradas.map((l) => tam[l]));
  const mediaErradas = erradas.reduce((s, l) => s + tam[l], 0) / erradas.length;
  if (tam[certa] > maxErrada * 1.1) alertas.push(`Q${p.n}: a correta (${certa}) é a mais longa (${tam[certa]} vs. máx. ${maxErrada})`);
  if (tam[certa] > mediaErradas * 1.25) alertas.push(`Q${p.n}: a correta é >25% maior que a média das erradas (${tam[certa]} vs. ${Math.round(mediaErradas)})`);

  // 2) absolutos só nas erradas
  const abs = (t) => ABSOLUTOS.filter((r) => r.test(t)).map((r) => t.match(r)[1].toLowerCase());
  const absCerta = abs(p.alts[certa]);
  const absErradas = erradas.flatMap((l) => abs(p.alts[l]).map((w) => `${l}:"${w}"`));
  if (absErradas.length && !absCerta.length) alertas.push(`Q${p.n}: absolutos só nas erradas (${absErradas.join(', ')})`);

  // 3) enunciado repete palavras só da correta
  const wEnun = palavras(p.enunciado);
  const wOutras = new Set(erradas.flatMap((l) => [...palavras(p.alts[l])]));
  const soCerta = [...palavras(p.alts[certa])].filter((w) => wEnun.has(w) && !wOutras.has(w));
  if (soCerta.length) alertas.push(`Q${p.n}: o enunciado repete palavras que só aparecem na correta (${soCerta.join(', ')})`);
}

// 4) distribuição das letras
const cont = { A: 0, B: 0, C: 0, D: 0 };
gabarito.forEach((g) => cont[g.letra]++);
const total = gabarito.length;
const max = Math.max(...Object.values(cont));
if (total >= 5 && max > Math.ceil(total / 4) + 1) alertas.push(`Letras corretas concentradas: ${JSON.stringify(cont)}`);
if (total >= 3 && Object.values(cont).filter((v) => v === 0).length > (total >= 8 ? 0 : 4 - Math.min(total, 4))) {
  alertas.push(`Letras corretas sem variedade: ${JSON.stringify(cont)}`);
}

console.log(`Letras corretas: ${JSON.stringify(cont)}`);
if (alertas.length) {
  console.log(`\n${alertas.length} alerta(s):`);
  alertas.forEach((a) => console.log(`- ${a}`));
  process.exit(1);
}
console.log('Sem alertas.');
