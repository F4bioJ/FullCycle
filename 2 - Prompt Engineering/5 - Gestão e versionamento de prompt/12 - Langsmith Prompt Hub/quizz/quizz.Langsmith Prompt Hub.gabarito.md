# Gabarito — Langsmith Prompt Hub

## 1. Baixar o prompt do hub a cada requisição
**Correta: B**
**Por quê:** O professor diz que, com os prompts fora do projeto, se você for rodar em larga escala vai precisar fazer cache, sem ficar chamando a API o tempo inteiro.
- **A:** A aula não fala de limite de downloads; os números de downloads aparecem só como popularidade dos prompts.
- **C:** Fork serve para partir de um prompt existente e adaptá-lo, não para ser feito a cada requisição.
- **D:** A visibilidade (público ou privado) não resolve o volume de chamadas; e prompts privados são chamados com API key.
**Conceito:** cache ao consumir prompts remotos

## 2. Chat prompt e string prompt
**Correta: C**
**Por quê:** O professor explica que o chat prompt tem instruções do sistema e conversação, e o string prompt é o conteúdo todo do prompt numa chamada. Instrução de sistema fixa mais mensagens de conversa é, portanto, chat prompt.
- **A:** Inverte os nomes dos dois tipos.
- **B:** A diferença está na estrutura (sistema e conversação separados ou conteúdo único), não no suporte a variáveis.
- **D:** Acerta o tipo, mas inverte a descrição: é o chat prompt que separa sistema e conversação.
**Conceito:** chat prompt versus string prompt

## 3. Prompt de agente interno no hub
**Correta: D**
**Por quê:** Como o GitHub, o hub tem repositórios públicos e privados. Os prompts privados não ficam públicos, só a sua aplicação consegue chamá-los, e para isso ela precisa de uma API key.
- **A:** As prompt tags ajudam a buscar prompts; não controlam visibilidade.
- **B:** Fork cria uma derivação de um prompt; a aula não diz que isso torna a cópia privada.
- **C:** A aula mostra justamente que o hub também tem repositórios privados.
**Conceito:** repositórios públicos e privados no hub
