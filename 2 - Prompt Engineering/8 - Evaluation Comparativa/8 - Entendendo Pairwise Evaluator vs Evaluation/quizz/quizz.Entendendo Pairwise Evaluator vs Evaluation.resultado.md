# Resultado — Entendendo Pairwise Evaluator vs Evaluation

## Tentativa 1 — 2026-11-23
**Pontuação:** 2/3

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | B | D | ❌ |
| 3 | C | C | ✅ |

### Para refazer
- **Q2 — Fluxo de três requisições do pairwise:** achou que o evaluator roda três vezes (opção 1, opção 2 e repetir a melhor); são três requisições, mas as duas primeiras só geram as respostas e o evaluator roda uma vez, na terceira, com as duas juntas.

### Pontos para revisar
- Fluxo de três requisições do pairwise: resumo da aula (2.8.8).

> Antes da aplicação, a Q2 foi apontada como fraca (o enunciado entrega a resposta e a B é descartável); o usuário preferiu aplicar como está.

## Refação Q2 (1ª) — 2026-11-23
**Conceito:** Fluxo de três requisições do pairwise
**Pergunta nova:** com as respostas das opções 1 e 2 já guardadas, o que o Pairwise Evaluator recebe e devolve.
**Resposta:** B · **Correta:** B · ✅
