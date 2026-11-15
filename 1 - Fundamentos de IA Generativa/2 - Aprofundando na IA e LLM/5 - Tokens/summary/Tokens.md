# Tokens

## Tokens no processamento de linguagem

Tokens são as unidades que o modelo realmente processa no lugar de palavras inteiras. Essa escolha existe porque linguagem natural é aberta: surgem palavras novas, há erros de escrita, múltiplos idiomas e variações de uso. Em vez de depender de um vocabulário fechado de palavras completas, o modelo trabalha com partes recorrentes de texto, o que reduz a complexidade do vocabulário e aumenta a flexibilidade para lidar com entradas desconhecidas. O resultado final continua sendo linguagem, mas a representação interna é fragmentada.

## Por que palavra não é a unidade ideal

Tratar cada palavra como unidade básica tornaria o treinamento mais frágil diante de neologismos, grafias incorretas e termos raros. A tokenização resolve isso quebrando palavras em segmentos mais frequentes, de modo que uma palavra nunca vista ainda possa ser interpretada a partir de partes conhecidas. Isso permite generalização melhor entre idiomas, estilos de escrita e variações ortográficas. A entrada e a saída deixam de ser sequências de palavras e passam a ser sequências de tokens.

## Byte Pair Encoding

Byte Pair Encoding, ou BPE, é um esquema de tokenização baseado em frequência de coocorrência entre partes do texto. O processo começa com unidades menores e vai agrupando combinações que aparecem muitas vezes no corpus de treinamento. Quanto mais recorrente for uma sequência, maior a chance de ela virar um token estável; quando a combinação é fraca, os elementos tendem a permanecer separados. Modelos da família GPT usam esse tipo de estratégia para construir seu vocabulário.

## Como os agrupamentos surgem

Retomando a ideia de quebrar `cachorro`, o texto pode começar separado em unidades mínimas e depois formar grupos como `CA`, `CH` ou `OR` conforme a incidência observada nos dados. Não existe tamanho fixo para token: ele pode ter uma letra, um pedaço de palavra ou uma palavra inteira. Se uma sequência como `cache` aparecer com força estatística suficiente, ela pode virar token mesmo sendo apenas parte da palavra original. Já outra palavra, como `artificial`, pode permanecer inteira se sua ocorrência recorrente justificar isso.

## Tokens de tamanhos diferentes

A tokenização não preserva fronteiras linguísticas humanas de forma rígida. Uma palavra curta como `sol` pode corresponder a um único token, enquanto uma palavra maior como `interessante` pode ser dividida em dois ou mais tokens. Termos longos, técnicos ou pouco frequentes tendem a ser quebrados em mais partes porque suas subunidades aparecem com mais regularidade do que a palavra completa. Por isso, contar palavras não é uma boa aproximação para contar custo ou contexto em modelos de linguagem.

## Exemplo com `GPT-4 é poderoso`

Em uma sequência como `GPT-4 é poderoso`, partes muito recorrentes podem se consolidar como tokens independentes, como `GPT`, `4`, `é`, `poder` e `oso`. A lógica não é semântica no sentido humano; ela é estatística e depende do que apareceu repetidamente durante o treinamento. Um fragmento pode virar token mesmo sem “significar” algo isoladamente, desde que seja útil para compor muitas sequências. Isso explica por que o vocabulário do modelo mistura palavras completas, prefixos, sufixos e fragmentos frequentes.

## Quando os tokens são definidos

Os tokens não são criados dinamicamente a cada conversa. O vocabulário tokenizado é consolidado durante a fase de treinamento, quando o modelo lê grandes volumes de texto e aprende quais agrupamentos são mais úteis. Depois disso, novas entradas são convertidas usando essa cadeia de tokenização já estabelecida. Retomando os conceitos anteriores de embeddings e atenção, cada token resultante é a unidade que segue para essas etapas do modelo.

## Tokens, embeddings e atenção

Onde antes era conveniente falar em “palavras”, agora a unidade correta é token. Cada token passa por embedding e depois participa do mecanismo de atenção e do cálculo probabilístico de próxima saída, como já foi introduzido anteriormente. Essa troca de unidade altera a forma correta de medir entrada, saída e contexto. Em LLMs, o pipeline opera sobre tokens do início ao fim.

## Janela de contexto e custo computacional

Limites como `8.000 tokens` ou `32.000 tokens` medem capacidade de contexto em tokens, não em palavras nem em caracteres. Isso importa porque uma mesma frase pode consumir quantidades diferentes de tokens dependendo do idioma, da escolha de palavras e da presença de termos raros. O custo computacional e financeiro também costuma ser calculado dessa forma. Em serviços gerenciados, como provedores de IA e ML, a cobrança normalmente acompanha o volume de tokens processados.
