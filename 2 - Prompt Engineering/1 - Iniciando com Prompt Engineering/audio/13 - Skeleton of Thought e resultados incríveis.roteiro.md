# Skeleton of Thought e resultados incríveis

## Abertura

Na aula passada, a gente viu o Tree of Thought, a árvore de pensamentos. Ali, o modelo abria vários caminhos diferentes, comparava esses caminhos por um critério e escolhia o melhor.

Hoje a técnica é outra. O nome é Skeleton of Thought, o esqueleto de pensamento. E a pergunta muda. Não é mais "qual caminho eu escolho?". Agora é "como eu organizo a resposta antes de escrever?".

A frase para guardar desta aula é simples: primeiro o esqueleto, depois a expansão.

Vamos ver o que é a técnica, quando usar, onde ela quebra, por que vale a pena o modelo mostrar o esqueleto, os três exemplos do professor e como juntar tudo isso com as técnicas anteriores.

## O que é o esqueleto de pensamento

Primeiro o esqueleto, depois a expansão.

A ideia é dividir a resposta em duas fases. Na primeira, o modelo escreve só os tópicos. Uma lista curta, sem explicação. Na segunda, ele pega cada tópico e desenvolve.

Pense em quem vai escrever um relatório no trabalho. Uma pessoa senta e começa a escrever direto, do primeiro parágrafo ao último. Outra pessoa primeiro anota num papel os títulos das seções. Introdução, problema, proposta, custos, próximos passos. Só depois ela preenche cada seção. A segunda pessoa quase sempre entrega um texto mais fácil de ler. É isso que o Skeleton of Thought pede ao modelo.

O professor descreve a técnica como um template. O esqueleto é a forma, e a expansão enche a forma de conteúdo.

E aqui está a diferença para a aula passada. O Tree of Thought serve para explorar alternativas e decidir. O Skeleton of Thought não decide nada. Ele organiza. O ganho dele aparece quando a qualidade da resposta depende mais de organização do que de criatividade solta.

Primeiro o esqueleto, depois a expansão.

## Quando usar

O professor lista vários usos, e todos têm a mesma cara: são coisas que ficam melhores quando você planeja antes de escrever.

Estruturar uma redação antes de escrevê-la. Criar uma ADR, que é o registro de decisão de arquitetura, Architecture Decision Record. Planejar os endpoints de uma API antes de sair codificando. Organizar um artigo em seções e depois detalhar cada uma. Montar uma checklist de requisitos antes de analisar tudo.

O professor diz que adora a técnica para documentação. E faz sentido. Documentação raramente falha por falta de conteúdo. Ela falha por bagunça. A informação está lá, mas espalhada, repetida, fora de ordem. O esqueleto resolve exatamente isso, antes da primeira linha de texto.

## Onde a técnica quebra

A frase-âncora deste bloco é: esqueleto ruim, expansão ruim.

Cada tópico do esqueleto vira um pedaço da resposta. Então, se o esqueleto nasce torto, a resposta inteira herda o defeito. Um tópico que falta vira uma lacuna. Um tópico mal recortado vira repetição.

Segundo problema: o modelo pode perder o contexto entre as etapas e misturar uma com a outra. Isso piora quando dois tópicos têm nomes parecidos. Imagine um esqueleto com uma seção chamada "configuração do ambiente" e outra chamada "setup inicial". Para o modelo, as duas soam iguais. Na expansão, ele mistura os passos e repete conteúdo nas duas. A causa não está na expansão. Está no nome ambíguo que o esqueleto deixou passar.

Terceiro: gasta mais tokens. Afinal, o modelo escreve a estrutura e depois o conteúdo.

Quarto: exige controle para o modelo não pular direto para os detalhes. Às vezes você pede só os tópicos, e ele já sai escrevendo código, exemplos, parágrafos inteiros. Aí o esqueleto deixa de ser esqueleto. O remédio é ser explícito no prompt: nesta fase, gere só os tópicos e ainda não desenvolva nada.

E uma observação do material do professor: a técnica não inventa o contexto que falta e não substitui o seu julgamento técnico. Se o plano estiver errado, a expansão só deixa o erro maior e mais bem formatado.

Esqueleto ruim, expansão ruim.

## Mostrar ou não mostrar o esqueleto

A frase-âncora aqui é: o que o modelo já escreveu ajuda a escrever o que vem depois.

