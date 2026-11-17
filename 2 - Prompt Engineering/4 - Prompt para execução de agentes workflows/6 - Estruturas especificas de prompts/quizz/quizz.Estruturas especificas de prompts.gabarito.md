# Gabarito — Estruturas especificas de prompts

## 1. Prompt procedural com saída em formato fixo
**Correta: C**
**Por quê:** o Workflow Specification Prompt traz comandos específicos do que deve acontecer quando o agente é executado, de forma procedural (passo a passo), e define templates claros do que deve ser gerado quando os agentes que dependem dele terminam. São os dois traços do cenário.
- **A:** meia-verdade: o Role Specification também tem um framework parecido com um workflow, mas o que o identifica é o papel específico, os princípios de decisão e a comunicação padronizada; os templates da saída final são o traço do Workflow Specification.
- **B:** o Role Prompting dá um papel ao modelo, mas não define etapas nem o template da saída consolidada.
- **D:** os exemplos da descrição do arquivo de agente (aula 4) servem de gatilho para saber quando chamar o agente, não fixam o formato do relatório.
**Conceito:** Workflow Specification Prompt (procedural + templates de saída)

## 2. O que o Role Specification acrescenta ao papel
**Correta: A**
**Por quê:** a aula descreve o Role Specification como um papel extremamente específico, com escopo de responsabilidade próprio, mais um framework (uma espécie de workflow), princípios com que o LLM toma decisões e forte padronização da comunicação.
- **B:** o Role Specification mantém o papel no centro; ele acrescenta framework, princípios e comunicação, não troca o papel por passos.
- **C:** os templates da saída consolidada ao final da execução são o traço do Workflow Specification.
- **D:** metadados com nome e descrição são o formato do arquivo de agente no Claude Code (aula 4), e o agente é chamado quando o pedido combina, não em todo pedido; não é isso que define o Role Specification.
**Conceito:** Role Specification (papel + framework + princípios de decisão + comunicação)

## 3. Agentes com respostas em formatos diferentes
**Correta: D**
**Por quê:** o problema é de comunicação entre agentes. A aula diz que o Role Specification trabalha forte na padronização da comunicação, o que tira a ambiguidade de como os agentes trocam informações.
- **A:** o ultrathink (aula 5) aumenta o esforço de raciocínio, mas não define o formato em que cada agente responde.
- **B:** os exemplos da descrição do agente (aula 4) são o gatilho de quando chamá-lo, não um formato de troca de mensagens.
- **C:** sequência ou paralelo muda a ordem de execução, não o formato das respostas; elas continuariam chegando diferentes.
**Conceito:** padronização da comunicação no Role Specification

## 4. O orquestrador por prompt (INCORRETA)
**Correta: B**
**Por quê:** é a afirmação falsa. O professor separa as coisas: em arquitetura de software e de soluções com IA também existem orquestradores, e eles não são necessariamente um agente do Claude; o orquestrador desta parte do curso é visto pelo prisma do prompt.
- **A:** verdadeira: o orquestrador, por meio de um prompt, trabalha em conjunto com outras tarefas em execução, de forma multiagente.
- **C:** verdadeira: o professor põe "(orquestrador)" ao lado do Role Specification e diz que um prompt trabalha como orquestrador e o outro como comando executado.
- **D:** verdadeira: é a ressalva que o professor faz sobre o ponto de vista da aula.
**Conceito:** orquestrador pelo prisma do prompt × orquestrador de arquitetura

## 5. Ferramenta sem o recurso de comandos
**Correta: C**
**Por quê:** como tudo é prompt, a aula diz que dá para ter resultados muito parecidos em qualquer ferramenta de IA, mesmo sem a parte de comandos: no fim, o comando é só a execução de um prompt.
- **A:** meia-verdade: o Workflow Specification é o prompt que roda como comando, mas o comando é só uma forma de disparar o prompt; sem o recurso, o mesmo prompt pode ser executado de outra forma.
- **B:** o Claude Code tem subagentes em paralelo, mas a aula não condiciona o orquestrador a isso; ele é um prompt e vale em outras ferramentas.
- **D:** o arquivo de agente com metadados é um formato do Claude Code (aula 4), não requisito para usar a abordagem em outra ferramenta.
**Conceito:** comando = execução de um prompt (independência da ferramenta)
