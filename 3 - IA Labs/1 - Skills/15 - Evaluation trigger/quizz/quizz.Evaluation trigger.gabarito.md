# Gabarito — Evaluation trigger

## 1. Por que voltar à avaliação de trigger depois da reescrita?
**Correta: C**
**Por quê:** o professor recapitula que a avaliação da description chegou a acontecer, mas foi pausada porque a skill precisou ser reescrita por inteiro. A versão nova rodou só na avaliação de qualidade, então ainda não se sabia se ela dispara nos pedidos certos. Por isso ele retoma o processo de avaliação da description (o trigger) para ver o resultado.
- **A:** a avaliação de qualidade olha a saída da skill nos inputs gerados (as queries SQL), não se a description aciona a skill nos pedidos certos. O disparo da versão nova ainda não tinha sido medido.
- **B:** o professor apagou o workspace por escolha própria, "só para gerar um novo" e trabalhar em cima do trigger. A aula não diz que o Skill Creator exige isso, e esse não é o motivo de voltar ao trigger.
- **D:** o delta estreito (88% contra 100%) foi atribuído a testes fáceis demais, não à description. A "descrição genérica" foi a causa raiz apontada antes da reescrita, na skill original.
**Conceito:** retomada da avaliação de trigger após a reescrita da skill

## 2. Precision 100% e recall 50% no teste de trigger: qual diagnóstico?
**Correta: A**
**Por quê:** a precision cai com falsos positivos, e o recall com falsos negativos (aula de métricas do Prompt Engineering). Precision de 100% quer dizer que, toda vez que a skill disparou, o disparo estava certo; recall de 50% quer dizer que metade dos casos "should trigger" não disparou. É o under-trigger da aula anterior: a skill deixa de ser chamada quando deveria.
- **B:** over-trigger geraria falsos positivos e derrubaria a precision, que está em 100%. O recall baixo mede o que faltou disparar, não o excesso.
- **C:** a precision não indica quantos negativos há no dataset; ela olha os disparos que aconteceram. O sintoma é de disparos que faltaram.
- **D:** o teste é de trigger e mede se a skill foi chamada; a qualidade da resposta é outra avaliação. Além disso, com recall de 50%, a skill não foi chamada em metade dos casos certos.
**Conceito:** precision e recall no teste de trigger (under-trigger)

## 3. Três métricas em 100% e otimizada quase igual à original: que decisão?
**Correta: D**
**Por quê:** com accuracy, recall e precision em 100%, o professor conclui que a descrição está muito boa, e a decisão registrada pelo Skill Creator foi que ela já estava ótima, sem alteração. A versão auto-otimizada saiu praticamente igual, então não havia o que corrigir.
- **A:** sair do loop não torna a candidata melhor; ela é praticamente a mesma coisa, e a decisão da aula foi não alterar nada.
- **B:** o professor alerta que dá para ficar no loop eternamente; a ideia é atingir métricas básicas, e elas já foram atingidas.
- **C:** o trigger mede se a skill é chamada, não se a saída está certa. A qualidade é outra avaliação, e ela já tinha rodado antes desta aula.
**Conceito:** decisão do loop quando as métricas de trigger estão no alvo

## 4. Loop de description sem alvo definido: o que a aula recomenda?
**Correta: B**
**Por quê:** o professor diz que daria para ficar nesse loop eternamente, e por isso a ideia é manter algumas métricas básicas e atingi-las. O patamar definido antes é o que diz quando parar.
- **A:** as cinco iterações foram as daquela rodada da aula anterior, não uma regra de parada. Um número fixo de rodadas não diz se o disparo ficou bom.
- **C:** o holdout não é consumido a cada rodada; ele fica guardado à parte e é usado para testar se as alterações fazem sentido.
- **D:** voltar à original não é critério de convergência que a aula ensine. Na aula anterior, aliás, a original venceu e o problema era a skill, não a description.
**Conceito:** métricas básicas como critério de parada do loop

## 5. Skill validada no Claude Code vai para outro harness e outro modelo: o que fazer?
**Correta: A**
**Por quê:** o professor avisa que tudo foi feito com o Claude Code e um modelo da Anthropic, e que os testes devem ser feitos de acordo com a CLI e o modelo que você usa. Modelos diferentes têm respostas e atuações diferentes, e o resultado muda conforme o modelo, a versão e o harness.
- **B:** o padrão aberto faz a skill rodar em outros harnesses, mas não garante o mesmo disparo. A recomendação da aula é testar no harness e no modelo que você vai usar.
- **C:** o texto da description é o mesmo, mas quem decide o disparo é o modelo dentro do harness. Por isso o trigger precisa ser medido de novo; a qualidade sozinha não responde à pergunta.
- **D:** a aula não fala em idioma para outros fornecedores. A recomendação de aplicar a description em inglês veio de outra aula e não substitui o teste no novo ambiente.
**Conceito:** a avaliação depende do modelo, da versão e do harness

