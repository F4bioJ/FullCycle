# Resultado — Explorando diversos caminhos com Tree of Thought

## Tentativa 1 — 2026-11-07
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | C | B | ❌ |
| 5 | B | B | ✅ |
| 6 | D | D | ✅ |
| 7 | C | A | ❌ |
| 8 | D | C | ❌ |
| 9 | B | B | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- **Q4 — a estrutura do prompt monta a árvore:** achou que o nome da técnica ou o modelo (GPT-4o raciocina por padrão) determina a árvore; quem a monta é a estrutura pedida.
- **Q7 — limitações do ToT:** na INCORRETA, marcou uma afirmação verdadeira (ramos parecidos repetem); o critério orienta a escolha, não garante ramos distintos.
- **Q8 — escolha por plausibilidade ≠ diagnóstico:** tratou como voto por maioria; os ramos eram causas diferentes e a escolha vira prioridade de investigação, não confirmação.

### Pontos para revisar
- Diferença entre ToT (ramos alternativos + critério) e self-consistency (repetição + maioria).
- Limitações do ToT: ramos pouco distintos, saída longa e gasto de tokens.

### Nota (2026-11-07)
Q8 anulada por ambiguidade na alternativa "voto" (original e refação). Pergunta nova aplicada como 1ª tentativa da q8 (cache miss, TTL como hipótese mais plausível): resposta B, correta ✅. Pontuação ajustada: 8/10.
