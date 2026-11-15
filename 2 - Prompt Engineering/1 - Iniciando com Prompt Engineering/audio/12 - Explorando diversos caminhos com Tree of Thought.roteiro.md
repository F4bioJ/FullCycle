# Explorando diversos caminhos com Tree of Thought

## Abertura

Na aula passada, vimos o self-consistency: o modelo raciocina várias vezes sobre a mesma pergunta e fica com a resposta que mais se repete. Vimos também o perigo da técnica: se a maioria erra, a votação consolida o erro.

Hoje o assunto é o Tree of Thought, a árvore de pensamentos. À primeira vista parece a mesma coisa, porque de novo o modelo gera vários caminhos. Mas a lógica é outra. No self-consistency, os caminhos são tentativas da mesma conta. No Tree of Thought, os caminhos são alternativas diferentes, e o modelo precisa escolher entre elas por um critério.

Vamos ver a ideia, o papel do critério, as limitações e dois experimentos do professor: um de debug e um de arquitetura.

## A árvore

A frase-âncora é: Tree of Thought é abrir alternativas em ramos, aprofundar cada uma e escolher a melhor.

Pense em alguém decidindo onde passar as férias. Primeiro, lista três destinos: praia, serra e uma cidade grande. Esses são os ramos. Depois, para cada destino, pensa nos detalhes: quanto custa, quanto tempo de viagem, o que dá para fazer com chuva. Esses detalhes são os sub-ramos. No fim, compara os três e escolhe.

É isso que o professor chama de camadas e subcamadas. O modelo gera um raciocínio, depois um raciocínio sobre esse raciocínio, e assim por diante. Cada ramo é uma hipótese. Os sub-ramos mostram como ela se sustenta e como dá para testá-la.

O que isso resolve? Problemas abertos, em que não existe uma conta com resposta única. Diagnosticar uma lentidão, escolher uma arquitetura, montar um plano. Nesses casos, a qualidade vem de comparar opções que concorrem entre si.

Repetindo: Tree of Thought é abrir alternativas em ramos, aprofundar cada uma e escolher a melhor.

## O critério

A frase-âncora deste bloco é: sem critério, a árvore é só verbosidade organizada.

Voltando às férias. Se você não sabe se o que importa é o preço, o descanso ou a agitação, pode listar destinos o dia inteiro e não decidir nada. A lista fica bonita, mas não leva a lugar nenhum.

Com o modelo é igual. O professor insiste que esse é o ponto do Tree of Thought: normalmente você coloca no prompt o que torna uma opção melhor. Pode ser a mais plausível, a mais barata, a que escala melhor, a de menor risco ou a mais simples de operar.

E aqui está a diferença prática para o self-consistency. Lá, a escolha é pela consistência: fica a resposta que mais aparece. Aqui, a escolha é pelo critério que você declarou. Três destinos diferentes nunca formam uma maioria. Alguém precisa dizer o que pesa mais.

De novo: sem critério, a árvore é só verbosidade organizada.

## Quando usar e onde quebra

A frase-âncora aqui é: mais ramos não garantem ramos diferentes.

O professor usa a técnica para brainstorming, para pedir várias soluções, para planejar considerando alternativas, para decidir entre estratégias de estudo, para pesar prós e contras e levantar hipóteses antes de uma decisão final. Ele diz que usa muito para escolher arquitetura e para descobrir opções que nem sabia que existiam.

Agora, as limitações. A resposta fica longa e complexa, e gasta mais tokens. Precisa de instruções bem claras. E a mais traiçoeira: é difícil garantir que os ramos sejam realmente distintos.

Imagine pedir três causas para uma página lenta e receber: query lenta, falta de índice e query mal escrita. Parecem três ramos, mas é um ramo só, o banco de dados, dito de três jeitos. A resposta fica repetitiva, e você paga por três quando recebeu um. Pedir dez causas em vez de três não resolve isso sozinho. O que ajuda é um prompt mais claro sobre o que você quer comparar.

Então: mais ramos não garantem ramos diferentes.

## O experimento de debug

A frase-âncora deste bloco é: a escolha da árvore é uma prioridade, não um diagnóstico.

O primeiro prompt coloca o modelo no papel de engenheiro de software sênior. Um endpoint, o barra user, está levando cinco segundos para responder. O prompt pede pelo menos três causas possíveis. Para cada uma, um raciocínio passo a passo: como chegou nela e como verificar. Depois, comparar os ramos, escolher a hipótese mais plausível e recomendar a próxima ação.

Um detalhe: o professor escreveu "pense como um Tree of Thought" no prompt, mas avisa que não precisa. Ele pôs a frase só para deixar registrado. Quem monta a árvore é a estrutura do pedido: as causas, o raciocínio de cada uma, a comparação e a escolha.

No GPT-três-ponto-cinco Turbo, vieram três causas. Banco de dados, com a sugestão de analisar o plano de execução das queries e criar índices. Rede, com ping, traceroute e a ideia de uma CDN, uma rede de distribuição de conteúdo. E código, com uma possível ineficiência no cache. Na comparação, o modelo escolheu o banco, porque é uma causa comum de lentidão, e recomendou começar por ele.

