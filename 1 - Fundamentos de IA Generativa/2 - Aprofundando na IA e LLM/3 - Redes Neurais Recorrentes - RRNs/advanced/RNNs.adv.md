# RNNs — material avançado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 3

A aula apresentou a RNN como a rede que ganhou memória, descreveu o desvanecimento e a explosão de gradiente e mostrou LSTM e GRU como remendos. Este material abre a equação da RNN, mostra de onde vêm os dois problemas de gradiente, explica por que a LSTM funciona e corrige o que a aula disse sobre o conteúdo da memória.

---

## 1. A RNN em uma linha

```
h_t = tanh(W_h · h_(t−1) + W_x · x_t + b)
```

A cada palavra, o novo estado `h_t` é calculado a partir de duas coisas: o estado anterior `h_(t−1)` e o embedding da palavra atual `x_t`. A `tanh` é a função de ativação, que mantém os valores entre −1 e 1.

Dois pontos estruturais:

- **O estado é um vetor de números contínuos**, com algumas centenas de posições. É a troca anunciada na aula de Markov: em vez de uma categoria ("Chuva"), um resumo numérico de tudo o que foi lido.
- **Os pesos são os mesmos em todos os passos.** A mesma `W_h` e a mesma `W_x` processam a primeira palavra e a centésima. Isso resolve o defeito da feedforward, que tinha pesos separados por posição, e permite ler sequências de qualquer tamanho com poucos parâmetros.

O compartilhamento de pesos é a virtude da RNN e, como se verá, a origem do problema dela.

## 2. O que a memória guarda

A aula disse que a RNN "não guarda as palavras, guarda gradientes". As duas metades precisam de ajuste.

- **O estado guarda ativações**: o vetor `h_t`, um resumo comprimido do que foi lido. Ele existe durante o uso do modelo e durante o treino.
- **Gradientes só existem no treino.** São o sinal de correção que volta pela rede para ajustar os pesos. Quando o modelo está em uso, não há gradiente nenhum.

Essa distinção muda a leitura do problema seguinte.

## 3. De onde vêm o desvanecimento e a explosão

No treino, o erro cometido no fim da frase precisa voltar até o começo para ajustar os pesos. É o **backpropagation through time**: a rede é "desenrolada" em uma cadeia com um elo por palavra, e o gradiente percorre os elos de trás para frente.

Em cada elo, ele é multiplicado por um fator que depende de `W_h` e da derivada da `tanh`. Como `W_h` é **a mesma em todos os passos**, o fator se repete:

| Fator por passo | Depois de 50 passos | Nome |
|---|---|---|
| 0,9 | 0,9⁵⁰ ≈ 0,005 | desvanecimento |
| 1,1 | 1,1⁵⁰ ≈ 117 | explosão |

Mesma causa, direções opostas. Sepp Hochreiter analisou o problema em sua tese de 1991.

### O que o desvanecimento causa, de fato

O desvanecimento é um **problema de aprendizado**. O sinal de erro vindo de uma palavra distante chega tão fraco ao começo da frase que os pesos não são ajustados para aquela relação. A rede **nunca aprende** a ligar o sujeito do início ao verbo do fim.

A rede treinada não "esquece" por ter gradientes pequenos na hora de responder. Ela foi treinada sem conseguir aprender dependências longas, e por isso o estado `h_t` passa a ser dominado pelas palavras recentes.

### A explosão tem remédio simples

Pascanu, Mikolov e Bengio propuseram em 2012 o **corte da norma do gradiente** (gradient clipping): se o gradiente passa de um limite, ele é reduzido para o limite, mantendo a direção.

```python
norma = tamanho(gradiente)
if norma > limite:
    gradiente = gradiente * (limite / norma)
```

O sintoma típico da explosão no treino é a perda dar saltos enormes ou virar `NaN`. O corte resolve na maioria dos casos. O desvanecimento não tem um conserto tão barato, e por isso exigiu uma arquitetura nova.

## 4. Por que a LSTM funciona

A LSTM acrescenta um segundo estado, o **estado de célula** `c_t`, atualizado assim:

```
c_t = f_t ⊙ c_(t−1) + i_t ⊙ candidato_t
```

`f_t` é a porta de esquecimento, `i_t` a porta de entrada e `⊙` é a multiplicação posição a posição.

O que importa é o **sinal de mais**. Na RNN simples, o estado antigo passa por uma multiplicação de matriz e por uma `tanh` a cada passo. Na LSTM, o estado de célula antigo é só multiplicado pela porta de esquecimento e **somado** ao conteúdo novo. Quando `f_t` fica perto de 1, a informação e o gradiente atravessam o passo quase intactos.

Os autores chamaram isso de "carrossel de erro constante". É um atalho para o gradiente, a mesma ideia que reaparece nas conexões residuais do Transformer.

### As portas são botões de volume

