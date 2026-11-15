# Quizz — Revisão - Aulas 1 a 3 (avançado)

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 3
**Base:** materiais avançados das aulas 1 a 3 do capítulo (revisão difícil)

---

## 1. Para lembrar 20 fatos de sim ou não sobre a frase, um HMM precisaria de mais de um milhão de estados. Como a RNN guarda esse tipo de informação sem essa explosão?
- A) Cria um estado por fato, como o HMM, mas treina todos os estados em paralelo na GPU.
- B) Guarda as palavras lidas em uma fila e consulta a fila quando precisa de um fato.
- C) Usa um vetor contínuo de algumas centenas de posições, que combina os fatos sem multiplicar estados.
- D) Usa o Viterbi a cada passo para podar os estados que não são mais necessários.

## 2. Ao gerar texto, um sistema mantém a cada passo só os k melhores começos de frase, em vez de todos os possíveis. Que ideia da aula de Markov isso reaproveita?
- A) Guardar os melhores caminhos parciais em vez de enumerar todas as sequências.
- B) Somar todos os caminhos que chegam a cada estado, como faz o forward.
- C) Reestimar as tabelas a cada rodada até convergir, como faz o Baum–Welch.
- D) Esquecer tudo o que veio antes do estado atual, como manda a propriedade de Markov.

## 3. Em quais destas estruturas o gradiente tem um caminho por soma, que o protege de ser multiplicado a cada etapa?
- A) Na RNN simples e na LSTM, pois as duas atualizam o estado a partir do estado anterior.
- B) Na RNN simples e na conexão residual, pois as duas compartilham pesos entre as etapas.
- C) Só na LSTM, pois a conexão residual existe para estabilizar a escala das ativações.
- D) No estado de célula da LSTM e na conexão residual do Transformer.

## 4. O gradiente que some nas primeiras camadas de uma Feedforward profunda e o que some nos primeiros passos de uma RNN têm qual relação?
- A) Nenhuma: na Feedforward o gradiente não volta pela rede, só a saída vai para frente.
- B) A mesma causa: o gradiente é multiplicado a cada elo, que é uma camada em uma e um passo na outra.
- C) Causas opostas: na Feedforward os fatores crescem, e na RNN eles encolhem.
- D) A mesma causa, mas na Feedforward ele aparece no uso, e na RNN só no treino.

## 5. O Baum–Welch e o modelo neural de 2003 aprendem sem que ninguém anote os dados. De onde vem o sinal de aprendizado de cada um?
- A) Os dois contam pares de palavras e normalizam, e diferem só no formato da tabela final.
- B) O Baum–Welch usa a próxima palavra como alvo; o neural estima estados ocultos e reajusta.
- C) Os dois usam backpropagation, mas o Baum–Welch o aplica às matrizes de transição.
- D) O Baum–Welch reajusta as tabelas para explicar as observações; o neural usa a próxima palavra como alvo.

## 6. Uma busca semântica transforma cada manual de 50 páginas em um único embedding. Perguntas sobre um detalhe específico raramente encontram o manual certo. Que lição das aulas explica isso e o que fazer?
- A) O gargalo do vetor fixo, como no seq2seq; dividir o manual em trechos com vetores próprios.
- B) O desvanecimento de gradiente; trocar o modelo de embeddings por uma LSTM.
- C) O defeito do one-hot; usar vetores maiores para o documento inteiro.
- D) A janela fixa da Feedforward; aumentar a janela do modelo para 50 páginas.

## 7. Três tarefas: (1) etiquetar sequências curtas com poucos dados e tabelas que precisam ser auditadas; (2) prever séries temporais curtas em hardware modesto; (3) achar documentos parecidos com uma pergunta. Qual combinação segue os materiais?
- A) (1) LSTM, (2) HMM, (3) contagem de bigramas.
- B) (1) HMM, (2) Feedforward com janela, (3) vetores one-hot.
- C) (1) HMM, (2) LSTM ou GRU, (3) proximidade de embeddings.
- D) (1) GRU, (2) HMM, (3) proximidade de embeddings.

## 8. A LSTM aprende dependências longas bem melhor que a RNN simples. Por que o treino dela continua tão lento quanto o de uma RNN?
- A) Porque as três portas multiplicam por três o número de parâmetros de cada passo.
- B) Porque melhora o caminho do gradiente, mas cada passo ainda espera o estado do anterior.
- C) Porque o corte de gradiente precisa ser recalculado em cada um dos passos da sequência.
- D) Porque o estado de célula precisa ser copiado da GPU para a memória a cada palavra.

## 9. Um colega afirma: "O HMM é limitado porque processa a sequência passo a passo, e a RNN herdou o mesmo defeito". Qual avaliação está correta?
- A) Certa: os dois são limitados por avançar de forma linear, e só a atenção resolve esse limite.
- B) Errada: a RNN lê a sequência inteira de uma vez, e só o HMM avança passo a passo.
- C) Errada: o HMM considera todos os estados anteriores, e por isso é mais lento que a RNN.
- D) Errada: o limite do HMM é o estado categórico; na RNN, o passo a passo custa paralelismo.

## 10. Qual afirmação está INCORRETA?
- A) Viterbi e forward têm a mesma estrutura e diferem em uma operação: máximo no lugar da soma.
- B) Uma porta de esquecimento em 0,9 mantém 90% daquela posição do estado de célula.
- C) Em um embedding de 300 dimensões, cada dimensão corresponde a um traço como gênero ou número.
- D) A GRU junta entrada e esquecimento em uma porta de atualização e dispensa o estado de célula.
