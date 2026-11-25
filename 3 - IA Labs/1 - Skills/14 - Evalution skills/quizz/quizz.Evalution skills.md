# Quizz — Evalution skills

**Capítulo:** 1 - Skills · **Aula:** 14
**Base:** material da aula

---

## 1. Você roda o teste de trigger de uma skill de revisão de migrations. Os pedidos marcados para não disparar saem todos corretos, mas pedidos como "revise essa migration antes do deploy" e "essa alteração de tabela é segura?" não acionam a skill. Qual diagnóstico corresponde a esse quadro?
- A) Over-trigger: a description é ampla demais, e o acerto nos negativos esconde o excesso de disparo.
- B) Problema de qualidade: a skill dispara, mas a resposta dela não segue o método esperado.
- C) Under-trigger: a skill deixa de ser acionada quando deveria, embora os negativos estejam certos.
- D) Dataset desequilibrado: com mais negativos que positivos, o score cai mesmo com o disparo certo.

## 2. Um colega monta o dataset de trigger só com pedidos que devem acionar a skill e comemora 100% de acerto. Que risco esse dataset esconde?
- A) Uma description que dispara para quase tudo também tiraria 100%, porque nada mede o disparo indevido.
- B) O teste deixa de medir o disparo e passa a medir a qualidade do resultado, por faltar o grupo negativo.
- C) O acerto indica under-trigger, porque o modelo passou a acionar a skill sem ler a description.
- D) Sem a rodada sem skill como baseline, o score de trigger não pode ser calculado pelo Skill Creator.

## 3. No loop de otimização, o Skill Creator testou cinco iterações de description. Nenhuma candidata bateu o baseline, e a melhor foi a original. Qual é o passo seguinte coerente com o que a aula mostrou?
- A) Aumentar o número de iterações, porque cinco rodadas não bastam para a description convergir.
- B) Manter a skill como está, já que a description original venceu e, portanto, é a melhor possível.
- C) Descartar o dataset gerado, porque o empate mostra que os casos criados pelo loop eram inválidos.
- D) Parar de mexer no texto da description e reescrever o corpo, onde o relatório pôs o gargalo.

## 4. Na avaliação de qualidade, o viewer mostra cada prompt respondido primeiro com a skill e depois sem ela, com as mesmas perguntas. O que essa comparação permite medir?
- A) Se a description dispara a skill nos casos certos, já que a rodada sem skill faz o papel de negativo.
- B) Quanto a skill acrescenta ao que o modelo já faz sozinho, pelo delta entre os pass rates das rodadas.
- C) Se a skill é determinística, pois respostas iguais nas duas rodadas mostram que o script rodou.
- D) Qual configuração é mais barata, comparando o custo em tokens da rodada com e da rodada sem skill.

## 5. Na avaliação de qualidade da Bad Query Optimizer reescrita, o modelo sozinho acertou 88% e, com a skill, 100%. Qual leitura é a mais coerente com a análise mostrada na aula?
- A) O ganho é pequeno, mas mostra que a skill passou ao modelo um conhecimento de otimização que ele não tinha.
- B) A skill funciona, mas, com um delta tão estreito, o caminho indicado pela análise é descartá-la e usar o modelo puro.
- C) A skill funciona, mas o ganho é menor do que parece: ela não ensina a otimizar, e sim dá consistência ao método.
- D) A skill funciona e o resultado é excelente, já que os 100% mostram que ela cobre casos que o modelo erra.

## 6. Depois da avaliação de qualidade, um colega olha o delta estreito entre as rodadas com e sem skill e conclui que a skill não agrega nada. Que ponto do relatório enfraquece essa conclusão?
- A) Os inputs eram fáceis, com o gargalo à vista no EXPLAIN, e o modelo sozinho já acertava quase tudo.
- B) A skill ainda sofria de under-trigger, e a rodada com skill rodou, na prática, sem acioná-la.
- C) A rodada sem skill usou um modelo mais fraco, e por isso o delta subestima o ganho real da skill.
- D) O loop de description parou antes de convergir, e a description antiga ainda limitava o disparo.

## 7. Ao entrar no loop de melhoria, o Skill Creator gerou um dataset novo e abriu o browser pedindo revisão. O professor pulou essa etapa na demo. Por que, num projeto real, ela importa?
- A) Porque o loop fica parado até que cada item do dataset receba aprovação manual no browser.
- B) Porque a revisão substitui a avaliação de qualidade, que fica dispensada quando o trigger passa.
- C) Porque o dataset novo apaga os itens originais, e a revisão é a chance de recuperá-los a tempo.
- D) Porque o loop otimiza contra esses casos, e casos sem sentido tornam o resultado enganoso.

## 8. Qual afirmação sobre o Skill Creator está INCORRETA, conforme a aula?
- A) Segue o padrão aberto e pode avaliar qualquer skill, e não só as que ele mesmo criou.
- B) Por ser uma skill, avalia o disparo só por inferência do modelo, sem scripts determinísticos.
- C) Tem agents, assets, eval viewer, referências e scripts, o que o coloca no nível 3.
- D) Copia a skill avaliada para um workspace próprio e roda ali o baseline do teste.

## 9. Na reescrita, o corpo da skill ganhou um fluxo (ler o plano de execução, diagnosticar pelo checklist, propor a correção, medir de novo), e um template de exemplos bons e ruins de antipadrões foi para as referências, para consulta quando preciso. Pelo que o curso ensinou sobre os níveis da skill, qual é o ganho de deixar esse template fora do corpo?
- A) A referência entra no frontmatter e passa a ajudar a description a disparar a skill.
- B) O template vira um script, e a checagem dos antipadrões passa a ser determinística.
- C) O skill.md fica enxuto, e o template só é lido quando o diagnóstico precisa dele.
- D) A referência fica carregada desde o início da sessão, junto com name e description.

## 10. Uma skill de mensagens de commit criada há meses passa bem no teste de trigger, mas o time nota mensagens fora da convenção. Pelo que a aula mostrou, qual é o próximo passo?
- A) Reescrever a description, já que ela é o classificador que decide como a skill responde.
- B) Rodar uma avaliação de qualidade do resultado, já que o disparo está certo e o problema é a saída.
- C) Ampliar o dataset de trigger com mais negativos, para achar onde a skill dispara sem motivo.
- D) Apagar o dataset antigo e gerar outro, porque datasets de meses atrás deixam de valer.