Cada porta é um vetor de números **entre 0 e 1**. Uma porta de esquecimento em 0,9 mantém 90% daquela posição da memória. "Decidir o que apagar" é reduzir o volume de algumas posições, e a rede aprende esses valores no treino.

### Três fatos sobre a história

- Uma primeira versão apareceu em relatório técnico de 1995. O artigo mais citado, de Hochreiter e Schmidhuber, é de **1997**.
- A LSTM original tinha só as portas de **entrada e saída**. A porta de **esquecimento** foi acrescentada em 1999, por Gers, Schmidhuber e Cummins, para que a rede pudesse reiniciar o próprio estado.
- A LSTM **atenua** o desvanecimento, sem eliminá-lo, e **ainda pode sofrer com a explosão** de gradiente. O corte continua necessário.

## 5. GRU: a versão enxuta

A GRU vem do artigo de Cho e colegas, de junho de 2014, o mesmo que propôs o encoder-decoder com RNNs para tradução.

| | LSTM | GRU |
|---|---|---|
| Portas | entrada, esquecimento, saída | atualização, reset |
| Estados | oculto + célula | só o oculto |
| Parâmetros | mais | menos |

A porta de **atualização** faz o papel conjunto de entrada e esquecimento: o que entra de novo é exatamente o que sai de velho. A porta de **reset** decide quanto do passado usar ao calcular o conteúdo novo. Não há estado de célula separado.

## 6. Os dois gargalos que sobraram

**O vetor de tamanho fixo.** Tudo o que a rede leu precisa caber em `h_t`. Em tradução, o encoder comprimia a frase inteira em um vetor de tamanho fixo, e o decoder gerava a tradução a partir dele. Frases longas não cabiam.

Três meses depois do artigo da GRU, Bahdanau, Cho e Bengio propuseram a saída: deixar o decoder **consultar todos os estados** do encoder, com pesos diferentes a cada palavra gerada. É o mecanismo de atenção. Bahdanau é coautor dos dois artigos.

**A fila.** O passo t depende do passo t−1, então nada roda em paralelo. Os números da tabela do artigo do Transformer resumem a diferença:

| Camada | Operações sequenciais | Caminho máximo entre dois tokens |
|---|---|---|
| Recorrente | O(n) | O(n) |
| Self-attention | O(1) | O(1) |

A RNN faz n passos em sequência, e a informação de um token precisa atravessar até n passos para alcançar outro. A atenção faz tudo em um passo. LSTM e GRU melhoram a segunda coluna na prática, mas não mexem na primeira.

---

## O que a aula simplificou

- **"A memória guarda gradientes, não palavras."** A memória guarda ativações: um vetor que resume o que foi lido. Gradientes só existem durante o treino.
- **"Gradiente pequeno faz a rede perder a rastreabilidade e alucinar."** O desvanecimento impede a rede de *aprender* relações distantes. É um defeito de treino, que depois aparece como falta de contexto longo.
- **"A LSTM tem três portas."** A versão de 1997 tinha duas. A de esquecimento veio em 1999.
- **"A LSTM resolve os problemas de gradiente."** Atenua o desvanecimento e ainda pode sofrer explosão.
- **"A porta decide o que entra e o que apaga."** As portas são valores entre 0 e 1, aprendidos, que regulam quanto passa.

## Implicações para quem constrói software com IA

- **Perda virando `NaN` no treino de um modelo sequencial costuma ser explosão de gradiente.** O primeiro teste é o corte de gradiente.
- **LSTM e GRU ainda são boas escolhas** para séries temporais e sequências curtas, em hardware modesto, onde um Transformer seria exagero.
- **Um vetor fixo é um gargalo.** Qualquer sistema que resume um texto longo em um único vetor (um embedding de documento, por exemplo) perde detalhe. É a mesma lição do seq2seq.
- **A ideia do atalho aditivo é geral.** Estado de célula na LSTM, conexão residual no Transformer: somar em vez de multiplicar mantém o gradiente vivo.

## Armadilhas comuns

- Achar que a RNN sofre de desvanecimento na hora de responder (o problema é no treino).
- Achar que LSTM e GRU paralelizam.
- Confundir estado oculto com estado de célula.
- Achar que a porta é um interruptor de liga e desliga.

## Fontes

- Long short-term memory (histórico, portas, equação do estado de célula, limites) — https://en.wikipedia.org/wiki/Long_short-term_memory
- Pascanu, Mikolov, Bengio, *On the difficulty of training Recurrent Neural Networks*, 2012 — https://arxiv.org/abs/1211.5063
- Cho et al., *Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation*, 2014 — https://arxiv.org/abs/1406.1078
- Bahdanau, Cho, Bengio, *Neural Machine Translation by Jointly Learning to Align and Translate*, 2014 — https://arxiv.org/abs/1409.0473
- Vaswani et al., *Attention Is All You Need*, 2017 (Tabela 1) — https://arxiv.org/abs/1706.03762
