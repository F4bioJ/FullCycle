# Additional criteria — resumo

## Correctness com referência e nota graduada

A aula retoma o exemplo 4, focado em correctness. O dataset é o mesmo, com referência, e os evaluators são o correctness com referência e, de novo, o relevance com referência. No LangSmith, o correctness inicial aparecia como true ou false; agora as notas saem graduadas (o professor lê 0,75 para correctness e 0,84 para relevance). Assim dá para comparar as versões binária e graduada, com e sem referência.

## Faithfulness customizado

O exemplo 5, "Additional Criteria", traz outros evaluators, também com `ScoreString` normalizado por 10. O primeiro é um critério Faithfulness escrito pelo professor, sem usar a opção built-in: na descrição, ele diz que a resposta precisa ser grounded, isto é, vir do código analisado, sem inventar problema ou contexto que não existe no código e sem assumir o que não foi mostrado. Esse evaluator roda sem referência (não é labeled): ele julga a resposta a partir do input, guiado pela descrição.

## Format adherence customizado

O segundo critério é Format Adherence, também com descrição própria: a resposta deve seguir exatamente as instruções e retornar somente um JSON válido, sem texto antes ou depois, sem markdown e sem explicação extra.

## Code specificity

O terceiro, code specificity, mede o quanto a análise foi específica: se apontou a linha de código com o problema, se usou termos técnicos e se trouxe dados. O professor diz que usou um prompt bem simples, só para ilustrar.

## Reescrever um critério como customizado

O ponto principal, para o professor, é reescrever um critério que poderia ser built-in, detalhando-o com as próprias instruções: ele vira um critério customizado. A ideia geral é a mesma: dá para usar os built-ins do LangSmith ou customizar, e, nos dois casos, trabalhar com ou sem referência.

## Lendo o reasoning do evaluator

No resultado do exemplo 5, a especificidade ficou em 0,91, o faithfulness em 0,71 e o formato em 0,98. Para entender por que o formato não chegou ao máximo, o professor abre o reasoning: a resposta era um JSON válido, sem texto antes ou depois, mas não estava em inglês, como se esperava, e por isso o evaluator considerou que ela não aderiu completamente às instruções. Na leitura do professor, havia português no meio de um conteúdo em inglês, e isso foi penalizado. Olhar esse detalhe facilita entender o comportamento do prompt.

## Latência, tokens e custo

Além das notas, o LangSmith mostra latência, tokens e custo de cada execução. Como isso depende muito do tamanho do prompt, acompanhar esses números mostra quanto se gasta ao longo do tempo.
