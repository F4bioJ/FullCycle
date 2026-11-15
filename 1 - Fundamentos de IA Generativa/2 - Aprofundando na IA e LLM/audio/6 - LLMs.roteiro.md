# LLMs

## Abertura
Esta é a aula em que as peças se juntam. Até aqui vimos o bigrama, as redes profundas, as redes recorrentes, o Transformer e os tokens. Agora vamos dar nome ao que se monta com tudo isso: o LLM.

LLM quer dizer Large Language Model. Em português, modelo de linguagem de larga escala.

Vamos passar por sete ideias. O que é um LLM. Como ele é pré-treinado. A diferença entre o GPT e o BERT. O que o fine-tuning e o RLHF fazem depois. O que são few-shot e zero-shot. O que a escala melhora e o que ela não melhora. E por que tudo isso mudou a forma de construir software.

Na aula passada vimos que o modelo não lê palavras, lê tokens. Guarde isso. Tudo o que vem a seguir acontece sobre tokens.

## O que é um LLM
Frase-âncora: LLM é um rótulo de escala, não uma arquitetura nova.

Pense numa cozinha industrial. Não é um tipo novo de fogão. É a mesma cozinha, só que muito maior, com muito mais ingredientes e muito mais horas de trabalho. O LLM é isso. Por baixo, quase sempre há um Transformer. O que muda é o tamanho: bilhões de parâmetros e uma montanha de texto.

Por isso não existe um LLM só. Existem vários. E o que separa um do outro não é o tamanho, é o objetivo de treino. Uns foram treinados para continuar texto. Outros, para entender texto.

Por dentro, o LLM tem as peças que você já conhece. Os embeddings, que transformam cada token num vetor. A autoatenção, em que cada token olha para os outros tokens da sequência. E as camadas feedforward, que refinam a representação de cada token. Some a isso o que vimos na aula de Transformers: as conexões residuais e a normalização, que permitem empilhar dezenas de camadas, e a codificação de posição, que dá a ordem.

Onde essa ideia quebra? Quando alguém usa LLM como sinônimo de ChatGPT. O ChatGPT é um produto. LLM é a família inteira.

Frase-âncora, de novo: LLM é um rótulo de escala, não uma arquitetura nova.

## Pré-treinamento
Frase-âncora: no pré-treino, o próprio texto é o professor.

Imagine uma pilha enorme de livros, sites, fóruns e código. Ninguém marcou nada. Não há rótulo, não há gabarito. Como o modelo aprende com isso?

Com um truque simples. Você esconde um pedaço do texto e pede para o modelo adivinhar. Depois confere com o original. O texto já traz a resposta. Isso se chama autossupervisão.

Há duas formas de esconder. A primeira é esconder a próxima palavra. O modelo lê o começo da frase e tenta prever o token seguinte. A segunda é esconder palavras no meio da frase, como num exercício de completar lacunas, e pedir para o modelo preencher.

Essas duas formas parecem parecidas. Não são. Cada uma cria uma família diferente de modelo. É o próximo bloco.

Antes dele, uma nota que o professor fez. O texto de treino virou polêmica, porque incluiu livros e textos protegidos por direitos autorais. Isso mostra o quanto o dado é central. Sem uma montanha de texto, não há LLM.

Frase-âncora, de novo: no pré-treino, o próprio texto é o professor.

## GPT e BERT
Frase-âncora: o GPT olha só para trás e gera; o BERT olha para os dois lados e entende.

Comece pelo GPT. Imagine alguém contando uma história em voz alta, sem poder espiar o roteiro. A cada palavra, ele decide a próxima com base só no que já falou. É assim que o GPT funciona. No treino, há uma máscara que impede cada posição de enxergar o futuro. As posições à frente recebem peso zero. Assim, o modelo pode treinar todas as posições ao mesmo tempo sem trapacear. Mas, na hora de gerar, ele continua produzindo um token por vez. O que acabou de gerar volta como entrada.

Agora o BERT. Imagine um revisor com a frase inteira na mão e uma palavra apagada no meio. Ele olha o que vem antes e o que vem depois para descobrir a palavra. O BERT faz isso. Ele enxerga os dois lados.

E aqui está o detalhe que a aula não explicou. Por que o BERT não é treinado para prever a próxima palavra? Porque ele enxerga os dois lados. Se a tarefa fosse adivinhar a próxima palavra, ela já estaria visível na entrada. O treino seria trivial. Por isso o BERT esconde palavras no meio da frase, e não no fim.

O que cada um resolve? O GPT é bom para gerar: responder, escrever, conversar. O BERT é bom para entender: classificar, buscar, extrair informação, analisar sentimento.

