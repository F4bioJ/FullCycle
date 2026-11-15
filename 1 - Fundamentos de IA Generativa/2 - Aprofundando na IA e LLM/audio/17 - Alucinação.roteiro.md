# Alucinação

## Abertura
Até agora, o curso contou a história de como uma LLM nasce e é treinada. Na aula passada, vimos as técnicas para deixar esses modelos grandes mais baratos de ajustar e de rodar.

Esta aula muda de rumo. Em vez de perguntar como a LLM funciona, ela pergunta onde a LLM falha. É o primeiro de uma série de desafios. E começa pelo mais famoso de todos: a alucinação.

O professor avisa que esse tema anda junto com outro, a factualidade. São parecidos, mas não são a mesma coisa. Os dois giram em torno de uma pergunta simples: o que a LLM diz é verdade?

Vamos por partes. Primeiro, como a LLM gera uma resposta. Depois, os quatro tipos de alucinação. Em seguida, as causas. E, no fim, por que isso é tão sério.

## Fluência sem compreensão
A frase-âncora deste bloco é: a LLM é mestre em fluência, não em entendimento.

Pense num papagaio muito, muito treinado. Ele já ouviu milhões de conversas. Quando você começa uma frase, ele sabe como ela costuma terminar. Mas ele não sabe do que você está falando.

A LLM faz algo parecido, só que com matemática. Ela transforma as palavras em tokens, os tokens em vetores, e calcula qual é o próximo token mais provável. Só isso. Não existe um momento em que ela pare para pensar no significado.

Por isso, o professor faz uma provocação. Perguntar sobre física quântica ou sobre receita de bolo de cenoura dá no mesmo para a LLM. O mecanismo é idêntico nos dois casos: prever o próximo pedaço de texto. O assunto não muda nada lá dentro.

Ele cita o neurocientista Miguel Nicolelis, que diz que a IA não é nem inteligente, nem artificial. A crítica é esta: uma criança também cria texto. E um banco de dados guarda muita informação, mas ninguém chama banco de dados de inteligente.

O que essa ideia resolve? Ela explica por que a LLM escreve tão bem sobre qualquer coisa. E onde ela quebra? Justamente aí. Se o modelo não entende o que diz, ele também não sabe quando está errado.

Guarde de novo: a LLM é mestre em fluência, não em entendimento. E é dessa falta de entendimento que nasce o próximo problema.

## A ilusão da resposta confiante
A frase-âncora aqui é: parecer certo não é estar certo.

Imagine um vendedor que fala com firmeza, olha nos seus olhos e nunca gagueja. Você tende a acreditar nele. Agora imagine que ele fala com a mesma firmeza quando acerta e quando inventa.

É assim com a LLM. Como ela não sabe o que está respondendo, ela entrega respostas naturais, bem organizadas e seguras, mesmo quando estão erradas. O professor brinca que ela mente com categoria.

Na maior parte das vezes, ela acerta. O perigo está no erro que convence. A gente cai numa armadilha mental: se o texto parece certo, deve estar certo.

E tem um agravante. Dependendo de como foi treinado, o modelo pode inventar coisas para agradar você. O resultado é uma informação plausível, mas falsa.

É isso que a aula chama de alucinação: a LLM gera uma afirmação factualmente incorreta, sem base em dados reais. E sem intenção nenhuma de errar. É só uma composição de probabilidades que produziu uma frase bonita com uma mentira dentro.

De novo: parecer certo não é estar certo. Agora vamos ver as formas que essa mentira pode tomar.

## Alucinação factual
A frase-âncora é: um fato errado, dito com segurança.

O exemplo da aula: o modelo diz que Marie Curie ganhou três prêmios Nobel. Ela ganhou dois. Para quem não conhece a história, faz todo sentido, porque ela de fato ganhou prêmios Nobel. O erro se esconde dentro de algo verdadeiro.

Agora, isso é grave? Depende do uso. Se você vai comentar com um amigo, tanto faz. Se a informação vai orientar uma cirurgia, aí é outra história.

