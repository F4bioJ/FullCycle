# Engenharia de prompt

## Abertura
Na aula passada vimos por que vale começar pelo prompt. Ele é o caminho mais barato para direcionar um modelo, porque não mexe nos pesos nem na arquitetura.

Hoje a pergunta é outra. Como escrever esse prompt?

São cinco estratégias: zero shot, few shot, chain of thought, role based e instruction tuning. Nenhuma é a melhor de todas. Cada uma compra alguma coisa e cobra por isso.

Então, em cada estratégia, preste atenção em duas coisas: o que ela te dá, e quanto ela te custa. É essa troca que você vai usar para decidir no dia a dia.

## Zero shot
A frase-âncora é esta: zero shot é um pedido direto, sem nenhum exemplo.

Pense em chegar numa padaria que você frequenta há anos e dizer só: o de sempre. Funciona, porque o padeiro já sabe o que fazer. Você gastou duas palavras.

Com o modelo é parecido. Se você pede para ele classificar o sentimento de uma frase, como "estou muito feliz com o produto que comprei", ele costuma acertar. Muitos modelos já estão preparados para essa tarefa. Dar mais orientação gastaria tokens sem trazer muito ganho.

O que o zero shot resolve? Rapidez e economia. É simples de escrever e consome poucos tokens. Também ajuda quando você ainda não sabe direito o que quer, ou numa atividade mais criativa, em que não precisa de tanta precisão.

Onde ele quebra? Agora imagine dizer "o de sempre" numa padaria onde você nunca entrou. O padeiro vai improvisar. Com o modelo, a resposta pode vir vaga, pouco profunda ou num formato que não era o seu. Tudo depende da clareza do pedido.

E aqui mora uma armadilha. O zero shot é barato em cada chamada, mas, se o pedido ficou aberto demais, você gasta várias rodadas corrigindo o rumo. Foi o que vimos na aula passada. No fim, o barato pode sair caro.

Zero shot, então, é um pedido direto, sem nenhum exemplo. E quando o pedido sozinho não basta, o passo seguinte é mostrar o que você quer.

## Few shot
A frase-âncora é esta: few shot é mostrar exemplos para o modelo inferir o critério.

Imagine um funcionário novo que precisa responder clientes. Você pode explicar as regras por meia hora. Ou pode entregar três respostas boas e dizer: faça desse jeito. Ele olha, percebe o padrão e segue.

No prompt, isso vira pares de entrada e saída. Você escreve uma frase e o sentimento dela: positivo. Outra frase: negativo. Uma terceira, sem graça, em que o produto veio como descrito e nada além disso: neutro. Só depois vem a frase que você quer classificar de verdade.

Repare no caso do neutro. É aí que o exemplo ganha do comando. Você não definiu o que é neutro. Você mostrou.

Uma observação importante. O professor fala em treinar o modelo com esses exemplos, mas isso é só um jeito de dizer. Nenhum peso mudou. Os exemplos valem enquanto estão no prompt.

O que o few shot resolve? Dá mais controle sobre formato e estilo, reduz a alucinação e ajuda em tarefas ambíguas ou muito ligadas a um contexto.

Onde ele quebra? Em dois pontos. O primeiro é o custo: cada exemplo ocupa tokens de entrada. O professor diz que, quanto mais exemplos, melhor, e que daria para usar quarenta. Só que os quarenta entram na conta.

O segundo é a qualidade. O modelo copia o critério que você mostrou, inclusive o errado. Se todos os seus exemplos com crítica ao preço estão marcados como neutro, ele vai aprender que crítica ao preço é neutra. Exemplo ruim ensina padrão ruim. Por isso, escolher bons exemplos toma tempo.

Few shot, então, é mostrar exemplos para o modelo inferir o critério. Até aqui, controlamos o que sai. A próxima estratégia controla o caminho até a saída.

## Chain of thought
A frase-âncora é esta: chain of thought é pedir o raciocínio passo a passo antes da resposta. A sigla é C O T.

