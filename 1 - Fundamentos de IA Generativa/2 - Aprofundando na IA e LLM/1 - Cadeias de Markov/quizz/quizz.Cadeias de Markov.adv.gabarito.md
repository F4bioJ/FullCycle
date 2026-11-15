# Gabarito — Cadeias de Markov (avançado)

## 1. Cadeia de Markov x HMM
**Correta: B**
**Por quê:** Na cadeia, observa-se o próprio estado. No HMM, o estado é oculto e o que se vê é um sinal emitido por ele.
- **A:** Os dois olham um estado para trás.
- **C:** Os dois são probabilísticos.
- **D:** Os dois se aplicam a qualquer sequência.
**Seção:** 1. Cadeia de Markov e HMM não são a mesma coisa
**Conceito:** estados visíveis x ocultos

## 2. Forward x Viterbi
**Correta: C**
**Por quê:** A estrutura é a mesma. O forward soma todos os caminhos que chegam a um estado, e o Viterbi fica com o máximo.
- **A:** Os dois usam transição e emissão.
- **B:** Os dois avançam do começo para o fim.
- **D:** Nenhum dos dois treina o modelo. Ambos usam tabelas já definidas.
**Seção:** 2. Um HMM completo cabe em três tabelas
**Conceito:** soma x máximo

## 3. Por que 180 operações bastam
**Correta: A**
**Por quê:** Pela propriedade de Markov, o caminho até um estado não importa para o futuro. Guarda-se um valor por estado a cada passo e o resto é descartado.
- **B:** O cálculo é exato, sem amostragem.
- **C:** Nada é descartado antes: a eliminação ocorre a cada passo.
- **D:** A emissão pondera os estados, sem eliminá-los.
**Seção:** 3. Por que esses algoritmos são engenhosos
**Conceito:** programação dinâmica

## 4. Treino sem transcrição
**Correta: D**
**Por quê:** O Baum–Welch estima transição e emissão só com as observações: chuta as tabelas, estima os estados, reajusta e repete.
- **A:** É a simplificação da aula que o material corrige.
- **B:** O método estima as duas tabelas.
- **C:** O Viterbi decodifica com tabelas prontas. Não as ajusta.
**Seção:** 4. Os três problemas e os três algoritmos
**Conceito:** Baum–Welch sem rótulos

## 5. Estado como memória fraca
**Correta: A**
**Por quê:** "Chuva" não diz há quanto tempo chove nem o que veio antes. Para lembrar mais, é preciso multiplicar os estados, com custo exponencial.
- **B:** O estado não é apagado: ele transita conforme a matriz.
- **C:** Um HMM pode ter muitos estados.
- **D:** O estado depende só do anterior.
**Seção:** 6. O limite que importa: o estado é uma categoria
**Conceito:** estado discreto x vetor contínuo

## 6. Identificar o idioma de um áudio
**Correta: C**
**Por quê:** A pergunta é de avaliação: quão provável é este áudio sob cada modelo. Isso é o forward, que soma todos os caminhos de estados. Ganha o modelo com a maior probabilidade.
- **A:** O Viterbi acha a melhor sequência de estados, e não a probabilidade total. "Caminho mais curto" também não é critério: todos os caminhos têm o tamanho do áudio.
- **B:** O Baum–Welch treina tabelas. Rodá-lo no áudio novo mudaria os modelos em vez de compará-los.
- **D:** O forward-backward dá a distribuição dos estados em cada instante. Estados "concentrados" não medem qual idioma explica melhor o áudio.
**Seção:** 5. Onde os HMMs foram usados
**Conceito:** forward para comparar modelos

## 7. Tabelas diferentes a cada treino
**Correta: B**
**Por quê:** O Baum–Welch é um caso do EM: melhora as tabelas a cada rodada, mas para no primeiro pico que encontra. Pontos de partida diferentes levam a picos diferentes.
- **A:** A partir do mesmo chute o resultado se repete, mas ele depende do chute. Não é bug.
- **C:** Treinar sem rótulos é justamente o que o Baum–Welch faz. O resultado não é aleatório.
- **D:** O Baum–Welch usa forward e backward, e não o Viterbi. Nenhum deles sorteia nada.
**Seção:** 4. Os três problemas e os três algoritmos
**Conceito:** máximo local do Baum–Welch

## 8. Treino com dados rotulados
**Correta: D**
**Por quê:** Se os estados estão marcados, não há nada oculto a estimar. Transição e emissão saem de contagens normalizadas, como no bigrama.
- **A:** O Baum–Welch serve para quando os estados não são conhecidos. Com rótulos ele é um desvio caro e sujeito a máximo local.
- **B:** O Viterbi precisa das tabelas prontas para funcionar. Não as produz.
- **C:** O forward-backward também depende de tabelas prontas, e as categorias já estão dadas no corpus.
**Seção:** 4. Os três problemas e os três algoritmos
**Conceito:** treino supervisionado por contagem

## 9. Texto gramatical e sem sentido
**Correta: A**
**Por quê:** O estado é uma categoria ("substantivo"), que não guarda de que se está falando. A sequência artigo, substantivo, verbo sai certa, mas "carro" e "comeu" não têm relação entre si.
- **B:** Linhas que não somam 1 são um erro de modelagem, mas não explicam o padrão de gramática certa com sentido errado.
- **C:** Na geração não há Viterbi: o modelo sorteia estados e palavras.
- **D:** Mais categorias ajudam pouco. Lembrar o assunto exigiria multiplicar estados, com custo exponencial.
**Seção:** 7. Por que o HMM não gera bom texto
**Conceito:** estado sem assunto

## 10. Afirmação INCORRETA
**Correta: C**
**Por quê:** É a simplificação da aula que o material corrige. O limite está em o estado ser uma categoria sem histórico. A RNN também avança passo a passo e guarda muito mais.
- **A:** Correta: 2²⁰ passa de um milhão.
- **B:** Correta: no bigrama a palavra é o estado, e ela é visível.
- **D:** Correta: só porque o futuro depende apenas do estado atual é possível guardar um valor por estado.
**Seção:** O que a aula simplificou
**Conceito:** o limite é o tipo de estado
