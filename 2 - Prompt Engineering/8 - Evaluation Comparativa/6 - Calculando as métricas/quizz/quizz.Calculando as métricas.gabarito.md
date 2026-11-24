# Gabarito — Calculando as métricas

## 1. Contagens e métricas de um item
**Correta: C**
**Por quê:** TP é a interseção ({`sql_injection`} = 1). FP é previsto menos esperado ({`n_plus_one`, `nome_ruim`} = 2). FN é esperado menos previsto ({`race_condition`} = 1). Precision = 1 / (1 + 2) ≈ 0,33; recall = 1 / (1 + 1) = 0,5. O modelo trouxe coisa a mais (precision baixa) e perdeu um item (recall médio).
- **A:** inverte as diferenças: chama de FP o que faltou e de FN o que sobrou. É exatamente o "nó" que o professor menciona.
- **B:** as contagens estão certas, mas as fórmulas foram trocadas: a precision usa FP no denominador (1/3), e o recall usa FN (1/2).
- **D:** conta como FN os dois itens esperados, inclusive o `sql_injection` que o modelo acertou; FN é só o que o dataset tinha e o modelo não trouxe ({`race_condition`} = 1).
**Conceito:** TP, FP e FN por interseção e diferença de conjuntos

## 2. Exemplos reordenados antes do zip
**Correta: A**
**Por quê:** o `zip` pareia pela posição: o primeiro output com o primeiro exemplo, e assim por diante. Se só uma das listas é reordenada, cada output é comparado com o ground truth de outro item, e os scores passam a medir esse desalinhamento, não o prompt.
- **B:** meia-verdade: dentro de um item, a interseção e a diferença não dependem da ordem dos findings; mas o pareamento entre itens feito pelo `zip` depende da posição.
- **C:** o desalinhamento troca o esperado de cada item, e o esperado entra tanto no FP (previsto menos esperado) quanto no FN e no TP; as três métricas são afetadas.
- **D:** o tratamento do denominador zero só evita a divisão quando TP + FP (ou TP + FN) é zero; ele não detecta itens fora de ordem.
**Conceito:** pareamento posicional com zip

## 3. Comparação sem extração
**Correta: D**
**Por quê:** extract_predict e extract_expected existem para levar o output do modelo e o exemplo do dataset ao mesmo formato comparável. Comparando texto livre com labels, nada coincide, a interseção fica vazia e o TP sai 0 mesmo quando o modelo encontrou o problema certo.
- **A:** um prompt conservador perde bugs reais, mas o cenário diz que o modelo achou o problema certo; o TP zero vem da comparação, não do prompt.
- **B:** o tratamento do denominador zero só age quando TP + FP (ou TP + FN) é zero; ele não zera itens em que houve acerto.
- **C:** o F1 só combina precision e recall; se o TP já sai 0, o F1 cai por consequência, e não por penalizar o formato da resposta.
**Conceito:** extract_predict e extract_expected

## 4. Lista vazia de findings
**Correta: B**
**Por quê:** sem nada previsto, TP = 0 e FP = 0, então o denominador da precision é zero e a função devolve 0 em vez de dividir. Esse 0 não significa que o modelo deu alarmes falsos: é o valor do tratamento do denominador. O recall é TP / (TP + FN) = 0 / 1 = 0, porque o `crash` esperado ficou de fora.
- **A:** é justamente o que a função evita: ela só divide quando o denominador é maior que zero, então o lote continua rodando.
- **C:** meia-verdade: de fato não houve falso positivo, mas a função da aula devolve 0 quando o denominador é zero, não 1.
- **D:** a função não retira itens; ela devolve 0 para o item e segue com a evaluation.
**Conceito:** tratamento do denominador zero

## 5. O que falta para ver as métricas no LangSmith
**Correta: C**
**Por quê:** o professor diz que o LangSmith não faz essa conta automaticamente. O fluxo é rodar a evaluation, pegar o resultado da IA, calcular TP, FP e FN, aplicar as fórmulas e devolver cada métrica (precision, recall e F1) num dicionário com score e comment.
- **A:** ter o ground truth no dataset não basta; segundo a aula, o LangSmith não calcula precision, recall e F1 sozinho.
- **B:** o F1 combina precision e recall, mas não dá para recuperar os dois a partir dele; a função da aula devolve as três métricas.
- **D:** inverte a divisão de trabalho: quem aplica as fórmulas é a função, e o LangSmith recebe os scores prontos.
**Conceito:** retorno das métricas ao LangSmith
