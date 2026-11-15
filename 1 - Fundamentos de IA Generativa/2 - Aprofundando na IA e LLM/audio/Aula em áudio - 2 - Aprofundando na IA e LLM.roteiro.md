# Capítulo 2: Aprofundando na IA e LLM

## Abertura
Oi! Bem-vindo à aula em áudio do segundo capítulo. Pode guardar o celular no bolso e seguir caminhando, porque hoje não precisa de tela nenhuma.

No capítulo passado, a gente terminou no bigrama: o modelo que prevê a próxima palavra olhando só a anterior, que entra em loop e não tem memória. Este capítulo é uma escada que sai dali e vai até a tecnologia por trás do ChatGPT. São quatro degraus: as cadeias de Markov, as redes neurais profundas, as redes neurais recorrentes e, no topo, o Transformer. E, no fim, uma peça que fica debaixo de todos os degraus e que a gente vinha escondendo: o token.

Se esses nomes estão embaralhados na sua cabeça, isso é normal. Eles parecem quatro coisas soltas. Mas existe um fio que liga um degrau ao outro, e ele é sempre o mesmo: cada modelo nasceu para consertar o defeito do anterior. Se você lembrar do defeito, você lembra do próximo degrau.

Cada degrau vai ganhar uma frase-âncora, curtinha, para você repetir de cabeça. Já vou te dar as cinco agora, e no final a gente volta nelas.

Markov: uma categoria escondida. Rede profunda: uma janela maior, mas sem memória. Rede recorrente: memória que vai se apagando. Transformer: todo mundo olha para todo mundo, ao mesmo tempo. E o token: um pedaço de texto escolhido por frequência, e não por significado.

Guarde isso. Vamos subir a escada.

## Degrau 1: as cadeias de Markov e o estado oculto
Frase-âncora do primeiro degrau: Markov, uma categoria escondida.

Primeiro, um detalhe que confunde muita gente. O próprio bigrama já é uma cadeia de Markov. Uma cadeia de Markov é qualquer modelo em que o próximo passo depende só do passo atual, e o bigrama faz exatamente isso com palavras. Então o salto de verdade deste degrau não é o nome Markov. O salto é o modelo oculto de Markov, em inglês Hidden Markov Model, que a gente chama de HMM.

E o que tem de novo no HMM é a palavra "oculto". Existe um estado escondido que você não vê, mas que gera aquilo que você vê.

Exemplo do dia a dia. Você está numa sala sem janela e quer saber se está chovendo lá fora. Você não vê o céu. O tempo lá fora é o estado oculto. Mas as pessoas vão entrando na sala, e você observa: uma entrou com guarda-chuva molhado, outra entrou de óculos escuros. Essas são as observações. A partir delas, você infere o estado escondido: provavelmente está chovendo.

O HMM funciona com duas tabelas de probabilidade. A primeira é a de transição: qual a chance de passar de um estado para outro. Por exemplo, se hoje está chovendo, qual a chance de amanhã fazer sol? A segunda é a de emissão: qual a chance de cada estado produzir cada observação. Se está chovendo, qual a chance de alguém entrar de guarda-chuva?

E agora vem a parte que conecta com linguagem. Um uso clássico do HMM é descobrir a classe gramatical das palavras. A classe gramatical, se a palavra é verbo, substantivo ou adjetivo, é a categoria escondida. Ela não está escrita no texto. O que você vê são só as palavras. Mas o modelo infere: essa aqui provavelmente é um verbo, essa um substantivo. É daí que vem a nossa âncora: uma categoria escondida.

Outro uso famoso foi o reconhecimento de fala nas primeiras assistentes de voz. O som que chega no microfone é a observação. O fonema que a pessoa quis dizer é o estado oculto. E ainda tem a biologia, na análise de sequências de DNA.

Só três nomes de algoritmo, para você reconhecer se aparecerem. O Forward-Backward calcula a probabilidade de uma sequência acontecer. O Viterbi encontra a sequência de estados escondidos mais provável. E o Baum-Welch ajusta as tabelas a partir dos dados. Calcular, achar o melhor caminho, ajustar.

