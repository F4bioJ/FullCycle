# Top K e Top P

## Abertura
Na aula passada, você mexeu no máximo de tokens, o controle que decide até onde a resposta vai. Naquele teste, o top P ficou aberto, para não atrapalhar. Agora chegou a vez dele, e do irmão dele, o top K.

Os dois respondem à mesma pergunta: na hora de escolher o próximo token, quem pode concorrer?

Eu quero que você saia desta aula com uma distinção bem firme. Top K fixa quantos candidatos ficam. Top P fixa quanta probabilidade esses candidatos precisam cobrir. Essa diferença parece pequena, mas muda o comportamento do modelo a cada token.

Vamos por partes. Primeiro, por que existe escolha. Depois, cada um dos dois cortes. E no fim, como eles convivem com a temperatura.

## A escolha não é fixa
A frase deste bloco é: o modelo sorteia, ele não decide por certeza.

Pense em "o céu hoje estava". O modelo pode dar sessenta por cento para "limpo", e menos que isso para todas as outras palavras. Seria natural imaginar que ele entrega "limpo" e pronto. Só que não é assim. Existe um grau de aleatoriedade nessa escolha.

Imagine uma urna. Cada token candidato coloca nela um número de bolinhas proporcional à sua probabilidade. "Limpo" coloca sessenta bolinhas em cem. Ele é o favorito. Mas a mão que entra na urna pode pegar outra.

Por que aceitar esse risco? Porque um modelo que pega sempre o favorito tem três problemas. Ele fica repetitivo, com dificuldade de criar palavras e contextos novos. Ele pode gerar frases sem sentido, por ir sempre pelo caminho mais direto. E ele fica previsível demais, parecido com aqueles chatbots de árvore de decisão, em que você já sabe o que vem depois.

Só que a urna também tem um problema. Se todo token do vocabulário tiver pelo menos uma bolinha, de vez em quando sai algo muito improvável. A abertura precisa de um limite.

Então, o modelo sorteia, ele não decide por certeza. E alguém precisa decidir quem entra na urna. É aí que entram os dois cortes.

## Top K
A frase deste bloco é: top K fixa quantos candidatos ficam.

Pense no segundo turno de uma eleição. A regra diz que os dois mais votados seguem na disputa. Tanto faz se o segundo colocado teve quarenta por cento ou três por cento dos votos. Foram dois, ficam dois. O top K funciona desse jeito, e o K é o número que você escolhe.

O mecanismo tem três passos. O modelo calcula a probabilidade de todos os tokens possíveis. Ordena do mais provável para o menos provável. E mantém os K primeiros, desprezando o resto naquele passo. Depois disso vem o sorteio, entre os que sobraram.

No exemplo do professor, a frase é "o sol está brilhando no". Com K igual a cinco, ficam céu, horizonte, mar, campo e deserto. O sexto em diante é descartado. E o modelo não entrega sempre céu, porque ainda há o sorteio entre os cinco.

O professor comenta também que o top K não nasceu para modelos de linguagem. É uma técnica estatística, usada em outros lugares.

O que ele resolve? Ele corta a cauda de opções muito improváveis, com uma regra fácil de prever. Você sabe exatamente o tamanho da disputa em cada passo.

E onde ele quebra? No fato de que a regra ignora o quanto o modelo está seguro.

Imagine um passo em que o líder tem noventa e sete por cento. Com K igual a cinco, quatro tokens quase sem chance continuam na urna. Agora imagine o contrário: a probabilidade está espalhada por dezenas de tokens parecidos. Com o mesmo K igual a cinco, você corta muita opção razoável, e os cinco que ficam cobrem só uma parte pequena do total.

Tem um caso extremo que vale guardar. Com K igual a um, só resta um candidato. Não há sorteio possível, e a temperatura não consegue fazer nada a respeito. O texto volta a ser aquele mecânico do começo.

Então, top K fixa quantos candidatos ficam. E essa rigidez é justamente o problema que o próximo corte ataca.

## Top P
A frase deste bloco é: top P fixa quanta probabilidade os candidatos precisam cobrir.

Volte à eleição, mas com outra regra. Agora, seguem na disputa os mais votados, até que juntos somem noventa por cento dos votos. Se um candidato sozinho teve noventa e cinco por cento, só ele segue. Se os votos estão pulverizados, podem seguir dez, quinze candidatos. A regra é a mesma, e o número de finalistas muda conforme a eleição. O top P também é chamado de nucleus sampling, que significa amostragem pelo núcleo: o núcleo é esse grupo de líderes que concentra os votos.

O mecanismo começa igual: ordenar do mais provável para o menos provável. A diferença é a parada. O modelo vai somando as probabilidades, e para quando a soma fica maior ou igual a P. Essa soma tem um nome: massa acumulada de probabilidade.

Vamos fazer a conta do professor, com P igual a noventa por cento. Céu tem trinta e cinco. Horizonte tem vinte e cinco, e a soma vai a sessenta. Mar tem quinze, e vai a setenta e cinco. Campo tem oito, e vai a oitenta e três. Deserto tem sete, e chega a noventa. Parou. O próximo, que é luz, com quatro, fica de fora. O sorteio acontece entre os cinco primeiros.

