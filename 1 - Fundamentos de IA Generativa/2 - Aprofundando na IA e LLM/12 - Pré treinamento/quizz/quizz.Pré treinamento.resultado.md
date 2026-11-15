# Resultado — Pré treinamento

## Tentativa 1 — 2026-10-31
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | D | C | ❌ |
| 8 | B | B | ✅ |
| 9 | A | A | ✅ |
| 10 | D | D | ✅ |

### Para refazer
- **Q7 — Cross Entropy Loss mede distância, não acerto ou erro:** achou que errar com pouca confiança (2%) gera perda menor; é o contrário, quanto menos probabilidade para o token certo, maior a perda.

### Pontos para revisar
- Cross Entropy Loss: a perda mede a distância entre a distribuição prevista e a resposta correta (seção sobre função de perda em `summary/Pré treinamento.resumo.md`).

### Refação
- **Q7 — Cross Entropy Loss (2026-10-31, 1ª refação):** passou. Cenário novo (1% × 35% ao token real); respondeu C, a perda é maior onde o token real recebeu menos probabilidade.
