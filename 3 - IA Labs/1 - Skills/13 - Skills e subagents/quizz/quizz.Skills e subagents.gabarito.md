# Gabarito — Skills e subagents

## 1. Que subagente lançar para mapear cinco frentes em paralelo, só lendo
**Correta: C**
**Por quê:** o professor descreve o Explore como um agente super rápido, que em geral usa o modelo mais barato e mais rápido e trabalha bastante com ferramentas de leitura, com o propósito de fazer o mapeamento ou a busca de forma rápida. É exatamente o que a skill da aula usa no passo 2; na demonstração, a exploração rodou no Haiku, e não no Opus da conversa.
- **A:** o Plan de fato herda o modelo da conversa e tem acesso a itens externos, mas é o agente de pesquisa e de planejamento. Herdar o Opus em cinco frentes de pura leitura é justamente o custo que o Explore evita.
- **B:** o general purpose é o agente das tarefas de múltiplas etapas que juntam exploração e ação (edição, escrita). Uma frente de leitura não precisa dele, e o professor escolhe o Explore para esse trabalho.
- **D:** o Plan é o agente do modo plan e usa ferramentas de leitura, mas herda o modelo da conversa; ou seja, gasta justamente o Opus. Quem roda no modelo mais barato é o Explore.
**Conceito:** Explore para mapeamento e busca rápida

## 2. Duas frentes em que a segunda depende do que a primeira descobriu
**Correta: A**
**Por quê:** o professor marca como obrigatório quebrar o projeto em frentes independentes e explica o motivo: os subagentes não compartilham o mesmo contexto. O segundo subagente recebe o seu prompt e não vê o que o primeiro descobriu, então uma frente que depende de outra fica sem a informação de que precisa.
- **B:** a falha não é de ordem de término. Mesmo que o primeiro terminasse antes, o segundo não teria acesso ao resumo dele, porque não compartilham contexto.
- **C:** inverte a ideia da aula: o subagente não herda o contexto da conversa principal; é justamente por não compartilhar contexto que as frentes precisam ser independentes.
- **D:** o passo 3 junta os resumos, mas isso acontece na conversa principal, depois que os subagentes terminam. Os subagentes não recebem os resumos uns dos outros, e esperar não muda isso.
**Conceito:** subagentes não compartilham contexto (frentes independentes)

## 3. O que esperar do agente Plan no modo plan
**Correta: D**
**Por quê:** pela aula, o Plan tem acesso a itens externos e funciona como agente de pesquisa; diferente do Explore, herda o modelo que se está usando na conversa (o professor cita o Opus que estava usando); e tem ferramentas só de leitura, com a edição negada por padrão. O professor diz que o modo plan do Claude Code usa esse agente.
- **A:** descreve o Explore, que em geral usa o modelo mais barato e rápido. O Plan herda o modelo da conversa.
- **B:** a primeira metade está certa (herda o Opus), mas herdar o modelo não dá permissão de edição: no Plan, a edição é negada por padrão.
- **C:** o professor diz o contrário: o Plan tem acesso a itens externos, e é isso que o torna um agente de pesquisa.
**Conceito:** Plan herda o modelo, pesquisa e não edita

## 4. Localizar, trocar e salvar: que agente combina com a tarefa
**Correta: B**
**Por quê:** o general purpose é, nas palavras do professor, um agente generalista, capaz de executar tarefas variadas com múltiplas etapas, que em geral envolvem exploração e alguma ação, seja edição, seja escrita. Localizar os usos, trocá-los e salvar os arquivos é esse tipo de tarefa.
- **A:** o Explore é o agente de mapeamento e busca rápida, que trabalha com ferramentas de leitura. A tarefa não termina na busca: ela exige editar e gravar os arquivos.
- **C:** o Plan herda o modelo da conversa e pesquisa, mas tem a edição negada por padrão, então não conclui uma troca que exige editar arquivos.
- **D:** lançar vários subagentes na mesma mensagem dá concorrência, como no passo 2 da skill, mas não muda o tipo do agente: o Explore continua sendo o de busca e leitura.
**Conceito:** general purpose para tarefas de várias etapas com edição

## 5. Levar a skill com subagentes para outro harness
**Correta: C**
**Por quê:** o professor abre a aula avisando que o assunto depende muito da CLI, do harness. Há harnesses com agentes que fazem a mesma coisa com outros nomes e CLIs que não têm nenhum tipo de agente. Uma skill cujo passo 2 manda lançar subagentes Explore precisa ser conferida contra isso.
- **A:** o padrão aberto Agent Skills (aula 3.1.1) é o formato da skill. Os tipos de agente são do Claude Code; o professor diz que os nomes podem mudar e que há CLIs sem agentes.
- **B:** a distinção entre propriedades do padrão aberto e do Claude Code (aula 3.1.5) é real, mas a conclusão está errada: o próprio corpo, ao pedir subagentes de um tipo, depende do harness.
- **D:** o que o professor diz que muda entre as CLIs são os agentes (nomes e existência), não a escolha do modelo. O modelo barato é uma característica do Explore no Claude Code.
**Conceito:** subagentes dependem do harness

