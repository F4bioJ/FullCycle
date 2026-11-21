# Resultado — Datasets

## Tentativa 1 — 2026-11-21
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | D | C | ❌ |
| 5 | B | B | ✅ |

### Para refazer
- **Q4 — output como resposta esperada (ground truth):** confundiu o `output` do exemplo (referência esperada, existe antes da avaliação) com o score que o evaluator devolve depois de comparar.

### Refação
- **Q4 — passou na 1ª refação (✅ 1x):** cenário novo (severidade diferente da registrada); respondeu B, o `output` como resposta esperada.

### Pontos para revisar
- Estrutura do exemplo do dataset: input, output esperado e metadados (resumo da aula, seção do dataset de análise de código).
