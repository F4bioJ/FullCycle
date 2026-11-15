# Quizz — Transformers

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 4
**Base:** material da aula

---

## 1. Em "o cachorro que o menino viu estava latindo", "menino" está mais perto de "latindo" que "cachorro". Segundo a aula, por que o Transformer ainda liga "latindo" a "cachorro"?
- A) O positional encoding marca "cachorro" como sujeito por ele vir primeiro na frase.
- B) A camada feedforward reordena os tokens e aproxima o sujeito do seu verbo.
- C) A self-attention atribui peso pela relação entre os tokens, e não pela distância entre eles.
- D) Um estado interno carrega o sujeito adiante até o modelo encontrar o verbo.

## 2. Quais problemas, herdados desde os bigramas e ainda presentes em LSTM e GRU, a aula aponta como motivação para o Transformer?
- A) Dependência de longo prazo difícil de capturar e processamento que não paraleliza.
- B) Vocabulário limitado a pares de palavras e falta de representação vetorial.
- C) Explosão de gradiente sem solução e excesso de portas para treinar.
- D) Janela fixa de entrada e ausência de qualquer memória entre os passos.

## 3. Uma equipe remove o positional encoding de um Transformer para simplificar o modelo. Pelo que a aula explicou, qual é a consequência direta?
- A) O modelo deixa de calcular pesos de atenção diferentes para cada token.
- B) O treinamento volta a ser sequencial, um token depois do outro.
- C) Os embeddings perdem a não linearidade que a MLP adicionava.
- D) O modelo perde a noção de ordem, pois os tokens não são lidos em sequência.

## 4. Sobre a divisão de trabalho dentro de um bloco do Transformer, qual afirmação segue o que foi apresentado?
- A) A atenção gera a não linearidade; a MLP calcula a relevância entre os tokens.
- B) A atenção define com quem cada token se relaciona; a MLP refina essa informação combinada.
- C) A atenção numera as posições; a MLP compara cada token com todos os outros.
- D) A atenção guarda o histórico; a MLP decide o que deve ser esquecido dele.

## 5. Qual é a diferença entre "attention" e "self-attention", como a aula apresenta?
- A) Attention usa pesos fixos; self-attention aprende os pesos durante o treino.
- B) Self-attention é a atenção aplicada entre os tokens da própria sequência de entrada.
- C) Self-attention compara cada token só com os anteriores; attention compara com todos.
- D) Self-attention é a atenção calculada sem o uso de positional encoding.

## 6. Depois da camada de atenção, o que cada token passa a carregar?
- A) Uma nova representação que incorpora o contexto relevante dos outros tokens.
- B) O mesmo embedding de antes, acrescido de um número que indica sua posição.
- C) Uma cópia dos embeddings das palavras vizinhas imediatas na frase.
- D) Um estado oculto acumulado com tudo o que foi lido até aquele ponto.

## 7. Em "o livro que o João leu ontem era interessante", a atenção liga "leu" a "livro" e a "João". Segundo a aula, o que acontece com "ontem" e "era interessante" nesse cálculo?
- A) São descartadas da representação de "leu", por não fazerem parte da relação central.
- B) Recebem o mesmo peso das outras; a diferença entre elas vem do positional encoding.
- C) São processadas em uma segunda passada, depois que a relação principal é resolvida.
- D) Continuam sendo consideradas, mas com peso menor para compor aquela relação.

## 8. Segundo a aula, por que o Transformer escalou para modelos com bilhões de parâmetros?
- A) A atenção dispensa as camadas feedforward quando o modelo fica grande o bastante.
- B) Cada token ganha o próprio conjunto de pesos, o que amplia a capacidade do modelo.
- C) O processamento em paralelo se encaixa em GPUs e TPUs e permite treino distribuído.
- D) O positional encoding limita o tamanho das sequências e o custo de cada exemplo.

## 9. Pelo que a aula diz sobre multimodalidade, o que o Transformer mudou em relação aos modelos anteriores?
- A) Cada modalidade passou a ter seu próprio Transformer, e um roteador escolhe qual usar.
- B) A mesma arquitetura passou a tratar texto, imagem e áudio com representações integradas.
- C) Imagens e sons passaram a ser convertidos em descrições de texto antes de entrar no modelo.
- D) A atenção ficou com o texto, e redes convolucionais passaram a tratar imagem e áudio no mesmo modelo.

## 10. Qual afirmação está INCORRETA, de acordo com a aula?
- A) A atenção substitui a memória recorrente por um cálculo explícito de relações entre tokens.
- B) Áreas como tradução e recomendação já tinham um caminho mais pavimentado que a IA generativa.
- C) Sem processar em sequência, o Transformer precisa receber a ordem dos tokens de forma explícita.
- D) Com a atenção, as camadas MLP ficaram dispensáveis, pois ela já combina os tokens de forma não linear.
