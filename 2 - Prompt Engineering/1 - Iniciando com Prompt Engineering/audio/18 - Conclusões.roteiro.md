# Conclusões

## Abertura
Esta é a aula que fecha o primeiro capítulo de Prompt Engineering.

Na aula passada, você viu o prompt chaining: uma pipeline em que a saída de uma etapa vira a entrada da próxima. Com ele, a lista de técnicas do capítulo terminou.

Agora o professor dá um passo atrás. A pergunta deixa de ser "como funciona cada técnica" e passa a ser "como eu escolho e uso essas técnicas no dia a dia".

São quatro ideias. Primeiro, entender a tarefa antes de escrever. Segundo, só pedir passo a passo quando houver necessidade real. Terceiro, explorar alternativas, mas no lugar certo. Quarto, aceitar que ser intencional dá trabalho, e que isso compensa nas tarefas complexas.

## Entender a tarefa antes de escrever
A frase-âncora aqui é: antes do prompt, vêm as perguntas.

Qual é o contexto? Para que esse prompt vai servir? Como eu quero a saída? Como eu quero auditar o que a IA pensou? Eu quero explorar opções?

Pense num marceneiro. Antes de pegar a ferramenta, ele olha a madeira e pensa no móvel pronto. Serrote, plaina ou formão, vários resolvem cortes parecidos. O que muda é o acabamento que ele quer.

Com prompts é igual. Tipos diferentes podem fazer tarefas parecidas. O que muda é o nível de detalhamento que você quer.

E existe uma fronteira. Zero-shot, one-shot e few-shot são diretos. Do Chain of Thought em diante, tudo fica mais complexo. Por quê? Porque essas técnicas geram linhas de pensamento, e a IA reaproveita esse raciocínio para chegar à resposta. Mais raciocínio significa mais texto, mais custo e mais coisa para acompanhar.

Então, de novo: antes do prompt, vêm as perguntas.

## Passo a passo só quando precisa
A frase-âncora aqui é: clareza da saída primeiro, passo a passo só com necessidade real.

O primeiro ponto do professor é saber exatamente o que você quer receber. O segundo é desconfiar de um hábito.

Pedir para a IA pensar passo a passo vicia. Funciona bem uma vez, e logo vira reflexo em todo prompt. O problema aparece quando esse reflexo vai parar dentro de um sistema.

Imagine um serviço que classifica milhares de chamados simples por dia. Cada chamado ganha um raciocínio longo que ninguém vai ler. Cada linha desse raciocínio são tokens pagos, multiplicados pelo volume.

E repare: mesmo quando você quer auditar o resultado, o passo a passo não é obrigatório. Ele é uma opção, não uma regra.

Clareza da saída primeiro, passo a passo só com necessidade real.

## Explorar alternativas, no lugar certo
A frase-âncora aqui é: abuse da exploração enquanto desenvolve.

O professor é enfático. Enquanto você trabalha e desenvolve, explore alternativas para qualquer coisa. Explore até o que você ainda não sabe.

Para isso, o capítulo deu ferramentas. O Tree of Thought abre vários caminhos e compara. O ReAct alterna pensamento e ação para investigar. A self-consistency serve para reverificar respostas. E dá para usar essas técnicas para gerar documentação e para encontrar e resolver bugs.

Agora, a ressalva. Em aplicações de alta escala, raramente se trabalha assim. Explorar muitos caminhos em cada chamada de um sistema grande custaria caro demais.

Pense em escolher um restaurante para um jantar importante. Você compara opções, lê avaliações, pondera. Mas ninguém faz isso para cada café da manhã do ano.

Abuse da exploração enquanto desenvolve. Na alta escala, ela raramente cabe.

## Ser intencional dá trabalho
A frase-âncora aqui é: dá trabalho, e o trabalho é o próprio prompt.

O professor diz com todas as letras que não quer ver você escrevendo prompts como sempre escreveu. E admite que ser intencional dá trabalho.

Dá trabalho pensar no esqueleto da documentação antes de pedir que a IA a escreva.

Dá trabalho definir o formato da resposta para que ela encaixe na chamada de outro modelo, como na pipeline da aula passada.

E dá trabalho quando a IA gera código ruim. Você precisa entender o que saiu errado e ajustar o prompt para ela não repetir o erro. Um jeito é usar few-shot e mostrar exatamente o que não fazer.

Pense num professor de autoescola. Ele não manda o aluno dirigir de novo e torcer. Ele aponta o erro e mostra como não repetir.

Segundo o professor, essas técnicas mudam como você programa, como integra e desenvolve agentes, e até como você usa a IA no chat do dia a dia, no celular, tirando uma dúvida qualquer.

Dá trabalho, e o trabalho é o próprio prompt.

## Sem preguiça, nas tarefas complexas
A frase-âncora aqui é: sem preguiça onde a tarefa é complexa.

Quanto mais você usa prompts bem feitos, melhor fica a resposta. Mas o professor faz uma distinção honesta. Numa tarefa realmente simples, caprichar não faz tanto sentido. O ganho está nas tarefas complexas.

Nelas, as técnicas dão munição para respostas mais precisas e para minimizar alucinações. Minimizar, não eliminar. A IA continua podendo delirar e criar linhas de raciocínio erradas. O trabalho intencional reduz esse risco, não o zera.

O capítulo termina com um desafio. Crie um prompt para descobrir bugs. Crie um para gerar documentação. Crie um para explorar alternativas numa decisão técnica. Use os exemplos do repositório da disciplina como ponto de partida.

Sem preguiça onde a tarefa é complexa.

## Comparando as técnicas do capítulo
Como esta aula fecha o capítulo, vale separar as técnicas que costumam se confundir.

Zero-shot, one-shot e few-shot diferem pela quantidade de exemplos no prompt. Nenhum, um ou vários. Eles moldam a resposta pelo exemplo, não pelo raciocínio.

O Chain of Thought pede o raciocínio em sequência, numa linha só. A self-consistency roda vários raciocínios e fica com a resposta que se repete. A diferença é essa: um caminho contra vários caminhos votando.

O Tree of Thought também abre vários caminhos, mas não para votar. Ele avalia os caminhos e escolhe o melhor. Self-consistency confere uma resposta. Tree of Thought explora opções.

O ReAct se distingue pela ação. Ele pensa, age, observa o resultado e só então pensa de novo.

E o prompt chaining não é uma forma de raciocinar. É uma forma de organizar tarefas: várias etapas, cada uma com seu prompt, a saída de uma alimentando a próxima.

## Revisão
As frases-âncora desta aula, em sequência.

Antes do prompt, vêm as perguntas.

Clareza da saída primeiro, passo a passo só com necessidade real.

Abuse da exploração enquanto desenvolve.

Dá trabalho, e o trabalho é o próprio prompt.

Sem preguiça onde a tarefa é complexa.

Agora, três perguntas.

Primeira pergunta: por que, segundo o professor, tudo fica mais complexo do Chain of Thought em diante?

[pausa 5]

Resposta: porque essas técnicas geram linhas de pensamento que a IA reaproveita para chegar à resposta. Zero-shot, one-shot e few-shot ficam de fora desse grupo.

Segunda pergunta: um sistema de alto volume pede passo a passo em todo chamado simples. Qual é o problema?

[pausa 5]

Resposta: o passo a passo virou hábito sem necessidade real, e em sistemas cada raciocínio extra gasta tokens.

Terceira pergunta: a IA repete o mesmo erro no código. O que o professor sugere?

[pausa 5]

Resposta: entender o que saiu errado e ajustar o prompt, por exemplo com few-shot mostrando o que não fazer.