Pense num aluno que entrega só o resultado de uma conta. Se está errado, você não sabe por quê. Agora peça para ele mostrar a conta no quadro. Você aponta a linha do erro, ele corrige dali em diante.

O professor usa exatamente assim. Quando pega um modelo alucinando, pede para ele contar o passo a passo. Vê onde o raciocínio desviou. Manda corrigir aquele trecho. Pede para mostrar de novo. E só quando o caminho está certo é que libera a execução.

Agora o porquê, que é a parte mais importante. Um Transformer não compreende lógica. Ele compreende sequência de texto. Seguir um encadeamento lógico é uma das coisas mais difíceis para ele. O pedido de passo a passo o direciona a se sair melhor nesse tipo de tarefa, e a maior parte das lógicas é encadeada.

Por isso o chain of thought aparece tanto em cálculo, em raciocínio de várias etapas e em lógica de programação. O exemplo da aula é quase infantil: João tem três maçãs e ganha mais duas. O modelo escreve que começou com três, somou duas e chegou a cinco. Simples, mas mostra a forma da resposta.

O que ele resolve? Mais precisão em tarefas complexas, mais transparência e uma depuração muito mais fácil.

Onde ele quebra? Primeiro, a resposta fica longa e cheia de sujeira. Muitas vezes você precisa de outro prompt, mais simples, só para organizar o resultado. Segundo, em uso por API, a conta sobe bastante.

Terceiro, e esse é o mais traiçoeiro: o passo a passo não é prova de nada. O professor conta que o ChatGPT, numa certa atualização, inventava coisas no meio da cadeia de raciocínio. Isso melhorou. Mas a transparência depende do modelo, e o que ele escreve também precisa ser conferido.

Chain of thought, então, é pedir o raciocínio passo a passo antes da resposta. Ele controla como o modelo pensa. A próxima estratégia controla quem o modelo finge ser.

## Role based
A frase-âncora é esta: role based é dar um papel ao modelo para moldar tom, vocabulário e profundidade.

Pense num ator recebendo um personagem. Antes de falar qualquer coisa, ele já sabe como aquela pessoa fala e do que ela entende. O texto muda sem que ninguém precise ditar cada palavra.

No prompt, é dizer: você é um advogado trabalhista experiente, explique de forma clara os direitos de um trabalhador segundo a CLT. Só essa primeira parte já muda o registro da resposta. Dá para usar médico, cientista de dados, professor. O professor conta até que dá para pedir ao modelo que leia o que há na web sobre um jornalista e passe a responder no tom dele.

O uso profissional é o mais interessante. Pense no primeiro contato de um cliente com um escritório de advocacia. Um modelo já preparado para responder como advogado se situa muito mais rápido. E a persona não precisa ser uma profissão. Pode ser alguém que segue as diretrizes da sua empresa.

O que ele resolve? Precisão e coerência em domínios específicos, e mais facilidade em contexto profissional.

Onde ele quebra? O modelo fica nichado no papel. Se chega um pedido mais amplo, ele não abre, a não ser que você tenha dado esse direcionamento. É o especialista que só enxerga a própria área.

Além disso, a persona não sai certa de primeira. Exige muitos testes, e esses testes gastam bastante.

Role based, então, é dar um papel ao modelo para moldar tom, vocabulário e profundidade. Mas repare: o papel não diz qual o tamanho nem a organização da resposta. Para isso, existe a última estratégia.

## Instruction tuning
A frase-âncora é esta: instruction tuning é dizer com precisão o quê, como e em que tamanho.

Pense em encomendar um móvel. Você pode pedir "uma estante bonita". Ou pode entregar as medidas, o material e o acabamento. No segundo caso, sobra pouco para o marceneiro adivinhar.

O exemplo da aula: explique o conceito de inflação em linguagem simples, com até três parágrafos curtos. Em uma frase, você definiu a informação, o estilo e o tamanho. E esse é o caso simples. O professor conta que tem prompts assim com três a quatro páginas.

