# Resultado — Como a Gen AI aprende (avançado)

## Tentativa 1 — 2026-10-13
**Pontuação:** 10/10

*Tentativa feita no quizz antigo, considerado fácil demais para o avançado. O quizz foi reescrito nesta data, com perguntas novas; as próximas tentativas são do quizz novo.*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | C | C | ✅ |
| 5 | A | A | ✅ |
| 6 | D | D | ✅ |
| 7 | B | B | ✅ |
| 8 | C | C | ✅ |
| 9 | D | D | ✅ |
| 10 | A | A | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.

## Tentativa 2 — 2026-10-13
**Pontuação:** 9/10

*Primeira tentativa no quizz reescrito.*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | C | A | ❌ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | C | C | ✅ |
| 8 | B | B | ✅ |
| 9 | A | A | ✅ |
| 10 | D | D | ✅ |

### Para refazer
- **Q2 — entropia cruzada:** concluiu que dois modelos com a mesma probabilidade média (0,50) têm a mesma perda; a perda é a média de −log de cada probabilidade, e a curva é assimétrica.

### Pontos para revisar
- Seção 2 do material avançado, "Como o mapa é desenhado: a função de perda": refazer a conta com a tabela (0,69 e 0,69 contra 0,11 e 2,30) e notar que subir de 0,50 para 0,90 economiza 0,58, enquanto cair para 0,10 custa 1,61.

## Refação da Q2 — rodada 1 — 2026-10-13
**Pontuação:** 0/1

*Pergunta nova sobre o mesmo conceito: perda média de um modelo com nove acertos a 0,90 e um erro a 0,01, contra outro com 0,50 nos dez exemplos.*

| # | Resposta | Correta | |
|---|---|---|---|
| 2 | C | B | ❌ |

### Para refazer
- **Q2 — entropia cruzada:** acertou qual modelo tem a menor perda, mas tomou a perda do caso mais frequente (0,11) como a perda do lote, sem fazer a média dos dez exemplos.

### Pontos para revisar
- A perda do lote é a soma das perdas de cada exemplo dividida pelo número de exemplos: (9 × 0,11 + 4,61) / 10 = 0,56. Nenhum exemplo é ignorado, e o de probabilidade baixa é o que mais pesa.

## Refação da Q2 — rodada 2 — 2026-10-13
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: perdas médias de um modelo com 0,90, 0,90, 0,90 e 0,10 contra outro com 0,50 nos quatro exemplos.*

| # | Resposta | Correta | |
|---|---|---|---|
| 2 | D | D | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.
