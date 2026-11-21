# Evaluators

## Runner como agente executor

Runner é o agente que efetivamente roda a avaliação definida pela equipe. Objetivo e métrica dizem o que medir e como medir; o runner responde quem aplica essa checagem sobre entradas, saídas e, quando existir, uma referência. Em implementações reais, esse executor pode ser código determinístico, uma LLM configurada para julgar respostas ou um avaliador especializado em comparação entre alternativas.

## Code Evaluator

Code Evaluator é um evaluator implementado como lógica programática: fórmula, regra ou função que inspeciona o resultado gerado e devolve um valor avaliativo. Ele normalmente opera sobre três elementos: input, output e um campo opcional de referência, usado quando existe ground truth para comparação. O retorno costuma ser estruturado e simples de consumir por pipeline, como número, string categórica ou booleano.

## Referência e ground truth no evaluator

A referência é o valor esperado usado pelo evaluator para decidir se a saída ficou dentro ou fora do critério definido. Quando ela existe, o evaluator deixa de apenas inspecionar a resposta e passa a compará-la contra uma base explícita, o que viabiliza métricas determinísticas como Exact Match. Sem essa referência, a avaliação ainda pode existir, mas tende a depender de julgamento por rubrica em vez de comparação direta.

## Exact Match como exemplo de execução por código

Retomando o uso de métricas já estabelecidas, Exact Match é um caso típico de Code Evaluator porque a regra de decisão é literal: a saída coincide exatamente com a referência ou não. Se a pergunta tem como ground truth `PostgreSQL` e a resposta também é `PostgreSQL`, o evaluator pode retornar algo como `key = Exact Match` e `score = 1`; caso contrário, `score = 0`. Esse formato binário é útil quando a tarefa exige correspondência exata e não tolera variação intermediária.

## LLM as Judge como evaluator

LLM as Judge usa uma LLM para aplicar critérios subjetivos já definidos por rubrica ou instrução. Em vez de calcular igualdade literal, esse evaluator interpreta a resposta segundo dimensões como relevância ou conciseness e devolve um score acompanhado, em muitos casos, de comentário justificativo. Se a pergunta é sobre goroutines em Go e a resposta fala de threads em Java, o evaluator pode atribuir baixa relevância porque a saída não atende ao domínio solicitado.

## Pairwise evaluator versus pairwise evaluation

Pairwise evaluation é o método comparativo entre duas saídas; pairwise evaluator é o agente que executa essa comparação e produz o resultado. A diferença importa porque o critério comparativo já pode estar definido previamente, mas ainda é preciso um executor que receba as duas respostas, aplique esse critério e devolva uma preferência. Em um caso com o mesmo input, se a resposta A usa `context.WithTimeout` e a B sugere `time.Sleep`, o evaluator pode retornar `pairwise preference = A` por aderência técnica ao problema.

## Summary Evaluator

Summary Evaluator agrega resultados individuais de vários exemplos e os transforma em métricas consolidadas. Ele existe porque olhar item por item em um dataset maior dificulta perceber o comportamento geral do prompt, enquanto o resumo mostra tendência, taxa de acerto e desempenho agregado. Em um conjunto de dez casos, esse evaluator pode compilar pass rate, precision, recall e F1 para representar o experimento em poucas medidas finais.

## Métricas agregadas

Métricas agregadas são valores calculados a partir do conjunto de avaliações individuais, não de um único exemplo isolado. Elas servem para responder como o prompt se comporta no dataset como um todo, reduzindo o risco de concluir algo com base em casos pontuais. Pass rate, precision, recall e F1 entram nessa camada porque resumem distribuição de acertos e erros ao longo da amostra avaliada.

## Composite Evaluator

Composite Evaluator combina múltiplas métricas em um score derivado por fórmula definida pela equipe. Diferentemente do summary simples, ele não apenas resume o que já foi medido: ele aplica pesos e produz uma medida composta alinhada ao que mais importa no sistema. Se correctness vale 0,9, relevance 0,7 e conciseness 0,8, uma média ponderada com pesos 0,5, 0,3 e 0,2 pode gerar um score final como `0,83`, sintetizando prioridades de negócio e engenharia.

## Camadas de abstração na interpretação dos resultados

O fluxo completo pode ter três níveis: avaliação individual por exemplo, resumo agregado do dataset e score composto por fórmula. O primeiro nível responde ao caso específico; o segundo mostra o comportamento geral; o terceiro reorganiza esse comportamento segundo pesos estratégicos. Essa separação ajuda a interpretar experimentos de prompt sem confundir observação local com decisão global.
