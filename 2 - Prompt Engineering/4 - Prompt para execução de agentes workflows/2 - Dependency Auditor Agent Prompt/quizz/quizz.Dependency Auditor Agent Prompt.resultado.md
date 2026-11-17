# Resultado — Dependency Auditor Agent Prompt

## Tentativa 1 — 2026-11-16
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | D | B | ❌ |
| 5 | D | D | ✅ |
| 6 | C | C | ✅ |
| 7 | D | D | ✅ |
| 8 | A | B | ❌ |
| 9 | C | C | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q4 — Instrução negativa contra estimativa de tempo sem método:** achou que trocar a unidade (story points) resolvia; o problema é o modelo não ter método, e a unidade não muda isso.
- **Q8 — Ambiguidades e premissas (assumptions):** achou que o prompt pergunta ao usuário; as premissas já decidem o caso (projeto inteiro, ecossistemas separados, aviso de risco sem lockfile).

### Pontos para revisar
- Estimativas de tempo no plano de ação e ambiguidades/premissas no resumo da aula 2.4.2.
