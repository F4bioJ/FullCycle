# Decoder-only

## Abertura
Na aula passada, a gente separou o Transformer e ficou com a parte que lê: o encoder-only, o modelo que olha a frase inteira, para os dois lados, e por isso compreende muito bem.

Hoje a gente pega a outra metade: o decoder-only, a parte que escreve.

A pergunta que guia esta aula é simples. Se um modelo vai escrever uma palavra de cada vez, o que ele pode enxergar enquanto escreve? A resposta é: só o que já foi escrito. E quase tudo aqui é consequência dessa regra.

Vamos ver por que separar essa metade compensa, como a regra vira uma máscara numa matriz, por que isso não transforma o Transformer de volta em uma rede recorrente e quais são as três partes de cada camada.

## Decoder-only
A frase-âncora é esta: decoder-only é o Transformer especializado em prever o próximo token a partir do histórico.

Pense em alguém completando uma frase em voz alta, numa conversa. Essa pessoa não precisa analisar um texto pronto, de trás para frente. Ela olha o que já foi dito e escolhe o que vem agora.

O que isso resolve? O custo. O modelo não gasta atenção olhando para os dois lados, então fica mais simples, mais rápido e mais barato. Por isso ele é a escolha natural para as tarefas autoregressivas, aquelas em que o texto novo sai do texto anterior: contar uma história, completar um texto, gerar uma resposta.

Onde ele quebra? Quando a tarefa é entender um texto inteiro de uma vez, como classificar um documento. Aí quem brilha é o encoder-only, que a gente viu na aula passada.

Decoder-only é o Transformer especializado em prever o próximo token a partir do histórico. E a peça que garante esse foco tem nome: atenção causal.

## Atenção causal
A frase-âncora: na atenção causal, cada token só enxerga o passado.

Em inglês é causal self-attention. A palavra causal vem da ideia de causa e efeito: o que vem antes influencia o que vem depois, e nunca o contrário.

Imagine que você está escrevendo uma carta à mão, com a folha de baixo coberta. Você consegue reler tudo o que já escreveu, mas o resto da folha está em branco. Não há o que espiar.

O que isso resolve? Coloca o modelo na situação real da geração. Quando ele está escrevendo, a próxima palavra ainda não existe. Então faz sentido que ele aprenda a prever usando só o que veio antes.

Onde isso quebra? Em tudo o que depende de uma palavra que vem depois. Se o sentido de um termo só fica claro no fim da frase, esse modelo não tem como consultar o fim na hora de tratar aquele termo.

Na atenção causal, cada token só enxerga o passado. Mas uma ideia dessas precisa virar conta. E é aí que entra a máscara.

## Máscara triangular inferior
A frase-âncora: a máscara triangular inferior é a matriz que transforma a regra de não olhar o futuro em conta.

Vou desenhar com palavras. Pegue a frase: o cachorro correu rápido. Agora monte uma tabela, com essas quatro palavras nas colunas e as mesmas quatro nas linhas. Cada célula responde a uma pergunta: esta linha pode enxergar esta coluna?

Sem máscara, a resposta é sim em todas as células. Todo mundo vê todo mundo.

Com a máscara, a gente põe zero em tudo o que fica à frente. Vamos ler linha por linha. A linha do "o" enxerga só o "o". A linha do "cachorro" enxerga "o" e "cachorro". A linha do "correu" enxerga "o", "cachorro" e "correu". E a linha do "rápido" enxerga todas as palavras.

Repare em duas coisas. Primeira: cada posição enxerga também a si mesma. Segunda: a última linha fica toda liberada, e isso não é defeito. Ali não sobrou futuro nenhum para esconder. Os sim e os zeros formam um triângulo na parte de baixo da tabela, e daí vem o nome.

E por que isso importa? O professor dá um exemplo simples. Se o modelo só tem o "o" e tenta pular direto para "rápido", a chance de acertar é muito baixa, e o resultado tende a ser besteira, talvez uma alucinação. O motivo central é outro: sem a máscara, o modelo poderia trapacear, olhando justamente o que deveria adivinhar.

