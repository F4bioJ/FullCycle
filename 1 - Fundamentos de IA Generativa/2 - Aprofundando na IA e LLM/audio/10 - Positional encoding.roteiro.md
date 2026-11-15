# Positional encoding

## Abertura
Na aula passada, a gente viu as camadas position-wise. Aquele bloco de reflexão que cada token faz sozinho, depois da conversa da atenção.

Hoje o nome parece parecido, mas o assunto é outro. Hoje é positional encoding. Codificação posicional.

A pergunta da aula é simples. Se o Transformer lê todos os tokens ao mesmo tempo, como ele sabe qual veio primeiro?

A resposta tem duas versões. Uma usa matemática de ondas, com seno e cosseno. A outra deixa o modelo aprender sozinho. E no fim a gente vê quando usar cada uma.

Vamos lá.

## O problema da ordem
A frase-âncora deste bloco é: quem lê tudo ao mesmo tempo perde a ordem.

Pense num ditado escolar. A professora fala uma palavra de cada vez, e você escreve na ordem em que ouviu. A ordem vem de graça, porque ela vem do próprio tempo.

Era assim que a rede recorrente trabalhava. A RNN, rede neural recorrente, lia um token depois do outro. A ordem estava embutida no jeito de ler.

O Transformer mudou isso. Ele lê a frase inteira de uma vez, em paralelo. Isso deixou o treino muito mais rápido. Mas cobrou um preço.

Imagine que eu pego as palavras de uma frase, escrevo cada uma num cartão e embaralho os cartões. Você consegue ler todas as palavras. Mas não sabe montar a frase.

"Eu comi antes de dormir" pode virar "dormir antes eu comi". As palavras estão certas. A ordem, não.

Então o problema é este: o Transformer sabe quais tokens existem, mas não sabe quem vem antes de quem. Alguém precisa contar isso a ele.

Lá na aula de Transformers, a gente disse que a solução era dar um numerozinho para cada token. Hoje a gente descobre que esse numerozinho é bem mais do que um número.

Quem lê tudo ao mesmo tempo perde a ordem. E o positional encoding é quem devolve essa ordem.

## Somar a posição ao significado
A frase-âncora aqui é: o vetor final é o significado mais a posição.

Cada token já chega com um vetor de significado. É o word embedding, que a gente já conhece.

O positional encoding é um segundo vetor, do mesmo tamanho, que só fala da posição. E os dois são somados.

Pense numa etiqueta de bagagem. A mala continua sendo a mesma mala, com as mesmas roupas dentro. Mas agora ela tem uma etiqueta dizendo de qual voo ela é.

O professor deu um exemplo bem simplificado. Imagine que o significado do token fosse o número um. E que o cálculo da posição desse zero vírgula nove zero nove. Somando, fica um vírgula nove zero nove. É o mesmo token, acrescido da sua posição.

Repare numa coisa. A posição não substitui o significado. Ela se mistura a ele. O vetor passa a dizer duas coisas: o que é o token e onde ele está.

Isso resolve um caso curioso. Na frase "o gato viu o gato", as duas palavras "gato" têm o mesmo significado. Mas, depois da soma, os dois vetores ficam diferentes, porque cada um ganhou uma posição diferente.

O vetor final é o significado mais a posição. Agora falta saber como se calcula esse vetor de posição. E aqui existem dois caminhos.

## Primeiro caminho: o encoding fixo
A frase-âncora é: no encoding fixo, cada posição ganha uma assinatura feita de ondas.

Na literatura, esse caminho se chama positional encoding fixo. O professor prefere chamar de seno e cosseno, porque o nome lembra como ele funciona. Ele nasceu no mesmo artigo que criou o Transformer, o "Attention Is All You Need".

A ideia é dar a cada posição um padrão de ondas só dela. A posição zero tem um padrão. A posição um, outro. A posição dois, outro. E assim por diante.

Pense na impressão digital. Todo mundo tem dedos parecidos, mas os desenhos nunca se repetem. Cada posição da frase ganha a sua impressão digital.

E aqui vai o ponto mais importante deste bloco. Esse vetor não é aprendido. Ele sai de uma fórmula. Você pode treinar o modelo por um mês inteiro, e o vetor da posição cinco continua exatamente o mesmo.

No encoding fixo, cada posição ganha uma assinatura feita de ondas. A próxima pergunta é: como essas ondas são montadas?

## Ondas rápidas e ondas lentas
A frase-âncora é: cada dimensão do vetor é uma onda com uma velocidade diferente.

