# Quizz — Estruturas especificas de prompts

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 6
**Base:** material da aula

---

## 1. Você precisa de um prompt que, ao ser executado, siga etapas em ordem e, quando os agentes que dependem dele terminarem, entregue o resultado num formato fixo de relatório. Pela aula, que tipo de prompt é esse e qual traço o identifica?
- A) Role Specification, porque o framework dele é uma espécie de workflow do que o agente deve fazer a cada etapa.
- B) Role Prompting, porque dar ao modelo o papel de especialista é o que faz o relatório sair no formato esperado.
- C) Workflow Specification, porque é procedural, segue passo a passo e já define os templates da saída final.
- D) Arquivo de agente com metadados, porque a descrição traz exemplos que fixam o formato do relatório final.

## 2. Lá no começo do módulo, o Role Prompting dava ao modelo um papel ("você é um especialista em X"). O que o Role Specification acrescenta a isso, segundo a aula?
- A) Além do papel e do escopo, traz um framework de atuação, princípios para o LLM decidir e comunicação padronizada.
- B) Troca o papel por uma lista de passos numerados, porque, num fluxo com agentes, o papel sozinho pesa menos.
- C) Define os templates da saída consolidada, gerados depois que os agentes dependentes terminam de executar.
- D) Registra o papel nos metadados do agente, para que a ferramenta o carregue em todo pedido feito ao modelo.

## 3. Num fluxo com vários agentes, cada um devolve o resultado num formato diferente, e o agente que coordena interpreta as respostas de forma inconsistente. Qual ajuste mira diretamente esse problema?
- A) Pedir ultrathink no comando, para o modelo pensar com mais esforço em cada passo antes de juntar as respostas.
- B) Pôr exemplos de chamada na descrição de cada agente, para o coordenador saber como ler o que recebe.
- C) Rodar os agentes em sequência, e não em paralelo, para cada resposta chegar antes de a próxima começar.
- D) Definir no Role Specification a comunicação padronizada, isto é, como os agentes trocam informações.

## 4. Sobre o "orquestrador" desta parte do curso, qual afirmação está INCORRETA?
- A) O orquestrador é um prompt que trabalha em conjunto com outras tarefas em execução, de forma multiagente.
- B) Por ser orquestrador, corresponde ao componente de arquitetura da solução, rodando como um agente do Claude.
- C) O professor marca o Role Specification com "(orquestrador)": esse prompt coordena, e o outro roda como comando.
- D) Há orquestradores também na arquitetura de software, mas a aula olha o assunto pelo prisma dos prompts.

## 5. Sua empresa usa uma ferramenta de IA que não tem o recurso de comandos do Claude Code. O que a aula diz sobre aplicar nela a abordagem de comando e orquestrador?
- A) Aplica-se ao Role Specification, mas o Workflow Specification depende do recurso de comandos para ser executado.
- B) Aplica-se em parte: o workflow funciona, mas o orquestrador depende de subagentes rodando em paralelo.
- C) Aplica-se com resultados muito parecidos, porque um comando é a execução de um prompt, e tudo aqui é prompt.
- D) Aplica-se depois de reescrever o comando como arquivo de agente, com os metadados que a ferramenta exige.
