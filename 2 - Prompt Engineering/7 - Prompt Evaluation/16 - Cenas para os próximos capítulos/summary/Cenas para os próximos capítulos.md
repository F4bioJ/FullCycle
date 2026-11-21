# Cenas para os próximos capítulos

## Síntese do pipeline de avaliação

Avaliar prompts é um processo de engenharia porque o mesmo dataset pode sustentar várias leituras de qualidade, desde que as métricas estejam alinhadas ao objetivo já definido. O ponto central não é acumular scores, mas extrair sinais úteis para decidir se um prompt atende ao comportamento esperado. Essa estrutura permite comparar versões de forma reproduzível, em vez de depender apenas de impressão subjetiva.

## Métricas subjetivas e métricas determinísticas no mesmo fluxo

No mesmo experimento, convivem evaluators que julgam por meio de outro LLM e verificações mais exatas, como validação estrutural e comparações determinísticas. Retomando o cenário de revisão de código, critérios como correctness, relevance, faithfulness, conciseness e helpfulness entram como julgamento subjetivo quando um modelo atua como juiz; já schema validation, embedding similarity, string similarity e exact match entram como sinais mais objetivos. A consequência prática é que um pipeline maduro combina tipos diferentes de evidência, porque cada métrica captura uma dimensão distinta do comportamento do prompt.

## Ponte para precision, recall e F1

Precision, recall e F1 pertencem ao grupo de métricas de classificação e exigem uma camada adicional de formalização. Elas importam quando a saída precisa decidir entre classes ou estados observáveis, como tratar um achado como erro real ou não, ou decidir se um pull request deveria receber merge. Nesse contexto, não basta um evaluator genérico: é preciso contar acertos, falsos positivos e falsos negativos, aplicar fórmulas explícitas e transformar o resultado em medida operacional de desempenho.

## Como essas métricas entram na implementação

Essas métricas normalmente pedem implementação própria ou, no mínimo, uma instrumentação mais explícita do experimento. O fluxo envolve escrever funções, separar resultados por categoria, calcular proporções e consolidar os números em precision, recall e F1. Isso explica por que nem toda ferramenta expõe essas métricas de forma direta: elas dependem de como a tarefa foi modelada e de como a classificação foi extraída da saída do prompt ou do agente.

## Classificação aplicada ao cenário de revisão de código

Retomando o mesmo cenário de revisão de código, a próxima camada não é reavaliar estilo ou utilidade, mas medir capacidade de classificar corretamente problemas. A pergunta passa a ser quantitativa: quantos problemas reais o sistema encontrou, quantos ele inventou e quantos deixou passar. Esse enquadramento é especialmente importante quando a saída do prompt influencia decisões como aprovar merge, sinalizar risco ou priorizar correções.

## Precisão também vale para agentes, não só para prompts

A lógica de classificação não se limita ao texto final gerado por um prompt isolado. Quando um agente executa vários passos intermediários, consulta contexto e produz uma decisão final, precision, recall e F1 continuam sendo formas válidas de medir o quanto esse processo acerta. O valor dessas métricas está em resumir, em números comparáveis, a confiabilidade do comportamento produzido após toda a cadeia de processamento.

## Ponte para avaliação pairwise com juiz customizado

A comparação pairwise entra quando o objetivo deixa de ser apenas medir um prompt isoladamente e passa a ser decidir qual de duas versões é melhor no mesmo dataset. Em vez de olhar scores independentes e inferir manualmente um vencedor, o sistema confronta duas saídas diretamente e delega o julgamento a um juiz. O ponto novo aqui é que o critério de comparação também vira prompt: o juiz precisa receber instruções explícitas sobre como decidir entre as alternativas.

## Como funciona a comparação direta entre prompts

No pairwise, duas respostas geradas para a mesma entrada são colocadas lado a lado, e o evaluator decide qual delas vence segundo uma rubrica definida pela equipe. Retomando o exemplo recorrente, o mesmo caso de revisão de código seguirá adiante para comparar prompts concorrentes não por impressão geral, mas por julgamento estruturado entre saídas. Escrever o prompt do juiz é decisivo porque ele determina o que conta como vitória: mais precisão, melhor aderência ao código, menos alucinação ou outro critério operacional relevante.
