# Workflow Specification Prompt

## Coordenador master e separação em relação ao orquestrador

O comando de workflow define dois papéis distintos: o coordenador master, exercido pelo agente principal que recebe o comando, e o agente orquestrador, que atua como especialista de suporte. O coordenador decide a sequência, dispara os agentes e controla quando cada tarefa começa; o orquestrador não coordena o fluxo, apenas prepara a estrutura inicial e consolida artefatos nas fases previstas. Essa separação evita que um mesmo agente acumule despacho, execução e síntese, o que reduz confusão operacional. Retomando o workflow com especialistas já conhecidos, a novidade aqui é explicitar quem chama quem e quem apenas registra estado.

## Prompt de workflow por fases

Um workflow specification prompt por fases organiza a execução como blocos numerados com dependências explícitas entre eles. Essa estrutura existe para maximizar aderência ao processo em cenários multiagentes, porque o modelo passa a enxergar ordem, paralelismo permitido e critérios de transição entre etapas. Em vez de um prompt único e difuso, cada fase declara o agente envolvido, o artefato esperado e as condições para continuar. O ganho principal é previsibilidade: fica mais difícil o sistema pular etapas, inverter dependências ou sintetizar cedo demais.

## Final delivery e template de saída

Mesmo quando o foco principal está no workflow, o resultado final precisa ser definido com precisão. Aqui, a entrega final é um `README` salvo no diretório do orquestrador, contendo descrição do projeto e um índice com links para todos os relatórios gerados. O template não serve apenas para formatação; ele ancora o objetivo global do fluxo e informa ao coordenador que todos os efeitos colaterais intermediários devem convergir para um artefato final verificável. Validar cada link antes de salvar impede que a consolidação aponte para caminhos inexistentes.

## `manifest.md` como fonte da verdade

O `manifest.md` funciona como registro operacional do workflow e concentra o estado persistido que será consultado ao longo das fases. Nesta estrutura, ele é inicializado na fase 1 e atualizado sempre que uma tarefa relevante termina, registrando ao menos título, caminho absoluto, agente e timestamp. Chamar esse arquivo de fonte da verdade significa que a consolidação final não deve depender da memória conversacional do agente nem de inferências sobre o que “provavelmente” foi gerado. A síntese consulta o manifesto para descobrir quais relatórios existem de fato e onde estão.

## Fase 1: setup, caminhos e diretórios válidos

A primeira fase prepara o ambiente de execução e resolve parâmetros como `--projectfolder`, `--outputfolder` e `ignore folders`. O objetivo não é analisar o projeto ainda, mas estabelecer escopo, diretórios permitidos e estrutura mínima para o workflow operar sem espalhar arquivos em locais arbitrários. Restringir a criação de diretórios ao que foi explicitamente especificado reduz deriva operacional, especialmente quando o agente tende a criar pastas auxiliares como `reports` ou `output` por inferência. Nessa mesma fase, o manifesto é criado em um diretório limpo para servir de base às próximas etapas.

## Fase 2: paralelismo controlado entre arquitetura e dependências

A segunda fase dispara, em paralelo, o auditor de dependências e o analisador de arquitetura, porque essas duas análises não dependem uma da outra. Paralelismo controlado significa permitir concorrência apenas quando a independência entre tarefas é real e quando o prompt deixa claro que cada execução deve ocorrer em uma task separada. O coordenador master envia a cada especialista o contexto necessário, incluindo tools e critérios específicos, mas o registro de conclusão continua sendo responsabilidade do orquestrador. Isso preserva a separação entre executar análise e manter estado.

## Fase 3: cobertura de componentes a partir do relatório arquitetural

A análise profunda por componente passa a depender do relatório arquitetural produzido antes, porque é dele que sai a lista de componentes a cobrir. Para cada componente listado em seções relevantes, como `Critical Component Analysis`, o coordenador deve abrir uma execução separada do analisador de componentes, uma por componente, em paralelo. A regra de cobertura é explícita: se o relatório arquitetural listar 10 componentes, o workflow precisa produzir 10 relatórios, sem pular nenhum. Esse ponto transforma o relatório de arquitetura em artefato intermediário, não apenas em documentação final.

## Reverificação de completude e prevenção de duplicidade

Cobertura total não pode ser presumida; ela precisa ser reverificada ao final da fase de componentes. O coordenador reabre o relatório arquitetural, revisa as seções que listam componentes e compara essa lista com os relatórios já gerados para detectar lacunas. Se algum componente estiver sem análise, uma nova execução deve ser disparada até atingir 100% de cobertura. Ao mesmo tempo, a verificação precisa evitar duplicidade, especialmente quando timestamps ou nomes parecidos fazem o agente acreditar que um relatório ainda não existe.

## `ULTRATHINK` como reforço de verificação

O uso de `ULTRATHINK`, já visto anteriormente, aparece aqui como reforço em pontos de alto risco operacional, não como definição geral do workflow. Ele é aplicado principalmente na checagem de completude e na prevenção de relatórios duplicados, onde pequenas leituras erradas geram artefatos redundantes ou cobertura incompleta. O valor prático está em forçar leitura mais cuidadosa de nomes, timestamps e correspondência entre componentes e arquivos. Em workflows longos, esse reforço ajuda a compensar a tendência do modelo a simplificar verificações.

## Fases 4 e 5: síntese e validação final

Na fase 4, o orquestrador consolida os relatórios e finaliza o `manifest.md` com a visão completa dos artefatos produzidos. Na fase 5, o coordenador lê o manifesto, valida a existência física dos arquivos e só então grava o `README` final com o índice consolidado. Essa divisão é importante porque separa consolidação de estado da entrega final ao usuário. O resultado é um fechamento auditável: primeiro registra-se o que existe, depois publica-se a visão navegável desse conjunto.

## Parâmetros de execução e `ignore folders`

Os parâmetros de execução controlam escopo sem exigir edição manual do prompt a cada uso. `--projectfolder` limita a análise a uma subárvore específica, o que é especialmente útil em monorepos; `--outputfolder` redefine o destino dos artefatos; `ignore folders` exclui diretórios irrelevantes ou ruidosos antes da leitura. Esses parâmetros reduzem ambiguidade operacional e tornam o workflow reutilizável em projetos com estruturas diferentes. A regra complementar é rígida: fora desses caminhos declarados, o agente não deve inventar novos destinos nem novos arquivos.

## Protocolo implícito de passagem de contexto

Mesmo sem formalizar mensagens em JSON, o workflow assume um protocolo implícito de comunicação entre coordenador e especialistas. O coordenador master precisa montar, para cada task, uma instrução suficientemente completa para que o agente chamado saiba o que analisar, com quais restrições, em qual artefato salvar e quais ferramentas usar. Se essa passagem de contexto for vaga, o especialista executa mal mesmo que seu prompt base seja bom. Em sistemas multiagentes, a qualidade da coordenação depende tanto do prompt do especialista quanto da mensagem de invocação enviada a ele.

## Instruções negativas e restrições de segurança operacional

As instruções negativas delimitam o que o workflow não pode fazer: modificar a codebase, realizar upgrades, inventar CVEs, usar linguagem vaga, criar arquivos extras ou produzir recomendações de ação quando o objetivo é apenas diagnóstico. Essas restrições existem porque agentes tendem a completar padrões comuns do domínio, como sugerir correções ou criar estruturas auxiliares. Ao explicitar proibições, o prompt reduz alucinação operacional e mantém o resultado aderente ao objetivo de snapshot auditável. Em workflows com múltiplos agentes, esse tipo de contenção precisa aparecer de forma redundante nas camadas críticas.
