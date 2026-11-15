# Context window

## Abertura
Na aula passada, a gente viu técnicas de prompt para diminuir a alucinação: pedir fontes, pedir cautela, pedir o raciocínio, declarar uma persona. Hoje o assunto é outro limite das LLMs, os modelos de linguagem grandes. É a janela de contexto.

A pergunta da aula é simples. Quanto texto um modelo consegue considerar de uma vez? E o que acontece quando a gente coloca muito texto ali dentro?

A resposta tem duas partes. A primeira é um número, o tamanho da janela. A segunda é mais interessante: mesmo quando o texto cabe na janela, o modelo não presta a mesma atenção em tudo. Vamos ver por quê, e o que fazer a respeito.

## Janela de contexto
A frase-âncora é esta: a janela de contexto é quanto o modelo consegue enxergar de uma vez para prever o próximo token.

Lembre como o modelo gera texto. Ele olha os tokens que vieram antes e prevê o próximo. Depois olha de novo, agora com um token a mais, e prevê o seguinte. Esse conjunto de tokens anteriores é o contexto. E o contexto tem um tamanho máximo.

Pense numa mesa de trabalho. Você pode espalhar papéis sobre ela, mas a mesa tem um tamanho. O que não cabe na mesa não está na sua frente na hora de decidir. A janela de contexto é o tamanho dessa mesa.

Cuidado com uma confusão comum. A janela não é a quantidade de texto com que o modelo foi treinado. O treino usou um volume enorme de dados. A janela é outra coisa: é o que cabe na mesa durante uma conversa, agora.

Os números mudaram rápido. O GPT três ponto cinco tinha uma janela de cerca de quatro mil e cem tokens. O GPT quatro, oito mil. O GPT quatro Turbo saltou para cento e vinte e oito mil. E o Claude três, da Anthropic, chegou a cerca de duzentos mil tokens. É uma mesa gigante.

O que isso resolve? Com uma janela maior, o modelo mantém mais coerência, porque enxerga mais. Ele consegue raciocinar sobre um documento longo e integrar várias fontes numa resposta só.

Onde quebra? Aqui está o ponto central da aula. Uma mesa grande não garante que você olhe para todos os papéis com o mesmo cuidado. A qualidade não é uniforme ao longo da janela. E o professor aponta três limitações para isso.

Fica a âncora: a janela de contexto é quanto o modelo consegue enxergar de uma vez. Enxergar, não necessariamente prestar atenção.

## Diluição de relevância
A frase-âncora da primeira limitação: quanto mais tokens disputam a atenção, menos cada um recebe.

Você já conhece o mecanismo de atenção. É ele que decide quais tokens importam para cada previsão. O problema é que ele não é perfeito. Com pouca informação, ele acerta o foco com facilidade. Com muita informação, fica mais difícil.

Imagine uma reunião com três pessoas falando. Você acompanha tudo. Agora imagine uma festa com duzentas pessoas falando ao mesmo tempo. Você ainda ouve tudo, de certa forma, mas não consegue dar a mesma atenção a cada conversa. Alguém pode ter dito algo importante, e você nem registrou.

É isso que acontece com um prompt enorme. O modelo dá menos peso a algumas partes e concentra a atenção em outras. Os sintomas são três. A resposta fica mais genérica. Algumas instruções são ignoradas, porque ficaram perdidas no meio de tanto texto. E a coerência cai em trechos longos, que já é a parte mais difícil para a IA generativa.

Repare que isso não é falta de espaço. O texto coube. O problema é de foco.

Fica a âncora: quanto mais tokens disputam a atenção, menos cada um recebe.

## Perda de foco no começo
A frase-âncora da segunda limitação: modelos autoregressivos tendem a pesar mais o final do contexto.

Autoregressivo quer dizer que o modelo gera um token por vez, sempre olhando o que veio antes. Esses modelos têm uma tendência: os últimos tokens ganham mais peso. É uma tendência, não uma regra fixa. Mas ela tem uma consequência prática. O que está no começo de um prompt muito longo pode perder força.

Pense numa lista de compras ditada por telefone. Alguém fala vinte itens. Quando você desliga, os últimos estão frescos na memória. Os primeiros, nem tanto.

Daí vem a dica do professor. Se você precisa usar um prompt muito grande, deixe o que é mais crítico para o final. Uma instrução importante colocada logo no começo, antes de um documento enorme, corre o risco de perder acurácia.

Fica a âncora: modelos autoregressivos tendem a pesar mais o final do contexto. O que é crítico vai para o fim.

## Custo computacional
A frase-âncora da terceira limitação: o custo da atenção cresce com o quadrado do tamanho do contexto.

Alguém pode pensar: então é só usar sempre o modelo com a maior janela e mandar tudo. Mais ou menos. Existe uma conta a pagar.

O mecanismo de atenção relaciona os tokens entre si. Quando o contexto cresce, o número de relações cresce muito mais rápido. O custo e o tempo de processamento crescem de forma quadrática. Na prática, se você dobra o tamanho do prompt, a atenção fica cerca de quatro vezes mais cara e mais lenta.

Pense em apertos de mão numa sala. Se cada pessoa aperta a mão de todas as outras, dobrar o número de pessoas quase quadruplica o número de apertos.

Em troca, o modelo olha um grupo maior de coisas e pode trazer uma informação melhor. Mas a conta no fim do dia pode ficar difícil de pagar. Como diz o professor, não existe almoço grátis.

Fica a âncora: o custo da atenção cresce com o quadrado do tamanho do contexto.

## O PDF de duzentas páginas
Agora junte as três limitações num caso concreto.

Você tem um PDF de duzentas páginas. Manda para o modelo e pede: resuma os principais pontos da cláusula de confidencialidade da página treze. O pedido é claro. Diz a cláusula e diz a página. E o documento cabe na janela de cento e vinte e oito mil tokens do GPT quatro Turbo.

