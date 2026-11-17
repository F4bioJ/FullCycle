# Estruturas especificas de prompts

A aula abre uma nova parte do capítulo: dois tipos de prompt que ajudam a "amarrar as pontas" quando agentes precisam executar tarefas juntos, em sequência ou em paralelo. O professor apresenta os dois agora e, nas aulas seguintes, mostra como eles se comportam trabalhando em conjunto.

## Workflow Specification Prompt

É o nome que o professor dá a um prompt que traz comandos específicos do que deve acontecer quando um agente é executado. A diferença está em pensar a tarefa como um workflow: é um prompt procedural, que segue passo a passo, e não uma instrução solta. No fim, ele também define templates claros do que deve ser gerado quando os agentes que dependem dele terminam de executar. Ou seja, a saída final não fica para o modelo improvisar: o prompt já diz como o resultado consolidado deve aparecer ao final da cadeia.

## Role Specification

O segundo tipo tem um papel extremamente específico, com escopo de responsabilidade próprio. Além do papel, ele traz:

- **um framework:** uma espécie de workflow do que o agente deve fazer;
- **princípios de decisão:** faz o LLM tomar decisões com base em princípios definidos no prompt;
- **padronização da comunicação:** trabalha forte em como o agente se comunica, de forma padronizada.

## Um como orquestrador, outro como comando

O professor marca o Role Specification com "(orquestrador)" porque vai mostrar os dois prompts trabalhando juntos: um no papel de orquestrador e o outro como um comando a ser executado. Essa é a ideia central da introdução: uma nova forma de fazer agentes trabalharem em conjunto, principalmente em codificação.

## O exemplo no Claude Code

Os exemplos usarão o Claude Code, que (no momento da gravação) consegue trabalhar com subagentes, inclusive em paralelo. O comando é executado pelo Claude Code, mas, no fim, um comando é simplesmente a execução de um prompt. O orquestrador, por sua vez, serve para trabalhar de forma multiagente.

## Orquestrador do ponto de vista do prompt

A aula olha o assunto pelo prisma dos prompts, não da arquitetura. Em arquitetura de software e de soluções com IA também existem orquestradores, e eles não são necessariamente um agente do Claude. O orquestrador desta parte do curso é um prompt que consegue trabalhar em conjunto com outras tarefas em execução.

## Independência da ferramenta

Como tudo isso é prompt, dá para chegar a resultados muito parecidos em qualquer ferramenta de IA, mesmo numa que não tenha o recurso de comandos, porque o comando é só a execução de um prompt. O que importa é a clareza com que o prompt define papéis, passos e coordenação, e não o nome do recurso na ferramenta. A partir daqui, o curso entra nos detalhes desses prompts.
