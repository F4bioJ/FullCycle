# Quizz — Explorando diversos caminhos com Tree of Thought

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 12
**Base:** material da aula

---

## 1. Um time precisa escolher entre três abordagens de cache e quer ajuda do modelo. Um dev propõe self-consistency; outro, Tree of Thought. Qual é a diferença relevante para esse caso, segundo a aula?
- A) O self-consistency compara as três abordagens pelos critérios do time, e o ToT fica com a mais votada.
- B) Os dois geram vários caminhos e escolhem pela maioria; o ToT só organiza a saída em ramos e tópicos.
- C) O ToT desenvolve cada abordagem num ramo e escolhe por um critério declarado; o outro fica com a mais consistente.
- D) O self-consistency serve a decisões técnicas com dúvida, e o ToT, a brainstorming sem chegar a uma decisão.

## 2. Um prompt pede: "gere três opções de deploy, desenvolva cada uma passo a passo e compare". Ele não diz o que torna uma opção melhor. Qual é o problema mais provável, pela aula?
- A) A comparação fica sem base para decidir, e a árvore tende a virar só verbosidade organizada.
- B) Sem critério, os três ramos saem idênticos, porque o modelo não tem como diferenciá-los.
- C) O modelo troca a árvore por um raciocínio único, já que não há o que comparar entre as opções.
- D) O modelo passa a escolher pela maioria, como no self-consistency, e isso basta nesse caso.

## 3. Num Tree of Thought sobre a lentidão de um endpoint, o modelo devolve três "causas": query lenta, falta de índice e query mal escrita. O que isso mostra e o que a aula indica fazer?
- A) Mostra que o critério estava errado; trocar plausibilidade por custo faria os ramos mudarem.
- B) Mostra que faltaram ramos; pedir dez causas em vez de três traz a variedade que faltou.
- C) Mostra que a árvore convergiu, sinal de que o banco é a causa e a investigação pode começar.
- D) Mostra a dificuldade de garantir ramos distintos; o prompt precisa de instruções mais claras.

## 4. No prompt da latência, o professor escreveu "pense como um Tree of Thought". O que acontece, segundo ele, se essa frase sair do prompt?
- A) O modelo volta a dar um palpite único, porque a técnica é ativada pelo nome dela.
- B) Pouco muda: o que monta a árvore é a estrutura pedida, com causas, raciocínio e comparação.
- C) O GPT-3.5 Turbo perde a árvore, mas o GPT-4o a mantém, porque já raciocina por padrão.
- D) O modelo deixa de comparar os ramos, porque a comparação vem implícita no nome da técnica.

## 5. Um time usa o prompt de arquitetura em dois lugares: numa sessão de brainstorming e numa integração que só grava a opção escolhida num sistema. Pelo resumo do professor, como ajustar a saída?
- A) Pedir só a resposta final nos dois, porque a comparação completa gasta tokens sem mudar nada.
- B) Comparação completa no brainstorming, que pede visibilidade; só a resposta final na integração.
- C) Comparação completa nos dois, porque sem ela a integração não consegue achar a opção escolhida.
- D) Só a resposta final no brainstorming, para não poluir a discussão; comparação completa na integração.

## 6. O prompt de arquitetura tinha só 94 tokens de entrada e gerou uma resposta enorme. Que conclusão sobre custo a aula tira disso?
- A) O custo do ToT fica baixo, porque o que pesa na conta é o tamanho do prompt enviado.
- B) Prompts curtos são a melhor forma de economizar no ToT, já que a saída acompanha a entrada.
- C) O custo cresce com o número de ramos pedidos, mas cai quando o modelo é mais forte.
- D) O custo depende da estrutura de raciocínio pedida e do volume de saída, não só da entrada.

## 7. Sobre as limitações do Tree of Thought apresentadas na aula, qual afirmação está INCORRETA?
- A) Como cada ramo segue o critério declarado no prompt, os ramos saem distintos entre si.
- B) A resposta tende a ficar longa e complexa, e o consumo de tokens sobe com os ramos.
- C) Ramos com linhas de raciocínio parecidas podem deixar a resposta repetitiva.
- D) Sem instruções bem claras, a técnica tende a funcionar mal e a gerar árvores pobres.

## 8. No prompt da latência, o GPT-3.5 Turbo escolheu o banco de dados como causa mais plausível, por ser uma causa comum de lentidão em endpoints. Como usar essa resposta?
- A) Como diagnóstico: a comparação entre os ramos confirmou que o banco é a causa da lentidão.
- B) Como descarte: rede e código saem da investigação, porque perderam na comparação.
- C) Como prioridade: o banco é a primeira hipótese a verificar, com os testes que o ramo propôs.
- D) Como voto: a maioria dos ramos apontou para o banco, e isso define a causa mais provável.

## 9. O GPT-4o escolheu serverless para processar milhões de imagens por dia. O professor concordou, mas disse que "depende" e que falta muita coisa no prompt. O que isso mostra?
- A) Que o GPT-4o errou: com custo alto nos picos, microsserviços seriam a escolha mais segura.
- B) Que a técnica explicita por que uma opção venceu, mas a decisão depende do contexto do prompt.
- C) Que, com critérios explícitos, o ToT chega à melhor arquitetura, desde que o modelo seja forte.
- D) Que serverless tende a vencer porque escala sozinho, e a comparação serviu para confirmar isso.

## 10. No prompt da latência, o que corresponde aos sub-ramos da árvore?
- A) O raciocínio passo a passo de cada causa, com o caminho até ela e o modo de verificá-la.
- B) As três causas possíveis, cada uma abrindo uma direção diferente de investigação.
- C) A comparação final entre as causas, que ordena as hipóteses da mais à menos plausível.
- D) As repetições do mesmo raciocínio, que o modelo compara para ver se chegam à mesma causa.
