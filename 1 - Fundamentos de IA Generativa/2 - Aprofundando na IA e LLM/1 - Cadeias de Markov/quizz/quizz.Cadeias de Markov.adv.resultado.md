# Resultado — Cadeias de Markov (avançado)

## Tentativa 1 — 2026-10-15
**Pontuação:** 4/5

Versão enxuta do quizz (5 perguntas, sem contas), reescrita no mesmo dia.

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | B | ✅ |
| 2 | C | C | ✅ |
| 3 | A | A | ✅ |
| 4 | C | D | ❌ |
| 5 | A | A | ✅ |

### Para refazer
- **Q4 — Baum–Welch sem rótulos:** atribuiu ao Viterbi o papel de ajustar as tabelas; o Viterbi só decodifica com tabelas prontas, quem aprende é o Baum–Welch.

### Pontos para revisar
- Os três problemas e os três algoritmos (forward avalia, Viterbi decodifica, Baum–Welch aprende) — seção 4 do material avançado.

## Refação — 2026-10-15

| # | Conceito | Pergunta nova | Resposta | Correta | |
|---|---|---|---|---|---|
| 4 | Baum–Welch sem rótulos | melhorar um etiquetador gramatical com corpus sem etiquetas | B | B | ✅ |

## Tentativa 2 — 2026-10-16
**Pontuação:** 3/5

Questões 6 a 10, acrescentadas em 2026-10-16 para o quizz voltar a ter 10.

| # | Resposta | Correta | |
|---|---|---|---|
| 6 | C | C | ✅ |
| 7 | B | B | ✅ |
| 8 | A | D | ❌ |
| 9 | A | A | ✅ |
| 10 | D | C | ❌ |

### Para refazer
- **Q8 — treino supervisionado por contagem:** com o corpus rotulado, escolheu o Baum–Welch; ele serve quando os estados são ocultos. Com rótulos, basta contar transições e emissões e normalizar, como no bigrama.
- **Q10 — o limite é o tipo de estado:** marcou como incorreta uma afirmação verdadeira (a propriedade de Markov limita o modelo e torna o Viterbi viável) e não reconheceu a simplificação da aula: o limite do HMM é o estado ser uma categoria sem histórico, e não o processamento linear.

### Pontos para revisar
- Qual algoritmo serve para cada dado (com rótulos: contar; sem rótulos: Baum–Welch). Seção 4 do material avançado.
- O estado é uma categoria (seção 6), a programação dinâmica depende da propriedade de Markov (seção 3) e o bloco "O que a aula simplificou".

## Refação — 2026-10-16

| # | Conceito | Pergunta nova | Resposta | Correta | |
|---|---|---|---|---|---|
| 8 | treino supervisionado por contagem | diário de 3 anos com clima anotado: estimar P(guarda-chuva \| Chuva) | B | B | ✅ |
| 10 | o limite é o tipo de estado | transição dependendo de todos os estados anteriores: efeito no modelo e no Viterbi | D | D | ✅ |
