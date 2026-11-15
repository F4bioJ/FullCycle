# Resumo — Redes Neurais Profundas

## Por que esse capítulo importa
- É a **virada de chave**: as redes neurais profundas deram o start para a IA que usamos hoje.
- Nos anos **80–90**, a IA evoluía devagar: bigramas e modelos de Markov serviam para aplicações específicas, mas eram **difíceis de escalar**.

## Fatores que destravaram as redes neurais profundas
1. **Crescimento exponencial de dados** (pós-1990): internet, redes sociais, sensores e sistemas digitais. Dado é a **matéria-prima** da IA.
2. **Aumento do poder computacional**, com destaque para as **GPUs**, muito eficientes para processar algoritmos de IA.
- Resultado: IA volta ao hype, mais pesquisa, mercado se interessa e a área deslancha.

## O que é uma rede neural profunda
- **Simula** o comportamento das redes neurais biológicas.
- A entrada passa por uma cadeia de **muitas camadas**, sendo transformada, combinada e reinterpretada até virar uma saída que faça sentido.
- **"Profunda" = número de camadas** que a informação atravessa antes da saída.
- Antes, o caminho entrada → saída era claro; agora são tantos passos que fica difícil rastrear — parecido com as sinapses humanas.

## Linguagem natural: Embeddings
- Uma rede neural **não processa palavras diretamente** (nem como bits 0/1).
- **Word Embeddings**: representação **vetorial** da palavra num **espaço contínuo de alta dimensão**.
  - Ex.: "array" → `[0.25, -0.14, 0.88, ...]`
- Objetivo: **palavras com significados semelhantes geram vetores próximos**, o que ajuda no encadeamento das palavras.
- Técnicas citadas: **GloVe, BERT, GPT**.

## Redes Feedforward
- Estrutura neural mais simples, com **fluxo unidirecional** (como a cadeia de Markov — nada vai e volta).
- Fluxo: entrada → sequência de palavras vira **embeddings** → propagação **camada por camada para frente** → saída (ex.: **previsão da próxima palavra**).
- Problema: **não considera a ordem nem a dependência temporal** das palavras.
  - Ex.: "o cachorro mordeu o homem" × "o homem mordeu o cachorro" — ao **somar ou concatenar** os embeddings, o resultado é muito parecido, embora o sentido mude totalmente.

## Janelas de contexto fixas
- Solução para lidar com a sequência: olhar um **número fixo de palavras anteriores** para prever a próxima.
- Ex. (janela de 4): "O cachorro está no" → **"jardim"** (e não "casa", que nem concorda).
- A rede **combina os vetores das 4 palavras** para prever a 5ª — uma evolução dos bigramas (2 palavras).

## Limitações do Feedforward
1. **Contexto limitado**: só enxerga N palavras anteriores (3, 4, 5…); não capta dependências que atravessam um parágrafo inteiro (ex.: cachorro no jardim *porque* estão limpando a casa…).
2. **Ordem da sequência**: mesmo com janelas, a ordem continua problemática (cachorro/homem).
3. **Falta de memória**: não lembra o que processou antes; só sabe o que está na entrada naquele momento — problema parecido com o dos bigramas. Dificulta **conversas, traduções, diálogos e resumos** coerentes.

## Próximos passos
- Ainda falta mais um conceito antes de chegar aos **Transformers**, base da Gen AI atual.

## Ideia-chave
Mais dados + GPUs trouxeram de volta as redes neurais. As redes profundas usam **muitas camadas** e **embeddings** (palavras como vetores, próximas por significado). As **Feedforward** preveem a próxima palavra com **janelas fixas**, mas são **unidirecionais, sem noção de ordem e sem memória**.

---

## Além da aula
- **Como a rede aprende: backpropagation.** A rede compara a saída com o esperado, calcula o erro e propaga esse erro de volta pelas camadas, ajustando os pesos via **gradientes**. Popularizado em 1986 (Rumelhart, Hinton e Williams). É esse mecanismo que, nas RNNs, gera o desvanecimento/explosão de gradiente.
- **Linha do tempo mais precisa:** as ideias são dos anos 80, mas o boom do *deep learning* veio por volta de **2012** (AlexNet, treinada em GPUs, venceu a competição ImageNet com folga).
- **O exemplo da aula tem nome:** prever a próxima palavra combinando os embeddings de uma janela fixa é o **modelo de linguagem neural de Bengio (2003)** — a primeira rede neural de linguagem relevante.
- **One-hot × embedding:** antes, uma palavra num vocabulário de 50 mil palavras era um vetor com 50 mil posições, todas 0 menos uma (one-hot) — todas as palavras ficam igualmente distantes. O embedding é denso (ex.: 300 números) e **aprendido**, por isso captura semelhança.
- **Word2Vec (2013)** é o clássico que faltou na lista da aula; GloVe veio em 2014. Eles geram embeddings **estáticos**: "banco" tem o mesmo vetor em "banco da praça" e "banco Itaú". **BERT e GPT (2018)** geram embeddings **contextuais** — o vetor muda conforme a frase. É uma diferença grande que a aula colocou no mesmo saco.
- **Aritmética de vetores:** com Word2Vec, `rei − homem + mulher ≈ rainha`. A proximidade entre vetores costuma ser medida pela **similaridade de cosseno** (ângulo entre eles).
- **Soma × concatenação** (ver quiz de revisão): a soma perde a ordem (a+b = b+a); a concatenação preserva a posição, mas cada posição tem pesos próprios e a rede generaliza mal.
