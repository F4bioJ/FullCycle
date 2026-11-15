# Gabarito — Revisão - Aulas 1 a 3

## 1. Feedforward (janela de 5) erra concordância sujeito-início / verbo-fim. Troca-se por uma RNN simples. Resultado mais provável?
**Correta: D**
**Explicação:** A memória da RNN resolve ordem e curto prazo, mas o desvanecimento de gradiente faz esquecer o início. Se fosse "sem perda", LSTM/GRU não existiriam.

## 2. (Além da aula) Diferença fundamental entre o "estado" do HMM e o da RNN?
**Correta: A**
**Explicação:** B inverte a propriedade de Markov — no HMM o estado depende **só do anterior**. Formalmente a RNN também olha só o estado anterior + entrada, mas esse estado é um vetor contínuo que **acumula o histórico**, enquanto "estou em chuva" não diz nada sobre o caminho até ali.

## 3. Bigrama → Feedforward com janela de 4 (substitui a antiga q3, cortada em 2026-10-15)
**Correta: B**
**Explicação:** A janela amplia o contexto de 1 para 4 palavras, e os embeddings deixam o que se aprende com "gato" valer em parte para "cão". Mas cada janela é processada do zero: o que está fora dela é invisível.
- **A:** Memória entre janelas é o que a RNN traz. A Feedforward também não perde a ordem: cada posição da janela é distinta.
- **C:** Estados ocultos que emitem palavras são o HMM.
- **D:** A Feedforward não tem dependência de longo prazo e paraleliza bem, já que as janelas são independentes.
**Conceito:** ganhos e limite da janela fixa

## 4. RNN não aprende concordância distante (substitui a antiga q4, cortada em 2026-10-15)
**Correta: B**
**Explicação:** O sinal de erro do verbo chega fraco demais ao sujeito, 30 passos atrás, e os pesos nunca aprendem essa relação. A perda cai normalmente porque o curto prazo é aprendido. LSTM e GRU atenuam o problema.
- **A:** A explosão aparece como saltos e NaN na perda, o que o enunciado descarta.
- **C:** Overfitting é aprender o treino e falhar no teste. Aqui a rede não aprende a relação nem no treino.
- **D:** A RNN não tem janela de entrada. Ela já lê as 30 palavras; o problema é aprender com elas.
**Conceito:** sintoma do desvanecimento

## 5. (Além da aula) Por que o gradiente desvanece?
**Correta: D**
**Explicação:** Backpropagation through time: 0,9⁵⁰ ≈ 0,005 (desvanecimento); 1,1⁵⁰ ≈ 117 (explosão). Mesma causa, direções opostas. A é meia-verdade (gargalo real, mas outro problema).

## 6. LSTM: sujeito muda de "cachorro" (singular) para "gatos" (plural). O que deveria acontecer?
**Correta: C**
**Explicação:** Saída não apaga, só decide o que passa adiante. D falharia em "o cachorro, que perseguia os gatos, **latiu**".

## 7. GPUs impulsionaram redes profundas. Por que RNNs continuavam lentas?
**Correta: A**
**Explicação:** Mil caixas no supermercado e um cliente na fila. C é o oposto: a RNN reutiliza os mesmos pesos em todos os passos → menos parâmetros.
**Dica:** desconfie de alternativas com restrições técnicas muito específicas ("só funcionavam com...").

## 8. "não consigo acessar minha conta" × artigo "problema no login" — por que embeddings relacionam?
**Correta: D**
**Explicação:** Base da busca semântica (e do RAG, que vem mais adiante no curso).

## 9. Qual "troca" entre modelos está correta?
**Correta: B**
**Explicação:** Feedforward processa janelas independentes (paralelizável, sem memória); RNN tem memória, mas cria a "fila" de passos.

## 10. Qual afirmação está INCORRETA?
**Correta: C**
**Explicação:** A GRU **atenua os dois** problemas (como a LSTM), sem eliminar nenhum. Fundir portas só a deixa mais leve. D vem da diferença entre somar e concatenar embeddings (aula 2).
