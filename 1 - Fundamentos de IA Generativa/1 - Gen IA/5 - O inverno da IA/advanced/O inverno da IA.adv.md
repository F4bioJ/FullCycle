# O inverno da IA — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 5

A aula cobriu cinquenta anos em poucos minutos: o inverno, Hopfield, a virada probabilística, Naive Bayes, Deep Learning, GANs e Transformers. Este material detalha os pontos em que a pressa deixou lacunas: houve dois invernos, a rede de Hopfield não é a RNN das próximas aulas, e o Naive Bayes cabe em uma conta que dá para fazer à mão.

---

## 1. Foram dois invernos, com gatilhos conhecidos

A aula falou de um inverno entre 1970 e 1980. A literatura registra dois, com datas que variam conforme a fonte:

| | Primeiro (≈ 1974–1980) | Segundo (≈ 1987–2000) |
|---|---|---|
| O que prometia | tradução automática, máquinas que raciocinam | sistemas especialistas em toda empresa |
| Gatilhos | relatório ALPAC (1966), livro *Perceptrons* (1969), relatório Lighthill (1973), cortes da DARPA | colapso das máquinas LISP (1987), declínio dos sistemas especialistas, fim do projeto japonês de Quinta Geração (1992) |
| Abordagem atingida | redes neurais e tradução | regras "se... então" |

Alguns detalhes mostram o padrão:

- **ALPAC, 1966.** O comitê concluiu que a tradução automática era **mais cara, menos precisa e mais lenta** que a humana. O apoio foi encerrado depois de cerca de 20 milhões de dólares investidos.
- **Lighthill, 1973.** O relatório ao parlamento britânico criticou a área por não cumprir as metas e apontou a **explosão combinatória**: métodos que funcionam em problemas de brinquedo e não escalam.
- **Quinta Geração.** O Japão reservou 850 milhões de dólares em 1981 para máquinas que conversassem e raciocinassem. As metas não foram atingidas e o projeto terminou em 1992.

O termo "inverno da IA" apareceu em 1984, em um debate da associação americana de IA. Roger Schank e Marvin Minsky avisaram que o entusiasmo havia saído do controle e descreveram uma reação em cadeia, por analogia com o "inverno nuclear". Três anos depois, a indústria começou a desabar.

O mecanismo é sempre o mesmo: **promessa acima da entrega → financiamento cortado → pesquisa parada**. A falha técnica sozinha não causa um inverno. A distância entre o que foi vendido e o que foi entregue, sim.

## 2. A rede de Hopfield não é a RNN das próximas aulas

A aula apresentou Hopfield (1982) como o criador das "redes neurais recorrentes". É preciso separar duas coisas que compartilham o adjetivo.

A **rede de Hopfield** é uma memória endereçada pelo conteúdo:

- uma única camada de neurônios, todos ligados entre si, com pesos simétricos;
- os padrões são gravados nos pesos por uma regra simples (neurônios que disparam juntos fortalecem a ligação);
- dada uma entrada parcial ou com ruído, a rede atualiza os neurônios até **cair em um mínimo de energia**, que corresponde a um padrão gravado.

Imagine uma bola solta em um terreno com vários vales. Cada vale é uma memória. Solte a bola perto de um vale e ela rola até o fundo. É a "memória associativa que completa padrões incompletos" da aula.

O que ela **não faz** é processar sequências. Ela recupera padrões estáticos. As RNNs do capítulo 2, que leem texto palavra por palavra carregando um estado, são outra arquitetura. "Recorrente", em Hopfield, quer dizer só que há realimentação entre os neurônios.

As redes de Hopfield clássicas são pouco usadas hoje: têm capacidade limitada e não combinam com o treino por gradiente. A importância é histórica, e rendeu a Hopfield o Nobel de Física de 2024, dividido com Geoffrey Hinton.

## 3. A virada probabilística, em uma conta

O exemplo do boneco de neve ilustra a troca da certeza pela probabilidade. O Naive Bayes mostra como isso vira cálculo.

**Teorema de Bayes**, aplicado a spam:

```
P(spam | palavra) = P(palavra | spam) × P(spam) / P(palavra)
```

Suponha uma caixa de entrada em que 40% dos e-mails são spam. A palavra "grátis" aparece em 30% dos spams e em 2% dos legítimos. Chegou um e-mail com "grátis":

```
spam e contém "grátis":      0,30 × 0,40 = 0,120
legítimo e contém "grátis":  0,02 × 0,60 = 0,012

P(spam | "grátis") = 0,120 / (0,120 + 0,012) ≈ 0,91
```

Uma única palavra levou a suspeita de 40% para 91%. O filtro repete isso para cada palavra e combina os resultados.

### Por que "naive" (ingênuo)

