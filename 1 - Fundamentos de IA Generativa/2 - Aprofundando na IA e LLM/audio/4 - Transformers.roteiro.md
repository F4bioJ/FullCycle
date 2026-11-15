# Transformers

## Abertura
Esta é a aula da virada. O professor chama de ponto de ruptura, e ele tem razão. Tudo o que vimos até aqui, o bigrama, as cadeias de Markov, as redes profundas e as redes recorrentes, desemboca aqui.

Na aula passada vimos a RNN, rede neural recorrente, e as versões melhoradas dela, a LSTM e a GRU. Elas leem o texto uma palavra por vez e carregam uma memória de um passo para o outro. Funcionam. Mas tropeçam em dois problemas.

Hoje vamos ver como o Transformer resolve esses dois problemas. Vamos passar por seis ideias. O problema que existia até dois mil e dezessete. A ideia de atenção. A self-attention, ou autoatenção, na prática. As três peças do Transformer. O que se ganha com ele e o que ele custa. E onde ele foi parar.

## O problema até 2017
Frase-âncora: ler uma palavra por vez deixa o modelo lento e esquecido.

Imagine uma fila de pessoas passando um recado no ouvido, uma para a outra. A primeira ouve a frase inteira. A décima recebe uma versão gasta. A vigésima recebe quase nada. E ninguém pode falar antes da pessoa anterior terminar.

Esse é o retrato da RNN. Ela tem dois defeitos.

O primeiro é o esquecimento. A informação do começo da frase precisa atravessar todos os passos até o fim. A cada passo ela enfraquece. É o desvanecimento do gradiente que vimos na aula passada. A LSTM e a GRU melhoraram isso, mas não acabaram com o problema.

O segundo é a lentidão. Como cada passo depende do anterior, não dá para fazer as contas ao mesmo tempo. A placa de vídeo, que é ótima em fazer milhares de contas em paralelo, fica esperando.

Esses dois defeitos vinham desde o bigrama. O bigrama só olhava uma palavra para trás. A RNN olhava mais, mas perdia o fio. E tudo andava em fila.

Frase-âncora, de novo: ler uma palavra por vez deixa o modelo lento e esquecido.

## A ideia de atenção
Frase-âncora: atenção é olhar para tudo, mas dar mais peso ao que importa.

Pense em como você lê um texto com pressa. Você não pula as palavras. Seus olhos passam por todas. Mas algumas pesam mais. São elas que dão o sentido. O resto acompanha.

A atenção numa rede neural faz algo parecido. Ao processar uma palavra, o modelo olha para todas as outras palavras da frase. E dá a cada uma um peso. Peso alto para as que ajudam a entender aquela palavra. Peso baixo para as outras.

Um detalhe importante. Peso baixo não é peso zero. O modelo não ignora nada. Ele mistura tudo, mas em proporções diferentes. É como uma receita: tem muito de um ingrediente e uma pitada de outro, mas todos entram.

Como o modelo decide o peso? Cada palavra gera três coisas. Uma pergunta: do que eu preciso para me entender? Um rótulo: sobre o que eu sou? E um conteúdo: o que eu entrego se alguém me escolher? O peso entre duas palavras sai de quanto a pergunta de uma combina com o rótulo da outra. Em inglês, esses três nomes são query, key e value.

O professor lembrou que essa ideia já circulava na academia antes. O que o paper de dois mil e dezessete, Attention Is All You Need, fez foi mostrar que dava para ficar só com a atenção e jogar fora a recorrência. A novidade foi tirar a RNN, não inventar a atenção.

Frase-âncora, de novo: atenção é olhar para tudo, mas dar mais peso ao que importa.

## Self-attention na prática
Frase-âncora: na self-attention, quem decide a relação é o sentido, não a distância.

Pegue a frase: o cachorro que o menino viu estava latindo.

Quem está latindo? O cachorro. Mas repare: a palavra menino está bem mais perto de latindo do que a palavra cachorro. Um modelo que confia na proximidade erraria. Diria que o menino latiu.

A self-attention não erra aqui. Quando processa a palavra latindo, ela compara latindo com todas as outras palavras da mesma frase. E a combinação mais forte é com cachorro. A distância não entra na conta.

O professor deu outro exemplo. O livro que o João leu ontem era interessante. O núcleo da frase é: João leu o livro. Livro, João e leu estão separados por outras palavras, mas a atenção liga as três. O resto, ontem e era interessante, acompanha.

