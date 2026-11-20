# Resposta simples sem expansao na prtica

## Os dois exemplos práticos do capítulo

O professor prepara dois exemplos com objetivos diferentes:

- **ITER-RETGEN:** um loop iterativo para chegar a uma **resposta mais completa** a partir de uma pergunta vaga.
- **Query Enrichment:** transformar uma pergunta ampla ou mal formulada numa **pergunta mais completa**.

Um melhora a resposta; o outro melhora a própria pergunta.

## O experimento: resposta sem expansão

O ponto de partida é o arquivo `no_expansion.py`, uma resposta simples, sem nenhum fluxo de enriquecimento.

- **Modelo:** GPT-4 (ele comenta que já existem versões mais recentes), com **temperatura um pouco mais alta**, para ser mais criativo.
- **Prompt genérico:** "Você é um assistente na área de tecnologia. Responda à seguinte questão."
- **Chain:** o prompt vai para o LLM, que devolve a resposta final.
- **Pergunta:** *"Explain about LangChain and LangGraph"*, executada com `python no_expansion.py` (sem streaming, por isso a espera).

## O que observar

O modelo traz informações interessantes: explica que LangChain e LangGraph são ferramentas para facilitar o desenvolvimento, com aspectos de cada uma, num **resumo**. Mas, dependendo da situação, faltam detalhes. Às vezes se quer um documento com mais nuances, para uma busca mais aprofundada. O que se recebe é o conteúdo de uma resposta, que poderia ser cruzado com um banco de dados ou, como neste caso, entregue direto ao usuário.

## O que isso mostra

Com uma pergunta ampla, um prompt genérico e uma única chamada, o modelo entrega um bom resumo. Mas, dependendo da situação, pode faltar detalhe e nuance. Na aula seguinte, o professor usa fluxos iterativos para enriquecer esse tipo de resposta e mostrar a diferença.
