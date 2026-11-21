# Resultado — Evaluators

## Tentativa 1 — 2026-11-21
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | D | D | ✅ |
| 3 | B | B | ✅ |
| 4 | D | C | ❌ |
| 5 | A | A | ✅ |
| 6 | D | D | ✅ |
| 7 | B | B | ✅ |
| 8 | B | A | ❌ |
| 9 | C | C | ✅ |
| 10 | B | B | ✅ |

### Para refazer
- **Q4 — Code Evaluator x LLM as Judge (nuance x consistência):** achou que o LLM as Judge não pode receber ground truth; na aula, o juiz pode julgar com base em referência. O custo da troca é a dependência da rubrica e do juiz.
- **Q8 — Composite Evaluator (média ponderada):** usou a média simples das métricas, sem aplicar os pesos do time (0,83 contra 0,80), em vez da média ponderada (0,82 contra 0,79).

### Pontos para revisar
- LLM as Judge: pode usar rubrica, referência ou instrução; ganha nuance, perde consistência.
- Composite Evaluator: aplica a fórmula do time (média ponderada) sobre as métricas; refazer a conta com os pesos, fator por fator.
