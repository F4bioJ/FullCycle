# RLHF

## Abertura
Esta aula é sobre RLHF. A sigla vem do inglês e quer dizer aprendizado por reforço a partir de feedback humano.

Na aula passada, vimos o fine tuning supervisionado. Você pega um modelo já pré-treinado e mostra para ele pares de entrada e saída. Esta pergunta, esta resposta. O modelo ajusta os pesos e se especializa.

O RLHF dá um passo além. Ele não para nos exemplos prontos. Ele traz pessoas para dizer quais respostas do próprio modelo elas preferem. E usa essa preferência para guiar o ajuste.

Vamos ver as três etapas do processo, por que ele é necessário, o que muda no comportamento do modelo, um passo complementar chamado instruction tuning e, por fim, os limites do método.

## A ideia do RLHF
A frase-âncora é esta: o RLHF ajusta como o modelo responde usando a preferência humana.

Pense num cozinheiro novo num restaurante. Primeiro ele aprende a receita do livro. Depois começa a servir pratos, e os clientes dizem qual prato gostaram mais. Com o tempo, ele passa a cozinhar do jeito que agrada. O livro de receitas é o fine tuning supervisionado. A opinião dos clientes é o feedback humano.

O que isso resolve? O modelo deixa de só imitar exemplos e passa a buscar o tipo de resposta que as pessoas consideram útil, segura e clara.

Onde quebra? Tudo depende de gente avaliando. Isso custa caro e traz a opinião de cada um para dentro do modelo. Vamos voltar a isso no fim.

A ponte: esse processo acontece em três etapas. A primeira é o S F T. Guarde de novo a frase-âncora: o RLHF ajusta como o modelo responde usando a preferência humana.

## Etapa um: SFT
A frase-âncora: no S F T, o modelo imita respostas boas escritas por pessoas.

S F T quer dizer supervised fine tuning, ou fine tuning supervisionado. É o mesmo tipo de ajuste da aula passada. Pessoas escrevem pares de pergunta e resposta de qualidade, e o modelo treina com eles.

O exemplo da aula: a pergunta é "me explique a teoria da relatividade como se eu fosse uma criança". Uma pessoa escreve a resposta, simples e clara, no tom certo para uma criança. O modelo aprende que, quando chegar um pedido desse tipo, esse é o formato esperado.

O que resolve? Dá ao modelo uma base de comportamento. Ele aprende o tom, o nível de detalhe e o formato que cada tipo de instrução pede.

Onde quebra? O S F T só mostra uma resposta boa por pergunta. Ele não ensina a comparar. Se houver duas respostas aceitáveis, o modelo não sabe qual delas as pessoas preferem.

A ponte: para ensinar essa comparação, entra a segunda etapa, o modelo de recompensa. Lembre: no S F T, o modelo imita respostas boas escritas por pessoas.

## Etapa dois: modelo de recompensa
A frase-âncora: o modelo de recompensa transforma o ranking humano numa nota.

Em inglês, reward model. Agora o modelo gera várias respostas para a mesma pergunta. Digamos três: A, B e C. Uma pessoa lê as três e dá uma nota para cada uma. A ganhou dez, B ganhou cinco, C ganhou sete. Disso sai um ranking: A primeiro, C em segundo, B por último.

Repare num detalhe importante. B não está errada. Ela só foi para um caminho pior do que as outras duas. O que se registra é a preferência relativa, não certo ou errado.

Pense numa degustação de café. Você prova três xícaras e diz qual gostou mais. Nenhuma está estragada. Mas você tem uma ordem de preferência.

O que resolve? Muitas tarefas não têm uma única resposta certa. Explicar a relatividade para uma criança pode ser feito de vários jeitos bons. O ranking captura qual deles agrada mais. Com muitos rankings, o modelo de recompensa aprende os padrões do que recebe nota alta, como clareza, utilidade e segurança. E passa a dar uma nota para qualquer resposta nova.

Onde quebra? A nota é tão boa quanto o julgamento de quem ranqueou. Se o avaliador tem preferências estranhas, o modelo de recompensa aprende essas preferências.

A ponte: agora que existe quem dê nota, falta usar essa nota para mudar o modelo. É a terceira etapa. De novo: o modelo de recompensa transforma o ranking humano numa nota.

## Etapa três: aprendizado por reforço com PPO
A frase-âncora: o PPO ajusta o modelo para tirar a maior nota possível.

P P O quer dizer proximal policy optimization, ou otimização de política proximal. É o algoritmo usado nesta etapa de aprendizado por reforço.

