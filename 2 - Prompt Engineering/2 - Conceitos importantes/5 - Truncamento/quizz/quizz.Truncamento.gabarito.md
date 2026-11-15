# Gabarito — Truncamento

## 1. Truncamento simples remove do início cronológico, podendo apagar instruções críticas se não houver faixa reservada.
**Correta: B**
**Por quê:** O truncamento simples remove mensagens do início cronológico da conversa. Se as instruções críticas estão no início absoluto do prompt, elas serão as primeiras a serem cortadas quando o histórico crescer, a menos que haja uma estratégia explícita de preservação fixa (como reservar uma faixa inicial intocável).
- **A:** Contradiz a aula: o truncamento padrão remove do início; preservar instruções exige estratégia deliberada, não comportamento padrão.
- **C:** O modelo não 'ignora' instruções; se elas forem truncadas, simplesmente deixam de estar no contexto.
- **D:** Truncamento foi feito para evitar exatamente esse erro; ele corta mensagens (até no meio) para caber na janela.
**Conceito:** Estratégia de corte vs preservação fixa

## 2. Cortar mensagem no meio remove o contexto causal, fazendo o modelo tratar o fragmento como nova informação.
**Correta: C**
**Por quê:** A aula explica que, ao cortar no meio de uma mensagem, o modelo 'passa a enxergar apenas o trecho remanescente e perde a cadeia causal anterior'. Sem o contexto que justificava ou antecedia aquele trecho, o modelo processa o fragmento como se fosse o início da interação, podendo repetir ou contradizer informação já dada.
- **A:** Não há máscara automática de atenção para tokens truncados; eles simplesmente não estão na entrada.
- **B:** O corte não corrompe embeddings de posição; os tokens remanescentes mantêm suas posições relativas no que foi enviado.
- **D:** O modelo não 'detecta truncagem' nem reconstrói ativamente; ele apenas processa o que recebe.
**Conceito:** Corte parcial e perda de continuidade causal

## 3. Truncamento resolve o limite da janela, mas não garante relevância do que fica.
**Correta: A**
**Por quê:** A aula diz que cortar contexto resolve o problema de caber na janela, mas não resolve automaticamente o de manter relevância; quando o histórico antigo contém dependências importantes, truncar pode degradar a resposta. Por isso o ponto de corte precisa acompanhar o objetivo da aplicação e o tipo de informação que não pode ser perdido.
- **B:** Contradiz a aula: o truncamento não preserva significado automaticamente e não distingue o que é relevante; ele só corta para caber.
- **C:** Quem foi cortado deixa de estar no contexto; o modelo só enxerga o trecho remanescente e perde a cadeia causal anterior.
- **D:** A aula afirma que truncar não é só jogar fora o antigo: há estratégias diferentes, como preservar uma faixa inicial crítica e cortar em outra região.
**Conceito:** Truncamento não é solução universal
