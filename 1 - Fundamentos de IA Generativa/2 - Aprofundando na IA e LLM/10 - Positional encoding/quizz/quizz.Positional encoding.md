# Quizz — Positional encoding

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 10
**Base:** material da aula

---

## 1. Uma RNN lê "eu comi antes de dormir" sem nenhum vetor de posição; um Transformer precisa dele. Por quê?
- A) A RNN processa um token por vez, então a ordem vem do próprio processamento; o Transformer processa todos juntos.
- B) A RNN guarda a posição dentro do word embedding de cada token, e o Transformer usa embeddings sem esse dado.
- C) O Transformer trabalha com tokens em vez de palavras, e são os tokens que perdem a ordem ao serem separados.
- D) A atenção do Transformer embaralha os tokens de propósito para aprender, e o vetor de posição desfaz isso.

## 2. Na frase "o gato viu o gato", a palavra "gato" aparece nas posições 1 e 4 com o mesmo word embedding. Logo antes de entrar na atenção, como ficam os dois vetores?
- A) Iguais, porque a posição é aplicada depois da atenção, na hora de juntar o resultado.
- B) Diferentes, porque a cada um foi somado um vetor de posição distinto, sobre o mesmo embedding.
- C) Diferentes, porque o vetor de posição substitui o embedding das palavras que aparecem repetidas.
- D) Iguais, porque o vetor de posição é o mesmo para todos os tokens da frase, apenas multiplicado.

## 3. Uma equipe treina por mais um mês um Transformer que usa positional encoding fixo (seno e cosseno). Ao comparar o vetor posicional da posição 5 antes e depois do treino, o que deve encontrar?
- A) Um vetor diferente, porque o treino ajustou as frequências à base de dados da equipe.
- B) Um vetor diferente, porque o modelo passou a ver frases mais longas e reescalou as posições.
- C) O mesmo vetor, porque ele sai de uma fórmula e não é um parâmetro ajustado no treino.
- D) O mesmo vetor, porque o treino altera os embeddings dos tokens, e posições não são tokens.

## 4. No encoding fixo, compare o vetor posicional da posição 10 com o da posição 11. Em quais dimensões os valores mudam mais?
- A) Nas primeiras dimensões, de alta frequência, em que a onda oscila rápido entre posições vizinhas.
- B) Em todas de forma parecida, porque o termo entre parênteses é o mesmo nas linhas do seno e do cosseno.
- C) Nas últimas dimensões, de baixa frequência, que acumulam o efeito de todas as posições anteriores.
- D) Nas dimensões ímpares, que usam cosseno, enquanto as pares, com seno, ficam quase estáveis.

## 5. Por que o termo entre parênteses dá uma frequência diferente para cada dimensão, em vez de usar a mesma onda em todas?
- A) Para manter os valores entre −1 e 1, o que uma onda única não conseguiria garantir sozinha.
- B) Para que posições mais distantes recebam valores maiores e o modelo saiba quem veio depois.
- C) Para que cada dimensão guarde uma posição da frase, uma posição por dimensão do vetor.
- D) Para que a combinação de ondas diferentes forme uma assinatura única para cada posição.

## 6. Com o encoding fixo, o que permite ao modelo perceber a distância entre as posições 3 e 7?
- A) Os valores crescem com a posição, então basta subtrair um vetor do outro para ler a distância.
- B) Como as ondas têm frequências definidas, a diferença de fase entre as posições aparece padronizada.
- C) Cada posição tem um vetor ajustado no treino, e o modelo decorou as distâncias entre os pares.
- D) O d_model limita o número de posições, e cada uma ocupa uma faixa reservada do vetor.

## 7. Sobre a troca entre encoding fixo e embeddings posicionais aprendidos, qual afirmação está INCORRETA, segundo a aula?
- A) O fixo dispensa aprender as posições, então usa menos parâmetros, menos dados e menos GPU.
- B) O aprendido pode captar nuances do domínio que a fórmula de seno e cosseno às vezes não pega.
- C) O aprendido leva vantagem em sequências longas, porque cada posição tem um vetor próprio ajustado no treino.
- D) O fixo mantém uma estrutura matemática consistente, que facilita ao modelo inferir as posições dos tokens.

## 8. Uma empresa quer um modelo que gere código-fonte, treinado só com o código dos próprios sistemas. Pela lógica da aula, qual abordagem tende a render mais?
- A) Aprendida, porque padrões fechados e repetitivos deixam o modelo aprender bem onde cada coisa aparece.
- B) Fixa, porque código tem muita variação de nomes e pede uma codificação mais generalista.
- C) Fixa, porque sem treino a codificação se adapta melhor à terminologia própria da empresa.
- D) Aprendida, porque ela dispensa dados do domínio e gasta menos GPU que a versão com fórmula.

## 9. Um modelo com embeddings posicionais aprendidos foi treinado com contratos curtos. Agora ele passa a receber conversas abertas e longas. Pela lógica da aula, o que esperar?
- A) Mantém o desempenho, porque a posição 5 é a mesma num contrato ou numa conversa, e o vetor dela já foi aprendido.
- B) Tende a piorar, porque as posições foram aprendidas num domínio fechado, e quem generaliza melhor é o fixo.
- C) Tende a melhorar, porque a intuição sobre onde as palavras aparecem vale para qualquer tipo de texto.
- D) Tende a piorar, porque o aprendido gasta mais GPU a cada token gerado, e conversas longas estouram esse custo.

## 10. Um criador encadeia vários clipes de 8 segundos do Veo 3 num vídeo longo, e a personagem muda de rosto e cabelo entre as cenas. O que esse sintoma ilustra, segundo a aula?
- A) O limite de processamento de cada clipe, que faz o modelo simplificar a personagem a cada nova cena.
- B) Um problema próprio de vídeo, já que em texto o modelo mantém a coerência mesmo em livros.
- C) A falta de positional encoding no Veo 3, que processa cada quadro isolado, sem Transformer.
- D) A dificuldade geral da IA de manter coerência quanto mais longa for a sequência gerada.