Até aqui, a tabela foi de palavras, mas isso é uma simplificação. Na prática, são tokens, e por isso a tabela fica um pouco maior. E o computador nem vê tokens: vê vetores. A máscara atua sobre esses vetores, e a regra dela é a posição na sequência. Ela não olha para o significado de nada.

A máscara triangular inferior é a matriz que transforma a regra de não olhar o futuro em conta. Agora vamos a uma imagem para guardar essa ideia.

## A prova e o tampão
A frase-âncora: a máscara bloqueia o futuro e foca no presente, com base no passado.

Imagine uma prova de dez perguntas. Você já respondeu até a quinta e está na sexta. Pode reler da primeira à quinta, e pode ler a sexta. Mas a oitava, a nona e a décima estão fora, porque tirariam seu foco. E também não vale olhar a prova do colega.

O professor chama isso de tampão visual, como aquela proteção que deixa um cavalo olhar só para o caminho à frente.

Modelos como o GPT usam essa estratégia. O que ela resolve, além do foco, é a consistência entre treino e inferência. Inferência é o momento em que o modelo já treinado gera texto de verdade. Se ele treinasse espiando as próximas palavras, chegaria à geração sem esse apoio, porque ali essas palavras ainda não existem. Com a máscara, a regra é a mesma nas duas fases.

Onde isso quebra? A máscara diz o que pode ser visto, mas não diz o que importa. Isso fica para a atenção, daqui a pouco.

A máscara bloqueia o futuro e foca no presente, com base no passado. Agora vem a dúvida que você talvez já tenha tido.

## Ordem sem rede recorrente
A frase-âncora: o Transformer processa em paralelo, e a ordem vem da numeração das posições e da máscara.

A explicação da tabela, passo a passo, pareceu uma RNN, uma rede neural recorrente, que lê palavra por palavra. Foi só uma simplificação.

O Transformer abre esse trabalho em paralelo. O professor fala em várias threads, e a imagem que ele usa é a de uma senha. Pense numa fila de banco em que todos são atendidos ao mesmo tempo, em vários guichês. Mesmo assim, cada pessoa tem uma senha, e por ela se sabe quem chegou antes de quem. Cada elemento carrega a sua senha: você é A1, você é A2, você é A3.

O que isso resolve? O Transformer não fica preso à leitura em fila da rede recorrente, mas continua respeitando a esquerda para a direita, que é a nossa noção de tempo de leitura. A máscara impõe essa direção mesmo com tudo acontecendo ao mesmo tempo.

Onde está a armadilha? Em achar que, por ter uma máscara, ele voltou a ser recorrente. Não voltou. Ela limita o que cada posição vê, e o processamento continua aberto.

O Transformer processa em paralelo, e a ordem vem da numeração das posições e da máscara. Com isso, podemos abrir uma camada e ver o que tem dentro: três partes.

## Multi-head com máscara causal
A frase-âncora: a multi-head olha o mesmo histórico de vários jeitos ao mesmo tempo, sem acessar o futuro.

Aqui mora uma diferença importante. A máscara libera todo o passado, mas nem tudo no passado ajuda. É a atenção que decide quais tokens anteriores importam para prever o próximo. Na frase "o cachorro que mora na casa azul correu", as duas palavras, "cachorro" e "azul", estão liberadas. É a atenção que percebe quem correu.

E por que várias cabeças, as heads? Pense em três pessoas revisando o mesmo texto. Uma olha a gramática, outra olha o sentido, outra olha o estilo. O texto é o mesmo, mas os olhares são diferentes. Com as heads é assim: elas não dividem o texto em pedaços. Todas olham os mesmos vetores, e cada uma aprende uma relação diferente.

Onde isso para? As heads ainda não transformam a informação de cada posição individualmente. Essa é a próxima peça.

A multi-head olha o mesmo histórico de vários jeitos ao mesmo tempo, sem acessar o futuro.

## Feedforward position-wise
A frase-âncora: o feedforward position-wise é um mini cérebro aplicado a cada posição, separadamente.

Depois de uma reunião em que todos trocaram ideias, cada pessoa volta para a sua mesa e pensa sozinha no que ouviu. A reunião é a atenção. A mesa é o feedforward. Ele não mistura uma posição com outra. Só refina o que aquela posição já recebeu.

