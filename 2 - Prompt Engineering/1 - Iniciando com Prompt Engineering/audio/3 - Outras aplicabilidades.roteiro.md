# Outras aplicabilidades

## Abertura
Na aula passada, vimos o prompt como ferramenta de quem programa: pedir código, revisar, documentar, pilotar um agente.

Nesta aula, o prompt muda de lugar. Ele sai da mão do desenvolvedor e entra no produto. E depois vai parar na mão do usuário final, que somos nós mesmos abrindo um chat qualquer.

A pergunta que costura tudo é simples: o que muda quando o prompt muda de lugar?

A resposta tem três partes. O peso do tamanho muda. O prompt passa a mandar no comportamento do sistema. E a mesma ferramenta rende coisas muito diferentes, dependendo de como se pede.

## Do oito ao oitenta
A frase-âncora aqui é: o bom tamanho de um prompt depende de onde ele mora.

Pense numa mala. Para uma mudança de casa, você leva tudo o que conseguir, porque é uma viagem só. Para ir a pé ao trabalho todo dia, cada quilo extra pesa, porque você carrega aquilo todos os dias.

Programar com IA é a mudança de casa. Você escreve um prompt gigante, joga uma pilha de documentos no contexto, e está tudo bem. O que importa é a IA ajudar você a resolver o problema.

Software que usa IA é a caminhada diária. O prompt viaja a cada uso. Então, quanto menor, melhor para o custo da empresa e para o tempo de espera, que é a latência.

Isso resolve um erro comum: achar que existe um único jeito certo de escrever prompt.

E onde essa ideia quebra? Na generalização. "Prompt grande é bom" é falso. "Prompt pequeno é bom" também é falso. As duas frases só valem com o lugar junto.

Repetindo: o bom tamanho de um prompt depende de onde ele mora. E, quando ele mora dentro do produto, passa a ter outro papel, que vem agora.

## Comportamento e escopo
A frase-âncora: dentro do produto, o prompt diz como o sistema age e até onde ele pode ir.

Imagine um funcionário novo no balcão de um banco. Alguém precisa dizer a ele como tratar o cliente e o que ele pode decidir sozinho. Sem isso, ele improvisa.

Com um agente é igual. E isso pesa mais quando a tarefa é crítica. O exemplo da aula é calcular a taxa de juros de um empréstimo, olhando as compras anteriores do cliente e o quanto ele é bom pagador. Uma decisão assim afeta diretamente o sistema e o cliente.

O ganho é ter um contorno claro para o que o sistema faz. O limite é que escopo só diz até onde ele pode ir. Ele não diz com que frequência o sistema deve tomar a iniciativa. Essa é a próxima regulagem.

Repetindo: o prompt diz como o sistema age e até onde ele pode ir.

## Nível de proatividade
A frase-âncora: proatividade é quanta iniciativa a IA toma, e o prompt regula isso para mais ou para menos.

Pense num colega a quem você pergunta onde está a chave da sala. Um responde onde está. Outro já pega a chave, abre a sala e arruma as cadeiras. O segundo não fez nada proibido. Só fez mais do que você pediu.

Quem programa com IA conhece a cena: você faz uma pergunta, só para tirar uma dúvida, e ela já sai escrevendo código.

Ajustar isso resolve os dois extremos. Uma IA acanhada demais obriga você a pedir tudo passo a passo. Uma IA afoita demais faz o que ninguém pediu.

Repetindo: proatividade é quanta iniciativa a IA toma. Agora, para ela tomar boas decisões, muitas vezes precisa de informação de fora.

## Especialização e dados externos
A frase-âncora: dado externo, no fim do dia, também vira prompt.

O prompt ajuda a obter respostas bem especializadas, e muitas vezes o sistema consulta bancos de dados e outras fontes externas.

Pense num consultor que recebe uma pasta com os dados da sua empresa antes da reunião. O que está na pasta passa a fazer parte da conversa. Aqui é parecido: o que veio de fora acaba compondo o prompt.

Isso resolve a resposta genérica, porque a IA passa a falar com base em dados reais. Mas abre uma porta, que é justamente o próximo assunto.

## Segurança e privacidade
A frase-âncora: o prompt pode ser a nova forma de explorar uma aplicação.

Num sistema tradicional, um ataque costuma procurar uma falha no código. Num sistema com IA, a entrada é texto. Alguém pode tentar conversar até obter o que não deveria.

Imagine um assistente interno com acesso a dados da empresa. Uma pessoa pede, por meio de um prompt, informações de faturamento que ela não teria permissão para ver. Se isso funciona, houve um vazamento de dados privados, e sem nenhuma invasão clássica.

Por isso, a engenharia de prompt também ajuda a tratar segurança e privacidade. Não é só um assunto de qualidade da resposta.

Repetindo: o prompt pode ser a nova forma de explorar uma aplicação.

## Modelos pequenos
A frase-âncora: quanto menor o modelo, mais frágil ele fica diante do prompt.

Às vezes a gente quer um modelo pequeno, que faça exatamente uma tarefa. O problema é que ele tem tão poucos parâmetros que mudar uma palavra pode quebrar o agente.

Pense numa fechadura antiga, que abre só com um jeito certo de girar a chave. Um pouco diferente, e ela já trava.

