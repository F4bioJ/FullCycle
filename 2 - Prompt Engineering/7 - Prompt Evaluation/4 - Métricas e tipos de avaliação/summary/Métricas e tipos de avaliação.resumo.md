# Métricas e tipos de avaliação

## De objetivos a métricas

Depois dos objetivos, é preciso saber com que métricas chegar a eles e como organizá-las. O professor as apresenta de forma geral, sem aprofundar: a maioria será mostrada na prática. Elas se dividem em categorias: objetivas, subjetivas, sistêmicas e comparativas.

## Métricas objetivas (determinísticas)

São as que dão o resultado por uma fórmula ou por uma regra clara, sem interpretação: rodou a fórmula, tem o resultado.

- **Precision, Recall e F1:** mostram o quanto a IA acerta, olhando falsos positivos e falsos negativos; o F1 junta as duas primeiras numa fórmula. No exemplo do professor, de 100 códigos, 40 têm bug. Se a IA diz que todos têm bug, ela pega os 40, mas marca como bug os 60 que não tinham, e a precisão fica baixa. O professor pede para não se prender a isso agora, porque vai implementar essas métricas depois.
- **Exact Match:** confere se o resultado obtido é exatamente o esperado.
- **String distance:** mede o quão próximo o texto gerado está do texto de referência, em geral por fórmula.
- **Embedding similarity:** compara pelo sentido. A referência e a saída viram embeddings, como na busca semântica, e mede-se o quão próximas elas ficam.
- **Validação de JSON e schema validation:** garantem que o output está estruturado da forma esperada.

## Métricas subjetivas e LLM as Judge

Dependem de alguém analisar o resultado. Esse alguém pode ser outra IA, no padrão **LLM as Judge** (o LLM como juiz), muito comum, ou pessoas que olham as saídas e fazem anotações. Exemplos: **correctness** (a resposta está correta segundo uma referência), **relevance** (responde de fato à pergunta), **faithfulness** (não alucina), **conciseness**, **helpfulness**, **harmfulness**, **bias** e **toxicity**. Segundo o professor, muitas delas já rodam com boa precisão usando um LLM, o que não impede de pôr também um humano para avaliar e dar notas.

## Os nomes variam

Os nomes mudam conforme a plataforma, a ferramenta ou o artigo. Termos como **Criteria Evaluators**, **Custom Rubric** ou **LLM Judge Rating Criteria**, e em geral "rubrica" ou "critérios", costumam indicar métricas subjetivas, aplicadas por um humano ou por outro LLM.

## Métricas sistêmicas

Focam na execução: latência, tokens gastos versus preço, throughput (quantas requisições por segundo o sistema aguenta) e pass rate (quantos exemplos passaram e quantos não). São dados claros sobre o sistema, sem entrar no detalhe do que é correto.

## Avaliação comparativa

No **pairwise evaluation** ou **model comparison**, compara-se a saída A com a saída B, por exemplo geradas por prompts diferentes. O **A/B testing** também compara duas versões, por isso não deixa de ser um pairwise. A diferença é que, nesse contexto, ele costuma rodar em produção, medindo taxas de aceitação e a performance real, e não necessariamente se o usuário disse que gostou.

## Ground Truth

É a referência, a fonte da verdade: as respostas corretas já conhecidas com que a saída é comparada. Se um dataset tem 10 testes cujo resultado correto se sabe de antemão, esse conjunto é o ground truth. O termo aparece em toda discussão sobre avaliação.

## Fechamento

Até aqui, o capítulo tratou dos objetivos (o quê) e das métricas e tipos de avaliação (como): objetivas, subjetivas, sistêmicas e comparativas.
