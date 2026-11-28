# Gabarito — Evalution skills

## 1. Negativos certos e positivos sem disparo: qual diagnóstico?
**Correta: C**
**Por quê:** é o quadro do baseline da Bad Query Optimizer: os pedidos que deveriam disparar ("melhore a performance desse select", "sugere índice") falharam, e os casos que não deveriam disparar estavam certos. O diagnóstico do Skill Creator foi under-trigger: a skill deixa de ser chamada quando deveria.
- **A:** over-trigger é disparar quando não deveria. Se todos os negativos estão certos, não há disparo em excesso para esconder; foi justamente a expectativa que o Skill Creator descartou na aula.
- **B:** o teste rodado é de trigger, não de qualidade. A skill nem chegou a ser acionada nos positivos, então não há resposta dela para avaliar.
- **D:** o score caiu por causa dos positivos que não dispararam, e não pela proporção entre os grupos. Com o disparo certo, os dois grupos acertariam.
**Conceito:** under-trigger x over-trigger no teste de trigger

## 2. Dataset só com positivos e 100% de acerto: que risco ele esconde?
**Correta: A**
**Por quê:** o dataset precisa de itens "bons" e "ruins" (deve disparar e não deve disparar). Sem os negativos, nada mede o disparo indevido: uma description genérica, que acionasse a skill para qualquer pedido, também tiraria 100%.
- **B:** continua sendo um teste de trigger; ele só fica cego para um dos dois erros. Qualidade do resultado é outra forma de avaliação, que olha a saída da skill.
- **C:** 100% de acerto nos positivos é o oposto de under-trigger, que é deixar de disparar quando deveria.
- **D:** a comparação com e sem skill pertence à avaliação de qualidade. O teste de trigger tem o próprio score, calculado sobre os casos de disparo.
**Conceito:** dataset com casos que devem e que não devem disparar

## 3. Loop de description sem ganho e a original como melhor: e agora?
**Correta: D**
**Por quê:** na aula, nenhuma candidata bateu o baseline (todas empataram) e a melhor descrição foi a original. A conclusão do Skill Creator foi que o gargalo não era a descrição, e sim a skill; o passo seguinte foi reescrever o conteúdo dela com base nos achados.
- **A:** se várias iterações deixam tudo no mesmo lugar, o problema não está no texto da description. Mais rodadas do mesmo loop atacam o lugar errado.
- **B:** a original venceu só porque ninguém a superou; a skill continuava falhando. "Melhor do loop" não quer dizer que a skill está pronta.
- **C:** na aula, o empate não foi atribuído ao dataset. O diagnóstico apontou a skill como gargalo, e o dataset expandido até manteve os itens originais.
**Conceito:** quando o gargalo não é a description

## 4. Com skill e sem skill nas mesmas perguntas: o que se mede?
**Correta: B**
**Por quê:** o viewer mostra a resposta com a skill e depois sem ela, para as mesmas perguntas, e o benchmark traz o pass rate e o delta, a diferença entre as duas rodadas. É isso que mostra o quanto a skill acrescenta ao modelo sozinho.
- **A:** a avaliação de qualidade olha o resultado produzido, não o disparo. O teste de trigger usa casos que devem e que não devem disparar, não uma rodada sem a skill.
- **C:** a comparação mede o ganho da skill, não se há um script por trás dela. Respostas iguais nas duas rodadas indicariam, no máximo, que a skill pouco acrescentou.
- **D:** a aula compara pass rate e delta entre as rodadas, e não custo de tokens.
**Conceito:** baseline com e sem skill e o delta

## 5. Delta estreito com respostas sempre no mesmo roteiro: qual leitura?
**Correta: C**
**Por quê:** é a leitura que a aula faz da Bad Query Optimizer (88% sem a skill, 100% com ela): a skill funciona, mas o benefício é menor do que parece. Ela não ensina o modelo, que já é treinado para a tarefa; o que garante é a consistência, o método passo a passo seguido em todos os casos.
- **A:** o modelo sozinho já acertava a grande maioria; se ele não soubesse diagnosticar, o pass rate sem a skill seria baixo. O que a skill acrescenta é o método, não o conhecimento.
- **B:** na aula, a análise não recomenda descartar a skill: classifica-a como boa e confiável, útil pela consistência. O professor pede para parar e analisar a direção, não para apagar.
- **D:** na aula, um resultado assim foi classificado como bom, e não excelente, justamente porque o delta sobre o baseline é estreito.
**Conceito:** interpretar o delta: ganho real x consistência

