# Position Wise Layers

## Abertura
Na aula passada, você abriu o capô do Transformer e conheceu a atenção por dentro. Query, key e value. E viu que o modelo usa várias cabeças de atenção ao mesmo tempo.

Hoje entra a segunda peça que fica dentro de cada camada do Transformer. O nome é comprido: position-wise feedforward layers. Em português, camadas feedforward aplicadas posição por posição.

A pergunta da aula é simples. Depois que cada palavra conversou com as outras pela atenção, o que ela faz com o que ouviu? A resposta é este bloco.

## Onde o bloco entra
A frase-âncora deste bloco é: primeiro a atenção, depois o feedforward, em cada camada.

A ordem é sempre essa. A atenção decide quais palavras olham para quais. Logo em seguida, o resultado de cada palavra passa por uma pequena rede neural feedforward.

O detalhe importante é a palavra position-wise. A mesma rede, com os mesmos pesos, é aplicada a cada posição da frase, uma de cada vez e de forma independente. Se a frase tem dez tokens, os dez passam pela mesma rede, cada um com seus próprios números.

Pense numa linha de produção com uma única máquina de polir. Dez peças diferentes passam pela mesma máquina. A máquina é igual para todas, mas cada peça sai diferente, porque entrou diferente.

O que isso resolve? Cada token ganha um tratamento próprio, sem precisar de uma rede separada para cada posição.

Onde quebra? Nesse estágio, um token não enxerga os vizinhos. Se você precisa de contexto, ele tem que ter vindo antes, da atenção.

Repetindo: primeiro a atenção, depois o feedforward, em cada camada.

## Conversa e reflexão
A frase-âncora aqui é: a atenção é a conversa, o feedforward é a reflexão.

O professor usa uma imagem que vale guardar. Imagine um grupo de amigos numa mesa de bar, conversando. Cada um ouve o que os outros dizem. Isso é a atenção.

Agora imagine cada um voltando para casa, sozinho, pensando na conversa. Um lembra da dica de restaurante. Outro fica pensando na notícia do emprego. Ouviram a mesma conversa, mas cada um tira uma conclusão diferente, porque cada um chegou com a sua bagagem. Isso é o feedforward.

Dito de outro jeito: a atenção responde com quem eu preciso falar para entender melhor. O feedforward responde o que eu faço com essa informação agora que ela está comigo.

O que isso resolve? Separar buscar informação de processar informação. Onde quebra? A reflexão é solitária. Ela não traz nada de novo de fora. Só trabalha o que a conversa já entregou.

Repetindo: a atenção é a conversa, o feedforward é a reflexão.

## Primeira transformação: a lente
A frase-âncora deste bloco é: a primeira lente abre o vetor em ideias novas, ainda brutas.

A conta do bloco tem três passos. O primeiro pega o vetor do token e multiplica por uma matriz de pesos, a primeira matriz. Depois soma um vetor de viés, o primeiro viés.

O professor compara o token a um aluno que acabou de sair de uma aula. A matriz de pesos é uma lente nova que ele recebe. Com ela, o aluno enxerga o que já sabia por outro ângulo, mais abstrato. O viés é um conselho extra, do tipo: depois de pensar nisso, preste atenção também naquilo.

Pense num fotógrafo que troca a lente da câmera. A paisagem é a mesma, mas aparecem detalhes que antes não apareciam.

O que sai daqui é um vetor intermediário. Tem ideias novas, mas está cru. Ainda tem coisa útil misturada com coisa inútil.

Repetindo: a primeira lente abre o vetor em ideias novas, ainda brutas.

## A ativação: jogar fora o inútil
A frase-âncora aqui é: o que é negativo vira zero, só o positivo segue.

O segundo passo é uma função de ativação. No material do professor, é a ReLU: ela pega cada valor do vetor intermediário e compara com zero. Se o valor for positivo, fica. Se for negativo, vira zero.

Na analogia do aluno, é o momento de descartar o que não interessa. A cor da roupa do professor. Se a sala estava clara ou escura. Nada disso ajuda a aprender a matéria, então vai fora.

Pense em quem arruma o armário antes de uma mudança. Abre tudo, olha peça por peça e separa o que vai para a caixa e o que fica para trás.

O que isso resolve? Impede que ideias inúteis desviem o aprendizado. E, mais importante, é esse passo que torna o bloco não linear. Já já você vai ver por que isso importa.

Onde quebra? Se tudo sair negativo, tudo vira zero, e a segunda transformação não recebe nada para trabalhar.

Repetindo: o que é negativo vira zero, só o positivo segue.

## Segunda transformação: consolidar
A frase-âncora deste bloco é: a segunda lente condensa e prepara para a próxima camada.

O terceiro passo pega o que sobrou da ativação, multiplica por uma segunda matriz de pesos e soma um segundo viés.

