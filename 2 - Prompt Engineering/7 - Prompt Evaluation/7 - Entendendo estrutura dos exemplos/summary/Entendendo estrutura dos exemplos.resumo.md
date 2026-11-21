# Entendendo estrutura dos exemplos — resumo

## Onde esta aula entra

Depois de falar de dataset no vídeo anterior, o professor mostra como os exemplos do capítulo estão organizados. Há três categorias, e o foco agora é a número 1, a básica: ela concentra métricas e exemplos mais objetivos. Segundo ele, é básica, mas não tão básica assim.

## Pastas e arquivos do projeto

Há uma pasta `prompts`, com alguns prompts que serão usados, e um arquivo `dataset.jsonl`. O professor explica o JSONL: é um JSON in-line, em que cada linha é um JSON completo, formato muito usado para economizar espaço. O dataset tem 18 entradas. Ele não criou 100 para não estourar a conta do LangSmith. A tarefa é sempre a mesma; o que muda entre as entradas é o código analisado.

## Scripts de reset e de upload

O script `reset` apaga o dataset inteiro da ferramenta. O `UploadDataset` faz o upload do dataset, no caso para o LangSmith. Os exemplos de 1 a 10 servirão para entender o que está sendo analisado e como a análise evolui ao longo do tempo.

## A sequência dos exemplos

Esta é a primeira etapa. A segunda é mais complexa: trabalha com recall, precision e F1, e será preciso desenvolver as fórmulas. A terceira é o pairwise, para comparar prompts. O próximo vídeo começa pelo exemplo número 1.
