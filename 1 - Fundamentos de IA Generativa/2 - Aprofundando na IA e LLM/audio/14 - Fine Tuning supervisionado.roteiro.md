# Fine Tuning supervisionado

## Abertura
Nas duas últimas aulas, vimos como um modelo de linguagem aprende a língua. Na CLM, ele prevê a próxima palavra. Na MLM, ele preenche lacunas no meio da frase. Nos dois casos, ninguém precisa dizer ao modelo qual é a resposta certa. O próprio texto já traz a resposta.

Hoje o assunto é o passo seguinte: pegar esse modelo que já sabe a língua e transformá-lo num especialista. É o fine tuning supervisionado.

Vamos passar por cinco ideias. O que é o fine tuning supervisionado. Como ele funciona por dentro. Quando vale a pena. Onde ele dá errado. E as formas mais leves de fazer, como o LoRA e o prompt tuning.

## Do generalista ao especialista
A frase-âncora é esta: o fine tuning supervisionado pega um modelo que já sabe a língua e ensina uma tarefa, com exemplos que trazem a resposta certa.

Pense numa pessoa que cresceu falando português. Ela leu livros, cartas, conversou a vida inteira. Um dia ela é contratada para atender o telefone de um hospital e fazer a pré-triagem. Ela não vira médica. Mas faz um curso curto e aprende o vocabulário do hospital, as perguntas certas, o que é urgente e o que pode esperar.

O português ela já tinha. O curso acrescenta uma camada por cima. E repare numa coisa. Se essa pessoa for trabalhar numa borracharia, o curso de hospital não ajuda em nada. Mas o português continua funcionando. A base geral continua lá. A especialização só vale para aquele contexto.

O que isso resolve? Um modelo genérico responde sobre qualquer coisa, mas sem profundidade em nada. Uma empresa quase nunca precisa disso. Ela precisa de um modelo muito bom em uma coisa só.

Onde quebra? Especializar exige dados bons, organizados e em quantidade. Sem isso, a especialização sai torta, e vamos ver como daqui a pouco.

Então, de novo: o fine tuning supervisionado pega um modelo que já sabe a língua e ensina uma tarefa, com exemplos que trazem a resposta certa. Agora, como esses exemplos entram no treino?

## Como funciona: pares, perda e ajuste
A frase-âncora aqui é: cada exemplo é um par de entrada e saída, e o modelo é corrigido pela diferença entre o que respondeu e o que deveria ter respondido.

Primeiro, escolhe-se a tarefa. Pode ser responder dúvida médica, traduzir, completar código ou resumir notícias.

Depois, monta-se o conjunto de dados. E aqui está a palavra "supervisionado". Cada exemplo vem em par. Uma pergunta e a resposta certa. Um código pela metade e o código completo. Alguém preparou essa resposta antes. Esse é o rótulo.

Pense num caderno de exercícios com o gabarito no final. O aluno resolve, confere com o gabarito e vê o tamanho do erro. O modelo faz igual. Ele gera a resposta, compara com a resposta esperada, e uma função de perda mede a distância entre as duas. A cross entropy, a mesma do pré-treinamento, continua sendo usada aqui. Esse erro volta pela rede no backpropagation, e os pesos e vieses são ajustados.

Repare que o mecanismo é o mesmo do pré-treino. O que muda é o material. No pré-treino, o texto é genérico. Aqui, cada exemplo é escolhido a dedo para a tarefa. E o modelo continua fazendo o que sempre fez, que é escolher a próxima palavra. Só que agora a chance de acertar a palavra certa naquele contexto fica muito maior.

O que isso resolve? Dá ao treino um sinal direto de certo e errado para aquela tarefa.

Onde quebra? O modelo aprende exatamente o que o gabarito diz. Se o gabarito estiver errado, ele aprende errado com a mesma dedicação.

Fechando o bloco: cada exemplo é um par de entrada e saída, e o modelo é corrigido pela diferença entre o que respondeu e o que deveria ter respondido. E quando vale a pena ter todo esse trabalho?

## Quando vale a pena
A frase-âncora é: o fine tuning compensa quando a empresa precisa de desempenho alto numa tarefa estreita, e o prompt sozinho não dá conta.

