# Resultado — Encoder-only

## Tentativa 1 — 2026-11-02
**Pontuação:** 9/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | C | C | ✅ |
| 8 | B | B | ✅ |
| 9 | C | B | ❌ |
| 10 | C | C | ✅ |

### Para refazer
- **Q9 — embeddings para similaridade semântica:** atribuiu o resultado a um peso do último token na atenção, em vez de ver que a busca compara significado, não palavras em comum.

### Pontos para revisar
- Embeddings e busca semântica: por que "receita para preparar um bolo" fica mais perto de "como fazer um bolo" do que "como fazer um barco" (resumo da aula 3.6).

## Refação da Q9 — 2026-11-02
**Pergunta nova** (central de ajuda: "não consigo entrar na minha conta" → "esqueci minha senha" antes de "como criar uma conta nova"). **Resposta:** D · **Correta:** D ✅
