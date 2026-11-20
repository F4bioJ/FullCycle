# Documentação e categorização

## README como índice categorizado

Um repositório de prompts precisa de um README que funcione como índice categorizado, não como vitrine textual. A função dele é tornar o acervo navegável, para que a equipe encontre rapidamente o prompt certo sem depender de memória individual. Como o repositório central e os links simbólicos já resolvem a exposição dos arquivos, o ganho novo aqui é a descoberta: saber o que existe, em que categoria está e quando usar. Um índice simples já basta, desde que reflita a lógica de organização adotada pelo time.

## Documentação por prompt com `documento.md`

Cada prompt deve ter sua própria documentação em um arquivo como `documento.md`, mantido ao lado do prompt raw em `prompt.md` ou `.yml`. Esse documento registra o nome do prompt, o link para a versão plain, o objetivo, os modelos testados e observações gerais de uso. A documentação existe para reduzir ambiguidade operacional: duas pessoas podem ler o mesmo prompt, mas usá-lo de formas diferentes se o contexto esperado não estiver explícito. Quando o prompt passa a orientar trabalho recorrente da equipe, essa camada descritiva deixa de ser excesso e vira infraestrutura de reuso.

## Changelog e rastreabilidade local

Um pequeno changelog no documento do prompt complementa o histórico do versionamento já conhecido. Ele não substitui diff nem controle de versão, mas resume as últimas mudanças em linguagem humana, o que acelera onboarding, revisão e diagnóstico. Ver as três alterações mais recentes costuma ser suficiente para entender por que o comportamento atual existe. Como a atualização desse resumo pode ser assistida por IA, o custo de manutenção tende a ser baixo.

## Categoria de exploração e planejamento

Exploração e planejamento agrupam prompts usados antes da implementação: análise de codebase, verificação de vulnerabilidades, leitura de guidelines e planejamento de features. Essa categoria existe porque desenvolvimento de software não começa escrevendo código; há uma fase de entendimento e decisão em que a IA já participa intensamente. Separar esses prompts evita misturá-los com prompts de execução e ajuda a equipe a localizar ferramentas de investigação e preparação. Retomando o mesmo acervo já organizado, a nova camada aqui é distinguir prompts que pensam o trabalho dos prompts que executam o trabalho.

## Categoria de documentação

Prompts de documentação servem para criar e manter artefatos como DR, RFC, PRD e outros design docs. Eles não são apenas atalhos de escrita: padronizam estrutura, vocabulário e completude de documentos que sustentam decisões técnicas. Quando essa categoria está explícita no repositório, a equipe passa a tratar documentação como fluxo recorrente, não como esforço improvisado. O resultado é maior consistência entre o que o software faz e o que o time registra sobre ele.

## Categoria de implementação

Implementação reúne prompts usados para produzir mudanças concretas no código, como workflows de desenvolvimento, geração de testes automatizados, correção de bugs, refatoração e análises do tipo LLM as a judge. O critério dessa categoria é simples: o prompt participa diretamente da execução técnica da tarefa. Essa separação importa porque prompts de implementação exigem instruções mais operacionais e costumam ser combinados com especializações por linguagem ou framework. Assim, o repositório não vira uma lista plana de comandos, mas uma biblioteca com intenção de uso clara.

## Especialização por linguagem e framework

Um prompt genérico cobre uma tarefa ampla, como “gerar testes automatizados”, mas raramente captura sozinho as regras de uma stack específica. A especialização entra para adicionar constraints, guidelines e padrões de tecnologias como Go, Spring, Laravel, LangGraph ou LangChain. Essa combinação melhora a qualidade porque o prompt base continua reutilizável, enquanto o complemento técnico injeta o contexto que falta para respostas mais aderentes. Em vez de duplicar tudo para cada stack, a equipe compõe um núcleo genérico com camadas especializadas.

## Categoria de infraestrutura

Infraestrutura agrupa prompts voltados a Dockerfile, Docker Compose, Kubernetes, Terraform e fluxos de CI/CD. Esses prompts têm natureza própria porque operam sobre ambiente, automação e entrega, não apenas sobre código de aplicação. Mantê-los em categoria separada facilita localizar conhecimento operacional e evita que práticas de infraestrutura fiquem diluídas entre prompts de implementação geral. Isso também ajuda times com papéis diferentes a reutilizar o acervo sem ruído desnecessário.

## Categoria de utilidades

Utilidades concentram prompts pré-configurados para tarefas repetitivas do dia a dia, como gerar mensagem de commit, abrir pull request com base em template e executar code review. O valor dessa categoria está na frequência de uso: pequenas automações economizam tempo justamente porque são acionadas o tempo inteiro. Uma pasta de `utils` torna esses atalhos visíveis e compartilháveis, em vez de deixá-los escondidos em hábitos individuais. O repositório passa, então, a servir não só para tarefas complexas, mas também para reduzir atrito operacional cotidiano.

## Composição entre prompt genérico e prompt especializado

Retomando o exemplo de geração de testes, o prompt genérico define a tarefa principal, enquanto a especialização informa como essa tarefa deve ser executada em um contexto técnico específico, como Go. Essa composição evita dois extremos ruins: um prompt amplo demais, que produz saídas vagas, e um prompt hiperlocal, que não pode ser reaproveitado. O ganho está em separar responsabilidade funcional de responsabilidade contextual. Com isso, o mesmo prompt-base pode funcionar em conjunto com várias especializações sem perder clareza nem reuso.

## Categorização como governança do acervo

Categorizar não é apenas organizar pastas; é transformar um conjunto de prompts em um ativo navegável, documentado e reutilizável pela equipe. A estrutura escolhida não precisa ser universal, e nem todo time precisa de todas as categorias, mas a lógica de classificação precisa ser explícita. Quando alguém novo entra no projeto, essa governança reduz tempo de descoberta e aumenta a chance de uso consistente dos prompts existentes. O repositório deixa de ser coleção pessoal e passa a operar como biblioteca compartilhada.
