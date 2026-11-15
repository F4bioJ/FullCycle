# Gabarito — exercícios de contas de probabilidade

Exercícios em [contas-de-probabilidade.exercicios.md](contas-de-probabilidade.exercicios.md). A seção do guia que sustenta cada exercício aparece no fim da resolução.

---

## Nível básico

### B1. Probabilidade condicional em tabela

**a)** "Entre os funcionários do turno da noite, quantos trabalham com IA?"
Grupo: 120. Dentro dele, com IA: 30. **30 / 120 = 1/4 = 0,25.**

**b)** "Entre os que trabalham com IA, quantos são do turno da noite?"
Grupo: 50. Dentro dele, da noite: 30. **30 / 50 = 3/5 = 0,60.**

**c)** O numerador é o mesmo (30), mas o grupo mudou: 120 pessoas no turno da noite contra 50 que trabalham com IA. O que vem depois da barra define o denominador.

*Guia: seção 1.*

### B2. Fatores de um bigrama

| Fator | A anterior aparece… | …seguida de quê? | Probabilidade |
|---|---|---|---|
| a) P(gosto \| eu) | "eu" 3 vezes | gosto, gosto, odeio | **2/3** |
| b) P(de \| gosto) | "gosto" 2 vezes | de, de | **2/2 = 1** |
| c) P(chá \| de) | "de" 2 vezes | café, chá | **1/2** |
| d) P(chá \| odeio) | "odeio" 1 vez | chá | **1/1 = 1** |

*Guia: seção 3.*

### B3. Probabilidade de uma frase

**a)** "eu odeio chá" = P(odeio | eu) × P(chá | odeio) = 1/3 × 1 = **1/3**.
P(odeio | eu) = 1/3 porque "eu" aparece 3 vezes e só uma é seguida de "odeio".

**b)** "eu gosto de chá" = P(gosto | eu) × P(de | gosto) × P(chá | de) = 2/3 × 1 × 1/2 = **1/3**.

As duas frases têm a mesma probabilidade por caminhos diferentes: a primeira tem um fator baixo (1/3) e outro igual a 1; a segunda tem dois fatores abaixo de 1 (2/3 e 1/2).

*Guia: seção 3.*

### B4. Perda de um lote

**a)** Exemplo 1: −log(0,90) = **0,105**. Exemplo 2: −log(0,50) = **0,693**.

**b)** (0,105 + 0,693) / 2 = 0,798 / 2 = **0,399**.

*Guia: seção 4.*

### B5. Ler as duas direções

**a)** P("grátis" | spam): "entre os spams, que fração contém 'grátis'?". Vale **30%**, que é dado do enunciado.

**b)** P(spam | "grátis"): "entre os e-mails que contêm 'grátis', que fração é spam?". **Não vale 30%**: o grupo agora são os e-mails com "grátis", e não os spams. Os 30% respondem à pergunta da letra a. Para inverter é preciso o teorema de Bayes, que leva em conta a taxa de base e a frequência nos legítimos. Feita a conta (exemplo 2 do guia), o resultado é ≈ 91%.

*Guia: seções 1 e 2.*

---

## Nível intermediário

### I1. Bayes por contagem

| Passo | Conta | Resultado |
|---|---|---|
| 1. Separar | 20% de 1.000 / o resto | 200 spams, 800 legítimos |
| 2. Palavra em cada grupo | 50% de 200 / 5% de 800 | 100 spams, 40 legítimos |
| 3. Total com a palavra | 100 + 40 | 140 |
| 4. Dividir | 100 / 140 | **≈ 0,71** |

*Guia: seção 2.*

### I2. Mesma palavra, outra caixa

**a)**

| Passo | Conta | Resultado |
|---|---|---|
| 1. Separar | 2% de 10.000 / o resto | 200 spams, 9.800 legítimos |
| 2. Palavra em cada grupo | 50% de 200 / 5% de 9.800 | 100 spams, 490 legítimos |
| 3. Total com a palavra | 100 + 490 | 590 |
| 4. Dividir | 100 / 590 | **≈ 0,17** |

**b)** Não. Se caísse 10 vezes, iria de 71% para ≈7%, mas foi para ≈17%. Em 10.000 e-mails, os spams com a palavra caíram de 1.000 (no I1) para 100, dez vezes menos. Os legítimos com a palavra, porém, subiram de 400 para 490, porque há mais legítimos na caixa. O denominador não encolheu na mesma proporção do numerador, então o resultado não acompanha a taxa de base.

