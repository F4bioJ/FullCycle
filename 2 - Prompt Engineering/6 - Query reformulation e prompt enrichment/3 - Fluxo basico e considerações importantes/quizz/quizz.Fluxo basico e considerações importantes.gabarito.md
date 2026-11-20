# Gabarito — Fluxo basico e considerações importantes

## 1. Por que modelos diferentes para enriquecer e responder
**Correta: B**
**Por quê:** Segundo o professor, quem enriquece costuma ser um modelo menor, mais barato e mais rápido, usado só para esse processamento. O modelo robusto, que precisa de mais dados ou de informações externas, fica com a resposta final.
- **A:** Inverte os papéis: é o modelo da resposta final que precisa de mais dados e de informações externas.
- **C:** As etapas são sequenciais: a pergunta enriquecida só vai ao modelo de resposta depois de pronta. Os tempos se somam.
- **D:** A memória de longo prazo apareceu na aula anterior como fonte de personalização, e não como critério para escolher o modelo que enriquece. Aqui, a escolha é por custo e velocidade.
**Conceito:** dois modelos — pequeno para enriquecer, robusto para responder

## 2. Cache por palavras-chave no lugar do LLM
**Correta: D**
**Por quê:** A aula diz que, com o cache por palavras-chave, você elimina a chamada a um modelo para enriquecer. O resultado não é tão refinado quanto o de um LLM, mas economiza bastante em custo e tempo.
- **A:** Inverte a troca: o cache perde em refinamento e ganha em custo.
- **B:** O cache serve justamente às perguntas frequentes. As raras são as que ele tende a não cobrir.
- **C:** Meia-verdade: o cache ganha em custo, mas a aula diz que o resultado não é tão refinado quanto o de um LLM.
**Conceito:** cache por palavras-chave — custo e tempo × refinamento

## 3. O que muda ao adicionar IA a um serviço
**Correta: A**
**Por quê:** O professor diz que a primeira coisa em que pensa é quantas chamadas fará ao modelo: cada uma deixa tudo mais caro e mais lento. Como só o enriquecimento já leva segundos, menos camadas significa um sistema mais rápido e mais barato.
- **B:** No fluxo da aula, o enriquecimento acontece antes da resposta, e não ao mesmo tempo. Os tempos se somam.
- **C:** A aula diz que mesmo o enriquecimento, feito pelo modelo menor, já pode levar alguns segundos.
- **D:** A aula atribui a demora às chamadas ao modelo, e não à distância da rede.
**Conceito:** número de chamadas ao modelo — latência e custo

## 4. Afirmação INCORRETA sobre por que enriquecer vale a pena
**Correta: C**
**Por quê:** O enriquecimento é uma chamada a mais ao modelo, que a aula estima em alguns segundos, e esse tempo se soma ao da resposta. Vale a pena porque evita perguntas repetidas, e não porque seja grátis em tempo.
- **A:** Correta. É o principal argumento da aula: acertar na primeira pergunta.
- **B:** Correta. A aula cita a repetição da busca e o retry como fontes de mais tokens e mais custo.
- **D:** Correta. O professor diz que o "usuário" pode ser outra IA, uma integração entre sistemas ou qualquer consumidor da API.
**Conceito:** por que enriquecer — acertar na primeira tentativa

## 5. Chatbot com perguntas muito repetidas
**Correta: A**
**Por quê:** A aula diz que não é preciso chamar um LLM sempre que há perguntas frequentes: dá para capturar padrões ou palavras-chave e devolver a resposta de um cache preparado. Chamar o modelo a todo momento é a abordagem ingênua.
- **B:** Tem lógica (o modelo pequeno é barato e rápido), mas ainda faz duas chamadas a cada repetição de uma pergunta conhecida. É o custo e a latência que o cache evita.
- **C:** Corta uma camada, mas continua chamando o modelo mais caro a cada repetição.
- **D:** Se a resposta é regerada a cada vez, o cache não economiza nada: o modelo robusto continua sendo chamado a cada repetição. A aula diz que não é preciso chamar um LLM sempre que houver perguntas frequentes.
**Conceito:** cache para perguntas frequentes