Onde ele quebra. O HMM continua preso à regra de Markov: o próximo estado depende só do estado atual. Ou seja, a memória dele continua curtíssima. Ele não liga o começo de um parágrafo ao final. Ele anda só para frente, sem voltar para revisar. E não serve para gerar textos longos e livres: se você tentar, sai um texto que perde o rumo e se repete.

Resumo do degrau um: o HMM adiciona uma camada escondida, uma categoria que não se vê mas se infere, e isso foi um salto. Mas ele continua olhando só um passo para trás.

E a pergunta para o próximo degrau: e se, em vez de tabelas de probabilidade, a máquina aprendesse sozinha, a partir de muitos dados, o que as palavras significam?

Markov: uma categoria escondida.

## Degrau 2: as redes neurais profundas
Frase-âncora do segundo degrau: rede profunda, uma janela maior, mas sem memória.

Durante os anos oitenta e noventa, a evolução foi lenta. Bigramas e Markov serviam para usos específicos, mas eram difíceis de escalar. Aí duas coisas mudaram o jogo. A primeira foi a explosão de dados: internet, redes sociais, tudo virando digital. A segunda foi o poder de processamento, principalmente as placas de vídeo, as GPUs, que são ótimas para o tipo de conta que uma rede neural faz. Dados mais processamento: as redes neurais voltaram com força.

Uma rede neural profunda é uma sequência de camadas. A informação entra, passa por uma camada que transforma, depois outra que recombina, depois outra, e assim por diante, até virar uma resposta. O "profunda" do nome é só isso: muitas camadas.

Mas existe um problema prático. A rede não entende palavras, ela só entende números. Então como colocar uma palavra lá dentro? É aqui que entram os embeddings.

Um embedding transforma cada palavra numa lista de números, um vetor. E o truque é que palavras com significado parecido ficam com vetores parecidos, próximas umas das outras. Imagina um mapa enorme onde cada palavra é uma cidade. "Cachorro" e "gato" ficam no mesmo bairro. "Carro" fica em outro bairro, perto de "moto". Ninguém disse para a rede que cachorro e gato são parecidos. Ela descobriu sozinha, vendo essas palavras aparecerem em frases parecidas. Esse é o ganho grande: agora existe uma noção de significado.

Com isso, a rede mais simples, chamada feedforward, que quer dizer "alimentada para frente", faz o seguinte: pega as últimas palavras, por exemplo as últimas quatro, transforma em vetores, passa tudo pelas camadas e prevê a quinta. Por exemplo: "o cachorro está no"... e a rede prevê "jardim". Repara a diferença para o bigrama: ele olhava uma palavra, e aqui a rede olha uma janela de quatro. Daí a âncora: uma janela maior.

Agora, onde ela quebra. Primeiro: a janela é fixa. Se a informação importante ficou cinco palavras para trás, ela está fora da janela e simplesmente some.

Segundo: a ordem. Pensa nessas duas frases. "O cachorro mordeu o homem". "O homem mordeu o cachorro". As palavras são as mesmas, e o sentido é totalmente diferente. Se a rede junta os vetores das palavras de um jeito simples, por exemplo somando, as duas frases ficam praticamente iguais para ela. Ela perde quem fez o quê.

E terceiro, o mais importante: ela não tem memória. A cada previsão, ela só sabe o que está na janela naquele instante. Não lembra o que leu antes. Isso torna difícil manter uma conversa, traduzir um texto ou fazer um resumo coerente.

Resumo do degrau dois: muitos dados e GPUs trouxeram as redes profundas. Os embeddings deram às palavras uma noção de significado. A feedforward olha uma janela maior, mas fixa, sem noção de ordem e sem memória.

E a pergunta para o próximo degrau é óbvia: e se a rede tivesse memória?

Rede profunda: uma janela maior, mas sem memória.

## Degrau 3: as redes neurais recorrentes
Frase-âncora do terceiro degrau: rede recorrente, memória que vai se apagando.

