#!/usr/bin/env node
// Grava a transcrição e o resumo capturados na estrutura de pastas da aula.
//
// Uso (a partir da raiz do projeto):
//   node .claude/skills/next-class/scripts/write-lesson.mjs \
//     --modulo "1 - Fundamentos de IA Generativa" --capitulo "2 - Aprofundando na IA e LLM" \
//     --numero 4 --titulo "Transformers"
//
// Lê .playwright-mcp/capture.json (gerado pelo browser_evaluate com filename),
// nunca sobrescreve arquivo existente e apaga o capture.json ao terminar.
import fs from 'node:fs';
import path from 'node:path';

const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];
const { modulo, capitulo, numero, titulo } = args;
const capturePath = args.capture || '.playwright-mcp/capture.json';
if (!modulo || !capitulo || !numero || !titulo) {
  console.error('Faltam argumentos: --modulo "<n - nome>" --capitulo "<n - nome>" --numero <n> --titulo "<título da aula>"');
  process.exit(1);
}
// safe() remove barras: um caminho aqui viraria, sem erro, uma pasta com os nomes colados.
if (/[\\/]/.test(modulo) || /[\\/]/.test(capitulo)) {
  console.error('--modulo e --capitulo recebem só o nome da pasta, sem barras.');
  process.exit(1);
}

// Caracteres proibidos em nomes no Windows; ":" vira " -" para manter a leitura do título.
// A plataforma entrega acentos decompostos (NFD); sem normalizar, "ç" vira um nome
// visualmente igual e diferente do que se digita, e o arquivo "não existe" ao abrir.
const safe = (s) =>
  s
    .normalize('NFC')
    .replace(/\s*:\s*/g, ' - ')
    .replace(/[\\/*?"<>|]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[. ]+$/, '')
    .trim();

let capture = JSON.parse(fs.readFileSync(capturePath, 'utf8'));
if (typeof capture === 'string') capture = JSON.parse(capture);

const name = safe(titulo);
const chapterDir = path.join(safe(modulo), safe(capitulo));
// Reaproveita a pasta da aula se já existir uma com o mesmo número (mesmo com outro nome).
let lessonFolder = `${numero} - ${name}`;
if (fs.existsSync(chapterDir)) {
  const existing = fs
    .readdirSync(chapterDir, { withFileTypes: true })
    .find((d) => d.isDirectory() && new RegExp(`^0*${numero}\\s*-`).test(d.name));
  if (existing) lessonFolder = existing.name;
}
const dir = path.join(chapterDir, lessonFolder);
// advanced/ é criada pela skill next-class-adv, só quando o usuário pede o conteúdo avançado.
for (const sub of ['transcription', 'summary', 'quizz']) fs.mkdirSync(path.join(dir, sub), { recursive: true });

const result = { pasta: dir, nome: name, gravados: [], jaExistiam: [], semConteudo: [] };
const write = (rel, content, label) => {
  const file = path.join(dir, rel);
  if (!content || !content.trim()) return result.semConteudo.push(label);
  if (fs.existsSync(file)) return result.jaExistiam.push(file);
  fs.writeFileSync(file, content.trim() + '\n', 'utf8');
  result.gravados.push(file);
};
write(path.join('transcription', `${name}.txt`), capture.transcricao, 'transcrição');
write(path.join('summary', `${name}.md`), capture.resumo && `# ${titulo.normalize('NFC')}\n\n${capture.resumo}`, 'resumo do professor');

fs.rmSync(capturePath, { force: true });
console.log(JSON.stringify(result, null, 2));
