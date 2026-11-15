# Quizz — LLMs

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 6
**Base:** material avançado

---

## 1. Na atenção do decoder, as pontuações das posições futuras são trocadas por um valor antes do softmax. Por que esse valor é −∞ e não 0?
- A) Porque −∞ impede que o gradiente desapareça nas posições futuras durante o treino do modelo.
- B) Porque o 0 faria o softmax dar mais peso às posições futuras do que às passadas.
- C) Porque o 0 só serviria em encoders, onde as pontuações de atenção são sempre positivas.
- D) Porque exp(−∞) é zero: o futuro fica sem peso e os pesos restantes seguem somando 1.

## 2. Um decoder gera um token por vez, mas é treinado com todas as posições da sequência de uma vez. Como isso é possível?
- A) O modelo gera antes o texto inteiro, um token por vez, e só depois compara o resultado com o original.
- B) A máscara causal faz cada posição prever o seguinte sem ver o futuro, então todas treinam juntas simulando a geração.
- C) Cada posição é treinada em uma passada separada, e o paralelismo vem de rodar as passadas em GPUs distintas.
- D) O treino usa a atenção bidirecional do encoder, e a restrição de ordem só é imposta na hora de gerar.

## 3. Por que o BERT não é treinado para prever a próxima palavra, como o GPT?
- A) Porque, com atenção nos dois lados, cada posição enxergaria a resposta na própria entrada e o treino seria trivial.
- B) Porque a atenção bidirecional exige muita memória, o que inviabiliza prever a palavra seguinte em textos longos.
- C) Porque prever a próxima palavra funciona com tokens inteiros, e o BERT trabalha com pedaços de palavra.
- D) Porque o BERT foi treinado com pouco texto e precisa de um objetivo mais fácil que o do GPT.

## 4. No InstructGPT, onde entram os rankings de respostas feitos por pessoas?
- A) Entram direto no aprendizado por reforço, que atualiza o modelo a cada ranking recebido de uma pessoa.
- B) Entram no fine-tuning supervisionado inicial, que aprende a reproduzir a resposta mais bem colocada no ranking.
- C) Treinam um modelo de recompensa, e a nota dele guia o aprendizado por reforço.
- D) Entram no pré-treinamento, onde ordenam os textos por qualidade antes da previsão da próxima palavra.

## 5. Usuários de um chat corrigem as respostas do modelo todos os dias. Um colega espera que, em algumas semanas, o modelo melhore sozinho "por causa do RLHF". O que está errado?
- A) O RLHF exige textos de livros, e as correções dos usuários não têm o formato que o treino do modelo implantado aceita.
- B) O RLHF é uma fase de treino com término; o modelo em produção não atualiza seus pesos com as conversas.
- C) O modelo melhora, mas em tarefas de classificação, porque o RLHF não atua na geração de texto.
- D) O RLHF ajusta o modelo às preferências, mas as correções precisam antes passar por um pré-treinamento completo.

## 6. Qual afirmação descreve corretamente o few-shot e o zero-shot nos LLMs?
- A) No few-shot os pesos são ajustados com os exemplos do prompt, e no zero-shot com a instrução.
- B) O zero-shot dispensa a instrução, pois o modelo infere a tarefa pelo contexto anterior da conversa.
- C) O few-shot exige fine-tuning com poucos exemplos, e o zero-shot usa o modelo pré-treinado sem ajuste.
- D) A tarefa vai no prompt nos dois casos, sem atualizar pesos; só o few-shot traz demonstrações.

## 7. Um modelo muito maior que o anterior produz uma citação bibliográfica fluente, porém inexistente. Qual explicação concorda com o material?
- A) A escala melhora a previsão do próximo token, e isso não equivale a veracidade: fluência e fato diferem.
- B) O modelo ainda é pequeno: com parâmetros suficientes a perda chega a zero e as citações passam a ser reais.
- C) Isso indica falha do RLHF, que deveria ter ensinado o modelo a verificar cada fonte antes de citá-la.
- D) As leis de potência da escala valem para classificação, e por isso não se aplicam à geração de texto.

## 8. Qual afirmação sobre as famílias de modelos está INCORRETA?
- A) O GPT é decoder-only: usa atenção mascarada e é treinado para prever o próximo token.
- B) O BERT é encoder-only: usa atenção bidirecional e é treinado com tokens mascarados em posições sorteadas.
- C) O Gemini é multimodal e, por isso, gera a saída por outro mecanismo que não o autoregressivo.
- D) A saída de um LLM é uma distribuição de probabilidade sobre os tokens do vocabulário.

## 9. Uma startup vai embutir em um produto comercial um modelo de pesos publicados e assume que "baixável" significa "livre de condições". Qual é a decisão mais prudente?
- A) Prosseguir, pois pesos publicados costumam permitir uso comercial, e a licença trata da redistribuição.
- B) Ler a licença do modelo, porque pesos abertos costumam vir com termos e restrições próprios.
- C) Prosseguir se o modelo for pequeno, pois as restrições de licença dependem do número de parâmetros.
- D) Pedir ao fornecedor os dados de treino, já que a licença dos pesos segue a dos dados.

## 10. Por que o Transformer treina com mais paralelismo que uma RNN?
- A) A atenção calcula todas as posições de uma vez, enquanto a recorrência da RNN espera o passo anterior.
- B) As camadas feedforward empilhadas dividem a sequência em blocos que rodam em GPUs separadas, ao mesmo tempo.
- C) O Transformer comprime o histórico em um único vetor, mais barato de atualizar que o estado da RNN.
- D) As conexões residuais permitem pular camadas, e por isso o modelo precisa de menos passos de cálculo.
