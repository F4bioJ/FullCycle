# Capítulo 1: Gen IA

## Abertura
Oi! Bem-vindo à aula em áudio do primeiro capítulo. Pode guardar o celular no bolso e seguir caminhando, porque hoje não precisa de tela nenhuma.

Este capítulo responde três perguntas. A primeira: o que é, afinal, uma IA generativa, e no que ela é diferente da IA que já existia antes? A segunda: como uma máquina aprende a criar alguma coisa? E a terceira: como a gente chegou até aqui, passando por mais de setenta anos de altos e baixos? No final, a gente fecha com o primeiro modelo de linguagem do curso, o bigrama.

Como sempre, cada bloco vai ganhar uma frase-âncora curtinha, para você repetir de cabeça. Já vou te dar as cinco agora, e no final a gente volta nelas.

IA tradicional: escolhe entre respostas que já existem. IA generativa: escreve uma resposta que não existia. Como aprende: um mapa de probabilidades. História: das regras para a probabilidade. Bigrama: duas palavras.

Vamos lá.

## Tradicional contra generativa
Frase-âncora deste bloco: a IA tradicional escolhe entre respostas que já existem. A IA generativa escreve uma resposta que não existia.

Comece pela IA tradicional, porque ela está na sua vida há anos, mesmo que você não perceba. Quando o banco bloqueia uma compra estranha no seu cartão, é ela. Quando um e-mail vai direto para o spam, é ela. Quando o aplicativo de música sugere a próxima faixa, é ela também.

O que essas coisas têm em comum? Todas preveem ou classificam. E todas aprendem do mesmo jeito: com exemplos que já vêm com a resposta certa marcada. Isso se chama aprendizado supervisionado, e esses exemplos marcados se chamam dados rotulados.

Um exemplo bem concreto. Imagina que você quer prever se um imóvel vai ser vendido em até um mês. Você junta milhares de anúncios antigos, cada um com preço, bairro, tamanho, e com a resposta já conhecida: vendeu rápido ou não vendeu. O modelo estuda esses exemplos e, diante de um anúncio novo, diz qual das duas respostas é mais provável. Repara: as respostas possíveis já estavam definidas antes. Vende ou não vende. Spam ou não spam. Fraude ou não fraude.

E daí vem uma regra importante: a qualidade do modelo tradicional depende da qualidade dos rótulos. Se alguém marcou errado nos dados de treino, o modelo aprende errado, com toda a confiança.

Agora a IA generativa. Ela não escolhe uma resposta numa lista. Ela produz uma saída nova, que não existia até você pedir. Um texto, uma imagem, um trecho de código, um áudio, como este que você está ouvindo. A resposta não está guardada em lugar nenhum. Ela é montada na hora, a partir do seu pedido.

Uma imagem para fixar. A IA tradicional é um aluno numa prova de múltipla escolha: ele analisa as alternativas e marca a melhor. A IA generativa é alguém que leu milhares de livros e, quando você pede, escreve uma história nova, que não copia nenhuma das que leu.

Outra diferença está nos dados. A tradicional precisa de exemplos rotulados, com cuidado, um a um. A generativa é treinada com um volume gigantesco de dados, em geral sem rótulos explícitos. Ela aprende a estrutura do próprio material.

E por que isso explodiu justamente agora, e não vinte anos atrás? São três pilares. Primeiro, poder de processamento, principalmente as placas de vídeo, as GPUs, que fazem muito bem o tipo de conta que esses modelos precisam. Segundo, volume de dados, que antes simplesmente não existia em quantidade e organização suficientes. E terceiro, uma arquitetura chamada Transformer, que vai ser o assunto central do próximo capítulo. Guarde os três: GPUs, dados e Transformer.

Por último, um alerta prático, que vale muito para quem trabalha com software. A IA generativa erra. Ela escreve código, texto e imagens, mas o resultado depende de um bom pedido, o famoso prompt, e de alguém que saiba avaliar o que saiu. Quem não sabe programar não consegue nem pedir a coisa certa, nem perceber quando a resposta está errada. Revisar sempre faz parte do trabalho.

Resumo do bloco: a IA tradicional prevê e classifica, com respostas já conhecidas e dados rotulados. A IA generativa cria saídas novas, aprendendo com volumes enormes de dados. E o que destravou isso foram GPUs, dados e o Transformer.

