# Resultado — Top_K & Top_P

## Tentativa 1 — 2026-11-02
**Pontuação:** 8/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | A | B | ❌ |
| 5 | A | A | ✅ |
| 6 | D | D | ✅ |
| 7 | B | B | ✅ |
| 8 | C | C | ✅ |
| 9 | A | A | ✅ |
| 10 | C | B | ❌ |

### Para refazer
- **Q4 — temperatura e top-k atuam em camadas diferentes:** achou que a temperatura alta amplia o K; com K = 1 só um token é elegível e a temperatura não muda isso.
- **Q10 — isolar parâmetros ao interpretar um experimento:** atribuiu o efeito a um parâmetro só e achou que o top-p fixa a quantidade de candidatos (isso é o top-k).

### Pontos para revisar
- Temperatura muda a distribuição (as chances); top-k e top-p mudam quem é elegível. Revisar o resumo da aula 3.4 e a aula 3.1.

### Refação — 2026-11-02
Q4 e Q10 refeitas com cenários novos: 2/2 certas.
