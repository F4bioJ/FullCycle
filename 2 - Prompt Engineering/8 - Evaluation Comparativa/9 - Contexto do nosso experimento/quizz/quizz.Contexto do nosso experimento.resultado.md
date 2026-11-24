# Resultado — Contexto do nosso experimento

## Tentativa 1 — 2026-11-23
**Pontuação:** 4/5

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | A | ❌ |
| 2 | C | C | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | C | C | ✅ |

### Para refazer
- **Q1 — prompt A/B não é teste A/B:** achou que, sem resposta esperada no dataset, a vitória de B não valia como evidência; o pairwise compara sem ground truth, e o que falta ao resultado é medir o impacto em produção (usuários reais), não base técnica.

### Pontos para revisar
- Diferença entre comparar duas variantes offline com um juiz (prompt A × prompt B) e um teste A/B em produção; o pairwise como evidência válida sem ground truth (aula 2.8.8).

### Refação — 2026-11-23
- **Q1 — prompt A/B não é teste A/B:** ✅ na 1ª refação (relatório que chamava a rodada pairwise de "teste A/B"; correção: comparação offline julgada por um juiz, enquanto o teste A/B mede o efeito com usuários em produção).
