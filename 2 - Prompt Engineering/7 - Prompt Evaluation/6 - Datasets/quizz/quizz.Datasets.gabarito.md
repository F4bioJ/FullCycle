# Gabarito — Datasets

## 1. Prompt ainda não lançado: como obter os casos de teste
**Correta: B**
**Por quê:** a aula apresenta duas formas de montar o dataset, e uma delas é usar IA: um bom prompt que peça vários exemplos cobrindo os detalhes desejados. Sem execuções reais (o prompt nem foi lançado), é o caminho que destrava a avaliação logo, sem esperar volume de produção.
- **A:** é verdade que dados de produção tendem a refletir melhor o uso, mas a aula trata a geração com IA como alternativa válida justamente quando ainda não há volume real; adiar é o "travamento" que o professor descreve.
- **C:** A/B testing é comparativo e acontece em produção, com uso real; um prompt não lançado não tem esse uso, e a aula insiste que, para avaliar algo, é preciso ter o dado antes.
- **D:** o LLM as Judge é um evaluator, o executor da avaliação; ele precisa de entradas e saídas para julgar, ou seja, continua dependendo de um conjunto de casos.
**Conceito:** formas de montar o dataset (produção x geração com IA)

## 2. Logs de produção x exemplos gerados por IA
**Correta: D**
**Por quê:** pela aula, as execuções reais de produção precisam ser normalizadas e convertidas na estrutura usada pela avaliação; o resumo do professor acrescenta que elas tendem a refletir melhor o uso, ao custo de limpeza e organização.
- **A:** inverte a aula: é das execuções reais de produção que o professor diz ser preciso pegar os dados e normalizá-los na estrutura usada pela avaliação; o formato em que a aplicação registra não é, por si, o formato do dataset.
- **B:** inverte a troca: quem tende a refletir melhor o uso real são os dados de produção; a geração com IA ganha em rapidez e em cobrir as variações pedidas, mas os casos são os que a equipe imaginou.
- **C:** a aula apresenta as duas como formas alternativas e válidas, não como metades obrigatórias de um mesmo dataset.
**Conceito:** produção exige normalização; as duas fontes são válidas

## 3. Queda pequena no agregado: para que servem os metadados
**Correta: A**
**Por quê:** tópico e categoria permitem filtrar, agrupar e interpretar os resultados por tipo de problema; quando uma versão falha mais em uma categoria, os metadados ajudam a localizar a regressão que o número agregado esconde.
- **B:** a referência do evaluator é o output esperado (ground truth), não a categoria; o prompt da aula nem tenta prever categoria, ele devolve findings e summary.
- **C:** metadados não substituem a resposta esperada; eles classificam o caso, mas não dizem quais findings a saída deveria conter.
- **D:** os pesos do Composite Evaluator são definidos pela equipe sobre métricas (como correctness e relevance), conforme as prioridades do sistema; não vêm da contagem de exemplos por categoria.
**Conceito:** metadados para segmentar resultados

## 4. Papel do campo output no evaluation
**Correta: C**
**Por quê:** o output de cada exemplo é a resposta esperada (no caso, os findings e o summary corretos). Ele funciona como ground truth: a referência contra a qual o evaluator compara a saída que o prompt gerar.
- **A:** comparar a versão nova com a resposta da anterior seria uma comparação entre saídas, não o uso de uma referência; o output do dataset é o que se espera como certo, e não o que o prompt respondeu.
- **B:** o output contém conteúdo esperado (problemas, linha, severidade, resumo), não só o formato; ele serve à comparação do conteúdo da saída, e não se limita à validação de schema.
- **D:** o score é o que o evaluator devolve depois de comparar; ele não faz parte do exemplo do dataset.
**Conceito:** output como resposta esperada (ground truth)

## 5. Dataset de análise de código: afirmação INCORRETA
**Correta: B**
**Por quê:** é a incorreta. Na aula, o output pedido ao prompt (e registrado como resposta esperada) tem só findings e summary. Tópico (HTTP Client) e categoria (robustez) são metadados do exemplo: classificam o caso para filtrar e agrupar resultados, e não são algo que o prompt deva gerar.
- **A:** correta: o input traz a tarefa ("analise e retorne o JSON..."), mas o professor diz que, para a IA fazer a análise, é preciso um prompt no meio; o dataset não o substitui.
- **C:** correta: o professor usa o LangSmith, mas lembra que há outras ferramentas e também a forma manual.
- **D:** correta: os findings do exemplo trazem o problema (missing timeout), a linha 8, a descrição e a severidade, e o summary condensa as correções.
**Conceito:** estrutura do exemplo: input, output e metadados
