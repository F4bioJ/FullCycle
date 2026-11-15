# Aprofundando em LLM

## LLMs como evolução dos Transformers

LLMs modernos reaproveitam a base dos Transformers e adicionam adaptações arquiteturais e estratégias de implementação para ampliar sua capacidade de modelar linguagem. A ideia central não é substituir o Transformer, mas estendê-lo para lidar melhor com relações contextuais complexas em escala. Retomando o Transformer já estabelecido, o avanço aqui está em como a atenção é refinada para capturar múltiplos sinais ao mesmo tempo.

## Limitação do single-head attention

Single-head attention observa a sequência a partir de uma única perspectiva de relação por vez. Isso permite resolver dependências específicas, mas restringe a análise simultânea de fenômenos como tempo verbal, referência pronominal, ambiguidade e múltiplos sentidos. O efeito prático é uma leitura contextual mais estreita, suficiente para algumas conexões locais, mas limitada para interpretação rica de texto.

## Q, K e V na atenção

O cálculo de atenção usa três vetores por token: `Q` (`query`), `K` (`key`) e `V` (`value`). `Q` representa o que o token está “procurando” no contexto, `K` representa a identidade contextual disponível para correspondência, e `V` carrega o conteúdo que será propagado quando essa correspondência for relevante. No exemplo de um pronome como “ela”, a `query` equivale à pergunta “quem é ela?”, a `key` permite localizar a entidade compatível no contexto, e o `value` entrega a informação usada na interpretação final.

## Multi-head attention

Multi-head attention resolve a limitação anterior executando várias atenções em paralelo, cada uma especializada em um tipo de relação contextual. Em vez de tentar condensar toda a interpretação em uma única leitura, o modelo distribui o trabalho entre várias heads que observam aspectos diferentes da mesma sequência. Isso aumenta a robustez textual porque relações cruzadas passam a ser capturadas simultaneamente, não em etapas isoladas.

## Divisão dos vetores entre heads

A implementação divide os vetores de atenção em subespaços menores, e cada subespaço alimenta uma head distinta. Cada head aprende padrões próprios, como concordância gramatical, relação semântica, referência pronominal, atenção temporal ou hierarquia sintática. Ao final, as saídas dessas heads são concatenadas e enviadas para a camada feed-forward, combinando leituras parciais em uma representação mais completa.

## Especialização contextual das heads

Uma forma útil de interpretar as heads é tratá-las como mecanismos especializados, não como regras fixas programadas manualmente. Uma head pode se tornar sensível a concordância, outra a vínculos semânticos e outra a dependências pronominais, desde que isso seja útil durante o treinamento. Essa especialização emergente explica por que LLMs conseguem manter coerência textual melhor do que uma atenção única.

## Linguística como requisito para geração de texto

Geração de linguagem depende de estrutura linguística, não apenas de processamento numérico. Quando o modelo distingue referência, tempo, função sintática e relação semântica, ele melhora a construção de frases e a consistência do texto produzido. Por isso, entender atenção em LLMs exige conectar arquitetura de rede com fenômenos de gramática e interpretação.
