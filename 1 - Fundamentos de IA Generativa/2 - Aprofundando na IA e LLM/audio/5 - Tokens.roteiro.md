# Tokens

## Abertura
Até aqui, toda vez que falamos de como a inteligência artificial lê um texto, falamos em palavras. A palavra entra, a palavra sai, uma palavra puxa a outra. O professor avisou desde o começo que isso era uma simplificação. Chegou a hora de desfazer essa simplificação.

Na aula passada vimos o Transformer. Lá, cada token olhava para todos os outros. E o professor disse: token não é bem palavra, explico depois. É agora.

Vamos passar por seis ideias. Por que a palavra não serve. O meio-termo que o token oferece. Como o BPE, o Byte Pair Encoding, monta os tokens. Quando esses tokens são criados. Por que eles têm tamanhos diferentes. E o que isso muda no custo e no limite de contexto.

## Por que a palavra não serve
Frase-âncora: a língua não para de crescer, e um vocabulário de palavras inteiras nunca fecha.

Imagine que você monta um dicionário com todas as palavras que um modelo pode encontrar. No dia seguinte, alguém inventa uma gíria. Alguém escreve cachorro com x. Alguém mistura português com inglês numa mesma frase. Seu dicionário já está desatualizado.

Esse é o problema. A língua de verdade é aberta. Tem palavra nova, tem erro de digitação, tem muitos idiomas. Um modelo que só conhece palavras inteiras trava diante de tudo o que nunca viu.

O que o token resolve: em vez de guardar palavras, o modelo guarda pedaços que se repetem. Com esses pedaços ele monta qualquer palavra, inclusive as novas. O professor listou três ganhos. O vocabulário fica menor. Palavras desconhecidas são quebradas em partes conhecidas. E o modelo lida melhor com idiomas e estilos diferentes, até com erros.

Frase-âncora, de novo: a língua não para de crescer, e um vocabulário de palavras inteiras nunca fecha.

## O meio-termo
Frase-âncora: o token fica entre a letra e a palavra, e é por isso que funciona.

Por que não ir ao extremo e usar letras? Com letras, o vocabulário é minúsculo e nunca falta nada. Mas cada frase vira uma fila enorme. Uma frase de dez palavras vira mais de cinquenta letras.

Lembre da aula de Transformers. A atenção compara todos com todos. Se a fila fica cinco vezes maior, a conta fica vinte e cinco vezes maior. E o modelo ainda teria que montar o sentido letra por letra.

Com palavras inteiras, a fila é curta, mas o vocabulário nunca fecha. Com letras, o vocabulário fecha, mas a fila explode. O token é o meio-termo: um vocabulário fixo, de dezenas de milhares de pedaços, e uma fila de tamanho razoável.

Onde isso quebra? A divisão não segue a lógica humana. O token não é sílaba, não é prefixo, não é raiz. É só um pedaço que aparece muito.

Frase-âncora, de novo: o token fica entre a letra e a palavra, e é por isso que funciona.

## Como o BPE monta os tokens
Frase-âncora: o BPE começa com letras soltas e vai colando os pares que mais se repetem.

O professor usou o exemplo da palavra cachorro. Comece separando tudo: c, a, c, h, o, r, r, o. Oito pedaços.

Agora olhe para uma montanha de textos e pergunte: qual par de pedaços vizinhos aparece mais vezes? Talvez c com h. Então c h vira um pedaço só. Repita a pergunta. Talvez c com a. Vira ca. Depois ca com ch. Vira cach. E assim por diante, um par por vez, até o vocabulário chegar ao tamanho desejado.

Um exemplo do dia a dia. Pense num atalho de teclado. Se você digita muito obrigado, um dia cria um atalho para obrigado. Se digita muito abraço, cria outro. Ninguém cria atalho para palavra que quase não usa. O BPE faz isso com pedaços de texto: o que se repete muito ganha atalho.

Dois detalhes que valem ouro. Primeiro: o critério é só frequência. Não é significado. Um pedaço sem sentido nenhum vira token se aparecer muito. Segundo: um pedaço pode ficar mais forte que a palavra inteira. O pedaço cach aparece em cachorro, cacho, cachecol. Por isso ele pode virar token antes de cachorro inteiro.

O professor também comentou um lapso de fala que vale corrigir: quando duas letras quase nunca aparecem juntas, a combinação é fraca, e cada letra fica sozinha.

Um ajuste do material avançado. O nome tem byte porque, nos modelos GPT, o ponto de partida não são letras, são bytes. Uma letra acentuada, como o é, ocupa mais de um byte. Com isso, qualquer texto pode ser escrito, e nunca existe uma entrada impossível de ler.

Frase-âncora, de novo: o BPE começa com letras soltas e vai colando os pares que mais se repetem.

## O exemplo GPT-4 é poderoso
Frase-âncora: o que vira token depende do que apareceu nos textos de treino.

O professor pegou a frase GPT-4 é poderoso e arriscou uma divisão. GPT, porque aparece muito junto. O hífen, sozinho. O quatro, sozinho, porque número é difícil de ligar a outras coisas. O é, sozinho, porque aparece demais solto no português. Depois poder. E depois oso.

Ele frisou que tudo isso é um talvez. E tinha razão em frisar. O material avançado conferiu em tokenizadores reais. Num deles, o palpite poder mais oso bateu certinho. Mas GPT foi partido em G e PT. Num tokenizador mais novo, GPT virou um token só, e poderoso também.

A lição: cada modelo tem o seu vocabulário, montado a partir dos textos que ele viu. O mesmo texto pode render quantidades diferentes de tokens em modelos diferentes.

Frase-âncora, de novo: o que vira token depende do que apareceu nos textos de treino.

