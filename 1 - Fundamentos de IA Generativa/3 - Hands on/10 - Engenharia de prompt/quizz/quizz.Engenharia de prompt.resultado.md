# Resultado — Engenharia de prompt

## Tentativa 1 — 2026-11-03
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | C | ❌ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | D | D | ✅ |
| 7 | A | C | ❌ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q1 — Quando o zero-shot é suficiente:** supôs que o modelo conhece qualquer formato como conhece sentimento; o zero-shot funciona em tarefas-padrão e tende a fugir do esperado em formato próprio.
- **Q7 — Limites do chain-of-thought:** marcou como incorreta uma desvantagem real (resposta longa e suja) e não percebeu que a confiabilidade do passo a passo depende do modelo.

### Pontos para revisar
- Zero-shot: quando basta (tarefa conhecida) e quando falha (formato próprio) — resumo da aula.
- CoT: limites e dependência do modelo (o ChatGPT inventando coisas no meio da cadeia) — resumo da aula.