O vetor de posição tem muitas casas. Tantas quanto o embedding. Pode ser quinhentas e doze, setecentas e sessenta e oito. Esse tamanho total se chama d model, a dimensão do modelo.

Em cada casa, a fórmula calcula uma onda. E cada casa tem uma onda de velocidade diferente.

Nas primeiras casas, a onda é rápida. De uma posição para a seguinte, o valor muda muito. É a alta frequência.

Nas últimas casas, a onda é lenta. De uma posição para a seguinte, quase nada muda. É a baixa frequência.

Pense num relógio. O ponteiro dos segundos gira rápido. O dos minutos, mais devagar. O das horas, bem devagar. Olhando só um ponteiro, você não sabe a hora exata. Olhando os três juntos, sabe.

O vetor de posição é um relógio com centenas de ponteiros. O professor usou outra imagem: trechos de uma música, cada um com seu ritmo, que juntos formam a posição.

Atenção para não confundir. Não é uma posição por casa. Cada casa é uma onda que vale para todas as posições. A posição está espalhada pelo vetor inteiro.

Cada dimensão do vetor é uma onda com uma velocidade diferente. E a combinação de todas é a assinatura da posição.

## Por que seno e cosseno
A frase-âncora é: ondas previsíveis deixam o modelo medir distâncias.

Seno e cosseno sobem e descem de forma suave, sempre entre menos um e um. Nunca explodem. E se repetem de um jeito previsível.

Isso tem uma consequência importante. Os valores não crescem com a posição. A posição mil não tem números maiores que a posição três. O que muda é a fase das ondas, o ponto do ciclo em que cada uma está.

Pense em duas pessoas correndo numa pista circular, cada uma no seu ritmo. Se você sabe o ritmo de cada uma, consegue dizer quanto tempo passou só de olhar onde elas estão.

É isso que o modelo faz. Como as frequências são fixas e conhecidas, a diferença entre a posição três e a posição sete aparece sempre do mesmo jeito nos vetores. O modelo aprende a ler essa diferença de fase. E assim percebe a distância relativa entre os tokens, sem ter decorado cada posição.

O professor admite que essa conta é chata. E que dificilmente você vai fazê-la à mão. O importante é entender a ideia: um numerozinho por token, na verdade, é um vetor de ondas calculado com cuidado.

Ondas previsíveis deixam o modelo medir distâncias. Agora vamos ao caminho que dispensa a fórmula.

## Segundo caminho: as posições aprendidas
A frase-âncora é: no aprendido, o modelo descobre sozinho o vetor de cada posição.

Na literatura, learned position embeddings. Embeddings de posição aprendidos.

Aqui não existe fórmula. Cada posição começa com um vetor qualquer. E, durante o treino, esse vetor vai sendo ajustado por tentativa e erro, como qualquer outro peso da rede.

Pense num funcionário novo numa repartição. No primeiro dia, ele não sabe onde fica cada pasta. Com o tempo, de tanto buscar, ele aprende de cor onde cada coisa costuma estar.

O professor fez uma comparação. O encoding fixo também seria uma espécie de tentativa e erro, mas resolvida pela matemática, sem treino e sem gastar processamento. No aprendido, a tentativa e erro é real, com dado e com GPU.

Ele também fez um aviso: esse ajuste parece um fine-tuning, mas não é o fine-tuning que vamos ver mais adiante no curso.

O que se ganha? O modelo desenvolve uma intuição sobre o assunto em que foi treinado. Ele aprende onde cada coisa costuma aparecer naquele tipo de texto.

O que se perde? Ele precisa de mais parâmetros, mais dados e mais treino. E essa intuição vale para aquele domínio, não para qualquer texto.

No aprendido, o modelo descobre sozinho o vetor de cada posição. A próxima pergunta é: qual dos dois escolher? Mas antes, um parêntese que o professor abriu.

## O grande problema das sequências longas
A frase-âncora é: quanto mais longa a sequência, mais difícil manter a coerência.

Uma frase gerada por IA costuma sair bem. Um parágrafo, um pouco pior. Um livro, pior ainda. Uma enciclopédia, mais ainda.

O professor diz que essa é a grande treta da inteligência artificial. E por isso ele desconfia de quem diz que a IA vai substituir quem escreve livros e filmes. Manter a história coerente do começo ao fim é difícil.

Em vídeo, é pior. O Veo três, da Google, gera trechos curtos de oito segundos muito bem. Mas quando alguém encadeia vários trechos, a coisa desanda. Na personagem viral Marisa Maiô, o rosto, o cabelo e a altura mudam um pouco de uma cena para a outra.

Cada trecho curto vai bem. O problema aparece quando a sequência cresce.

