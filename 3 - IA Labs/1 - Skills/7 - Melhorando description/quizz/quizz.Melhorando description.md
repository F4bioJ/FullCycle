# Quizz — Melhorando description

**Capítulo:** 1 - Skills · **Aula:** 7
**Base:** material da aula

---

## 1. Você quer usar o prompt gerador de description numa skill de changelog que escreveu há semanas e cujo corpo já não lembra bem. Como o professor preparou as entradas desse prompt na skill de commits?
- A) Colou o corpo inteiro do `skill.md` nas entradas, para o gerador extrair dali as quatro partes da description.
- B) Rodou antes o prompt de melhoria, para ter o conjunto de teste, e passou esse dataset ao gerador como entrada.
- C) Pediu ao Claude Code que lesse a skill e dissesse o que ela faz e o que produz, e copiou essa resposta para as entradas.
- D) Escreveu à mão o quando usar, o gatilho e o quando não usar, e deixou para o gerador a tradução do texto para o inglês.

## 2. No prompt de melhoria, a description atual é pontuada antes de ser reestruturada. Qual é o papel dessa pontuação na sequência que a aula mostrou?
- A) Ela aponta os erros da versão atual no conjunto de teste, e a reestruturação mira justamente nesses erros.
- B) Ela decide se a skill ainda vale como skill, como o veredito do prompt de triagem da aula anterior.
- C) Ela dispensa o conjunto de teste: com a nota da versão atual, o modelo já sabe o que reescrever.
- D) Ela serve para escolher a vencedora, já que as versões novas não passam por outra pontuação.

## 3. O conjunto de teste montado pelo prompt de melhoria incluía casos negativos. Pelo que as aulas ensinaram sobre a description, o que esses casos verificam?
- A) Se o corpo da skill, depois de disparado, entrega a saída no formato que os exemplos pedem.
- B) Se o modelo dispara a skill quando o pedido vem em português, já que a description foi aplicada em inglês.
- C) Se a description tem termos-chave em excesso, o que faria o corpo ser carregado em toda conversa.
- D) Se a description deixa de disparar a skill em pedidos que não são dela, já que é um classificador.

## 4. Depois de aplicar a description criada pelo prompt gerador, o professor ainda rodou o prompt de melhoria. O que o segundo prompt acrescenta que o gerador não faz?
- A) A tradução: o gerador devolve a description em português, e o de melhoria a passa para o inglês antes de aplicar.
- B) A prova: o gerador escreve uma versão, e o de melhoria a testa, pontua e compara versões até achar a vencedora.
- C) O "quando não usar": o gerador cobre o que a skill faz e produz, e o de melhoria completa a parte que faltou.
- D) O caso da skill pronta: o gerador serve para skills novas, e o de melhoria é o caminho para uma skill já existente.

## 5. Um dev pediu à LLM que escrevesse um prompt de melhoria de description, rodou o prompt, e ela aplicou sozinha na skill a versão vencedora. Pelo fechamento do professor, qual é a postura mais coerente?
- A) Aceitar a versão, porque ela venceu a pontuação no conjunto de teste e por isso já é a description certa da skill.
- B) Descartar a versão, porque o professor recomenda escrever à mão os prompts de apoio, sem pedir que a LLM os gere.
- C) Aproveitar a ajuda, mas julgar a versão com a triagem e o formato que já tem na cabeça antes de dar a decisão por certa.
- D) Rodar o prompt de triagem da aula anterior sobre a nova description, porque é ele que dá o veredito sobre ela.