Por isso, o professor diz que a LLM, possivelmente, não serve para algo tão preciso que não admita nenhum erro. Mas ele faz questão de completar: isso não quer dizer que não se pode usar. Quer dizer que é preciso cuidado.

Resumindo: um fato errado, dito com segurança. O próximo tipo é parecido, mas o que se inventa não é o fato, é a fonte.

## Alucinação de citação ou fonte
A frase-âncora é: a fonte que nunca existiu.

Você pede uma frase marcante do Steve Jobs. O modelo entrega. Você pergunta onde ele disse aquilo. O modelo responde com um artigo, uma palestra, um livro. Você vai procurar, e nada. A fonte foi inventada.

Alguns modelos fazem isso mais do que outros. E informações muito recentes, que exigem buscar na internet, também são terreno fértil para esse erro.

O caso fica pior quando o próprio pedido empurra o modelo. O professor dá o exemplo: peça artigos que comprovem que a Terra é plana. O modelo lista vários. Você clica, e eles não existem. O pedido já supunha que esses artigos existiam, e o modelo completou o padrão.

Então: a fonte que nunca existiu. E, quando o assunto é técnico, a invenção ganha outra cara.

## Alucinação estrutural
A frase-âncora é: forma técnica, conteúdo falso.

Aqui o modelo produz fórmulas matemáticas que não existem, código que chama algo que não existe, ou instruções com erro. Isso acontece muito na programação.

Pense num colega novo, rápido e confiante, que escreve código num ritmo incrível. Você não colocaria esse código em produção sem revisar, certo? Com a IA é igual.

Por isso, o professor insiste: quem programa com IA precisa revisar o que ela gera. É como um pair programming, em que você é o par que confere se aquilo é real ou se ela alucinou.

Repetindo: forma técnica, conteúdo falso. O último tipo é o mais traiçoeiro, porque começa certo.

## Alucinação contextual
A frase-âncora é: começa coerente e se perde no caminho.

Imagine contar uma história longa a um amigo por telefone. No começo, está tudo amarrado. Lá pelo meio, você já trocou o nome de um personagem e mudou o lugar onde tudo aconteceu. Ninguém mentiu de propósito. O fio simplesmente se perdeu.

Na LLM, a resposta começa num contexto correto. Mas, quanto maior a conversa, mais difícil manter a ligação com o começo. Como o texto é construído token a token, o final vai derivando para trechos que não combinam com o que veio antes.

O professor acha esse o mais difícil de pegar. E diz que acontece ainda mais com imagens: a geração começa bem e, nos detalhes finais, desanda.

Mais uma vez: começa coerente e se perde no caminho. Agora que conhecemos os tipos, vamos às causas.

## Por que acontece
A frase-âncora é: intuição estatística no lugar de certeza.

O modelo não tem uma base de fatos para voltar e conferir. Ele não tem a certeza que uma pessoa tem quando sabe algo. Ele tem uma intuição estatística do que deveria vir a seguir.

A aula aponta três situações em que isso dá errado. A primeira: falta conhecimento específico no treino. A segunda: a pergunta exige combinar coisas que o modelo nunca aprendeu juntas, como cruzar duas teorias, e ele precisa imaginar o meio do caminho. A terceira: o pedido deixa lacunas, e o modelo as preenche com suposições.

Daí vem um conselho curioso do professor: às vezes, é melhor tratar mal a IA. Não é ser grosseiro. É ser direto e específico, e, quando der, mostrar exemplos da resposta que você espera. Menos lacunas, menos chance de invenção.

E há um fator de comportamento. A maioria das LLMs foi feita para parecer humana e agradável, para você continuar usando. Isso aumenta a chance de ela entregar algo convincente, mesmo falso. O professor nota que o modelo tende a interagir do jeito que você interage com ele. Quanto mais direto você for, menor a chance de erro.

Então: intuição estatística no lugar de certeza. E por que isso importa tanto?

