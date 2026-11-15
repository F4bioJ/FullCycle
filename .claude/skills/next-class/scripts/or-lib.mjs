// Utilitários compartilhados dos scripts OpenRouter (or-gerar.mjs, or-aplicar.mjs).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { OpenRouter } from '@openrouter/sdk';

export const RAIZ = resolve(import.meta.dirname, '..', '..', '..', '..');

// Modelos grátis em ordem de preferência; o próximo é usado se o anterior falhar.
// Sobrescreva com OPENROUTER_MODELS="a,b,c".
export const MODELOS = (process.env.OPENROUTER_MODELS ||
  'nvidia/nemotron-3-ultra-550b-a55b:free,google/gemma-4-31b-it:free,nvidia/nemotron-3.5-super-vl:free,google/gemma-4-26b-a4b-it:free')
  .split(',').map(s => s.trim()).filter(Boolean);

export function lerEnv(chave) {
  if (process.env[chave]) return process.env[chave];
  const f = join(RAIZ, '.env');
  if (!existsSync(f)) return undefined;
  for (const l of readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = l.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && m[1] === chave) return m[2].replace(/^["']|["']$/g, '');
  }
}

let client;
function cliente() {
  const apiKey = lerEnv('OPENROUTER_API_KEY');
  if (!apiKey) throw new Error('OPENROUTER_API_KEY não encontrada no .env');
  // Tempo limite por chamada: modelo grátis às vezes trava sem responder; estourou, passa para o próximo.
  const timeoutMs = Number(process.env.OPENROUTER_TIMEOUT_MS || 360000);
  return (client ??= new OpenRouter({ apiKey, timeoutMs }));
}

// Chama os modelos em ordem até um responder (e, se `validar` existir, até a resposta passar nele).
export async function chat(messages, { validar, temperature = 0.4, modelos = MODELOS } = {}) {
  const erros = [];
  for (const model of modelos) {
    for (let tentativa = 1; tentativa <= 2; tentativa++) {
      try {
        const r = await cliente().chat.send({ chatRequest: { model, messages, temperature, stream: false } });
        const texto = r.choices?.[0]?.message?.content;
        const t = typeof texto === 'string' ? texto : (texto ?? []).map(p => p.text ?? '').join('');
        if (!t.trim()) throw new Error('resposta vazia');
        const valor = validar ? validar(t) : t;
        return { texto: t, valor, model };
      } catch (e) {
        erros.push(`${model} (tentativa ${tentativa}): ${e.message}`);
      }
    }
  }
  throw new Error('Todos os modelos falharam:\n' + erros.join('\n'));
}

export function extrairJson(t) {
  const m = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  return JSON.parse((m ? m[1] : t.slice(t.indexOf('{'), t.lastIndexOf('}') + 1)).trim());
}

// Lê quizz + gabarito gravados para a estrutura usada pelos scripts:
// { enunciado, alternativas: {A..D}, correta, porque, erradas: {letra: texto}, conceito, resumo }.
export function lerQuizz(arqQ, arqG) {
  const blocos = t => t.split(/^## /m).slice(1);
  const qs = blocos(readFileSync(arqQ, 'utf8')).map(b => {
    const [titulo, ...resto] = b.trim().split('\n');
    const alternativas = {};
    resto.forEach(l => { const m = l.match(/^- ([A-D])\) (.*)/); if (m) alternativas[m[1]] = m[2].trim(); });
    return { enunciado: titulo.replace(/^\d+\.\s*/, '').trim(), alternativas };
  });
  const gs = blocos(readFileSync(arqG, 'utf8')).map(b => ({
    resumo: b.split('\n')[0].replace(/^\d+\.\s*/, '').trim(),
    correta: b.match(/\*\*Correta: ([A-D])\*\*/)?.[1],
    porque: b.match(/\*\*Por quê:\*\* (.*)/)?.[1] ?? '',
    erradas: Object.fromEntries([...b.matchAll(/^- \*\*([A-D]):\*\* (.*)/gm)].map(m => [m[1], m[2]])),
    conceito: b.match(/\*\*Conceito:\*\* (.*)/)?.[1] ?? '',
  }));
  if (qs.length !== gs.length || gs.some(g => !g.correta) || qs.some(q => ['A', 'B', 'C', 'D'].some(l => !q.alternativas[l])))
    throw new Error('quizz e gabarito não batem');
  return qs.map((q, i) => ({ ...q, ...gs[i] }));
}

// Texto dos arquivos quizz.<título>.md e quizz.<título>.gabarito.md (formato de references/quiz.md).
export function formatarQuizz(aula, perguntas) {
  const L = ['A', 'B', 'C', 'D'];
  const quizz = `# Quizz — ${aula.titulo}\n\n**Capítulo:** ${aula.capitulo} · **Aula:** ${aula.numero}\n**Base:** material da aula\n\n---\n\n` +
    perguntas.map((p, i) => `## ${i + 1}. ${p.enunciado}\n` + L.map(l => `- ${l}) ${p.alternativas[l]}`).join('\n')).join('\n\n') + '\n';
  const gabarito = `# Gabarito — ${aula.titulo}\n\n` + perguntas.map((p, i) =>
    `## ${i + 1}. ${p.resumo || p.enunciado}\n**Correta: ${p.correta}**\n**Por quê:** ${p.porque}\n` +
    L.filter(l => l !== p.correta).map(l => `- **${l}:** ${p.erradas?.[l] ?? ''}`).join('\n') +
    `\n**Conceito:** ${p.conceito}`).join('\n\n') + '\n';
  return { quizz, gabarito };
}

// Acha a pasta da aula pelo id: "2.1.1" (módulo.capítulo.aula) ou "2.4" (Fundamentos).
export function acharAula(id) {
  const p = id.split('.').map(Number);
  const [mod, cap, aula] = p.length === 2 ? [1, p[0], p[1]] : p;
  const sub = (dir, n) => readdirSync(dir).find(d => d.startsWith(`${n} - `) && statSync(join(dir, d)).isDirectory());
  const dMod = sub(RAIZ, mod); if (!dMod) throw new Error(`módulo ${mod} não encontrado`);
  const dCap = sub(join(RAIZ, dMod), cap); if (!dCap) throw new Error(`capítulo ${cap} não encontrado`);
  const dAula = sub(join(RAIZ, dMod, dCap), aula); if (!dAula) throw new Error(`aula ${aula} não encontrada`);
  return { pasta: join(RAIZ, dMod, dCap, dAula), capitulo: dCap, numero: aula, titulo: dAula.replace(/^\d+ - /, '') };
}