## 6. Lançar todos os subagentes na mesma mensagem
**Correta: A**
**Por quê:** o professor pede todas as chamadas na mesma mensagem, ou seja, várias chamadas que rodam de forma concorrente; na execução, os subagentes aparecem disparados todos ao mesmo tempo. Isso não muda o fato de que os subagentes não compartilham contexto: cada um explora a sua frente e devolve o seu resumo.
- **B:** a concorrência está certa, mas sair da mesma mensagem não faz os subagentes dividirem contexto; a aula diz que eles não compartilham o mesmo contexto.
- **C:** o pedido é o oposto de "uma por vez": é para as chamadas rodarem de forma concorrente. A economia de tokens descrita não aparece na aula.
- **D:** a concorrência está certa, mas o passo 3 continua necessário: é ele que junta os resumos e gera o mapa, com visão geral, por onde começar, riscos e prioridades.
**Conceito:** chamadas concorrentes na mesma mensagem

## 7. De onde vem a ordem de ataque que cruza frentes
**Correta: D**
**Por quê:** cada subagente fica na sua frente e, pelo prompt, aponta um ou dois riscos ou pontos de atenção e devolve o resumo. Quem tem todos os resumos é a conversa principal, no passo 3, que os junta e gera o mapa com riscos e prioridades. Uma ordem que compara riscos de frentes diferentes só pode sair daí.
- **A:** o subagente de segurança é uma das frentes e não recebe os achados das outras; os subagentes não compartilham contexto.
- **B:** cada subagente aponta os riscos da sua frente, mas não vê as outras, então não tem como ordenar os seus riscos em relação aos delas.
- **C:** mapear o fluxo de dados é a frente de arquitetura, mas o prompt pede que cada subagente fique só na sua frente, e ele não vê o que os outros encontraram.
**Conceito:** a síntese acontece no passo 3, na conversa principal

## 8. Qual afirmação sobre os três tipos de agente está INCORRETA
**Correta: B**
**Por quê:** é a incorreta. Quem herda o modelo da conversa é o Plan, e o professor destaca isso como diferença em relação ao Explore. O Explore em geral usa o modelo mais barato e rápido; na demonstração, a exploração rodou no Haiku.
- **A:** correta: é a descrição do Explore na aula, um agente super rápido, voltado a mapeamento e busca.
- **C:** correta: o Plan tem acesso a itens externos, é o agente de pesquisa, usa ferramentas só de leitura e tem a edição negada por padrão.
- **D:** correta: o general purpose é o generalista das tarefas de múltiplas etapas, com exploração e alguma ação de edição ou escrita.
**Conceito:** Explore × Plan: qual herda o modelo

## 9. Garantir, a cada feature, que a rota não importe o domínio
**Correta: C**
**Por quê:** a aula 3.1.12 mostrou que, como a IA não é determinística, a trava arquitetural vem de um script: o check de camadas devolve exit 2 com um bloco por violação (arquivo, linha, por que viola, como consertar), e a skill entra na autocorreção até o exit 0. O mapa desta aula é feito por subagentes de LLM: aponta riscos, mas não garante a regra.
- **A:** rodar o mapa de novo ajuda a enxergar riscos, mas o subagente é uma LLM, que não é determinística; nada garante que ele encontre toda importação proibida em toda execução.
- **B:** o Plan de fato herda o Opus, mas um modelo mais forte continua não sendo determinístico. A garantia da aula anterior vem do script, não do modelo.
- **D:** listar com caminho e linha está no prompt da aula e deixa o resultado mais rastreável, mas não muda a natureza da LLM: o formato da saída não torna o resultado determinístico.
**Conceito:** subagente de LLM aponta, script determinístico garante

## 10. O que se ganha ao pôr os subagentes dentro de uma skill
**Correta: A**
**Por quê:** o professor lembra que o Claude Code dispara subagentes por padrão, mas o foco é a skill: é nela que ficam a quebra em frentes, o tipo de subagente (Explore), o prompt de cada um e a síntese. Com as customizações de cada projeto, a mesma skill serve para manter a documentação atualizada e para o onboarding de pessoas novas ou o próprio onboarding em projetos novos.
- **B:** o professor diz o contrário: o Claude Code já consegue disparar subagentes por padrão, sem skill. A skill organiza o uso, não o libera.
- **C:** ler o mesmo skill.md não faz os subagentes compartilharem contexto; a aula diz que eles não compartilham, e por isso cada um recebe o próprio prompt.
- **D:** a skill padroniza o processo, mas os subagentes continuam sendo LLMs, que não são determinísticas (aulas 3.1.1 e 3.1.8): o mesmo prompt não garante o mesmo resumo.
**Conceito:** a skill padroniza o procedimento com subagentes
