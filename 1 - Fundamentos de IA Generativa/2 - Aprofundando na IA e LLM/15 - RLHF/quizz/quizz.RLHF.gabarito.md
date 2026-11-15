# Gabarito — RLHF

## 1. O que o RLHF acrescenta ao fine tuning supervisionado
**Correta: C**
**Por quê:** o RLHF parte do fine tuning supervisionado e acrescenta o feedback humano: pessoas comparam e ranqueiam respostas geradas pelo modelo (etapa 2), e esse ranking vira o sinal de recompensa que o PPO maximiza (etapa 3). A novidade não são mais pares, e sim preferências entre respostas concorrentes.
- **A:** pares escritos por humanos são o próprio SFT (etapa 1), que já existia. Estreitar o domínio é a ideia de especialização da aula 14, não o que o RLHF traz.
- **B:** treinar só parte dos parâmetros é o fine tuning parcial com LoRA/PEFT da aula 14. É uma forma de deixar o ajuste mais leve, não o que define o RLHF.
- **D:** o RLHF é uma estratégia de fine tuning sobre um modelo já pré-treinado. Não refaz o pré-treino.
**Conceito:** RLHF = fine tuning + preferências humanas transformadas em recompensa

## 2. Chatbot que ofende minorias
**Correta: A**
**Por quê:** a aula diz que a IA reproduz racismo e ofensas porque isso apareceu nas bases usadas no treino, replicadas durante anos, o que "poluiu" o treinamento. O fine tuning com feedback humano limpa esse comportamento: o RLHF funciona como uma bússola ética que guia o modelo a ser mais educado e respeitoso.
- **B:** a ofensa não é acaso: vem do que está nos dados. E mais texto da internet traz mais do mesmo conteúdo enviesado, em vez de corrigir.
- **C:** overfitting em poucos exemplos é a limitação do fine tuning da aula 14 com dataset pequeno ou repetitivo. Aqui o modelo nem passou por fine tuning, e o problema vem do pré-treino em bases enormes. LoRA serve para deixar o ajuste mais leve, não é a causa nem a cura descrita.
- **D:** a aula não liga o conteúdo ofensivo à janela de contexto. Um modelo só pré-treinado não recebeu nenhuma "regra de ser educado" para perder; essa regra é o que o alinhamento ensina.
**Conceito:** conteúdo ofensivo vem das bases de treino; o alinhamento com feedback humano corrige

## 3. Por que comparar em vez de escrever a resposta certa
**Correta: D**
**Por quê:** muitas tarefas abertas (explicar a relatividade para uma criança, por exemplo) não têm uma única resposta correta, e sim várias aceitáveis, umas melhores que outras. Comparar captura essa diferença de qualidade, que um par fixo de pergunta e resposta não mostra.
- **A:** é o contrário. A aula aponta a subjetividade justamente na escolha de qual resposta é melhor: com três respostas muito parecidas, cada avaliador pode preferir uma por causa do tom ou de uma palavra. É uma limitação do RLHF.
- **B:** a etapa 2 não substitui o SFT: as três etapas vêm em sequência. E a aula lista o custo alto como limitação do RLHF, não como vantagem do ranking.
- **C:** overfitting é a limitação do fine tuning da aula 14 com dataset pequeno ou repetitivo. A aula não diz que o ranking foi criado para resolver isso.
**Conceito:** tarefas abertas têm várias respostas boas; o ranking mede qualidade relativa

## 4. Quem avalia as respostas no PPO
**Correta: B**
**Por quê:** a meta do PPO é gerar respostas que maximizem a recompensa prevista. Quem prevê essa recompensa é o modelo de recompensa treinado na etapa 2 a partir das notas humanas. O humano entra antes, ao treinar o Reward Model.
- **A:** o feedback humano é dado na etapa 2 e embutido no Reward Model. Na etapa 3, é esse modelo que avalia as respostas novas.
- **C:** comparar com os pares escritos por humanos é a lógica da etapa 1 (SFT). O PPO usa a recompensa prevista, não a distância até um par fixo.
- **D:** prever a próxima palavra é o objetivo do pré-treino, que a aula aponta como insuficiente. O PPO maximiza a recompensa, não a probabilidade da próxima palavra.
**Conceito:** PPO maximiza a recompensa prevista pelo Reward Model

## 5. Por que o modelo só pré-treinado é prolixo e repetitivo
**Correta: B**
**Por quê:** o LLM aprende prevendo a próxima palavra. Isso dá fluência, mas não consistência lógica: ele pode não ter clareza do caminho que está tomando. Sem ajuste, fica prolixo, impreciso e repete as mesmas informações, como o ChatGPT do lançamento.
- **A:** a aula não liga esses sintomas à tokenização. O que ela aponta é o objetivo de prever a próxima palavra sem ajuste.
- **C:** a aula não atribui a prolixidade à janela de contexto. O ChatGPT do lançamento repetia as mesmas coisas por falta de ajuste fino, segundo o professor.
- **D:** decorar frases por falta de dados é o overfitting da aula 14. O problema descrito aqui vem do objetivo de treino (próxima palavra) sem alinhamento, não de dados de menos.
**Conceito:** prever a próxima palavra ≠ resposta desejável; daí a necessidade do alinhamento

