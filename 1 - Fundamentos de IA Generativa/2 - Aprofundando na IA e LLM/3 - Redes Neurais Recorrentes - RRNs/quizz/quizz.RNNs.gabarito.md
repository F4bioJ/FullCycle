# Gabarito — RNNs

## 1. A "memória em cache"
**Correta: A**
**Por quê:** O professor fala em "uma memória próxima, que está aqui mais perto do seu processamento, para te falar o que já foi feito" e que é acessada "pelo próximo passo de processamento".
- **B:** A memória não é uma cópia literal das palavras. O professor diz que não se guarda "o cachorro" em si.
- **C:** Janela renovada a cada entrada é a feedforward de contexto fixo, da aula anterior.
- **D:** Isso descreve os embeddings, não o estado que a RNN carrega entre os passos.
**Conceito:** estado recorrente como memória próxima

## 2. Por que a ordem deixa de se confundir
**Correta: C**
**Por quê:** "Eu vou guardar em memória o que foi dito, o que foi processado, e com isso consigo acessar e dar mais coerência." O histórico entra no tratamento da palavra seguinte.
- **A:** O ganho não vem do tamanho dos vetores, e sim de carregar o que foi processado.
- **B:** A RNN é sequencial: processa "uma coisa de cada vez".
- **D:** A RNN não usa janela fixa. Essa é a característica que ela veio superar.
**Conceito:** memória preserva a ordem

## 3. Afirmação INCORRETA sobre gradiente
**Correta: B**
**Por quê:** A aula apresenta os dois como faces do mesmo problema: "se pode ser para menos, pode ser para mais". Não associa a explosão a sequências curtas.
- **A:** Correta: os gradientes "se tornam muito pequenas" e "a rede esquece o início".
- **C:** Correta: "o gradiente pode ficar muito grande e vai gerar uma instabilidade no treinamento".
- **D:** Correta: "mesmo com essa memória, ela tem dificuldade de ter uma dependência de muito longo prazo".
**Conceito:** desvanecimento e explosão de gradiente

## 4. Consequências do processamento sequencial
**Correta: D**
**Por quê:** "Como cada processamento é sequencial, eu não tenho como paralelizar"; "com isso eu fico lento" e "não consigo treinar grandes volumes".
- **A:** A explosão de gradiente é outro problema, que a aula não deriva da falta de paralelismo.
- **B:** É o oposto: os passos dependem uns dos outros e por isso não rodam juntos.
- **C:** Mistura a falta de paralelismo com o esquecimento do início, que a aula atribui ao gradiente.
**Conceito:** sem paralelismo, treino lento

## 5. O que LSTM e GRU fazem com a memória
**Correta: B**
**Por quê:** Elas controlam o que entra, o que é apagado e o que segue. "Limpando a memória, você diminui esse problema, mas você não vai resolver ele também."
- **A:** A solução descrita não é mais memória, e sim controle do que fica nela.
- **C:** A aula não faz essa distinção: diz que as duas atacam o estouro "pra cima ou pra baixo" e que o problema é só atenuado.
- **D:** O processamento continua sequencial com LSTM e GRU.
**Conceito:** portas como controle da memória

## 6. O argumento a favor da GRU
**Correta: C**
**Por quê:** A GRU "tem um treinamento mais rápido", "menos parâmetros" e "uma performance bem comparável com a LSTM" em muitas tarefas.
- **A:** A GRU continua recorrente e sequencial. Não dispensa o estado nem paraleliza.
- **B:** É o contrário: a GRU tem menos portas que a LSTM.
- **D:** A ordem está invertida: "a LSTM veio primeiro e depois veio a GRU".
**Conceito:** GRU como simplificação da LSTM

## 7. O que a GRU faz com as portas
**Correta: D**
**Por quê:** "A porta de entrada e de esquecimento viram uma coisa só", e o modelo passa a ter "duas portas para trabalhar", contra três da LSTM.
- **A:** As portas fundidas são entrada e esquecimento, não entrada e saída.
- **B:** O esquecimento não é removido, é combinado com a entrada.
- **C:** A GRU reduz o número de portas, não aumenta.
**Conceito:** portas da GRU

## 8. O que continua sem solução
**Correta: A**
**Por quê:** "Você ainda é sequencial, então você não consegue paralelizar, o aprendizado ainda é lento. O modelo muito longo ainda tem dificuldade de manter contexto."
- **B:** A ordem e a memória próxima são justamente o que as RNNs trouxeram de ganho.
- **C:** A rotulagem é a limitação apontada na aula de cadeias de Markov.
- **D:** A janela fixa é da feedforward, e a aula cita áudio entre os dados que a RNN trata bem.
**Conceito:** limites que LSTM e GRU não removem

## 9. O que NÃO está na lista do que falta
**Correta: C**
**Por quê:** Vetorizar palavras já estava resolvido desde a aula de redes profundas, com os embeddings. O professor lista três pendências: paralelismo, processar mais dados sem depender da memória guardada e enxergar o passado.
- **A:** Está na lista: "poder de processamento em paralelo".
- **B:** Está na lista: "conseguir enxergar esse passado, não só como faz no feedforward".
- **D:** Está na lista: processar um número maior de dados "sem precisar guardar em memória".
**Conceito:** o que falta para a próxima arquitetura

## 10. O erro de concordância à distância
**Correta: B**
**Por quê:** Em sequência muito longa, os sinais de aprendizado "se tornam muito pequenas" e "a rede esquece o início". O exemplo da aula é esse: lembrar o sujeito do início para aplicar no verbo do final.
- **A:** A RNN não tem janela de entrada. Isso seria o erro de uma feedforward.
- **C:** A RNN simples não tem portas. Elas só aparecem na LSTM e na GRU.
- **D:** A aula não atribui o erro aos embeddings, e sim à perda do início da sequência.
**Conceito:** desvanecimento e dependência de longo prazo