RNN, rede neural recorrente. Recorrente porque ela volta a usar o que já processou. Ela lê a frase palavra por palavra, em ordem, e a cada palavra atualiza uma espécie de bloco de anotações interno, que a gente chama de estado. Na hora de processar a próxima palavra, ela usa duas coisas: a palavra nova e o bloco de anotações com tudo que veio antes.

Exemplo do dia a dia. Pensa em alguém te contando uma história por telefone. Você não tem o texto na mão: vai ouvindo frase por frase e guardando o essencial na cabeça. É assim que a RNN trabalha.

E isso resolve o problema do cachorro e do homem. Como ela lê em ordem e lembra o que veio antes, ela sabe quem mordeu quem. Com as RNNs vieram avanços reais em tradução automática, reconhecimento de fala, geração de texto e análise de sentimento, que é entender se um texto é positivo ou negativo.

Agora, onde ela quebra. Voltando à história por telefone: se ela for muito longa, você esquece o começo. A RNN também. O nome técnico disso é desvanecimento do gradiente. Sem entrar em matemática: o sinal que a rede usa para aprender vai sendo multiplicado a cada passo para trás. Se ele é um pouquinho menor que um, depois de muitos passos vira quase zero. Pensa em zero vírgula nove multiplicado por ele mesmo cinquenta vezes: dá praticamente nada. Resultado: a rede não consegue aprender ligações entre o começo e o fim de uma frase longa. Ela esquece o sujeito lá do começo e, no final, usa um verbo que não combina com ele. Daí a âncora: memória que vai se apagando.

Existe também o problema oposto, a explosão do gradiente. Se o fator for um pouco maior que um, ele cresce sem parar, e o treino fica instável. Mesma causa, direções opostas.

E tem um terceiro problema, que vai ser decisivo: a RNN é sequencial. Para processar a palavra dez, ela precisa ter terminado a nove. Não dá para fazer tudo ao mesmo tempo. Isso deixa o treino lento e impede aproveitar bem as GPUs, que são justamente boas em fazer muita coisa em paralelo.

Para aliviar a perda de memória, surgiram duas versões melhoradas. A primeira é a LSTM, sigla em inglês para memória de longo e curto prazo. Ela tem três portas, como se fossem porteiros controlando o bloco de anotações. A porta de entrada decide o que vale anotar. A porta de esquecimento decide o que apagar. E a porta de saída decide o que passar adiante. Assim a rede guarda o que é importante e joga fora o ruído.

A segunda é a GRU, que veio depois e é uma versão simplificada: junta a porta de entrada e a de esquecimento numa só. Fica com duas portas, tem menos coisas para ajustar, treina mais rápido e, em muitas tarefas, funciona quase tão bem quanto a LSTM. Para lembrar: LSTM, três porteiros. GRU, dois porteiros.

Mas repara: LSTM e GRU são remendos. Elas aliviam o esquecimento, mas não resolvem os dois problemas de fundo. Continuam sequenciais, uma palavra de cada vez. E continuam sofrendo com textos muito longos.

Resumo do degrau três: a RNN ganhou memória e passou a entender a ordem. Mas a memória se apaga em textos longos, e o processamento é uma fila, uma palavra de cada vez.

E a pergunta para o último degrau: e se, em vez de carregar a memória numa fila, o modelo pudesse olhar diretamente para qualquer palavra do texto, todas ao mesmo tempo?

Rede recorrente: memória que vai se apagando.

## Degrau 4: o Transformer
Frase-âncora do quarto degrau: Transformer, todo mundo olha para todo mundo, ao mesmo tempo.

Em dois mil e dezessete, um artigo com um título provocativo, "Attention Is All You Need", ou "Atenção é tudo de que você precisa", propôs uma ideia radical: jogar fora a recorrência. Nada de ler uma palavra por vez carregando um bloco de anotações. Em vez disso, um mecanismo chamado atenção.

A ideia da atenção é esta. Para entender cada palavra, o modelo compara essa palavra com todas as outras da frase e decide quais importam mais para ela. Quando essa comparação acontece dentro da própria frase, o nome é autoatenção, em inglês self-attention.

