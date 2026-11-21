# Quizz — Revisor otimista

**Capítulo:** 2.7 - Prompt Evaluation · **Aula:** 2.7.13
**Base:** material da aula

---

## 1. Uma equipe roda o mesmo pipeline de avaliação com um prompt de revisor de código que manda elogiar tudo e deixar `findings` vazio. Só o prompt foi trocado, e os scores caem de 0.85 para a faixa de 0.2 a 0.4. Qual é a melhor leitura?
- A) O modelo ficou instável entre as execuções, então a queda diz pouco sobre o prompt usado.
- B) Os evaluators registraram o efeito do que o prompt pediu, então a formulação do prompt define a qualidade.
- C) Os evaluators sem referência são pouco confiáveis, então a queda é em boa parte um artefato da métrica.
- D) O modelo perdeu capacidade de revisar código, e o prompt teve pouca influência no resultado.

## 2. Um colega diz: "Meus prompts tiveram resultados bons em todas as rodadas, então meu método de avaliação já está provado." Por que um prompt ruim feito de propósito ajudaria?
- A) Ele cria um contraste e mostra se a medição separa prompt ruim de bom, algo que sucessos seguidos não provam.
- B) Ele define o piso de qualidade de produção, e as versões acima desse piso passam a ser aprovadas no experimento.
- C) Ele mostra a temperatura ideal, já que o prompt ruim vem acompanhado de temperatura alta no experimento.
- D) Ele mostra que o modelo erra com instruções ruins, o que não diz nada sobre a avaliação.

## 3. O dataset de code review tem só os códigos de entrada, sem resposta esperada. Para repetir o experimento do revisor otimista, qual escolha faz mais sentido?
- A) Embedding distance, com a lista de `findings` do prompt otimista como referência da comparação.
- B) Embedding distance, porque comparar vetores dispensa uma referência bem definida do caso.
- C) Detalhe, profundidade, helpfulness e coerência, que avaliam a resposta sem exigir referência.
- D) Não há métrica aplicável, pois sem resposta esperada não dá para medir a qualidade do prompt.
