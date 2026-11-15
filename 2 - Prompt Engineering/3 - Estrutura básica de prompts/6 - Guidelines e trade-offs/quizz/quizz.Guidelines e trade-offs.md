# Quizz — Guidelines e trade-offs

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 6
**Base:** material da aula

---

## 1. Um serviço separa 2 milhões de mensagens por dia entre "elogio", "reclamação" e "dúvida". Pelas guidelines da aula, qual estratégia de prompt usar e por quê?
- A) Zero-shot: a tarefa é de senso comum, e no volume alto cada token de exemplo multiplica o custo.
- B) Few-shot: em volume alto, os exemplos reduzem os erros e, com eles, o custo total da operação.
- C) Few-shot: em produção, o formato de saída precisa ser fixado com exemplos de cada categoria.
- D) Chain of thought: raciocinar antes de classificar evita o retrabalho que o volume alto causaria.

## 2. Um sistema extrai dados de laudos de psicologia num formato de saída rígido, e o professor recomendaria few-shot. Qual é o preço dessa escolha, segundo a aula?
- A) Pequeno, porque os exemplos ficam no cache e deixam de pesar a partir das chamadas seguintes.
- B) Mais tokens, mais latência e mais processamento, já que a IA precisa imitar o comportamento dado.
- C) Menos flexibilidade, porque a IA passa a recusar laudos diferentes dos exemplos que recebeu.
- D) Mais alucinação, porque os dados dos laudos de exemplo vazam para as respostas dos casos novos.

## 3. Pela explicação do professor sobre o papel do exemplo, por que dar exemplos ajuda num domínio específico?
- A) O exemplo ensina à IA o conhecimento do domínio que ela não recebeu no treinamento.
- B) O exemplo faz a IA raciocinar passo a passo sobre cada caso antes de dar a resposta.
- C) O exemplo mostra o resultado esperado, o que no fim é dar à IA o formato de saída.
- D) O exemplo faz a IA acertar de primeira, o que reduz o custo total ao evitar chamadas repetidas.

## 4. Zero-shot acerta 86% e custa US$ 10 mil por mês; few-shot acerta 90% e custa US$ 12 mil por mês. Como a aula sugere expressar essa diferença para decidir?
- A) Cada ponto percentual a mais de acerto custa US$ 3 mil por mês, ou seja, US$ 12 mil divididos por 4.
- B) Cada ponto percentual a mais de acerto custa US$ 2 mil por mês, a diferença total entre os dois.
- C) Cada ponto percentual a mais de acerto custa US$ 500 por ano, já que a diferença é de US$ 2 mil.
- D) Cada ponto percentual a mais de acerto custa US$ 500 por mês: US$ 2 mil divididos por 4 pontos.

## 5. Num sistema de triagem de exames, cada erro pode atrasar um diagnóstico grave. O prompt atual acerta 90%; um mais caro chega a 94%. Pela aula, quem decide e com base em quê?
- A) A engenharia decide pelo mais barato, porque em volume alto a aula indica economizar tokens.
- B) Produto e finanças decidem com a conta do dev, e o peso do erro aqui pode justificar pagar mais.
- C) A engenharia decide pela conta, já que o custo por ponto de acerto é um cálculo técnico do prompt.
- D) Produto decide ficar nos 90% e cobrir o erro com mitigação, como se faz com consistência eventual.
