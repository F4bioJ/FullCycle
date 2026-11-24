# Quizz — Contexto do nosso experimento

**Capítulo:** 8 - Evaluation Comparativa · **Aula:** 9
**Base:** material da aula

---

## 1. Na primeira rodada do experimento, a resposta B vence na maioria dos exemplos, e um colega propõe: "B ganhou, então já pode substituir o prompt em produção". O que esse resultado realmente sustenta?
- A) Que, nos exemplos do dataset e pelo critério do juiz, o review do Performance Expert foi o preferido, sem medir usuários reais.
- B) Que B pode ir para produção, porque o juiz é imparcial e julgou as duas variantes sobre exatamente as mesmas entradas.
- C) Que B é melhor para os usuários, desde que os exemplos do dataset tenham sido copiados de chamadas reais de produção.
- D) Que o resultado ainda não vale como evidência, porque sem resposta esperada no dataset a comparação não tem base técnica.

## 2. Para "deixar cada prompt mostrar o que sabe", um colega propõe dar ao prompt de segurança um código com falha de injeção e ao de performance um código com N+1, e depois mandar os dois reviews ao juiz. Qual é o problema dessa mudança?
- A) Não há problema sério: como os prompts têm focos diferentes, dar a cada um o código da sua área deixa a disputa mais equilibrada.
- B) O juiz perderia a opção de empate, já que cada review encontraria pontos críticos reais na sua própria área.
- C) A vitória deixaria de revelar o efeito da instrução: com entradas diferentes, a diferença pode vir do código recebido.
- D) O custo dobraria, porque cada exemplo do dataset passaria a ter dois códigos e o juiz rodaria duas vezes por exemplo.

## 3. Um desenvolvedor reescreve o pairwise judge para receber só a resposta A e a resposta B, sem o código-fonte, para gastar menos tokens. O que o juiz perde com isso?
- A) Pouca coisa, porque o pairwise compara duas saídas entre si e o código de entrada pesa pouco no julgamento.
- B) A possibilidade de declarar empate, porque o tie depende de o juiz contar os findings de cada resposta.
- C) A referência de ground truth, e o experimento passa a medir acertos contra um rótulo em vez de comparar.
- D) A base para checar se os problemas apontados existem no código real e qual impacto eles têm.

## 4. Num exemplo do dataset, o código tem uma falha crítica de segurança e um N+1 igualmente grave, e cada review aponta corretamente o problema da sua área. Seguindo as regras do prompt do juiz, qual resultado é o esperado?
- A) A, porque o prompt do juiz lista a vulnerabilidade como primeiro critério e ela desempata a favor do Security Expert.
- B) Empate, porque o prompt prevê tie quando os dois lados trazem pontos críticos reais em peso igual.
- C) B, porque o prompt de performance foi o primeiro apresentado e o juiz o trata como a variante de referência.
- D) O juiz deve escolher a resposta mais detalhada, porque um empate indicaria que o critério ficou mal definido.

## 5. Após a primeira rodada, o time altera o prompt de segurança (versão 2) para ver se ele melhora. O que mantém a segunda rodada comparável com a primeira, como no plano do professor?
- A) Atualizar também o prompt do juiz, para que ele reconheça os tipos de problema que a versão 2 passou a procurar.
- B) Trocar o dataset por exemplos de outro tipo de código, para ver se a versão 2 também funciona em casos novos.
- C) Manter o mesmo dataset e o mesmo juiz, mudar só aquele prompt e comparar quem vence antes e depois.
- D) Trocar também o modelo que executa os dois prompts por um mais capaz, para a versão 2 mostrar o seu potencial.
