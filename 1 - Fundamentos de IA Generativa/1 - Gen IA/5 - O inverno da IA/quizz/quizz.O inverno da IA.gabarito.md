# Gabarito — O inverno da IA

## 1. Origem do inverno da IA
**Correta: A**
**Por quê:** "A galera criou muita expectativa", houve investimento, e veio a frustração: não havia poder de processamento nem dados para os sistemas resolverem problemas complexos.
- **B:** As ideias existiam: a aula diz que já se falava de rede neural. Faltava como executá-las.
- **C:** As duas linhas conviviam desde os anos 1960, mas a aula não aponta essa disputa como causa.
- **D:** Os modelos estatísticos ganham força no fim do inverno e nos anos 1990. São parte da saída, não da causa.
**Conceito:** inverno = expectativa maior que a capacidade técnica

## 2. Por que a IA "não conseguia aprender"
**Correta: C**
**Por quê:** "Ela não conseguia aprender também, porque a gente não tinha dado o suficiente para o aprendizado."
- **A:** A ideia de aprender com exemplos já existia desde os perceptrons (aula 4).
- **B:** As regras de fato não aprendem, mas a frase da aula trata da falta de dados, que travava também as redes neurais.
- **D:** A conexão entre neurônios é a novidade de Hopfield, mas a aula não a dá como causa de a IA não aprender.
**Conceito:** falta de dados como barreira

## 3. A novidade de Hopfield
**Correta: B**
**Por quê:** Nas redes recorrentes de Hopfield, "a saída de um neurônio podia ser a entrada de outro" e também "a entrada para esse próprio neurônio", em vez de uma linha única de entrada e saída.
- **A:** Dois modelos, gerador e discriminador, são as GANs (2014).
- **C:** Focar em partes da entrada é a atenção dos Transformers (2017).
- **D:** Probabilidade de pertencer a uma classe é o Naive Bayes.
**Conceito:** recorrência (saída realimenta a rede)

## 4. Memória associativa
**Correta: D**
**Por quê:** A aula fala em "lembrar padrões incompletos para conseguir completá-los", à semelhança da memória associativa humana.
- **A:** Prever a próxima palavra é o que a aula atribui às cadeias de Markov.
- **B:** Classificar em categorias é a tarefa do Naive Bayes no exemplo do spam.
- **C:** A memória associativa completa padrões aprendidos. Ela não é um registro de tudo o que passou.
**Conceito:** memória associativa (completar padrões)

## 5. O exemplo do boneco de neve
**Correta: C**
**Por quê:** "A gente trabalha com um certo grau de incerteza para responder algo com certeza": pelo contexto, escolhe-se a maior probabilidade. "Antes as máquinas não conseguiam fazer isso."
- **A:** O exemplo é sobre raciocínio sob incerteza. O reconhecimento de imagem em escala vem com o deep learning.
- **B:** É o contrário: o ponto é que o sim/não rígido não dá conta da incerteza.
- **D:** O exemplo fala de várias hipóteses para o mesmo observador, não de divergência entre pessoas.
**Conceito:** da certeza à probabilidade

## 6. O falso positivo do filtro de spam
**Correta: A**
**Por quê:** O Naive Bayes é "um classificador baseado em probabilidade condicional": estima a chance de um item pertencer a uma classe. Como é uma estimativa, pode errar quando as evidências apontam para o lado errado.
- **B:** Regra fixa é a abordagem anterior, que a virada estatística veio substituir.
- **C:** Prever a palavra seguinte é o papel que a aula dá às cadeias de Markov, não ao classificador.
- **D:** O filtro não procura cópias exatas, ele calcula probabilidade a partir do conteúdo.
**Conceito:** Naive Bayes (classificação por probabilidade)

## 7. Por que prever a próxima palavra era necessário
**Correta: D**
**Por quê:** Sem a previsão, "eu não consigo conversar": é ela que permite "te dar uma nova cadeia de palavras com base no que eu acabei de entender".
- **A:** A aula trata compreender e prever como partes do mesmo processo, uma não dispensa a outra.
- **B:** Converter palavras em vetores é o papel dos embeddings (aula 3).
- **C:** Separar por categoria é classificação, outra tarefa citada na aula.
**Conceito:** modelos de sequência (Markov) e geração

## 8. Por que só em 2010–2014
**Correta: B**
**Por quê:** "O Deep Learning começa a aparecer com a popularização do conceito de Big Data e com as GPUs", o que permitiu aplicar em larga escala técnicas "que antes eram limitadas por conta dos recursos computacionais".
- **A:** A atenção chega em 2017, depois do período da pergunta.
- **C:** As GANs são de 2014 e resultado dessa retomada, não a causa dela.
- **D:** O spam é o exemplo da fase estatística, e o filtro usava Naive Bayes, não redes neurais.
**Conceito:** deep learning = dados + GPUs

## 9. Afirmação INCORRETA sobre GANs
**Correta: C**
**Por quê:** Gerador e discriminador "aprendem juntos": um cria e o outro diz "isso tá certo ou tá errado" repetidamente, durante o treino.
- **A:** Correta: 2014, "dois modelos que competem para gerar dados realistas".
- **B:** Correta: é o papel do discriminador.
- **D:** Correta: o professor destaca "o modelo de como eu ensino essa máquina a aprender" como a grande sacada.
**Conceito:** GAN (treino conjunto de gerador e discriminador)

## 10. Associação de datas
**Correta: A**
**Por quê:** Hopfield "vingou" em 1982, as GANs chegam em 2014, o artigo "Attention Is All You Need" é de 2017 e o BERT, de 2018.
- **B:** Troca GANs (2014) com Transformers (2017).
- **C:** A aula diz que as ideias de Hopfield começaram no fim dos anos 1970 e vingaram em 1982, e inverte Transformers (2017) e BERT (2018).
- **D:** O Naive Bayes é ligado aos anos 1990–2000 (spam), e o BERT é de 2018.
**Conceito:** linha do tempo 1982–2018
