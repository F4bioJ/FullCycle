# Quizz — Evaluation trigger

**Capítulo:** 1 - Skills · **Aula:** 15
**Base:** material da aula

---

## 1. Na aula anterior, o loop de description da Bad Query Optimizer não superou a original, o corpo foi reescrito e a versão nova passou pela avaliação de qualidade. Por que faz sentido voltar agora à avaliação de trigger?
- A) Porque a avaliação de qualidade, com os inputs de queries SQL, já mediu o disparo, e agora resta otimizar o texto da description.
- B) Porque o Skill Creator exige um workspace novo para cada tipo de avaliação, e o antigo foi apagado.
- C) Porque a medição do disparo foi pausada para a reescrita, e falta ver se a skill nova é acionada nos pedidos certos.
- D) Porque o delta estreito da avaliação de qualidade indicou que o problema voltou a ser a description genérica.

## 2. No teste de trigger de uma skill de revisão de migrations, a precision sai em 100% e o recall em 50%. Pelo que o curso ensinou sobre essas métricas e sobre os erros de disparo, qual é o diagnóstico?
- A) Under-trigger: quando disparou, acertou, mas metade dos pedidos que deviam acionar a skill passou sem ela.
- B) Over-trigger: a skill dispara em pedidos que não são dela, e o recall baixo mede esse excesso.
- C) Dataset desequilibrado: a precision de 100% mostra que faltam casos que não devem disparar no teste.
- D) Problema de qualidade: a skill foi chamada nos casos certos, mas metade das respostas fugiu do esperado.

## 3. Ao fim do loop, o relatório mostra accuracy, recall e precision em 100%, e a description auto-otimizada é praticamente igual à original. Qual decisão é coerente com o que a aula mostrou?
- A) Aplicar a versão otimizada, porque ela saiu do loop e por isso tende a ser mais robusta que a original.
- B) Rodar novas iterações até surgir uma description diferente, para confirmar que a original é a melhor.
- C) Passar à avaliação de qualidade, porque 100% no trigger mostra que a saída da skill está correta.
- D) Manter a description atual, porque não há erro de disparo a corrigir e o loop atingiu o objetivo.

## 4. Um time deixa o loop de otimização de description rodando sem definir alvo, e ele continua propondo candidatas novas a cada rodada. O que a aula recomenda para esse processo?
- A) Limitar o loop a cinco iterações, o número que o Skill Creator usou na demonstração da aula anterior.
- B) Fixar de antemão o patamar de métricas que conta como bom o bastante e parar ao alcançá-lo.
- C) Parar quando o holdout se esgotar, porque cada rodada consome uma parte do conjunto de teste.
- D) Deixar o loop seguir até a description voltar a ser igual à original, sinal de que convergiu.

## 5. Uma skill teve 100% no teste de trigger no Claude Code com um modelo da Anthropic. A equipe vai usá-la em outro harness, com um modelo de outro fornecedor. O que fazer antes de confiar no disparo?
- A) Medir de novo o disparo nesse ambiente, já que cada combinação de CLI, versão e LLM se comporta de um jeito.
- B) Nada: a skill segue o padrão aberto, então o disparo medido no Claude Code vale para os outros harnesses.
- C) Repetir a avaliação de qualidade, já que o disparo depende do texto da description, que não mudou.
- D) Traduzir a description para o inglês, que é o idioma em que os modelos de outros fornecedores leem melhor.

## 6. Sobre a separação do dataset em treino e holdout, como o professor a descreveu, qual afirmação está INCORRETA?
- A) O conjunto de treinamento fica com cerca de 60% dos dados, e o de teste com os outros 40%.
- B) No primeiro momento, os itens do holdout ficam guardados à parte, sem ser usados nem vistos.
- C) O holdout serve para testar se as alterações feitas no loop fazem sentido em casos novos.
- D) O holdout reúne os casos que não devem disparar, e o treinamento, os que devem disparar.

## 7. Depois de algumas rodadas, a description candidata acerta todos os itens de treino, mas erra vários do holdout. Qual leitura é a mais coerente com o papel do holdout?
- A) O holdout tem menos itens que o treino, então o resultado nele oscila mais e vale seguir com a candidata.
- B) A candidata se ajustou aos exemplos de treino, mas não mostrou que lida com pedidos que o loop não viu.
- C) O gargalo passou a ser o corpo da skill, como na aula anterior, e a description pode ficar como está.
- D) Os itens errados do holdout devem migrar para o treino, para o loop aprender esses casos na próxima rodada.

## 8. Durante o loop, o Skill Creator detectou que, naquela versão do Claude Code, o teste acrescentava um hash ao nome da skill, que não era encontrada, e se autocorrigiu antes de medir. Por que esse tipo de falha importa ao ler o resultado de um teste de trigger?
- A) Porque o hash identifica qual description foi testada, e sem ele não há como comparar original e otimizada.
- B) Porque o hash no nome conta como gatilho novo, e a skill passaria a disparar em pedidos que não são dela.
- C) Porque, se o harness não localiza a skill, ela não tem como disparar, e o placar mediria a falha, não a description.
- D) Porque a falha mostra que a description precisa citar o nome exato da skill para o harness reconhecê-la.

## 9. No HTML remodelado do trigger, um item do conjunto de teste aparece em vermelho e consta como disparado. O que isso significa?
- A) Um pedido que não devia acionar a skill a acionou, num caso que o loop não usou para otimizar a description.
- B) O vermelho marca o resultado executado: o item disparou, e por isso aparece nessa cor no relatório.
- C) Um pedido que devia acionar a skill a acionou, e o vermelho indica que ele pertence ao conjunto de teste.
- D) Um erro de treino que o loop já corrigiu, e que o relatório mantém em vermelho para registro do histórico.

## 10. Uma dev está no meio da criação de uma skill de testes de API e não sabe se ela está indo na direção que quer. Pelo que o professor descreveu, qual uso do Skill Creator combina com esse momento?
- A) Esperar a skill ficar pronta e então rodar o loop de description, para a avaliação ter uma versão estável.
- B) Rodar a avaliação de qualidade e deixar o delta com e sem a skill decidir se ela deve continuar existindo.
- C) Pedir uma versão nova da skill a partir da description e adotar a que tiver o melhor placar no treino.
- D) Rodar a avaliação no rascunho e usar os pontos fracos que ela aponta para ir ajustando a skill pela CLI.