## Quando os tokens são criados
Frase-âncora: o vocabulário é montado antes, e na conversa ele só é aplicado.

Imagine um carimbo. Ele é fabricado uma vez. Depois, você só carimba. Não fabrica um carimbo novo a cada folha.

Com os tokens é igual. O vocabulário foi montado quando o modelo foi criado, lendo muitos textos. Quando você conversa com o ChatGPT, seu texto é cortado com esse vocabulário pronto. Nenhum token novo nasce na conversa. Se você escreve uma palavra inventada, ela é quebrada em pedaços que já existem.

Um refinamento do material avançado. O professor falou como se os tokens fossem formados durante o treino do próprio modelo. Na prática, o tokenizador é treinado antes e à parte, e depois é congelado. O modelo só recebe números de uma tabela fixa.

Frase-âncora, de novo: o vocabulário é montado antes, e na conversa ele só é aplicado.

## Tokens de tamanhos diferentes
Frase-âncora: palavra comum costuma ser um token, palavra rara costuma virar vários.

Sol pode ser um token. Você também. Interessante e naturalmente costumam se dividir em dois ou mais. O professor já viu palavra com cinco tokens. Mas o mais comum é ficar entre um e três.

Por que a palavra rara se divide? Porque ela, inteira, apareceu pouco nos textos. Não ganhou atalho próprio. Já os pedaços dela aparecem em muitas outras palavras. Então ela é montada com esses pedaços. Termos técnicos, longos ou raros tendem a gastar mais tokens.

Uma consequência curiosa. O modelo não enxerga letras. Ele enxerga pedaços. Por isso pode tropeçar quando você pergunta quantas letras r tem numa palavra, ou quando compara números: o número pode ter sido cortado em pedaços estranhos.

Frase-âncora, de novo: palavra comum costuma ser um token, palavra rara costuma virar vários.

## Tokens no modelo, no contexto e no custo
Frase-âncora: o modelo lê, pensa e cobra em tokens.

Tudo o que vimos com palavras agora vale com tokens. A entrada é uma sequência de tokens. A saída também. Cada token passa por um embedding, que é onde ele ganha significado. Depois vai para a atenção e para o cálculo de probabilidade do próximo token.

Isso muda duas contas práticas. A primeira é a janela de contexto. Quando um modelo anuncia oito mil ou trinta e dois mil, são tokens, não palavras nem caracteres. Um texto de oito mil palavras não cabe numa janela de oito mil tokens, porque cada palavra rende um ou mais tokens.

A segunda é o dinheiro. Os provedores, como a AWS no Bedrock, cobram por token. O motivo é simples: o processamento é feito token a token. Mais tokens, mais trabalho, mais custo.

E o idioma pesa. O material avançado mediu uma frase em português e a equivalente em inglês. Em tokenizadores antigos, o português gastava mais que o dobro. Nos novos, a diferença caiu. Quem estima custo de um produto em português tem que contar com o tokenizador do modelo escolhido, e não contar palavras.

Frase-âncora, de novo: o modelo lê, pensa e cobra em tokens.

## Comparando com o que já vimos
Vamos ligar os pontos.

No bigrama e nas cadeias de Markov, a unidade era a palavra. O modelo contava qual palavra vinha depois de qual. Com tokens, a mesma lógica vale, só que com pedaços. Isso reduz o problema das combinações nunca vistas.

Nas redes profundas, vimos o embedding: transformar algo num vetor de números. É no embedding que o token ganha significado. O token sozinho é só um número numa tabela.

No Transformer, a atenção compara todos os tokens com todos. Então o número de tokens define o custo. Um tokenizador que corta demais deixa tudo mais caro.

E não confunda token com embedding. O token é o pedaço de texto e o seu número na tabela. O embedding é o vetor que dá significado a esse pedaço. Um vem antes do outro, e um não substitui o outro.

## Fechamento
Vamos repetir as frases-âncora.

A língua não para de crescer, e um vocabulário de palavras inteiras nunca fecha.

O token fica entre a letra e a palavra, e é por isso que funciona.

O BPE começa com letras soltas e vai colando os pares que mais se repetem.

O que vira token depende do que apareceu nos textos de treino.

O vocabulário é montado antes, e na conversa ele só é aplicado.

Palavra comum costuma ser um token, palavra rara costuma virar vários.

O modelo lê, pensa e cobra em tokens.

## Revisão
Primeira pergunta: um usuário escreve uma palavra que acabou de inventar. Como o modelo consegue processá-la?

[pausa 5]

Resposta: o tokenizador quebra a palavra em pedaços que já estão no vocabulário. Nenhum token novo é criado.

Segunda pergunta: por que não usar letras como unidade, já que com letras nunca falta nada?

[pausa 5]

Resposta: porque a sequência fica longa demais. A atenção compara todos com todos, então uma fila maior encarece muito a conta, e o modelo ainda teria que montar o sentido letra por letra.

Terceira pergunta: por que o pedaço cach pode virar token antes da palavra cachorro?

[pausa 5]

Resposta: porque o BPE cola os pares mais frequentes, e o pedaço cach aparece em várias palavras, como cacho e cachecol. Cachorro, inteiro, aparece menos.

Quarta pergunta: um desenvolvedor conta sete mil e quinhentas palavras e acha que cabem numa janela de oito mil. O que você diria?

[pausa 5]

Resposta: que não dá para garantir. A janela é medida em tokens, e cada palavra rende um ou mais tokens. Ele precisa contar com o tokenizador do modelo.

Quinta pergunta: com tokens no lugar de palavras, o embedding deixa de existir?

[pausa 5]

Resposta: não. Cada token passa por um embedding, que é onde ele ganha significado. Depois vem a atenção e o cálculo de probabilidade.
