# Gabarito — Visão geral do workflow de um projeto

## 1. Detalhe que não foi para o relatório chega ao outro subagente?
**Correta: C**
**Por quê:** a aula diz que o agente principal não acessa a janela de contexto do subagente, e vice-versa; um não lê o histórico do outro, e eles se comunicam por input e output. O que ficou só no contexto do agente de arquitetura não chega ao de dependências.
- **A:** os subagentes não trabalham dentro da janela do principal; cada um tem a sua, isolada.
- **B:** o principal sabe que o subagente está rodando, mas não enxerga o contexto dele.
- **D:** o manifesto guarda o tracking do que foi concluído, não o histórico das conversas dos agentes.
**Conceito:** isolamento de contexto entre agente principal e subagentes

## 2. O que o Claude Code faz quando a janela de contexto enche
**Correta: A**
**Por quê:** por padrão, o Claude Code compacta o histórico; perde um pouco de informação, mas tenta não jogar fora o que veio no início, como a solicitação inicial, uma das informações mais importantes.
- **B:** a aula diz o contrário: a compactação tenta justamente preservar a solicitação inicial.
- **C:** subagentes são gerados para tarefas e não recebem o histórico do principal; não é assim que a janela cheia é tratada.
- **D:** a compactação perde informação; o professor diz isso explicitamente.
**Conceito:** compactação da context window

## 3. Papel do estado num agente interrompido
**Correta: D**
**Por quê:** o professor define o estado como o que diz em que momento o agente está sendo executado: um snapshot de onde a execução parou. É o que permite retomar sem refazer tudo.
- **A:** o resumo do professor diz que o estado é um snapshot operacional, não apenas um log histórico; guardar a conversa completa não é o papel dele.
- **B:** nada garante que o modelo siga os passos exatamente; a IA é probabilística, e isso não é função do estado.
- **C:** os agentes não leem o contexto uns dos outros; o estado é justamente o mecanismo externo que compensa isso.
**Conceito:** estado como snapshot de onde a execução parou

## 4. O que permite retomar o workflow interrompido
**Correta: B**
**Por quê:** o orquestrador mantém, no arquivo de manifesto, o tracking das tarefas concluídas (o Claude Code o avisa a cada uma). A aula diz que, se a execução parar no meio, dá para continuar de onde parou a partir desse manifesto.
- **A:** o histórico compactado de uma execução não é o mecanismo de retomada da aula; o estado fica num arquivo externo, o manifesto.
- **C:** o `README.md` é gerado só no fechamento, depois que todos os relatórios estão prontos.
- **D:** o relatório de arquitetura traz a lista de componentes, mas não acompanha quais já foram analisados; isso é papel do manifesto.
**Conceito:** manifesto do orquestrador e retomada

## 5. Mesmo prompt, mesma execução?
**Correta: A**
**Por quê:** a IA trabalha de forma probabilística, não determinística; mesmo com orquestrador e o mesmo prompt, o modelo não necessariamente segue linha a linha. O que se consegue é aumentar a confiabilidade, nunca garantir exatidão (por isso existem frameworks como o LangGraph, que deixam o fluxo um pouco mais determinístico).
- **B:** o manifesto registra o que foi feito, mas não torna o modelo determinístico.
- **C:** a aula não atribui o não determinismo ao paralelismo; ele vem da natureza probabilística da IA.
- **D:** o professor diz que nem a sequência de passos é garantida: o modelo pode não seguir o fluxo passo a passo.
**Conceito:** IA probabilística: confiabilidade sem exatidão

## 6. Por que a análise de componentes espera
**Correta: C**
**Por quê:** o relatório de arquitetura traz a lista dos componentes do sistema; só depois de ele ficar pronto o Claude Code lê essa lista e dispara a análise de cada componente em paralelo.
- **A:** a dependência é com o relatório de arquitetura, não com o de dependências.
- **B:** a aula não fala de limite de dois subagentes; a análise de componentes, inclusive, roda vários agentes em paralelo.
- **D:** o `README.md` é gerado no fim, como índice dos relatórios; não é a fonte da lista de componentes.
**Conceito:** etapas paralelas e etapas dependentes

## 7. Reaproveitar o orquestrador em outro projeto
**Correta: D**
**Por quê:** o professor diz que o orquestrador deve ser o mais genérico possível, para acompanhar qualquer tipo de projeto; cada projeto tem especificidades, então costuma-se fazer uma alteração ou outra, mas a ideia principal continua a mesma.
- **A:** o orquestrador não é o especialista das análises; o conhecimento técnico fica nos agentes especialistas.
- **B:** o professor admite que as especificidades de cada projeto pedem ajustes pontuais.
- **C:** os especialistas usam outra estrutura, voltada a produzir uma análise; acompanhar o fluxo é papel do orquestrador.
**Conceito:** orquestrador genérico

## 8. Qual afirmação sobre as estruturas está INCORRETA
**Correta: B**
**Por quê:** a aula diz que os especialistas usam a mesma estrutura, mas o orquestrador usa outra e o comando usa outra ainda. Não é uma estrutura única com papéis trocados.
- **A:** correta: o arquitetural, o auditor de dependências e o de componentes usam a mesma estrutura.
- **C:** correta: o orquestrador usa uma estrutura diferente da dos especialistas.
- **D:** correta: o professor diz que nada é escrito em pedra; são templates e estruturas para não partir do zero.
**Conceito:** estrutura de prompt por papel

## 9. Ferramenta sem recurso de comandos
**Correta: C**
**Por quê:** a aula explica que um comando é basicamente um prompt: ao executá-lo, a ferramenta roda esse prompt, que leva ao agente principal o fluxo de trabalho. Sem o recurso, basta dar esse prompt ao agente principal; a intenção do professor é que os conceitos valham independentemente da ferramenta.
- **A:** o subagente faz uma tarefa específica com contexto isolado; quem recebe o fluxo de trabalho é o agente principal.
- **B:** o LangGraph aparece na aula para tornar o fluxo mais determinístico, não como substituto obrigatório de comandos.
- **D:** quem dispara os agentes em paralelo é o agente principal (o Claude Code); o comando só entrega o fluxo.
**Conceito:** comando como prompt

## 10. Como sai o `README.md`
**Correta: A**
**Por quê:** no fim, o orquestrador mapeia todos os relatórios gerados e produz um `README.md` com a lista deles, para ver como está o sistema; funciona como índice do Project State.
- **B:** o agente de arquitetura gera o próprio relatório; a consolidação final é do orquestrador.
- **C:** o README não é um resumo escrito pelo agente principal a partir do texto dos relatórios; é a lista dos relatórios, feita pelo orquestrador.
- **D:** os agentes de componente geram relatórios próprios; o README é montado no fechamento, não por acréscimos.
**Conceito:** síntese final do workflow
