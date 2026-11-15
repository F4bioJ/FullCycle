# Aula 06 — resumo

## Assistentes para gerar documentos
Para o documento de contexto geral, de produto e técnico, o professor usa no ChatGPT um prompt próprio, e tem outro para ADRs. Você descreve o projeto, ele o entrevista e, ao final, os documentos estão quase prontos. Ele vai passar os links e os prompts, que serão analisados a fundo na disciplina de prompt engineering.

## PRP: prompt que gera prompt
O que ele considera mais útil para aplicar no dia seguinte vem de um repositório Git. Existe o PRD (Product Requirement Document), que será visto em Design Docs. O autor do repositório criou o PRP (Product Requirement Prompt): prompts que geram outros prompts e os documentos necessários, por exemplo, para gerenciar tarefas. O professor simplificou o original, que seria uma bazuca para matar formiga diante do que precisamos no dia a dia.

## O template base
Há uma pasta `prps` e uma pasta `templates`; nesta fica o `prp-base`, o molde de como deve ser um PRP. Ele faz a IA entender com força a feature, com seus objetivos e exigências, e encaixá-la nesse formato, gerando também as informações necessárias e as tarefas.

## O documento de feature
O fluxo começa com um documento escrito pelo próprio desenvolvedor, como `components-refactoring.md`. O exemplo, de um sistema de RAG, traz:
- o contexto;
- o objetivo: separar a lógica de filtros e retrievers, seguindo os princípios SOLID;
- o que a feature deve fazer;
- exemplos e dicas para a IA entender o projeto, incluindo o aviso de não confiar 100% no documento de contexto, que pode estar desatualizado.

## Comandos do Claude Code
Um comando é como um shell script, só que escrito em Markdown. Eles ficam na pasta `commands`, dentro da pasta do Claude. O `generate-prp` é um prompt que recebe como argumento o arquivo da feature e gera o PRP a partir do template. Ou seja, um prompt gerando um prompt.

## O que o PRP traz
O PRP gerado, que fica na pasta `prps`, inclui:
- o motivo, o que será feito e os critérios de sucesso;
- os arquivos e URLs que a IA precisa ler, cada um com o porquê;
- a árvore de arquivos atual e como ela deve ficar depois;
- gotchas e library quirks: pegadinhas e pontos críticos em que tomar cuidado;
- o implementation blueprint: modelo de dados, principais tarefas e pseudocódigo de cada uma;
- os pontos de integração;
- a validação em passos: rodar os testes, iterar até passarem, rodar a integração e seguir um checklist;
- os anti-patterns a evitar;
- um score de confiabilidade do que foi gerado, calculado segundo o prompt.

Esse material precisa ser revisado: não é para fazer tudo o que a IA pede. O resumo do professor acrescenta que o score é só um sinal para a revisão, nunca uma garantia.

## Executar o PRP
O segundo passo é o comando `execute-prp`, que recebe o caminho do PRP. Ele manda ler o PRP e entender todos os pontos, usar ultrathink, executar um plano, validar, completar e referenciar qual PRP foi usado. Pode parecer besteira, mas o Claude entende ultrathink como um pensamento muito mais profundo sobre o que será desenvolvido. No workflow do professor, a IA cria um branch e implementa tarefa por tarefa. Isso serve para qualquer feature e torna o vibe coding pelo menos um pouco mais confiável.

## Controlar a execução
Mesmo com a IA desenvolvendo sozinha, dá para ativar e desativar ferramentas, impedir que ela grave arquivos antes da revisão ou permitir a execução conforme o tipo de arquivo.

## O que a IA gera foi você que pediu
Perguntado se lê tudo o que a IA gera, o professor responde que o que ela gera foi ele quem pediu: uma ADR sai no formato e no template que ele queria, mas com as informações que ele colocou.

## Quebrar em escopos menores
PRPs servem para quem quer desenvolver de forma menos assistida, sem acompanhar passo a passo, mas organizada. O exemplo da aula pediu coisa demais: o arquivo ficou enorme, é trabalho de horas, e o professor duvida que a IA chegue ao fim. O caminho é entender o que se quer, quebrar a feature em pedaços e gerar planos de ação menores.

## Revisão continua sendo sua
Os testes têm que passar e o code review é seu, antes de commitar. No PRP, ele não se preocupa tanto com os snippets, e sim com o código final, embora corrija o rumo se houver algo grosseiro. Nos projetos, revisa absolutamente tudo, arquivo por arquivo. Os arquivos de maior risco poderão ser identificados com acoplamento aferente e eferente, tema da parte de arquitetura.

## Formas de trabalhar
Existem diversas formas de trabalhar com IA: sempre fornecendo documentação, ou mais em YOLO mode, em que ela sai fazendo. Conforme o projeto, o momento, o componente e o problema, pode-se optar por isso ou por um jeito mais manual, com mais controle sobre o código.

## Contexto é rei
O fechamento reúne a aula:
- traga para a IA a documentação das bibliotecas;
- gere guidelines. As de Python do professor, nas rules do Cursor, definem a estrutura do projeto, onde ficam testes, requirements e arquivos de eval, além de code style, type hints, forma de tratar erros e documentação;
- tenha o README;
- registre em ADRs as decisões de arquitetura e o porquê, com um template que ele também vai passar;
- tenha plano de ação e tarefas, em que os PRPs são um exemplo a estudar.

Esses comandos permitem um vibe coding um pouco mais seguro, porque há muitos dados para a IA errar menos. Mas nada tira a sua responsabilidade de revisar o código, mesmo com um agente de code review somando à sua revisão.
