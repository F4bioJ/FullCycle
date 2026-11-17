# Gabarito — Arquivo declarativo do Agent e Prompt como Metadados

## 1. Agente não foi acionado: primeiro ajuste
**Correta: C**
**Por quê:** os exemplos da descrição são o gatilho que faz o Claude saber quando chamar o agente. A dica do professor é exatamente essa: se uma chamada não ativa o agente, veja como você a fez e coloque-a como exemplo.
- **A:** inputs e outputs ficam no corpo e definem como o auditor trabalha, não quando ele é chamado; quem decide a chamada lê os metadados e os exemplos.
- **B:** o inglês pode melhorar o resultado (aula anterior), mas o problema aqui é de acionamento, e a aula indica o ajuste nos exemplos.
- **D:** o campo de modelo escolhe o modelo do agente; a aula não o liga à decisão de chamar o especialista.
**Conceito:** exemplos de trigger na descrição

## 2. Por que guardar o prompt como subagente
**Correta: A**
**Por quê:** o Claude Code olha a lista de agentes e, conforme o pedido, pode chamar o especialista. Com o prompt registrado como subagente, toda auditoria que o professor pede cai nesse agente, que gera o relatório do jeito que ele quer.
- **B:** o agente não roda em todo pedido: o Claude Code o chama quando o pedido combina com ele (verificação, auditoria).
- **C:** o modelo é mesmo um metadado do cabeçalho, mas a aula não o dá como motivo; o motivo é o agente principal delegar ao especialista e o relatório sair no formato desejado.
- **D:** é o inverso: `/agents` serve para criar ou listar agentes, e quem decide chamar o auditor é o agente principal, pelo pedido.
**Conceito:** subagente e delegação pelo agente principal

## 3. Partes do arquivo do agente (INCORRETA)
**Correta: D**
**Por quê:** os exemplos da descrição simulam conversas para mostrar quando o agente deve ser chamado, não como auditar. O como continua no corpo: inputs, outputs e workflow, que o professor diz serem o prompt da aula do auditor.
- **A:** verdadeira: nome e descrição ficam entre os três tracinhos e dizem quem é o agente e quando usá-lo.
- **B:** verdadeira: modelo e cor também são metadados do cabeçalho.
- **C:** verdadeira: abaixo dos metadados está o prompt com inputs, outputs e workflow.
**Conceito:** metadados (quando chamar) × prompt do corpo (como trabalhar)

## 4. Papel do comentário no exemplo
**Correta: B**
**Por quê:** o exemplo simula a conversa (contexto, user, assistant) e o comentário confirma o motivo: como o pedido é de análise de dependências, chama-se o auditor. É a justificativa que liga o tipo de pedido à delegação.
- **A:** o comentário faz parte da descrição que o Claude usa para saber quando chamar o agente; não é nota ignorada pelo modelo.
- **C:** a fala que aparece no exemplo é a do assistente principal anunciando a delegação; o relatório é produzido pelo subagente segundo os outputs do corpo.
- **D:** a frase de anúncio está no bloco do assistant ("vou usar o Dependency Auditor Agent..."); o comentário vem depois e explica por que delegar, não como anunciar.
**Conceito:** estrutura dos exemplos em XML (context, user, assistant, commentary)

## 5. O que vale além da ferramenta
**Correta: A**
**Por quê:** o fecho da aula: embaixo dos metadados está o prompt da aula do auditor (inputs, outputs, workflow), e mesmo com metadados e com a parte do Claude os conceitos de prompt continuam valendo.
- **B:** os metadados são da ferramenta, mas a descrição e os exemplos são o que faz o Claude saber quando chamar o agente; genéricos, ele pode não ser acionado.
- **C:** o cabeçalho (nome, descrição, modelo, cor) diz quem é o agente e quando chamá-lo; as instruções de como auditar estão no corpo (inputs, outputs, workflow), e é ele que o professor destaca como o que continua valendo.
- **D:** o cabeçalho de metadados fica entre três tracinhos; o XML aparece nos exemplos da descrição, que mostram quando chamar o agente, não o trabalho que ele faz.
**Conceito:** prompt estruturado dentro de uma camada de metadados
