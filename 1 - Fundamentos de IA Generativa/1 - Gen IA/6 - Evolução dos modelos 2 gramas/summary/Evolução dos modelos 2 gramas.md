# Evolução dos modelos 2 gramas

## Bigrama como modelo local de linguagem

Modelo de bigrama, ou 2-grama, estima a próxima palavra usando apenas a palavra imediatamente anterior. Ele funciona como uma simplificação extrema da geração token a token já vista antes: em vez de considerar um contexto amplo, reduz a decisão a pares locais de palavras. Isso foi útil historicamente porque permitia modelar linguagem com estatística simples e custo computacional baixo. O problema é que linguagem natural não se sustenta apenas com transições locais frequentes.

## Previsão da próxima palavra por frequência

Nesse tipo de modelo, gerar texto significa escolher a continuação mais provável com base nas combinações observadas no treinamento. Se “bom” aparece muitas vezes seguido de “dia”, o sistema aprende que “dia” é uma continuação forte para “bom”. Essa lógica captura regularidades reais da língua, mas só no nível de vizinhança imediata. Ela não distingue bem quando a continuação correta depende de intenção, tema ou estrutura mais longa.

## Dependências de longo prazo

Dependências de longo prazo são relações entre partes distantes de uma sequência que ainda precisam permanecer conectadas para o texto fazer sentido. Em linguagem humana, uma ideia introduzida no início pode orientar várias frases depois, mesmo sem repetição literal. Um modelo de bigrama falha nesse ponto porque sua janela operacional é curta demais para preservar esse vínculo. Por isso ele pode produzir frases localmente plausíveis e globalmente desconexas.

## Ausência de memória e de projeção global

Retomando o cenário de geração de texto, o bigrama não mantém memória efetiva do que já foi construído além do par atual. Ele também não projeta um objetivo global para a frase, como concluir uma ideia, manter um tópico ou preparar a próxima informação relevante. O resultado é uma sequência que avança sem plano e sem histórico amplo. Isso explica por que esses modelos perdem coerência mesmo quando cada passo isolado parece estatisticamente aceitável.

## Fragmentação e repetição

Quando o modelo aprende que uma combinação ocorre com frequência, ele tende a reutilizá-la excessivamente. Na frase “o gato preto dorme no sofá”, se “gato preto” for um par muito forte, a geração pode cair em repetições como “o gato preto dorme no sofá, gato preto” ou repetir o bloco inteiro. Esse comportamento não surge de intenção semântica, mas de uma preferência estatística local. A consequência prática é texto fragmentado, repetitivo e com aparência de looping.

## Coerência local versus coerência global

Um bigrama pode acertar transições curtas e ainda assim fracassar como modelo de linguagem fluida. “Gato preto” e “preto dorme” podem ser pares aceitáveis, mas isso não garante que a frase inteira preserve sentido, progressão e unidade temática. Coerência local significa que pequenos trechos parecem plausíveis; coerência global exige que o texto inteiro se sustente como raciocínio. Modelos antigos ficavam presos no primeiro nível.

## Semântica não é só estatística local

Esses modelos não compreendem semântica no sentido forte; eles operam sobre padrões de ocorrência. Isso basta para reproduzir associações frequentes, mas não para acompanhar construção de significado ao longo de uma sequência maior. Linguagem envolve relação entre termos, contexto acumulado e continuidade de raciocínio, não apenas proximidade entre palavras. Por isso a limitação não era só de qualidade superficial, mas estrutural.

## Por que foi necessário evoluir até modelos mais modernos

A passagem para arquiteturas mais avançadas aconteceu porque modelos estatísticos locais não sustentavam linguagem natural com fluidez, memória e contexto amplo. Retomando a progressão histórica já vista, o ganho de processamento ajudou, mas a mudança decisiva foi representar linguagem com mecanismos capazes de conectar partes distantes da sequência. Essa transição prepara diretamente a entrada nos LLMs, que existem justamente para superar ausência de memória local, repetição e perda de coerência. A simplificação com bigramas é intencional porque deixa visível o problema que os modelos modernos precisaram resolver.
