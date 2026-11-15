# Batch Prompting — resumo

## O que é Batch Prompting
Estratégia de enviar múltiplas perguntas ou requisições em uma única chamada. O modelo processa tudo de uma vez e retorna respostas para cada item do lote, evitando inúmeras requisições sequenciais.

## Velocidade
Processar dez itens numa única chamada é muito mais rápido do que fazer dez chamadas separadas, reduzindo overhead de rede e processamento.

## Consistência nas respostas
Todas as perguntas compartilham o mesmo contexto e condições de execução, o que tende a manter consistência entre as respostas geradas.

## Redução de custo por requisição
Evita repetição do prompt de sistema (ex.: "você é um especialista em Prompt Engineering, formate em JSON"). Em chamadas individuais, esse prefixo consome tokens a cada item; no batch, aparece uma só vez. Em larga escala (milhares ou milhões de itens), a economia é significativa.

## Limitação: similaridade entre tarefas
Os itens do lote devem ser bem similares no formato de resposta e no objetivo. Misturar tarefas muito diferentes (ex.: receita culinária + geração de testes automatizados) causa problemas de ambiguidade e perda de qualidade.

## Quando usar
Indicado para processamento em larga escala de diversos prompts homogêneos, proporcionando velocidade, economia e tranquilidade operacional.

## Mapeamento de respostas
É necessário conseguir associar cada resposta gerada ao seu item de origem, mantendo identificadores ou ordem estável para processamento posterior confiável.
