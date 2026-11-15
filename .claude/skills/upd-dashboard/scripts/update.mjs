// Gera doc/dados.js (todos os dados do dashboard) a partir de acompanhamento.md, dados/plano.json e dados/plataforma.json.
// Uso: node .claude/skills/upd-dashboard/scripts/update.mjs [--dry-run] [--check] [--date AAAA-MM-DD]
// Roda da raiz do projeto. Função pura das entradas: mesma entrada, mesmo dados.js, byte a byte.
// --check sai com código 1 se doc/dados.js estiver diferente do que seria gerado.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const DRY = process.argv.includes("--dry-run");
const CHECK = process.argv.includes("--check");
const di = process.argv.indexOf("--date");
const DATE_ARG = di > 0 ? process.argv[di + 1] : null;
const ACOMP = "acompanhamento.md";
const PLANO = "dados/plano.json";
const PLAT = "dados/plataforma.json";
const PLAT_PE = "dados/plataforma-pe.json";   // opcional: snapshot da página de conteúdos do Prompt Engineering
const OUT = "doc/dados.js";

const txt = f => readFileSync(f, "utf8");
const falha = m => { console.error("ERRO: " + m); process.exit(1); };
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const dt = s => { if (!ISO.test(s)) falha(`Data inválida: "${s}"`); const [y, m, d] = s.split("-").map(Number); return `new Date(${y}, ${m - 1}, ${d})`; };
const dias = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 864e5);
const ddmm = s => `${s.slice(8, 10)}/${s.slice(5, 7)}`;

/* ---------- 1. acompanhamento.md -> QUIZ ---------- */
function celula(raw) {
  const c = raw.trim();
  if (c === "—" || /^n\/a$/i.test(c) || c.startsWith("✂")) return null;
  let m = c.match(/^✅(?:\s+(\d+)x)?$/);
  if (m) return m[1] ? +m[1] : 0;
  m = c.match(/^❌(?:\s+(\d+)x)?$/);
  if (m) return -(m[1] ? +m[1] : 1);
  falha(`Célula não reconhecida em ${ACOMP}: "${c}"`);
}

function lerQuiz(md) {
  const aulas = [];
  for (const linha of md.split(/\r?\n/)) {
    const p = linha.split("|").map(s => s.trim());
    // | id | aula | qN | padrão | avançado |
    if (p.length < 7 || !/^q\d+$/.test(p[3]) || !/^\d+\.\d+/.test(p[1])) continue;
    let a = aulas[aulas.length - 1];
    if (!a || a.id !== p[1]) aulas.push(a = { id: p[1], nome: p[2], b: [], a: [] });
    a.b.push(celula(p[4]));
    a.a.push(celula(p[5]));
  }
  return aulas.map(a => ({ ...a, a: a.a.every(c => c === null) ? null : a.a }));
}

/* ---------- 2. plataforma + plano + quiz -> BLOCOS ---------- */
// Minutos por aula: duração real do snapshot, em segundos, arredondada de forma acumulada
// na ordem da plataforma (a soma dos blocos fecha no total real do módulo).
function minutosPlataforma(snap) {
  const out = {}; let ac = 0, prev = 0;
  for (const it of snap.itens) {
    if (it.tipo !== "video") continue;
    ac += it.seg; const nx = Math.round(ac / 60);
    out[it.id] = nx - prev; prev = nx;
  }
  return out;
}

function blocos(plano, quiz, snap) {
  const comQuiz = id => quiz.some(a => a.id === id && a.b.some(c => c !== null));
  const extra = new Set([...plano.vistas, ...plano.feitasExtra]);
  const porId = new Map(snap.itens.map(i => [i.id, i]));
  const mins = minutosPlataforma(snap);
  const short = id => id.includes("·") ? id.split("·").pop().trim() : id;
  const usados = new Set();
  const out = [];
  for (const g of plano.fundGrupos) {
    const runs = [];
    g.ids.forEach((id, i) => {
      const pid = String(g.base + i);
      const it = porId.get(pid);
      if (!it) falha(`Aula "${id}" aponta para o conteúdo ${pid}, que não está em dados/plataforma.json.`);
      if (it.tipo !== "video") falha(`Aula "${id}" (conteúdo ${pid}) não é vídeo na plataforma.`);
      usados.add(pid);
      // e = quizz registrado ou estudada sem quizz · o = só vista na plataforma · n = não vista
      const s = comQuiz(id) || extra.has(id) ? "e" : it.visto ? "o" : "n";
      const r = runs[runs.length - 1];
      if (r && r.s === s) { r.ids.push(id); r.min += mins[pid]; } else runs.push({ s, ids: [id], min: mins[pid] });
    });
    for (const r of runs) {
      const todo = r.ids.length === g.ids.length && g.nome;
      const n = todo ? g.nome
        : r.ids.length === 1 ? g.prefixo + short(r.ids[0])
        : `${g.prefixo}${short(r.ids[0])} a ${short(r.ids[r.ids.length - 1])}`;
      out.push({ n, aulas: r.ids.length, min: r.min, s: r.s });
    }
  }
  const sobra = snap.itens.filter(i => i.tipo === "video" && !usados.has(i.id));
  if (sobra.length) falha(`Aulas da plataforma sem lugar em fundGrupos: ${sobra.map(i => `${i.id} "${i.titulo}"`).join(", ")}. Acrescente-as em dados/plano.json.`);
  return out;
}

