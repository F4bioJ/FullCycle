# Arquivo declarativo do Agent e Prompt como Metadados

No projeto de exemplo onde gerou o relatório da aula anterior, o professor mostra como o prompt do auditor está guardado.

## O foco é a ideia, não a ferramenta

A aula usa uma ferramenta, o Claude Code, que pode mudar: quando você assistir, o recurso talvez não esteja nesse formato. O que importa é entender como o prompt está sendo trabalhado.

## Agentes e subagentes no Claude Code

O Claude Code é um agente de codificação: faz o que se pede com base num prompt. Ele tem um recurso de agentes: com `/agents` dá para criar um agente novo (com um passo a passo) ou ver os que já existem. Conforme o que você pede durante o desenvolvimento, o Claude Code olha a lista de agentes e pode chamar um especialista. Por isso o professor deixou o prompt do auditor no formato de subagente: sempre que pede uma verificação ou auditoria, sabe que esse agente será chamado e que o relatório sairá do jeito que ele quer.

## O arquivo do agente e seus metadados

O arquivo fica em `.claude/agents/`. Boa parte dele foi gerada pelo próprio Claude Code a partir dos objetivos que o professor descreveu no assistente de criação; ele só complementou. No topo, entre três tracinhos, ficam os metadados: o nome (`Dependency Auditor`) e a descrição, que diz quando usar o agente (para analisar ou auditar a saúde, a segurança e o status das dependências de um software). Mais abaixo, ainda nos metadados, vêm o modelo a usar e a cor com que o agente aparece.

## Exemplos de quando chamar o agente, em XML

A descrição traz exemplos de quando o agente deve ser usado. A Anthropic, que cria o Claude, usa muito XML, e os exemplos vêm assim, com tags que separam:

- **contexto:** o usuário quer entender o estado das dependências antes de um major release;
- **user:** "você pode verificar se nossas dependências estão atualizadas e seguras?";
- **assistant:** "vou usar o Dependency Auditor Agent para analisar as dependências e gerar um relatório de auditoria";
- **commentary:** como o usuário está pedindo análise de dependências, usar o auditor para revisar saúde, segurança etc.

Cada exemplo simula a conversa e confirma: se isso acontece, chame o agente.

## Por que os exemplos importam

Os exemplos funcionam como gatilho (trigger). A IA trata o agente como uma espécie de ferramenta e, com ele à mão, decide em que momento ele é útil; os exemplos são o que faz o Claude saber quando chamá-lo. Dica do professor: se você faz uma chamada e o agente não é ativado, veja como fez essa chamada e coloque-a como exemplo.

## Embaixo dos metadados, o prompt

Abaixo dos metadados está tudo o que foi visto na aula do auditor: inputs, outputs e o workflow. Mesmo com metadados e com a parte específica do Claude, o agente continua tendo uma estrutura de prompt: os conceitos de prompt valem também aqui.