A saída padrão vem em duas fases. Primeiro aparece o esqueleto, depois aparece o resultado. Mas isso não é obrigatório. Você pode pedir no prompt só o resultado final.

Então por que mostrar? Lembre como o modelo funciona. Ele gera um token de cada vez, olhando para tudo o que já está escrito. Quando o esqueleto aparece na saída, esses tokens ficam ali, visíveis. Na hora de expandir o terceiro tópico, o modelo ainda enxerga a lista inteira. Ele sabe o que já cobriu e o que falta. Por isso a resposta tende a ser melhor.

Se o esqueleto não aparece, o modelo perde esses tokens de apoio. E aí ele pode não chegar à melhor resposta.

É como montar um móvel com o manual aberto em cima da mesa, em vez de ter lido o manual uma vez e guardado na gaveta.

Agora, a parte honesta da aula. O professor admite que, na maioria das vezes, ele não pede o esqueleto antes. E mesmo assim tem resultados muito bons. Então mostrar o esqueleto é uma ajuda, não uma regra. Você troca um pouco mais de tokens por um pouco mais de coerência.

O que o modelo já escreveu ajuda a escrever o que vem depois.

## Os três exemplos

A frase-âncora deste bloco é: o esqueleto é o plano, e a expansão é a execução.

Os três prompts do professor seguem o mesmo molde. Um papel. Um passo um, que gera só o esqueleto. E um passo dois, que expande. E vão ficando mais difíceis.

O primeiro é sobre banco de dados. O papel é de engenheiro sênior de back-end. Um desenvolvedor júnior pergunta como otimizar uma consulta SQL. O passo um pede um esqueleto de três a cinco tópicos. O passo dois pede para explicar cada tópico com exemplos.

O esqueleto que saiu tinha cinco tópicos. Indexação. Evitar o "select asterisco", aquele que traz todas as colunas. Otimizar os joins. Reestruturar as consultas. E analisar o plano de execução. Depois, cada um ganhou explicação e exemplo, na mesma ordem. Sem o esqueleto, essas cinco ideias costumam vir misturadas num bloco só de texto. Com ele, a resposta vira quase uma checklist de revisão.

O segundo é uma ADR. O papel é de arquiteto de software, e a decisão é escolher PostgreSQL em vez de MongoDB. O passo um pede só os títulos das seções, sem nenhuma explicação. Contexto, decisão, alternativas, consequências e referências. O passo dois pede para preencher cada seção e entregar uma ADR profissional.

O resultado veio bem organizado. A decisão foi pelo PostgreSQL, com o argumento de um ecossistema mais maduro. As alternativas foram MongoDB, MySQL e SQLite. Teve consequências positivas e negativas, e referências.

Mas preste atenção ao comentário do professor. Ele diz que não importa se ele concorda ou não com a decisão, porque o prompt deu pouco contexto. O que ele quer mostrar é a estrutura. Guarde isso: a forma ficou profissional, mas a forma não garante que a decisão esteja certa.

O terceiro é o mais difícil. O papel é de desenvolvedor sênior em Go, e a tarefa é uma API REST para gerenciar produtos. O passo um pede um esqueleto de seis a oito tópicos. E aqui está o detalhe importante. O prompt não deixa o modelo escolher os tópicos à vontade. Ele diz o que o esqueleto precisa cobrir. O modelo de dados, com as structs. O framework HTTP. As rotas. Os handlers. A validação. A camada de banco. O tratamento de erros. A estrutura do projeto. E termina com uma ordem clara: ainda não expanda.

O passo dois pede para expandir cada tópico com código e boas práticas de Go. Structs, handlers, rotas, o roteador go-chi, o pacote padrão net/http, tratamento de erros do jeito idiomático e organização em pacotes. A API precisa do CRUD, ou seja, criar, ler, atualizar e apagar, para produtos com identificador, nome, descrição, preço e estoque.

O esqueleto saiu com oito etapas, exatamente essas. E a expansão trouxe a struct do produto, o go-chi, as rotas do CRUD, os handlers, a validação com a biblioteca do go-playground, o acesso ao PostgreSQL, o tratamento de erros e a organização das pastas.

