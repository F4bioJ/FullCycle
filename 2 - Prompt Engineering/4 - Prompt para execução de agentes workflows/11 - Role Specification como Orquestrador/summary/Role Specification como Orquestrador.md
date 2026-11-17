# Role Specification como Orquestrador

## Papel do orquestrador

O orquestrador atua como agente de governança do workflow, não como executor das análises especializadas. Sua função central é preservar estrutura, caminhos, cobertura e auditabilidade enquanto outros agentes produzem artefatos. Retomando o workflow já estabelecido, ele não decide quais especialistas rodar nem substitui o coordenador; ele mantém o processo íntegro e verificável. Essa distinção reduz sobreposição de responsabilidades e torna o estado do sistema mais confiável.

## Responsabilidades core

Responsabilidades core são compromissos inegociáveis do papel, não uma lista procedural de passos. Aqui, elas incluem inicializar o `manifesto.md`, registrar outputs concluídos, manter convenções de nome e caminho baseadas nos argumentos de execução, comparar a cobertura real com a lista de componentes e finalizar a integridade do manifesto. O valor dessa seção está em delimitar o que o agente deve preservar mesmo quando a execução variar. Isso produz consistência sem transformar o prompt em um roteiro excessivamente rígido.

## Manifesto como fonte única da verdade

O `manifesto.md` concentra o estado persistido do workflow e se torna o único lugar autorizado para registrar o que foi produzido. Quando apenas o orquestrador escreve nesse arquivo, o sistema reduz conflitos de autoria, evita divergência entre agentes e cria uma trilha auditável de artefatos. Cada registro precisa apontar para algo verificável: título, caminho absoluto, agente responsável e timestamp. Sem essa disciplina, a consolidação final passa a depender de memória conversacional ou inferência, o que enfraquece a confiabilidade operacional.

## Framework operacional do orquestrador

O framework operacional define como o orquestrador trabalha sobre o estado, não como os especialistas executam suas análises. Ele estabelece regras como não inventar diretórios, não criar caminhos alternativos e sempre validar a existência do artefato antes de registrá-lo. Também determina que o manifesto deve refletir cobertura por componente e pendências abertas, permitindo que o coordenador reaja a gaps reais. O resultado é um fluxo em que o estado acompanha a execução em vez de ser reconstruído no final.

## Registro e controle de cobertura

Registrar um artefato não é apenas anotar que algo terminou; é vinculá-lo a uma estrutura que permita verificar completude. Retomando o relatório arquitetural já conhecido, a lista de componentes vira referência para o orquestrador acompanhar quais análises existem, quais faltam e quais ainda estão pendentes. Se um componente não tiver relatório correspondente, o orquestrador não resolve isso sozinho: ele sinaliza o gap ao coordenador. Assim, cobertura deixa de ser uma suposição e passa a ser uma condição verificável do workflow.

## Controle de duplicação

Prevenir duplicidade é parte do controle de estado, não apenas uma limpeza cosmética no final. O orquestrador precisa validar caminhos e identificar registros repetidos antes de consolidar o manifesto, porque relatórios redundantes distorcem a noção de progresso e poluem a saída final. Esse cuidado é especialmente importante quando há nomes parecidos, múltiplas execuções ou reprocessamento parcial. Um estado confiável precisa distinguir claramente entre ausência, pendência e repetição.

## Princípios de decisão

Decision making principles reduzem ambiguidade ao explicitar como o agente deve escolher entre comportamentos possíveis. `Separation of concerns` impede que o orquestrador assuma despacho de tarefas, preservando a divisão entre quem decide a execução e quem governa o estado. `Minimum necessary state` limita o manifesto a notas factuais e operacionais, evitando recomendações, sumários ou interpretações que não pertencem a esse papel. `Safety over convenience` prioriza rejeitar registros duvidosos ou duplicados em vez de aceitar entradas convenientes, porém inseguras.

## Registro seguro em paralelo

Em execução paralela, o risco não está apenas em esquecer resultados, mas em corromper o estado compartilhado. O princípio de `parallel-safe recording` orienta o orquestrador a registrar outputs o mais cedo possível e a tratar o manifesto como recurso sensível, já que múltiplos agentes podem produzir artefatos simultaneamente. Mesmo sem garantias transacionais de banco de dados, a disciplina de escrita centralizada e validação prévia reduz a chance de inconsistência. O objetivo não é eliminar totalmente conflitos, mas tornar o comportamento previsível e recuperável.

## Padrões de comunicação

O orquestrador se comunica com o coordenador por um protocolo textual explícito, com formato previsível para status, pendências e artefatos registrados. Em vez de conversar diretamente com especialistas, ele devolve ao coordenador listas estruturadas contendo arquivo, caminho absoluto, agente, timestamp e checklist de componentes faltantes. Esse padrão transforma linguagem natural em interface operacional suficientemente estável para coordenação multiagente. Quanto mais regular for essa comunicação, menor a chance de o coordenador disparar ações com contexto incompleto.

## Disciplina do manifesto e ações proibidas

A disciplina do manifesto restringe o arquivo ao que interessa para governança: reports, componentes, status, timestamps e notas mínimas. O orquestrador não deve criar novos agentes, prescrever mudanças de código, estimar esforço, redigir sumários executivos nem registrar vulnerabilidades no manifesto. Essas proibições impedem que o agente expanda seu escopo e contamine o estado com conteúdo analítico ou prescritivo. Um manifesto útil é enxuto porque serve para continuidade operacional, não para substituir relatórios especializados.

## Estrutura prática do manifesto

Um template de manifesto normalmente inclui identificação do projeto, gerador, caminho do orquestrador, lista de reports, componentes monitorados, tasks do workflow, timestamps e status como concluído, pendente ou falho. Essa estrutura permite retomar a execução a partir do ponto correto e saber rapidamente o que já existe de fato. O ganho prático aparece quando o workflow é interrompido: em vez de depender da memória do agente, o sistema consulta um artefato persistido. Quanto mais consistente for esse template, mais fácil fica automatizar validação, síntese e retomada.

## Trade-off entre tracking em tempo real e desempenho

Há um custo operacional em registrar estado a cada conclusão individual. Se cada tarefa concluída disparar uma nova execução do orquestrador apenas para atualizar o manifesto, o tracking fica mais próximo do tempo real, mas a latência total aumenta porque há mais ciclos de coordenação e escrita. Se o registro ocorrer apenas ao final de um lote paralelo, o workflow roda mais rápido, porém uma interrupção no meio pode exigir reprocessamento por falta de estado intermediário persistido. A escolha depende do tamanho das tarefas, do custo de reexecução e do nível de tolerância a perda de progresso.

## Simplicidade do prompt do orquestrador

O prompt do orquestrador tende a ser mais simples que o de agentes analíticos porque seu trabalho é governar estado, não interpretar profundamente a codebase. Por isso, uma especificação enxuta com responsabilidades, framework operacional, princípios de decisão e padrões de comunicação costuma ser suficiente. A simplificação não reduz importância; ela reduz ambiguidade em um papel que precisa ser previsível. Em prompts operacionais, menos texto útil costuma produzir mais aderência do que instruções extensas e sobrepostas.
