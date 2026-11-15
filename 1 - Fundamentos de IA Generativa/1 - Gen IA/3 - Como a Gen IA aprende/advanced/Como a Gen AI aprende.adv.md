# Como a Gen AI aprende — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 3

A aula usou três imagens: o mapa probabilístico do cartógrafo, o escritor que se autocompleta e as coordenadas dos embeddings. Este material mostra a matemática simples que existe por trás de cada uma e o que ela permite prever sobre o comportamento do modelo.

---

## 1. O "mapa probabilístico" é uma multiplicação

O mapa da aula tem uma forma precisa. A probabilidade de um texto inteiro é o produto das probabilidades de cada token, dado tudo o que veio antes:

```
p(o gato dorme) = p(o) × p(gato | o) × p(dorme | o gato)
```

É a regra da cadeia da probabilidade. Ela transforma um problema impossível (dar uma probabilidade a cada texto que existe) em um problema tratável: aprender **uma única função** que, dado um começo, devolve a distribuição do próximo token.

O modelo inteiro é essa função. "Navegar pelo mapa por caminhos que ninguém conhecia" é sortear um token, acrescentá-lo ao texto e chamar a função de novo.

## 2. Como o mapa é desenhado: a função de perda

No treino, o modelo vê um trecho de texto real e precisa dar probabilidade alta ao token que de fato vem depois. O erro é medido pela **entropia cruzada**, que para um exemplo é:

```
perda = −log p(token correto)
```

| Probabilidade dada ao token correto | Perda |
|---|---|
| 0,90 | 0,11 |
| 0,50 | 0,69 |
| 0,10 | 2,30 |
| 0,01 | 4,61 |

A curva é o que importa: errar "com confiança" custa muito caro. Dar 1% ao token certo é mais de seis vezes pior do que dar 50%. O treino empurra o modelo a **nunca descartar o que é plausível**, e isso ajuda a explicar por que ele produz continuações plausíveis mesmo quando não sabe a resposta.

Os "padrões subjacentes" e as "estruturas invisíveis" da aula são o que o modelo precisa aprender para baixar essa perda: gramática, estilo, fatos frequentes, formatos de texto. Ninguém ensina essas coisas a ele. Elas emergem porque ajudam a prever o próximo token.

## 3. O escritor que se autocompleta, e por que ele se perde

A aula comparou a alucinação ao momento em que nos perdemos no meio de uma explicação. A autoregressão tem uma razão estrutural para isso.

**No treino**, o modelo sempre recebe o começo **correto** (o texto real) e prevê o próximo token. **Na geração**, ele recebe o que **ele mesmo** escreveu. Se um token sai ruim, todos os seguintes são condicionados a esse erro, e o modelo não tem como voltar atrás.

Uma conta ilustrativa mostra o efeito do encadeamento. Suponha que cada token tenha 99% de chance de manter o texto no rumo:

| Tamanho da resposta | Chance de nenhum desvio |
|---|---|
| 10 tokens | 0,99¹⁰ ≈ 90% |
| 100 tokens | 0,99¹⁰⁰ ≈ 37% |
| 500 tokens | 0,99⁵⁰⁰ ≈ 0,7% |

Os números são inventados, mas a forma da curva é real: **quanto mais longa a geração, maior a chance de desvio**. O modelo segue "um caminho plausível, mas incorreto", como diz o resumo do professor, e continua coerente com o próprio erro.

## 4. Embeddings: de onde vêm as coordenadas

A aula disse que palavras viram vetores e que "rei" fica perto de "rainha". Falta dizer como os vetores chegam lá.

O marco é o **word2vec**, publicado em janeiro de 2013 por Mikolov, Chen, Corrado e Dean, do Google. A ideia: treinar um modelo simples para **prever uma palavra a partir das vizinhas** (ou as vizinhas a partir da palavra). Os vetores são um subproduto desse treino. O artigo relata vetores de alta qualidade aprendidos a partir de 1,6 bilhão de palavras em menos de um dia.

Repare que é o mesmo truque do aprendizado autossupervisionado: o texto fornece os próprios rótulos.

### Por que "rei" e "rainha" ficam próximos