Compare isso com um pedido seco, "crie um CRUD de produtos". Nesse caso, o modelo decide sozinho o que entra e o que fica de fora. No prompt da aula, você decide o plano, e o modelo executa. A geração de código vira planejamento guiado.

O professor rodou os três prompts de uma vez, no GPT-4o.

O esqueleto é o plano, e a expansão é a execução.

## Juntando com as técnicas anteriores

A frase-âncora é: explorar com a árvore, organizar com o esqueleto.

O professor faz uma provocação. Isso não lembra o jeito de pedir para a IA desenvolver um software? Dar contexto e guiar passo a passo?

A sugestão dele é encadear as técnicas. Primeiro, você explora o problema com Chain of Thought e com Tree of Thought. Pensa por etapas, abre alternativas, compara. Depois, com o Skeleton of Thought, transforma o que descobriu num esqueleto de passos. Aí você discute esse plano, ajusta o que não gostou, e só então entrega o plano para a IA implementar.

Repare na ordem. Quem explora e decide é a árvore. Quem organiza a entrega é o esqueleto. Se você pula a exploração, o esqueleto organiza uma ideia que ninguém comparou. Se você pula o esqueleto, a implementação começa sem plano.

E tem mais um detalhe. Os prompts da aula são curtos. Não são prompts enormes nem malucos. São intencionais. O resultado vem da estrutura que você pede, não do tamanho do que você escreve. O custo extra está na saída, que traz o esqueleto e a expansão.

Explorar com a árvore, organizar com o esqueleto.

## Comparando com as técnicas vizinhas

Vamos colocar lado a lado as técnicas de raciocínio que vimos até aqui, porque elas se confundem fácil.

O Chain of Thought é uma linha só. O modelo pensa passo a passo até a resposta.

O self-consistency repete essa linha várias vezes e fica com a resposta que mais aparece. É uma votação entre repetições do mesmo raciocínio.

O Tree of Thought abre caminhos diferentes e escolhe um deles por um critério que você declara. Sem critério, vira verbosidade organizada.

O Skeleton of Thought não vota nem escolhe. Ele organiza. Primeiro a estrutura, depois o conteúdo de cada parte.

Um jeito de lembrar é pensar no verbo de cada uma. Chain of Thought raciocina. Self-consistency confere. Tree of Thought decide. Skeleton of Thought organiza.

E as limitações também se parecem, mas não são iguais. Na árvore, o risco é ter ramos repetidos, que não são alternativas de verdade. No esqueleto, o risco é ter tópicos ambíguos, que se misturam na expansão. Nos dois casos, as duas técnicas gastam mais tokens.

## Revisão

Vamos repetir as frases-âncora da aula.

Primeiro o esqueleto, depois a expansão.

Esqueleto ruim, expansão ruim.

O que o modelo já escreveu ajuda a escrever o que vem depois.

O esqueleto é o plano, e a expansão é a execução.

Explorar com a árvore, organizar com o esqueleto.

Agora, quatro perguntas.

Primeira pergunta: um esqueleto tem as seções "configuração do ambiente" e "setup inicial", e a expansão repete conteúdo nas duas. Qual é a causa mais provável?

[pausa 5]

Resposta: nomes de seção ambíguos. O modelo perde o contexto entre as etapas e mistura uma seção com a outra. Como cada tópico vira um pedaço da resposta, o defeito do esqueleto passa para o texto.

Segunda pergunta: por que mostrar o esqueleto na saída tende a melhorar a expansão?

[pausa 5]

Resposta: porque o modelo gera cada token olhando para o que já escreveu. Com o esqueleto na saída, ele enxerga a lista inteira na hora de expandir cada tópico. Mesmo assim, é opcional: o professor costuma não mostrar e tem bons resultados.

Terceira pergunta: na primeira fase, o modelo já despejou código, em vez de listar só os tópicos. Como o prompt da aula evita isso?

[pausa 5]

Resposta: deixando explícito que a primeira fase gera só o esqueleto e ainda não expande. Esse é o controle para o modelo não pular direto para os detalhes.

Quarta pergunta: a ADR da aula escolheu PostgreSQL e saiu muito bem estruturada. Isso quer dizer que a decisão é boa?

[pausa 5]

Resposta: não necessariamente. O prompt deu pouco contexto, e o próprio professor diz que não importa se ele concorda com a decisão. A técnica garante a organização, não o conteúdo da decisão.

Até a próxima aula.