## 6. Treino e holdout: qual afirmação está INCORRETA?
**Correta: D**
**Por quê:** a divisão entre treino e holdout é uma separação do dataset em dois grupos, cerca de 60% e 40%. Ela não corresponde a "deve disparar" e "não deve disparar": essa é a legenda verde e vermelha do relatório, que a aula apresenta como uma marcação à parte da divisão entre treino e teste.
- **A:** correta. São os números que o professor dá: cerca de 60% para treinamento e os outros 40% para o teste.
- **B:** correta. O professor diz que esses itens ficam guardados de forma totalmente separada e, num primeiro momento, não são usados nem vistos.
- **C:** correta. O holdout entra num segundo momento para testar se as alterações do loop fazem sentido e se o agente lida com situações novas.
**Conceito:** separação do dataset em treino e holdout

## 7. Candidata acerta todo o treino e erra o holdout: qual leitura?
**Correta: B**
**Por quê:** o holdout existe para conferir se as alterações do loop fazem sentido em situações novas, que não foram usadas na otimização. Acertar o treino e errar o holdout mostra que a candidata se ajustou aos exemplos que viu, mas não mostrou que o agente compreendeu a habilidade.
- **A:** o holdout é menor (40%), mas é justamente a medida em casos não vistos. Ignorá-lo seria aceitar a candidata sem o teste que o processo reserva para isso.
- **C:** na aula anterior, nenhuma candidata bateu o baseline nem no conjunto inteiro. Aqui a candidata vai bem no treino e mal no teste, sintoma de que ela não generaliza.
- **D:** passar os itens do holdout para o treino acaba com a separação: o loop otimizaria sobre eles e não sobraria um conjunto guardado para testar casos novos.
**Conceito:** papel do holdout na otimização da description

## 8. Hash no nome da skill durante o teste: por que importa?
**Correta: C**
**Por quê:** o Skill Creator relatou que, naquela versão do Claude Code, o teste acrescentava um hash ao nome da skill e impossibilitava encontrá-la. Uma skill que não é encontrada não tem como ser acionada, então a medição refletiria o defeito do teste, e não a qualidade da description. Por isso ele se autocorrigiu antes de medir.
- **A:** a aula não diz que o hash identifica versões de description. A comparação entre original e otimizada aparece no relatório HTML.
- **B:** o problema relatado foi o contrário: com o hash, a skill não era encontrada. Isso tiraria disparos, não criaria disparos indevidos.
- **D:** o defeito estava no teste gerado naquela versão do harness, que alterava o nome da skill. A aula não tira daí nenhuma regra para o texto da description.
**Conceito:** falha do teste x falha da description

## 9. Item do teste em vermelho e disparado no HTML: o que significa?
**Correta: A**
**Por quê:** na legenda do HTML remodelado, vermelho é "should not trigger" e verde é "should trigger". Um item vermelho que disparou é um disparo indevido; como está no conjunto de teste (o holdout), é um caso que o loop não usou na otimização, e o erro aparece justamente em situação nova.
- **B:** a cor não vem do que foi executado; ela marca o tipo de item (vermelho = não deve disparar). O que foi executado e o resultado aparecem à parte, comparados com o esperado de cada item do dataset.
- **C:** o pedido que devia acionar a skill é o verde. A cor indica o tipo de item, não o conjunto (treino ou teste).
- **D:** o item está no conjunto de teste, não no de treino, e a aula não descreve vermelho como registro de histórico.
**Conceito:** legenda should trigger / should not trigger e conjunto de teste no relatório

## 10. Skill em construção, sem saber se vai na direção certa: como usar o Skill Creator?
**Correta: D**
**Por quê:** o professor descreve dois caminhos. Além do mais padrão (avaliar, testar e viabilizar versões novas), dá para usar a evaluation como bússola: "tenho essa skill, não sei se está indo de acordo com o que eu quero", e, com base nos pontos de melhoria que ela mostra, ir corrigindo junto, pelos comandos passados à CLI. É o caso da dev com o rascunho.
- **A:** o uso como bússola serve justamente para quem ainda não sabe se a skill está no caminho certo, durante a construção; esperar a versão final desperdiça a orientação. Além disso, o loop de description cuida do disparo, não da direção do conteúdo.
- **B:** a comparação com e sem a skill é parte da avaliação de qualidade, mas o delta não decide sozinho se a skill deve existir; na aula anterior, essa análise o professor fez sobre o resultado. E o caminho da bússola é ir corrigindo, não dar um veredito.
- **C:** viabilizar versões novas parte do que você já produziu, não de uma troca pelo melhor placar no treino; e escolher pelo treino ignora o holdout. No caminho da bússola, a dev corrige junto com o Skill Creator.
**Conceito:** Skill Creator como avaliador e como bússola