## Por que é crítico
A frase-âncora é: o mesmo erro pesa diferente conforme o uso.

Numa conversa descontraída, como comparar a Bíblia com o Rei Leão, falar besteira não faz mal. Mas pense num cálculo estrutural de um prédio, num diagnóstico médico ou numa decisão jurídica. Ali, um erro pode derrubar uma estrutura ou mandar alguém para a prisão.

Tem também um efeito em escala. Quando as pessoas percebem os erros, perdem a confiança e deixam de usar. Se isso se espalha, o entusiasmo atual esfria. É o medo de um novo inverno da IA, como aqueles que vimos no primeiro capítulo.

E validar tudo é muito difícil. São muitas respostas, rápidas e fluentes. Ninguém consegue checar cada frase num site. Por isso, quem usa o conteúdo da IA precisa conhecer o assunto, em vez de repetir o que ela entregou.

O professor fecha com um exemplo inventado por ele, na hora. Ele imagina a IA dizendo quem ganhou o Nobel de Física de 2023, com um nome e uma descrição técnica que soam convincentes. Tudo invenção. E deixa a pergunta: se a IA respondesse isso, você iria conferir? Deveria.

Repetindo: o mesmo erro pesa diferente conforme o uso.

## Comparando os tipos
Os quatro tipos de alucinação se confundem fácil. Vamos separar.

A diferença entre a factual e a de citação é o que se inventa. Na factual, o erro está no fato, como os três Nobel de Marie Curie. Na de citação, o fato pode até soar certo, mas a fonte que o sustenta não existe.

A diferença entre a estrutural e a factual é a forma. A estrutural tem cara de coisa técnica: fórmula, código, instrução. Parece funcionar, mas não funciona.

E a contextual é diferente das outras três porque não é um erro isolado. Ela é uma deriva. O começo está certo. O problema aparece com o tempo, conforme a resposta ou a conversa cresce.

Também vale separar alucinação de mentira. Mentir pressupõe saber a verdade e escondê-la. A LLM não sabe a verdade. Ela só prevê texto. Por isso, a alucinação acontece sem intenção.

E, por fim, ligue as pontas com o começo do curso. O inverno da IA aconteceu quando as promessas não se cumpriram e o interesse esfriou. A aula de hoje mostra um caminho parecido: erros que corroem a confiança.

## Revisão
Vamos às frases-âncora, em sequência.

A LLM é mestre em fluência, não em entendimento.

Parecer certo não é estar certo.

Alucinação factual: um fato errado, dito com segurança.

Alucinação de citação: a fonte que nunca existiu.

Alucinação estrutural: forma técnica, conteúdo falso.

Alucinação contextual: começa coerente e se perde no caminho.

As causas: intuição estatística no lugar de certeza.

E a gravidade: o mesmo erro pesa diferente conforme o uso.

Agora, algumas perguntas. Tente responder antes da resposta.

Primeira pergunta: por que a LLM soa tão segura num assunto que domina quanto num assunto que desconhece?

[pausa 5]

Resposta: porque a segurança vem da previsão de texto, que funciona do mesmo jeito em qualquer assunto. Ela não confere se o conteúdo é verdadeiro.

Segunda pergunta: uma conversa longa termina contradizendo o que foi combinado no começo. Que tipo de alucinação é esse?

[pausa 5]

Resposta: contextual. A resposta começa coerente e, conforme cresce, perde a ligação com o início.

Terceira pergunta: o que o professor quer dizer com tratar mal a IA?

[pausa 5]

Resposta: fazer pedidos diretos e específicos, com exemplos do que se espera. Assim sobram menos lacunas para o modelo preencher com suposições.

Quarta pergunta: por que pedir à IA as fontes de cada afirmação não resolve o problema?

[pausa 5]

Resposta: porque ela também inventa fontes. É a alucinação de citação. A fonte precisa ser conferida fora da IA, por alguém que conheça o assunto.

Fim da aula sobre alucinação. Na próxima, o professor fala das estratégias para lidar com ela.
