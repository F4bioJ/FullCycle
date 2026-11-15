# Quizz — Batch Prompting

**Capítulo:** 2 - Conceitos importantes · **Aula:** 9
**Base:** material da aula

---

## 1. Um sistema processa 50 mil e-mails por dia via API, agrupados em lotes de 100. Cerca de 5% das respostas voltam fora do formato esperado (JSON inválido ou campos faltando). Qual a causa mais provável, segundo a aula?
- A) O prompt de sistema aparece uma só vez por lote, e os itens do fim perdem a instrução de formato.
- B) Os lotes misturam classificação de spam (sim/não) com resumos em texto livre, e o formato fica ambíguo.
- C) Lotes de 100 itens são grandes demais, e o modelo passa a variar o formato a partir do meio do lote.
- D) A temperatura alta faz o modelo variar o formato entre itens que compartilham o mesmo contexto.

## 2. Uma aplicação faz 1.000 chamadas individuais, cada uma com a mesma instrução fixa ("Você é um especialista em X, responda em JSON") e um item diferente. Ao migrar para batch prompting, de onde vem a economia direta de custo apontada na aula?
- A) O provider dá desconto de cerca de 50% nos tokens repetidos a partir do segundo item do lote.
- B) O modelo resolve todos os itens em uma passagem só, e o custo de processamento se divide entre eles.
- C) As respostas saem mais curtas, porque o modelo aproveita o contexto comum para enxugar a saída.
- D) A instrução fixa entra uma vez no lote, e não mil vezes, e esses tokens de entrada deixam de ser pagos.

## 3. Um pipeline grava cada resposta do batch no registro de origem, usando a posição na lista como chave. Num lote de 20 avaliações de produto, o modelo devolve 19 respostas. O que acontece e qual desenho evita o problema?
- A) Só o item omitido fica sem resposta; reenviar esse item em um novo lote completa a gravação.
- B) A falha só aparece em lotes grandes; reduzir o lote para 5 itens mantém a posição como chave segura.
- C) As respostas após a omissão vão para o registro vizinho; um ID por item, repetido na resposta, evita isso.
- D) Nada se desalinha: o modelo mantém a ordem do lote, então a posição continua sendo uma chave confiável.
