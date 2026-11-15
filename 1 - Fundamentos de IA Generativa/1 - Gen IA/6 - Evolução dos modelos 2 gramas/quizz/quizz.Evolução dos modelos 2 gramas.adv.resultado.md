# Resultado — Evolução dos modelos 2 gramas (avançado)

## Tentativa 1 — 2026-10-14
**Pontuação:** 8/10

*Primeira tentativa, já no quizz reescrito em 2026-10-14.*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | D | ❌ |
| 2 | B | B | ✅ |
| 3 | C | C | ✅ |
| 4 | A | A | ✅ |
| 5 | B | C | ❌ |
| 6 | D | D | ✅ |
| 7 | A | A | ✅ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | C | C | ✅ |

### Para refazer
- **Q1 — probabilidade de uma frase no bigrama:** deu zero a uma frase nunca vista cujos pares foram todos vistos; o bigrama avalia pares, não frases, e "o cão preto dorme" vale 1/3 × 1 × 1/2 = 1/6.
- **Q5 — símbolos x vetores:** escolheu que vetores próximos tornam "o cão dorme" exatamente tão provável quanto "o gato dorme"; próximos não são iguais, e a transferência é parcial.

### Pontos para revisar
- Seção 1 do material avançado: montar a tabela de contagens e calcular P(frase) como produto de P(palavra | anterior). Zero só aparece quando algum par não foi visto (seção 3).
- Seção 4: com embeddings, o que se aprende sobre uma palavra vale "em boa parte" para as vizinhas; vetores idênticos apagariam as diferenças ("o gato mia" x "o cão late").

## Refação da Q1 — rodada 1 — 2026-10-14
**Pontuação:** 0/1

*Pergunta nova sobre o mesmo conceito: probabilidade de "ela bebe chá frio" no corpus "ela bebe chá quente / ela bebe café frio / ele toma chá frio".*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | B | ❌ |

### Para refazer
- **Q1 — probabilidade de uma frase no bigrama:** já não deu zero à frase não vista (avanço em relação à tentativa 1), mas tratou P(chá|bebe) como 1; "bebe" é seguido de "chá" e de "café", então vale 1/2. Resultado: 1 × 1/2 × 1/2 = 1/4.

### Pontos para revisar
- Calcular cada fator olhando a palavra anterior: em quantas vezes ela aparece, quantas são seguidas da palavra seguinte. Conferir os três fatores, não só o último.

## Refação da Q1 — rodada 2 — 2026-10-14 (anulada)
*Pergunta com erro no gabarito: P("o time ganhou o título") vale 1/2 × 1/2 × 1 × 1/4 = 1/16, e a alternativa marcada como correta (D) usava 1/2 no último fator. A alternativa A tinha o número certo com a justificativa errada. O aluno marcou A. Rodada anulada, sem contar no acompanhamento.*

## Refação da Q1 — rodada 3 — 2026-10-14
**Pontuação:** 0/1

*Pergunta nova sobre o mesmo conceito: probabilidade de "o carro novo andou" no corpus "o carro novo quebrou / o carro velho andou / o barco novo andou".*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | B | A | ❌ |

### Para refazer
- **Q1 — probabilidade de uma frase no bigrama:** tratou P(carro|o) como 1 porque toda frase começa com "o"; o fator pergunta o que vem depois de "o" (carro, carro, barco), então vale 2/3. Resultado: 2/3 × 1/2 × 1/2 = 1/6.

### Pontos para revisar
- Cada fator P(palavra | anterior) é lido na linha da palavra anterior: listar todas as ocorrências dela e o que veio depois. O fato de a anterior ser sempre a mesma não faz o fator valer 1; o que faz valer 1 é a seguinte ser sempre a mesma.

## Refação da Q1 — rodada 4 — 2026-10-14
**Pontuação:** 1/1

*Pergunta aberta, sem alternativas: preencher a tabela de fatores e calcular P("a menina leu o jornal") no corpus "a menina leu o livro / a menina comprou o livro / a professora leu o jornal".*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | 2/3 × 1/2 × 1 × 1/3 = 1/9 | 1/9 | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum. Os quatro fatores certos, inclusive o P(o | leu) = 1 com "leu" aparecendo em duas frases diferentes.

## Refação da Q5 — rodada 1 — 2026-10-14
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: probabilidade de "o enfermeiro examinou o paciente", nunca vista, com vetores de "médico" e "enfermeiro" próximos mas não iguais.*

| # | Resposta | Correta | |
|---|---|---|---|
| 5 | D | D | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.
