# RNNs

## Memória em sequências

RNNs foram projetadas para processar dados sequenciais, como texto, áudio, séries temporais e vídeo, preservando informação entre passos consecutivos. Retomando a limitação das redes feedforward já discutida, o problema central era a perda de contexto: o modelo processava uma janela fixa e não carregava adiante o que havia ocorrido antes. A RNN introduz um estado interno que funciona como memória próxima do processamento atual. Com isso, a saída em cada instante depende tanto da entrada corrente quanto do estado acumulado dos passos anteriores.

## Estado recorrente e coerência

O ganho prático dessa memória aparece quando a ordem dos elementos importa. Retomando o contraste entre frases com as mesmas palavras em ordens diferentes, a RNN consegue usar o histórico processado para favorecer sequências mais coerentes ao longo do texto. Esse mecanismo permitiu avanços relevantes em tradução automática, geração de texto, reconhecimento de fala e análise de sentimento. O ponto central não é apenas representar palavras em vetores, mas manter um rastro computacional do que já foi processado.

## Desvanecimento de gradiente

O principal limite das RNNs clássicas surge quando a dependência entre elementos fica muito longa. Durante o treinamento, os gradientes podem se tornar pequenos demais ao serem propagados por muitos passos, e a rede perde a capacidade de relacionar o estado atual com informações distantes do início da sequência. Esse fenômeno é o desvanecimento de gradiente. A consequência prática é o esquecimento de contexto longo, como errar a concordância entre um sujeito no começo da frase e um verbo no final.

## Explosão de gradiente

O problema oposto também ocorre: os gradientes podem crescer demais e tornar o treinamento instável. Quando isso acontece, pequenas atualizações passam a produzir mudanças excessivas nos parâmetros, o que degrada a aprendizagem e compromete a rastreabilidade do contexto. Esse fenômeno é chamado de explosão de gradiente. Assim, a mesma arquitetura que introduz memória também cria uma dinâmica de treinamento difícil de estabilizar em sequências extensas.

## Custo da computação sequencial

RNNs processam a sequência passo a passo, porque cada estado depende do anterior. Essa dependência impede paralelização eficiente no treinamento e na inferência, o que reduz throughput e dificulta escalar para grandes volumes de dados. O resultado é um modelo mais lento do que arquiteturas que conseguem processar múltiplos elementos simultaneamente. Essa limitação se torna crítica quando o vocabulário cresce e o contexto necessário fica mais complexo.

## LSTM como controle explícito de memória

LSTM, sigla para Long Short-Term Memory, modifica a RNN para controlar melhor o fluxo de informação na memória. Em vez de apenas acumular estado, a arquitetura decide o que entra, o que deve ser esquecido e o que segue para a próxima etapa. Esse controle é implementado por portas, incluindo entrada, esquecimento e saída. A ideia é reter padrões relevantes por mais tempo e descartar ruído antes que ele degrade o estado interno.

## GRU como simplificação da LSTM

GRU, sigla para Gated Recurrent Unit, persegue o mesmo objetivo da LSTM com uma arquitetura mais enxuta. Ela combina mecanismos que na LSTM aparecem separados, reduzindo o número de portas e, portanto, a quantidade de parâmetros. Essa simplificação tende a acelerar o treinamento e frequentemente entrega desempenho comparável em muitas tarefas. A troca é arquitetural: menos complexidade interna para tentar preservar boa capacidade de memória.

## O que LSTM e GRU não resolvem

Mesmo com essas melhorias, o processamento continua sequencial e o contexto muito longo ainda permanece difícil de capturar de forma robusta. LSTM e GRU mitigam os problemas de memória, mas não eliminam a limitação estrutural de depender do passo anterior para computar o próximo. Também continuam com dificuldade para escalar bem em grandes volumes e para modelar relações estruturais distantes entre tokens. Esse conjunto de limites motivou a próxima geração de arquiteturas voltadas a paralelismo e dependências de longo alcance.