Repare no que o modelo fez. Ele não mediu nada. Ele priorizou pela plausibilidade. É como o mecânico que, pelo barulho, diz: vou olhar primeiro a correia. Ótimo ponto de partida. Mas ainda é preciso abrir o capô e conferir.

Então: a escolha da árvore é uma prioridade, não um diagnóstico.

## O experimento de arquitetura

A frase-âncora aqui é: a técnica mostra por que uma opção venceu, mas a decisão depende do contexto que você deu.

O segundo prompt fala de um serviço que processa milhões de imagens por dia. Pede pelo menos três arquiteturas. Para cada uma, raciocínio sobre escalabilidade, custo e complexidade. Depois, comparar, escolher o melhor equilíbrio e terminar com uma resposta final.

O GPT-quatro-o trouxe três opções. Serverless, com funções sob demanda, armazenamento de objetos e filas: escala sozinho, cobra por execução, mas tem limites de cota e de duração, e o custo pode subir muito nos picos. Microsserviços com containers. E um monólito escalável na nuvem. Comparou as três pelos mesmos critérios e escolheu o serverless.

O professor concordou, mas fez uma ressalva: depende. Falta muita coisa no prompt para uma decisão de verdade. O valor não está em a resposta ser certa. Está em ver, com clareza, por que uma opção ganhou das outras. Se o seu contexto for diferente, você enxerga exatamente qual peso mudaria a decisão.

Existe ainda um terceiro prompt, igual ao segundo, mas pedindo só a resposta final, sem nenhum outro texto. O professor não chegou a rodar esse. A ideia é escolher a saída pelo uso. Num brainstorming ou numa depuração, você quer ver a comparação inteira. Numa integração que só precisa gravar a decisão, a saída enxuta basta.

De novo: a técnica mostra por que uma opção venceu, mas a decisão depende do contexto que você deu.

## O custo

A frase-âncora é: o custo está no que você pede para o modelo produzir, não no tamanho da pergunta.

O prompt de arquitetura tinha só noventa e quatro tokens de entrada. E a resposta foi enorme. Dava para pedir dez arquiteturas em vez de três e receber dez comparações.

É como pedir a um amigo, numa frase, que pesquise três orçamentos e compare. A frase é curta. O trabalho, não. Por isso o Tree of Thought vale quando explorar e decidir compensa o gasto e a espera. Numa pergunta simples, é desperdício.

Repetindo: o custo está no que você pede para o modelo produzir, não no tamanho da pergunta.

## Comparando com o que já vimos

Três técnicas parecidas, três ideias diferentes.

O Chain of Thought pede um único raciocínio em etapas. Você ganha um caminho que pode auditar, mas é um caminho só.

O self-consistency pede o mesmo raciocínio várias vezes e fica com a resposta mais frequente. Serve quando existe uma resposta certa, como contar as queries do problema N mais um. Ele mede estabilidade.

O Tree of Thought pede alternativas diferentes, aprofunda cada uma e escolhe por um critério. Serve quando não existe uma resposta única, como escolher uma arquitetura. Ele organiza uma decisão.

Uma forma de lembrar: no self-consistency, os caminhos deveriam chegar ao mesmo lugar. No Tree of Thought, os caminhos deveriam chegar a lugares diferentes. Se os ramos da árvore convergem, isso não é sinal de acerto. É sinal de que a árvore não abriu de verdade.

## Revisão

As âncoras. Tree of Thought é abrir alternativas em ramos, aprofundar cada uma e escolher a melhor. Sem critério, a árvore é só verbosidade organizada. Mais ramos não garantem ramos diferentes. A escolha da árvore é uma prioridade, não um diagnóstico. A técnica mostra por que uma opção venceu, mas a decisão depende do contexto que você deu. E o custo está no que você pede para o modelo produzir, não no tamanho da pergunta.

Quatro perguntas.

Primeira pergunta: você quer escolher entre três abordagens de cache. Self-consistency ou Tree of Thought? E por quê?

[pausa 5]

Resposta: Tree of Thought. As abordagens são alternativas diferentes, e a escolha precisa de um critério. Votação não faz sentido entre opções que não concorrem pela mesma resposta.

Segunda pergunta: um prompt pede três opções e uma comparação, mas não diz o que torna uma opção melhor. O que tende a acontecer?

[pausa 5]

Resposta: a comparação fica sem base para decidir, e a árvore vira só verbosidade organizada.

Terceira pergunta: no experimento de debug, o modelo escolheu o banco de dados. Já dá para dizer que o banco é a causa?

[pausa 5]

Resposta: não. Ele escolheu pela plausibilidade, sem medir nada. É a primeira hipótese a verificar, com os testes que o próprio ramo sugeriu.

Quarta pergunta: se você tirar do prompt a frase "pense como um Tree of Thought", o que muda?

[pausa 5]

Resposta: quase nada. Quem monta a árvore é a estrutura do pedido: várias alternativas, um raciocínio para cada, a comparação e a escolha.
