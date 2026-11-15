// Revisão programada dos quizzes gerados com modelos grátis (OpenRouter).
// Cobre a seção "Vícios que entregam a resposta" de references/quiz.md em duas camadas:
//   1. checarVicios(): checagem por código, sem modelo (tamanho das alternativas, palavras
//      absolutas só nas erradas, palavra do enunciado que só aparece na correta);
//   2. revisarComModelo(): outro modelo grátis avalia cada alternativa errada (descartável?),
//      o gabarito, o escopo e se o enunciado entrega a resposta.
// revisarQuizz() junta as duas, pede a correção das perguntas apontadas e repete até passar
// ou acabarem as rodadas. Usado por or-gerar.mjs, or-revisar.mjs e or-aplicar.mjs (refação).
import { chat, extrairJson, MODELOS } from './or-lib.mjs';

const LETRAS = ['A', 'B', 'C', 'D'];
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Palavras absolutas que o usuário aprendeu a usar como pista de alternativa errada.
const ABSOLUTAS = /(?<![\p{L}\d])(sempre|nunca|jamais|s[oó]|somente|apenas|exclusivamente|unicamente|nenhum|nenhuma|elimina\p{L}*|garant\p{L}*|100 ?%|de vez|totalmente|completamente|imposs[ií]vel)(?![\p{L}\d])/iu;

const VAZIAS = new Set(('qual quais quando porque segundo sobre entre mesmo mesma outro outra forma ainda sendo podem devem ' +
  'fazer professor alternativa afirmacao correta incorreta resposta melhor situacao abordagem diferenca pratica problema ' +
  'modelo usando antes depois essas esses estas estes cada isso como para pela pelo mais menos muito todos todas ' +
  'numa dele dela seus suas onde qualquer tambem assim exemplo seguinte principal').split(' '));
const raizes = t => new Set((norm(t).match(/[a-z]{5,}/g) ?? []).filter(w => !VAZIAS.has(w)).map(w => w.slice(0, 6)));

// Faixa de tamanho em que as 4 alternativas devem ficar (mediana ± 15%), usada na correção.
export function faixaTamanho(p) {
  const t = LETRAS.map(l => p.alternativas[l].length).sort((a, b) => a - b);
  const med = (t[1] + t[2]) / 2;
  return [Math.round(med * 0.85), Math.round(med * 1.15)];
}

const absoluta = t => ABSOLUTAS.exec(t.replace(/n[aã]o s[oó](?![\p{L}\d])/giu, ''))?.[0];

// Vícios detectáveis por código. Devolve uma lista de textos (vazia se a pergunta passou).
// absolutasRigido: aponta palavra absoluta mesmo se só UMA errada a tiver (o padrão do quizz
// inteiro já ensina o aluno a descartar). Sem ele, só aponta quando duas ou mais erradas têm.
export function checarVicios(p, { absolutasRigido = true } = {}) {
  const prob = [];
  const c = p.correta;
  const erradas = LETRAS.filter(l => l !== c);
  const tam = Object.fromEntries(LETRAS.map(l => [l, p.alternativas[l].trim().length]));
  const media = erradas.reduce((s, l) => s + tam[l], 0) / 3;
  const maiorErrada = Math.max(...erradas.map(l => tam[l]));
  if (tam[c] > 1.25 * media || tam[c] > 1.15 * maiorErrada)
    prob.push(`a correta (${c}) é a mais longa: ${tam[c]} caracteres contra ${Math.round(media)} de média nas erradas; deixe as 4 com tamanho parecido`);
  const menor = LETRAS.reduce((a, l) => (tam[l] < tam[a] ? l : a), 'A');
  if (tam[menor] < 0.55 * Math.max(...Object.values(tam)))
    prob.push(`a alternativa ${menor} é curta demais (${tam[menor]} caracteres) perto das outras; alternativa curta e seca costuma ser a descartável`);
  const absErr = erradas.filter(l => absoluta(p.alternativas[l]));
  if (absErr.length >= (absolutasRigido ? 1 : 2) && !absoluta(p.alternativas[c]))
    prob.push(`palavra absoluta só nas erradas (${absErr.map(l => `${l}: "${absoluta(p.alternativas[l])}"`).join(', ')}); tire ou ponha uma também na correta`);
  const doEnunciado = raizes(p.enunciado);
  const daCorreta = raizes(p.alternativas[c]);
  const dasErradas = new Set(erradas.flatMap(l => [...raizes(p.alternativas[l])]));
  const eco = [...daCorreta].filter(w => doEnunciado.has(w) && !dasErradas.has(w));
  if (eco.length >= 2)
    prob.push(`palavras do enunciado que só aparecem na correta (${eco.join(', ')}…); use-as também nas erradas ou troque na correta`);
  return prob;
}

