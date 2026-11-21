# Evaluators binarios

## Critério binário: passou ou falhou

Depois da primeira avaliação, o professor passa a detalhar as métricas uma a uma. Este segundo exemplo usa critério **binário**: a avaliação devolve 0 ou 1, sim ou não, sem caminho do meio. Em vez de dizer que uma saída tem, por exemplo, 0,8 de precisão, o evaluator só diz se ela passou ou falhou naquele critério. Para o professor, isso costuma ser a forma mais direta de trabalhar.

## O prompt e a preparação dos dados

O cenário continua sendo o revisor de código: um prompt simples ("você é um revisor de código especializado, analisa o trecho e responde apenas no formato pedido"), em um arquivo próprio, porque o professor prefere deixar cada exemplo autocontido.

A novidade está em como os dados chegam ao evaluator. Há duas funções:

- **`prepareDataNoRef`:** prepara os dados **sem referência**. Quem avalia não recebe ground truth, e o julgamento depende só do modelo;
- **`prepareDataWithRef`:** inclui o campo de referência com os `exampleOutputs` do dataset, os exemplos de como o output poderia ser.

## Critérios built-in do LangSmith

O LangSmith traz critérios de avaliação **built-in**: não é preciso criar fórmulas para eles, que já vêm prontos. No exemplo, dois são usados sem referência:

- **conciseness:** o quão concisa e direta é a resposta;
- **helpfulness:** se a resposta é útil.

## Labeled Criteria: critério com referência

O terceiro evaluator é um **Labeled Criteria**, que recebe a referência; daí o rótulo. No resultado, ele aparece como **correctness**. O professor avisa que passar ou não referência não torna, por si só, a avaliação melhor ou pior: com mais referência, o modelo juiz ganha base para decidir, mas é preciso executar para ver como funciona.

## Cada critério é um evaluator

Cada critério é, no fim, um evaluator, e todos entram na mesma lista passada à execução, cada um com ou sem referência. A chamada recebe o prompt, o dataset, a lista de evaluators e um **prefixo** para o experimento não se misturar com o anterior. São três evaluators para os 18 itens do dataset.

## Leitura do resultado

No LangSmith surge um novo experimento, o de critérios binários. Como o score é sim ou não, o painel mostra um **contador** de yes e no por critério, em vez de uma faixa de valores. Conciseness teve 18 yes, e helpfulness também passou. Correctness teve reprovações: o professor fala em 14 yes e 3 no (antes diz "13 incorretos", e a soma não fecha com 18), além de um valor diferente de yes ou no, que ele supõe ser uma observação do evaluator.

## Inspecionar o julgamento no tracing

Ao clicar em um item, dá para ver o run que executou a avaliação: o exemplo recebido, o output, o **reasoning** do juiz, o valor (não), o score e o critério usado para dizer que não estava correto, além dos metadados. Com esse tracing, quem avalia entende por que um item não passou, pode dar feedback, ajustar e rodar de novo.