A IA tradicional escolhe entre respostas que já existem. A IA generativa escreve uma resposta que não existia.

## Como a IA generativa aprende
Frase-âncora deste bloco: um mapa de probabilidades.

Se a IA generativa não tem a resposta guardada, de onde ela tira o que escreve? A resposta curta é: ela aprende os padrões escondidos no material de treino e monta, por dentro, uma espécie de mapa de probabilidades. Um mapa do que costuma combinar com o quê.

Pensa num cozinheiro experiente. Depois de preparar centenas de pratos, ele não decorou receitas. Ele aprendeu as regras: o que combina com o quê, que tempero vai bem com que carne, o que nunca dá certo junto. Por isso ele consegue inventar um prato que nunca existiu e que, mesmo assim, faz sentido. A IA generativa faz algo parecido com palavras: ela aprende as regras implícitas e percorre caminhos novos, que não estavam no treino, mas que respeitam essas regras.

E aqui entra um ponto importante. Quanto mais dados no treino, mais calibrado fica esse mapa, e menor a chance de a IA inventar coisas sem sentido. Quando ela inventa algo que parece certo mas é falso, a gente chama isso de alucinação.

Agora, três ideias técnicas que aparecem neste bloco e que vão voltar muito no curso.

A primeira: o modelo autorregressivo. É o jeito como o ChatGPT escreve: uma palavra de cada vez. Cada palavra escolhida passa a fazer parte da base para escolher a próxima. Ele vai se autocompletando até o fim. É parecido com quando você fala: a frase que você acabou de dizer prepara a próxima. E, assim como a gente às vezes se perde no meio de uma explicação, o modelo também pode se perder.

A segunda: os embeddings. A máquina não lê português. Ela só faz conta. Então, antes de tudo, cada palavra vira uma lista de números, um vetor. Pensa nesses vetores como endereços num mapa de significados. Palavras de sentido parecido ficam no mesmo bairro. "Rei" mora perto de "rainha". "Cachorro" mora longe dos dois. Quanto mais perto, mais parecido o significado, e mais provável que uma palavra apareça no contexto da outra.

A terceira: a autoatenção, ou self-attention. É o mecanismo que permite ao modelo manter o foco no que importa num texto longo. Pensa numa série de muitos episódios. Lá no episódio dez, você ainda lembra quem é a protagonista apresentada no primeiro, mesmo depois de um monte de cenas paralelas. A autoatenção dá ao modelo essa capacidade: ligar o que está sendo escrito agora com o que importa lá atrás. O professor avisou que isso seria aprofundado depois, e é exatamente o que acontece no próximo capítulo.

Resumo do bloco: a IA generativa aprende padrões e monta um mapa de probabilidades. Escreve palavra por palavra, de forma autorregressiva. Representa palavras como vetores, os embeddings. E usa a autoatenção para não perder o fio em textos longos.

Como aprende: um mapa de probabilidades.

## A história, parte um: das ideias às regras
Frase-âncora dos dois blocos de história: das regras para a probabilidade.

A IA não nasceu com o ChatGPT. A ideia de máquinas que pensam é antiga. Já na mitologia grega existiam seres artificiais criados pelos deuses, capazes de agir sozinhos. O sonho é velho. O que mudou foi a tecnologia.

A história moderna começa em mil novecentos e cinquenta, com Alan Turing, um dos pais da computação. Ele fez uma pergunta simples e provocadora: as máquinas podem pensar? E propôs um teste, que ficou conhecido como Teste de Turing. A ideia: se você conversa com alguém sem ver quem é, e não consegue dizer se é uma pessoa ou uma máquina, então, na prática, a máquina está se comportando de forma inteligente. Turing mudou o foco: de construir máquinas que fazem contas para construir máquinas que imitam o pensamento.

Em mil novecentos e cinquenta e seis veio a Conferência de Dartmouth, nos Estados Unidos. Poucos participantes, mas grandes nomes, como John McCarthy, Marvin Minsky e Herbert Simon. A conclusão deles foi otimista: sim, dá para fazer computadores simularem a inteligência humana. É o marco de nascimento da IA como área de pesquisa. Foi ali, inclusive, que o termo inteligência artificial ganhou força.

