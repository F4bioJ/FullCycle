# Otimização para grandes modelos

## Abertura
Nas últimas aulas, a gente viu como um modelo de linguagem fica bom. Primeiro o pré-treino, depois o fine tuning supervisionado, e na aula passada o RLHF, o aprendizado por reforço com feedback humano.

Tudo isso tem um problema em comum. Custa caro. Os modelos cresceram demais. São bilhões de parâmetros, muita memória, muita placa de vídeo.

Esta aula é sobre isso. Como deixar um modelo grande mais barato de ajustar, mais leve de rodar e mais fácil de especializar.

São quatro técnicas. LoRA. Quantização. Mistura de especialistas. E P-Tuning com Prefix Tuning.

Guarde uma ideia desde já. Cada técnica ataca um gargalo diferente. Se você souber qual é o gargalo, sabe qual técnica usar.

## LoRA
Frase-âncora: o LoRA congela o modelo e treina só uma camadinha extra.

LoRA quer dizer Low-Rank Adaptation. Adaptação de baixo posto, em tradução livre. O nome assusta, a ideia é simples.

No fine tuning completo, você mexe em todos os pesos do modelo. Todos. É como reformar a casa inteira só porque você quer uma cozinha nova.

O LoRA faz diferente. Ele congela os pesos originais. Ninguém mexe neles. E acrescenta camadas novas, pequenas, de baixa complexidade. Só essas camadas são treinadas.

Pense numa casa pronta. Em vez de derrubar paredes, você coloca uns móveis planejados na cozinha. A casa continua a mesma. A cozinha agora funciona do jeito que você precisa.

O exemplo da aula é bom. Uma empresa brasileira quer pegar o Llama 2 e prepará-lo para atendimento jurídico em português. Refazer o treino do modelo inteiro seria caríssimo. Com LoRA, dá para especializar gastando bem menos.

O que ele resolve? Menos tempo de treino. Menos memória durante o treino. E menos risco de sobreajuste, que é quando o modelo decora os exemplos em vez de aprender.

Onde ele quebra? Ele não é de graça. O professor insiste nisso. Sai bem mais barato que o ajuste completo, mas ainda custa algum dinheiro. E tem outra coisa importante. O LoRA barateia o ajuste. Ele não deixa o modelo menor. Os pesos originais continuam todos lá, congelados, e ainda ganham camadas novas.

Então, se o seu problema não é ajustar o modelo, e sim rodar o modelo numa máquina fraca, o LoRA não é a resposta. Para isso existe a próxima técnica.

Frase-âncora de novo: o LoRA congela o modelo e treina só uma camadinha extra.

## Quantização
Frase-âncora: a quantização guarda cada peso com menos bits, para o modelo caber e rodar em máquina modesta.

Agora o problema é outro. O modelo já está pronto. Você só quer rodá-lo. Mas ele exige uma placa de vídeo enorme e muita memória.

Os pesos de um modelo costumam ser guardados como números com vírgula, de alta precisão. Ponto flutuante de trinta e dois ou de dezesseis bits. A quantização converte esses números para inteiros com bem menos bits. Inteiro de oito bits, chamado INT oito. Ou inteiro de quatro bits, o INT quatro.

O professor compara com zipar um arquivo. Mas tem uma diferença. O zip serve para guardar. Para usar, você descompacta. A quantização não. O modelo roda já na forma leve. É aí que está o ganho.

Uma imagem do dia a dia. Pense numa régua com marcação de milímetro. Agora troque por uma régua só com marcação de centímetro. Ela é mais simples, mais rápida de ler. Para a maioria das medidas, serve. Mas você perde um pouco de precisão.

O exemplo da aula. O Mistral sete B tem uns treze gigas. Quantizado para INT quatro, cai para uns quatro gigas. Aí ele roda num notebook comum, em ferramentas como Ollama ou LM Studio. Roda até em processador, sem placa de vídeo grande.

O que ela resolve? Menos memória, execução mais rápida, modelo rodando localmente.

Onde ela quebra? A qualidade cai. Pouco, mas cai. O professor diz que fica "pioradinho". Por isso é um meio-termo. Quanto menos bits, mais leve e mais perda. INT quatro é mais leve que INT oito, e tende a perder mais. Se as respostas pioraram demais, um nível menos agressivo é o primeiro ajuste a testar.

Repare que a quantização deixa cada peso mais leve, mas o modelo inteiro continua trabalhando em toda pergunta. A próxima técnica ataca justamente isso.

Frase-âncora de novo: a quantização guarda cada peso com menos bits, para o modelo caber e rodar em máquina modesta.

## Mistura de especialistas
Frase-âncora: na mistura de especialistas, um roteador chama só os especialistas certos para cada pergunta.

Em inglês, Mixture of Experts. A sigla é MoE.

A observação de partida é esta. Num modelo gigante, nem todas as partes precisam trabalhar em toda entrada. Uma pergunta sobre tradução não precisa da parte que entende de matemática.

Então o modelo é dividido em vários especialistas. São submodelos, como se você modularizasse o modelo em micro modelos. E existe uma rede roteadora. Ela olha a entrada e decide quais especialistas chamar. Só eles trabalham naquela resposta.

Pense num hospital grande. Você chega na triagem. A enfermeira olha seu caso e manda você para o ortopedista. Você não passa pelo cardiologista, pelo dermatologista e pelo neurologista. O hospital tem todos eles, mas só um atende você. A triagem é o roteador.

Para quem é de desenvolvimento, o professor compara com roteamento e balanceamento de carga.

