# Quizz — O inverno da IA (avançado)

**Capítulo:** 1 - Gen IA · **Aula:** 5
**Base:** material avançado

---

## 1. No exemplo do material, "grátis" aparece em 30% dos spams e em 2% dos legítimos, e com 40% de spam na caixa o resultado foi ≈91%. Se a caixa tiver só 4% de spam, qual é a probabilidade de um e-mail com "grátis" ser spam?
- A) Cerca de 91%, pois as frequências da palavra em cada classe não mudaram.
- B) Cerca de 38%, pois 0,012 contra 0,019 dos legítimos deixa o spam em minoria.
- C) Cerca de 30%, pois é a frequência de "grátis" dentro dos e-mails de spam.
- D) Cerca de 9%, pois a proporção de spam caiu dez vezes e o resultado cai junto.

## 2. Em um filtro Naive Bayes, "cartão" e "crédito" quase sempre aparecem juntas, e o modelo conta as duas como evidências separadas. Qual é o efeito mais provável, segundo o material?
- A) A classificação se inverte, pois a evidência contada em dobro empurra tudo para spam.
- B) O cálculo fica indefinido, pois o teorema de Bayes exige palavras independentes.
- C) As probabilidades e a ordem entre as classes saem certas, pois os erros se cancelam.
- D) As probabilidades saem distorcidas, mas a classe mais provável costuma se manter.

## 3. Spammers passam a colar, no fim das mensagens, trechos de notícias comuns. Que característica do filtro bayesiano eles exploram?
- A) Cada palavra inocente soma evidência de "legítimo", e as evidências são combinadas.
- B) O filtro lê só as primeiras linhas, e o texto longo empurra o spam para fora delas.
- C) As palavras de notícia nunca foram vistas, e palavras novas zeram a nota de spam.
- D) O filtro descarta mensagens com muitas palavras raras, por falta de dados sobre elas.

## 4. Um colega quer usar uma rede de Hopfield clássica para sugerir a próxima palavra no teclado do celular. Pelo material, qual é o problema?
- A) Ela só aceita padrões inteiros, e o começo de uma frase é um padrão incompleto.
- B) Ela usa pesos assimétricos, que não convergem quando a entrada é texto.
- C) Ela recupera padrões gravados e estáticos, sem carregar estado por uma sequência.
- D) Ela exige treino por gradiente, caro demais para rodar dentro de um celular.

## 5. Uma rede de Hopfield gravou os padrões P1 e P2. Ela recebe uma versão de P1 tão corrompida que ficou mais parecida com P2. O que esperar?
- A) Que recupere P1, pois a rede registra qual padrão deu origem a cada entrada.
- B) Que devolva a entrada sem mudança, pois ela não coincide com nenhum padrão gravado.
- C) Que gere um padrão intermediário entre P1 e P2, como faria o gerador de uma GAN.
- D) Que caia em P2, pois a bola rola para o vale mais próximo de onde foi solta.

## 6. Ao fim do treino de uma GAN, o discriminador responde 0,5 para quase toda amostra, real ou gerada. Pelo material, como interpretar isso?
- A) É o equilíbrio teórico: o gerador passou a imitar bem a distribuição dos dados reais.
- B) É sinal de falha: o discriminador parou de aprender e precisa ser treinado de novo.
- C) É sinal de que o gerador copiou os exemplos de treino, que o discriminador aceita.
- D) É sinal de que os dois modelos convergiram para os mesmos pesos e viraram um só.

## 7. Qual afirmação descreve o lugar das GANs na história, segundo o material?
- A) São a etapa entre as RNNs e os Transformers, que herdaram delas o gerador.
- B) São aprendizado supervisionado, com rótulos de "real" e "falso" dados por anotadores.
- C) São um ramo paralelo voltado a imagens; os LLMs vêm de Markov, RNN e Transformer.
- D) São a origem do treino adversarial que os LLMs usam para prever o próximo token.

## 8. Uma startup demonstra um assistente que vai muito bem em dez casos escolhidos e o vende para dez mil clientes, com problemas reais variados. Que fenômeno descrito no material ela corre o risco de repetir?
- A) O envenenamento bayesiano, pois clientes reais passam a atacar o modelo exposto.
- B) A explosão combinatória de Lighthill: o que funciona no pequeno não escala.
- C) O colapso das máquinas LISP, pois o hardware dedicado ao modelo fica obsoleto.
- D) A conclusão do ALPAC: a solução sai mais cara que a alternativa humana.

## 9. Qual afirmação sobre os dois invernos está de acordo com o material?
- A) O segundo atingiu as redes neurais, já criticadas no livro *Perceptrons*.
- B) O primeiro atingiu os sistemas especialistas, com o fim da Quinta Geração.
- C) O termo "inverno da IA" surgiu depois do segundo, para nomear o colapso de 1987.
- D) O segundo atingiu as regras "se... então", que tinham sobrevivido ao primeiro.

## 10. Qual afirmação está INCORRETA segundo o material?
- A) A falha técnica de um método basta, sozinha, para provocar um inverno da IA.
- B) O Deep Learning de 2010–2014 viabilizou ideias antigas de redes de várias camadas.
- C) A rede de Hopfield grava padrões reforçando ligações entre neurônios que disparam juntos.
- D) Em uma GAN, o gerador é treinado para maximizar a chance de o discriminador errar.
