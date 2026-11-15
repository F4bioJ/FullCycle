# Quizz — Janela de contexto vs parâmetros

**Capítulo:** 2 - Conceitos importantes · **Aula:** 4
**Base:** material da aula

---

## 1. Um engenheiro de prompt precisa processar documentos de 10.000 tokens em uma única chamada. O modelo A tem 7B parâmetros e janela de 32k tokens; o modelo B tem 70B parâmetros e janela de 4k tokens. Qual escolha faz sentido e por quê?
- A) Modelo A, porque a janela de contexto determina o tamanho da entrada processada de uma vez, independentemente dos parâmetros.
- B) Modelo B, porque mais parâmetros garantem melhor compreensão de textos longos.
- C) Modelo B, pois parâmetros e janela de contexto crescem juntos em arquiteturas modernas.
- D) Modelo A, porque modelos com poucos parâmetros são sempre mais rápidos para inferência.

## 2. Um modelo com 100B parâmetros produz respostas incoerentes em raciocínio lógico simples. O time propõe subir para 200B parâmetros. Por que isso pode não resolver?
- A) A inferência probabilística deixa de funcionar acima de certo número de parâmetros.
- B) Parâmetros apenas armazenam padrões do treinamento; se o treinamento foi ruim, mais parâmetros apenas guardam mais padrões ruins.
- C) Modelos grandes demais sofrem overfitting automático em tarefas simples.
- D) Mais parâmetros reduzem a janela de contexto, limitando o raciocínio.

## 3. Em produção, um modelo dá respostas diferentes para o mesmo prompt exato em chamadas separadas. Um colega sugere 'retreinar o modelo com os novos prompts para fixar o comportamento'. Por que isso reflete um mal-entendido?
- A) O modelo atualiza seus pesos a cada inferência para se adaptar ao usuário.
- B) A janela de contexto acumula aprendizado entre chamadas separadas.
- C) Os parâmetros são estáticos fora do treinamento; a variação vem da amostragem probabilística sobre pesos fixos.
- D) Prompts novos exigem fine-tuning automático para manter a consistência.

## 4. Para um chatbot de atendimento com latência crítica, a equipe compara um modelo de 7B e outro de 70B parâmetros. Qual consideração é mais relevante segundo a aula?
- A) O modelo de 70B tem maior capacidade potencial de nuances, mas custo de memória, treinamento e inferência significativamente maiores.
- B) Modelos menores são sempre mais precisos por terem menos ruído nos parâmetros.
- C) O modelo de 7B não consegue aprender padrões de linguagem natural.
- D) O modelo de 70B terá janela de contexto proporcionalmente maior.

## 5. Um prompt engineer vê o modelo confundir 'banco' (instituição) com 'banco' (assento) em contextos claros. Ele acha que aumentando a janela de contexto o problema some. Por que isso provavelmente não funciona?
- A) Janela de contexto controla o conhecimento linguístico do modelo; parâmetros só limitam o tamanho da entrada.
- B) Janelas maiores forçam o modelo a usar mais parâmetros, o que aumenta a confusão.
- C) O modelo precisa de fine-tuning a cada nova janela de contexto para reaprender sentidos.
- D) A desambiguação de sentidos depende dos padrões armazenados nos parâmetros, não do tamanho da janela de contexto.
