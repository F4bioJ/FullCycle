# Evolução dos modelos 2 gramas — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 6

A aula apresentou o bigrama como o modelo que prevê a próxima palavra olhando só a anterior, e mostrou por que ele gera texto repetitivo e sem coerência. Este material faz as contas de um bigrama à mão, explica por que aumentar a janela não resolve e aponta a limitação que a aula não nomeou: o bigrama não sabe que "gato" e "cão" são parecidos.

---

## 1. Um bigrama inteiro em uma tabela

Um modelo de bigrama é uma tabela de contagens. Treine-o com três frases:

```
o gato preto dorme
o gato branco come
o cão preto come
```

Conte quantas vezes cada palavra é seguida por cada outra:

| Depois de… | vem… | Contagem | Probabilidade |
|---|---|---|---|
| o | gato | 2 | 2/3 |
| o | cão | 1 | 1/3 |
| gato | preto | 1 | 1/2 |
| gato | branco | 1 | 1/2 |
| preto | dorme | 1 | 1/2 |
| preto | come | 1 | 1/2 |

A fórmula é uma divisão:

```
P(palavra | anterior) = contagem(anterior, palavra) / contagem(anterior)
```

Não há pesos, camadas nem treino iterativo. "Treinar" é contar.

### A probabilidade de uma frase

Multiplicam-se as probabilidades dos pares, pela regra da cadeia:

```
P(o gato preto dorme) = P(gato|o) × P(preto|gato) × P(dorme|preto)
                      = 2/3 × 1/2 × 1/2 = 1/6
```

Repare no que aconteceu no último fator. Para decidir entre "dorme" e "come", o modelo consultou só a linha "preto". Não importa se o animal era gato ou cão: essa informação já ficou para trás. É a "ausência de memória" da aula, visível na conta.

## 2. A suposição de Markov

Formalmente, o bigrama assume que a próxima palavra depende **apenas da anterior**. É a propriedade de Markov, tema da aula seguinte.

A família inteira segue a mesma lógica: o unigrama trata cada palavra como independente, o bigrama olha uma palavra para trás, o trigrama olha duas, e o n-grama olha n−1.

## 3. Por que não basta aumentar o n

Se o problema é janela curta, a saída óbvia seria usar 10-gramas. Dois obstáculos impedem isso.

**As combinações explodem.** Com um vocabulário de 50 mil palavras:

| Modelo | Combinações possíveis |
|---|---|
| Bigrama | 50.000² = 2,5 bilhões |
| Trigrama | 50.000³ = 125 trilhões |
| 5-grama | cerca de 3 × 10²³ |

**Os dados ficam esparsos.** Quanto mais longa a sequência, menor a chance de ela ter aparecido no treino. A maior parte das frases corretas de cinco palavras nunca foi escrita por ninguém.

### O problema da frequência zero

Um par que não apareceu no treino recebe probabilidade **zero**. Como a probabilidade da frase é um produto, um único zero **anula a frase inteira**. No exemplo, "o cão branco dorme" é uma frase perfeita e recebe probabilidade zero, porque "cão branco" nunca foi visto.

A resposta clássica é a **suavização** (smoothing): reservar um pouco de probabilidade para o que não foi visto. Há uma família inteira de técnicas, da mais simples (somar 1 a todas as contagens, a suavização de Laplace) às mais refinadas (back-off, Kneser–Ney). Palavras fora do vocabulário são trocadas por um token especial, `<unk>`.

São remendos. O defeito está na representação, como mostra a próxima seção.

## 4. A limitação que a aula não nomeou: palavras são símbolos isolados

Para o bigrama, "gato" e "cão" são dois identificadores **sem nenhuma relação**. Ver "o gato dorme" mil vezes não ensina nada sobre "o cão dorme". Cada combinação precisa aparecer no treino para existir.