Logo depois, no fim dos anos cinquenta, Frank Rosenblatt criou o Perceptron. Inspirado no neurônio do cérebro, ele foi a primeira ideia de rede neural. E a novidade era enorme: a máquina aprendia a partir de exemplos, e não a partir de instruções escritas por um programador. Mas a época não ajudava. Havia poucos dados e os computadores eram fracos demais. O Perceptron ficou travado.

Então, nos anos sessenta, ganhou força outro caminho: a IA baseada em regras. Regras do tipo "se acontecer isso, então faça aquilo". Por exemplo, um sistema de diagnóstico: se o paciente tem febre e manchas, então considere tal doença. Era viável de programar na época, e por isso venceu. Mas tem um problema de fundo: cada regra precisa ser escrita à mão. O sistema só sabe o que alguém codificou. Ele não aprende nada sozinho. E uma inteligência de verdade precisa aprender.

Então, nesse começo, existiam dois caminhos. As redes neurais, que aprendiam com exemplos, mas não tinham dados nem máquinas suficientes. E as regras, que funcionavam, mas eram limitadas ao que foi escrito. As regras ganharam essa primeira rodada.

## A história, parte dois: o inverno e a volta
Depois de tanto otimismo, veio a frustração. Nos anos setenta e oitenta, a IA não entregou o que prometia. Faltava processamento, faltavam dados, e as regras não davam conta de problemas complexos. A máquina não entendia linguagem, não reconhecia imagem, não reconhecia som e não aprendia. O dinheiro sumiu, o interesse caiu. Esse período ficou conhecido como o inverno da IA.

Mas, mesmo no inverno, teve uma luz. Em mil novecentos e oitenta e dois, John Hopfield propôs uma rede em que a saída de um neurônio podia voltar como entrada de outro, ou dele mesmo. Formava um ciclo, mais parecido com o cérebro. Com isso, a rede conseguia completar um padrão incompleto, como quando você reconhece uma música só pelas primeiras notas. É o que se chama de memória associativa. E essa ideia de rede que se realimenta, a rede recorrente, volta no próximo capítulo. Por esse trabalho, Hopfield ganhou o Nobel de Física em dois mil e vinte e quatro.

A grande virada, porém, foi outra: trocar a certeza pela probabilidade. Até então, a máquina trabalhava com sim ou não. Mas a mente humana vive de incerteza. Você vê uma mancha branca no quintal ao entardecer e pensa: deve ser o gato do vizinho. Pode ser um saco plástico, mas você escolhe o mais provável. As máquinas passaram a fazer o mesmo, usando estatística. Daí a nossa âncora: das regras para a probabilidade.

Nos anos noventa e dois mil, com mais dados e mais processamento, a estatística dominou. O exemplo mais famoso é o filtro de spam, feito com um classificador chamado Naive Bayes. Ele calcula, a partir das palavras de um e-mail, a probabilidade de ser lixo. Foi talvez o primeiro uso de IA que melhorou de verdade o dia a dia de todo mundo. E, nessa época, também ganharam espaço as cadeias de Markov, que modelam sequências e permitem prever o próximo elemento, como a próxima palavra de um texto. Prever a próxima palavra é o primeiro passo para uma máquina conseguir conversar.

Depois a história acelera. Entre dois mil e dez e dois mil e quatorze, com muitos dados e GPUs, veio o deep learning, o aprendizado profundo: redes neurais com muitas camadas, finalmente em larga escala. É a volta triunfal do caminho do Perceptron. Em dois mil e quatorze vieram as GANs, redes adversárias generativas: duas redes que competem. Uma cria uma imagem falsa e a outra tenta descobrir se é falsa. Como um falsificador e um perito treinando um ao outro, até a falsificação ficar perfeita. Em dois mil e dezessete veio o Transformer, com o artigo "Attention Is All You Need". E, a partir de dois mil e vinte, o boom: GPT, geradores de imagem, geradores de vídeo.

E repara que os três pilares do começo do capítulo reaparecem no fim da história: dados, GPUs e Transformer.

Resumo dos dois blocos de história: começou com a pergunta de Turing e com o Perceptron, passou pelas regras escritas à mão, travou no inverno da IA, renasceu com a probabilidade e explodiu com deep learning e Transformers.

Das regras para a probabilidade.