/* ---------- 3. passos: condição -> feito ---------- */
function expande(ref) {
  if (!ref.includes("..")) return [ref];
  // "2.12..2.22" ou "2.1.1..2.1.18": o prefixo dos dois lados precisa ser o mesmo.
  const m = ref.match(/^((?:\d+\.)+)(\d+)\.\.\1(\d+)$/);
  if (!m) falha(`Intervalo entre capítulos não suportado: "${ref}"`);
  return Array.from({ length: +m[3] - +m[2] + 1 }, (_, k) => `${m[1]}${+m[2] + k}`);
}
function passoFeito(c, quiz, plano) {
  if ("manual" in c) return !!c.manual;
  const comQuiz = id => quiz.some(a => a.id === id && a.b.some(x => x !== null));
  const extra = new Set([...plano.vistas, ...plano.feitasExtra]);
  return (c.quiz || []).flatMap(expande).every(comQuiz) && (c.vistas || []).every(id => extra.has(id) || comQuiz(id));
}

/* ---------- gera ---------- */
if (!existsSync(PLANO)) falha(`${PLANO} não existe`);
const plano = JSON.parse(txt(PLANO));
const md = txt(ACOMP);
const quiz = lerQuiz(md);
if (!existsSync(PLAT)) falha(`${PLAT} não existe (rode o snapshot da plataforma)`);
const snap = JSON.parse(txt(PLAT));
if (!quiz.length) falha(`Nenhuma questão encontrada em ${ACOMP}`);

const atual = DATE_ARG || (md.match(/Atualizado em (\d{4}-\d{2}-\d{2})/) || [])[1];
if (!atual) falha(`"Atualizado em AAAA-MM-DD" não encontrado em ${ACOMP} (ou passe --date)`);

const bl = blocos(plano, quiz, snap);
const totalMin = bl.reduce((a, b) => a + b.min, 0);
const estMin = bl.filter(b => b.s === "e").reduce((a, b) => a + b.min, 0);
const estAul = bl.filter(b => b.s === "e").reduce((a, b) => a + b.aulas, 0);
const totAul = bl.reduce((a, b) => a + b.aulas, 0);
const nDias = dias(plano.inicio, atual);
if (nDias <= 0) falha(`Data de atualização (${atual}) não é posterior ao início (${plano.inicio})`);
// Módulo de cada quizz: aula de peAulas = Prompt Engineering; o resto é Fundamentos.
const idsPE = new Set(plano.peAulas.map(a => a[1]));
quiz.forEach(a => { a.m = idsPE.has(a.id) ? "pe" : "fund"; });

// Aula do Prompt Engineering feita = quizz registrado. Sem quizz (práticas), vale o "visto" da plataforma
// (dados/plataforma-pe.json, casando pelo título) ou o id em `vistas`. Sem snapshot que ache a aula,
// a prática conta como feita se uma aula posterior já tem quizz.
const comQuizId = id => quiz.some(q => q.id === id && q.b.some(c => c !== null));
const ultPE = plano.peAulas.reduce((u, a, i) => comQuizId(a[1]) ? i : u, -1);
const norm = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const snapPE = existsSync(PLAT_PE) ? JSON.parse(txt(PLAT_PE)) : null;
const vistoPE = new Map((snapPE ? snapPE.itens : []).filter(i => i.tipo === "video").map(i => [norm(i.titulo), i.visto]));
const semSnap = [];
const peFeitas = plano.peAulas.filter((a, i) => {
  if (comQuizId(a[1]) || plano.vistas.includes(a[1])) return true;
  if (!a[4]) return false;
  const v = vistoPE.get(norm(a[2]));
  if (v !== undefined) return v;
  if (i < ultPE) semSnap.push(a[1]);
  return i < ultPE;
}).map(a => a[1]);
const feitaPE = new Set(peFeitas);
const peMin = plano.peAulas.filter(a => feitaPE.has(a[1])).reduce((s, a) => s + a[3], 0);
const ritmo = Math.round((estMin + peMin) / nDias * 10) / 10;

// Blocos do Prompt Engineering: um por capítulo (prefixo "2.N" do id).
const peBlocos = [];
plano.peAulas.forEach((a, i) => {
  const cap = a[1].split(".").slice(0, 2).join(".");
  let b = peBlocos.find(x => x.cap === cap);
  if (!b) peBlocos.push(b = { cap, n: (plano.peCapitulos || {})[cap] || `Cap. ${cap}`, aulas: 0, min: 0, feitas: 0, minFeitas: 0 });
  b.aulas++; b.min += a[3];
  if (feitaPE.has(a[1])) { b.feitas++; b.minFeitas += a[3]; }
});