O que pode acontecer? O modelo olha as duzentas páginas e espalha a atenção. A resposta vem vaga. Ou ele mistura trechos de outras cláusulas. Ou simplesmente ignora a instrução de ficar na página treze.

A lição desse exemplo: caber na janela não garante a resposta certa. O modelo viu tudo, mas não concentrou a atenção no trecho que importava.

## Chunking e trechos relevantes
A frase-âncora da primeira estratégia: fatie o bolo antes de entregar.

Chunking é dividir o documento em partes lógicas, como capítulos ou seções. Cada parte tem menos tokens, e a atenção se concentra melhor nela. O professor chama de chunking inteligente.

Dá para ir além. Um sistema externo pode buscar só os trechos relevantes para a pergunta. O trabalho fica separado em duas etapas. Primeiro se recorta. Depois o modelo age sobre o recorte. No exemplo do PDF, você acharia a página treze e mandaria só ela, num prompt curto e direcionado. Isso pode ser feito à mão ou de forma automática.

Uma versão mais fraca é quebrar por capítulos e focar só em alguns. Ainda se perde um pouco de atenção, e não é a melhor prática. Mas ajuda.

Onde quebra? Se a tarefa depende do documento inteiro, recortar um pedaço deixa o resto de fora.

Fica a âncora: fatie o bolo antes de entregar.

## Resumos hierárquicos
A frase-âncora: resuma por partes e trabalhe em cima dos resumos.

Imagine que você precisa de uma visão geral de um livro de quarenta capítulos. Recortar um capítulo não serve, porque a pergunta depende de todos. A saída é resumir cada capítulo e, depois, trabalhar em cima desses resumos.

É como estudar para uma prova grande. Você não relê o livro inteiro na véspera. Você faz um resumo de cada capítulo e revisa pelos resumos.

O que isso resolve? Cobre o documento todo sem colocar todo o texto bruto na janela ao mesmo tempo.

Fica a âncora: resuma por partes e trabalhe em cima dos resumos.

## Instrução explícita de foco
A frase-âncora da última estratégia: corte pelo prompt quando não cortou antes.

Pedir a página treze já é uma instrução de foco. Mas é implícita. O professor sugere deixá-la explícita. Você diz ao modelo algo como: ignore a metade final do documento, ignore os últimos mil tokens e use só a página treze para resumir a cláusula.

É como orientar alguém numa biblioteca. Em vez de dizer "procura aí o livro", você diz "esquece o segundo andar inteiro, vai direto à estante três".

Em vez de cortar o documento à mão, você corta pelo prompt. Segundo o professor, é uma técnica pouco usada.

Onde quebra? O documento inteiro continua sendo enviado. A instrução orienta o foco, mas os tokens ainda estão lá, ocupando a janela e custando processamento. Ela ajuda, mas não substitui o recorte feito antes.

Fica a âncora: corte pelo prompt quando não cortou antes.

## Comparando com o que você já viu
Três comparações para não confundir conceitos vizinhos.

Primeira: janela de contexto e vocabulário. Na aula de tokens, o vocabulário era o conjunto de tokens que o modelo conhece. A janela é quantos tokens cabem na mesa de uma vez. Um é o dicionário. O outro é o tamanho da página que você consegue ler.

Segunda: a RNN, a rede neural recorrente, e o Transformer. A RNN esquecia o começo de textos longos porque a informação se apagava passo a passo. O Transformer resolveu isso com a atenção: ele enxerga todos os tokens da janela. Mas a aula de hoje mostra que enxergar não é o mesmo que prestar atenção igual. A diluição de relevância é um limite do Transformer, não um retorno do problema da RNN.

Terceira: diluição e alucinação. Na alucinação, o modelo inventa um fato que não existe. Na diluição, o fato está no prompt, mas o modelo não deu peso a ele. Uma pede fontes e cautela. A outra pede menos tokens ou foco explícito.

## Revisão
As âncoras da aula, em sequência.

A janela de contexto é quanto o modelo consegue enxergar de uma vez para prever o próximo token.

Quanto mais tokens disputam a atenção, menos cada um recebe.

Modelos autoregressivos tendem a pesar mais o final do contexto.

O custo da atenção cresce com o quadrado do tamanho do contexto.

Fatie o bolo antes de entregar.

Resuma por partes e trabalhe em cima dos resumos.

Corte pelo prompt quando não cortou antes.

Agora, perguntas.

Primeira pergunta: um documento de cento e cinquenta mil tokens cabe na janela do Claude três. Isso garante que todos os trechos recebem a mesma atenção?

[pausa 5]

Resposta: não. Caber dá alcance, não atenção uniforme. Com muitos tokens, a relevância se dilui, e o final tende a pesar mais que o começo.

Segunda pergunta: você tem um prompt enorme e uma instrução crítica. Onde colocar a instrução?

[pausa 5]

Resposta: perto do final, porque modelos autoregressivos tendem a dar mais peso aos últimos tokens.

Terceira pergunta: se o prompt dobra de tamanho, o que acontece com o custo da atenção?

[pausa 5]

Resposta: fica cerca de quatro vezes maior, porque cresce de forma quadrática. E o tempo também aumenta.

Quarta pergunta: você precisa de uma síntese de um livro inteiro. Recortar um capítulo ou resumir por partes?

[pausa 5]

Resposta: resumir por partes, o resumo hierárquico. A síntese depende do livro todo, e o recorte deixaria partes de fora.

Quinta pergunta: o que a instrução explícita de foco não resolve, comparada ao recorte feito antes?

[pausa 5]

Resposta: o custo. O documento inteiro continua no prompt, e todos aqueles tokens continuam sendo processados.