Porque aparecem **nos mesmos tipos de contexto**: "o ___ governou", "a coroa do ___", "o ___ morreu". Palavras que podem ocupar as mesmas lacunas recebem vetores parecidos. É uma ideia antiga da linguística: conhece-se uma palavra pela companhia que ela tem.

O resultado mais citado do artigo é que as direções no espaço carregam significado:

```
vetor(rei) − vetor(homem) + vetor(mulher) ≈ vetor(rainha)
```

### Como se mede a proximidade

Não é pela distância em linha reta, e sim pelo **ângulo** entre os vetores, a similaridade de cosseno:

```
cos(a, b) = (a · b) / (|a| × |b|)
```

| Vetores | Cosseno | Leitura |
|---|---|---|
| [1, 2] e [2, 4] | 1,0 | mesma direção: mesmo sentido |
| [1, 2] e [2, −1] | 0,0 | perpendiculares: sem relação |
| [1, 2] e [−1, −2] | −1,0 | direções opostas |

O cosseno ignora o tamanho do vetor e olha só para a direção. Por isso [1, 2] e [2, 4] são considerados idênticos.

## 5. Um vetor por palavra não basta

O word2vec dá **um único vetor** a cada palavra, seja qual for a frase. Isso quebra exatamente nos exemplos do professor: "assado" (frango ou pele) e "encadeamento" (de palavras ou de uma pessoa) teriam um vetor só, uma média dos dois sentidos.

A solução são os **embeddings contextuais**: o vetor de uma palavra é recalculado a cada frase, levando em conta as palavras ao redor. É isso que a self-attention faz, e é a ponte entre esta aula e a de Transformers.

| | Embedding estático (word2vec) | Embedding contextual (Transformer) |
|---|---|---|
| Vetores por palavra | um | um por ocorrência |
| "banco" de sentar × "banco" de dinheiro | mesmo vetor | vetores diferentes |
| Custo | uma consulta a uma tabela | rodar o modelo |

---

## O que a aula simplificou

- **"Rei e cachorro ficam distantes porque raramente aparecem no mesmo contexto."** O que aproxima dois vetores é aparecer em contextos *parecidos*, e não aparecer *juntos*. "Rei" e "rainha" são próximos porque são intercambiáveis nas mesmas frases.
- **"Mais dados no treino, menos alucinação."** Mais dados melhoram a cobertura, mas não mudam o objetivo: o modelo continua produzindo a continuação mais plausível, inclusive quando não tem a informação. A alucinação é reduzida, não eliminada.
- **"A representação numérica funciona como linguagem universal."** Cada modelo tem o próprio espaço de vetores. Vetores gerados por modelos diferentes não são comparáveis entre si.
- **"A self-attention deixa de lado os elementos pouco relevantes."** Ela dá pesos menores, sem descartar nada.

## Implicações para quem constrói software com IA

- **Respostas longas se desviam mais.** Divida tarefas grandes em etapas curtas, com verificação entre elas.
- **Busca semântica exige um único modelo de embedding** para os documentos e para as consultas. Trocar o modelo obriga a reindexar tudo.
- **Similaridade de cosseno é o padrão** em bancos vetoriais, e mede direção, não tamanho.
- **O modelo não sabe que não sabe.** A perda o treinou a manter o plausível. Fatos críticos precisam vir do contexto que você fornece, e não da memória dele.

## Armadilhas comuns

- Achar que proximidade de embeddings significa "aparecem juntos" (significa "aparecem em contextos parecidos").
- Comparar vetores de modelos diferentes.
- Esperar que um modelo maior ou com mais dados pare de alucinar.
- Confundir o embedding de entrada (uma tabela) com a representação contextual (o resultado de rodar o modelo).

## Fontes

- Mikolov, Chen, Corrado, Dean, *Efficient Estimation of Word Representations in Vector Space*, 2013 — https://arxiv.org/abs/1301.3781
- Word2vec (arquiteturas CBOW e skip-gram, similaridade de cosseno, limites dos embeddings estáticos) — https://en.wikipedia.org/wiki/Word2vec
- Self-supervised learning — https://en.wikipedia.org/wiki/Self-supervised_learning