Funciona assim. O modelo gera uma resposta. O modelo de recompensa da etapa dois dá uma nota. O P P O ajusta o modelo na direção das respostas que tiram nota maior. E faz isso aos poucos, sem mudar o modelo de forma instável.

Repare quem avalia aqui. Não é uma pessoa lendo cada resposta nova. É o modelo de recompensa, que já carrega o julgamento humano da etapa anterior.

Pense num aluno treinando redação com um corretor automático, que foi calibrado com as notas de bons professores. O aluno escreve, recebe a nota, ajusta e escreve de novo.

O que resolve? É aqui que a preferência humana vira mudança de verdade nos parâmetros do modelo. Ele passa a favorecer as respostas mais úteis, seguras e claras.

Onde quebra? O modelo aprende a agradar o corretor. Se o corretor recompensa a coisa errada, o modelo exagera nessa coisa errada.

A ponte: mas por que tanto trabalho? Por que não basta o pré-treino? Lembre: o PPO ajusta o modelo para tirar a maior nota possível.

## Por que o ajuste é necessário
A frase-âncora: prever a próxima palavra gera texto fluente, não resposta desejável.

Você já viu no pré-treino que o modelo aprende prevendo a próxima palavra, depois a próxima, depois a próxima. Isso dá fluência. Mas não garante consistência lógica. O modelo pode não ter clareza do caminho que está tomando.

Sem ajuste, aparecem três problemas. Ele reproduz vieses que estavam nos dados. Ele fica prolixo e impreciso, repetindo a mesma ideia várias vezes, como o ChatGPT fazia logo no lançamento. E ele pode gerar conteúdo ofensivo, como os casos que saíram na mídia de IA que reproduziu racismo ou ofensa a minorias. Isso acontece porque esse conteúdo estava nas bases de treino.

Pense em alguém que leu a internet inteira, mas nunca conviveu com pessoas. Fala muito bem, mas não sabe quando parar nem o que não se diz.

O que o RLHF faz aqui? O professor compara com uma bússola ética. Ele guia o modelo a ser mais educado, respeitoso e assertivo.

A ponte: dá para perceber esse ajuste no dia a dia. Repita: prever a próxima palavra gera texto fluente, não resposta desejável.

## O que muda no comportamento
A frase-âncora: o alinhamento muda o comportamento, não o conhecimento.

Compare dois assistentes diferentes com a mesma pergunta. Cada um trata você com um nível diferente de educação. Até versões do mesmo produto mudam. Uma atualização do GPT o deixou puxa-saco. Quem fez o ajuste errou a mão. A atualização seguinte o deixou mais comum, menos inclinado a agradar a qualquer custo.

Esse episódio mostra uma coisa: mexer um pouco no ajuste muda muito o comportamento que você percebe.

Com esse tipo de treino, o modelo passa a dizer que não sabe, quando é o caso. Segue melhor as instruções, em vez de inventar. E alucina menos, porque recebeu mais orientação.

Mas atenção. O ganho é na qualidade da conversa. O modelo não fica sabendo mais fatos por causa do RLHF.

A ponte: se o comportamento responde a sinais, a forma do seu pedido também conta. Lembre: o alinhamento muda o comportamento, não o conhecimento.

## A dica do prompt direto
A frase-âncora: pedido direto deixa menos espaço para o modelo querer agradar.

O professor avisa que isso é percepção dele, dos testes que faz. Quando ele escreve com muitos rodeios, com "por favor, se puder, talvez", a resposta vem de um jeito. Quando ele fala direto, como quem fala com uma máquina, pedindo dados reais, sem tentar convencer e sem tentar agradar, a resposta melhora. O modelo viaja menos, se estende menos e inventa menos.

Pense em pedir um orçamento a um pedreiro. Se você só diz "faz do jeito que achar melhor", ele pode caprichar no que você não pediu. Se você diz "quero só o reboco desta parede, até sexta", ele vai direto ao ponto.

Onde quebra? É uma dica prática, não uma regra garantida. Teste e veja se funciona para você.

A ponte: voltando ao treino, há um passo que pode vir junto do RLHF. Repita: pedido direto deixa menos espaço para o modelo querer agradar.

## Instruction tuning
A frase-âncora: o instruction tuning ensina muitas tarefas para formar um generalista.

Instruction tuning é ajuste por instruções. Pode vir antes ou junto do RLHF. O modelo treina com muitas instruções humanas, de tarefas bem variadas. Escreva uma carta de demissão em tom amigável. Crie um roteiro para um podcast de IA. E por aí vai.

