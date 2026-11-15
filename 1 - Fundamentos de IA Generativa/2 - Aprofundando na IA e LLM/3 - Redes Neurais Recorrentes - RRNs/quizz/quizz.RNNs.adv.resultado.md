# Resultado — RNNs (avançado)

## Tentativa 1 — 2026-10-19
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | C | C | ✅ |
| 3 | B | B | ✅ |
| 4 | C | C | ✅ |
| 5 | D | D | ✅ |
| 6 | B | B | ✅ |
| 7 | C | C | ✅ |
| 8 | A | A | ✅ |
| 9 | B | B | ✅ |
| 10 | B | D | ❌ |

### Para refazer
- **Q10 — LSTM continua sequencial:** marcou como incorreta a afirmação verdadeira sobre o caminho O(n) entre tokens; não percebeu que a soma no estado de célula ajuda o gradiente mas não quebra a dependência de t em t−1.

### Pontos para revisar
- Diferença entre caminho do gradiente (que a LSTM melhora) e operações sequenciais / comprimento do caminho entre tokens (que continuam O(n)): seção "6. Os dois gargalos que sobraram" do material avançado.

## Refação Q10 — 2026-10-19
**Conceito:** LSTM continua sequencial
**Pergunta nova:** trocar RNN por LSTM em sequências de 2.000 tokens na GPU: o que esperar?
**Resposta:** C ✅ (gradiente chega melhor aos passos distantes, mas cada passo ainda espera o anterior)
