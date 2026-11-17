# Executando Agente na prática

## Comando Markdown como camada de execução

Um comando em `commands` funciona como uma camada operacional que invoca um agente já registrado sem expor o usuário ao prompt interno completo. Nesse modelo, o arquivo Markdown deixa de ser apenas documentação e passa a atuar como instrução executável, acionada por `/nome-do-comando`. Isso importa porque separa a descoberta e o disparo da tarefa da lógica especializada do agente. Retomando o `Dependency Auditor`, o comando não substitui o agente: ele apenas cria uma entrada controlada para executá-lo.

## Variáveis no comando

A variável `Project Folder to Audit` injeta contexto de execução sem exigir que o comando seja reescrito a cada uso. No Cloud Code, esse valor costuma ser passado como variável com cifrão, embora placeholders também sejam possíveis dependendo do ambiente. O ponto central é que o comando recebe um parâmetro operacional — a pasta a ser auditada — e define um fallback explícito para a raiz do projeto quando esse valor não é informado. Isso reduz ambiguidade e evita que o agente precise inferir sozinho o escopo da análise.

## Redundância intencional em prompts

Redundância em prompt operacional não é defeito estilístico; é uma técnica de controle. Em texto humano, repetir `project`, `folder` e a mesma condição várias vezes parece excesso, mas em execução por LLM isso reforça restrições e diminui interpretações implícitas. A formulação “se o usuário não informar a pasta, audite o projeto inteiro; caso contrário, audite apenas a pasta fornecida” exemplifica esse uso deliberado. Quando a instrução afeta escopo, saída ou segurança, clareza repetida costuma ser mais confiável do que elegância textual.

## Prompt sobre prompt e prevenção de mistura

Quando um comando chama um agente que já possui prompt próprio, surge um cenário de prompt sobre prompt. O risco não é apenas duplicação de instruções, mas mistura de camadas: o modelo pode tratar regras do comando como substitutas das regras do agente, ou fundir ambas de forma inconsistente. Por isso, o comando precisa declarar explicitamente que a execução deve seguir a especificação do agente, em vez de improvisar a partir do texto do comando. Essa separação preserva o contrato do agente e transforma o comando em orquestração, não em redefinição de comportamento.

## ULTRATHINK como reforço de esforço cognitivo

`ULTRATHINK` é uma palavra-chave usada para induzir maior esforço de raciocínio na leitura e execução das instruções. O efeito prático não é mágico, mas operacional: o modelo tende a percorrer com mais cuidado as etapas da especificação antes de agir. Ao pedir `ULTRATHINK` sobre cada passo do `dependencyauditor.md`, o comando força o modelo a tratar o workflow do agente como referência primária. Isso é especialmente útil quando há múltiplas camadas de instrução competindo por atenção.

## Reforço redundante de regras críticas

Algumas regras merecem ser repetidas no comando mesmo quando já existem no prompt do agente. O lembrete `do not forget` para perguntar se o relatório deve ser salvo em arquivo é um exemplo de reforço de pós-execução: se o agente concluir a análise, mas a camada do comando continuar ativa, essa etapa ainda precisa acontecer. O mesmo vale para instruções negativas copiadas do prompt interno. Essa duplicação protege pontos críticos contra perda de contexto entre a chamada do comando e a execução do agente.

## Fluxo prático de execução

A execução segue uma sequência simples: digitar `/nome-do-comando`, informar a pasta ou repositório alvo e deixar o sistema encaminhar a tarefa ao agente especialista. No exemplo, o comando recebe o repositório do Google ADK em Python, o sistema identifica o contexto do projeto, cria uma to-do list interna e então aciona o agente auditor. Essa etapa intermediária mostra que o comando não gera o relatório diretamente; ele organiza a chamada, passa contexto e delega a análise. O resultado é uma auditoria disparada por interface curta, mas sustentada por um prompt especializado mais profundo.

## Inspeção da execução do agente

Durante a execução, o sistema pode expor sinais do raciocínio operacional, como criação de tarefas, identificação do ecossistema e uso de tools auxiliares. No caso observado, o agente tentou usar Firecrawl para navegação e depois recorreu a `WebSearch`, possivelmente por limitação de leitura ou tokens. Isso mostra que a execução real pode alternar ferramentas sem quebrar o objetivo da auditoria, desde que o contrato do agente permaneça o mesmo. Para troubleshooting, esse tipo de observação ajuda a distinguir erro de prompt de limitação de tool.

## Salvamento do relatório em arquivo

O relatório final não precisa ficar apenas na conversa; ele pode ser persistido como artefato do workflow. Quando o comando pergunta explicitamente pelo nome do arquivo e recebe algo como `report-adk.md`, a saída estruturada em Markdown é gravada no projeto e passa a ser reutilizável em revisão técnica, versionamento ou compartilhamento. Esse passo fecha o ciclo operacional: comando, contexto, execução, inspeção e persistência. O valor não está só em gerar texto, mas em produzir um deliverable concreto no formato esperado.

## Leitura do resultado gerado

O arquivo salvo deve manter o template já definido anteriormente para o agente auditor, com sumário, achados principais, dependências, riscos, arquivos críticos, notas de integração e plano de ação. Retomando o exemplo do Google ADK, a inspeção do `report-adk.md` confirma se o comando preservou o comportamento do agente em vez de distorcê-lo. A presença de itens específicos, como dependências diretas, vulnerabilidades em `FastAPI` e análise de risco, indica aderência ao escopo solicitado. Validar essa consistência é o teste final de que a camada de comando não contaminou a camada do agente.