// Checagem por código do quizz inteiro: [{ pergunta, problema }].
// Palavra absoluta vira vício de quizz quando 3+ perguntas a têm só nas erradas e nenhuma correta a usa.
export function checarQuizz(perguntas) {
  const comAbsErrada = perguntas.filter(p => ['A', 'B', 'C', 'D'].some(l => l !== p.correta && absoluta(p.alternativas[l]))).length;
  const comAbsCorreta = perguntas.filter(p => absoluta(p.alternativas[p.correta])).length;
  const absolutasRigido = comAbsErrada >= 3 && comAbsCorreta === 0;
  return perguntas.flatMap((p, i) => checarVicios(p, { absolutasRigido }).map(problema => ({ pergunta: i + 1, problema })));
}

// Revisão por um modelo (de preferência diferente do gerador). Devolve { problemas, model }.
export async function revisarComModelo(perguntas, aulaTxt, { modelos = MODELOS } = {}) {
  const lista = perguntas.map((p, i) => `${i + 1}. ${p.enunciado}\n` + LETRAS.map(l => `   ${l}) ${p.alternativas[l]}`).join('\n') + `\n   Gabarito: ${p.correta}`).join('\n\n');
  const v = await chat([
    { role: 'system', content: 'Você é um revisor rigoroso de quizzes em português do Brasil. Seu trabalho é achar o que deixa a pergunta fácil demais ou injusta. Responda somente com JSON válido.' },
    { role: 'user', content: `Revise o quizz abaixo contra o conteúdo da aula. O aluno é esperto: ele acerta sem saber quando a forma das alternativas entrega a resposta. Avalie CADA pergunta, uma por uma, e preencha todos os campos:

- "gabarito_errado": true se a letra do gabarito não é a resposta certa segundo a aula.
- "outra_defensavel": letra de uma alternativa ERRADA que também seria defensável como certa (ou "").
- "fora_da_aula": o trecho da pergunta ou de alguma alternativa que cobra algo que a aula NÃO ensinou, que vem de conhecimento externo, ou que é tema de aula POSTERIOR (o que o professor anuncia para o "próximo vídeo"), mesmo só como comparação (ou "").
- "descartaveis": letras das alternativas ERRADAS que quem estudou só metade da aula descartaria na hora, sem pensar: absurdas, fora do assunto, que contrariam o bom senso, exageradas, ou que o próprio enunciado já exclui. Uma boa alternativa errada é uma meia-verdade, a causa certa com o efeito errado, ou algo verdadeiro sobre outro conceito da aula. Seja exigente: na dúvida, aponte.
- "entrega": como dá para acertar sem saber o conteúdo, se der (ex.: o enunciado já descreve a correta, só a correta responde ao que foi perguntado, a correta é a única com tom equilibrado) (ou "").

JSON: {"perguntas":[{"pergunta":1,"gabarito_errado":false,"outra_defensavel":"","fora_da_aula":"","descartaveis":[],"entrega":""}]}

QUIZZ:
${lista}

AULA:
${aulaTxt}` },
  ], {
    modelos, temperature: 0.1,
    validar: t => {
      const o = extrairJson(t).perguntas;
      if (!Array.isArray(o) || o.length < perguntas.length) throw new Error('revisão incompleta');
      return o;
    },
  });
  const problemas = [];
  for (const r of v.valor) {
    const p = perguntas[r.pergunta - 1];
    if (!p) continue;
    const add = problema => problemas.push({ pergunta: r.pergunta, problema });
    if (r.gabarito_errado === true) add('o gabarito parece errado segundo a aula');
    if (LETRAS.includes(r.outra_defensavel) && r.outra_defensavel !== p.correta) add(`a alternativa ${r.outra_defensavel} também é defensável como certa`);
    if (typeof r.fora_da_aula === 'string' && r.fora_da_aula.trim()) add(`cobra algo fora da aula: ${r.fora_da_aula.trim()}`);
    const desc = (Array.isArray(r.descartaveis) ? r.descartaveis : []).filter(l => LETRAS.includes(l) && l !== p.correta);
    if (desc.length) add(`alternativa(s) descartável(is): ${desc.join(', ')}; troque por um erro plausível (meia-verdade, causa certa com efeito errado, verdade sobre outro conceito da aula)`);
    if (typeof r.entrega === 'string' && r.entrega.trim()) add(`entrega a resposta: ${r.entrega.trim()}`);
  }
  return { problemas, model: v.model };
}

