# Resultado — Tokens

## Tentativa 1 — 2026-10-23
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | D | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | A | ❌ |
| 6 | D | D | ✅ |
| 7 | B | C | ❌ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — BPE agrupa por incidência:** aceitou "combinações de maior significado no idioma"; o critério é só repetição nos textos, e o significado vem depois, do embedding.
- **Q5 — tokens definidos no treino:** aceitou "definidos junto com a gramática do idioma"; os tokens saem da frequência nos textos, não de regras da língua (mesma confusão da Q2).
- **Q7 — cobrança por token:** aceitou "o token dispensa um dicionário por idioma"; isso é motivo para usar tokens no modelo, não para cobrar. A cobrança acompanha o processamento, que é feito token a token.

### Pontos para revisar
- Tokenização é estatística, não linguística: sem sílabas, gramática ou significado (resumo, seções "Como o BPE agrupa" e "Pedaço forte contra palavra inteira"; material avançado, 4.5).
- Por que usar tokens (vocabulário, flexibilidade) × por que cobrar por tokens (processamento) (resumo, seção "Contexto e custo").

## Refação 1 — 2026-10-23
Perguntas novas sobre os mesmos conceitos.

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R2 | BPE por incidência: "return" vira token num corpus de código, "cachoeira" se divide | D | D | ✅ |
| R5 | vocabulário fixo: repetir "ZetaFlux" nas conversas não cria token | A | B | ❌ |
| R7 | cobrar por token porque o processamento é token a token | A | A | ✅ |

### Para refazer
- **Q5 — tokens definidos no treino:** achou que, depois de muitas repetições nas conversas, o modelo grava o nome como token novo. O vocabulário é fixo depois da criação do modelo; a conversa só aplica o vocabulário e não grava nada.

## Refação 2 — 2026-10-23

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R5b | gíria usada por seis meses continua nos mesmos pedaços (vocabulário e regra de corte fixos) | D | C | ❌ |

### Para refazer
- **Q5 — tokens definidos no treino:** avançou (já não acha que o vocabulário cresce com o uso), mas achou que a quebra muda a cada conversa conforme a frase. O tokenizador aplica sempre a mesma regra, cega ao contexto; quem usa o contexto é a atenção, depois do corte.

## Refação 3 — 2026-10-23

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R5c | "manga" fruta × "manga" da camisa: mesmos tokens, sentido resolvido na atenção | D | D | ✅ |