O exemplo da aula é o Switch Transformer, do Google. Mais de um trilhão de parâmetros. Mas cada entrada aciona só uma pequena fração dos especialistas.

O que ele resolve? Reduz o custo de cada inferência e permite escalar o modelo. Você pode ter um modelo enorme no total sem pagar para ativá-lo inteiro a cada pergunta.

Onde ele quebra? Tudo depende do roteador mandar a entrada para o especialista certo. E o MoE não é uma técnica para pegar um modelo pronto e adaptá-lo a uma tarefa nova. É um jeito de organizar o modelo por dentro.

Para adaptar um modelo sem tocar nele, existe a última técnica.

Frase-âncora de novo: na mistura de especialistas, um roteador chama só os especialistas certos para cada pergunta.

## P-Tuning e Prefix Tuning
Frase-âncora: P-Tuning e Prefix Tuning especializam o modelo pela entrada, sem mexer no modelo.

Até agora, quase tudo mexia no modelo. O LoRA acrescentava camadas. A quantização mudava os pesos. Aqui a regra é outra. O modelo fica exatamente como está.

O que muda é a entrada. Você coloca, junto com o pedido, um contexto aprendido. Esse contexto orienta o modelo para a tarefa.

No P-Tuning, esse contexto são vetores de entrada. Uma espécie de prompt aprendido em treino. O professor compara a um sidecar, aquele componente que fica do lado da aplicação, dizendo para onde as coisas devem ir.

No Prefix Tuning, a ideia é parecida. Só que o contexto são tokens treinados, colocados no começo da sequência.

A analogia que o professor usa é um jantar elegante. Você chega e alguém te avisa da etiqueta. Você usa os talheres certos, na ordem certa. Mas você não mudou seu jeito de comer no dia a dia. Você só se adequou às instruções que recebeu.

E qual a diferença para um bom prompt escrito à mão? É que aqui o contexto não é redigido por alguém. Ele é aprendido. É engenharia de prompt, só que treinada.

O que resolve? Especializa o modelo sem alterar pesos e sem acrescentar camadas. Serve, por exemplo, quando vários times usam o mesmo modelo e ninguém pode mexer nele.

Onde quebra? O modelo continua do mesmo tamanho e com o mesmo custo de rodar. Se o problema é memória, não adianta. E o ajuste depende do que vai na entrada a cada vez.

Frase-âncora de novo: P-Tuning e Prefix Tuning especializam o modelo pela entrada, sem mexer no modelo.

## Comparando com o que você já viu
Agora vamos separar o que costuma se confundir.

Primeiro, fine tuning completo contra LoRA. Na aula de fine tuning supervisionado, o ajuste mexia em tudo. O LoRA mexe numa camadinha nova e deixa o resto congelado. Os dois são fine tuning. A diferença é quanto do modelo é treinado.

Segundo, LoRA contra P-Tuning. Os dois evitam mexer nos pesos originais. Mas o LoRA acrescenta camadas ao modelo e as treina. O P-Tuning fica do lado de fora, na entrada. Se a regra é nenhuma camada nova, só o P-Tuning atende.

Terceiro, quantização contra mistura de especialistas. As duas barateiam rodar o modelo. A quantização deixa cada peso mais leve, e o modelo inteiro trabalha. A mistura de especialistas não mexe no tamanho de cada peso. Ela põe só uma parte do modelo para trabalhar a cada entrada.

Quarto, o RLHF da aula passada. O RLHF diz o que ajustar: o comportamento, com base na preferência humana. As técnicas desta aula falam de como fazer isso, ou rodar o resultado, gastando menos.

E lembre que dá para combinar. Uma startup com pouca verba pode especializar o modelo com LoRA e depois quantizá-lo para rodar em máquinas modestas.

## Revisão
Vamos às frases-âncora.

O LoRA congela o modelo e treina só uma camadinha extra.

A quantização guarda cada peso com menos bits, para o modelo caber e rodar em máquina modesta.

Na mistura de especialistas, um roteador chama só os especialistas certos para cada pergunta.

P-Tuning e Prefix Tuning especializam o modelo pela entrada, sem mexer no modelo.

Agora, quatro perguntas.

Primeira pergunta: você quer rodar um modelo de treze gigas num notebook comum. LoRA resolve?

[pausa 5]

Resposta: não. O LoRA barateia o ajuste, mas não encolhe o modelo. Os pesos originais continuam lá. Para caber no notebook, a técnica é a quantização.

Segunda pergunta: depois de quantizar para INT quatro, as respostas pioraram um pouco. A conversão deu errado?

[pausa 5]

Resposta: não. É a perda de precisão esperada. Quantização é um meio-termo. Se a perda incomoda, teste INT oito, que é mais pesado e mais fiel.

Terceira pergunta: num modelo com mistura de especialistas, quem decide qual parte trabalha?

[pausa 5]

Resposta: a rede roteadora. Ela olha a entrada e chama só os especialistas certos, como a triagem de um hospital.

Quarta pergunta: qual a diferença entre P-Tuning e um prompt bem escrito à mão?

[pausa 5]

Resposta: no P-Tuning, o contexto que vai na entrada é aprendido em treino, como vetores ou tokens. Ninguém o redige. E, como no prompt, o modelo não é alterado.

Fechando: cada técnica ataca um gargalo. Custo de ajustar, LoRA. Memória para rodar, quantização. Escala de um modelo gigante, mistura de especialistas. Adaptar sem tocar no modelo, P-Tuning e Prefix Tuning.