O nome tem auto porque a frase presta atenção nela mesma. Cada palavra olha para as outras palavras da mesma sequência.

Isso resolve o primeiro defeito da RNN. Na fila do recado, a vigésima pessoa recebia uma versão gasta. Aqui, todas as pessoas estão na mesma sala e falam direto umas com as outras. Ninguém depende de um telefone sem fio.

Frase-âncora, de novo: na self-attention, quem decide a relação é o sentido, não a distância.

## As peças do Transformer
Frase-âncora: a atenção decide com quem cada token conversa, a camada densa refina o que ele aprendeu, e a posição diz onde ele está.

O Transformer é uma arquitetura montada em blocos. O professor destacou três peças.

A primeira é a camada de atenção. É o que acabamos de ver. Cada token é comparado com todos os outros e recebe pesos. O professor avisou que token não é bem palavra. Isso fica para a aula seguinte. Por enquanto, pense em palavra.

Uma melhoria importante: o Transformer não roda uma atenção só. Roda várias ao mesmo tempo, cada uma com o seu jeito de olhar. Uma pode reparar em quem fez a ação. Outra, no tempo do verbo. Cada uma é chamada de cabeça, head em inglês. Depois, os resultados se juntam.

A segunda peça é a camada feedforward, também chamada de MLP, uma rede densa. Depois da atenção, cada token passa por ela, sozinho. Ela trabalha o que o token juntou dos outros e traz a não linearidade, ou seja, a capacidade de aprender relações que não são uma linha reta. Uma divisão de trabalho simples: a atenção é o único lugar onde os tokens trocam informação. A camada densa refina cada um separadamente.

A terceira peça é a codificação de posição, positional encoding. Aqui tem uma armadilha. Se todos os tokens são processados ao mesmo tempo, o modelo perde a noção de ordem. Cachorro mordeu homem e homem mordeu cachorro ficariam iguais. O professor comparou com dar um número, uma senha, a cada token.

Vale um ajuste fino. Não existe uma etapa que processa tudo e depois reordena. A posição vira um vetor que é somado ao próprio embedding do token, logo no começo. A informação de ordem viaja misturada com o significado.

Por fim, para empilhar muitos blocos sem o sinal se perder, o Transformer usa atalhos, as conexões residuais. Elas deixam o gradiente passar direto entre as camadas. É a mesma intuição da memória da LSTM, que deixava a informação atravessar sem ser esmagada.

Frase-âncora, de novo: a atenção decide com quem cada token conversa, a camada densa refina o que ele aprendeu, e a posição diz onde ele está.

## O que se ganha e o que custa
Frase-âncora: o Transformer trocou não consigo lembrar o que está longe por consigo, mas pago por cada par.

O primeiro ganho é velocidade de treino. Sem a fila da recorrência, todas as posições são calculadas juntas. A placa de vídeo, que antes ficava esperando, agora trabalha cheia. O professor citou a GPU e a TPU, que é o chip do Google feito para isso.

Um cuidado. Esse paralelismo vale para o treino e para a leitura do texto de entrada. Na hora de gerar a resposta, o modelo ainda produz um token por vez. Cada token novo depende dos anteriores. Por isso uma resposta longa demora, por mais máquinas que existam.

O segundo ganho são as dependências longas. Qualquer par de tokens está a um passo de distância. Isso reduz muito o problema do gradiente ao longo da frase. O professor disse que o problema acaba. É exagero: ele cai muito, mas o modelo ainda precisa dos atalhos residuais para treinar muitas camadas.

O professor também ligou isso a alucinar pouco. Aqui vale corrigir. Treinar de forma estável não é o mesmo que dizer a verdade. Transformers alucinam, e o curso tem aulas sobre isso mais adiante.

O terceiro ganho é escala. Dá para crescer para bilhões de parâmetros e continuar treinando de forma estável.

Agora o preço. Comparar todos com todos custa caro. Com mil tokens, são um milhão de pares. Com dois mil, quatro milhões. Dobrar o texto quadruplica o custo da atenção. É por isso que a janela de contexto tem limite e por isso contexto longo é caro.

Frase-âncora, de novo: o Transformer trocou não consigo lembrar o que está longe por consigo, mas pago por cada par.

## Onde o Transformer foi parar
Frase-âncora: quase todo modelo de linguagem atual é um recorte do Transformer.

