# Resultado — Gestão e controle de versão

## Tentativa 1 — 2026-11-18
**Pontuação:** 3/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | B | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | B | A | ❌ |

### Para refazer
- **Q2 — prompts de uso geral versus específicos do projeto:** marcou o repositório geral com link simbólico para o `AGENTS.md` e os workflows que só fazem sentido naquele projeto; esses ficam dentro do projeto, versionados com ele.
- **Q5 — controle de versão de prompts pessoais:** achou que, sem outros revisores, dá para dispensar o controle de versão e guardar os prompts em cada projeto; o que se dispensa é só o PR e o code review.

### Pontos para revisar
- Separação entre prompts "coringas" (repositório geral, links simbólicos) e prompts do projeto (dentro dele).
- Controle de versão vale também para prompts pessoais; o repositório único continua sendo o centro.
