# Explorando soluções

## Abertura

Na aula passada, você viu um modelo dar nota alta para duas frases de sentidos opostos. A lição foi simples: ele não entende o que você diz, ele faz um cálculo.

Hoje essa lição vira decisão prática. Se o modelo não adivinha sua intenção, como você consegue dele o que precisa, gastando o mínimo possível?

Esta aula abre o trecho final do curso. O professor anuncia três temas: estratégias de prompt, RAG e mais alguns detalhes de fine-tuning. E a aula de hoje fica no primeiro: o que é engenharia de prompt e por que ela importa.

A pergunta que guia tudo é esta: como gerar o máximo impacto, com o menor custo e a melhor eficiência, sem perder o controle do que sai? Ela vale para quem usa um chat, e vale mais ainda para quem constrói um produto em cima de um modelo.

## O óbvio precisa ser dito

A frase-âncora deste bloco é: o óbvio precisa ser dito.

Engenharia de prompt é criar instruções de texto específicas para o modelo. E aqui está a pegadinha: isso não é o mesmo que escrever bem. Muita gente escreve muito bem e ainda assim dá instruções ruins.

Pense em pedir a um vizinho que cuide do seu cachorro. Se você disser só "cuida dele para mim", ele vai fazer alguma coisa. Talvez até algo bom. Mas ele não sabe a hora da ração, nem quanto dar, nem que o cachorro puxa a guia perto da avenida. Para você, tudo isso é óbvio. Para ele, não existe. Sua frase pode estar perfeita em português e continuar faltando o que importa.

Com o modelo é igual. "Me ajude com este resumo" produz uma resposta aceitável. Agora compare com: resuma o texto abaixo em até cinco linhas, com linguagem simples, destacando os principais argumentos. Você definiu limite, linguagem e foco. O professor chama isso de nichar o pensamento do modelo.

O que isso resolve? Tira a ambiguidade do pedido e aproxima a resposta do que você precisa.

Onde quebra? Quando a tarefa não pode falhar, escrever uma instrução boa fica bem mais difícil. O professor conta que achava que sabia fazer prompt, e só depois de nove meses estudando percebeu que o buraco era mais embaixo.

Repetindo: o óbvio precisa ser dito. Agora, por que começar justamente pelo prompt, e não por outra estratégia?

## O caminho mais barato no tiro curto

A frase-âncora aqui é: o prompt muda o comportamento sem mudar os pesos.

Existem três formas de deixar um modelo mais propenso ao que você precisa: engenharia de prompt, fine-tuning e RAG, a geração aumentada por recuperação. Em uma construção de tiro curto, o prompt é a mais barata.

Pense em um carro alugado. Você pode dizer ao motorista exatamente para onde ir e por qual caminho. Isso é o prompt. O carro continua igual. Quando a corrida termina, nada mudou nele, e o próximo passageiro precisa dar as próprias instruções. Abrir o motor e alterar o carro é outro nível de esforço.

É isso que o prompt faz: orienta a geração sem alterar a arquitetura nem os pesos. Daí vem uma consequência importante. Ninguém ensinou nada ao modelo. Se você tirar o prompt, ele volta a responder como antes.

O que isso resolve? Você testa e melhora o resultado sem equipe especializada e sem infraestrutura de treino.

Onde quebra? Nem todo problema se resolve com uma instrução melhor. Já vamos chegar lá.

Repetindo: o prompt muda o comportamento sem mudar os pesos. E essa é a primeira das quatro razões para ele ser tão importante.

## Razão um: eficiência sem retreinar

A frase-âncora é: uma instrução boa custa menos que um treino novo.

Treinar um modelo de novo é caro e demorado, e exige um time capaz de fazer isso. Você dificilmente faria sozinho. Um prompt bem escrito, em muitos casos, entrega o que você precisa por uma fração desse esforço.

O exemplo do professor: "escreva um parágrafo sobre o clima". Pode vir qualquer coisa. Em um uso real, isso não serve. Agora: escreva um parágrafo informativo, em linguagem jornalística, explicando o impacto do El Niño no clima do Brasil em 2023. Tema, estilo e escopo ficaram fechados.

Aqui vale separar duas coisas que se confundem. Os parâmetros, como a temperatura, ajustam o comportamento probabilístico. O prompt define a direção da resposta. Por isso, baixar a temperatura de um pedido vago não resolve: você só recebe uma resposta genérica de forma mais estável.

Repetindo: uma instrução boa custa menos que um treino novo. Mas o ganho não é só de custo. Também é de precisão.

## Razão dois: precisão

A frase-âncora é: precisão não é perfeição, é aderência ao esperado.

Sem uma instrução clara, não dá para esperar uma resposta precisa. Um prompt bem estruturado diminui a liberdade de interpretação do modelo.

Agora a parte que surpreende. O professor fez a mesma pergunta dez vezes e recebeu dez respostas diferentes. E o tamanho dessa variação depende do modelo. Um prompt melhor ajuda a estabilizar o comportamento, mas não transforma o modelo em uma calculadora, que devolve sempre o mesmo número.

É como dar uma receita detalhada a dez cozinheiros. Os dez bolos saem bem mais parecidos do que se você dissesse só "faz um bolo". Mas não saem idênticos.

Isso pesa em tarefas críticas: geração de código, diagnóstico, resposta a clientes. Nelas, o cuidado com a instrução precisa ser maior.