Exemplo. "O cachorro que o menino viu estava latindo." Quem está latindo? A palavra mais próxima de "latindo" é "menino". Um modelo que só olhasse o vizinho erraria. Mas a atenção permite que "latindo" olhe para a frase inteira e dê mais peso para "cachorro". A distância deixou de ser problema. Lembra da RNN esquecendo o sujeito no começo da frase longa? Aqui não existe fila para a informação se perder no caminho. Cada palavra consulta todas as outras diretamente.

Exemplo do dia a dia. A RNN era a história contada por telefone, frase por frase. O Transformer é receber a história impressa, inteira, numa folha. Você bate o olho e liga qualquer parte com qualquer parte, na hora.

Agora, se tudo é processado ao mesmo tempo, como o modelo sabe a ordem das palavras? Ele não tem mais a fila para indicar quem veio primeiro. A solução é o positional encoding, a codificação de posição. Cada palavra recebe, junto com o seu vetor, uma marcação de onde ela está na frase. É como numerar as cadeiras: todo mundo senta ao mesmo tempo, mas cada um sabe o seu lugar. Assim o modelo continua sabendo quem mordeu quem.

Depois da atenção, cada palavra ainda passa por camadas de rede neural comuns, aquelas do degrau dois, que refinam a informação. Um jeito de lembrar: a atenção decide com quem cada palavra conversa, e as camadas seguintes decidem o que fazer com o que foi conversado.

E aí vem o ganho que mudou o mundo: o paralelismo. Como não existe mais fila, o modelo processa todas as palavras ao mesmo tempo. Isso casa perfeitamente com as GPUs. O treino fica muito mais rápido, o que permite treinar com volumes gigantescos de dados e construir modelos com bilhões de parâmetros. E foi esse crescimento de escala que fez os modelos darem o salto de qualidade que a gente vê hoje.

Por isso o Transformer virou a base de praticamente tudo: GPT, BERT, Llama, e também modelos que trabalham com imagem e com áudio. A atenção virou um jeito geral de relacionar partes de qualquer coisa.

Resumo do degrau quatro: o Transformer troca a memória em fila pela atenção, em que cada palavra olha diretamente para todas as outras. Usa a codificação de posição para não perder a ordem e processa tudo em paralelo, o que permitiu escalar até os grandes modelos de linguagem.

Transformer: todo mundo olha para todo mundo, ao mesmo tempo.

## A peça de baixo: os tokens
Frase-âncora desta peça: token, um pedaço de texto escolhido por frequência, e não por significado.

Até aqui eu disse "palavra" o tempo todo. A palavra anterior, a próxima palavra, cada palavra olha para todas as outras. Era uma simplificação, e chegou a hora de corrigir. Nenhum desses modelos trabalha com palavras. Eles trabalham com tokens.

Por que não usar a palavra? Porque a linguagem é aberta. Todo dia alguém inventa uma palavra, escreve errado, mistura idiomas, solta uma gíria. Se o modelo só conhecesse palavras inteiras de uma lista, toda palavra nova seria um buraco.

E por que não usar a letra? Porque a frase ficaria enorme. E lembra o preço do Transformer: como cada pedaço olha para todos os outros, dobrar o tamanho do texto multiplica o custo por quatro. Quebrar tudo em letras seria caríssimo. O token é o meio-termo: um pedaço maior que a letra e menor que a palavra, em média.

Como o pedaço é escolhido? Por um método chamado Byte Pair Encoding, ou codificação por pares de bytes. A receita é simples. Comece com o texto quebrado em unidades mínimas. Conte quais pares de unidades aparecem lado a lado com mais frequência nos textos de treino. Funda o par mais frequente numa unidade nova. Repita isso dezenas de milhares de vezes. No fim, você tem uma lista ordenada de fusões.

Exemplo. Em português, "ca" e "ch" aparecem juntos em muita palavra, então se fundem cedo e viram "cach". Só depois, se "cachorro" inteiro continuar aparecendo muito, ele vira um token só. Por isso um pedaço que aparece em várias palavras costuma virar token antes da palavra completa. É o que o professor quis dizer com tokens "fortes".

