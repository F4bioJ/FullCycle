# Quizz — Truncamento

**Capítulo:** 2 - Conceitos importantes · **Aula:** 5
**Base:** material da aula

---

## 1. Um sistema de chat mantém instruções de sistema críticas nos primeiros 1.200 tokens do prompt. Ao atingir o limite da janela de contexto, o desenvolvedor implementa truncamento simples que sempre remove as mensagens mais antigas do histórico. Qual é o resultado mais provável?
- A) As instruções de sistema são preservadas porque o truncamento padrão nunca toca no início do prompt.
- B) As instruções de sistema serão cortadas assim que o histórico ultrapassar o espaço restante, pois o truncamento simples remove do início cronológico.
- C) O modelo ignorará automaticamente as instruções de sistema e usará apenas o histórico recente para responder.
- D) O truncamento falhará com erro de limite excedido, pois não consegue remover mensagens parciais.

## 2. Durante o truncamento, uma mensagem longa do usuário é cortada no meio, mantendo apenas sua segunda metade. O modelo gera uma resposta que repete informação já contida na primeira metade removida. Qual mecanismo explica esse comportamento?
- A) A janela de atenção mascara automaticamente tokens truncados, forçando o modelo a gerar com base apenas no que resta visível.
- B) O corte no meio da mensagem corrompe os embeddings de posição, fazendo o modelo perder a noção de ordem dos tokens.
- C) Sem a cadeia causal anterior, o modelo trata o trecho remanescente como nova entrada e responde como se aquela informação estivesse sendo apresentada pela primeira vez.
- D) O modelo detecta a truncagem e tenta reconstruir o contexto perdido alucinando o trecho faltante.

## 3. Um assistente jurídico usa truncamento que remove sempre as mensagens mais antigas quando o histórico estoura a janela de contexto. O usuário pede que ele cite um precedente discutido 50 mensagens atrás, que já foi cortado. Qual afirmação descreve melhor o que a aula ensina sobre essa situação?
- A) O truncamento resolve o problema de caber na janela, mas não garante relevância: o precedente antigo se perde e a resposta pode degradar, então o ponto de corte deve acompanhar o que não pode ser perdido.
- B) O truncamento só descarta o que é irrelevante, então o precedente antigo permanece no contexto e a resposta não é afetada.
- C) O modelo reconstrói o precedente cortado a partir do restante da conversa, pois o truncamento mantém o significado das partes removidas.
- D) Não há alternativa: truncar significa sempre apagar as mensagens mais antigas, e a estratégia de corte não pode ser ajustada ao objetivo da aplicação.
