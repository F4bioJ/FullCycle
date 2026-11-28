# Quizz — Evaluation trigger

**Capítulo:** 1 - Skills · **Aula:** 15
**Base:** material da aula

---

## 1. Uma equipe reescreveu por inteiro o corpo de uma skill depois que a avaliação mostrou que o gargalo estava nela. A skill reescrita passou bem na avaliação de qualidade. Por que faz sentido rodar de novo a avaliação de trigger?
- A) Não faz: a avaliação de qualidade, com os inputs da skill, já mediu o disparo, e resta otimizar o texto da description.
- B) Porque o Skill Creator exige um workspace novo para cada tipo de avaliação, e o anterior deixou de valer.
- C) Porque o disparo da versão nova ainda não foi medido, e falta ver se ela é acionada nos pedidos certos.
- D) Porque um bom resultado na qualidade costuma indicar que o problema voltou a ser uma description genérica.

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
- A) Limitar o loop a poucas iterações e adotar a última candidata, por ser a mais refinada do loop.
- B) Fixar de antemão o patamar de métricas que conta como bom o bastante e parar ao alcançá-lo.
- C) Parar quando o holdout se esgotar, porque cada rodada consome uma parte do conjunto de teste.
- D) Deixar o loop seguir até a description voltar a ser igual à original, sinal de que convergiu.

## 5. Uma skill teve 100% no teste de trigger no Claude Code com um modelo da Anthropic. A equipe vai usá-la em outro harness, com um modelo de outro fornecedor. O que fazer antes de confiar no disparo?
- A) Medir de novo o disparo nesse ambiente, já que cada combinação de CLI, versão e LLM se comporta de um jeito.
- B) Nada: a skill segue o padrão aberto, então o disparo medido no Claude Code vale para os outros harnesses.
- C) Repetir a avaliação de qualidade, já que o disparo depende do texto da description, que não mudou.
- D) Traduzir a description para o inglês, que é o idioma em que os modelos de outros fornecedores leem melhor.

## 6. Sobre a separação do dataset em treino e holdout, como o professor a descreveu, qual afirmação está INCORRETA?
- A) A separação é feita sobre o próprio dataset da skill, que é dividido em dois grupos antes de otimizar.
- B) No primeiro momento, os itens do holdout ficam guardados à parte, sem ser usados nem vistos.
- C) O holdout serve para testar se as alterações feitas no loop fazem sentido em casos novos.
- D) O holdout reúne os casos que não devem disparar, e o treinamento, os que devem disparar.

## 7. Depois de algumas rodadas, a description candidata acerta todos os itens de treino, mas erra vários do holdout. Qual leitura é a mais coerente com o papel do holdout?
- A) O holdout tem menos itens que o treino, então o resultado nele oscila mais e vale seguir com a candidata.
- B) A candidata se ajustou aos exemplos de treino, mas não mostrou que lida com pedidos que o loop não viu.
- C) O gargalo passou a ser o corpo da skill, como na aula anterior, e a description pode ficar como está.
- D) Os itens errados do holdout devem migrar para o treino, para o loop aprender esses casos na próxima rodada.

## 8. Num teste de trigger, nenhum pedido aciona a skill, nem os mais óbvios. Depois se descobre que, naquela versão do harness, o teste não conseguia encontrar a skill pelo nome. Como ler esse resultado?
- A) A description está ruim, e o caminho é reescrevê-la até os pedidos óbvios voltarem a disparar a skill.
- B) É um caso típico de under-trigger, que o loop de otimização da description deve corrigir sozinho.
- C) O placar mede a falha do teste, e não a description; é preciso corrigir o teste e medir de novo.
- D) A description precisa citar o nome exato da skill, para que o harness consiga reconhecê-la no teste.

## 9. Uma dev está no meio da criação de uma skill de testes de API e não sabe se ela está indo na direção que quer. Pelo que o professor descreveu, qual uso do Skill Creator combina com esse momento?
- A) Esperar a skill ficar pronta e então rodar o loop de description, para a avaliação ter uma versão estável.
- B) Rodar a avaliação de qualidade e deixar o delta com e sem a skill decidir se ela deve continuar existindo.
- C) Pedir uma versão nova da skill a partir da description e adotar a que tiver o melhor placar no treino.
- D) Rodar a avaliação no rascunho e usar os pontos fracos que ela aponta para ir ajustando a skill pela CLI.