## O bigrama
Frase-âncora deste bloco: bigrama, duas palavras.

Agora a gente desce da história para o primeiro modelo de linguagem do curso. Ele é simples de propósito: a partir daqui o curso vai acrescentando complexidade aos poucos.

O bigrama, ou dois-grama, prevê a próxima palavra olhando só a palavra imediatamente anterior. Ele trabalha com pares. Pensa no teclado do celular: você digita "feliz" e ele sugere "aniversário". Por quê? Porque, em tudo que ele já viu, esse par aparece muito. É pura contagem. Ele não sabe o que é aniversário. Ele só sabe que esse par é frequente.

E isso já é a virada da probabilidade em ação. Numa árvore de sim ou não, o sistema travaria, porque depois de "feliz" podem vir muitas palavras. O bigrama simplesmente escolhe a mais provável.

Agora, onde ele quebra. Primeiro, ele entra em loop. Se um par é muito forte, ele repete sem parar. Imagina um modelo que aprendeu que depois de "café" vem "com", depois de "com" vem "leite", e depois de "leite" vem "café". Ele pode gerar "café com leite café com leite café com leite" para sempre.

Segundo, ele não tem memória. Quando decide a palavra depois de "leite", ele já esqueceu tudo que veio antes do par. Não sabe qual é o assunto, nem para onde a frase vai. Por isso, o texto sai picado, repetitivo e sem sentido global. Ele vê padrões de frequência, mas não entende significado.

Resumo do bloco: o bigrama prevê a próxima palavra pela anterior, só pela frequência dos pares. É o primeiro passo da linguagem probabilística, mas não tem memória, não tem contexto e entra em loop. E consertar esses defeitos, um de cada vez, é justamente a história do próximo capítulo.

Bigrama: duas palavras.

## Revisão
Para fechar, vamos repetir as frases-âncora. Tenta falar junto, mesmo que só na cabeça.

IA tradicional: escolhe entre respostas que já existem.
IA generativa: escreve uma resposta que não existia.
Como aprende: um mapa de probabilidades.
História: das regras para a probabilidade.
Bigrama: duas palavras.

Agora, algumas perguntas. Depois de cada uma eu vou ficar alguns segundos em silêncio. Responde na sua cabeça antes de ouvir a resposta.

Primeira pergunta: um sistema que decide se um pedido de empréstimo é aprovado ou negado, treinado com pedidos antigos e suas respostas, é IA tradicional ou generativa? Por quê?

[pausa 5]

Resposta: tradicional. As respostas possíveis já são conhecidas, aprovado ou negado, e ele aprende com dados rotulados. É classificação, não criação.

Segunda pergunta: quais são os três pilares que explicam por que a IA generativa explodiu agora?

[pausa 5]

Resposta: poder de processamento, principalmente GPUs; volume de dados; e a arquitetura Transformer.

Terceira pergunta: o que significa dizer que um modelo é autorregressivo?

[pausa 5]

Resposta: que ele gera o conteúdo uma palavra de cada vez, e cada palavra gerada entra na base para escolher a próxima.

Quarta pergunta: num embedding, o que quer dizer duas palavras estarem perto uma da outra?

[pausa 5]

Resposta: que elas têm significado parecido e costumam aparecer em contextos parecidos, como rei e rainha.

Quinta pergunta: por que a IA baseada em regras "se, então" não era uma inteligência de verdade?

[pausa 5]

Resposta: porque cada regra precisava ser escrita à mão. O sistema só sabia o que alguém codificou e não aprendia nada sozinho.

Sexta pergunta: qual foi a grande mudança de mentalidade no fim do inverno da IA?

[pausa 5]

Resposta: a troca da certeza, do sim ou não, pela probabilidade. A máquina passou a escolher a resposta mais provável, como a gente faz quando lida com incerteza.

Sétima pergunta: por que o bigrama entra em loop?

[pausa 5]

Resposta: porque ele só olha a palavra anterior. Se um par é muito frequente, ele sempre escolhe esse par, e como não lembra do que já disse, repete tudo de novo.

É isso. Fechamos o primeiro capítulo: o que é a IA generativa, como ela aprende, de onde ela veio e o primeiro modelo de linguagem. No próximo capítulo, a gente sobe a escada a partir do bigrama até chegar no Transformer. Bom passeio, e até a próxima.
