# Gabarito — Positional encoding

## 1. RNN sem vetor de posição, Transformer com
**Correta: A**
**Por quê:** a RNN lê um token depois do outro, então a ordem está embutida no próprio processamento. O Transformer processa todos os tokens em paralelo e, sem um sinal de posição, sabe quais tokens existem mas não quem vem antes (o "baralho embaralhado" da aula).
- **B:** o word embedding representa o significado do token, não a posição, nem na RNN.
- **C:** trocar palavra por token não é a causa; o que tira a ordem é o processamento paralelo.
- **D:** a atenção não embaralha nada de propósito; a ordem só não vem de graça quando tudo é processado junto.
**Conceito:** por que o Transformer precisa de positional encoding

## 2. "gato" nas posições 1 e 4
**Correta: B**
**Por quê:** vetor final = word embedding + positional encoding. O embedding de "gato" é o mesmo nas duas posições, mas cada posição soma um vetor posicional diferente, então os vetores que entram na atenção ficam diferentes.
- **A:** a posição é somada ao embedding na entrada, antes da atenção, não no fim.
- **C:** o vetor de posição é somado, não substitui o embedding; o significado continua lá.
- **D:** cada posição tem seu próprio vetor (a "assinatura única"); não há um vetor comum à frase.
**Conceito:** soma entre embedding e posição

## 3. Vetor fixo da posição 5 antes e depois do treino
**Correta: C**
**Por quê:** no encoding fixo, o vetor de cada posição é gerado por uma regra matemática (seno e cosseno) e não é aprendido. Mais treino não muda o vetor da posição 5.
- **A:** ajustar a codificação ao treino é o que faz a abordagem aprendida, não a fixa.
- **B:** o vetor depende só da posição e da dimensão; frases mais longas não mudam a fórmula.
- **D:** a conclusão está certa, mas o motivo não: o vetor não muda porque vem de uma fórmula, e não por uma regra sobre tokens. Na abordagem aprendida, as posições também são ajustadas no treino.
**Conceito:** positional encoding fixo não é aprendido

## 4. Posição 10 vs 11: onde muda mais
**Correta: A**
**Por quê:** o termo entre parênteses dá uma frequência por dimensão. Nas primeiras dimensões a frequência é alta, então a onda muda muito de uma posição para a vizinha; nas últimas, a frequência é baixa e a mudança é lenta.
- **B:** o termo entre parênteses é o mesmo nas linhas do seno e do cosseno, mas varia com o índice i, e é isso que faz cada dimensão ter uma frequência.
- **C:** inverte a ideia: as últimas dimensões são as de baixa frequência, as que mudam devagar.
- **D:** seno e cosseno se alternam entre as dimensões, mas a velocidade de mudança vem da frequência (do índice), não de ser seno ou cosseno.
**Conceito:** frequências altas e baixas nas dimensões

## 5. Por que uma frequência por dimensão
**Correta: D**
**Por quê:** cada dimensão vira uma onda diferente, e a combinação delas (os "trechos de música" da aula) forma uma assinatura única para cada posição.
- **A:** quem mantém os valores entre −1 e 1 é o próprio seno ou cosseno; uma onda única já ficaria nessa faixa.
- **B:** seno e cosseno oscilam entre −1 e 1, então os valores não crescem com a distância; a ordem vem da combinação das ondas.
- **C:** cada dimensão é uma onda que vale para todas as posições; a posição fica espalhada pelo vetor inteiro, não em uma dimensão por posição.
**Conceito:** combinação de ondas como assinatura da posição

## 6. Distância entre as posições 3 e 7
**Correta: B**
**Por quê:** como as ondas têm frequências definidas, a diferença entre duas posições aparece de forma padronizada nos vetores, e o modelo calcula a distância relativa pela diferença de fase das ondas.
- **A:** seno e cosseno oscilam entre −1 e 1; os valores não crescem com a posição.
- **C:** vetores ajustados no treino são da abordagem aprendida; a pergunta é sobre o fixo.
- **D:** d_model é o tamanho do embedding; cada posição usa o vetor inteiro, não uma faixa dele.
**Conceito:** seno e cosseno e distâncias relativas

## 7. Troca entre fixo e aprendido (INCORRETA)
**Correta: C**
**Por quê:** é verdade que cada posição tem um vetor próprio ajustado no treino, mas a conclusão está errada: segundo a aula, quem é generalista e lida melhor com sequências longas é o fixo. O aprendido é indicado para domínios fechados e repetitivos.
- **A:** correta: o fixo não é aprendido, então gasta menos parâmetros, dados e GPU.
- **B:** correta: o aprendido capta nuances que a fórmula às vezes não pega.
- **D:** correta: o fixo preserva uma estrutura matemática consistente, que facilita inferir as posições.
**Conceito:** quando usar cada abordagem

## 8. Geração de código com base própria
**Correta: A**
**Por quê:** a aula cita a geração de código como caso do aprendido: código é muito repetitivo, e treinado só com o código da empresa, o modelo aprende os padrões fechados desse domínio.
- **B:** a aula trata código como domínio repetitivo e fechado, não como caso de muita variedade de dados.
- **C:** adaptar-se à terminologia do domínio é vantagem do aprendido; o fixo não se adapta, porque não treina.
- **D:** inverte as trocas: o aprendido precisa de dados do domínio e de mais treino, e o fixo é o mais leve.
**Conceito:** quando usar o aprendido

## 9. Posições aprendidas em contratos curtos, usadas em conversas abertas e longas
**Correta: B**
**Por quê:** o aprendido é bom em domínios fechados porque ajusta a posição ao padrão daquele domínio; a aula diz que ele não vai bem em usos muito abertos. Para dados variados e sequências longas, quem generaliza melhor é o fixo.
- **A:** a posição tem o mesmo número, mas o vetor dela foi ajustado aos padrões de contratos curtos; não há garantia de que sirva para outro domínio nem para sequências mais longas.
- **C:** a "intuição" vem justamente de aprender um assunto específico; ela não se transfere para qualquer texto.
- **D:** o custo extra do aprendido está em parâmetros, dados e treino, não em gastar mais GPU por token; o motivo da piora é a falta de generalização.
**Conceito:** limite do aprendido fora do domínio

## 10. Clipes encadeados do Veo 3 perdem coerência
**Correta: D**
**Por quê:** o professor usa o Veo 3 e a Marisa Maiô para mostrar que, quanto mais longa a sequência, mais difícil a IA manter tudo coerente. Isso vale para texto (frase, parágrafo, livro) e piora em vídeo.
- **A:** a aula não liga a perda de coerência a limite de processamento por clipe; cada clipe curto vai bem, e o problema aparece quando a sequência fica longa.
- **B:** a aula diz o contrário: em texto o problema também existe (um livro é pior que um parágrafo), só é menor que em vídeo.
- **C:** a aula não diz como o Veo 3 funciona por dentro; a explicação é inventada.
**Conceito:** sequências longas são a grande dificuldade
