# Resultado — Position Wise Layers

## Tentativa 1 — 2026-10-28
**Pontuação:** 6/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | C | A | ❌ |
| 3 | D | D | ✅ |
| 4 | A | B | ❌ |
| 5 | D | A | ❌ |
| 6 | D | D | ✅ |
| 7 | B | B | ✅ |
| 8 | C | C | ✅ |
| 9 | A | A | ✅ |
| 10 | D | C | ❌ |

### Para refazer
- **Q2 — Position-wise (mesma rede, posições independentes):** achou que W1 e W2 são recalculados a partir da sequência; são pesos fixos do treino, iguais para todas as posições.
- **Q4 — Ordem e papel dos termos da fórmula FFN:** não percebeu que b2 vem depois de W2 (ajuste final), não antes.
- **Q5 — Duas transformações com ativação entre elas:** atribuiu ao feedforward a leitura do contexto dos vizinhos, que é papel da atenção.
- **Q10 — Efeito da ativação e papel do b2:** achou que o max zera também o b2; o b2 é somado depois do max e de W2, então sobra na saída.

### Pontos para revisar
- Posição de cada termo em FFN(x) = max(0, xW1 + b1)W2 + b2: o max só envolve xW1 + b1; b2 é o último termo (Q4 e Q10).
- Divisão de papéis: atenção mistura tokens; feedforward trabalha cada token sozinho, com os mesmos pesos em todas as posições (Q2 e Q5).

## Refação 1 — 2026-10-28
Perguntas novas sobre os mesmos conceitos.

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R2 | position-wise: "banco" nas posições 3 e 7 com vetores idênticos sai igual, porque os pesos são os mesmos e fixos do treino | B | B | ✅ |
| R4 | ordem dos passos: W1, b1, max, W2, b2 | D | D | ✅ |
| R5 | W2 usa só o vetor do próprio token, já filtrado pela ativação | A | A | ✅ |
| R10 | dois tokens com xW1 + b1 todo negativo saem iguais, ambos valendo b2 | C | C | ✅ |
