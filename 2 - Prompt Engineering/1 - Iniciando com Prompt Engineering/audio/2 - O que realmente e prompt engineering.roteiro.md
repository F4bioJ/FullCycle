# O que realmente é prompt engineering

## Abertura

Na aula passada, você viu o mapa da disciplina. O foco não é só o que pedir à IA, e sim como pedir.

Agora vem a pergunta de base. O que é prompt engineering, afinal? E por que isso não é só mais uma palavra da moda?

Vamos passar por três ideias. Primeiro, de onde vem a diferença na resposta. Depois, o que separa um pedido vago de um pedido intencional. Por fim, onde isso entra no trabalho de quem desenvolve software.

## De hype a diferença real

A primeira ideia é esta: a distância entre uma resposta ruim e uma boa está em como você trabalha com a IA.

O professor conta que também desconfiou do termo. Quando ouviu falar pela primeira vez, pensou: inventaram mais uma profissão, mais uma palavra para a sopa de letrinhas.

O que mudou a opinião dele foi o resultado ruim. Ele usava agentes para codificar, fazia perguntas no chat, e tudo voltava superficial. Depois de estudar o assunto a fundo, a diferença apareceu.

A comparação que ele usa é forte. É como fazer a mesma pergunta a um adolescente e a um pós-doutor. As duas respostas ficam muito distantes, em quantidade e em qualidade.

Cuidado com uma leitura errada dessa imagem. Ela não fala de modelo barato contra modelo caro. Ela fala da forma de instruir. Com o mesmo modelo, a instrução pode levar você a um lado ou ao outro.

E o que é prompt engineering, então? Os sistemas de IA generativa são feitos para produzir respostas específicas, com base na qualidade do prompt que recebem. Prompt engineering é construir instruções com intenção, para chegar ao resultado esperado. Isso vale de um comando simples até uma questão muito técnica.

O professor acrescenta que essa construção tem um lado criativo. Criativo aqui não quer dizer texto bonito. Quer dizer escolher bem a forma de instruir o modelo, sem perder o controle do resultado.

Repetindo a ideia: a distância entre uma resposta ruim e uma boa está em como você trabalha com a IA.

## Uso ingênuo e uso intencional

A segunda ideia é esta: instrução vaga é lacuna, e o modelo preenche a lacuna por conta própria.

Pense num exemplo fora da tecnologia. Você contrata alguém novo para passear com o seu cachorro e diz apenas: leva ele para dar uma volta. A pessoa vai fazer alguma coisa. Só que ela decide sozinha o trajeto, o tempo, se solta a guia, se passa perto de outros cães. O passeio acontece, e pode ser bem diferente do que você queria.

Com o modelo é parecido. Um pedido vago volta com algo plausível, que parece certo, mas com pouca utilidade prática. Esse é o uso ingênuo.

O uso intencional explicita o que estava solto. Qual é o objetivo? Qual é o escopo? Que profundidade você quer? Como você vai saber que a saída está boa? Quando isso está dito, a chance de receber algo útil e consistente sobe bastante.

O que isso resolve? Uma confusão comum. Muita gente vê uma resposta fraca e conclui que precisa de um modelo melhor. Muitas vezes, a diferença está menos no modelo e mais na instrução.

E onde a ideia quebra? Ela não promete acerto. Explicitar aumenta a chance de uma boa resposta, mas não a garante.

Repetindo: instrução vaga é lacuna, e o modelo preenche a lacuna por conta própria.

## Onde ajuda no desenvolvimento

A terceira ideia é esta: prompt engineering não é só para escrever código. Ele atravessa todo o ciclo de engenharia de software.

Antes de tudo, um recado sobre o curso. Os exemplos serão da nossa área, de propósito, para todo mundo falar a mesma língua. Para quem trabalha com marketing, o ensino e os exemplos seriam outros.

No dia a dia, a lista é longa. Criar e manter software. Automatizar tarefas repetitivas. Conseguir soluções rápidas. Apoiar processos complexos, em que você precisa de uma linha de raciocínio bem guiada. Gerar documentação e design docs. Fazer code review, brainstorming e commits.

O detalhe importante é o seguinte. Em cada uma dessas tarefas, a instrução muda o resultado. Num code review, um pedido genérico traz comentários genéricos. Já um pedido que manda avaliar risco, padrões e possíveis regressões traz algo que você consegue usar.

O mesmo vale para o agente de codificação. O professor fala em pilotar o agente, e a palavra é boa. Um agente não fica eficaz só por existir. Ele precisa saber o objetivo, os limites, o contexto do repositório e a saída esperada. Sem isso, ele tende a agir de forma errática.

E o ciclo completo? A engenharia de software vai da documentação até a confiabilidade do sistema em produção. Cada etapa tem necessidades próprias, e o prompt acompanha essa variação. O ganho final é produtividade, com mais direção e menos tentativa aleatória.

Repetindo: prompt engineering não é só para escrever código. Ele atravessa todo o ciclo de engenharia de software.

O professor encerra avisando que existem outros prismas em que isso faz parte do seu dia, e esse é o assunto da próxima aula.

## O que não confundir

Vamos separar três pares que costumam se misturar.

Primeiro par: saber o que pedir e saber como pedir. Na aula passada, o foco da disciplina ficou no como. Você pode saber exatamente o que quer e, mesmo assim, receber algo fraco, porque o pedido deixou lacunas.

Segundo par: trocar o modelo e melhorar a instrução. Trocar o modelo muda quem responde. Melhorar a instrução muda o que ele recebe. Diante de uma resposta superficial, olhe primeiro para a instrução.

Terceiro par: conversar com um chatbot e praticar prompt engineering. Conversar é uma situação isolada. A prática é transversal e acompanha o trabalho de engenharia inteiro.

## Revisão

Vamos às frases-âncora. A distância entre uma resposta ruim e uma boa está em como você trabalha com a IA. Instrução vaga é lacuna, e o modelo preenche a lacuna por conta própria. Prompt engineering não é só para escrever código, ele atravessa todo o ciclo de engenharia de software.

Agora, três perguntas.

Primeira pergunta: na comparação entre o adolescente e o pós-doutor, o que está sendo comparado?

[pausa 5]

Resposta: a distância entre as respostas conforme a forma de trabalhar com a IA. A imagem não compara modelos baratos e caros.

Segunda pergunta: você pede a um agente que melhore um módulo, e ele mexe em arquivos que não devia. O que faltou dizer?

[pausa 5]

Resposta: o objetivo, os limites, o contexto do repositório e a saída esperada. Sem isso, o agente decide sozinho.

Terceira pergunta: um time quer usar prompt engineering só para gerar código. O que ele deixa de aproveitar?

[pausa 5]

Resposta: as outras etapas do ciclo, como documentação, code review e confiabilidade em produção. Cada uma tem necessidades próprias que um bom prompt pode atender.
