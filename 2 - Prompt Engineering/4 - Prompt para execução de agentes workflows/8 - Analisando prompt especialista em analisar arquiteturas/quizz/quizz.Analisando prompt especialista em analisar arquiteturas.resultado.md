# Resultado — Analisando prompt especialista em analisar arquiteturas

## Tentativa 1 — 2026-11-17
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | C | D | ❌ |
| 4 | B | B | ✅ |
| 5 | C | C | ✅ |
| 6 | A | A | ✅ |
| 7 | D | D | ✅ |
| 8 | B | B | ✅ |
| 9 | C | C | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q3 — componente como conceito flexível:** marcou que o agente procura uma pasta `components` e registra a ausência como limitação; o prompt deixa a IA inferir o que é componente pela organização real do projeto (bundles, packages, módulos, domínios), guiada pelos exemplos.

### Pontos para revisar
- Componente como conceito abstrato que depende da linguagem e da arquitetura, e o papel dos exemplos no prompt (resumo da aula, seção dos objetivos do Architectural Analyzer).

### Refação 1 — 2026-11-17
- **Q3 — componente como conceito flexível:** ✅ (pergunta nova: fixar "componente = classe" num projeto organizado por domínios DDD tira do agente a granularidade que se adapta ao projeto).
