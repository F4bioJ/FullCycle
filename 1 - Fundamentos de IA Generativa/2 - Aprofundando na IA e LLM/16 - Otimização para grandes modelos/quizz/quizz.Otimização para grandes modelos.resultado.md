# Resultado — Otimização para grandes modelos

## Tentativa 1 — 2026-10-31
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | C | C | ✅ |
| 3 | A | A | ✅ |
| 4 | C | D | ❌ |
| 5 | B | B | ✅ |
| 6 | D | D | ✅ |
| 7 | A | A | ✅ |
| 8 | C | C | ✅ |
| 9 | A | A | ✅ |
| 10 | D | D | ✅ |

### Para refazer
- **Q4 — Quantização reduz a precisão de cada peso, não o número de pesos:** achou que os pesos menos importantes são apagados; a quantização mantém todos e só os guarda com menos bits.

### Pontos para revisar
- Quantização (FP32/FP16 → INT8/INT4) × MoE (ativa só parte dos especialistas): na aula, seção de quantização.

### Refação (2026-10-31)
- **Q4 — Quantização reduz a precisão de cada peso, não o número de pesos:** passou na 1ª refação (✅ 1x), com cenário novo (7B em FP16 → INT8).
