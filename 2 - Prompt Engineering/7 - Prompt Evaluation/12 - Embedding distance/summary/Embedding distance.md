# Embedding distance

## Embedding Distance como métrica semântica

Embedding Distance mede proximidade de significado entre dois textos comparando seus embeddings, em vez de pedir julgamento direto a um LLM. O evaluator transforma predição e referência em vetores e calcula uma distância ou similaridade, como cosseno ou L2. Isso importa quando o interesse está na aderência semântica geral da resposta, não apenas em formato ou presença literal de termos. O resultado é um sinal contínuo de quão próxima a saída está da referência em espaço vetorial.

## Uso de embeddings em vez de LLM judge

Um evaluator baseado em embeddings delega a comparação semântica ao modelo de embedding, não a um modelo que produz reasoning textual sobre a resposta. Essa escolha reduz a avaliação a uma operação geométrica entre vetores, o que tende a ser mais simples e rápido operacionalmente. Em contrapartida, a métrica perde capacidade de interpretar intenção, contexto de tarefa e adequação funcional além da semântica capturada no embedding. Por isso, ela funciona melhor como sinal específico de proximidade semântica, não como juiz universal de qualidade.

## Referência adequada determina a utilidade da métrica

Retomando o uso de referência já estabelecido, aqui ela precisa representar de forma fiel a resposta esperada. Se a referência for apenas uma lista simplificada de outputs ou exemplos parciais, a distância pode ficar baixa mesmo quando a resposta do modelo é útil. O problema não está necessariamente no prompt nem no evaluator isoladamente, mas no desalinhamento entre o que a métrica compara e o que o caso realmente considera correto. Embedding Distance depende fortemente da qualidade semântica da referência.

## Interpretando um score baixo

Um resultado como `0.11` sinaliza baixa proximidade entre a saída gerada e a referência usada no experimento. Esse número, sozinho, não prova que o prompt piorou nem que a resposta está errada para o caso de uso. Ele apenas mostra que, no espaço vetorial adotado, os dois textos ficaram distantes. A interpretação correta exige verificar se a referência era adequada e se proximidade semântica é mesmo a dimensão que interessa medir.

## Aplicação prática no experimento

A implementação segue um fluxo direto: configurar o evaluator built-in de `embedding distance`, preparar `prediction` e `reference`, executar a avaliação e inspecionar o score retornado. No cenário de revisão de código, a saída gerada é comparada semanticamente com a referência do dataset para medir quão próxima ela está do esperado. O prefixo do experimento ajuda a identificar a execução no dashboard, mas o ponto central é que a comparação depende integralmente do par resposta-referência enviado ao evaluator. Se esse par estiver mal definido, o score será tecnicamente válido e analiticamente fraco.

## Quando não usar essa métrica

Nem toda métrica serve para todo caso, e Embedding Distance é um exemplo claro disso. Se o dataset não contém algo próximo de uma resposta final esperada — por exemplo, se guarda apenas itens resumidos, pistas ou listas incompletas — a comparação semântica tende a gerar sinal pobre. Nessa situação, a métrica pode induzir conclusões erradas sobre a qualidade do prompt. A escolha da métrica deve partir do objetivo da avaliação e do tipo de evidência disponível no dataset.

## Critério adequado ao objetivo

A decisão de engenharia não é “qual métrica parece mais sofisticada”, mas “qual métrica mede o comportamento que importa neste problema”. Se o objetivo é proximidade semântica com uma resposta-alvo bem representada, Embedding Distance pode ser apropriada. Se o objetivo depende de correção operacional, aderência a rubrica, formato ou julgamento contextual, outras métricas tendem a produzir sinal mais confiável. Métrica adequada é a que combina com o objetivo e com o desenho da referência.
