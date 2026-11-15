# Gabarito — Janela de contexto vs parâmetros

## 1. Escolher modelo para documentos longos: janela de contexto é o fator limitante, não contagem de parâmetros.
**Correta: A**
**Por quê:** A janela de contexto é o limite duro de tokens processados de uma vez; parâmetros armazenam conhecimento aprendido. São dimensões independentes: um modelo pequeno pode ter janela grande e vice-versa (ex.: GPT-3 com 175B parâmetros e apenas 2k de contexto).
- **B:** Confunde capacidade de conhecimento (parâmetros) com capacidade de processamento simultâneo (janela).
- **C:** Afirma uma proporcionalidade que a aula nega explicitamente com o exemplo do GPT-3.
- **D:** Usa 'sempre' e ignora que velocidade depende de arquitetura, hardware e otimizações, não só da contagem de parâmetros.
**Conceito:** Independência janela vs parâmetros

## 2. Mais parâmetros não compensam treinamento ruim; apenas ampliam padrões ruins.
**Correta: B**
**Por quê:** A aula afirma que 'aumentar parâmetros não corrige modelo mal treinado' — pesos ruins apenas armazenam padrões inadequados em maior escala. Qualidade do treinamento é fator decisivo, não só escala.
- **A:** A inferência probabilística funciona em qualquer escala; a variação de saídas vem da amostragem, não da contagem de parâmetros.
- **C:** Overfitting não é automático nem exclusivo de modelos grandes; depende de regularização e dados.
- **D:** Inverte a relação: janela de contexto e parâmetros são independentes; um não reduz o outro.
**Conceito:** Qualidade do treinamento vs escala

## 3. Variação de respostas vem de amostragem probabilística, não de mudança de pesos durante o uso.
**Correta: C**
**Por quê:** Após o treinamento, o modelo é estático: pesos não mudam na inferência. A variabilidade nas respostas vem da geração probabilística (amostragem do próximo token) sobre pesos fixos, não de aprendizado contínuo.
- **A:** Descreve aprendizado online, que não ocorre em LLMs padrão de inferência.
- **B:** A janela de contexto não persiste entre chamadas nem atualiza pesos.
- **D:** Fine-tuning é processo separado e custoso, não automático por prompt.
**Conceito:** Modelo estático na inferência

## 4. Escolher modelo por latência: mais parâmetros dão mais capacidade potencial, mas custam mais memória e compute.
**Correta: A**
**Por quê:** A aula estabelece o trade-off: mais parâmetros aumentam capacidade potencial de capturar nuances e textos complexos, mas elevam consumo de memória, tempo de treinamento e custo operacional. Não há garantia de melhor resultado nem proporcionalidade com janela.
- **B:** 'Sempre mais precisos' é falso; modelos menores têm menos capacidade, não menos ruído intrínseco.
- **C:** Modelos de 7B aprendem linguagem natural; capacidade é menor, não nula.
- **D:** Repete a proporcionalidade negada pela aula (exemplo GPT-3).
**Conceito:** Trade-off capacidade vs custo

## 5. Desambiguação de palavras vem dos pesos do modelo (parâmetros), não do tamanho da janela de contexto.
**Correta: D**
**Por quê:** Parâmetros armazenam as correlações e nuances da linguagem (ex.: sentidos de 'go' ou 'banco'). A janela de contexto apenas define quantos tokens entram de uma vez; não adiciona conhecimento linguístico ao modelo.
- **A:** Inverte os papéis: parâmetros guardam conhecimento, janela define espaço de entrada.
- **B:** Não há mecanismo que force uso de mais parâmetros nem que aumente confusão por janela maior.
- **C:** Fine-tuning altera parâmetros, não janela de contexto; janela não exige reaprendizado.
**Conceito:** Parâmetros armazenam conhecimento linguístico
