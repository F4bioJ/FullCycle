# Aprofundando em LLM

## Abertura
Na aula passada, o curso fez um desvio pelas imagens, com as GANs. Agora ele volta para o texto e para os LLMs, os grandes modelos de linguagem.

A proposta desta aula é abrir o capô. Os LLMs de hoje nasceram dos Transformers e usam essa arquitetura como base. O professor começa a mostrar, peça por peça, o que existe lá dentro.

A primeira peça é a atenção. Você vai entender três letras, Q, K e V. Depois vai ver por que uma atenção só é pouco, e o que muda quando o modelo usa várias atenções ao mesmo tempo, a chamada atenção multi-cabeça, ou multi-head attention.

## A atenção como uma conversa
A frase-âncora deste bloco é: a query pergunta, a key identifica, o value entrega.

Você já viu a atenção na aula de Transformers. É o mecanismo que deixa uma palavra olhar para as outras e decidir quais importam para ela.

Agora o professor dá nome às peças. Cada palavra ganha três vetores. Q, de query, a pergunta. K, de key, a chave. V, de value, o valor.

Imagine uma festa. Você ouve alguém dizer "ela chegou atrasada" e pensa: quem é ela? Essa dúvida é a query. Cada pessoa da festa usa um crachá com o nome. O crachá é a key. Você olha os crachás até achar o que combina com a sua dúvida: é a Maria. Aí a Maria conta o que você precisa saber sobre ela. Essa informação é o value.

A resposta não precisa ser uma pessoa. Se a pergunta for "quem é ele?", o crachá certo pode ser o de um objeto, como o carro.

O professor avisa que isso é uma abstração. A conta de verdade precisa ser calculada. A analogia serve para você saber o que cada letra representa.

Repetindo: a query pergunta, a key identifica, o value entrega.

## Uma cabeça só
A frase-âncora aqui é: uma cabeça, um foco.

Com uma única atenção, chamada de single-head, o modelo consegue responder a uma pergunta de contexto. Descobre quem é "ela", por exemplo.

Na explicação do professor, o limite está aí. Uma cabeça só olha por uma perspectiva de cada vez. Se a frase pede para resolver o pronome e também manter o tempo verbal, uma cabeça só tem dificuldade de fechar as duas coisas juntas.

Vale uma ressalva. Essa é uma explicação simplificada. Mesmo uma cabeça só já olha todas as palavras do contexto. O ganho de ter várias é outro: cada cabeça olha os dados por um ângulo próprio, e o modelo combina esses ângulos.

Repetindo: uma cabeça, um foco.

## Várias cabeças ao mesmo tempo
A frase-âncora da multi-head é: dividir, olhar em paralelo, juntar.

Pense numa equipe revisando um contrato. Uma pessoa confere os nomes. Outra confere as datas. Outra confere os valores. Todas leem o mesmo documento, ao mesmo tempo, cada uma com o seu foco. No fim, juntam as anotações.

A multi-head faz algo parecido, em três passos. Primeiro, divide os vetores em espaços menores. Cada espaço vira uma cabeça. Segundo, cada cabeça faz a sua atenção, em paralelo com as outras. Terceiro, os resultados de todas as cabeças são concatenados, isto é, colocados lado a lado, e esse conjunto alimenta uma camada feed-forward, que trabalha o conteúdo.

O professor diz que isso dá mais segurança textual. Em vez de olhar uma relação, depois outra, e tentar ligar tudo no fim, o modelo trata as relações cruzadas juntas.

Um detalhe importante. A aula apresenta a multi-head como o primeiro pilar para aprofundar os LLMs. Mas ela não é uma invenção dos LLMs. A atenção em várias cabeças já fazia parte do Transformer original, e os LLMs a herdaram.

Repetindo: dividir, olhar em paralelo, juntar.

## O exemplo das cinco cabeças
A frase-âncora deste bloco é: o exemplo ilustra, não define.

Para tornar a ideia concreta, o professor imagina cinco cabeças. Uma olharia a concordância gramatical. Outra, a relação semântica. Outra, o tempo. Outra, a referência dos pronomes. E outra, a hierarquia da frase.

Ele mesmo avisa: são exemplos, só para entender. Não é uma lista fixa que todo modelo tem. O que vale é a ideia: cabeças diferentes podem aprender relações diferentes.

E se alguém disser que isso é aula de português, não de IA? A resposta do professor é que a IA generativa gera linguagem. Então entender como a linguagem se organiza ajuda a entender o que a atenção precisa capturar.

Repetindo: o exemplo ilustra, não define.

## Comparando com o que você já viu
Vamos amarrar com as aulas anteriores.

A RNN, rede neural recorrente, lia o texto palavra por palavra, carregando uma memória. Uma coisa depois da outra.

O Transformer trocou isso pela atenção. Lembra da frase do cachorro que o menino viu, e que estava latindo? A atenção dá mais peso ao cachorro, mesmo com o menino mais perto do verbo. A relação pesa mais que a distância.

Nesta aula, você viu o que existe dentro dessa atenção: query, key e value. E viu que o modelo roda várias atenções em paralelo, cada uma com o seu ângulo.

Duas armadilhas. A primeira é trocar os papéis: quem pergunta é a query, quem identifica é a key, quem entrega a informação é o value. A segunda é achar que a multi-head é novidade dos LLMs. Ela já estava no Transformer.

## Fechamento
As frases-âncora desta aula, em sequência.

A query pergunta, a key identifica, o value entrega.

Uma cabeça, um foco.

Dividir, olhar em paralelo, juntar.

O exemplo ilustra, não define.

## Revisão
Primeira pergunta: na frase "ela chegou atrasada", qual vetor faz a pergunta "quem é ela?", e qual permite achar a Maria?

[pausa 5]

Resposta: a query de "ela" faz a pergunta. A key, o crachá de cada palavra, é o que permite achar a correspondência com a Maria.

Segunda pergunta: o modelo acertou que "ela" é a Maria, mas a informação que chegou sobre a Maria estava ruim. Onde está o problema?

[pausa 5]

Resposta: no value. A correspondência entre query e key funcionou. Quem entrega a informação usada no significado é o value.

Terceira pergunta: quais são os três passos da multi-head?

[pausa 5]

Resposta: dividir os vetores em espaços menores, uma cabeça para cada espaço. Cada cabeça faz a sua atenção em paralelo. Depois os resultados são concatenados e alimentam a camada feed-forward.

Quarta pergunta: se só a saída de uma cabeça chegasse à feed-forward, o que se perderia?

[pausa 5]

Resposta: as leituras das outras cabeças, ou seja, as outras relações do contexto.

Quinta pergunta: a multi-head é uma novidade dos LLMs?

[pausa 5]

Resposta: não. Ela já fazia parte do Transformer original. Os LLMs herdaram essa peça e a aula a usa como primeiro passo para aprofundar a estrutura deles.
