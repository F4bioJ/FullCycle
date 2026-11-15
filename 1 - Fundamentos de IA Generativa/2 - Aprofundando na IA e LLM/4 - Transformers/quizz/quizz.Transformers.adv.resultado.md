# Resultado — Transformers (avançado)

## Tentativa 1 — 2026-10-21
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | A | ❌ |
| 2 | B | B | ✅ |
| 3 | C | C | ✅ |
| 4 | D | D | ✅ |
| 5 | B | B | ✅ |
| 6 | C | C | ✅ |
| 7 | C | A | ❌ |
| 8 | A | D | ❌ |
| 9 | B | B | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q1 — fonte do paralelismo:** atribuiu o paralelismo às heads dividindo a sequência em trechos; as heads olham a sequência inteira, e o paralelismo vem de não haver recorrência (tudo vira multiplicação de matrizes).
- **Q7 — gradiente na sequência x na profundidade:** achou que a atenção reintroduz recorrência entre camadas; o caminho curto vale entre tokens, e na profundidade quem segura o gradiente é a residual com a LayerNorm.
- **Q8 — atenção não é explicação:** achou que os pesos de atenção variam aleatoriamente a cada execução; eles são determinísticos, e o problema é que uma head isolada é só um sinal entre muitos.

### Pontos para revisar
- Paralelismo: seção "4. A camada feedforward e de onde vem o paralelismo".
- Gradiente: seção "6. O que segura o treino: residual e LayerNorm".
- Atenção como explicação: seção "Armadilhas comuns".

### Refação das erradas — 2026-10-21
Perguntas novas sobre os mesmos conceitos: 3/3.

| Original | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| Q1 | fonte do paralelismo | B | B | ✅ |
| Q7 | gradiente na sequência x na profundidade | C | C | ✅ |
| Q8 | atenção não é explicação | A | A | ✅ |
