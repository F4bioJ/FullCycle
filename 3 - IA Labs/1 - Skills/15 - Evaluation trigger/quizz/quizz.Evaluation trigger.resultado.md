# Resultado — Evaluation trigger

## Tentativa 1 — 2026-11-28
**Pontuação:** 6/9

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | D | A | ❌ |
| 3 | A | D | ❌ |
| 4 | B | B | ✅ |
| 5 | A | A | ✅ |
| 6 | D | D | ✅ |
| 7 | C | B | ❌ |
| 8 | C | C | ✅ |
| 9 | D | D | ✅ |

### Para refazer
- **Q2 — precision e recall no teste de trigger (under-trigger):** leu recall baixo como problema de qualidade da resposta; o teste de trigger só mede se a skill foi chamada, e recall baixo = faltou disparar.
- **Q3 — decisão do loop quando as métricas de trigger estão no alvo:** achou que a candidata que sai do loop é mais robusta; com as métricas em 100% e a candidata igual à original, não há o que corrigir e a description fica.
- **Q7 — papel do holdout na otimização da description:** atribuiu ao corpo da skill um erro que aparece só no holdout; acertar o treino e errar o holdout é a description que não generaliza para casos não vistos.

### Pontos para revisar
- Precision (cai com falsos positivos → over-trigger) × recall (cai com falsos negativos → under-trigger), e trigger × qualidade como avaliações separadas.
- Critério de parada do loop: métricas básicas atingidas, sem trocar a description só porque o loop gerou uma candidata.
- Holdout: conjunto guardado para medir generalização; treino bom e holdout ruim = ajuste aos exemplos vistos.

### Refação 1 — 2026-11-28
**Pontuação:** 3/3 (perguntas novas, outro ângulo)

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q2 | disparo em pedidos alheios: qual métrica cai | C | C | ✅ |
| Q3 | quando vale trocar a description após o loop | B | B | ✅ |
| Q7 | o que se perde sem separar holdout | D | D | ✅ |

Sem pendências.
