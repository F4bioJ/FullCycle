# Entendendo Pairwise Evaluator vs Evaluation

## Pairwise: comparar duas respostas

Pairwise é a comparação de duas respostas para o mesmo input. Um terceiro participante, o juiz, avalia as duas, e são criados critérios para decidir quem ganhou. No exemplo do professor, o input era como trabalhar com timeout em um HTTP request com Go: a resposta A usava `context.WithTimeout` e a B usava `time.Sleep`. O tipo de avaliação era correctness, e a preferência indicou a A como vencedora.

## Pairwise evaluation vs Pairwise Evaluator

Pairwise evaluation é o tipo de avaliação, em que se comparam duas saídas. Ela está entre as formas comparativas, junto de prompts diferentes e do A/B testing, que acontece online, em produção. Pairwise Evaluator é quem executa a avaliação desse tipo. O professor destaca que esse evaluator aparece em várias ferramentas, inclusive no LangSmith, e por isso vale entender a diferença.

## Fluxo de três requisições

Executa-se a opção 1, depois a opção 2. Os dados das duas voltam em uma terceira rodada, feita pelo Pairwise Evaluator, que usa as duas respostas e o critério para dizer quem ganhou. São, portanto, três requisições. O professor deixou a demonstração prática para o próximo vídeo.