*Guia: seção 2, exemplo 3.*

### I3. Quem dá zero?

Antes das frases, a tabela de continuações do corpus:

| Anterior | Aparece | Seguida de |
|---|---|---|
| a | 3 vezes | aula, prova, aula |
| aula | 2 vezes | foi, foi |
| prova | 1 vez | foi |
| foi | 3 vezes | boa, difícil, longa |

**a)** "a prova foi boa" = P(prova | a) × P(foi | prova) × P(boa | foi) = 1/3 × 1 × 1/3 = **1/9**. Não é zero: a frase nunca foi vista, mas os três pares foram.

**b)** "a prova foi longa" = 1/3 × 1 × 1/3 = **1/9**. Também não é zero, pelo mesmo motivo.

**c)** "a aula foi difícil" = P(aula | a) × P(foi | aula) × P(difícil | foi) = 2/3 × 1 × 1/3 = **2/9**.

**d)** "a boa aula" = **zero**. O par "a boa" nunca aparece: depois de "a" só vêm "aula" e "prova". P(boa | a) = 0 e o produto zera. (O par "boa aula" também nunca aparece, mas basta um zero.)

O ponto do exercício: das quatro frases, três nunca apareceram no corpus e só uma dá zero. O que decide é se cada **par** foi visto.

*Guia: seção 3, armadilhas 1 e 3.*

### I4. Qual modelo perde menos?

**a)**

| | Modelo A | Modelo B |
|---|---|---|
| Perdas | 0,105, 0,105 e 2,303 | 0,693, 0,693 e 0,693 |
| Soma | 2,513 | 2,079 |
| Média | **≈ 0,838** | **≈ 0,693** |

O modelo B perde menos.

**b)** Probabilidade média: A = (0,90 + 0,90 + 0,10) / 3 ≈ **0,633**. B = **0,50**.

O modelo A tem a maior probabilidade média e, mesmo assim, a maior perda. O único erro confiante de A (0,10, perda de 2,303) custa mais do que os dois acertos confiantes economizam. Por isso a probabilidade média não serve para comparar modelos: é preciso aplicar o −log em cada exemplo antes da média.

*Guia: seção 4, regra de ouro.*

### I5. Cosseno

**a)** [1, 0] · [0, 1] = 0. Cosseno = **0**: perpendiculares.

**b)** [1, 2] · [2, 4] = 2 + 8 = 10. |[1, 2]| = √5 e |[2, 4]| = √20 = 2√5. Cosseno = 10 / (√5 × 2√5) = 10 / 10 = **1**: mesma direção, pois [2, 4] é o dobro de [1, 2].

**c)** [1, 0] · [1, 1] = 1. |[1, 0]| = 1 e |[1, 1]| = √2 ≈ 1,414. Cosseno = 1 / 1,414 ≈ **0,707**: ângulo de 45°.

**d)** [1, 2] · [−1, −2] = −1 − 4 = −5. Os dois tamanhos valem √5. Cosseno = −5 / 5 = **−1**: direções opostas.

*Guia: seção 5.*

---

## Nível avançado

### A1. Naive Bayes com duas palavras

Em 1.000 e-mails: 500 spams e 500 legítimos.

| Passo | Spam | Legítimo |
|---|---|---|
| 1. Grupo | 500 | 500 |
| 2a. Com "grátis" | 30% de 500 = 150 | 2% de 500 = 10 |
| 2b. Com "grátis" e "reunião" (supondo independência) | 1% de 150 = 1,5 | 10% de 10 = 1 |

Total com as duas palavras: 1,5 + 1 = 2,5. P(spam | as duas) = 1,5 / 2,5 = **0,60**.

Em forma de fórmula: peso do spam = 0,5 × 0,30 × 0,01 = 0,0015; peso do legítimo = 0,5 × 0,02 × 0,10 = 0,001; 0,0015 / 0,0025 = 0,60.

**Faz sentido.** "Grátis" é 15 vezes mais comum no spam (30% contra 2%). "Reunião" é 10 vezes mais comum no legítimo (10% contra 1%). As duas forças quase se cancelam, com vantagem de 15 para 10 para o spam, ou seja, 1,5 para 1, que dá 60% contra 40%.

*Guia: seção 2, Naive Bayes.*

### A2. O alerta de fraude