Primeiro caso: tom de voz e regras da casa. Imagine o chatbot de um banco que, no meio do atendimento, recomenda o empréstimo de um concorrente. Ninguém quer isso. Com o fine tuning, os exemplos mostram a resposta adequada, no tom da empresa, sem grosseria e sem citar outras marcas. Existem outras camadas para isso, como os guardrails. Mas o fine tuning põe a regra dentro do próprio modelo.

Segundo caso: a tarefa estreita. Uma loja de varejo quer que o chatbot conheça muito bem o catálogo, o jeito da empresa e o tom do atendimento. Ele não precisa saber física quântica.

Terceiro caso: quando o prompt não basta. Quem sabe escrever um prompt diz onde buscar, o que quer e o que não quer. Mas o cliente comum digita só "como está o tempo?". Sem orientação, o modelo pode buscar a resposta num lugar nada a ver. Se quem usa não vai escrever o contexto, o direcionamento precisa já estar no modelo.

Quarto caso: linguagem técnica, como medicina, direito e tecnologia.

Quinto caso: dados que só a empresa tem. Pense em vinte anos de conversas de atendentes. Ali está o que funciona, o que irrita o cliente e o que resolve o problema. Isso não existe na internet. Um modelo genérico nunca viu esse material.

Onde quebra? Tudo isso depende da qualidade dos exemplos, e esse é o próximo bloco.

Repetindo: o fine tuning compensa quando a empresa precisa de desempenho alto numa tarefa estreita, e o prompt sozinho não dá conta.

## Onde dá errado
A frase-âncora é: o fine tuning falha por dados repetidos, por rótulos errados, por custo e por desatualização.

O primeiro problema é o overfitting. Imagine um aluno que decorou as respostas da prova do ano passado. Se cair a mesma prova, ele vai bem. Se mudar uma vírgula, ele trava. Com o modelo é igual. Se a base é pequena, ou se quase todo exemplo repete a mesma pergunta com a mesma resposta, o modelo decora em vez de aprender. As respostas ficam mecânicas, e quando a pergunta foge do padrão, ele inventa.

O segundo problema é o viés nos dados. Aqui o problema não é repetição, é rótulo errado. Se alguém marcou como certa uma resposta errada, o backpropagation ajusta os pesos na direção dela. O modelo passa a fazer aquilo com toda a confiança, porque foi isso que ensinaram a ele.

Guarde a diferença. Overfitting é decorar demais. Viés é aprender a coisa errada.

O terceiro problema é o custo. Modelo grande, muitos dados e muitos tokens exigem muito poder de computação.

O quarto é a atualização. Na medicina, por exemplo, aparece coisa nova o tempo todo. Se cada novidade exige refazer o treino inteiro, a conta não fecha.

O que resolve isso? Formas mais leves de fazer fine tuning, que é o próximo bloco.

De novo: o fine tuning falha por dados repetidos, por rótulos errados, por custo e por desatualização.

## Completo ou parcial
A frase-âncora é: o fine tuning completo mexe em todos os parâmetros, e o parcial treina só uma parte e preserva o que o modelo já sabia.

O completo é como reformar a casa inteira. Todos os parâmetros do modelo são atualizados. Leva tempo e custa caro. Vale a pena quando o comportamento desejado está muito longe do que o modelo aprendeu no pré-treino, num domínio realmente novo.

O parcial é como reformar só a cozinha. Treina-se uma parte pequena, e o resto fica como estava. É mais leve, mais barato, e o modelo não perde o que já sabia. O exemplo clássico é um modelo treinado em inglês que precisa atender contratos jurídicos em português. Ele aprende o linguajar novo sem esquecer o inglês.

O parcial também resolve a atualização. Pense num hospital que já fez um fine tuning pesado com vinte anos de medicina. Seis meses depois, saem protocolos novos. Não é preciso refazer tudo. Faz-se um fine tuning incremental, só com o que mudou, por cima do modelo que já estava pronto.

Fechando: o fine tuning completo mexe em todos os parâmetros, e o parcial treina só uma parte e preserva o que o modelo já sabia. E como se treina só uma parte?

## LoRA e prompt tuning
A frase-âncora do LoRA é: ele insere matrizes pequenas nas camadas e treina só elas. A do prompt tuning é: ele treina uma instrução interna que acompanha o modelo, sem mexer nos pesos.

