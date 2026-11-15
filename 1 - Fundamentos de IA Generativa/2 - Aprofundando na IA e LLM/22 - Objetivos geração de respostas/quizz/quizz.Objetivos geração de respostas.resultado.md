# Resultado — Objetivos geração de respostas

## Tentativa 1 — 2026-11-01
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | A | C | ❌ |
| 2 | A | A | ✅ |
| 3 | D | D | ✅ |
| 4 | B | B | ✅ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | D | C | ❌ |
| 8 | B | B | ✅ |
| 9 | D | A | ❌ |
| 10 | D | D | ✅ |

### Para refazer
- **Q1 — geração como sequência de escolhas locais:** atribuiu o efeito da troca de uma palavra a um ajuste dos pesos durante a conversa, quando o que muda é o contexto de cada próximo token.
- **Q7 — ajuste do comportamento da saída:** tratou os parâmetros como controle de tamanho e o tom como algo fora das probabilidades, quando prompt e parâmetros deslocam a distribuição dos próximos tokens.
- **Q9 — escolha da configuração pela tarefa:** manteve a geração restritiva por medo de alucinação, quando a configuração depende da tarefa e o risco de deriva é uma troca aceitável em slogans.

### Pontos para revisar
- Pesos congelados e contexto como causa da variação: resumo da aula, parte sobre geração token a token.
- Prompt e parâmetros como ajuste da distribuição de probabilidade, e configuração escolhida por tarefa: resumo da aula, parte sobre controle da saída.

## Refação 1 — 2026-11-01
Perguntas novas sobre os mesmos conceitos. **Pontuação:** 2/3

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R1 | correção vale só na conversa em que foi feita: entra no contexto e guia os próximos tokens, sem mudar os pesos | B | B | ✅ |
| R7 | instrução "responda de modo informal" muda o contexto e aumenta a chance de tokens informais, com os mesmos pesos | B | D | ❌ |
| R9 | garantia pede geração restritiva; nos nomes de produto a variedade é o objetivo e a deriva custa pouco | C | C | ✅ |

### Para refazer
- **R7 — ajuste do comportamento da saída:** achou que um filtro reescreve a resposta depois da geração, quando a instrução já está no contexto e age na escolha de cada token.

## Refação 2 — 2026-11-01
Pergunta nova sobre o mesmo conceito. **Pontuação:** 0/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R7 | "seja empático" × "seja direto" com mesmo modelo e parâmetros: a diferença surge na escolha de cada token, porque o contexto muda as probabilidades | C | A | ❌ |

### Para refazer
- **R7 — ajuste do comportamento da saída:** achou que cada instrução seleciona um conjunto de pesos treinado para o tom, quando há um único conjunto de pesos e o que muda é o contexto.

## Refação 3 — 2026-11-01
Pergunta nova sobre o mesmo conceito, logo depois da explicação da refação 2. **Pontuação:** 1/1

| # | Conceito | Resposta | Correta | |
|---|---|---|---|---|
| R7 | apagar a linha "responda em tom informal" muda a resposta porque o tom vem do contexto, que define as probabilidades dos próximos tokens | C | C | ✅ |
