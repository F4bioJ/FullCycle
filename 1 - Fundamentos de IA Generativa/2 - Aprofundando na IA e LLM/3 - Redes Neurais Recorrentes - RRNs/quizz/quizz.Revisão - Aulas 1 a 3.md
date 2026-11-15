# Quizz — Revisão - Aulas 1 a 3

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 3
**Base:** aulas 1 a 3 do capítulo (revisão difícil)

---

## 1. Feedforward (janela de 5) erra concordância sujeito-início / verbo-fim. Troca-se por uma RNN simples. Resultado mais provável?
- A) O problema desaparece: a RNN carrega todos os estados anteriores sem perda.
- B) Nada muda: a RNN também lê uma janela fixa de palavras.
- C) Piora: a RNN perde a noção de ordem que a janela garantia.
- D) Melhora ordem e contexto curto, mas a concordância distante tende a continuar falhando.

## 2. (Além da aula) Diferença fundamental entre o "estado" do HMM e o da RNN?
- A) HMM: categoria discreta (sol, chuva). RNN: vetor contínuo que resume tudo o que já foi processado.
- B) HMM: depende de todos os estados anteriores. RNN: só do imediatamente anterior.
- C) Ambos guardam palavras literais; a RNN comprime melhor com embeddings.
- D) HMM aprende por gradiente; RNN usa Baum-Welch.

## 3. Um bigrama é trocado por uma Feedforward com janela de 4 palavras e embeddings. O que ela ganha e o que continua faltando?
- A) Ganha memória entre janelas, mas perde a noção de ordem que o bigrama tinha.
- B) Ganha contexto de 4 palavras e generaliza por semelhança, mas não vê nada fora da janela.
- C) Ganha estados ocultos que emitem palavras, mas continua dependendo só da palavra anterior.
- D) Ganha dependência de longo prazo, mas deixa de poder ser treinada em paralelo.

## 4. Uma RNN simples aprende bem frases curtas, mas nunca acerta a concordância entre um sujeito no início e um verbo 30 palavras depois. A perda cai de forma estável, sem saltos. Diagnóstico e próximo passo mais provável?
- A) Explosão de gradiente; aplicar corte da norma do gradiente.
- B) Desvanecimento de gradiente; trocar a RNN simples por uma LSTM ou GRU.
- C) Overfitting; reduzir o tamanho do vetor de estado da RNN.
- D) Janela pequena demais; aumentar a janela de entrada para 30 palavras.

## 5. (Além da aula) Por que o gradiente desvanece?
- A) Memória de tamanho fixo: informação antiga é sobrescrita.
- B) Embeddings antigos perdem dimensões a cada passo.
- C) A GPU arredonda números pequenos para zero.
- D) No treino, multiplicam-se muitos fatores < 1 ao voltar pelos passos, e o produto tende a zero.

## 6. LSTM: sujeito muda de "cachorro" (singular) para "gatos" (plural). O que deveria acontecer?
- A) Porta de saída apaga "cachorro"; entrada registra "gatos".
- B) Só a porta de entrada: o novo sobrescreve o antigo.
- C) Porta de esquecimento descarta o sujeito antigo; porta de entrada registra o novo.
- D) Mantém os dois; a porta de saída escolhe sempre o último.

## 7. GPUs impulsionaram redes profundas. Por que RNNs continuavam lentas?
- A) A GPU acelera contas simultâneas, mas na RNN cada passo espera o anterior, então pouco roda junto.
- B) GPUs da época só funcionavam com Feedforward.
- C) RNNs têm muito mais parâmetros e não cabiam na GPU.
- D) O desvanecimento obrigava a repetir o treino várias vezes.

## 8. "não consigo acessar minha conta" × artigo "problema no login" — por que embeddings relacionam?
- A) Guardam a conversa inteira em memória, como uma RNN.
- B) Transformam letras em 0/1 e comparam caractere a caractere.
- C) Contam pares de palavras, como bigramas.
- D) Palavras de sentido próximo ("acessar", "login") têm vetores próximos.

## 9. Qual "troca" entre modelos está correta?
- A) Bigrama → HMM: resolveu falta de paralelismo.
- B) Feedforward → RNN: ganhou memória entre passos, perdeu facilidade de paralelizar.
- C) HMM → Feedforward: resolveu dependência de longo prazo.
- D) RNN → LSTM: eliminou o processamento sequencial.

## 10. Qual afirmação está INCORRETA?
- A) HMM e Feedforward compartilham fluxo unidirecional.
- B) Na LSTM, a porta de saída decide o que do estado passa adiante.
- C) A GRU resolve a explosão, mas não o desvanecimento, por ter fundido duas portas.
- D) Embeddings sozinhos não resolvem a ordem; depende de como são combinados.