Onde cada um quebra? Peça ao BERT para continuar uma história e o resultado será fraco. Ele nunca treinou para escrever da esquerda para a direita. E o GPT, que só olha para trás, tem uma visão mais pobre do que vem depois na frase.

Frase-âncora, de novo: o GPT olha só para trás e gera; o BERT olha para os dois lados e entende.

## Fine-tuning e RLHF
Frase-âncora: o pré-treino ensina a língua; o fine-tuning ensina a tarefa; o RLHF ensina o que as pessoas preferem.

Pense num recém-formado em letras. Ele domina a língua. Esse é o pré-treino. Depois, ele faz um estágio num escritório de advocacia e aprende a redigir petições. Esse é o fine-tuning: um treino a mais, com exemplos prontos de entrada e saída, para uma tarefa específica.

Agora, o RLHF. A sigla quer dizer aprendizado por reforço com feedback humano. Imagine que, no escritório, um chefe lê várias versões da mesma petição e as coloca em ordem, da melhor para a pior.

No paper do InstructGPT, isso acontece em três etapas. Primeiro, pessoas escrevem respostas modelo, e o modelo é ajustado com elas. Segundo, pessoas ordenam várias respostas do modelo, e essas ordens treinam um segundo modelo, o modelo de recompensa, que aprende a prever a resposta preferida. Terceiro, o modelo principal é otimizado por reforço, usando a nota do modelo de recompensa.

Repare: as ordens feitas pelas pessoas não entram direto no reforço. Elas passam pelo modelo de recompensa.

O que o RLHF resolve? Respostas fluentes, mas pouco úteis ou fora do que se pediu.

Onde ele quebra, ou onde costumam se enganar? O professor disse que o RLHF ajuda o modelo a evoluir ao longo do tempo. Cuidado. O RLHF é uma fase de treino, com começo e fim. O modelo publicado não continua aprendendo com as suas conversas. Se você corrigir o chat todos os dias, ele não vai melhorar sozinho.

Frase-âncora, de novo: o pré-treino ensina a língua; o fine-tuning ensina a tarefa; o RLHF ensina o que as pessoas preferem.

## Few-shot e zero-shot
Frase-âncora: few-shot e zero-shot acontecem no prompt, sem mexer nos pesos.

Imagine que você entrega a um assistente novo três exemplos de como classificar e-mails. "Adorei o produto: positivo. Péssimo atendimento: negativo." Depois entrega um quarto e-mail. Ele continua o padrão. Isso é few-shot: poucos exemplos dentro do próprio pedido.

Zero-shot é o mesmo pedido sem nenhum exemplo. Só a instrução: "classifique o sentimento deste e-mail".

Aqui a aula simplificou. O professor descreveu o zero-shot como pouquíssimo exemplo e pouquíssima instrução. O certo é: nenhum exemplo, mas com a instrução da tarefa. Sem instrução, o modelo não sabe o que fazer.

O que isso resolve? Você testa uma tarefa nova em minutos, sem treinar nada. É a primeira alavanca, antes de qualquer fine-tuning.

Onde quebra? Achar que o modelo aprendeu de verdade. Nos dois casos, nenhum peso muda. O nome técnico é aprendizado em contexto. Feche a conversa e o aprendizado vai embora.

Frase-âncora, de novo: few-shot e zero-shot acontecem no prompt, sem mexer nos pesos.

## Escala e veracidade
Frase-âncora: a escala melhora a previsão, não a verdade.

Pense num imitador que ouviu milhares de horas de um político. Quanto mais ouve, mais convincente fica a imitação. Mas isso não o torna mais honesto. Ele só soa mais parecido.

Com os LLMs é igual. Há uma regularidade medida em pesquisa: quando você aumenta o modelo, os dados e o poder de cálculo, o erro de previsão cai de forma previsível. O modelo fica melhor em prever o próximo token.

O professor disse que, quanto mais texto, mais fiel à realidade o modelo fica. Isso é uma simplificação. Prever bem a próxima palavra não é o mesmo que dizer a verdade. Um modelo enorme pode produzir uma citação bibliográfica fluente, bem formatada, e completamente inventada.

A ponte: esse problema tem nome, alucinação, e terá aulas próprias mais adiante neste capítulo.

Frase-âncora, de novo: a escala melhora a previsão, não a verdade.

## Famílias e licenças
Frase-âncora: multimodal fala do que entra e sai; autoregressivo fala de como se gera.

O professor contrastou o Gemini, que é multimodal, com o GPT, que é autoregressivo, como se fossem coisas opostas. Não são. Multimodal quer dizer que o modelo aceita e produz mais de um tipo de dado: texto, imagem, áudio. Autoregressivo quer dizer que gera em sequência, um pedaço por vez. Um modelo pode ser as duas coisas. O relatório do Gemini descreve justamente decoders de Transformer.

