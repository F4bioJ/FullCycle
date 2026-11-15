# Redes neurais profundas — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 2

A aula definiu rede profunda pelo número de camadas, apresentou os embeddings e mostrou a rede feedforward com janela fixa. Este material explica por que camadas só ajudam com não linearidade, resolve o XOR à mão com uma rede de duas camadas, e detalha a diferença entre somar e concatenar embeddings.

---

## 1. Profundidade só vale com não linearidade

Uma camada faz uma conta simples:

```
saída = f(W · entrada + b)
```

`W` é uma matriz de pesos, `b` um vetor de ajuste e `f` a **função de ativação**. É a `f` que justifica empilhar camadas.

Sem ela, duas camadas seguidas dão `W2 · (W1 · x)`, que é igual a `(W2 · W1) · x`: **uma única camada** com outra matriz. Dez camadas lineares empilhadas calculam o mesmo que uma. A profundidade seria ilusória.

A ativação mais comum hoje é a **ReLU**: `f(x) = max(0, x)`. Ela zera os negativos e mantém os positivos. Essa "dobra" simples basta para que cada camada faça algo que a anterior não conseguia.

### O XOR resolvido com duas camadas

Na aula de história, o perceptron de uma camada não aprendia o XOR, porque nenhuma reta separa as saídas. Com uma camada oculta de dois neurônios e ReLU, a solução cabe em três linhas:

```
h1 = ReLU(x1 + x2)
h2 = ReLU(x1 + x2 − 1)
y  = h1 − 2 · h2
```

| x1 | x2 | h1 | h2 | y | XOR |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 2 | 1 | 0 | 0 |

A camada oculta **redesenha o espaço**: nos novos eixos (h1, h2), os quatro pontos passam a ser separáveis por uma reta. É isso que "transformar, combinar e reinterpretar" significa na prática. Cada camada cria uma representação em que o problema fica mais fácil para a seguinte.

## 2. Como a rede aprende: backpropagation

No exemplo acima os pesos foram escolhidos à mão. Em uma rede real, são milhões, e saem do treino:

1. a rede calcula a saída para um exemplo;
2. a função de perda mede o erro;
3. o **backpropagation** calcula o quanto cada peso contribuiu para o erro;
4. cada peso é ajustado um pouco na direção que reduz o erro.

O backpropagation é a regra da cadeia do cálculo aplicada de trás para frente, uma camada por vez. O "quanto cada peso contribuiu" se chama **gradiente**.

Um detalhe que volta na próxima aula: para chegar às primeiras camadas, o gradiente é **multiplicado** a cada camada que atravessa. Se os fatores são pequenos, ele encolhe até sumir. É o desvanecimento de gradiente, que nas RNNs vira o problema central.

## 3. De one-hot a embedding

Antes dos embeddings, uma palavra era um vetor **one-hot**: do tamanho do vocabulário, com um único 1.

```
gato  = [0, 0, 1, 0, ..., 0]   (50.000 posições)
cão   = [0, 0, 0, 1, ..., 0]
```

Nessa representação, **todas as palavras ficam à mesma distância umas das outras**. "Gato" é tão diferente de "cão" quanto de "imposto". É o defeito do bigrama: símbolos isolados, sem semelhança.

O embedding troca isso por um vetor denso e curto, como 300 números. Na prática, a camada de embedding é uma **tabela**: uma linha por palavra do vocabulário. "Converter a palavra em vetor" é consultar a linha dela.

| | One-hot | Embedding |
|---|---|---|
| Tamanho | o vocabulário (50.000) | algumas centenas |
| Valores | um 1, o resto 0 | números reais |
| Semelhança entre palavras | nenhuma | proximidade no espaço |
| De onde vem | definido à mão | aprendido no treino |

Com 50 mil palavras e 300 dimensões, a tabela tem **15 milhões de números**, todos ajustados pelo backpropagation junto com o resto da rede. Os vetores não são projetados por ninguém: ficam próximos porque isso ajuda a prever a próxima palavra.

## 4. O modelo da aula tem nome

