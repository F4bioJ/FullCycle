# Aprofundando em LLM — resumo

## Objetivo da aula

A aula volta ao tema dos LLMs para entrar mais a fundo na estrutura deles. O ponto de partida é que os LLMs de hoje vieram dos Transformers e usam essa arquitetura como base. Segundo o professor, os LLMs trazem adaptações de arquitetura e estratégias de implementação que os tornam mais capazes. A aula apresenta a atenção em múltiplas cabeças (multi-head attention) como o primeiro pilar para aprofundar a estrutura dos LLMs. Vale esclarecer que a multi-head attention já faz parte do Transformer original ("Attention Is All You Need") e é herdada pelos LLMs, não uma camada acrescentada depois. O professor avisa que outros virão em aulas seguintes.

## A camada de atenção

A camada de atenção já tinha sido vista. A imagem do professor é a de um leitor que presta atenção a certos elementos da gramática do texto para manter coerência em trechos longos. O professor adianta que os LLMs modernos usam várias atenções em paralelo, a multi-head attention, e por isso a aula parte de uma única atenção para depois chegar a várias.

## Q, K e V no single-head attention

Para entender a atenção em várias cabeças, o professor começa pelo cálculo mais simples, o single-head attention. Nele aparecem três vetores, Q, K e V, e cada palavra tem sua atenção calculada a partir deles:

- **Q (query):** a pergunta que a palavra faz para obter contexto. Exemplo: ao chegar o pronome "ela", a query é "quem é ela?".
- **K (key):** a chave, uma espécie de crachá que identifica cada palavra no contexto. Exemplo: "ela é a Maria". Se a pergunta fosse "quem é ele?", a chave poderia indicar "o carro", pois não precisa ser sempre pessoa, pode ser objeto.
- **V (value):** o valor, a resposta que será usada para chegar ao significado buscado.

O professor deixa claro que é uma abstração para entender o que cada letra representa. A conta em si ainda precisa ser calculada, mas o sentido é esse: a query pergunta, a key permite a correspondência e o value entrega a informação.

## Limitação do single-head attention

De forma didática, o professor explica que na atenção de uma única cabeça o cálculo resolve uma pergunta por vez. Dá para descobrir quem é "ela", mas o foco fica em uma perspectiva só, uma relação por vez. Não é possível combinar, no mesmo passo, por exemplo o tempo verbal com outra relação que precisa ser fechada. Segundo essa explicação simplificada, isso faria perder nuances do texto, como ambiguidade, ironia e múltiplos sentidos. Na prática, uma cabeça só já olha todas as palavras do contexto; o ganho das várias cabeças é que cada uma olha os dados por um ângulo próprio, e o modelo combina vários ângulos ao mesmo tempo.

## Multi-head attention

Os LLMs modernos usam várias atenções em paralelo, a multi-head attention, mecanismo que vem do Transformer original. Cada cabeça aprende um tipo de relação contextual, como tempo verbal, emoção ou objeto direto. Em vez de olhar uma coisa, depois outra e depois tentar conectar tudo, o modelo olha as relações cruzadas ao mesmo tempo. O professor diz que isso dá mais segurança textual.

## Como as heads funcionam

O funcionamento descrito tem três passos:

1. Os vetores são divididos em espaços menores.
2. Cada espaço menor é uma head, e cada head foca a atenção em uma coisa, como várias cabeças pensantes, cada uma com uma tarefa direta.
3. O resultado de todas as heads é concatenado para alimentar uma camada feed-forward, que trabalha o conteúdo.

## Exemplo com cinco heads

O professor imagina uma estratégia com cinco heads, apenas como ilustração de como a construção funciona por trás:

- concordância gramatical;
- relação semântica;
- atenção temporal;
- referência pronominal;
- hierarquia sintática.

Juntas, elas permitem chegar a uma frase completa, que passou por boa parte do que a gramática exige, porque a atenção foi dividida de forma poderosa entre esses itens.

## Gramática e geração de conteúdo

O professor antecipa a objeção de que a aula está falando mais de português do que de IA. A resposta é que a IA generativa foca na geração de conteúdo, no caso de linguagem, e por isso há correlação direta: é preciso entender bastante de gramática para entender como funciona essa geração.
