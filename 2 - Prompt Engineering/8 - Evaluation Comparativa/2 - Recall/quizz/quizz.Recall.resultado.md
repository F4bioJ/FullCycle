# Resultado — Recall

## Tentativa 1 — 2026-11-23
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | A | B | ❌ |

### Para refazer
- **Q5 — recall de 100% não basta (trade-off com a precision):** marcou que ainda faltava checar falsos negativos; recall 100% já significa FN = 0. O que o recall não enxerga são os falsos positivos, que aparecem na precision.

### Pontos para revisar
- O que cada métrica "enxerga": recall só vê FN, precision só vê FP. Com um recall perfeito, o risco que sobra é de alarmes falsos (resumo da aula de Recall, parte do trade-off).