O que isso resolve? Ajuda a captar padrões não lineares e a combinar significados mais abstratos.

Onde a gente se confunde? Em achar que é ele que dá a ordem, por causa do nome, position-wise. Esse nome só diz que ele é aplicado posição por posição. Quem cuida da ordem é a numeração.

O feedforward position-wise é um mini cérebro aplicado a cada posição, separadamente. Falta a peça que mantém tudo isso de pé.

## LayerNorm e conexão residual
A frase-âncora: a LayerNorm equilibra os valores, e a conexão residual leva a informação adiante.

São dois sintomas, e cada um tem o seu remédio. Primeiro sintoma: valores que explodem ou morrem durante o treino. Quem cuida disso é a LayerNorm, como um regulador de tensão, que impede os picos e as quedas.

Segundo sintoma: o que as primeiras camadas viram vai se perdendo no caminho. Quem cuida disso é a conexão residual, que leva o resultado para a camada seguinte. Pense numa cópia do documento original que acompanha cada revisão, para nada se perder pelo caminho.

O erro comum aqui é trocar os papéis, ou achar que uma peça faz as duas coisas. São papéis separados.

A LayerNorm equilibra os valores, e a conexão residual leva a informação adiante.

## Comparando com os vizinhos
Agora vamos separar o que costuma se misturar.

Encoder-only e decoder-only. O encoder-only lê, olha para os dois lados e compreende. O decoder-only escreve, olha só para trás e prevê o próximo. Classificar comentários pede o primeiro. Continuar uma história pede o segundo.

Mascaramento do BERT e máscara causal. Os nomes são parecidos, e as ideias são diferentes. No BERT, o treino oculta algumas palavras, e o modelo as deduz olhando os dois lados. Na máscara causal, nenhuma palavra é escolhida para sumir: cada posição é impedida de ver tudo o que vem depois dela.

Rede recorrente e decoder-only. A rede recorrente processa em fila, um passo depois do outro. O decoder-only processa em paralelo, e a direção do tempo vem da numeração e da máscara.

Máscara e atenção. A máscara diz o que pode ser visto, sempre pela posição. A atenção diz o que importa, dentro do que foi liberado.

## Revisão
Vamos repetir as frases-âncora.

Decoder-only é o Transformer especializado em prever o próximo token a partir do histórico.

Na atenção causal, cada token só enxerga o passado.

A máscara triangular inferior é a matriz que transforma a regra de não olhar o futuro em conta.

A máscara bloqueia o futuro e foca no presente, com base no passado.

O Transformer processa em paralelo, e a ordem vem da numeração das posições e da máscara.

A multi-head olha o mesmo histórico de vários jeitos ao mesmo tempo, sem acessar o futuro.

O feedforward position-wise é um mini cérebro aplicado a cada posição, separadamente.

A LayerNorm equilibra os valores, e a conexão residual leva a informação adiante.

Agora, as perguntas.

Primeira pergunta: na matriz com máscara, a linha da última palavra tem tudo liberado. Isso é um erro?

[pausa 5]

Resposta: não. Tudo nessa linha é passado ou a própria palavra. Não sobrou futuro para bloquear.

Segunda pergunta: por que a máscara ajuda na consistência entre treino e geração?

[pausa 5]

Resposta: porque a regra é a mesma nas duas fases. Na geração, o futuro não existe, então o modelo treina sem contar com ele.

Terceira pergunta: em uma frase longa, a máscara ou a atenção decide que uma palavra anterior importa mais do que outra?

[pausa 5]

Resposta: a atenção. A máscara libera todo o passado, sempre pela posição, sem olhar o significado.

Quarta pergunta: um modelo tem valores que explodem no treino e também esquece o que as primeiras camadas viram. Qual peça cuida de cada sintoma?

[pausa 5]

Resposta: a LayerNorm cuida dos valores, e a conexão residual cuida da informação que precisa seguir adiante.

Quinta pergunta: o mascaramento do BERT e a máscara causal são a mesma coisa?

[pausa 5]

Resposta: não. No BERT, palavras são ocultadas para o modelo deduzir pelos dois lados. Na máscara causal, cada posição só não vê o que vem depois dela.
