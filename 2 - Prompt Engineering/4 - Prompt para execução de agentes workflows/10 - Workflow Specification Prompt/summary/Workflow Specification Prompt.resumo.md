# Workflow Specification Prompt

## O comando como prompt de workflow

A aula analisa um prompt para workflows: um **comando** que o Claude Code executa. Um comando é um prompt e pode rodar em qualquer IA; este trabalha de forma **multiagente**, mas não é preciso ser multiagente para forçar um workflow detalhado. Nome e descrição servem mais para entender do que se trata do que para mandar fazer. A descrição pede um **snapshot** completo e auditável do projeto, coordenando agentes especialistas e consolidando seus outputs.

## Coordenador e orquestrador

O prompt nomeia cada papel. O Claude Code, que também é um agente, é o **coordenador**: recebe o comando, decide quando cada agente começa e dispara os agentes. O **agente orquestrador** só prepara a estrutura e depois sintetiza os outputs, mantendo o **tracking** do que já foi feito. Ele não chama agentes. Todas as comunicações passam pelo coordenador.

## Final delivery e template de saída

Mesmo com o foco no workflow, o output continua sendo o ponto mais importante. A entrega final é um **README**, com a data atual, no diretório do orquestrador, com a descrição do projeto e um **índice** que linka todos os relatórios, por caminho absoluto a partir da raiz do repositório. O prompt pede para **validar cada link** antes de salvar e para usar o `manifest.md`, gerenciado pelo orquestrador, como **fonte da verdade** para mapear os relatórios. O template de saída traz nome e descrição do projeto, data de geração, overview, arquitetura, componentes e dependências, como um "raio-x"; cada parte vem de um agente diferente.

## Restrições críticas

- Nunca dar o fluxo completo ao orquestrador. Ele tem só duas responsabilidades: o **setup na fase 1** e a **síntese na fase 4**.
- Separação estrita: cada agente especialista é invocado numa **task separada** (uma tool call), e o orquestrador não deve gerar subagentes.
- Seguir exatamente a especificação de cada agente, para não esquecer nada.
- Não escrever outputs fora das pastas pedidas; não dar recomendações nem planos de ação (o objetivo é só o raio-x); não informar tempo de duração; evitar linguagem vaga ("provavelmente seguro"); não fabricar CVEs, citando só as vulnerabilidades que o agente auditor encontrou.
- Depois que um agente termina, o coordenador chama o orquestrador para atualizar o manifesto. O prompt dá um exemplo: quando o Architecture Analyzer terminar, invoque o orquestrador para registrar isso no `manifest.md`.

Nem sempre o Claude segue isso: às vezes espera todos os relatórios para sintetizar de uma vez. Se um comportamento incomoda, a saída é ser **ainda mais específico** naquele ponto.

## O workflow por fases

O "ponto de ouro" é o workflow. Separar o fluxo em **fases** não garante, mas **maximiza as chances** de que ele seja seguido. Cada fase traz a tarefa e, entre parênteses, o nome do agente.

**Fase 1 (orquestrador):** entender as flags e os caminhos. Respeitar `--projectfolder` e `--outputfolder` quando informados; senão, usar as localizações padrão. Criar só os diretórios pedidos pela especificação, sem subníveis extras. Ler a lista de pastas ignoradas **antes** de escanear e nunca escanear essas pastas. Inicializar o `manifest.md` num diretório em branco, com título, caminho absoluto, agente e timestamp, porque é ele que mede o que já foi feito.

**Fase 2 (em paralelo):** sobem dois agentes de uma vez, o Auditor de Dependências e o Architecture Analyzer, sem esperar um pelo outro. O auditor faz o relatório de dependências e usa MCP servers, como o Context7 e o Firecrawl, para verificar versões, manutenção e vulnerabilidades; o coordenador lhe passa essas instruções. O analisador produz o relatório de arquitetura. Só o orquestrador registra no manifesto o fim de cada task; o Claude Code não altera o `manifest.md`.

**Fase 3 (componentes):** depende do relatório de arquitetura, que lista os componentes e é tratado como artefato. Para cada componente listado (por exemplo, na seção Critical Component Analysis), o coordenador inicia um agente de análise profunda separado, em paralelo, que analisa só aquele componente. O professor incluiu um exemplo porque o modelo às vezes não entendia que era um relatório por componente: se o relatório de arquitetura tem 10 componentes, são 10 agentes e 10 relatórios, sem pular nenhum.

## Reverificação e ULTRATHINK

Terminadas as execuções, o coordenador reabre o relatório de arquitetura, revê as seções linha por linha e, se faltar algum componente, dispara outro agente até a cobertura chegar a **100%**. Ao mesmo tempo, não pode duplicar relatórios. Aqui entra a palavra-chave **ULTRATHINK**: já aconteceu de o modelo ver relatórios com data e hora no nome, concluir que um não existia e duplicá-lo. O prompt pede verificação extremamente precisa de nomes parecidos e timestamps.

## Fases 4 e 5

Na **fase 4**, o orquestrador pega todos os relatórios gerados e finaliza o manifesto. Na **fase 5**, o Claude Code lê o manifesto, valida que todos os arquivos existem e salva o README no diretório do orquestrador. O orquestrador é só mais um especialista: faz o setup e a síntese, e não coordena.

## Parâmetros de execução

O comando aceita argumentos: `--projectfolder` limita a análise a uma pasta (útil num **monorepo**); `--outputfolder` muda a pasta de saída (padrão: `docs/agent/<nome do relatório>`); e `ignore folders` exclui pastas sem valor para a análise. Fora disso, nenhum outro caminho, nenhuma subpasta como `reports` ou `output` e nenhum arquivo não especificado.

## Instruções negativas

De forma forte: não modificar a codebase, não fazer upgrades, não inventar CVEs, não usar linguagem vaga nem emojis, não informar timestamp. Lembram as de prompts anteriores, só mais organizadas.

## Pensar passo a passo: o contexto de cada agente

Com ULTRATHINK e um "pense passo a passo" (Chain of Thought), o prompt pede ao coordenador que prepare bem a mensagem de cada invocação, passando **todo o contexto necessário** para o agente entender o que fazer; uma mensagem vaga faz o agente trabalhar mal. Para o professor, esse é o passo mais importante, e vale para qualquer aplicação multiagente, em que muitas vezes se define um formato de chamada entre agentes, por exemplo em **JSON** (o que passar, o próximo passo, as observações), como protocolo claro de comunicação. Este prompt não chega a fazer isso.