Cuidado com o nome. Tuning lembra fine tuning, mas aqui, feito pelo prompt, nada muda nos pesos. A lógica lembra o treinamento supervisionado, porém o que existe são só comandos bem escritos.

O que ele resolve? A resposta fica direta e fácil de padronizar. Se o seu relatório muda de tamanho e de organização a cada semana, é esse o ajuste que ataca o problema.

Onde ele quebra? Exige precisão de comando, é coisa para quem prompta bem. E depende do modelo. Ele rende mais nos modelos já afinados para esse tipo de entrada. O professor cita o GPT e o DeepSeek como bons, e diz não ter certeza sobre o Manus. Por isso, vale testar antes de confiar.

Instruction tuning, então, é dizer com precisão o quê, como e em que tamanho.

## Como não confundir
Vamos separar o que costuma se misturar.

Zero shot e few shot. A diferença é uma só: no primeiro você descreve, no segundo você demonstra. O few shot custa mais por chamada, mas pode sair mais barato no total, se evitar retrabalho.

Few shot e instruction tuning. Os dois dão controle sobre o formato. Um mostra pelo exemplo, e o modelo deduz o critério. O outro manda pelo comando, e você precisa saber escrever o critério.

Role based e instruction tuning. O papel diz quem responde, e isso mexe no tom e no vocabulário. A instrução diz o que entregar, e isso mexe na estrutura e no tamanho. Dá para combinar os dois, mas um não substitui o outro.

Chain of thought e as outras. As outras olham para o resultado final. O chain of thought olha para o processo intermediário. Por isso ele é a ferramenta de quem está depurando.

E por fim, prompt e fine tuning. Todas essas cinco estratégias vivem no prompt. Nenhuma altera o modelo. Quando você encerra a chamada, o efeito acaba. O fine tuning, que vimos na aula passada como o caminho mais caro, é o que mexe de verdade no treinamento.

## Revisão
Vamos às frases-âncora.

Zero shot é um pedido direto, sem nenhum exemplo.

Few shot é mostrar exemplos para o modelo inferir o critério.

Chain of thought é pedir o raciocínio passo a passo antes da resposta.

Role based é dar um papel ao modelo para moldar tom, vocabulário e profundidade.

Instruction tuning é dizer com precisão o quê, como e em que tamanho.

Agora, algumas perguntas.

Primeira pergunta: por que o zero shot funciona tão bem para classificar sentimento, e por que isso não garante o mesmo num formato próprio da sua empresa?

[pausa 5]

Resposta: porque classificar sentimento é um padrão para o qual muitos modelos já estão preparados. Num formato próprio, esse preparo não existe, e a saída tende a fugir do esperado.

Segunda pergunta: seus exemplos de few shot estão enviesados. O que acontece com a saída?

[pausa 5]

Resposta: o modelo segue o viés. Ele infere o critério a partir dos pares, então o rótulo errado vira o padrão.

Terceira pergunta: por que pedir o passo a passo ajuda o modelo em tarefas lógicas?

[pausa 5]

Resposta: porque ele compreende sequência de texto, e não lógica. O passo a passo o direciona a seguir o encadeamento. Mesmo assim, o que ele escreve precisa ser conferido.

Quarta pergunta: sua persona de advogado vai bem no tema dela, mas trava em pedidos mais amplos. Qual é o ajuste?

[pausa 5]

Resposta: dar direcionamento para os casos mais amplos e testar até acertar, porque o modelo fica nichado no papel.

Quinta pergunta: o mesmo prompt detalhado rendeu bem num modelo e mal em outro. Por quê?

[pausa 5]

Resposta: o prompt não muda os pesos. Ele rende mais nos modelos já afinados para esse estilo de entrada. Por isso, vale testar em cada um.

Na próxima aula, vamos para a outra forma de dar ao modelo o que ele não tem: a arquitetura RAG.
