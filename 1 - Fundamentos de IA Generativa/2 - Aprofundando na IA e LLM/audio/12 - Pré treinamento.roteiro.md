# Pré treinamento

## Abertura
Na aula passada, fechamos a montagem do Transformer com a conexão residual e a LayerNorm. Terminamos com uma arquitetura pronta, mas vazia. Ela ainda não sabe nada.

Hoje começa a parte em que ela aprende. A primeira etapa se chama pré-treinamento.

Vamos ver de onde vêm os dados, por que eles não precisam de rótulo, e como funciona a técnica que os GPTs usam para aprender: a CLM, Causal Language Modeling, ou modelagem causal de linguagem. No fim, vamos ver como o modelo mede o próprio erro.

## Muito texto, de todo lugar
Frase-âncora: no pré-treinamento, o modelo aprende pela exposição a uma quantidade enorme de texto.

Pense em como uma criança aprende a falar. Ninguém dá a ela uma aula de gramática aos dois anos. Ela simplesmente ouve conversa o dia inteiro, durante anos. De tanto ouvir, começa a perceber como as frases se encaixam.

O pré-treinamento faz algo parecido, só que numa escala absurda. O modelo lê livros, sites, artigos, código, fóruns e conversas da internet. O objetivo não é ensinar uma tarefa. É fazer o modelo absorver os padrões da língua. E aqui o que vale é volume e variedade.

Por isso os dados viraram um recurso disputado. O professor lembra que as grandes empresas de tecnologia brigam há tempos pelas redes sociais. Rede social é um mar de texto e de interação humana real. E tem um detalhe: quase tudo o que existe na web já foi transformado em tokens e usado para treinar modelos. Dado novo ficou escasso, e por isso virou ouro. A disputa deixou de ser só por poder de computação. Agora é também por acesso a dados.

Repetindo: no pré-treinamento, o modelo aprende pela exposição a uma quantidade enorme de texto.

## Sem rótulos
Frase-âncora: o pré-treinamento não precisa de rótulo; basta ter texto.

Rotular é explicar ao modelo o que ele está vendo. Imagine uma pilha de fotos. Rotular é pegar cada foto e escrever uma etiqueta: praia, aniversário, viagem. Depois as fotos vão para caixinhas, cada uma com seu assunto.

O exemplo do professor é um modelo que detecta sentimento. Alguém pega a frase "este produto é ótimo" e cola a etiqueta positivo. Pega "o atendimento foi horrível" e cola a etiqueta negativo. Com muitos exemplos assim, o modelo aprende que ótimo, bom e legal puxam para o positivo, e que péssimo, ruim e horrível puxam para o negativo.

Funciona. O problema é o custo. Alguém precisou etiquetar frase por frase. Dá para automatizar uma parte, mas o trabalho continua chato e caro. E a mesma frase pode receber etiquetas diferentes, dependendo do que se quer treinar.

O pré-treinamento pula tudo isso. O modelo não precisa saber se está lendo um artigo de medicina, uma cláusula de contrato ou um código em Python. O professor chama isso de treinamento não supervisionado: não há ninguém explicando nada. O texto entra cru.

É isso que permite escalar para bilhões de tokens. E o resultado é um modelo geral, que não ficou preso a uma tarefa. Depois, ele pode ser adaptado a uma tarefa específica com o fine-tuning, que vem mais adiante.

Repetindo: o pré-treinamento não precisa de rótulo; basta ter texto.

## Padrão, não compreensão
Frase-âncora: o modelo aprende a forma da língua, não o significado do que lê.

Alguém já deve ter ouvido que a IA é uma inteligência que não é inteligente. O professor acha que a frase tem certo sentido. O modelo não sabe se está ensinando a montar um foguete ou a fazer um bolo. Ele sabe como as frases se montam.

Pense num papagaio muito, muito sofisticado. Ele aprendeu tão bem os padrões de uma língua que escreve textos longos, bem estruturados, com sintaxe impecável. Às vezes melhor do que muita gente. Mas o que ele domina é a estrutura, não o assunto.

Isso já basta para gerar texto fluente. E é por isso que um texto bem escrito por um modelo não prova que ele entendeu o tema.

Repetindo: o modelo aprende a forma da língua, não o significado do que lê.

## Prever a próxima palavra
Frase-âncora: na CLM, o modelo aprende tentando adivinhar a próxima palavra.

A CLM é a técnica usada pelos GPTs. A ideia é simples de enunciar. O modelo recebe o começo de uma frase e tenta adivinhar o que vem depois.

Imagine uma brincadeira de completar a frase. Alguém diz: o céu hoje está muito. E você completa: azul. Ou: nublado. As duas respostas fazem sentido. O modelo faz isso bilhões de vezes, com todo tipo de texto.

Isso lembra o bigrama, lá do começo do curso. O bigrama também previa a próxima palavra. Mas o professor faz questão de dizer que não é tão simples assim. A CLM roda em cima de toda a arquitetura que vimos: atenção, muitas camadas, processamento em paralelo. É o mesmo princípio, numa versão muito mais evoluída.

Repetindo: na CLM, o modelo aprende tentando adivinhar a próxima palavra.

## Causal: só olhar para trás
Frase-âncora: causal quer dizer que o modelo só pode usar o que veio antes.

A palavra causal vem de causa e efeito. A próxima palavra é causada pelas anteriores. Ela depende do que já foi dito.

Imagine que você está lendo um livro com um cartão tapando o resto da página. Você só enxerga até a palavra atual. Tenta adivinhar a próxima. Depois desce o cartão uma palavra e confere. Você nunca pode espiar embaixo do cartão.

Dentro do modelo, esse cartão se chama máscara causal. Ela impede o modelo de olhar para a frente. Para prever um token, ele só usa os tokens à esquerda.