Três correções importantes sobre essa história.

Primeira: o tokenizador é montado antes, e à parte do modelo. Ele é treinado sozinho, congela, e só depois o modelo aprende em cima dele. Durante uma conversa, nenhum token novo nasce. Uma palavra que o modelo nunca viu é simplesmente quebrada em pedaços que ele já conhece.

Segunda: nos modelos da família GPT, o ponto de partida não é a letra, é o byte. Isso garante que qualquer texto possa ser escrito, até um emoji raro, porque todo byte já tem um símbolo. Não existe entrada desconhecida.

Terceira: o token não tem significado. A palavra "interessante", por exemplo, pode ser dividida em "inter", "ess" e "ante", que não são prefixo, raiz e sufixo. A divisão é estatística. Quem dá significado ao token é o embedding, lá do degrau dois, aprendido depois.

Agora, o que isso muda na prática. Tudo é medido em tokens: a janela de contexto, o custo, a cobrança. Contar palavras dá a resposta errada.

E o idioma importa. Numa medição que eu fiz, a frase "o cachorro é interessante" gastou dez tokens num tokenizador antigo, o do GPT-2, seis num intermediário, e quatro num dos mais novos. A mesma ideia em inglês gastou quatro em todos. Ou seja, em modelos mais antigos o português custa bem mais e deixa menos espaço no contexto. Quem vai montar um produto em português deve estimar o custo com o tokenizador do modelo que vai usar.

O espaço também faz parte do token. A palavra "strawberry" sem espaço foi dividida em três tokens num tokenizador real, e com um espaço na frente virou um só. E isso explica um erro famoso: o modelo não enxerga letras, enxerga números que identificam tokens. Por isso ele pode errar ao contar quantos erres tem numa palavra, ou tropeçar em contas com números, porque um número como doze mil trezentos e quarenta e cinco é cortado em pedaços.

Por fim, a ponte com os degraus. O último passo do modelo é escolher o próximo token entre todos os do vocabulário, que tem dezenas ou centenas de milhares. É a mesma lógica do bigrama lá do começo, só que a unidade agora é o token.

Token: um pedaço de texto escolhido por frequência, e não por significado.

## Comparando os vizinhos
Agora vamos fazer o exercício mais importante do dia: comparar degraus vizinhos, um par de cada vez. É aqui que a confusão costuma acontecer.

Bigrama contra Markov. Os dois só olham um passo para trás. A diferença é que o bigrama trabalha direto com as palavras que vê, enquanto o modelo oculto de Markov supõe que existe uma categoria escondida por trás das palavras, como a classe gramatical, e tenta adivinhar essa categoria. Bigrama: só o visível. Markov: o visível mais o escondido.

Markov contra rede profunda. Markov usa tabelas de probabilidade. A rede profunda aprende sozinha, a partir de montanhas de dados, e representa as palavras como vetores, em que significados parecidos ficam perto. E ela olha uma janela de várias palavras, não só uma. Mas, assim como Markov, não tem memória do que veio antes da janela.

Rede profunda contra rede recorrente. As duas são redes neurais com embeddings. A diferença é a memória. A feedforward enxerga uma janela fixa e esquece tudo a cada previsão. A RNN lê em ordem e carrega um bloco de anotações de uma palavra para a próxima. Por isso a RNN entende a ordem, e a feedforward se confunde com o cachorro e o homem.

Rede recorrente contra Transformer. As duas querem entender o contexto. A RNN faz isso em fila, carregando a memória passo a passo, e essa memória se apaga em textos longos. O Transformer não carrega nada em fila: cada palavra consulta todas as outras diretamente, e tudo acontece em paralelo. Fila contra todos ao mesmo tempo.

Token contra palavra. A palavra é a unidade que a gente enxerga. O token é a unidade que o modelo enxerga, e pode ser uma palavra inteira, um pedaço dela ou uma letra. Uma palavra pode render um token ou vários.