## 6. Delta estreito: qual achado enfraquece a conclusão de que a skill não agrega?
**Correta: A**
**Por quê:** na aula, o relatório apontou como problema de fundo que os inputs eram fáceis demais, com o gargalo quase na cara. Com casos assim, o modelo sozinho já acerta, e o delta sai estreito mesmo que a skill ajude: o teste não separa bem as duas rodadas. Casos mais difíceis poderiam mostrar o ganho.
- **B:** mais tempo e tokens são um custo da skill; reforçam a dúvida sobre o valor dela, não a enfraquecem.
- **C:** um baseline com modelo mais fraco aumentaria o delta artificialmente. Se, mesmo assim, o delta saiu estreito, a conclusão do colega fica mais forte, não mais fraca.
- **D:** a proporção do dataset de trigger diz respeito ao disparo; a avaliação de qualidade olha a saída, e o delta vem dela.
**Conceito:** casos fáceis demais deixam o delta estreito

## 7. Por que revisar o dataset que o Skill Creator gerou?
**Correta: D**
**Por quê:** o loop pega o eval de trigger criado pelo Skill Creator e otimiza contra ele. O professor diz que, na realidade, é muito importante conferir se o que foi proposto faz sentido: se os casos estiverem errados, o resultado do loop mede a coisa errada.
- **A:** na demo, o professor pulou a revisão e o loop rodou mesmo assim. A revisão é recomendada, não um bloqueio.
- **B:** a revisão confere os casos de teste; ela não substitui a avaliação de qualidade, que a aula faz depois, em separado.
- **C:** na aula, o dataset expandido manteve os itens originais e acrescentou outros. Não houve perda a recuperar.
**Conceito:** revisão humana do dataset gerado

## 8. Qual afirmação sobre o Skill Creator está INCORRETA?
**Correta: B**
**Por quê:** é a incorreta. O Skill Creator envolve processos determinísticos: por baixo, roda vários scripts Python que avaliam se a skill disparou ou não. Não depende só da inferência do modelo.
- **A:** correta. O professor diz que ele segue o padrão aberto e roda com qualquer skill.
- **C:** correta. A aula mostra as duas formas de avaliação: o nível de trigger e a qualidade do resultado.
- **D:** correta. Ele é uma skill (feita para avaliar skills), e a aula o chama por slash command ou em linguagem natural ("gere o teste de disparo da skill...").
**Conceito:** o Skill Creator como skill que também roda scripts

## 9. Por que deixar o template de exemplos de antipadrões fora do corpo?
**Correta: C**
**Por quê:** é o progressive disclosure: o corpo (nível 2) fica com o fluxo de trabalho, e a referência (nível 3) só é lida quando a skill precisa dela, para consulta no diagnóstico. Foi o mesmo movimento feito antes com a política de classificação.
- **A:** referência não faz parte do frontmatter. Quem decide o disparo são o name e a description.
- **B:** referências e scripts são pastas distintas, ambas do nível 3. O template continua sendo texto lido pelo modelo; virar determinístico exigiria um script.
- **D:** o que fica carregado desde o início é o nível 1, com name e description. A referência é o nível que só entra quando necessário.
**Conceito:** referência como nível 3 (progressive disclosure)

## 10. Disparo certo, saída fora da convenção: qual o próximo passo?
**Correta: B**
**Por quê:** a aula separa as duas formas de avaliar: o trigger (a skill foi chamada quando devia?) e a qualidade do resultado (o que ela produziu era o esperado?). Se o trigger passa e a saída falha, é a avaliação de qualidade que localiza o problema, como parte da manutenção que a skill, agora tratada como código, passa a exigir.
- **A:** a description decide se a skill dispara, não como ela responde. E o disparo já está certo.
- **C:** mais negativos procuram over-trigger, um problema de disparo. O sintoma relatado está na saída.
- **D:** a aula pede para voltar à skill e testá-la de tempos em tempos, mas não diz que um dataset perde a validade pela idade. Trocá-lo também não mede a saída.
**Conceito:** trigger x qualidade do resultado
