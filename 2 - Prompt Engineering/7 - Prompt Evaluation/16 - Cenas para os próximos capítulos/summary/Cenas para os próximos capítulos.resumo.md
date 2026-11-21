# Cenas para os próximos capítulos — resumo

Aula de encerramento do capítulo: o professor junta as pontas do que foi feito e anuncia o próximo capítulo.

## O que o capítulo mostrou

Com o mesmo dataset, foram feitas diversas avaliações. As métricas mostram informações úteis para atender aos objetivos escolhidos na hora de avaliar um prompt; por isso são tão importantes.

## Métricas subjetivas e objetivas

- **Subjetivas:** correctness, relevance, faithfulness, conciseness e helpfulness. São subjetivas porque quem julgou foi outro LLM (LLM as a Judge).
- **Objetivas e determinísticas:** validação de JSON, schema, embedding similarity, string similarity e exact match. Alguns avaliadores eram mais diretos, com fórmula customizada.

## O que ficou de fora

Precision, recall e F1 não foram tratados. São métricas conhecidas e padrão de mercado, mas nem todas as ferramentas as implementam claramente, em parte porque têm relação direta umas com as outras.

## Próximo capítulo

- **Métricas de precisão:** um pouco de teoria e uma função própria, com divisões e fórmulas. São importantes principalmente em classificação: decidir se algo é erro ou não, ou se um pull request pode receber merge, e medir a precisão do prompt ou de um agente.
- **Pairwise:** comparar diretamente prompts diferentes sobre o mesmo dataset e decidir qual é melhor com base num juiz, cujo prompt também será escrito.