Prever a próxima palavra combinando os embeddings de uma janela fixa é o **modelo de linguagem neural de Bengio e colegas, de 2003**. O fluxo:

```
"o cachorro está no"
   → 4 embeddings (4 × 300 números)
   → concatenados em um vetor de 1.200
   → camada oculta
   → uma nota para cada palavra do vocabulário
   → "jardim"
```

Ele resolveu o problema que os n-gramas não resolviam. Se "gato" e "cão" têm vetores próximos, o que a rede aprende com "o gato está no jardim" **vale em parte** para "o cão está no jardim", mesmo que essa frase nunca tenha aparecido.

### Onde estão os parâmetros

Com janela de 4, embeddings de 300 e camada oculta de 500 neurônios:

| Parte | Conta | Parâmetros |
|---|---|---|
| Tabela de embeddings | 50.000 × 300 | 15 milhões |
| Camada oculta | 1.200 × 500 | 600 mil |
| Camada de saída | 500 × 50.000 | 25 milhões |

A maior parte do modelo está nas **pontas**: converter palavras em vetores e vetores em palavras. O "raciocínio" do meio é a menor parte. Essa proporção muda bastante nos LLMs, mas o custo de uma saída do tamanho do vocabulário continua existindo.

## 5. Somar × concatenar

A aula disse que somar ou concatenar os embeddings dá resultados parecidos para "o cachorro mordeu o homem" e "o homem mordeu o cachorro". As duas operações são bem diferentes.

Com vetores de brinquedo, cachorro = [1, 0] e homem = [0, 1]:

| Operação | cachorro, homem | homem, cachorro | Preserva a ordem? |
|---|---|---|---|
| Soma | [1, 1] | [1, 1] | não |
| Concatenação | [1, 0, 0, 1] | [0, 1, 1, 0] | sim |

A **soma perde a ordem** por completo, porque a + b = b + a. A **concatenação preserva**: cada palavra ocupa uma faixa própria do vetor.

Então por que a concatenação ainda vai mal? Porque cada posição da janela tem **pesos próprios**. O que a rede aprende sobre "cachorro na posição 1" não é transferido para "cachorro na posição 3". Ela precisa reaprender a mesma palavra em cada posição, e generaliza mal.

### O vetor é o mesmo; o peso muda por posição

Para ver onde fica a "posição", abra a camada oculta. Ela multiplica o vetor concatenado por uma matriz W. Como o vetor tem uma faixa por posição, W também se divide em **um bloco por faixa**:

```
vetor concatenado:   [ e₁ | e₂ ]        (e₁ = palavra da posição 1, e₂ = da posição 2)
pesos da camada:     [ W₁ | W₂ ]
camada oculta:       h = W₁·e₁ + W₂·e₂
```

Um neurônio oculto, com W₁ = [2, −1] e W₂ = [0, 1], e os mesmos vetores de brinquedo, cachorro = [1, 0] e homem = [0, 1]:

| Janela | Conta | h | Quanto "cachorro" contribuiu |
|---|---|---|---|
| cachorro, homem | W₁·[1, 0] + W₂·[0, 1] = 2 + 1 | 3 | 2 (passou por W₁) |
| homem, cachorro | W₁·[0, 1] + W₂·[1, 0] = −1 + 0 | −1 | 0 (passou por W₂) |

Repare em duas coisas:

1. **O embedding de "cachorro" é [1, 0] nas duas janelas.** A tabela de embeddings tem uma linha por palavra e não sabe nada de posição. Quem sabe a posição é o **bloco de pesos** que o vetor encontra.
2. **O treino também é separado.** Quando "cachorro" aparece na posição 1, o backprop ajusta W₁. Quando aparece na posição 2, ajusta W₂. Se no treino "não" quase sempre vem na posição 2, a regra "não inverte o sentimento" fica gravada só em W₂. Na posição 1, o mesmo vetor de "não" passa por um W₁ que quase nunca o viu.

Com uma janela de 4, são 4 blocos que aprendem 4 versões da mesma coisa, cada um com cerca de um quarto dos dados.

