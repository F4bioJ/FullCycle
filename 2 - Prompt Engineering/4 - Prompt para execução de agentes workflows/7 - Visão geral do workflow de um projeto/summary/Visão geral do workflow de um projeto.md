# Visão geral do workflow de um projeto

## Context Window e limites de memória operacional

Context Window é o limite de contexto que um agente consegue manter ativo durante a execução. Quando esse espaço enche, a ferramenta tende a compactar ou resumir partes do histórico, o que preserva continuidade parcial, mas reduz fidelidade de detalhes anteriores. Isso importa porque instruções iniciais, restrições e decisões já tomadas podem perder nitidez ao longo de workflows longos. Em projetos maiores, esse limite deixa de ser um detalhe técnico e passa a influenciar o desenho da arquitetura de agentes.

## Subagentes com contextos separados

Subagentes são execuções especializadas disparadas pelo agente principal, mas cada uma opera com sua própria janela de contexto. Isso significa que um agente não enxerga o histórico interno completo do outro; a comunicação acontece por input e output, não por memória compartilhada total. Essa separação reduz contaminação de contexto entre tarefas diferentes e ajuda a manter cada análise mais focada. Em contrapartida, ela exige um mecanismo explícito para coordenar progresso e consolidar resultados.

## Gerenciamento de estado em workflows multiagentes

Gerenciamento de estado é o controle explícito de onde a execução está, o que já foi concluído e o que ainda falta processar. Em workflows com agentes paralelos, esse controle é indispensável porque várias tarefas avançam ao mesmo tempo e podem terminar em ordens diferentes. Sem estado persistido, uma interrupção no meio do processo obriga reexecução parcial ou total, além de aumentar risco de duplicação e inconsistência. O estado funciona como um snapshot operacional da execução, não apenas como log histórico.

## Manifesto como estado persistido do projeto

O manifesto é o artefato que registra o tracking da execução e permite retomar o workflow do ponto em que ele parou. Ele representa, na prática, o estado persistido do projeto durante a análise: tarefas iniciadas, tarefas concluídas, relatórios gerados e próximas etapas. Esse arquivo é necessário porque os agentes não compartilham memória total entre si e porque a execução pode ser interrompida antes do fechamento completo. Em vez de depender da conversa corrente, o sistema passa a depender de um estado externo e legível.

## Agente orquestrador

O agente orquestrador coordena a execução sem ser o especialista de cada análise. Seu papel é iniciar estrutura de trabalho, acompanhar conclusão de tarefas, atualizar o manifesto e decidir quando disparar novas etapas dependentes dos resultados anteriores. Retomando os workflows com agentes já conhecidos, a novidade aqui é que a coordenação deixa de ser apenas lógica de prompt e passa a depender de estado explícito entre múltiplos especialistas. O orquestrador tende a ser mais genérico porque seu foco é fluxo, não domínio técnico específico.

## Visão macro do workflow

O fluxo completo parte de um comando executável que aciona o agente principal com um workflow definido. Esse fluxo prepara pastas, cria o manifesto, dispara análises paralelas de arquitetura e dependências, coleta relatórios intermediários e usa o relatório arquitetural para descobrir os componentes que serão analisados individualmente. A execução, portanto, mistura etapas paralelas e etapas dependentes: a análise de componentes só começa depois que a arquitetura lista os componentes do sistema. O resultado final é um pipeline de relatórios que converge para uma síntese navegável do projeto.

## Project State como snapshot do sistema

Project State é o retrato atual do projeto em um determinado momento, reunindo arquitetura, dependências, componentes e outras análises especializadas. Ele não é apenas inventário; serve como base para modernização, diagnóstico técnico e planejamento de evolução do software. Nesse workflow, o snapshot é construído por múltiplos agentes, cada um responsável por uma fatia do sistema. O valor do processo está em transformar observações dispersas em um estado consolidado e reutilizável.

## Execução paralela com dependências entre fases

A execução paralela acelera o workflow quando duas análises não dependem uma da outra, como arquitetura e dependências no início do processo. Porém, paralelismo não elimina ordem: algumas fases só podem começar quando outra produz um artefato necessário, como a lista de componentes extraída do relatório arquitetural. O desenho correto do fluxo separa o que pode rodar em paralelo do que precisa esperar uma saída anterior. Isso reduz tempo total sem sacrificar coerência do pipeline.

## Pipeline de relatórios e síntese final

Cada agente especialista produz um relatório intermediário que vira insumo para a próxima camada de análise ou para a consolidação final. O relatório de arquitetura é central porque dele sai a lista de componentes que alimenta as análises profundas por componente; o relatório de dependências complementa a visão estrutural com riscos e composição tecnológica. No fechamento, o orquestrador mapeia todos os artefatos gerados e produz um `README.md` como índice do estado do projeto. Esse pipeline transforma saídas isoladas em documentação operacional navegável.

## Estruturas de prompt por papel

Retomando o uso de agentes especialistas, comando e workflow specification já conhecidos, cada papel do sistema exige uma estrutura de prompt diferente. Os especialistas seguem prompts orientados a produzir análises técnicas específicas; o comando serve como ponto de entrada executável; o orquestrador precisa de uma estrutura voltada a fluxo, estado e coordenação. A diferença de estrutura existe porque cada papel resolve um problema distinto dentro do mesmo sistema. Reutilizar um único formato para todos os agentes tende a degradar clareza e confiabilidade.