Pense num estagiário que passa um mês em cada setor da empresa. Ele não vira especialista em nada, mas aprende a se virar com qualquer pedido.

O que resolve? Deixa o modelo generalista e fácil de usar, como um assistente de conversa.

Onde quebra? Se você quer um modelo especialista num assunto só, como o fine tuning da aula passada, esse passo talvez não seja o caminho.

A ponte: com tudo isso, ainda falta falar dos limites. Lembre: o instruction tuning ensina muitas tarefas para formar um generalista.

## Limites do RLHF
A frase-âncora: o RLHF herda a subjetividade, o custo e o viés de quem avalia.

Primeiro, a subjetividade. Se uma resposta explica a relatividade com a casa da Barbie e o Ken saindo de carro, todo mundo descarta. É fácil. Mas, quando as três respostas são muito parecidas, cada avaliador escolhe uma por um motivo diferente. O tom, uma palavra que ele conhece, um jeito de que gostou. O professor não acha isso ruim, porque a linguagem humana também é subjetiva.

Segundo, o custo. Pôr pessoas para avaliar milhares de respostas sai caro.

Terceiro, o viés. Quem avalia tem viés, e esse viés passa para o modelo.

Pense num concurso de culinária com jurados. Os jurados escolhem bem entre um prato ótimo e um queimado. Entre dois pratos bons, a escolha diz tanto sobre os jurados quanto sobre os pratos.

Lembre: o RLHF herda a subjetividade, o custo e o viés de quem avalia.

## Comparando com o que já vimos
Agora vamos separar ideias que se confundem.

Pré-treino e S F T. No pré-treino, o modelo prevê a próxima palavra em texto genérico, sem ninguém dizer qual é a resposta certa. No S F T, uma pessoa escreve a resposta esperada. O primeiro dá fluência. O segundo dá formato.

S F T e modelo de recompensa. No S F T, a pessoa escreve uma resposta boa. No modelo de recompensa, a pessoa não escreve nada. Ela compara respostas que o próprio modelo gerou e diz qual prefere.

Modelo de recompensa e PPO. O modelo de recompensa é o juiz. O P P O é o treinador, que ajusta o modelo para agradar o juiz. A pessoa entra antes, ao formar o juiz.

Fine tuning da aula passada e instruction tuning. O fine tuning supervisionado da aula passada estreita o modelo numa tarefa, como o atendente do hospital. O instruction tuning faz o contrário: espalha o treino por muitas tarefas para formar um generalista.

E o fine tuning parcial com LoRA, da aula passada? Ele trata de quanto do modelo você treina, para sair mais barato. Não tem nada a ver com feedback humano.

## Revisão
Vamos às frases-âncora, em sequência.

O RLHF ajusta como o modelo responde usando a preferência humana.

No S F T, o modelo imita respostas boas escritas por pessoas.

O modelo de recompensa transforma o ranking humano numa nota.

O PPO ajusta o modelo para tirar a maior nota possível.

Prever a próxima palavra gera texto fluente, não resposta desejável.

O alinhamento muda o comportamento, não o conhecimento.

Pedido direto deixa menos espaço para o modelo querer agradar.

O instruction tuning ensina muitas tarefas para formar um generalista.

O RLHF herda a subjetividade, o custo e o viés de quem avalia.

Agora, algumas perguntas.

Primeira pergunta: um avaliador deu dez para a resposta A, sete para a C e cinco para a B. A resposta B está errada?

[pausa 5]

Resposta: não. Ela só ficou abaixo das outras no ranking. O modelo de recompensa aprende preferência relativa, não certo ou errado.

Segunda pergunta: na etapa do PPO, quem diz se cada resposta nova está boa?

[pausa 5]

Resposta: o modelo de recompensa da etapa dois. As pessoas entram antes, ao ranquear as respostas que treinaram esse modelo.

Terceira pergunta: por que um modelo só pré-treinado pode ofender minorias?

[pausa 5]

Resposta: porque esse conteúdo estava nas bases de treino, e prever a próxima palavra reproduz o que está nos dados. O ajuste com feedback humano ajuda a corrigir.

Quarta pergunta: depois do RLHF, o modelo passa a saber mais fatos?

[pausa 5]

Resposta: não. Ele muda o comportamento. Diz quando não sabe, segue melhor as instruções e alucina menos, mas não ganha conhecimento novo.

Quinta pergunta: qual a diferença entre o instruction tuning e o fine tuning da aula passada?

[pausa 5]

Resposta: o fine tuning da aula passada especializa o modelo numa tarefa. O instruction tuning treina com muitas tarefas variadas para formar um generalista.