## 6. Efeitos do alinhamento com RLHF (INCORRETA)
**Correta: D**
**Por quê:** a aula lista dizer o que não sabe, seguir melhor as instruções e alucinar menos como efeitos do ajuste. O ganho é na qualidade da interação e no controle da saída, não em conhecimento bruto: as respostas e notas humanas ensinam como responder, não ampliam o que o modelo sabe dos assuntos.
- **A:** correta. O professor cita fazer o modelo dizer o que não sabe, quando for apropriado, e conta que antes ele respondia qualquer coisa só para agradar.
- **B:** correta. Seguir melhor as instruções do usuário, em vez de inventar, é um dos efeitos citados.
- **C:** correta. A aula diz que, com mais instrução, há menos chance de alucinar.
**Conceito:** RLHF melhora comportamento, não conhecimento bruto

## 7. O GPT "puxa-saco"
**Correta: C**
**Por quê:** o professor diz que a equipe "errou a mão pra cima" ao ajustar o comportamento e depois corrigiu. Mexer no alinhamento muda muito como o modelo trata o usuário, e por isso versões e produtos diferentes têm níveis diferentes de educação e de vontade de agradar.
- **A:** a aula atribui a mudança ao ajuste de comportamento, não a um novo pré-treino. O tom é justamente o que o fine tuning com feedback humano controla.
- **B:** a aula compara a versão paga e a não paga só para mostrar que o comportamento muda; não liga o "puxa-saco" a mais parâmetros.
- **D:** a aula não fala em troca de algoritmo. O PPO só maximiza a recompensa prevista; o tom vem do que o ajuste passou a recompensar, e foi esse ajuste que "errou a mão".
**Conceito:** pequenas mudanças no alinhamento mudam muito o comportamento percebido

## 8. Por que o prompt direto ajudaria
**Correta: A**
**Por quê:** pela experiência do professor (que ele chama de "achômetro"), pedir dados reais e diretos, sem tentar convencer nem agradar, dá ao modelo a direção de não entrar nas camadas de agradar o usuário. Assim ele viaja menos, é menos prolixo e inventa menos.
- **B:** a aula não liga o resultado ao número de tokens. A diferença está no sinal de que não é para agradar, não no tamanho do prompt.
- **C:** o modelo de recompensa atua no treinamento (etapas 2 e 3), avaliando respostas para o PPO. Ele não é acionado pelo prompt durante a conversa.
- **D:** a aula não liga a cortesia do prompt aos pares do SFT. O ponto do professor é que um pedido cheio de rodeios favorece o comportamento de agradar, não que o modelo copie um formato de exemplo.
**Conceito:** a forma do pedido orienta o comportamento aprendido no alinhamento

## 9. Instruction Tuning x fine tuning da aula 14
**Correta: C**
**Por quê:** o Instruction Tuning treina o modelo com muitas instruções humanas para tarefas diversas (carta de demissão em tom amigável, roteiro de podcast), para deixá-lo generalista e fácil de usar. O fine tuning da aula 14 vai na direção oposta: especializa o modelo numa tarefa, e o professor diz que, nesse caso, o Instruction Tuning talvez não seja a conversa.
- **A:** são instruções humanas. A aula diz "você vai treinar ele com várias instruções humanas para diversas tarefas".
- **B:** a aula diz que ele pode vir antes ou junto do RLHF, não depois do PPO.
- **D:** rankings são a etapa 2 do RLHF (Reward Model). O Instruction Tuning é um passo complementar, com instruções de tarefas variadas, e não ocupa o lugar do SFT.
**Conceito:** Instruction Tuning = variedade de tarefas para um modelo generalista

## 10. Avaliadores divergem diante de respostas parecidas
**Correta: B**
**Por quê:** quando as respostas são muito parecidas, a escolha da melhor depende do tom, de uma palavra conhecida, de um jeito de que se gostou: é subjetiva. O professor reconhece que isso acontece, mas não acha ruim, porque a linguagem humana também é subjetiva.
- **A:** a aula diz o contrário. O viés de quem avalia é uma das limitações do RLHF: como o ser humano tem viés, ele o passa ao modelo. Mais avaliadores também aumentam o custo, outra limitação citada.
- **C:** a aula não fala em descarte de empates. A resposta alucinada (a da Barbie) é fácil de descartar; o problema está justamente nas respostas parecidas, que pesam no treino com a escolha subjetiva.
- **D:** o SFT ensina um formato de resposta, não deixa uma única resposta possível. Ter várias respostas aceitáveis é a razão de existir do ranking.
**Conceito:** subjetividade e viés humano entram no modelo pelo feedback