const agenda = [...plano.agendaBase, ...plano.peAulas.filter(a => !a[4])];
const passos = plano.passos.map(([t, c]) => [t, passoFeito(c, quiz, plano)]);
const feitos = snap.itens.filter(i => i.visto).length, videos = snap.itens.filter(i => i.tipo === "video");
const pl = { pct: Math.round(feitos / snap.itens.length * 100), feitos, itens: snap.itens.length, aulasVistas: videos.filter(i => i.visto).length, aulas: videos.length, _em: snap.capturadoEm };

const linhas = a => "[\n" + a.map(x => "  " + JSON.stringify(x)).join(",\n") + "\n]";
const js = `/* GERADO por .claude/skills/upd-dashboard/scripts/update.mjs a partir de acompanhamento.md + dados/plano.json + dados/plataforma.json. Não edite. */
const ATUALIZADO = ${dt(atual)};
const INICIO = ${dt(plano.inicio)}, FIM = ${dt(plano.fim)}, META_DESIGN = ${dt(plano.metaDesign)};
const REFERENCIA_FUND = ${dt(plano.referenciaFund)};
const FUND_TOTAL_MIN = ${totalMin};
const RITMO_MEDIDO = ${ritmo};
const RITMO_PERIODO = ${JSON.stringify(`${ddmm(plano.inicio)} a ${ddmm(atual)}`)};
const PLATAFORMA = ${JSON.stringify({ pct: pl.pct, feitos: pl.feitos, itens: pl.itens, aulasVistas: pl.aulasVistas, aulas: pl.aulas, em: pl._em })};
const PLATAFORMA_PCT = ${pl.pct};
const BLOCOS = ${linhas(bl.map(({ n, aulas, min, s }) => ({ n, aulas, min, s })))};
const LIBERACOES = ${linhas(plano.liberacoes)};
const NOVEMBRO = ${linhas(plano.novembro)};
const PE_AULAS = ${linhas(plano.peAulas)};
const PE_FEITAS = ${JSON.stringify(peFeitas)};
const PE_BLOCOS = ${linhas(peBlocos.map(({ n, aulas, min, feitas, minFeitas }) => ({ n, aulas, min, feitas, minFeitas })))};
const AGENDA = ${linhas(agenda)};
const FEITAS_EXTRA = ${JSON.stringify([...plano.vistas, ...plano.feitasExtra])};
const PASSOS = ${linhas(passos)};
const QUIZ = ${JSON.stringify(quiz)};
`;

/* ---------- relatório ---------- */
const pend = quiz.flatMap(a => [
  ...a.b.map((c, i) => [c, a.id, "padrão", i + 1]),
  ...(a.a || []).map((c, i) => [c, a.id, "avançado", i + 1]),
]).filter(x => x[0] !== null && x[0] < 0);
const nq = quiz.flatMap(a => [...a.b, ...(a.a || [])]).filter(c => c !== null).length;
console.log(`Aulas no acompanhamento: ${quiz.length} (última: ${quiz[quiz.length - 1].id} ${quiz[quiz.length - 1].nome})`);
console.log(`Questões registradas: ${nq} · pendentes: ${pend.length}${pend.length ? " → " + pend.map(p => `${p[1]} ${p[2]} q${p[3]}`).join(", ") : ""}`);
console.log(`Estudado: Fundamentos ${estAul} de ${totAul} aulas, ${estMin} de ${totalMin} min · Prompt Engineering ${peFeitas.length} de ${plano.peAulas.length} aulas, ${peMin} min · ritmo ${ritmo} min/dia (${nDias} dias)`);
if (semSnap.length) console.log(`Práticas do Prompt Engineering sem snapshot da plataforma, contadas como feitas por haver quizz depois: ${semSnap.join(", ")}`);
console.log("Blocos: " + bl.map(b => `${b.n}=${b.s}`).join(" · "));
console.log(`Passos feitos: ${passos.filter(p => p[1]).length}/${passos.length} · próximo: ${(passos.find(p => !p[1]) || ["—"])[0]}`);
console.log(`Data de atualização: ${atual}`);

const antes = existsSync(OUT) ? txt(OUT) : null;
if (CHECK) {
  if (antes === js) console.log("OK: doc/dados.js está em dia.");
  else { console.error("DESATUALIZADO: doc/dados.js difere do que seria gerado. Rode sem --check."); process.exit(1); }
} else if (antes === js) console.log("Dashboard já estava em dia: nada a gravar.");
else if (DRY) console.log("--dry-run: nada gravado.");
else { writeFileSync(OUT, js, "utf8"); console.log(`Gravado: ${OUT}`); }
