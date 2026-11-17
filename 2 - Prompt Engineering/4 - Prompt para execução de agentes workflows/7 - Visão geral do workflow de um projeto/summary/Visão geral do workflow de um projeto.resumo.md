# Visão geral do workflow de um projeto

A aula retoma um exemplo já apresentado em outra aula do curso, sobre modernização de sistemas legados a partir de um **Project State**: um snapshot de como um projeto está naquele momento. O foco agora não é a modernização, mas os prompts daquele workflow, analisados pela estrutura. Antes, o professor relembra os três tipos de prompt vistos até aqui: o prompt estruturado com resultado específico (um especialista que faz algo e devolve algo, como o Auditor de Dependências) e os dois apresentados na aula anterior, o Workflow Specification e o Role Specification.

## Conceitos à prova de ferramenta

O exemplo usa o Claude Code, mas outra ferramenta pode estar em evidência quando o aluno assistir, ou o Gemini e o Codex da OpenAI podem fazer coisas parecidas. A intenção é que os conceitos fiquem claros independentemente da ferramenta.

## O Claude Code como agente e a janela de contexto

O Claude Code é uma ferramenta de codificação que trabalha como um agente. Como todo agente que usa um LLM, ele tem uma **context window**. Quando ela enche, o Claude Code, por padrão, **compacta** o histórico: perde um pouco de informação, mas tenta não descartar o que veio no início, como a solicitação inicial, que é uma das informações mais importantes. Em workflows longos, instruções e decisões tomadas lá atrás podem perder nitidez, e esse limite passa a influenciar o desenho da arquitetura de agentes.

## Subagentes com contextos separados

O Claude Code consegue gerar agentes abaixo do agente principal, que o professor chama de **subagentes** (a ferramenta diz só "agentes"; é semântica). O ponto central é o isolamento: o principal sabe que o subagente está rodando, mas não acessa a janela de contexto dele, e vice-versa. Eles se comunicam por **input e output**, conforme um chama o outro. Segundo o resumo do professor, essa separação mantém cada análise focada e evita que o contexto de uma tarefa contamine outra, mas exige um mecanismo explícito para coordenar o progresso e juntar os resultados.

## Comandos

O Claude Code também tem **comandos**. Um comando é, basicamente, um prompt: ao executá-lo, a ferramenta roda esse prompt e começa a execução. No exemplo, o comando invoca o agente principal com o fluxo de trabalho, enquanto os subagentes geram resultados específicos, como relatórios sobre os componentes de um software.

## Gerenciamento de estado

Com vários agentes rodando em paralelo, surge um problema grave: o **gerenciamento de estado**, um desafio enorme para qualquer desenvolvedor ou arquiteto que trabalhe com agentes de IA. Não vale só para agentes de codificação: vale também para um agente que consulta um sistema, pega resultados financeiros e faz um cálculo. O estado é o que diz em que momento a execução está; é um **snapshot de onde ela parou**. O resumo do professor completa: sem estado guardado, uma interrupção obriga a refazer parte do trabalho ou tudo, com risco de duplicação e inconsistência.

## Agente orquestrador e manifesto

Para manter o estado, o exemplo usa um **agente orquestrador**, que funciona de forma simples. Cada vez que o Claude Code gera um agente para uma tarefa e esse agente termina, o Claude Code informa o orquestrador, que mantém o **tracking** do que já foi feito num **arquivo de manifesto**. Se a execução parar no meio, depois de vários relatórios prontos, dá para continuar de onde parou a partir desse manifesto. O orquestrador não é o especialista de cada análise: ele cuida do fluxo.

## IA probabilística: confiabilidade, não exatidão

A IA trabalha de forma **probabilística, não determinística**. Mesmo com orquestrador e o mesmo prompt, o modelo não necessariamente segue o fluxo passo a passo, linha a linha. O que se consegue é aumentar o nível de confiabilidade, nunca garantir exatidão. Por isso, no desenvolvimento de agentes em geral, existem frameworks como o **LangGraph**, que tornam o fluxo das execuções um pouco mais determinístico.

## As três peças e o orquestrador genérico

A arquitetura do exemplo tem três peças: o **agente principal**, que cuida de tudo; o **orquestrador**, que conversa com ele e mantém o tracking do projeto; e os **agentes A, B, C, D...**, que realizam as tarefas. O orquestrador deve ser o mais genérico possível, capaz de acompanhar qualquer tipo de projeto. Cada projeto tem suas especificidades, então costuma-se ajustar uma coisa ou outra, mas a ideia principal continua a mesma, porque, no fim, tudo é prompt.

## O workflow do Project State

O objetivo é gerar o Project State do projeto: arquitetura, dependências e componentes, com análises bem específicas. O professor sugere, como desafio, criar outros agentes, por exemplo para segurança ou testes. O fluxo:

1. Executa-se um comando (um prompt). O Claude Code entende o passo a passo, porque o prompt traz um workflow claro.
2. O orquestrador faz o setup das pastas e cria o manifesto.
3. O Claude Code dispara **em paralelo** dois agentes: um analisa a arquitetura do software, o outro as dependências. Cada um gera seu relatório.
4. O relatório de arquitetura é especialmente importante porque traz a **lista de componentes** do sistema. Com ele pronto, o Claude Code lê essa lista e dispara a análise de cada componente, também em paralelo, um agente por componente.
5. Com os relatórios de dependências, de arquitetura e de cada componente prontos, o orquestrador mapeia todos e gera um **`README.md`** com a lista deles, para se ver como o sistema está.

Ou seja, o fluxo mistura etapas paralelas e etapas dependentes: a análise de componentes só começa depois que a arquitetura produziu a lista.

## Estruturas de prompt diferentes por papel

O prisma das próximas aulas é analisar a fundo os prompts desse workflow: o que executa o comando, o do orquestrador e os dos especialistas. O Auditor de Dependências já foi analisado; faltam o arquitetural e o de análise de componentes. Os prompts dos especialistas usam a **mesma estrutura**; o do orquestrador usa outra, e o do comando, outra ainda. O professor lembra que nada é escrito em pedra: são templates e estruturas para não partir do zero, e o aluno tem toda a flexibilidade para alterá-los.
