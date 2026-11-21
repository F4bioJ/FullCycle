# Score com range

## Do binário para o score com range

Depois dos evaluators binários, que devolvem `yes/no` ou `0/1`, a aula passa para os evaluators com score, que o professor diz usar bastante. O começo do código é o mesmo do exemplo anterior, com a preparação dos dados com e sem referência. O que muda é o tipo de avaliação: em vez de decidir só se a saída passou, o evaluator dá uma nota dentro de uma faixa.

## ScoreString e normalização por 10

O formato usado é o `ScoreString`, configurado com normalização por 10: o evaluator dá uma nota numa escala de 0 a 10, e o resultado é convertido para a faixa de 0 a 1. Com todos os critérios na mesma faixa, fica mais fácil agregar e comparar os resultados no painel. Um valor como `0.78` indica 78% da escala máxima daquele critério, não uma contagem de aprovações.

## Conciseness de novo, agora em range

O exemplo repete o critério `conciseness`, que já aparecia no experimento binário. O critério é o mesmo; muda a resolução da medida: em vez de perguntar se a resposta é concisa, o evaluator mede quão concisa ela é. Pelo resumo do professor, a triagem rápida favorece o binário, e a comparação fina entre versões favorece o score em range.

## Coherence, detail e depth, sem referência

Os outros critérios do exemplo, todos sem referência, porque dependem da qualidade interna da resposta:

- **Coherence:** se a análise é coerente e bem estruturada. Raramente falha por inteiro: a resposta costuma ser clara só em parte.
- **Detail:** se há detalhamento suficiente para sustentar a análise.
- **Depth:** o nível de profundidade, ou seja, se a análise vai além do óbvio.

Detail e depth não são a mesma coisa: uma resposta pode ter muitos detalhes superficiais sem aprofundar nada. Separar os dois evita confundir volume com qualidade.

## Relevance com referência: labeled ScoreString

O último critério, `relevance`, foi configurado com referência. A regra que o professor mostra: quando o critério precisa dos dados de referência, a configuração é `labeled ScoreString`; sem referência, basta `ScoreString`. A referência não muda a ideia da nota em faixa; muda a evidência que o evaluator usa para dar a nota. O professor lembra que dá para testar outras combinações e comparar.

## Leitura dos resultados no LangSmith

Rodado o exemplo, o painel mostrou coherence 0.85, conciseness 0.78, depth 0.79, detail 0.81 e relevance 0.82, junto das métricas de sempre: latência P50 e P99, erros e quantidade de execuções. No experimento binário, conciseness aparecia como contagem de `yes`; agora aparece como nota.

## Granularidade

O professor supõe que o evaluator binário tenha um ponto de corte interno ("a partir de tanto vai yes"), o que esconde as diferenças entre respostas que passam. Com o range, os números ficam mais granulares: duas respostas aprovadas no binário podem ter, por exemplo, 0.62 e 0.91. Segundo ele, isso costuma facilitar a noção de quão boa está a saída, e permite mirar a correção do prompt na dimensão que ficou mais fraca.
