// Revisa um quizz básico já gravado com a revisão programada (or-revisao.mjs), sem gerar tudo de novo.
// Uso: node .claude/skills/next-class/scripts/or-revisar.mjs <id> [<id> ...] [--checar] [--rodadas 3] [--force]
//   --checar   só a checagem por código (sem modelo, sem gravar); aceita vários ids.
//   --force    revisa mesmo se o quizz já foi respondido (o resultado.md e o acompanhamento.md
//              continuam apontando para as letras antigas; use só se o usuário pedir).
// Mantém a numeração, o conceito e a letra correta de cada pergunta; guarda os originais em *.bak.
import { readFileSync, writeFileSync, existsSync, readdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { acharAula, lerQuizz, formatarQuizz, RAIZ } from './or-lib.mjs';
import { checarQuizz, revisarQuizz } from './or-revisao.mjs';

const args = process.argv.slice(2);
const ids = args.filter(a => /^\d+(\.\d+)+$/.test(a));
const opt = n => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
if (!ids.length) { console.error('uso: or-revisar.mjs <id> [<id> ...] [--checar] [--rodadas N] [--force]'); process.exit(1); }
const soChecar = args.includes('--checar');
if (!soChecar && ids.length > 1) { console.error('A revisão com modelo é uma aula por vez (vários ids só com --checar).'); process.exit(1); }

const arquivos = aula => {
  const d = join(aula.pasta, 'quizz');
  return { q: join(d, `quizz.${aula.titulo}.md`), g: join(d, `quizz.${aula.titulo}.gabarito.md`), r: join(d, `quizz.${aula.titulo}.resultado.md`) };
};

for (const id of ids) {
  const aula = acharAula(id);
  const f = arquivos(aula);
  if (!existsSync(f.q) || !existsSync(f.g)) { console.log(`${id}: quizz não encontrado em ${join(aula.pasta, 'quizz')}`); continue; }
  const perguntas = lerQuizz(f.q, f.g);
  const det = checarQuizz(perguntas);
  const afetadas = [...new Set(det.map(d => d.pergunta))];
  console.log(`${id} — ${aula.titulo}: ${afetadas.length}/${perguntas.length} pergunta(s) com vício pelo código`);
  if (soChecar) { det.forEach(d => console.log(`  Q${d.pergunta}: ${d.problema}`)); continue; }

  // quizz já respondido: as letras do resultado.md e do acompanhamento.md deixariam de bater
  const acomp = existsSync(join(RAIZ, 'acompanhamento.md')) ? readFileSync(join(RAIZ, 'acompanhamento.md'), 'utf8') : '';
  const tentado = existsSync(f.r) || acomp.split('\n').some(l => l.startsWith(`| ${id} |`) && /\| (✅|❌)[^|]*\| [^|]*\|\s*$/.test(l));
  if (tentado && !args.includes('--force')) {
    console.log('Este quizz já foi respondido; revisar trocaria as perguntas que o resultado registra. Use --force só se o usuário pedir.');
    process.exit(1);
  }

  const lerUm = (dir, filtro) => {
    if (!existsSync(dir)) return '';
    const a = readdirSync(dir).find(filtro);
    return a ? readFileSync(join(dir, a), 'utf8') : '';
  };
  const resumo = lerUm(join(aula.pasta, 'summary'), x => x.endsWith('.resumo.md'));
  const resumoProf = lerUm(join(aula.pasta, 'summary'), x => x.endsWith('.txt') || (x.endsWith('.md') && !x.endsWith('.resumo.md')));
  const transcricao = lerUm(join(aula.pasta, 'transcription'), x => x.endsWith('.txt') || x.endsWith('.md'));
  if (!transcricao && !resumoProf) { console.error('Sem transcrição nem resumo do professor para conferir o quizz.'); process.exit(1); }
  const aulaTxt = `# RESUMO GERADO\n${resumo}\n\n# TRANSCRIÇÃO\n${transcricao}\n\n# RESUMO DO PROFESSOR\n${resumoProf}`;
  const regras = readFileSync(join(RAIZ, '.claude/skills/next-class/references/quiz.md'), 'utf8').split('## Formato dos arquivos')[0];

  const letras = perguntas.map(p => p.correta);
  const antes = JSON.stringify(perguntas);
  const pend = await revisarQuizz(perguntas, aulaTxt, { regras, rodadas: Number(opt('rodadas') ?? 3) });

  // devolve a correta à letra original (a distribuição já estava feita)
  perguntas.forEach((p, i) => {
    const alvo = letras[i];
    if (p.correta === alvo) return;
    const troca = p.correta;
    [p.alternativas[alvo], p.alternativas[troca]] = [p.alternativas[troca], p.alternativas[alvo]];
    p.erradas = { ...(p.erradas ?? {}) };
    p.erradas[troca] = p.erradas[alvo] ?? '';
    delete p.erradas[alvo];
    p.correta = alvo;
  });

  if (JSON.stringify(perguntas) === antes) console.log('Nenhuma pergunta mudou; arquivos mantidos.');
  else {
    copyFileSync(f.q, f.q + '.bak');
    copyFileSync(f.g, f.g + '.bak');
    const txt = formatarQuizz(aula, perguntas);
    writeFileSync(f.q, txt.quizz);
    writeFileSync(f.g, txt.gabarito);
    console.log(`gravado: ${f.q}\ngravado: ${f.g}\n(originais em *.bak)`);
  }
  if (pend.length) console.log('PENDENTE (revise à mão):', JSON.stringify(pend));
  else console.log('revisão: OK');
}