| Passo | Conta | Resultado |
|---|---|---|
| 1. Separar | 0,1% de 100.000 / o resto | 100 fraudes, 99.900 legítimas |
| 2. Alerta em cada grupo | 99% de 100 / 1% de 99.900 | 99 fraudes, 999 legítimas |
| 3. Total de alertas | 99 + 999 | 1.098 |
| 4. Dividir | 99 / 1.098 | **≈ 0,09** |

Só **9%** dos alertas são fraude, embora o detector acerte 99% das fraudes. As fraudes são tão raras que o 1% de erro sobre as quase 100 mil transações legítimas gera dez vezes mais alertas falsos do que verdadeiros.

Se o seu chute foi perto de 99%, você trocou P(alerta | fraude), que é o 99% do enunciado, por P(fraude | alerta), que é o que a pergunta pede. É a mesma inversão da letra b do B5.

*Guia: seção 2.*

### A3. Suavização de Laplace

**a)** "gosto" aparece 2 vezes, seguida de "de" e "de".
P(de | gosto) = 2/2 = **1**. P(chá | gosto) = 0/2 = **0**.

**b)** Com Laplace: (contagem do par + 1) / (contagem de "gosto" + V) = (contagem + 1) / (2 + 6).
P(de | gosto) = (2 + 1) / 8 = **3/8**. P(chá | gosto) = (0 + 1) / 8 = **1/8**.

**c)** Saiu do par visto. A linha de "gosto" continua somando 1: "de" fica com 3/8, e as outras cinco palavras do vocabulário ficam com 1/8 cada (3/8 + 5 × 1/8 = 8/8). O "de", que tinha tudo (1), caiu para 3/8 para que os pares nunca vistos pudessem receber alguma probabilidade.

*Guia: seção 3, suavização de Laplace.*

### A4. Bigrama x trigrama

**a) Bigrama.**

| Fator | A anterior aparece… | …seguida de quê? | Probabilidade |
|---|---|---|---|
| P(gato \| o) | "o" 3 vezes | gato, cão, gato | 2/3 |
| P(preto \| gato) | "gato" 2 vezes | preto, branco | 1/2 |
| P(come \| preto) | "preto" 2 vezes | dorme, come | 1/2 |

P = 2/3 × 1/2 × 1/2 = **1/6**.

**b) Trigrama.**

| Fator | O par anterior aparece… | …seguido de quê? | Probabilidade |
|---|---|---|---|
| P(gato \| o) | "o" 3 vezes | gato, cão, gato | 2/3 |
| P(preto \| o gato) | "o gato" 2 vezes | preto, branco | 1/2 |
| P(come \| gato preto) | "gato preto" 1 vez | dorme | **0** |

P = 2/3 × 1/2 × 0 = **0**.

**c)** Com mais contexto, cada "anterior" fica mais específico e aparece menos vezes no corpus. "Gato preto" aparece uma vez só, seguido de "dorme", então o trigrama nunca viu "gato preto come". O bigrama olha só "preto", que aparece duas vezes, e já viu "preto come" na frase do cão. Mais contexto exige muito mais dados para estimar cada caso; com o mesmo corpus, mais frases possíveis ficam com zero. É o problema dos dados esparsos.

*Guia: seção 3, trigrama e dados esparsos.*

### A5. Ranking de uma busca semântica

**a)** |consulta| = |[1, 1]| = √2 ≈ 1,414.

| Documento | Produto com [1, 1] | Tamanho | Cosseno |
|---|---|---|---|
| D1 [2, 0] | 2 | 2 | 2 / (2 × 1,414) ≈ **0,707** |
| D2 [3, 3] | 6 | √18 = 3√2 ≈ 4,243 | 6 / (4,243 × 1,414) = 6 / 6 = **1** |
| D3 [1, 2] | 3 | √5 ≈ 2,236 | 3 / (2,236 × 1,414) ≈ 3 / 3,162 ≈ **0,949** |
| D4 [−1, −1] | −2 | √2 ≈ 1,414 | −2 / (1,414 × 1,414) = −2 / 2 = **−1** |

**b)** D2 (1) → D3 (0,949) → D1 (0,707) → D4 (−1).

**c)** Não. D2 ficou em primeiro porque aponta exatamente na direção da consulta: [3, 3] é a consulta multiplicada por 3. Se D2 fosse [0,3, 0,3], o cosseno seria o mesmo 1. O tamanho é cancelado pela divisão; só a direção conta.

*Guia: seção 5.*