Para combinar, o modelo assume que **as palavras são independentes entre si**, dada a classe. É falso: "cartão" e "crédito" aparecem juntas. A suposição é considerada pouco realista, e é dela que vem o nome.

Funciona mesmo assim porque a decisão só precisa que a **classe certa seja a mais provável**. As probabilidades saem distorcidas, mas a ordem entre elas costuma se manter.

### Linha do tempo e ponto fraco

Algoritmos bayesianos já filtravam e-mail em 1996. O primeiro artigo acadêmico sobre Naive Bayes para spam é de Sahami e colegas, de 1998. O texto que popularizou a técnica foi *A Plan for Spam*, de Paul Graham, de 2002.

O ataque clássico é o **envenenamento bayesiano**: o spammer recheia a mensagem com palavras inocentes para baixar a nota. É o primeiro exemplo de uma constante da área: assim que um modelo vira barreira, alguém passa a otimizar contra ele.

## 4. GANs: o jogo e o ponto de equilíbrio

O artigo é de Ian Goodfellow e colegas, de junho de 2014. A aula descreveu bem o arranjo: um gerador cria e um discriminador julga. Formalmente é um **jogo de soma zero**:

- o discriminador D é treinado para acertar se uma amostra é real ou gerada;
- o gerador G é treinado para **maximizar a chance de D errar**.

O equilíbrio teórico é elegante: G reproduz a distribuição dos dados reais e D responde **1/2 para tudo**, porque não consegue mais distinguir. O discriminador "perfeito" no final é o que foi reduzido a jogar uma moeda.

Uma analogia comum é a do falsário e do perito: cada um melhora porque o outro melhora.

Dois pontos para situar as GANs no curso:

- Elas são um **ramo paralelo**, voltado a imagens. Os LLMs não descendem delas: vêm da linha Markov → RNN → Transformer.
- O que a aula chamou de "novo modelo de como ensinar a máquina a aprender" é isto: o sinal de erro do gerador não vem de rótulos, vem de **outro modelo**.

## 5. O Deep Learning não "surgiu" em 2010

A aula situou o Deep Learning entre 2010 e 2014. O que aconteceu nesse período foi a **viabilização** de ideias antigas. Redes de várias camadas já eram a resposta conhecida para o limite do perceptron desde os anos 1960. Faltavam dados e computação, que chegaram com o Big Data e as GPUs. A AlexNet, de 2012, é o marco dessa virada.

É o padrão de toda a aula: ideias cedo demais, esperando infraestrutura.

---

## O que a aula simplificou

- **"O inverno da IA (1970–1980)."** Foram dois, e o segundo atingiu justamente a IA baseada em regras, que havia sobrevivido ao primeiro.
- **"Hopfield criou as redes neurais recorrentes."** Criou uma memória associativa com realimentação. As RNNs para sequências são outra arquitetura.
- **"A IA era cega, surda e muda e não conseguia aprender."** O perceptron aprendia. O problema era a distância entre o prometido e o entregue, e foi ela que cortou o financiamento.
- **"O Deep Learning surge em 2010–2014."** As ideias eram antigas. O período marca o momento em que passaram a funcionar em escala.
- **A linha do tempo como uma fila única.** GANs e Transformers são ramos diferentes, e não etapas sucessivas da mesma evolução.

## Implicações para quem constrói software com IA

- **Prometa o que consegue medir.** Os invernos foram crises de expectativa. Em um projeto, defina a métrica de sucesso antes da demonstração.
- **Explosão combinatória ainda existe.** Um protótipo que funciona com dez casos não garante nada sobre dez mil.
- **Modelos simples resolvem muito.** Um Naive Bayes classifica texto com custo quase zero e é fácil de explicar. Comece por ele como linha de base.
- **Todo classificador exposto será atacado.** Do envenenamento bayesiano aos ataques a prompts, o adversário se adapta ao modelo.

## Armadilhas comuns

- Confundir rede de Hopfield com RNN de sequência.
- Achar que o "naive" indica um modelo ruim (indica uma suposição simplificadora que funciona na prática).
- Ler a história como progresso linear, quando ela é feita de ramos, abandonos e retomadas.
- Tratar os LLMs como descendentes das GANs.

## Fontes

- AI winter (datas, ALPAC, Lighthill, máquinas LISP, Quinta Geração, origem do termo) — https://en.wikipedia.org/wiki/AI_winter
- Hopfield network — https://en.wikipedia.org/wiki/Hopfield_network
- Naive Bayes spam filtering — https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering
- Goodfellow et al., *Generative Adversarial Networks*, 2014 — https://arxiv.org/abs/1406.2661
- AlexNet — https://en.wikipedia.org/wiki/AlexNet