Quanto mais longa a sequência, mais difícil manter a coerência. E é justamente aqui que os dois caminhos se separam.

## Quando usar cada um
A frase-âncora é: fixo para o mundo aberto, aprendido para o domínio fechado.

O fixo é generalista. Segundo a aula, lida melhor com sequências longas e resolve boa parte daquele problema. Como não precisa ser aprendido, gasta menos GPU, menos parâmetros e menos dados. E mantém uma estrutura matemática consistente, que facilita inferir as posições.

Ele combina com tarefas de muita variedade. Tradução. Geração de texto aberta, sobre qualquer assunto.

O aprendido brilha no domínio fechado, com dado estático e padrão repetitivo. O professor deu três exemplos. Contratos e documentos jurídicos. Prontuários médicos. E geração de código, que é muito mais repetitiva do que parece. Nesses casos, ele capta nuances que a fórmula às vezes não pega.

Mas, segundo a aula, ele não vai bem em uso muito aberto. Pense num modelo com posições aprendidas em contratos curtos. Se ele passar a receber conversas longas sobre qualquer assunto, a tendência é piorar. A intuição que ele construiu era daquele domínio.

Uma observação fora da aula. O professor citou o ChatGPT e o BERT como exemplos do tipo de tarefa do fixo. Na prática, o BERT e os primeiros GPTs usam posições aprendidas. Então guarde o exemplo pelo tipo de tarefa, não pela arquitetura desses modelos.

Fixo para o mundo aberto, aprendido para o domínio fechado.

## Comparando com os vizinhos
Agora vamos separar coisas que se confundem.

Primeiro, positional encoding e position-wise. Os nomes parecem irmãos, mas fazem coisas diferentes. O positional encoding entra na porta de entrada. Ele soma a posição ao vetor de cada token, antes da atenção. As camadas position-wise, da aula passada, ficam depois da atenção. São a reflexão de cada token. Uma diz onde o token está. A outra processa o que o token já sabe.

Segundo, word embedding e positional encoding. O word embedding diz o que o token significa. O positional encoding diz onde ele está. Os dois têm o mesmo tamanho e são somados. Um não substitui o outro.

Terceiro, RNN e Transformer. A RNN não precisava de vetor de posição, porque lia em fila, e a ordem vinha do tempo. O Transformer lê tudo junto, e por isso precisa que alguém informe a ordem.

Quarto, atenção e posição. A atenção decide quem conversa com quem. Mas, sem a posição somada, ela trataria "dormir antes eu comi" e "eu comi antes de dormir" como o mesmo saco de palavras.

## Revisão
Vamos às frases-âncora, em sequência.

Quem lê tudo ao mesmo tempo perde a ordem.

O vetor final é o significado mais a posição.

No encoding fixo, cada posição ganha uma assinatura feita de ondas.

Cada dimensão do vetor é uma onda com uma velocidade diferente.

Ondas previsíveis deixam o modelo medir distâncias.

No aprendido, o modelo descobre sozinho o vetor de cada posição.

Quanto mais longa a sequência, mais difícil manter a coerência.

Fixo para o mundo aberto, aprendido para o domínio fechado.

Agora, algumas perguntas. Tente responder antes de ouvir a resposta.

Primeira pergunta: na frase "o gato viu o gato", os dois "gatos" entram iguais na atenção?

[pausa 5]

Resposta: não. O significado é o mesmo, mas cada um ganhou um vetor de posição diferente na soma. Então os vetores que entram na atenção são diferentes.

Segunda pergunta: depois de mais um mês de treino, o vetor fixo da posição cinco muda?

[pausa 5]

Resposta: não muda. Ele sai de uma fórmula de seno e cosseno. Quem muda com o treino é o vetor das posições aprendidas.

Terceira pergunta: da posição dez para a posição onze, quais casas do vetor fixo mudam mais?

[pausa 5]

Resposta: as primeiras casas, as de alta frequência. São os ponteiros rápidos do relógio. As últimas casas, de baixa frequência, quase não mudam.

Quarta pergunta: uma empresa quer gerar código, treinando só com o código dos próprios sistemas. Fixo ou aprendido?

[pausa 5]

Resposta: aprendido. É um domínio fechado e repetitivo, e o modelo aprende onde cada coisa costuma aparecer.

Quinta pergunta: por que a posição mil não tem valores maiores que a posição três, no encoding fixo?

[pausa 5]

Resposta: porque seno e cosseno ficam sempre entre menos um e um. O que diferencia as posições é a fase das ondas, não o tamanho dos números.

Até a próxima aula.