Outra correção: o LLaMA, da Meta. O professor o chamou de open source. O mais exato é pesos abertos. Você baixa o modelo, mas ele vem com uma licença própria e com condições. Antes de pôr um modelo aberto num produto comercial, leia a licença.

E o BERT, que a aula chamou de LLM com bilhões de parâmetros? Ele tem algumas centenas de milhões. Entra na família por ser um Transformer pré-treinado em texto, mas está muito abaixo da escala do GPT.

Frase-âncora, de novo: multimodal fala do que entra e sai; autoregressivo fala de como se gera.

## Por que os LLMs importam
Frase-âncora: um modelo geral no lugar de vários modelos estreitos.

Pense numa empresa com cinco sistemas separados: um traduz, outro resume, outro mede sentimento, outro responde perguntas, outro classifica. Cada um foi treinado do zero, com seus próprios dados.

O LLM troca isso por uma base geral, que depois é direcionada para cada uso: com fine-tuning, com exemplos no prompt, ou com uma boa instrução. Ele aprende representações de sentido, e não só a frequência das palavras. Por isso se adapta a tarefas novas com poucos exemplos.

Onde isso quebra? Quando a tarefa é estreita e barata, como classificar textos em grande volume. Aí um modelo encoder pequeno, da família do BERT, costuma ser melhor e muito mais barato que um LLM gerador.

Frase-âncora, de novo: um modelo geral no lugar de vários modelos estreitos.

## Comparação com as aulas anteriores
Vamos separar o que costuma se misturar.

Transformer e LLM. O Transformer é a arquitetura, a planta da casa. O LLM é essa planta construída em escala gigante e treinada com uma montanha de texto. Todo LLM moderno é um Transformer. Nem todo Transformer é um LLM.

Encoder e decoder. Na aula de Transformers, o encoder enxergava a frase toda e o decoder era mascarado, só via o passado. Aqui eles viraram famílias. O encoder sozinho virou o BERT. O decoder sozinho virou o GPT.

Paralelismo. A aula sugeriu que o processamento em paralelo veio das camadas feedforward empilhadas. Não veio. Veio da atenção, que substituiu a recorrência da RNN. A RNN precisava esperar o passo anterior. A atenção calcula todas as posições de uma vez.

Fine-tuning, few-shot e RLHF. O fine-tuning muda os pesos para uma tarefa. O few-shot não muda peso nenhum, só dá exemplos no pedido. O RLHF muda os pesos para alinhar o estilo às preferências humanas.

## Fechamento
As frases-âncora desta aula, em sequência.

LLM é um rótulo de escala, não uma arquitetura nova.

No pré-treino, o próprio texto é o professor.

O GPT olha só para trás e gera; o BERT olha para os dois lados e entende.

O pré-treino ensina a língua; o fine-tuning ensina a tarefa; o RLHF ensina o que as pessoas preferem.

Few-shot e zero-shot acontecem no prompt, sem mexer nos pesos.

A escala melhora a previsão, não a verdade.

Multimodal fala do que entra e sai; autoregressivo fala de como se gera.

Um modelo geral no lugar de vários modelos estreitos.

## Revisão
Primeira pergunta: por que o BERT não é treinado para prever a próxima palavra?

[pausa 5]

Resposta: porque ele enxerga os dois lados da frase. A próxima palavra já estaria visível na entrada, e o treino seria trivial. Por isso ele esconde palavras no meio e pede para preencher.

Segunda pergunta: no RLHF, onde entram as ordens de preferência feitas pelas pessoas?

[pausa 5]

Resposta: elas treinam um modelo de recompensa. É a nota desse modelo que guia o aprendizado por reforço. As ordens não entram direto no reforço.

Terceira pergunta: o que muda nos pesos do modelo quando você usa zero-shot?

[pausa 5]

Resposta: nada. O zero-shot é só a instrução no prompt, sem exemplos e sem treino. O aprendizado acontece em contexto e some quando a conversa acaba.

Quarta pergunta: um modelo bem maior inventa uma citação com toda a confiança. Por que a escala não evitou isso?

[pausa 5]

Resposta: porque a escala melhora a previsão do próximo token, não a verdade. Soar fluente e ser verdadeiro são coisas diferentes.

Quinta pergunta: um time tem milhões de avaliações para classificar por sentimento e pouco orçamento. GPT grande ou um modelo da família do BERT?

[pausa 5]

Resposta: em geral, um modelo da família do BERT. Ele foi feito para entender e classificar, é menor e sai muito mais barato. O GPT é a escolha quando a tarefa é gerar texto.
