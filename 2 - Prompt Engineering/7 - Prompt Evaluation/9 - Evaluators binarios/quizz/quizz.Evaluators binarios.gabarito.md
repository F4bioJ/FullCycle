# Gabarito — Evaluators binarios

## 1. Binário ou score contínuo numa etapa de aprovação
**Correta: C**
**Por quê:** No critério binário, a avaliação é 0 ou 1, passou ou falhou, sem caminho do meio, e o LangSmith mostra um contador de yes e no por critério em vez de uma faixa de valores. É direto para decidir se a revisão segue; o que se perde é o meio-termo de um score como 0,8, que diria o quão perto a saída chegou.
- **A:** A aula não diz que o juiz erra menos com duas opções, e o reasoning continua disponível: o professor o abre no tracing de um item reprovado.
- **B:** Inverte a troca: nuance é o que o score contínuo oferece, não o binário.
- **D:** O binário não dispensa referência: o correctness do experimento é binário e roda com referência (Labeled Criteria).
**Conceito:** critério binário versus score contínuo

## 2. Por que correctness recebe referência
**Correta: A**
**Por quê:** O Labeled Criteria é o critério que recebe referência (daí o rótulo). Com `prepareDataWithRef`, o juiz recebe os `exampleOutputs` do dataset e pode confrontar a revisão gerada com o que se espera. Concisão e utilidade dá para julgar só olhando a resposta, por isso esses dois rodam sem referência.
- **B:** Os três critérios são binários: conciseness e helpfulness também devolvem yes ou no.
- **C:** O Labeled Criteria também é built-in; a aula mostra um critério built-in recebendo referência, não uma lógica escrita à mão.
- **D:** Um critério binário decide sem referência: conciseness e helpfulness rodam com `prepareDataNoRef` e devolvem yes ou no, julgando pela resposta e pelo critério.
**Conceito:** Labeled Criteria e avaliação com referência

## 3. Reprovações no critério com referência
**Correta: D**
**Por quê:** O professor diz que passar ou não referência não torna, por si só, a avaliação melhor ou pior: mais referência dá ao juiz base para decidir, mas é preciso executar e olhar. As reprovações pedem entender cada falha antes de concluir algo sobre a referência ou o prompt.
- **A:** Tirar a referência deixa o correctness sem alvo para comparar; tornar os evaluators "comparáveis" não é motivo dado na aula para isso.
- **B:** Aceita a premissa do colega sem inspecionar: as reprovações podem vir do prompt, do critério ou da referência, e é o julgamento de cada item que mostra a causa.
- **C:** É o oposto do aviso do professor: a referência não torna o julgamento melhor por si só, e as reprovações sozinhas não provam onde está o problema.
**Conceito:** referência como base do juiz, não garantia de resultado

## 4. Próximo passo diante das reprovações
**Correta: B**
**Por quê:** Ao clicar no item, o LangSmith mostra o run que executou a avaliação: o exemplo, o output, o reasoning, o valor, o score e o critério usado para dizer que não estava correto, além dos metadados. É isso que permite entender a falha, ajustar e rodar de novo.
- **A:** Mudar o tipo de score não explica a falha; a aula resolve isso inspecionando o julgamento no tracing.
- **C:** O contador mostra só quantos yes e no houve; o motivo de cada um está no item, dentro do tracing.
- **D:** O prefixo serve para não misturar experimentos, não para sobrescrever um resultado; rodar de novo sem entender a falha não corrige nada.
**Conceito:** tracing para inspecionar o julgamento do evaluator

## 5. Montagem do experimento (INCORRETA)
**Correta: C**
**Por quê:** É a incorreta: cada critério é um evaluator independente, e o resultado aparece separado por critério (conciseness, helpfulness e correctness, cada um com seu contador). Não há um veredito único que junte os três.
- **A:** Correta: o professor diz que cada item da lista é um evaluator, com ou sem referência.
- **B:** Correta: os critérios built-in do LangSmith dispensam criar fórmulas, porque já vêm prontos.
- **D:** Correta: o professor criou um prefixo para não misturar com o experimento anterior, o de formato.
**Conceito:** cada critério como evaluator independente
