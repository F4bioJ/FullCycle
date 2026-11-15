# Resultado — One e Few-shot e situações críticas

## Tentativa 1 — 2026-11-07
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | A | ✅ |
| 2 | A | C | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |
| 6 | B | C | ❌ |
| 7 | D | B | ❌ |
| 8 | A | A | ✅ |
| 9 | D | D | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q2 — one-shot ensina formato, mas um exemplo pode não delimitar o critério:** atribuiu a falha a logs fora do treino, em vez de ver que um caso só não mostra a fronteira entre error e warning.
- **Q6 — mais exemplos não garantem estabilidade:** na pergunta INCORRETA, marcou uma afirmação verdadeira (exemplos rígidos tiram variedade) e deixou passar a falsa (mais exemplos do mesmo domínio estabilizam).
- **Q7 — o que conta como exemplo (one-shot × zero-shot × role):** achou que definir um papel tira o prompt da classificação por exemplos; as técnicas se combinam, e um par de entrada e saída já é one-shot.

### Pontos para revisar
- Resumo da aula 2.1.8: mensagens 1 a 4 (one-shot, quatro exemplos, 15 exemplos) e a conclusão sobre exemplos conflitantes.
- Definição de zero/one/few-shot pela quantidade de pares "de → para" (aulas 2.1.7 e 2.1.8).