Um detalhe: nesse exemplo, campo e deserto valem um pouco menos do que no exemplo do top K. Com os valores anteriores, a soma passaria de noventa, mas o corte cairia no mesmo lugar, em deserto.

Agora baixe o P para sessenta por cento. Céu e horizonte já somam exatamente sessenta. Como a regra é maior ou igual, para ali. Dois candidatos. Se fossem precisos três, seriam três.

O que ele resolve? Ele acompanha a incerteza do modelo. Quando o modelo está seguro, poucos tokens já cobrem quase tudo, e o conjunto fica pequeno. Quando está em dúvida, o conjunto cresce sozinho. Aquele líder de noventa e sete por cento, com P de noventa por cento, fica sozinho na urna, sem os quatro figurantes do top K.

Onde ele quebra? Você abre mão de saber quantos candidatos vão concorrer. Em uma distribuição bem espalhada, o conjunto pode ficar grande, e nele entram tokens pouco prováveis. E um valor de P diz pouco por si só, porque o efeito depende do formato da distribuição em cada passo.

Então, top P fixa quanta probabilidade os candidatos precisam cobrir. Falta ver como isso convive com a temperatura.

## Temperatura e os cortes
A frase deste bloco é: temperatura muda as chances, top K e top P mudam quem concorre.

Volte à urna. A temperatura mexe na quantidade de bolinhas de cada candidato. Em temperatura baixa, o favorito fica com quase todas. Em temperatura alta, as quantidades ficam mais parecidas. Ela não muda a ordem dos candidatos: o favorito continua sendo o favorito, só que com menos folga.

O top K e o top P fazem outra coisa. Eles decidem quais candidatos têm direito a colocar bolinhas na urna.

Veja o que acontece com K igual a dois, ao subir a temperatura de zero vírgula um para um. Os dois candidatos continuam sendo os únicos. O terceiro não volta. O que muda é que o segundo passa a sair com mais frequência, porque as chances ficaram mais próximas.

Por isso, os dois tipos de controle se combinam: um ajusta o formato da distribuição, e o outro ajusta o tamanho do espaço de escolha.

E isso traz uma lição prática para o Playground do Hugging Face. Se você sobe a temperatura e baixa o top P na mesma rodada, e o texto muda, você não sabe qual dos dois causou o quê. Mude um por vez, com o mesmo prompt. É o mesmo método da aula passada, quando só o máximo de tokens variava.

## Não confunda os vizinhos
Vamos separar tudo com uma pergunta para cada controle.

Temperatura responde: com que chance cada candidato pode sair? Ela não acrescenta conhecimento ao modelo, e não muda quem está na frente.

Top K responde: quantos candidatos ficam? O número é sempre o mesmo, e a probabilidade coberta varia a cada passo.

Top P responde: quanta probabilidade os candidatos precisam cobrir? A cobertura é sempre a mesma, e o número de candidatos varia a cada passo.

Máximo de tokens responde: até onde a resposta vai? Ele não tem nada a ver com a escolha de cada token. Ele só decide quando a geração para. Se a resposta termina de repente, olhe primeiro para ele. Se a resposta está completa, mas repetitiva ou estranha, olhe para os outros três.

Uma confusão comum é achar que top P de noventa por cento significa que cada token precisa ter noventa por cento de chance. Não é isso. O noventa por cento é a soma do grupo inteiro. Outra é achar que um P mais baixo sempre deixa só o líder. Só deixa se o líder sozinho já atingir o P.

## Revisão
Vamos às frases, em sequência.

O modelo sorteia, ele não decide por certeza.

Top K fixa quantos candidatos ficam.

Top P fixa quanta probabilidade os candidatos precisam cobrir.

Temperatura muda as chances, top K e top P mudam quem concorre.

Agora, quatro perguntas. Tente responder antes da resposta.

Primeira pergunta: o que acontece com um token que está em quarto lugar, quase empatado com o terceiro, quando o K é igual a três?

[pausa 5]

Resposta: ele fica de fora naquele passo. O top K olha só a posição no ranking, e não tem tolerância para empate técnico.

Segunda pergunta: com P fixo em noventa por cento, o conjunto de candidatos fica maior quando o modelo está seguro ou quando está em dúvida?

[pausa 5]

Resposta: quando está em dúvida. Com a probabilidade espalhada, são precisos mais tokens para somar noventa por cento. Quando ele está seguro, poucos bastam.

Terceira pergunta: alguém coloca K igual a um e temperatura bem alta, esperando um texto criativo. O que sai?

[pausa 5]

Resposta: um texto mecânico. Com um só candidato, não há entre quem sortear, e a temperatura não amplia o conjunto.

Quarta pergunta: você sobe a temperatura e baixa o top P ao mesmo tempo, e o texto muda. O que dá para concluir sobre o top P?

[pausa 5]

Resposta: quase nada. Os dois mudaram juntos e agem em camadas diferentes. Para saber o efeito de cada um, mude um de cada vez.

Na próxima aula, você vai ver a variação do top P na prática.
