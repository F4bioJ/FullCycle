# Redes neurais profundas

## Redes neurais profundas e a retomada da IA

Redes neurais profundas marcaram uma virada importante porque permitiram escalar a modelagem de problemas que modelos anteriores, como bigramas e cadeias de Markov, tratavam de forma mais restrita. Esse avanço dependeu de dois fatores que se reforçaram mutuamente: crescimento massivo da disponibilidade de dados e aumento do poder computacional, com destaque para GPUs. Quando esses fatores se alinham, treinar modelos maiores deixa de ser inviável e a IA volta a ganhar relevância prática e científica.

## O que torna uma rede “profunda”

O termo profundo se refere à quantidade de camadas entre a entrada e a saída. Em vez de uma transformação simples e facilmente rastreável, a informação atravessa várias etapas de combinação e transformação até produzir um resultado. Isso aumenta a capacidade de representar padrões complexos, mas também torna o processo interno menos transparente do que em modelos mais lineares.

## Linguagem natural precisa ser convertida para uma forma processável

Palavras não entram diretamente em uma rede neural como unidades simbólicas compreensíveis pelo modelo. Para que a rede opere sobre linguagem, cada palavra precisa ser convertida em uma representação numérica adequada ao cálculo. Essa conversão deixa de tratar a palavra como bits isolados e passa a representá-la em um espaço vetorial contínuo.

## Embeddings de palavras

Word embeddings são vetores de alta dimensão usados para representar palavras de modo que similaridades semânticas apareçam como proximidade nesse espaço vetorial. Se duas palavras têm usos ou significados parecidos, seus vetores tendem a ocupar regiões próximas. Essa estrutura permite que a rede opere sobre relações entre palavras, em vez de apenas sobre símbolos discretos sem noção de semelhança.

## Exemplo de vetorização

Uma palavra como `array` pode ser representada por um vetor como `[0.25, -0.14, 0.88, ...]`. O valor exato de cada dimensão isoladamente não é o ponto principal; o que importa é a posição relativa desse vetor em relação aos vetores de outras palavras. A partir dessa geometria, o modelo consegue explorar proximidade entre termos para apoiar previsões e composições de sequência.

## Feedforward aplicado à linguagem

Em redes feedforward, o fluxo de dados é unidirecional: a entrada passa pelas camadas e segue apenas para frente até a saída. No caso de linguagem, a sequência de palavras é convertida em embeddings e propagada pela rede para produzir uma previsão, como a próxima palavra provável. Essa arquitetura já supera abordagens muito simples, mas ainda não modela adequadamente dependências sequenciais mais ricas.

## Problema da ordem das palavras

Embeddings capturam proximidade entre palavras, mas isso não garante que a arquitetura preserve a ordem com precisão suficiente. Frases como “o cachorro mordeu o homem” e “o homem mordeu o cachorro” podem compartilhar palavras muito próximas no espaço vetorial, embora expressem eventos diferentes. Quando a arquitetura não trata a ordem como parte central da representação, ela corre o risco de aproximar demais sequências semanticamente distintas.

## Janelas de contexto fixas

Uma forma de reduzir esse problema é usar uma janela fixa de palavras anteriores para prever a próxima. Retomando a ideia de contexto local, uma sequência como “o cachorro está no” restringe bastante a próxima palavra provável, e a rede pode prever algo como “jardim” combinando os vetores dessas quatro palavras. Isso amplia o contexto em relação a abordagens baseadas em poucas palavras, mas continua limitado a um alcance curto e pré-definido.

## Limitações de contexto longo e memória

O principal limite do feedforward é que ele enxerga apenas um número fixo de palavras anteriores e não mantém memória real do que foi processado antes dessa janela. Dependências que atravessam frases ou parágrafos se perdem, o que prejudica tarefas que exigem coerência contínua, como tradução, diálogo e resumo. Retomando a limitação de longo prazo já observada em modelos anteriores, o problema persiste aqui, embora em uma forma mais sofisticada.

## Relação com a evolução até Transformers

Redes neurais profundas já representam um salto importante porque introduzem camadas profundas, embeddings e processamento vetorial mais expressivo para linguagem. Ainda assim, feedforward com janela fixa não resolve bem ordem, memória e dependências longas. Essas limitações explicam por que arquiteturas posteriores se tornam necessárias para chegar aos modelos de linguagem modernos.
