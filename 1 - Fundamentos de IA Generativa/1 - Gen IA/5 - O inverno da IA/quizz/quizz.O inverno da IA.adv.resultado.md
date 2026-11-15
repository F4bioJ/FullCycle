# Resultado — O inverno da IA (avançado)

## Tentativa 1 — 2026-10-14
**Pontuação:** 7/10

*Primeira tentativa, já no quizz reescrito em 2026-10-14.*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | B | ❌ |
| 2 | D | D | ✅ |
| 3 | A | A | ✅ |
| 4 | D | C | ❌ |
| 5 | D | D | ✅ |
| 6 | A | A | ✅ |
| 7 | C | C | ✅ |
| 8 | B | B | ✅ |
| 9 | D | D | ✅ |
| 10 | B | A | ❌ |

### Para refazer
- **Q1 — teorema de Bayes e taxa de base:** supôs que o resultado cai na mesma proporção que a taxa de spam (91% ÷ 10); a taxa de base entra no numerador e no denominador, e com 4% de spam o resultado é ≈38%.
- **Q4 — Hopfield x RNN de sequência:** atribuiu à rede de Hopfield treino por gradiente; ela grava padrões por uma regra simples, sem gradiente, e o problema real é que não processa sequência.
- **Q10 — causa dos invernos:** marcou como incorreta uma afirmação verdadeira sobre o Deep Learning; a incorreta era "a falha técnica basta, sozinha", quando o material atribui os invernos à distância entre o prometido e o entregue.

### Pontos para revisar
- Seção 3 do material avançado: refazer a conta do spam trocando a taxa de base (0,30 × P(spam) contra 0,02 × P(legítimo)).
- Seção 2: o que a rede de Hopfield faz (recupera padrão), como grava (regra simples, pesos simétricos) e o que não faz (sequência). É o terceiro erro sobre Hopfield, contando o quizz da aula.
- Seção 1: o mecanismo dos invernos é promessa acima da entrega → financiamento cortado → pesquisa parada; a falha técnica sozinha não basta. Seção 5: o Deep Learning de 2010–2014 viabilizou ideias antigas.

## Refação da Q1 — rodada 1 — 2026-10-14
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: "reembolso" em 10% dos spams e 1% dos legítimos, com 50% de spam na caixa A e 1% na caixa B. O aluno pediu para aprender a conta antes de responder; a explicação usou o método das frequências (1.000 e-mails, separar pela taxa de base, depois aplicar a frequência da palavra em cada grupo).*

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Na primeira tentativa de conta, aplicou 10% e 1% sobre o total de e-mails, antes de separar spam e legítimos pela taxa de base. A ordem certa: (1) separar pela proporção de spam, (2) aplicar a frequência da palavra em cada grupo, (3) somar os que têm a palavra, (4) dividir.

## Refação da Q4 — rodada 1 — 2026-10-14
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: como a rede de Hopfield grava e recupera 20 assinaturas digitalizadas.*

| # | Resposta | Correta | |
|---|---|---|---|
| 4 | B | B | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.

## Refação da Q10 — rodada 1 — 2026-10-14
**Pontuação:** 1/1

*Pergunta nova sobre o mesmo conceito: qual cenário mais se parece com o começo de um novo inverno da IA.*

| # | Resposta | Correta | |
|---|---|---|---|
| 10 | D | D | ✅ |

### Para refazer
- Nenhuma.

### Pontos para revisar
- Nenhum.
