# Exercícios — contas de probabilidade

Base: [contas-de-probabilidade.md](contas-de-probabilidade.md). Gabarito com a resolução completa em [contas-de-probabilidade.exercicios.gabarito.md](contas-de-probabilidade.exercicios.gabarito.md).

Faça cada conta montando a tabela de passos do guia. Quando precisar de −log, use esta tabela:

| p | 0,90 | 0,50 | 0,25 | 0,10 | 0,01 |
|---|---|---|---|---|---|
| −log(p) | 0,105 | 0,693 | 1,386 | 2,303 | 4,605 |

---

## Nível básico

### B1. Probabilidade condicional em tabela

Uma empresa tem 200 funcionários:

| | Trabalha com IA | Não trabalha com IA | Total |
|---|---|---|---|
| Turno da noite | 30 | 90 | 120 |
| Turno do dia | 20 | 60 | 80 |
| **Total** | 50 | 150 | 200 |

a) Escreva em palavras e calcule P(trabalha com IA | turno da noite).
b) Escreva em palavras e calcule P(turno da noite | trabalha com IA).
c) Por que os dois resultados são diferentes?

### B2. Fatores de um bigrama

Corpus:

```
eu gosto de café
eu gosto de chá
eu odeio chá
```

Calcule, mostrando quantas vezes a anterior aparece e o que vem depois dela:
a) P(gosto | eu)
b) P(de | gosto)
c) P(chá | de)
d) P(chá | odeio)

### B3. Probabilidade de uma frase

Com o corpus do B2, calcule a probabilidade de:
a) "eu odeio chá"
b) "eu gosto de chá"

### B4. Perda de um lote

Um modelo deu ao token correto as probabilidades 0,90 e 0,50 em dois exemplos.
a) Qual é a perda de cada exemplo?
b) Qual é a perda média do lote?

### B5. Ler as duas direções

Em uma caixa de e-mail, 40% são spam. "Grátis" aparece em 30% dos spams e em 2% dos legítimos.
a) Escreva em palavras o que significa P("grátis" | spam) e diga quanto vale.
b) Escreva em palavras o que significa P(spam | "grátis"). Ele vale 30%? Justifique sem fazer a conta completa.

---

## Nível intermediário

### I1. Bayes por contagem

20% dos e-mails são spam. "Oferta" aparece em 50% dos spams e em 5% dos legítimos. Qual é a probabilidade de um e-mail com "oferta" ser spam? Use 1.000 e-mails e os quatro passos.

### I2. Mesma palavra, outra caixa

Mesma palavra do I1 (50% dos spams, 5% dos legítimos), mas a caixa tem só 2% de spam. Use 10.000 e-mails.
a) Qual é a probabilidade de um e-mail com "oferta" ser spam?
b) A taxa de spam caiu 10 vezes em relação ao I1. O resultado caiu 10 vezes? Explique por quê.

### I3. Quem dá zero?

Corpus:

```
a aula foi boa
a prova foi difícil
a aula foi longa
```

Para cada frase, diga se a probabilidade é zero ou não. Se for zero, aponte o par que zera. Se não for, calcule.
a) "a prova foi boa"
b) "a prova foi longa"
c) "a aula foi difícil"
d) "a boa aula"

### I4. Qual modelo perde menos?

Em três exemplos de treino:
- Modelo A dá ao token correto 0,90, 0,90 e 0,10.
- Modelo B dá 0,50 nos três.

a) Calcule a perda média de cada um.
b) Calcule a probabilidade média de cada um. O modelo com maior probabilidade média é o que tem menor perda?

### I5. Cosseno

Calcule o cosseno entre:
a) [1, 0] e [0, 1]
b) [1, 2] e [2, 4]
c) [1, 0] e [1, 1] (use √2 ≈ 1,414)
d) [1, 2] e [−1, −2]

---

## Nível avançado

### A1. Naive Bayes com duas palavras

50% dos e-mails são spam. As frequências das palavras em cada grupo:

| Palavra | Nos spams | Nos legítimos |
|---|---|---|
| "grátis" | 30% | 2% |
| "reunião" | 1% | 10% |

Um e-mail contém as duas palavras. Pelo Naive Bayes, qual é a probabilidade de ele ser spam? O resultado faz sentido, dado que uma palavra puxa para spam e a outra para legítimo?

### A2. O alerta de fraude

0,1% das transações de um banco são fraudes. Um detector acusa 99% das fraudes e também acusa, por engano, 1% das transações legítimas. Uma transação disparou o alerta. Qual é a probabilidade de ela ser fraude? Use 100.000 transações.

Antes de calcular, chute um valor. Depois compare o chute com a conta.

### A3. Suavização de Laplace

Use o corpus do B2. O vocabulário tem V = 6 palavras: eu, gosto, de, café, chá, odeio.

a) Sem suavização, quanto valem P(de | gosto) e P(chá | gosto)?
b) Com Laplace, quanto valem os mesmos dois fatores?
c) De onde saiu a probabilidade que P(chá | gosto) ganhou?

### A4. Bigrama x trigrama

Corpus:

```
o gato preto dorme
o cão preto come
o gato branco come
```

Frase: "o gato preto come".
a) Calcule a probabilidade pelo bigrama.
b) Calcule pelo trigrama, usando P(gato | o) como primeiro fator e depois P(preto | o gato) e P(come | gato preto).
c) Por que o modelo com mais contexto deu um resultado pior para uma frase perfeitamente possível?

### A5. Ranking de uma busca semântica

Um banco vetorial usa cosseno. A consulta é [1, 1]. Use √2 ≈ 1,414 e √5 ≈ 2,236.

| Documento | Vetor |
|---|---|
| D1 | [2, 0] |
| D2 | [3, 3] |
| D3 | [1, 2] |
| D4 | [−1, −1] |

a) Calcule o cosseno de cada documento com a consulta.
b) Ordene os documentos do mais para o menos parecido.
c) D2 tem o maior vetor. É por isso que ele ficou em primeiro?