Um humano generaliza na hora: se gatos dormem, cães provavelmente também. O bigrama não consegue, porque não tem onde guardar a ideia de que duas palavras são **parecidas**.

É isso que os **embeddings** resolvem (aula 2 do capítulo 2). Se "gato" e "cão" têm vetores próximos, o que o modelo aprende sobre um vale, em boa parte, para o outro. A passagem do bigrama para as redes neurais é a troca de uma **tabela de símbolos** por um **espaço de vetores**.

## 5. O loop "gato preto gato preto" não é só do bigrama

A aula mostrou o modelo repetindo blocos. O loop tem uma causa precisa: **escolher sempre a continuação mais provável**.

Se a palavra mais provável depois de A é B, e a cadeia de escolhas mais prováveis volta em algum momento para A, o modelo fica preso em um ciclo. Não há memória para perceber a repetição.

Duas observações:

- **Sortear em vez de escolher o máximo** quebra o ciclo: de vez em quando sai a segunda ou a terceira opção. É o papel da amostragem e da temperatura.
- **LLMs também entram em loop** quando forçados a escolher sempre o token mais provável. O fenômeno é da forma de gerar, e não de um modelo específico.

Por isso vale separar duas coisas que a aula juntou. O loop é um defeito do **processo de geração**. A alucinação, no sentido usado mais adiante no curso, é o modelo afirmar com fluência algo falso.

## 6. O que o bigrama e o LLM têm em comum

A aula disse que o bigrama "não compreende semântica, só padrões estatísticos". Um LLM também é um modelo estatístico da próxima palavra. As diferenças são três:

| | Bigrama | LLM |
|---|---|---|
| Contexto | 1 palavra | milhares de tokens |
| Representação | símbolos isolados em uma tabela | vetores em que proximidade é semelhança |
| Como combina o contexto | não combina | atenção: pesa cada token conforme a relevância |

Os modelos de n-gramas foram superados pelas redes recorrentes e estas, pelos Transformers. A tarefa é a mesma do começo ao fim: **prever a próxima palavra**. O que evoluiu foi a quantidade de contexto e a forma de representá-lo.

---

## O que a aula simplificou

- **"O bigrama não tem semântica porque é só estatística."** O LLM também é estatística. A semântica aparece quando a estatística opera sobre vetores e sobre um contexto longo.
- **"Com mais processamento veio a mudança."** Processamento sozinho não resolve: aumentar o n esbarra na explosão combinatória e nos dados esparsos. Foi preciso mudar a representação.
- **"O loop é uma certa alucinação."** O loop vem de escolher sempre o mais provável sem memória. Alucinação é outro fenômeno.
- **"Depois de 'gato' ele sempre põe 'preto'."** Só se a geração escolher sempre o máximo. Com sorteio, as outras continuações também saem.

## Implicações para quem constrói software com IA

- **Repetição na saída de um LLM costuma ser configuração de geração** (temperatura muito baixa, sem penalidade de repetição), e não defeito do modelo.
- **Tenha uma linha de base simples.** Um modelo de n-gramas ou de contagem se constrói em minutos e mostra quanto do problema é fácil.
- **Generalizar exige representação.** Sistemas que tratam categorias como identificadores isolados sofrem do mesmo mal do bigrama: nada do que se aprende sobre um item vale para o vizinho.
- **Contexto custa.** O bigrama é barato justamente por olhar uma palavra. Cada ganho de contexto, até o Transformer, foi pago em computação.

## Armadilhas comuns

- Achar que n-grama maior resolveria o problema.
- Confundir loop de geração com alucinação.
- Dizer que LLMs "entendem" e bigramas "só fazem estatística", como se fossem naturezas diferentes.
- Esquecer que uma probabilidade zero em um produto zera tudo.

## Fontes

- Word n-gram language model (definições, estimativa por contagem, frequência zero, suavização, `<unk>`, sucessores) — https://en.wikipedia.org/wiki/Word_n-gram_language_model