### Compartilhar os pesos

A solução das próximas aulas é **usar o mesmo bloco de pesos em todas as posições**:

- **RNN:** processa uma palavra por vez com a mesma conta, hₜ = f(W·xₜ + U·hₜ₋₁). O W que trata "não" no passo 1 é o mesmo do passo 5. A ordem entra pelo estado hₜ₋₁, que carrega o que veio antes.
- **Transformer:** as mesmas matrizes de atenção (W_Q, W_K, W_V) e a mesma MLP são aplicadas a todos os tokens. Como isso, sozinho, não sabe a ordem, ele **soma ao embedding um vetor de posição** (o *positional encoding*).

Não confunda os dois mecanismos. "O vetor de entrada muda conforme a posição" acontece no Transformer, de propósito, por causa do positional encoding. Na feedforward com janela, o vetor é o mesmo e quem muda são os pesos. São estratégias opostas para o mesmo problema: a feedforward guarda a posição **nos pesos** (e paga caro por isso), e o Transformer a guarda **no vetor** (e com isso pode compartilhar os pesos).

## 6. Os três limites e para onde eles levam

| Limite | Causa | Quem resolve |
|---|---|---|
| Contexto limitado | a janela tem tamanho fixo | RNN (estado) e depois atenção |
| Ordem mal aproveitada | pesos separados por posição | pesos compartilhados |
| Sem memória | cada janela é processada do zero | estado recorrente |

Aumentar a janela não resolve: a camada de entrada cresce junto, a rede precisa de mais dados e o que está fora da janela continua invisível.

---

## O que a aula simplificou

- **"Profunda = número de camadas."** Só com não linearidade entre elas. Camadas lineares empilhadas equivalem a uma.
- **"Somar ou concatenar dá um resultado muito parecido."** A soma perde a ordem e a concatenação preserva. O defeito da concatenação é outro: pesos separados por posição.
- **"Técnicas de embedding: GloVe, BERT, GPT."** GloVe produz um vetor fixo por palavra. BERT e GPT produzem vetores que mudam conforme a frase. São gerações diferentes.
- **"As redes profundas deslancharam a partir dos anos 90."** As ideias amadureceram nessa época, mas a virada prática veio por volta de 2012, com redes treinadas em GPU.
- **"É difícil rastrear o caminho."** Vale, e tem consequência: explicar por que uma rede decidiu algo é um campo de pesquisa em aberto.

## Implicações para quem constrói software com IA

- **Embedding é uma tabela aprendida.** Ao usar um modelo de embeddings para busca, você consome o resultado desse treino. Dados muito diferentes dos de treino dão vetores piores.
- **A representação decide o que generaliza.** Trocar identificadores isolados por vetores é o que permite ao modelo aproveitar semelhanças.
- **Mais camadas não é sempre melhor.** Profundidade aumenta a capacidade e também a dificuldade de treinar e de explicar.
- **O vocabulário custa nas duas pontas.** É uma das razões de os LLMs usarem pedaços de palavra (tokens) em vez de palavras inteiras, assunto da aula de Tokens.

## Armadilhas comuns

- Achar que a rede "entende" as dimensões do embedding (nenhuma dimensão tem significado definido por alguém).
- Achar que concatenar resolve a ordem sem custo.
- Confundir embedding estático com contextual.
- Esquecer a função de ativação ao pensar em profundidade.

## Fontes

- Perceptron (limite do XOR e redes multicamada) — https://en.wikipedia.org/wiki/Perceptron
- Backpropagation (regra da cadeia de trás para frente, ativações, ReLU) — https://en.wikipedia.org/wiki/Backpropagation
- Word n-gram language model (modelo neural de Bengio et al., 2003, como sucessor) — https://en.wikipedia.org/wiki/Word_n-gram_language_model
- Word2vec (embeddings estáticos x contextuais) — https://en.wikipedia.org/wiki/Word2vec
- AlexNet (virada de 2012) — https://en.wikipedia.org/wiki/AlexNet
