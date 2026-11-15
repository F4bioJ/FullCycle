# Resultado — Prompt Caching

## Tentativa 1 — 2026-11-08
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | A | ❌ |
| 2 | C | C | ✅ |
| 3 | D | D | ✅ |
| 4 | A | A | ✅ |
| 5 | B | B | ✅ |

### Para refazer
- **Q1 — OpenAI cache automático:** marcou que a OpenAI exige registro prévio do prefixo com um ID de cache, que é o modelo do Gemini; na OpenAI o cache é automático e a estratégia é repetir o texto fixo no início.

### Pontos para revisar
- OpenAI (automático, sem ID, o provider decide) × Gemini (explícito por API, com ID e TTL) na seção "OpenAI: caching automático e transparente" do resumo.
