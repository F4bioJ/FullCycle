# Resultado — Framework de decisão - vira ou não skill

## Tentativa 1 — 2026-11-25
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | B | B | ✅ |
| 3 | D | D | ✅ |
| 4 | A | A | ✅ |
| 5 | C | C | ✅ |
| 6 | A | A | ✅ |
| 7 | D | D | ✅ |
| 8 | B | C | ❌ |
| 9 | B | B | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- q8 — zona cinzenta: dado vivo em tools ou MCP

### Pontos para revisar
- Separar fonte de verdade de estado: o CLAUDE.md guarda o que é sempre verdade no projeto (ex.: responder em pt-BR); o que muda o tempo todo (status de pedido, dado de produção) é dado vivo e se busca na hora com tools ou MCP. Uma skill pode usar uma MCP tool, mas não precisa ser criada só para isso.

### Refação 1 — 2026-11-25
| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| q8 | zona cinzenta: dado vivo em tools ou MCP (tickets no Jira e plantão do dia) | B | B | ✅ |
