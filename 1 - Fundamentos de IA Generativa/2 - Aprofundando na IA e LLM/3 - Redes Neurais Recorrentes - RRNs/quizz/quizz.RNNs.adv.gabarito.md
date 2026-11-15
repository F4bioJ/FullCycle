# Gabarito — RNNs (avançado)

## 1. Pesos compartilhados
**Correta: A**
**Por quê:** A mesma função processa cada passo, o que serve a qualquer tamanho de sequência. Em troca, o mesmo fator se repete no gradiente, e daí vêm o desvanecimento e a explosão.
- **B:** A ordem é preservada pelo processamento sequencial.
- **C:** Cada passo depende do anterior, então não há paralelismo.
- **D:** A RNN não precisa de janela fixa.
**Seção:** 1. A RNN em uma linha
**Conceito:** compartilhamento de pesos

## 2. O que o estado guarda
**Correta: C**
**Por quê:** O estado h_t é um vetor de ativações, um resumo comprimido da sequência lida até ali.
- **A:** É a frase da aula. Gradientes só existem no treino.
- **B:** Fila de palavras é a janela fixa da feedforward.
- **D:** Categoria como estado é o HMM.
**Seção:** 2. O que a memória guarda
**Conceito:** ativações x gradientes

## 3. Quando o desvanecimento atua
**Correta: B**
**Por quê:** No backpropagation through time, o gradiente é multiplicado a cada passo. Vindo de longe, ele chega quase a zero e os pesos não aprendem a relação.
- **A:** No uso não há gradiente. A falta de contexto longo é consequência do treino.
- **C:** Embeddings não são apagados.
- **D:** Isso descreve a explosão, e o limite não é da GPU.
**Seção:** 3. De onde vêm o desvanecimento e a explosão
**Conceito:** desvanecimento como problema de treino

## 4. Perda com saltos e NaN
**Correta: C**
**Por quê:** Gradientes enormes produzem atualizações enormes, e os valores estouram. O corte da norma limita o tamanho do gradiente.
- **A:** O desvanecimento não faz a perda saltar. O treino só deixa de aprender o que está longe.
- **B:** Overfitting aparece como diferença entre treino e teste.
- **D:** O tamanho do estado não causa NaN.
**Seção:** 3. De onde vêm o desvanecimento e a explosão
**Conceito:** explosão e corte de gradiente

## 5. Por que o estado de célula ajuda
**Correta: D**
**Por quê:** A atualização é c_t = f ⊙ c_(t−1) + i ⊙ candidato. O estado antigo é somado, e não passa por matriz e tanh. Com f perto de 1, o gradiente quase não é atenuado.
- **A:** Ele acumula ao longo dos passos. É a função dele.
- **B:** Ele continua sendo um vetor numérico.
- **C:** Os pesos são compartilhados entre os passos.
**Seção:** 4. Por que a LSTM funciona
**Conceito:** caminho aditivo do gradiente

## 6. Gargalo do seq2seq
**Correta: B**
**Por quê:** O decoder recebia um único vetor de tamanho fixo. A atenção permitiu consultar todos os estados do encoder.
- **A:** O decoder gerava em sequência.
- **C:** A velocidade em frases curtas não era o problema.
- **D:** O gargalo não era o vocabulário.
**Seção:** 6. Os dois gargalos que sobraram
**Conceito:** vetor fixo e origem da atenção

## 7. LSTM sem corte de gradiente
**Correta: C**
**Por quê:** O caminho aditivo do estado de célula ajuda o gradiente a não sumir, mas nada impede que ele cresça. Saltos e NaN são o sintoma clássico da explosão, e o corte continua necessário.
- **A:** Uma porta em 0 faria a rede esquecer, e não estourar valores.
- **B:** O estado de célula tem tamanho fixo e não guarda palavras. Ele não cresce com o texto.
- **D:** É o oposto: as portas existem para atenuar o desvanecimento.
**Seção:** 4. Por que a LSTM funciona
**Conceito:** LSTM ainda explode

## 8. O que é uma porta
**Correta: A**
**Por quê:** Cada porta é um vetor com valores entre 0 e 1. Uma porta de esquecimento em 0,9 mantém 90% daquela posição. A rede aprende esses valores no treino.
- **B:** É a armadilha do "interruptor". Os valores são contínuos, e não liga e desliga.
- **C:** Ninguém escreve as regras. As portas são calculadas com pesos aprendidos.
- **D:** Não há contagem. A porta depende do estado anterior e da palavra atual.
**Seção:** 4. Por que a LSTM funciona
**Conceito:** portas como botões de volume

## 9. Séries curtas em dispositivo modesto
**Correta: B**
**Por quê:** LSTM e GRU seguem boas escolhas para séries temporais curtas em hardware modesto. A GRU tem só duas portas e nenhum estado de célula separado, e por isso pesa menos.
- **A:** O material diz que um Transformer seria exagero nesse cenário, e ele pesa bem mais em memória.
- **C:** Séries curtas sofrem menos, mas o gradiente ainda é multiplicado a cada passo. "Problema algum" é falso.
- **D:** Leituras de sensor são contínuas. Forçá-las em categorias perde justamente o que se quer prever.
**Seção:** Implicações para quem constrói software com IA
**Conceito:** quando escolher GRU

## 10. Afirmação INCORRETA
**Correta: D**
**Por quê:** A soma ajuda o gradiente, mas o passo t ainda precisa do estado do passo t−1. LSTM e GRU melhoram o caminho do gradiente e não mexem nas operações sequenciais.
- **A:** Correta: os dois são atalhos aditivos para o gradiente.
- **B:** Correta: o caminho máximo entre dois tokens na camada recorrente é O(n).
- **C:** Correta: tudo precisa caber em um vetor de tamanho fixo, e o detalhe se perde.
**Seção:** 6. Os dois gargalos que sobraram
**Conceito:** LSTM continua sequencial
