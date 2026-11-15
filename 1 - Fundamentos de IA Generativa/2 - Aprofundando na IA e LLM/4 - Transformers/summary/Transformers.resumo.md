# Transformers — resumo

## O ponto de ruptura: o cenário até 2017

Até 2017, os modelos de referência eram LSTM e GRU. Eles ainda carregavam dois problemas que vinham desde o bigrama e as cadeias de Markov: a dificuldade de capturar dependências de longo prazo e a incapacidade de paralelizar o processamento. Sem paralelismo, o treinamento era lento e a evolução da IA ficava amarrada. O professor apresenta os Transformers como o momento em que o paradigma é quebrado.

## O paper "Attention Is All You Need"

O paper foi publicado por pesquisadores do Google, que levaram a ideia para a mídia, embora outras pessoas da academia já discutissem o tema. Ele propõe uma arquitetura nova, o Transformer, que elimina a necessidade das RNNs. Em vez de uma estrutura recorrente, entra um mecanismo novo, a auto-atenção (self-attention). Quem mais se beneficiou foi a IA generativa (conversacional, de vídeo, de som). Tarefas como recomendação e tradução já tinham um caminho mais pavimentado.

## A ideia de attention

A atenção em redes neurais é parecida com a atenção do dia a dia, mas não é igual. Ao processar uma palavra ou token, que no fundo é uma representação numérica (um vetor), o modelo pode focar em partes diferentes da sequência de entrada, com pesos diferentes, conforme o contexto. O professor compara com a leitura dinâmica: damos mais peso a algumas palavras que dão contexto e criam relações, e o resto acompanha. O modelo olha para tudo, mas põe mais peso no que importa para a relação.

## Self-attention na prática: dois exemplos

Na frase "O livro que o João leu ontem era interessante", o núcleo é "João leu o livro". O trecho "era interessante" acompanha, mas não é crucial. Mesmo com palavras no meio, a atenção dá peso a livro, João e leu e as correlaciona.

Em "O cachorro que o menino viu estava latindo", "menino" está mais perto de "latindo", mas quem latiu foi o cachorro. A self-attention dá mais peso a "cachorro", e a proximidade deixa de decidir a relação.

Por isso a self-attention observa todas as palavras da mesma sequência e calcula a importância relativa de cada uma para compor a representação da palavra em questão. Palavras distantes se conectam pela força da relação. O professor diz que essa é a grande sacada que fez a área evoluir.

## Como o Transformer é montado

O Transformer é uma arquitetura de ML composta por blocos. O professor destaca dois componentes principais e um terceiro, que acompanha.

**Camada de atenção.** Cada token de entrada é comparado com todos os outros para calcular pesos de atenção. Esse peso determina quanto cada token conta na formação de uma nova representação. O professor avisa que token não é exatamente palavra, e que isso será explicado depois.

**Camadas feedforward (MLP).** Depois da atenção, cada token passa por uma rede neural densa, chamada de MLP, que transforma cada representação individualmente. Isso traz não linearidade ao aprendizado, em vez de um padrão puramente linear.

**Positional Encoding.** Como o Transformer não processa os tokens em sequência, como as RNNs, é preciso informar a posição de cada um. É como dar um número, um "ticket", a cada token. Essa codificação é somada aos embeddings para manter a noção de ordem. Assim o processamento é paralelo e, depois, o que faz sentido para cada posição é reunido.

O professor ressalta que há muito cálculo, estatística e código por trás, e que essas são as arquiteturas por trás do que hoje se chama de Gen AI.

## Benefícios da arquitetura

**Paralelização e treinamento mais rápido.** Diferente das RNNs, todos os tokens são processados ao mesmo tempo. Com o hardware moderno (GPU e TPU), o treinamento fica muito mais rápido, o que antes era barrado pela máquina e pela arquitetura.

**Dependências longas.** O modelo capta relações entre palavras distantes diretamente, o que reduz muito a degradação do gradiente, que fazia a informação perder importância ao longo da sequência.

**Escalabilidade.** Os Transformers são muito eficientes ao escalar para bilhões de parâmetros, mantendo desempenho e estabilidade. Segundo o professor, isso permite treinar e evoluir cada vez mais sem perder o controle.

## Impactos práticos

A arquitetura virou a base de quase todos os modelos de linguagem atuais. O BERT é usado em análise de sentimentos e classificação de texto. O GPT é usado em chatbots, escrita automática e geração. T5, PaLM e Llama seguem o mesmo caminho, em tradução, multimodalidade e outras tarefas. O professor diz que o Transformer mudou o mercado.

## Atenção em outras áreas e multimodalidade

A ideia de atenção se expandiu para outras áreas. A visão computacional passou a usá-la, como no ViT. A multimodalidade também avançou: modelos como o GPT-4 lidam com mais de uma modalidade, e o professor cita a conversa com o DALL·E para trazer imagens. Antes, cada IA focava num único assunto (só texto, só imagem, só som), e o que existia era multimodelo, não multimodal. Bioinformática, finanças e recomendação também passaram a se beneficiar dos Transformers.

## Fechamento

O professor encerra dizendo que essa foi a grande mudança, e dá os parabéns ao time do Google por trazer o primeiro paper para a comunidade. A partir daqui, o curso entra na IA atual.
