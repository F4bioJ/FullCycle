# Gabarito — Revisão - Aulas 1 a 3 (avançado)

## 1. Como a RNN evita a explosão de estados
**Correta: C**
**Por quê:** Cada posição do vetor pode carregar um pedaço de informação, e as posições se combinam. Algumas centenas de números contínuos guardam um resumo rico sem criar um estado por combinação de fatos.
- **A:** A RNN não cria estados por fato. O paralelismo nem existe nela: cada passo espera o anterior.
- **B:** Fila de palavras é a janela fixa da Feedforward. A RNN guarda um resumo numérico.
- **D:** O Viterbi é do HMM. A RNN não poda estados porque não tem estados discretos.
**Seção:** 2.1 · 6. O limite que importa: o estado é uma categoria; 2.3 · 1. A RNN em uma linha
**Conceito:** categoria x vetor contínuo

## 2. Manter os k melhores começos
**Correta: A**
**Por quê:** É a ideia do Viterbi: em vez de enumerar todas as sequências, guardar só os melhores caminhos parciais a cada passo. O material de Markov aponta que ela reaparece nas buscas usadas para gerar texto.
- **B:** Somar todos os caminhos dá a probabilidade total. Não escolhe começos de frase.
- **C:** O Baum–Welch treina as tabelas. Não tem papel na geração.
- **D:** A propriedade de Markov é a suposição que torna o Viterbi viável, mas manter k candidatos é a programação dinâmica, e não a suposição.
**Seção:** 2.1 · Implicações para quem constrói software com IA
**Conceito:** programação dinâmica na geração

## 3. Caminhos aditivos para o gradiente
**Correta: D**
**Por quê:** O estado de célula é atualizado por soma, e a conexão residual faz saída = x + Subcamada(x). Nos dois, o gradiente tem um atalho que não passa por matriz e ativação a cada etapa.
- **A:** Na RNN simples, o estado passa por matriz e tanh a cada passo. É exatamente a multiplicação que faz o gradiente sumir.
- **B:** A RNN simples não tem caminho aditivo, e compartilhar pesos é o que repete o fator no gradiente.
- **C:** Estabilizar a escala é papel da LayerNorm. O residual é o atalho para o gradiente.
**Seção:** 2.3 · 4. Por que a LSTM funciona; Implicações para quem constrói software com IA
**Conceito:** atalho aditivo

## 4. Desvanecimento na profundidade e no tempo
**Correta: B**
**Por quê:** Nas duas, o gradiente atravessa uma cadeia de elos e é multiplicado em cada um. Na RNN o efeito é mais forte porque o mesmo W_h se repete em todos os passos.
- **A:** A Feedforward também é treinada por backpropagation, com o gradiente voltando camada por camada.
- **C:** Nas duas redes os fatores podem encolher ou crescer. Não há uma direção fixa por arquitetura.
- **D:** Nas duas, o problema é de treino. No uso não há gradiente.
**Seção:** 2.2 · 2. Como a rede aprende: backpropagation; 2.3 · 3. De onde vêm o desvanecimento e a explosão
**Conceito:** mesma causa, elos diferentes

## 5. Sinal de aprendizado sem anotação
**Correta: D**
**Por quê:** O Baum–Welch chuta as tabelas, estima os estados ocultos e reajusta para explicar melhor as observações. O modelo neural usa a palavra seguinte do próprio texto como resposta certa e ajusta os pesos por gradiente.
- **A:** Contar pares é o treino do bigrama, ou do HMM com dados rotulados. Nenhum dos dois métodos faz isso.
- **B:** Inverte os papéis dos dois métodos.
- **C:** O Baum–Welch é um caso do EM, e não usa backpropagation.
**Seção:** 2.1 · 4. Os três problemas e os três algoritmos; 2.2 · 3. De one-hot a embedding
**Conceito:** EM x previsão da próxima palavra

## 6. Manual inteiro em um único vetor
**Correta: A**
**Por quê:** Tudo precisa caber em um vetor de tamanho fixo, e os detalhes se diluem, como no encoder do seq2seq. Dividir o documento em trechos dá a cada detalhe um vetor que o representa.
- **B:** O desvanecimento é um problema de treino de redes recorrentes. A busca só consome vetores prontos.
- **C:** Os embeddings já são densos. Um vetor maior para o documento inteiro continua sendo um único resumo.
- **D:** O problema é o resumo em um vetor, e não a janela de entrada.
**Seção:** 2.3 · 6. Os dois gargalos que sobraram; Implicações para quem constrói software com IA
**Conceito:** vetor fixo como gargalo

## 7. Tarefa → modelo
**Correta: C**
**Por quê:** HMM é barato, treina com pouco e tem tabelas legíveis. LSTM e GRU seguem boas para séries curtas em hardware modesto. Achar textos parecidos é proximidade de embeddings.
- **A:** LSTM não tem tabelas auditáveis, HMM não é indicado para valores contínuos, e bigramas não captam semelhança de sentido.
- **B:** One-hot deixa todos os documentos à mesma distância e não serve para semelhança.
- **D:** A GRU não entrega tabelas auditáveis, e o HMM trata categorias, e não séries numéricas.
**Seção:** 2.1, 2.2 e 2.3 · Implicações para quem constrói software com IA
**Conceito:** escolha de modelo pelo problema

## 8. LSTM continua lenta
**Correta: B**
**Por quê:** A LSTM melhora o caminho do gradiente na prática, mas o passo t ainda depende do estado do passo t−1. As operações sequenciais continuam O(n), e nada roda em paralelo ao longo da frase.
- **A:** Mais parâmetros pesam um pouco, mas não explicam a falta de paralelismo, que é a causa da lentidão.
- **C:** O corte é uma conta barata sobre o gradiente. Não é o gargalo.
- **D:** O estado de célula fica na GPU. Não há cópia a cada palavra.
**Seção:** 2.3 · 6. Os dois gargalos que sobraram
**Conceito:** LSTM continua sequencial

## 9. "Passo a passo" como defeito comum
**Correta: D**
**Por quê:** A aula de Markov chamou o HMM de "linear e por isso limitado", e o material corrige: o limite é o estado categórico, sem histórico. A RNN também avança passo a passo, mas carrega um vetor rico. O preço que ela paga pelo passo a passo é não paralelizar.
- **A:** A linearidade, sozinha, não é o problema. A RNN avança da mesma forma e lembra muito mais.
- **B:** A RNN processa um token por vez. É a fila que a impede de paralelizar.
- **C:** É o contrário: pela propriedade de Markov, o HMM considera só o estado atual.
**Seção:** 2.1 · O que a aula simplificou
**Conceito:** o limite é o tipo de estado, não a linearidade

## 10. Afirmação INCORRETA
**Correta: C**
**Por quê:** Nenhuma dimensão tem significado definido por alguém. Os vetores ficam próximos porque isso ajuda a prever a próxima palavra, e os traços ficam espalhados por várias dimensões.
- **A:** Correta: o forward soma os caminhos e o Viterbi fica com o máximo.
- **B:** Correta: as portas são botões de volume entre 0 e 1.
- **D:** Correta: é a diferença estrutural entre GRU e LSTM.
**Seção:** 2.2 · Armadilhas comuns
**Conceito:** dimensões do embedding não são rotuladas