O professor listou os herdeiros. O BERT, usado para análise de sentimento e classificação de texto. O GPT, usado em chatbots e geração de texto. E outros, como o T cinco, o PaLM e o Llama.

Uma forma de organizar essa lista. O Transformer original tinha duas metades. Uma que lê a entrada, o encoder. E uma que gera a saída, o decoder. O BERT usa só a metade que lê, e enxerga a frase dos dois lados. Por isso é bom para entender e classificar. O GPT usa só a metade que gera, e enxerga só o que veio antes. Por isso é bom para continuar texto. O T cinco usa as duas.

A atenção também saiu do texto. Na visão computacional, o ViT corta a imagem em pedacinhos e trata cada pedaço como um token. E veio a multimodalidade: modelos como o GPT-4 lidam com mais de um tipo de dado. O professor contrastou com o passado, quando cada inteligência artificial cuidava de uma coisa só, texto, imagem ou som. Ele chamou isso de multimodelo, e não de multimodal.

Bioinformática, finanças e sistemas de recomendação também passaram a usar Transformers.

Frase-âncora, de novo: quase todo modelo de linguagem atual é um recorte do Transformer.

## Comparando com o que já vimos
Agora vamos separar os vizinhos, porque eles se confundem.

O bigrama olha uma palavra para trás e conta frequências. Não tem memória além disso.

A cadeia de Markov generaliza o bigrama: o próximo estado depende só do estado atual. Também esquece o resto.

A rede profunda empilha camadas e aprende padrões complexos. Mas recebe uma entrada de tamanho fixo e não tem noção de sequência.

A RNN traz a sequência. Lê uma palavra por vez e carrega uma memória. O preço é a fila: lenta e com esquecimento.

A LSTM e a GRU põem portas nessa memória para ela durar mais. Melhoram o esquecimento, mas continuam em fila.

O Transformer tira a fila. Todo token olha para todo token, direto, com pesos. Ganha memória longa e velocidade de treino. Paga com custo quadrático e precisa de uma codificação de posição, porque perdeu a ordem que a fila dava de graça.

Uma frase para guardar a diferença entre RNN e Transformer: a RNN passa o recado em fila, o Transformer põe todo mundo na mesma sala.

## Fechamento
Vamos repetir as frases-âncora.

Ler uma palavra por vez deixa o modelo lento e esquecido.

Atenção é olhar para tudo, mas dar mais peso ao que importa.

Na self-attention, quem decide a relação é o sentido, não a distância.

A atenção decide com quem cada token conversa, a camada densa refina o que ele aprendeu, e a posição diz onde ele está.

O Transformer trocou não consigo lembrar o que está longe por consigo, mas pago por cada par.

Quase todo modelo de linguagem atual é um recorte do Transformer.

## Revisão
Primeira pergunta: na frase o cachorro que o menino viu estava latindo, por que um modelo que confia na proximidade erraria, e por que a self-attention acerta?

[pausa 5]

Resposta: porque menino está mais perto de latindo. A self-attention compara latindo com todas as palavras e dá o peso maior pela combinação de sentido, não pela distância. Cachorro ganha.

Segunda pergunta: se o Transformer processa todos os tokens ao mesmo tempo, por que ele precisa da codificação de posição?

[pausa 5]

Resposta: porque sem a fila ele perde a ordem. Cachorro mordeu homem e homem mordeu cachorro ficariam iguais. A posição é somada ao embedding de cada token para devolver essa informação.

Terceira pergunta: um colega diz que, com o Transformer, a resposta do chat sai toda de uma vez, porque tudo é paralelo. Está certo?

[pausa 5]

Resposta: não. O paralelismo vale para o treino e para ler a entrada. Na geração, o modelo produz um token por vez, e cada um depende dos anteriores.

Quarta pergunta: por que dobrar o tamanho do texto pesa tanto num Transformer?

[pausa 5]

Resposta: porque a atenção compara todos os tokens com todos. Dobrar o texto quadruplica o número de pares. É por isso que a janela de contexto tem limite.

Quinta pergunta: qual a diferença de uso entre o BERT e o GPT?

[pausa 5]

Resposta: o BERT usa a metade que lê e enxerga a frase dos dois lados, então é bom para entender e classificar. O GPT usa a metade que gera e enxerga só o passado, então é bom para continuar texto.
