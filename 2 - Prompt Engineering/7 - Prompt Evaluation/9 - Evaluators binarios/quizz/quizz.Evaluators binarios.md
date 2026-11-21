# Quizz — Evaluators binarios

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 9
**Base:** material da aula

---

## 1. O revisor de código vai virar uma etapa de aprovação: a revisão gerada só segue no fluxo se atender ao critério. Um colega prefere um score contínuo, como 0,8, a um critério binário. O que a equipe ganha e perde ao escolher o binário?
- A) Ganha um juiz mais preciso, porque com duas opções o modelo erra menos, mas perde o reasoning de cada item.
- B) Ganha nuance, porque cada critério recebe sua nota, mas perde a chance de somar os critérios num total.
- C) Ganha uma fronteira clara e um contador de yes e no, mas perde a noção de quão perto a saída chegou.
- D) Ganha a dispensa da referência, que o binário não usa, mas perde a correctness, que exige score contínuo.

## 2. No experimento, conciseness e helpfulness rodam sem referência, e correctness entra como Labeled Criteria. Por que justamente esse critério recebe a referência?
- A) Porque julgar se a revisão está correta pede um alvo, e os `exampleOutputs` do dataset dão ao juiz esse alvo.
- B) Porque ele devolve o resultado rotulado como yes ou no, enquanto os outros dois devolvem score numérico.
- C) Porque ele é um critério escrito à mão, e os critérios built-in do LangSmith não aceitam receber referência.
- D) Porque, sem referência, um critério binário não teria contra o que decidir entre devolver yes ou no.

## 3. No painel, conciseness e helpfulness passaram, e o correctness, o único com referência, teve reprovações. Um colega conclui que a referência atrapalhou o juiz e propõe tirá-la. Qual leitura é coerente com a aula?
- A) Ele está certo: sem referência o juiz decide pelo critério, o que deixa os três evaluators comparáveis.
- B) Ele está certo em parte: a falha vem da referência, e o caso é trocá-la por `exampleOutputs` melhores.
- C) Ele erra: com referência o julgamento fica melhor, então as reprovações provam que o prompt é o problema.
- D) Ele erra: a referência dá base ao juiz, mas não define o resultado; antes, é preciso entender cada falha.

## 4. O painel mostra que alguns itens falharam em correctness, e a equipe quer corrigir o prompt. Qual é o próximo passo mostrado na aula?
- A) Trocar o critério por um score contínuo, para ver o quanto cada item ficou abaixo do limite de aprovação.
- B) Abrir o item no tracing e ler o output, o reasoning do juiz e o critério que levou ao "não".
- C) Ler o contador do experimento, que já traz o motivo de cada reprovação junto do total de yes e no.
- D) Rodar de novo com o mesmo prefixo, para que o novo resultado substitua o experimento com falhas.

## 5. Sobre a montagem e a execução desse experimento, qual afirmação está INCORRETA?
- A) Cada critério da lista é um evaluator próprio, que pode ou não receber a referência do dataset.
- B) Os critérios built-in poupam escrever a lógica do julgamento, que já vem pronta no LangSmith.
- C) Os três critérios da lista são combinados pelo LangSmith num único yes ou no para cada item.
- D) O prefixo do experimento serve para separar essa execução da avaliação de formato feita antes.