// Pede a correção só das perguntas apontadas e as substitui em `perguntas` (in place).
export async function corrigir(perguntas, problemas, aulaTxt, { regras = '', modelos = MODELOS } = {}) {
  const nums = [...new Set(problemas.map(p => p.pergunta))];
  const atuais = nums.map(n => {
    const p = perguntas[n - 1];
    const [min, max] = faixaTamanho(p);
    return {
      pergunta: n, enunciado: p.enunciado, alternativas: p.alternativas, correta: p.correta, porque: p.porque,
      erradas: p.erradas, conceito: p.conceito, resumo: p.resumo,
      problemas: problemas.filter(x => x.pergunta === n).map(x => x.problema),
      tamanho_alvo: `cada uma das 4 alternativas entre ${min} e ${max} caracteres`,
    };
  });
  const r = await chat([
    { role: 'system', content: 'Você corrige quizzes em português do Brasil. Responda somente com JSON válido.' },
    { role: 'user', content: `Corrija APENAS as perguntas abaixo, resolvendo TODOS os problemas listados em cada uma. Mantenha o conceito cobrado. Se o problema é de escopo (algo que a aula não ensinou ou tema de aula posterior), troque por outra pergunta sobre o mesmo conceito, baseada só na aula.

Como corrigir os vícios:
- Tamanho: reescreva as alternativas para que as 4 fiquem dentro do "tamanho_alvo" (encurte a correta ou dê às erradas o mesmo nível de detalhe).
- Palavra absoluta ("sempre", "nunca", "só", "apenas", "elimina", "garante"...) só nas erradas: tire das erradas ou use uma também na correta.
- Alternativa descartável: troque por um erro que pareça certo para quem estudou pela metade (meia-verdade; causa certa com efeito errado; afirmação verdadeira sobre outro conceito da mesma aula).
- Enunciado que entrega: reescreva o enunciado sem descrever a correta e sem palavras que só ela repete.
- Atualize "porque" e "erradas" (por que cada errada está errada) de acordo com as novas alternativas.

${regras ? `Regras de nível do curso:\n${regras}\n\n` : ''}Perguntas (JSON):
${JSON.stringify(atuais, null, 1)}

Responda: {"perguntas":[{"pergunta":<número original>,"enunciado":"","alternativas":{"A":"","B":"","C":"","D":""},"correta":"","porque":"","erradas":{},"conceito":"","resumo":""}]}

AULA:
${aulaTxt}` },
  ], {
    modelos, temperature: 0.4,
    validar: t => {
      const q = extrairJson(t).perguntas;
      if (!Array.isArray(q) || q.some(x => !x.enunciado || LETRAS.some(l => !x.alternativas?.[l]) || !LETRAS.includes(x.correta))) throw new Error('JSON inválido');
      return q;
    },
  });
  for (const c of r.valor) {
    const i = c.pergunta - 1;
    if (!perguntas[i] || !nums.includes(c.pergunta)) continue;
    const { pergunta, ...resto } = c;
    perguntas[i] = { ...perguntas[i], ...resto, conceito: resto.conceito || perguntas[i].conceito, resumo: resto.resumo || perguntas[i].resumo };
  }
  return r.model;
}

// Laço completo: checa (código + modelo), corrige o apontado e checa de novo, até `rodadas` checagens.
// Devolve a lista de pendências da última checagem ([] = passou).
export async function revisarQuizz(perguntas, aulaTxt, { regras = '', modeloGerador, rodadas = 3, log = console.log } = {}) {
  const revisores = MODELOS.filter(m => m !== modeloGerador);
  let pend = [];
  for (let r = 1; r <= rodadas; r++) {
    const det = checarQuizz(perguntas);
    let mod = [], quem = '-';
    try {
      const v = await revisarComModelo(perguntas, aulaTxt, { modelos: revisores.length ? revisores : MODELOS });
      mod = v.problemas; quem = v.model;
    } catch (e) {
      log(`revisão por modelo não concluída: ${e.message.split('\n')[0]}`);
      mod = [{ pergunta: 0, problema: 'revisão por modelo não concluída' }];
    }
    pend = [...det, ...mod];
    const afetadas = new Set(pend.filter(p => p.pergunta > 0).map(p => p.pergunta));
    log(`revisão ${r}/${rodadas}: ${det.length} vício(s) pelo código, ${mod.length} apontamento(s) pelo modelo ${quem}` +
      (afetadas.size ? ` → perguntas ${[...afetadas].sort((a, b) => a - b).join(', ')}` : ''));
    if (!afetadas.size || r === rodadas) break;
    try {
      const m = await corrigir(perguntas, pend.filter(p => p.pergunta > 0), aulaTxt, { regras });
      log(`correção: modelo ${m}`);
    } catch (e) {
      log(`correção não concluída: ${e.message.split('\n')[0]}`);
      break;
    }
  }
  return pend;
}
