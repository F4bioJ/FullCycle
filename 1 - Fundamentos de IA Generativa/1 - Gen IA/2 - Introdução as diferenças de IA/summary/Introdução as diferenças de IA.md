# Introdução as diferenças de IA

## IA tradicional: prever a partir de dados conhecidos

A IA tradicional opera sobre entradas e saídas previamente definidas. Em vez de criar algo novo, ela aprende relações entre variáveis conhecidas para estimar uma resposta provável, o que a torna adequada para previsão e apoio à decisão. Esse paradigma depende de exemplos em que o sistema já sabe o que entrou e qual deveria ser o resultado.

## Dados rotulados e aprendizado supervisionado

Dados rotulados são registros em que cada exemplo já vem associado à categoria ou ao valor esperado. Isso existe porque o modelo precisa de referência explícita para aprender a mapear input para output sem ambiguidade. Se os rótulos estiverem errados — por exemplo, imagens de cachorro marcadas como humano — o sistema aprenderá a associação errada, porque ele não corrige sozinho a semântica do dado.

## Classificação e regressão

Classificação é a tarefa de escolher entre categorias discretas, como sobreviver ou não sobreviver, spam ou legítimo, fraude ou operação normal. Regressão estima um valor contínuo ou quantitativo, como volume de tráfego, demanda futura ou número esperado de pessoas indo à praia. As duas tarefas usam padrões observados no histórico, mas diferem no tipo de saída: classe fechada na classificação, valor numérico na regressão.

## Exemplo do Titanic

No cenário do Titanic, o modelo recebe atributos como idade, classe, posição da cabine e outras características dos passageiros. Como o histórico já informa quem sobreviveu e quem morreu, o treinamento ajusta o algoritmo para associar combinações de atributos a um dos dois resultados possíveis. O ponto central não é “descobrir” o passado, mas usar esse passado rotulado para prever o desfecho de novos casos com estrutura semelhante.

## Previsão, decisão e score

Retomando a lógica de previsão já conhecida, a IA tradicional observa padrões recorrentes e transforma isso em decisão operacional. Em fraude bancária, por exemplo, o sistema aprende o comportamento usual do cliente e sinaliza desvios com um score de risco; em filtros de spam, separa mensagens com base em traços já reconhecidos como suspeitos. O valor prático está em automatizar triagem, priorização e recomendação em grande escala.

## Limitação estrutural da IA tradicional

A restrição desse paradigma é que ele generaliza sobre o que já foi aprendido, mas não sintetiza uma saída nova no sentido generativo. Ele identifica, classifica, ranqueia ou prevê dentro de um espaço de respostas já delimitado pelo treinamento e pela tarefa. Por isso, recomendação, detecção e reconhecimento funcionam bem nesse modelo, enquanto criação aberta exige outra abordagem.

## IA generativa: aprender padrões para compor novas saídas

A IA generativa aprende regularidades internas dos dados e usa essas regularidades para produzir novos exemplos coerentes com o que foi aprendido. A mudança de mentalidade está em sair de “qual rótulo devo atribuir?” para “qual saída posso compor a partir dos padrões observados?”. Isso explica por que a resposta não precisa existir previamente como opção fechada: ela é construída no momento da interação.

## Menor dependência de rótulos explícitos

Diferentemente da IA tradicional, a IA generativa pode aprender com menor dependência de rotulagem manual exaustiva. Em vez de exigir que cada exemplo venha marcado com a resposta correta em formato rígido, ela explora grandes volumes de dados para captar estrutura, sequência, contexto e relações implícitas. Isso amplia a escala de treinamento e muda o tipo de conhecimento que o modelo consegue internalizar.

## Saídas originais e composição condicionada

Retomando a ideia de saída original já introduzida, o ponto novo aqui é o contraste com a previsão tradicional: a saída não está pré-fixada como uma classe conhecida. Quando o usuário fornece uma instrução, o modelo usa o contexto recebido para determinar o que gerar em texto, imagem, som ou código. O resultado continua condicionado aos padrões aprendidos, mas é composto dinamicamente em vez de selecionado de uma lista de respostas possíveis.

## Tradução sofisticada, código e wearables

Essa capacidade generativa viabiliza tarefas como escrita automatizada, geração de imagens, produção assistida de código e tradução automática sofisticada. Em tradução em tempo real, o sistema não apenas identifica palavras isoladas, mas recompõe a mensagem de forma coerente no idioma de destino. O mesmo princípio começa a aparecer em wearables e dispositivos embarcados, como óculos inteligentes e smart rings, que usam geração contextual para apoiar interação contínua no dia a dia.

## Contexto longo e coerência

Modelos generativos modernos conseguem manter coerência ao longo de entradas maiores porque processam dependências entre partes distantes do conteúdo. Retomando brevemente o Transformer, já apresentado antes, ele é a base que permite lidar melhor com contexto longo e sustentar continuidade semântica durante a geração. Isso é decisivo em tarefas como diálogo, tradução e produção de texto extenso, nas quais o sentido depende do que veio muito antes.

## Analogia: múltipla escolha versus escritor

A analogia mais útil é comparar a IA tradicional a um aluno de múltipla escolha e a IA generativa a um escritor. O primeiro escolhe entre alternativas já dadas; o segundo produz uma nova história a partir do repertório que acumulou. A implicação prática é direta: sistemas tradicionais são fortes quando o espaço de resposta é conhecido, enquanto sistemas generativos se destacam quando a tarefa exige composição, reformulação e criação condicionada ao contexto.
