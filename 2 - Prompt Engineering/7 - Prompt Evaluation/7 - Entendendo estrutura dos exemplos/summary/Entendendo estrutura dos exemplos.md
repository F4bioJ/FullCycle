# Entendendo estrutura dos exemplos

## Estrutura mínima do projeto

Um laboratório de prompt evaluation precisa separar claramente prompts, dataset e scripts operacionais. A pasta `prompts` concentra as variações de instrução que serão testadas, enquanto o arquivo `dataset.jsonl` guarda os casos de entrada usados de forma repetível. Essa organização evita misturar lógica de experimento com dados e facilita comparar versões sem perder rastreabilidade. No cenário de revisão de código, a tarefa permanece a mesma e o que varia entre os exemplos é o código analisado.

## JSONL como formato de dataset

JSONL é um formato em que cada linha do arquivo contém um JSON completo e independente. Ele é útil para datasets de avaliação porque simplifica leitura incremental, versionamento e processamento por scripts, sem exigir carregar uma grande estrutura única na memória. Em vez de um array JSON monolítico, o arquivo vira uma sequência de registros autônomos, o que combina bem com pipelines de upload, inspeção e execução em lote. Quando o dataset cresce, esse formato também reduz atrito operacional para adicionar, remover ou revisar exemplos individualmente.

## Scripts `resetDataset` e `uploadDataset`

O script de reset existe para limpar o estado anterior do experimento na ferramenta de avaliação antes de reenviar os casos. Isso evita duplicidade, inconsistência entre versões do dataset e resultados contaminados por execuções antigas. Já o `uploadDataset` publica o conteúdo local para o LangSmith, transformando o arquivo fonte em um dataset utilizável pelos testes. Juntos, esses scripts criam um ciclo operacional simples: limpar, subir e então executar as avaliações sobre uma base controlada.

## Upload para LangSmith

Retomando o uso de LangSmith já conhecido, o upload serve para registrar os exemplos em um ambiente onde os prompts poderão ser executados e comparados de forma organizada. O ponto importante aqui não é a ferramenta em si, mas o fato de o dataset local virar uma referência compartilhada para os experimentos seguintes. Como a conta e os limites de uso influenciam o volume de exemplos, um conjunto menor pode ser suficiente para preparar o fluxo inicial sem perder a utilidade pedagógica. No exemplo, 18 entradas bastam para estruturar o laboratório antes de escalar a avaliação.

## Sequência pedagógica dos experimentos

Os exemplos foram organizados em três camadas de complexidade crescente. A primeira categoria cobre casos mais básicos e tende a enfatizar aspectos mais objetivos, servindo como porta de entrada para entender a mecânica da avaliação. Depois entram métricas de classificação, que exigem cálculo e agregação de resultados no dataset inteiro. Por fim, a comparação pairwise passa a responder qual prompt vence contra outro segundo um critério já definido.

## Precision, Recall e F1 no fluxo do projeto

Precision, recall e F1 aparecem na etapa seguinte porque exigem uma estrutura de avaliação mais disciplinada do que testes básicos. Essas métricas dependem de contabilizar acertos, falsos positivos e falsos negativos ao longo de vários exemplos, o que torna o dataset e sua organização ainda mais importantes. O ganho é sair de observações caso a caso para uma leitura agregada do comportamento do prompt. Quando o objetivo envolve classificação ou detecção, essas métricas mostram desequilíbrios que uma impressão qualitativa isolada não revela.

## Como navegar pelos exemplos

Os exemplos numerados funcionam como uma trilha de experimentação. Cada arquivo representa um recorte específico do que será analisado e da forma como essa análise evolui ao longo do projeto. A leitura correta não é tratar cada exemplo como algo isolado, mas como parte de uma progressão: primeiro entender a base operacional, depois medir com fórmulas e, por último, comparar alternativas de prompt diretamente. Esse encadeamento reduz confusão e deixa claro onde cada peça entra no processo de avaliação.
