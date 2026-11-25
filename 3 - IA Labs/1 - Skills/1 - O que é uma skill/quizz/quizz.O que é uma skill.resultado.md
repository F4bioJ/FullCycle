# Resultado — O que é uma skill

## Tentativa 1 — 2026-11-24
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | C | C | ✅ |
| 7 | D | D | ✅ |
| 8 | B | B | ✅ |
| 9 | C | C | ✅ |
| 10 | C | A | ❌ |

### Para refazer
- **Q10 — Ação com efeito colateral e DisableModelInvocation:** achou que, por acessar sistemas externos, o deploy deveria ser um MCP no lugar da skill; a skill é o uso principal e chama o MCP como ferramenta.

### Pontos para revisar
- Tabela "o que vai onde" da aula: skill (procedimento, com DisableModelInvocation quando há efeito colateral) × MCP/tools (acesso a sistemas e dado vivo, chamados pela skill) × CLAUDE.md (fatos sempre verdadeiros).

### Refação — 2026-11-24
- **Q10, 1ª refação (rollback em produção):** ❌ marcou B (skill sem DisableModelInvocation, disparada pelo modelo); correta C.
- **Q10, 2ª refação (migrações no banco de produção):** ✅ B. A skill só roda por pedido explícito e chama o MCP como ferramenta.