Repetindo: precisão não é perfeição, é aderência ao esperado. E, além de precisão, há dinheiro na mesa.

## Razão três: economia de tokens

A frase-âncora é: o que conta é o custo total até a resposta útil.

Parece contraditório. Um prompt detalhado tem mais palavras, então gasta mais tokens na entrada. Como isso pode economizar?

A resposta está no caminho inteiro. Uma pergunta aberta costuma pedir várias voltas para corrigir o rumo, e cada volta consome tokens. Uma instrução específica reduz esse retrabalho. É como pedir direções: uma explicação mais longa na saída pode evitar meia hora de voltas pelo bairro.

Só que o peso disso muda com o cenário. Em uma assinatura de chat já paga, dá para fazer muitas perguntas à vontade. Em um plano grátis, os tokens acabam depois de certo uso. Em um gerador de vídeo com créditos mensais, o professor cita de memória um exemplo: créditos para dez vídeos, e com prompts ruins você aproveitaria três. O resto vai para o lixo.

E, em uma empresa, o efeito cresce com o volume. Pequenas ineficiências se multiplicam rápido, porque cada chamada de cada usuário vira custo. O volume não dilui o desperdício, ele soma o desperdício.

Repetindo: o que conta é o custo total até a resposta útil. Por último, vem a razão que interessa a quem constrói sistemas.

## Razão quatro: controle e testes

A frase-âncora é: prompt explícito se testa.

Quando o prompt é tratado como uma peça de engenharia, ele pode ser comparado, versionado e testado. Você pode fazer um teste A B entre estilos de resposta: mais simpático ou menos simpático, mais aberto ou mais nichado. E, com o melhor deles, automatizar um fluxo com consistência.

Imagine um atendimento em que cada pessoa escreve o prompt do seu jeito, a cada conversa. Se a empresa quiser saber qual estilo funciona melhor, não há o que comparar. Sem uma instrução fixa e explícita, não dá para repetir nem medir o resultado.

Repetindo: prompt explícito se testa. Até aqui, só falamos do que o prompt faz. E quando ele não basta?

## Quando o prompt não basta

A frase-âncora é: comece pelo prompt e avance quando o ganho justificar.

O resumo do professor completa o panorama com dois casos.

No primeiro, falta informação. Imagine um assistente interno com um prompt excelente que responde com a regra antiga de uma política que mudou na semana passada. Instrução nenhuma traz um dado que o modelo não tem. Esse é o terreno do RAG: o problema exige informação externa ao prompt.

No segundo, falta adaptação. O prompt já foi testado, a informação está disponível, e mesmo assim o modelo não chega ao comportamento necessário. Aí entra o fine-tuning. Ele custa mais porque mexe no processo de treinamento, exigindo tempo, recursos e capacidade técnica. Só vale quando o ganho esperado paga esse investimento.

Repetindo: comece pelo prompt e avance quando o ganho justificar.

## Para não confundir

Vamos separar os quatro vizinhos, porque eles se misturam com facilidade.

Parâmetros de geração, como a temperatura, mudam como o modelo escolhe entre os tokens. Não dizem nada sobre o que você quer.

O prompt diz o que você quer. Não muda o modelo, e vale apenas para a chamada em que foi enviado.

O RAG entrega ao modelo informação que ele não tem. Não muda os pesos: muda o que chega até ele.

O fine-tuning muda os pesos. É o único dos quatro que altera o modelo em si, e por isso é o mais caro.

Uma forma rápida de lembrar é pelo sintoma. Resposta vaga pede prompt. Resposta desatualizada pede RAG. Resposta instável demais, ou criativa demais, pede que você olhe também a temperatura. E comportamento que nada disso alcança pede fine-tuning.

## Revisão

Vamos às frases-âncora, em sequência.

O óbvio precisa ser dito.

O prompt muda o comportamento sem mudar os pesos.

Uma instrução boa custa menos que um treino novo.

Precisão não é perfeição, é aderência ao esperado.

O que conta é o custo total até a resposta útil.

Prompt explícito se testa.

Comece pelo prompt e avance quando o ganho justificar.

Agora, algumas perguntas.

Primeira pergunta: alguém reescreve um pedido genérico em frases mais elegantes, sem acrescentar limite, formato nem foco. O que esperar?

[pausa 5]

Resposta: a resposta continua pouco direcionada. O ganho vem de especificar o pedido, não de o texto soar melhor.

Segunda pergunta: um colega manda a mesma pergunta pela API, sem o prompt que sua equipe refinou por semanas, e recebe uma resposta genérica. Por quê?

[pausa 5]

Resposta: porque o prompt não altera os pesos. Ele orienta a chamada em que é enviado. Sem ele, o modelo responde como antes.

Terceira pergunta: um prompt detalhado tem três vezes mais tokens de entrada que o genérico. Isso contradiz a economia de tokens?

[pausa 5]

Resposta: não necessariamente. O que conta é o custo total até a resposta útil, e menos tentativas e correções podem compensar a entrada maior.

Quarta pergunta: um assistente com um ótimo prompt responde com uma regra que mudou na semana passada. Qual é a estratégia indicada?

[pausa 5]

Resposta: RAG. O problema é acesso a informação externa ao prompt, não a qualidade da instrução.

Na próxima aula, o professor entra nas estratégias reais de prompt. Até lá.