LoRA quer dizer Low Rank Adaptation, adaptação de baixo posto. Pense numa máquina de fábrica que já funciona bem. Em vez de desmontar a máquina, você encaixa uma peça pequena num ponto estratégico e ajusta só essa peça. É isso que o LoRA faz com as camadas do modelo. Ele faz parte de uma família de técnicas chamada PEFT, que quer dizer Parameter Efficient Fine Tuning, ou fine tuning eficiente em parâmetros. Essas técnicas aparecem em bibliotecas como a Hugging Face Transformers.

O prefix tuning e o prompt tuning vão por outro caminho. Eles não mexem nos pesos do modelo. O que se treina é um prefixo, uma espécie de instrução interna que vai junto com cada pergunta e orienta o comportamento. É como um bilhete permanente colado no painel da máquina, dizendo como ela deve trabalhar. Isso compensa em modelos muito grandes, em que mexer nos pesos sai caro demais.

Onde quebra? Quanto menos se mexe no modelo, menor é a mudança possível. Para uma transformação profunda, o fine tuning completo continua sendo o caminho.

Repetindo: o LoRA insere matrizes pequenas nas camadas e treina só elas. O prompt tuning treina uma instrução interna, sem mexer nos pesos.

## Comparando com o que já vimos
Primeira comparação: pré-treino e fine tuning supervisionado. O mecanismo é o mesmo, com perda, backpropagation e ajuste de pesos. A diferença está nos dados. Na CLM e na MLM, o texto cria a própria tarefa, e não há rótulo externo. No fine tuning supervisionado, cada entrada vem com a resposta que alguém preparou.

Segunda: overfitting e viés. Os dois saem dos dados. O overfitting vem de dados repetidos ou poucos, e o modelo decora. O viés vem de rótulos errados, e o modelo aprende certinho a coisa errada.

Terceira: completo, LoRA e prompt tuning. O completo reescreve todos os parâmetros. O LoRA acrescenta peças pequenas e treina só elas. O prompt tuning nem toca nos pesos, só treina a instrução interna.

Quarta: fine tuning, prompt e guardrail. O prompt orienta uma conversa de cada vez, e depende de quem escreve. O guardrail é uma barreira em volta do modelo. O fine tuning muda o próprio modelo.

## Revisão
As frases-âncora da aula, em sequência.

O fine tuning supervisionado pega um modelo que já sabe a língua e ensina uma tarefa, com exemplos que trazem a resposta certa.

Cada exemplo é um par de entrada e saída, e o modelo é corrigido pela diferença entre o que respondeu e o que deveria ter respondido.

O fine tuning compensa quando a empresa precisa de desempenho alto numa tarefa estreita, e o prompt sozinho não dá conta.

O fine tuning falha por dados repetidos, por rótulos errados, por custo e por desatualização.

O completo mexe em todos os parâmetros, e o parcial treina só uma parte e preserva o que o modelo já sabia.

O LoRA insere matrizes pequenas e treina só elas, e o prompt tuning treina uma instrução interna sem mexer nos pesos.

Agora, as perguntas.

Primeira pergunta: o que torna supervisionado o fine tuning, se o pré-treino também usa função de perda e backpropagation?

[pausa 5]

Resposta: os dados. Cada exemplo vem em par, com a entrada e a resposta esperada preparada antes. No pré-treino, o próprio texto cria a tarefa, sem rótulo externo.

Segunda pergunta: um chatbot treinado com milhares de conversas, quase todas iguais, passa a dar respostas mecânicas e a inventar quando a pergunta foge do padrão. É overfitting ou viés?

[pausa 5]

Resposta: overfitting. Os dados eram repetitivos, e o modelo decorou. Viés seria um rótulo errado ensinando a coisa errada.

Terceira pergunta: um hospital já fez um fine tuning pesado e, seis meses depois, precisa incluir protocolos novos. Qual o caminho mais barato?

[pausa 5]

Resposta: um fine tuning incremental, só com os dados novos, usando uma técnica leve como o LoRA, por cima do modelo que já estava pronto.

Quarta pergunta: qual a diferença entre o LoRA e o prompt tuning?

[pausa 5]

Resposta: o LoRA acrescenta matrizes pequenas nas camadas e treina só elas. O prompt tuning não mexe nos pesos, só treina uma instrução interna que acompanha o modelo.

Na próxima aula, seguimos a partir daqui.
