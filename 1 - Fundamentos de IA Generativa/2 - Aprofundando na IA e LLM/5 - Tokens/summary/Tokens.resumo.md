# Tokens — resumo

## Por que falar de tokens agora

Nas aulas anteriores o professor falou em palavras que entram, palavras que saem e encadeamento entre elas, porque era a forma mais simples de explicar. Por trás dos panos, a IA não usa palavras diretamente: ela pensa de forma mais "quebrada". Chegou a hora de complicar um pouco, e o assunto entra agora porque o próximo capítulo trata de LLMs, e entender a tokenização antes ajuda nessa etapa.

## Por que palavras não servem

A linguagem natural é aberta e cheia de variáveis. Surgem palavras novas o tempo todo, porque as pessoas inventam termos e ninguém consegue fechar a lista. Há erros de escrita e de fala. Há muitos idiomas, com variações de interpretação. Treinar uma IA usando só palavras inteiras, segundo o professor, teria dado muito problema. A solução é simplificar para a linguagem da máquina: o processamento usa um vocabulário próprio, diferente do que conhecemos como palavra, mas que no fim chega ao mesmo lugar, que é a linguagem.

## O que se ganha com tokens

- O vocabulário total diminui, e fica mais fácil prever que tipo de entrada vai chegar.
- Palavras desconhecidas são tratadas quebrando-as em partes mais familiares.
- Há mais flexibilidade para qualquer idioma e para estilos de escrita diferentes, inclusive quando o usuário erra.

## O que é um token e o Byte Pair Encoding

Na prática, um token é uma forma de reorganizar letras. Existem vários métodos de tokenização, e o exemplo da aula é o Byte Pair Encoding (BPE), citado como o usado pelo ChatGPT (os modelos GPT-3, GPT-3.5 e GPT-4, com algum grau de incerteza do professor quanto às versões).

Com "cachorro", o BPE poderia gerar dois tokens, como "cach" e "orro", ou manter "cachorro" inteiro. Com "inteligência artificial", poderia separar as duas palavras. Em "GPT-4 é poderoso", surgem vários tokens. O professor avisa que explica de forma abrangente, sem entrar no detalhe do cálculo.

## Como o BPE agrupa

O processo começa quebrando o texto nas menores unidades. "Cachorro" vira oito letras separadas. Depois a máquina avalia quais delas deveriam se agrupar, como "CA", "CH" e "OR". O critério é a incidência: quantas vezes a combinação aparece nos textos. Quanto mais vezes "CA" aparece junto, mais forte fica esse token. Quando as letras quase nunca aparecem juntas, a combinação é fraca, e cada uma permanece sozinha.

Não há tamanho fixo: um token pode ter uma, duas, quatro ou mais letras, e alguns são palavras inteiras.

## Pedaço forte contra palavra inteira

Por isso um pedaço como "cach" pode ser um token, e "artificial" também. Se a força do pedaço for maior do que a da palavra inteira, o pedaço vira token e "cachorro" não. O token pode ser meia palavra ou uma palavra completa, conforme a força estatística.

## O exemplo "GPT-4 é poderoso"

"GPT" aparece muitas vezes nos textos sobre IA, então tende a vir como um bloco e a virar um token. O hífen também não vem junto de nada, pode aparecer em qualquer texto e é difícil de correlacionar, o que o leva a ser um token à parte. O "4" também tende a ficar separado, porque número é mais difícil de conectar com outras sequências. O "é" sozinho é muito frequente no português, mais do que dentro de palavras, então fica forte e vira token. "Poder" pode ser um token, e "oso" outro.

O professor repete que tudo está como "pode ser", porque no treino ninguém sabe de antemão o que vai sair: talvez nem quem treina entenda a divisão. A máquina consegue montá-la sozinha.

## Quando os tokens são formados

Isso não acontece durante a conversa. Os tokens já foram formados na criação do modelo, quando ele leu vários textos e foi formando a sua cadeia de tokenização. Depois, os textos novos são convertidos usando essa cadeia.

## Tokens de tamanhos diferentes

Token não é bem uma palavra: pode ser um pedaço de palavra, uma letra ou uma palavra inteira. "Sol" e "você" podem ser um token cada. "Interessante" tende a se dividir em dois, por ter trechos mais fortes que a palavra inteira, e o mesmo vale para "naturalmente". O professor já viu palavras com cinco tokens. Termos muito complexos, grandes ou técnicos tendem a gerar mais tokens, mas o mais comum é ter de um a três.

## Tokens na entrada, na saída e no modelo

A entrada e a saída do modelo são sempre sequências de tokens, não de palavras. Cada token passa por um embedding, depois pelo módulo de atenção e pelo cálculo de probabilidade, como visto antes. Tudo o que foi explicado com palavras vale agora com tokens no lugar.

## Contexto e custo

O custo computacional e o limite de contexto ficam mais organizados em tokens. Uma janela de 8.000 ou 32.000 é medida em número de tokens, e não de palavras ou de caracteres. Em serviços de IA ou de ML de provedores como a AWS (o professor cita o Bedrock), a cobrança normalmente é por token. Daqui para frente, custo e estratégia de criação de uma IA se pensam por token, porque o processamento é feito em cima dele.

## Próximo passo

Na próxima aula começa o capítulo de LLMs, e a noção de token ajuda a acompanhar o que vem.
