# Positional encoding — resumo

## O problema: o Transformer não sabe a ordem

A passagem das RNNs para os Transformers trocou o processamento linear, token por token, pelo processamento em paralelo. Processando tudo ao mesmo tempo, o modelo sabe quais tokens existem, mas não sabe naturalmente quem vem antes e quem vem depois, e no fim precisa "juntar" o resultado na ordem certa.

O professor compara com um baralho de palavras embaralhado: dá para ler cada palavra, mas não para montar a frase sem saber a sequência. Assim, "eu comi antes de dormir" pode virar "dormir antes eu comi". Na aula de Transformers, a solução apareceu simplificada como "dar um número para cada token". O Positional Encoding é esse mecanismo, e ele é mais do que um número.

## Soma entre embedding e posição

O Positional Encoding é um **vetor adicional** que informa a posição do token na sequência. Ele é **somado** ao word embedding do token, o vetor que representa o seu significado:

**vetor final = word embedding + positional encoding**

No exemplo simplificado do professor, se o embedding fosse 1 e o cálculo posicional desse 0,909, o resultado seria 1,909: o mesmo token, acrescido da sua posição. O embedding não é substituído; passa a carregar "o que é" o token e "onde ele está". Para calcular o vetor posicional, há duas abordagens.

## Abordagem 1: Positional Encoding fixo (seno e cosseno)

Na literatura ela se chama **Positional Encoding fixo**, mas o professor prefere chamá-la de "seno e cosseno", porque o nome lembra como ela funciona. Ela nasceu no paper *Attention Is All You Need*, o mesmo que apresentou o Transformer.

Para cada posição da sequência, o método cria um vetor com um **padrão ondulatório** próprio, gerado com seno e cosseno: a posição 0 tem um padrão, a 1 outro, e assim por diante. Cada posição ganha uma **assinatura única**, que o modelo interpreta para saber quem vem primeiro. Esse vetor não é aprendido no treinamento: sai de uma regra matemática.

## Os termos da fórmula: pos, i e d_model

A fórmula mostrada na aula tem duas linhas, uma com seno e outra com cosseno, e o mesmo termo entre parênteses nas duas:

- PE(pos, 2i) = sen(pos / 10000^(2i / d_model))
- PE(pos, 2i+1) = cos(pos / 10000^(2i / d_model))

- **pos** é a posição do token na frase: 0, 1, 2, 3...
- **i** é o índice da dimensão do vetor de embedding, ou seja, em qual "casa" do vetor o cálculo está sendo feito.
- **d_model** é a dimensão total do embedding, por exemplo 512 ou 768.

Assim, a informação de posição se espalha por todas as dimensões do vetor, em vez de ficar concentrada em um único valor.

## O termo entre parênteses: frequências altas e baixas

O termo entre parênteses cria uma **frequência diferente para cada dimensão** do vetor. Nos primeiros índices, a onda muda muito rápido de uma posição para a seguinte (**alta frequência**); nos últimos, muda devagar (**baixa frequência**).

O professor compara com trechos de uma música: cada dimensão é uma onda, e a combinação de todas forma a assinatura de uma posição.

## Por que seno e cosseno

Seno e cosseno oscilam de forma suave e repetitiva entre −1 e 1. Isso permite criar ondas que se repetem ao longo das posições de um jeito previsível. Como as frequências são definidas, a diferença entre duas posições (por exemplo, a 3 e a 7) aparece de forma padronizada nos vetores. Observando a diferença de fase entre as ondas, o modelo consegue calcular **distâncias relativas** entre tokens, sem aprender explicitamente cada posição.

As vantagens: a diferença entre posições pode ser calculada matematicamente, e o modelo aprende a comparar posições pelas curvas que enxerga. O professor reconhece que raramente alguém aplica essa conta à mão; o importante é ver que "um número para cada token" esconde um vetor calculado.

## Abordagem 2: embeddings posicionais aprendidos

Na literatura, **Learned Position Embeddings**; o professor chama de "aprendidos". Aqui não há fórmula: os vetores de posição são parâmetros que o modelo ajusta durante o treinamento, por tentativa e erro, como um ajuste fino do vetor de cada posição (o professor avisa para não confundir com o fine-tuning que aparece mais adiante no curso). O modelo aprende sozinho a codificação posicional que vai usar, e ela depende da tarefa.

Numa analogia do professor, o método fixo seria uma "tentativa e erro" resolvida pela matemática, sem treino e sem gastar tanto processamento; no aprendido, ela é real. Aprendendo sobre o próprio assunto, o modelo desenvolve uma intuição sobre onde cada palavra costuma aparecer.

## Sequências longas são a grande dificuldade

Ao comparar as abordagens, o professor abre um parêntese: em IA, o grande problema é a sequência longa. Uma frase sai bem, um parágrafo um pouco pior, um livro pior ainda, uma enciclopédia mais: quanto mais longa a sequência, mais difícil manter a coerência. Por isso ele desconfia de que a IA vá substituir quem escreve livros e filmes.

Em vídeo, é pior: o Veo 3 vai bem em trechos de 8 segundos, mas ao encadear vários perde coerência (na personagem Marisa Maiô, rosto e cabelo mudam entre cenas).

## Quando usar cada abordagem

A escolha "depende do uso".

**Fixo (seno e cosseno):** mais generalista e, segundo a aula, melhor para sequências longas, resolvendo grande parte desse problema. Não precisa ser aprendido: gasta menos GPU, menos parâmetros e menos dados, e mantém uma estrutura matemática consistente, que facilita inferir as posições. Serve a tarefas com muita variedade de dados, como tradução e geração de texto ampla. O professor cita ChatGPT e BERT como exemplos desse tipo de tarefa. (Observação fora da aula: na prática, BERT e os GPTs originais usam posições aprendidas.)

**Aprendido:** melhor em domínios fechados, com dados estáticos e padrões repetitivos, e, segundo a aula, pior para usos muito abertos. Exemplos: contratos e documentos jurídicos, geração de código (muito repetitiva) e prontuários médicos. Entende melhor contextos fixos e captura nuances que o modelo matemático às vezes não pega, mas exige treinamento com dados do domínio e ajustes personalizados.
