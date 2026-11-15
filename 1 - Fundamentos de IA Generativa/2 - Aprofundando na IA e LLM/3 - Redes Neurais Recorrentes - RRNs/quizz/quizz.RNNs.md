# Quizz — RNNs

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 3
**Base:** material da aula

---

## 1. O professor compara o estado da RNN a uma "memória em cache". O que essa imagem quer transmitir?
- A) Uma memória próxima, com o já processado, consultada no passo seguinte.
- B) Uma cópia de todas as palavras lidas, guardada para consulta exata.
- C) Uma janela com as últimas palavras, renovada a cada nova entrada.
- D) Uma tabela de vetores de palavras, carregada antes de o treino começar.

## 2. Por que a RNN tende a não confundir "o cachorro mordeu o homem" com "o homem mordeu o cachorro", segundo a aula?
- A) Porque usa embeddings maiores, que separam melhor as duas frases.
- B) Porque lê a frase inteira de uma vez e compara as posições.
- C) Porque carrega o que já processou ao tratar a palavra seguinte.
- D) Porque usa uma janela fixa maior que a das redes feedforward.

## 3. Sobre os problemas de gradiente descritos na aula, qual afirmação está INCORRETA?
- A) No desvanecimento, o sinal fica pequeno e a rede perde o início da sequência.
- B) A explosão ocorre em sequências curtas; o desvanecimento, nas longas.
- C) Na explosão, o gradiente cresce demais e o treino fica instável.
- D) Os dois limitam a capacidade de lidar com dependências muito longas.

## 4. Qual cadeia de consequências a aula descreve para o processamento sequencial da RNN?
- A) Cada passo depende do anterior → o gradiente explode → o treino para.
- B) Cada passo é independente → roda em paralelo → consome memória demais.
- C) Cada passo guarda memória → a memória enche → o início é apagado.
- D) Cada passo depende do anterior → não paraleliza → treina pouco volume.

## 5. Como a aula caracteriza o que LSTM e GRU fazem com o problema de memória?
- A) Resolvem o problema ao ampliar a memória disponível para o estado.
- B) Reduzem o problema ao controlar o que fica na memória, sem resolvê-lo.
- C) Resolvem o desvanecimento, mas deixam a explosão como estava.
- D) Reduzem o problema ao processar os passos em paralelo.

## 6. Um time com pouco orçamento de treino hesita entre LSTM e GRU. Que argumento da aula favorece a GRU?
- A) Ela dispensa o estado, o que permite paralelizar o treino.
- B) Ela tem uma porta a mais, o que retém contextos mais longos.
- C) Ela tem menos portas e parâmetros, com desempenho comparável.
- D) Ela veio antes e, por isso, tem mais ferramentas maduras.

## 7. Na descrição da aula, o que a GRU faz com as portas da LSTM?
- A) Junta entrada e saída em uma só, ficando com duas portas.
- B) Remove a de esquecimento, pois o estado passa a se limpar sozinho.
- C) Mantém as três e acrescenta uma quarta, de atualização.
- D) Junta entrada e esquecimento em uma só, ficando com duas portas.

## 8. Quais limitações a aula diz que continuam mesmo com LSTM e GRU?
- A) O processamento em sequência e a dificuldade com contexto muito longo.
- B) A confusão de ordem das palavras e a ausência de qualquer memória.
- C) A dependência de dados rotulados e o custo alto da rotulagem.
- D) A janela fixa de entrada e a incapacidade de lidar com áudio.

## 9. Ao fechar a aula, o professor lista o que ainda falta resolver. Qual item NÃO está nessa lista?
- A) Processar em paralelo.
- B) Enxergar o passado, e não só seguir adiante.
- C) Representar palavras como vetores.
- D) Tratar mais dados sem depender da memória guardada.

## 10. Num texto longo, uma RNN simples escreve "As propostas que o comitê [...40 palavras...] foi aprovada". Como a aula explica o erro?
- A) A janela de entrada não alcançava o sujeito no início da frase.
- B) O sinal do início ficou pequeno demais, e a rede perdeu o sujeito.
- C) A porta de esquecimento descartou o sujeito antes do verbo.
- D) Os embeddings de singular e plural são próximos e se confundiram.
