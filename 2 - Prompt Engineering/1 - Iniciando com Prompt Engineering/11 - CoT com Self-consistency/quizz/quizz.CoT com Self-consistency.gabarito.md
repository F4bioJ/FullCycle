# Gabarito — CoT com Self-consistency

## 1. N, N e N+1 com resposta N
**Correta: B**
**Por quê:** o self-consistency escolhe a resposta mais consistente, a da maioria. Dois caminhos deram N, e o modelo escolheu N. O professor diz que o modelo "está sendo consistente", mas com a resposta errada. A aula lista entre as limitações que a técnica nem sempre converge para a resposta correta.
- **A:** a aula define a escolha pela resposta mais consistente (a maioria), não pelo caminho mais detalhado.
- **C:** a condição valia só se as três respostas fossem diferentes. Aqui duas concordaram, então havia maioria.
- **D:** ignorar outliers é justamente não dar peso à resposta que diverge. O problema é que o outlier, aqui, era a resposta certa.
**Conceito:** consistência não é prova de correção

## 2. Três respostas diferentes e resposta final N
**Correta: D**
**Por quê:** o prompt dizia que, se as três respostas fossem diferentes, o modelo devia responder que não encontrou uma resposta consistente. Os caminhos deram N, N+1 e duas queries, todos diferentes, e o modelo não seguiu a condição: respondeu N, que está errado, mesmo tendo gerado a hipótese correta.
- **A:** não havia maioria: cada caminho chegou a um número diferente.
- **B:** com três respostas diferentes, nenhuma é outlier em relação às outras; não há padrão dominante para separar. E descartar N+1 jogaria fora a resposta certa.
- **C:** o professor diz que o modelo "viajou" no terceiro caminho, porque o código faz a busca dentro do loop, sem otimização.
**Conceito:** condição para quando não há consenso

## 3. Classificador simples × decisão de arquitetura
**Correta: A**
**Por quê:** a aula diz que a técnica é muito útil na dúvida sobre uma decisão técnica, um cálculo ou um algoritmo. Entre as limitações, estão gastar mais tokens, ser mais lenta e agregar pouco valor em tarefas fáceis.
- **B:** num classificador simples que já acerta, a aula indica pouco valor agregado, e o custo se multiplica pelo volume.
- **C:** a aula diz que se pode pedir mais caminhos, como 10 ou 20, mas não que três sejam insuficientes. O próprio experimento usa três.
- **D:** a aula diz que a técnica nem sempre converge para a resposta correta. Na terceira execução do 3.5 Turbo, a maioria concordou com N, que estava errado. E no classificador simples o custo agrega pouco.
**Conceito:** quando o self-consistency compensa

## 4. O que o self-consistency acrescenta ao CoT
**Correta: C**
**Por quê:** um único raciocínio pode estar errado. O self-consistency pede várias linhas de raciocínio para a mesma pergunta e escolhe a resposta mais consistente entre elas, em vez de confiar num caminho só.
- **A:** a técnica não confere os passos contra uma fonte: ela compara as conclusões dos caminhos. Na primeira execução, um caminho inventou uma otimização inexistente, e nada o corrigiu.
- **B:** uma revisão única ainda depende de um só raciocínio. A aula descreve gerar várias linhas e escolher a mais consistente, não revisar uma.
- **D:** a técnica não alonga um caminho só. O prompt pede três linhas de raciocínio diferentes, e o que se compara são as conclusões delas.
**Conceito:** vários caminhos em vez de um

## 5. Mesma técnica, modelos diferentes
**Correta: B**
**Por quê:** o professor conclui que deu para sentir como os modelos mudam o resultado. O self-consistency escolhe entre as respostas que o próprio modelo gera: o 3.5 Turbo variou e consolidou um erro, e o GPT-4o convergiu para N+1.
- **A:** o experimento mostra o contrário: o modelo mais fraco consolidou a resposta errada por maioria.
- **C:** o GPT-4o, por padrão, não é um modelo de reasoning (aula 2.1.10). A aula não restringe a técnica a modelos com reasoning.
- **D:** no GPT-4o, os três caminhos deram N+1 nas duas execuções, então não havia outlier para descartar. E o 3.5 Turbo também escolheu pela maioria; o problema foi a maioria errar.
**Conceito:** o modelo base continua mudando o resultado