Por que essa regra faz sentido? Porque é assim que o modelo vai trabalhar depois. Quando ele gera uma resposta, o resto da frase ainda não existe. Ele só tem o que já escreveu. Treinar com a mesma regra deixa o treino parecido com o uso real.

Repetindo: causal quer dizer que o modelo só pode usar o que veio antes.

## Prever, comparar, corrigir
Frase-âncora: o modelo prevê, compara com o token real e corrige os pesos.

Como o treino acontece na prática? Pega-se um texto completo e divide-se em tokens. O modelo recebe só um pedaço. O token seguinte fica guardado, escondido.

O modelo faz a previsão. Aí a previsão é comparada com o token real. Suponha a frase: o cachorro correu para o parque. O modelo previu portão. Errou.

Esse erro vira uma correção. Ela volta por toda a rede, do fim para o começo, pelo backpropagation, a retropropagação. E ajusta os pesos e vieses de todas as camadas. É aqui que a conexão residual e a LayerNorm da aula passada mostram o valor delas: é esse caminho de volta que elas deixam mais estável.

O professor compara com uma criança aprendendo. Ela faz errado, alguém avisa que não é por ali, e ela ajusta. Repita isso bilhões de vezes e o modelo fica muito bom em prever continuações plausíveis.

Repetindo: o modelo prevê, compara com o token real e corrige os pesos.

## Medir o tamanho do erro
Frase-âncora: a Cross Entropy Loss mede quão longe a previsão ficou da resposta certa.

Para corrigir, é preciso medir o erro. Quem faz isso é a função de perda. A mais usada aqui é a Cross Entropy Loss, ou perda de entropia cruzada.

O ponto importante é que ela não olha só se acertou ou errou. Ela mede a distância.

Pense na previsão do tempo. Dois meteorologistas erraram. Um disse quarenta por cento de chance de chuva. O outro disse dois por cento. Choveu. Os dois erraram, mas o segundo errou muito mais feio: deu quase nenhuma chance ao que aconteceu.

A entropia cruzada funciona assim. O modelo não escolhe só uma palavra; ele distribui chances entre várias. Se deu pouca chance à palavra certa, a perda é grande. Se deu bastante, a perda é menor. Essa distância é o sinal que orienta a correção. Sem uma função de perda assim, treinar seria muito mais difícil e caro.

Repetindo: a Cross Entropy Loss mede quão longe a previsão ficou da resposta certa.

## Quem usa a CLM
Além dos GPTs, outros modelos conhecidos usam a CLM. O professor cita o DeepSeek, que segundo ele a usa de forma ainda mais otimizada, por ter menos poder de processamento. Cita também o Mistral e o Llama.

O que essa técnica entrega é fluidez e coerência em textos longos e generalistas, que é exatamente o que essas IAs produzem. E a CLM não é a única abordagem de pré-treinamento. Tem mais uma, que vem na sequência.

## Comparando com os vizinhos
Primeira comparação: bigrama contra CLM. Os dois preveem a próxima palavra. O bigrama olhava só a palavra anterior e contava com que frequência cada par aparecia. A CLM usa tudo o que veio antes, à esquerda, e aprende ajustando os pesos de uma rede enorme, não montando uma tabela.

Segunda comparação: dado rotulado contra dado cru. No rotulado, um humano diz o que cada exemplo é: positivo, negativo. No pré-treinamento, ninguém diz nada. A resposta certa vem do próprio texto: é o próximo token, que estava escondido.

Terceira comparação: pré-treinamento contra fine-tuning. O pré-treinamento dá ao modelo os padrões gerais da língua, com uma montanha de texto. O fine-tuning, que vem depois, adapta esse modelo geral a uma tarefa.

Quarta comparação: a aula passada contra esta. A conexão residual e a LayerNorm são peças da arquitetura. O backpropagation de hoje é o caminho de volta do erro. As peças da aula passada existem para que esse caminho funcione bem numa rede com muitas camadas.

## Revisão
Primeiro, as frases-âncora em sequência.

No pré-treinamento, o modelo aprende pela exposição a uma quantidade enorme de texto.

O pré-treinamento não precisa de rótulo; basta ter texto.

O modelo aprende a forma da língua, não o significado do que lê.

Na CLM, o modelo aprende tentando adivinhar a próxima palavra.

Causal quer dizer que o modelo só pode usar o que veio antes.

O modelo prevê, compara com o token real e corrige os pesos.

A Cross Entropy Loss mede quão longe a previsão ficou da resposta certa.

Agora, algumas perguntas.

Primeira pergunta: se ninguém rotula o texto, de onde vem a resposta certa no pré-treinamento?

[pausa 5]

Resposta: do próprio texto. O token seguinte fica escondido, e a previsão do modelo é comparada com ele.

Segunda pergunta: por que dispensar rótulos foi tão importante?

[pausa 5]

Resposta: porque rotular à mão é caro. Sem rótulos, o treino escala para bilhões de tokens e o modelo aprende de forma geral.

Terceira pergunta: na frase o cachorro correu para o parque, para prever a palavra para, o que o modelo pode olhar?

[pausa 5]

Resposta: só o que vem antes: o cachorro correu. A máscara causal esconde tudo o que vem depois.

Quarta pergunta: dois modelos erraram a mesma palavra. Um deu quarenta por cento de chance à certa, o outro deu dois por cento. Qual tem a perda maior?

[pausa 5]

Resposta: o que deu dois por cento. A entropia cruzada mede a distância até a resposta certa, não só se errou.

Quinta pergunta: um modelo escreve um texto técnico impecável. Isso prova que ele entendeu o assunto?

[pausa 5]

Resposta: não. Ele domina os padrões da língua. Como diz o professor, ele não sabe se está ensinando a fazer um foguete ou um bolo.