O modelo pequeno resolve uma tarefa bem específica. Mas ele quebra justamente onde a gente menos espera, numa mudança que parece inofensiva.

Repetindo: quanto menor o modelo, mais frágil ele fica. E essa sensibilidade à palavra leva à ideia mais forte da aula.

## A nova linguagem de programação
A frase-âncora: o prompt define comportamento, mas a IA decide por probabilidade.

O professor diz que prompt é a nova linguagem de programação. Antes ele programava em Go. Agora, programa em português, que provavelmente vai gerar código em Go.

Mas a ideia vai além de gerar código. Os nossos "ifs e elses" de sempre, aquelas decisões do tipo "se isso acontece, faça aquilo", passam em parte a ser decisões da IA.

Compare uma catraca com um porteiro. A catraca é determinística: com o cartão certo, ela sempre abre. O porteiro segue orientações, mas julga cada caso, e a decisão dele pode variar. Código é catraca. IA é porteiro.

E o que dá o limite ao porteiro são as orientações que ele recebe. No agente, é o prompt. É ele que coloca a coleira.

Atenção a dois exageros. O primeiro é achar que o código perdeu a importância. Ele continua importante. O segundo é achar que um prompt bem escrito transforma o porteiro em catraca. Não transforma.

Repetindo: o prompt define comportamento, mas a IA decide por probabilidade.

## O usuário final
A frase-âncora: a mesma plataforma entrega coisas muito diferentes, conforme o pedido.

Agora saímos do mundo de quem constrói. Todo mundo também usa ChatGPT, Gemini ou Claude. E essas plataformas já têm modo agente, pesquisa aprofundada e conectores.

Com um conector do HubSpot, por exemplo, você pergunta quanto vendeu, e o ChatGPT vai ao CRM, o sistema de gestão de clientes, e busca a resposta. Elas também mexem na agenda, buscam na internet, leem planilhas e geram apresentações. Com tools e MCPs, que ligam a IA a sistemas externos, dá para fazer tarefas que levariam dias ou semanas.

Os modelos entendem a nossa intenção cada vez melhor, mesmo sem um bom prompt. Isso é verdade, e é fácil concluir demais a partir daí. A aula diz que o jogo ainda muda muito para quem sabe estruturar o pedido. Um relatório, uma documentação ou a análise de um code base saem bem diferentes, conforme a técnica usada.

Por isso, o conselho é usar cada tipo de prompt para cada situação e para cada escopo. O objetivo do curso é justamente esse: fazer de você alguém mais intencional, seja no chat, seja programando, seja construindo aplicações.

Os tipos de prompt ficam para as próximas aulas.

## Comparando vizinhos
Quatro pares se confundem fácil nesta aula.

Primeiro, escopo e proatividade. Escopo é o que o sistema pode fazer. Proatividade é quando ele faz sem ser chamado. Um agente pode ficar dentro do que tem permissão de fazer e, mesmo assim, ser afoito demais.

Segundo, fragilidade e exploit. Na fragilidade, ninguém está atacando: uma mudança pequena no prompt quebra um modelo pequeno. No exploit, alguém usa o prompt de propósito para tirar da aplicação o que não deveria.

Terceiro, programar com IA e construir com IA. Na aula anterior, o prompt ajudava quem desenvolve, e podia ser enorme. Aqui, ele faz parte do produto, e o tamanho vira custo e latência.

Quarto, gerar código e decidir em produção. "Programar em português" pode significar pedir código, que depois roda de forma determinística. Mas também pode significar deixar a própria IA decidir com o sistema em uso, e aí a decisão é probabilística.

## Revisão
As frases-âncora, em sequência.

O bom tamanho de um prompt depende de onde ele mora.

Dentro do produto, o prompt diz como o sistema age e até onde ele pode ir.

Proatividade é quanta iniciativa a IA toma.

Dado externo, no fim do dia, também vira prompt.

O prompt pode ser a nova forma de explorar uma aplicação.

Quanto menor o modelo, mais frágil ele fica diante do prompt.

O prompt define comportamento, mas a IA decide por probabilidade.

A mesma plataforma entrega coisas muito diferentes, conforme o pedido.

Agora, quatro perguntas.

Primeira pergunta: por que um prompt enorme pode ser ótimo para programar e ruim dentro de um produto?

[pausa 5]

Resposta: porque, ao programar, o que importa é a ajuda na tarefa. Dentro do produto, o tamanho pesa em custo e em latência.

Segunda pergunta: qual é a diferença entre escopo e proatividade?

[pausa 5]

Resposta: escopo é até onde o sistema pode ir. Proatividade é quanta iniciativa ele toma, mesmo dentro desse limite.

Terceira pergunta: o que muda quando um "if" vira uma decisão da IA?

[pausa 5]

Resposta: a decisão deixa de ser determinística e passa a ser probabilística. O prompt orienta e limita, mas não dá a garantia de uma regra fixa de código.

Quarta pergunta: se os modelos entendem cada vez melhor a intenção, por que ainda vale estudar prompt?

[pausa 5]

Resposta: porque o resultado de um relatório ou de uma análise ainda muda muito, conforme a forma de pedir e a técnica usada.
