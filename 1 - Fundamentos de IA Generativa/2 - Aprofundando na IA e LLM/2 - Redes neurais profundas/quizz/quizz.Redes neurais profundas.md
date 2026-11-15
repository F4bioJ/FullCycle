# Quizz — Redes neurais profundas

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 2
**Base:** material da aula

---

## 1. Por que, segundo a aula, modelos como bigramas e Markov não deram o "boom" da IA nas décadas de 80 e 90?
- A) Porque dependiam de GPUs, que ainda eram raras naquele período.
- B) Porque atendiam usos específicos e era difícil escalá-los além disso.
- C) Porque exigiam embeddings, que ainda não tinham sido propostos.
- D) Porque geravam texto fluido, mas a um custo alto de rotulagem.

## 2. Que efeito colateral da profundidade o professor destaca?
- A) O treino fica instável, pois o sinal de erro some entre as camadas.
- B) A rede passa a exigir dados rotulados em cada camada intermediária.
- C) A rede perde a noção de ordem das palavras a cada camada extra.
- D) Fica difícil rastrear por quais passos a decisão passou até a saída.

## 3. Qual é a diferença entre representar "array" em bits e como embedding, pelo que a aula descreve?
- A) Os bits ocupam mais espaço; o embedding comprime a mesma informação.
- B) Os bits codificam o significado; o embedding codifica a grafia da palavra.
- C) Os bits codificam as letras; o embedding põe a palavra perto de similares.
- D) Os bits são exatos; o embedding é um valor aproximado e por isso ambíguo.

## 4. Sobre a retomada das redes neurais, qual afirmação está INCORRETA segundo a aula?
- A) As GPUs surgiram para treinar redes e só depois foram usadas em outras áreas.
- B) Internet, redes sociais e sensores multiplicaram os dados disponíveis.
- C) O dado é tratado como a matéria-prima para uma IA funcionar.
- D) Com os avanços, o mercado voltou a olhar para a IA com interesse.

## 5. Numa rede feedforward aplicada à linguagem, qual é o caminho descrito na aula?
- A) Palavras → camadas → embeddings → saída com a frase reordenada.
- B) Palavras → embeddings → camadas → retorno à entrada para ajuste → saída.
- C) Palavras → embeddings → camadas, sempre adiante → previsão da próxima.
- D) Palavras → estados ocultos → emissão → previsão da próxima palavra.

## 6. Uma feedforward com janela de 4 palavras lê "...a casa está sendo limpa, por isso o cachorro está no". O que ela usa para prever a próxima palavra?
- A) Os vetores de "o cachorro está no", combinados entre si.
- B) Os vetores da frase toda, com peso maior para os quatro últimos.
- C) O vetor de "no", que é a palavra vizinha da lacuna.
- D) Os vetores das quatro palavras e um resumo do que veio antes.

## 7. Em que a janela fixa é uma evolução do bigrama, e o que ela mantém do problema?
- A) Olha a frase inteira, mas deixa de considerar a ordem das palavras.
- B) Olha mais palavras, mas volta a depender de regras escritas à mão.
- C) Olha mais palavras e guarda memória, mas fica lenta para treinar.
- D) Olha mais palavras, mas em número fixo, e perde o que fica de fora.

## 8. Por que, segundo a aula, "o cachorro mordeu o homem" e "o homem mordeu o cachorro" podem se confundir para a rede?
- A) Porque a janela fixa corta uma das palavras e a rede completa a lacuna.
- B) Porque as palavras são as mesmas, e os vetores combinados ficam parecidos.
- C) Porque "cachorro" e "homem" têm embeddings próximos por serem seres vivos.
- D) Porque a rede não tem memória e esquece qual palavra veio primeiro.

## 9. Um chatbot feito com feedforward de janela fixa recebe, na terceira mensagem da conversa, "e quanto custa?". O que a aula leva a prever?
- A) Ele responde bem, pois os embeddings guardam o assunto da conversa.
- B) Ele responde bem se a janela for de quatro palavras ou mais.
- C) Ele falha porque "custa" está distante de "produto" no espaço vetorial.
- D) Ele falha porque não enxerga o que foi processado antes da janela.

## 10. Quais tarefas a aula cita como difíceis para esse modelo, e por quê?
- A) Tradução, diálogo e resumo, pois pedem coerência ao longo do texto.
- B) Classificação de spam e de imagens, pois pedem dados rotulados.
- C) Previsão da próxima palavra, pois pede uma janela de contexto.
- D) Busca por similaridade, pois pede vetores de alta dimensão.