Token contra embedding. O token é só um pedaço de texto, com um número de identificação. O embedding é o vetor que dá a esse número uma noção de significado. Primeiro o texto vira tokens. Depois cada token vira um vetor. Só então entram a atenção e as camadas.

E, se você quiser uma frase só para a escada inteira: cada degrau enxerga mais longe que o anterior. Uma categoria escondida, uma janela, uma memória e, finalmente, a frase inteira. E tudo isso, em pedaços chamados tokens.

## Revisão
Para fechar, vamos repetir as frases-âncora. Tenta falar junto, mesmo que só na cabeça.

Markov: uma categoria escondida.
Rede profunda: uma janela maior, mas sem memória.
Rede recorrente: memória que vai se apagando.
Transformer: todo mundo olha para todo mundo, ao mesmo tempo.
Token: um pedaço de texto escolhido por frequência, e não por significado.

Agora, algumas perguntas. Depois de cada uma eu vou ficar alguns segundos em silêncio. Responde na sua cabeça antes de ouvir a resposta.

Primeira pergunta: no modelo oculto de Markov, o que é o estado oculto quando o objetivo é descobrir a classe gramatical das palavras? E o que são as observações?

[pausa 5]

Resposta: o estado oculto é a própria classe gramatical, se a palavra é verbo, substantivo, adjetivo. Ela não aparece no texto, é inferida. As observações são as palavras.

Segunda pergunta: qual algoritmo encontra a sequência de estados ocultos mais provável?

[pausa 5]

Resposta: o Viterbi. O Forward-Backward calcula a probabilidade da sequência, e o Baum-Welch ajusta as tabelas.

Terceira pergunta: o que um embedding faz e por que ele foi importante?

[pausa 5]

Resposta: transforma cada palavra num vetor de números, de modo que palavras com significado parecido fiquem perto umas das outras. Deu à máquina uma noção de significado aprendida dos dados.

Quarta pergunta: qual é a diferença essencial entre a rede feedforward e a rede recorrente?

[pausa 5]

Resposta: memória. A feedforward olha só uma janela fixa e esquece tudo a cada previsão. A recorrente lê em ordem e carrega um estado interno de uma palavra para a próxima.

Quinta pergunta: quantas portas tem a LSTM e quantas tem a GRU?

[pausa 5]

Resposta: a LSTM tem três, entrada, esquecimento e saída. A GRU tem duas, porque junta entrada e esquecimento numa só.

Sexta pergunta: se o Transformer processa todas as palavras ao mesmo tempo, como ele sabe a ordem delas?

[pausa 5]

Resposta: pela codificação de posição, o positional encoding. Cada palavra recebe uma marcação de onde está na frase.

Sétima pergunta: quais são os dois problemas da RNN que o Transformer resolve, e como?

[pausa 5]

Resposta: o esquecimento em textos longos e a lentidão de processar em fila. O Transformer resolve os dois com a atenção, em que cada palavra olha diretamente para todas as outras, e com o processamento em paralelo.

Oitava pergunta: um colega diz que o modelo cria tokens novos conforme o usuário escreve. Está certo?

[pausa 5]

Resposta: não. O vocabulário de tokens é montado antes, por um tokenizador treinado à parte, e fica fixo. Uma palavra nova é quebrada em pedaços que já existem.

Nona pergunta: por que estimar o custo de um produto em português com exemplos em inglês pode dar errado?

[pausa 5]

Resposta: porque o custo é por token, e o mesmo conteúdo costuma render mais tokens em português, principalmente em tokenizadores mais antigos. A estimativa precisa usar o tokenizador do modelo escolhido.

Décima pergunta: o que um token representa, e de onde vem o significado dele?

[pausa 5]

Resposta: o token é um pedaço de texto escolhido por frequência, sem significado próprio. O significado vem do embedding, aprendido depois.

É isso. Quatro degraus, cada um consertando o defeito do anterior, e uma peça de baixo que explica em que unidade tudo isso é escrito e cobrado. Se amanhã alguém perguntar a diferença entre eles, você já tem as frases-âncora na ponta da língua. Bom passeio, e até a próxima.