Se a primeira lente abriu o leque de ideias, a segunda fecha o leque. Ela condensa o que foi refletido numa forma final. O segundo viés dá o ajuste de acabamento.

Pense em quem escreve uma redação. Primeiro despeja ideias no rascunho. Depois risca o que não serve. Por fim, passa a limpo. A segunda transformação é passar a limpo.

O resultado é um token com uma representação nova, que já não se parece com a que entrou. Ele carrega o contexto que veio da atenção e a interpretação feita aqui dentro. Está pronto para a próxima camada.

Repetindo: a segunda lente condensa e prepara para a próxima camada.

## Por que a não linearidade é essencial
A frase-âncora aqui é: sem a ativação no meio, duas lentes valem por uma.

Esta é a parte que mais importa entender. Uma transformação linear é multiplicar por uma matriz e somar um viés. Se você empilha duas transformações lineares sem nada no meio, o resultado é equivalente a uma única transformação linear. Empilhar dez também. Você gasta mais conta e não ganha capacidade nenhuma.

Pense em duas lupas encostadas uma na outra. Juntas, elas funcionam como uma lupa só, um pouco mais forte. Não aparece nada que uma lupa sozinha não mostraria.

A ativação no meio quebra isso. Ela é o que permite ao bloco representar relações complexas e cruzadas. E, nas palavras do professor, aprender essas relações profundas é a grande sacada da IA generativa.

Repetindo: sem a ativação no meio, duas lentes valem por uma.

## Raciocínio local, resultado global
A frase-âncora deste bloco é: o feedforward pensa local, as camadas seguintes juntam tudo.

Se cada token é processado sozinho, como o Transformer entende a frase inteira? A resposta está na ordem das peças.

O contexto entre tokens já chegou pela atenção. O feedforward só reorganiza, dentro de cada token, o que ele recebeu. Depois, a próxima camada começa de novo com atenção, e os tokens refinados voltam a conversar entre si.

É como uma reunião em rodadas. Todos falam, cada um vai para a sua mesa pensar, e todos voltam para a sala com ideias mais maduras. Camada após camada, o raciocínio local vira entendimento global.

Repetindo: o feedforward pensa local, as camadas seguintes juntam tudo.

## Comparando com o que você já viu
Vale separar este bloco de três vizinhos com que ele se confunde.

Primeiro, a rede feedforward da aula de redes neurais profundas. É o mesmo tipo de rede: camadas de pesos com ativação no meio. A novidade aqui não é a rede, é onde ela está e como é aplicada: dentro do Transformer, depois da atenção, uma vez para cada posição.

Segundo, a RNN, rede neural recorrente. A RNN processa as palavras em fila, e cada passo carrega uma memória do passo anterior. O feedforward position-wise não tem memória nenhuma entre posições. Cada token passa sozinho, e por isso todos podem passar ao mesmo tempo.

Terceiro, a atenção. A atenção mistura informação entre tokens. O feedforward nunca mistura. Se você lembrar de uma frase só, lembre desta: a atenção busca, o feedforward processa.

## Fechamento
As frases-âncora da aula, em sequência.

Primeiro a atenção, depois o feedforward, em cada camada.

A atenção é a conversa, o feedforward é a reflexão.

A primeira lente abre o vetor em ideias novas, ainda brutas.

O que é negativo vira zero, só o positivo segue.

A segunda lente condensa e prepara para a próxima camada.

Sem a ativação no meio, duas lentes valem por uma.

O feedforward pensa local, as camadas seguintes juntam tudo.

## Revisão
Primeira pergunta: se você mudar o vetor de um único token e rodar de novo só o feedforward, o que acontece com a saída dos outros tokens?

[pausa 5]

Resposta: nada. Cada posição passa pela rede de forma independente. Quem mistura tokens é a atenção.

Segunda pergunta: por que não basta empilhar duas multiplicações por matriz, sem a ativação no meio?

[pausa 5]

Resposta: porque duas transformações lineares seguidas equivalem a uma só. Sem a ativação, o bloco não ganha capacidade para relações complexas.

Terceira pergunta: na analogia do aluno, o que faz a ativação?

[pausa 5]

Resposta: descarta o que é inútil. Os valores negativos viram zero, e só o que é positivo segue para a segunda transformação.

Quarta pergunta: se o feedforward trabalha cada token sozinho, de onde vem o contexto da frase?

[pausa 5]

Resposta: da atenção, que vem antes, e das camadas seguintes, que voltam a combinar os tokens refinados.

Quinta pergunta: qual a diferença entre o feedforward position-wise e uma RNN?

[pausa 5]

Resposta: a RNN processa em fila, com memória do passo anterior. O feedforward position-wise não tem memória entre posições, então todos os tokens podem ser processados ao mesmo tempo.
