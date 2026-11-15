# Quizz — Context Window para Prompt Engineering

**Capítulo:** 2 - Conceitos importantes · **Aula:** 2
**Base:** material da aula

---

## 1. Você está projetando um agente que processa contratos jurídicos longos. O modelo escolhido tem janela de 128k tokens. Ao somar system prompt, histórico da conversa e o documento completo, o total excede 128k tokens. Segundo a aula, qual é a consequência direta?
- A) Parte da informação deixa de ser considerada pelo modelo, afetando a qualidade da resposta.
- B) O modelo trunca automaticamente o meio do documento, preservando início e fim.
- C) O tokenizer comprime o texto para que tudo caiba na janela sem perdas.
- D) O modelo retorna erro explícito informando que o limite foi excedido.

## 2. Sua equipe avalia dois modelos para um chatbot de suporte interno: Modelo X (janela 8k, custo baixo, roda on-premise) e Modelo Y (janela 1M, custo 20× maior, só API). O histórico médio de conversa é 2k tokens. Qual critério deve pesar na escolha?
- A) Modelo Y, porque janela maior garante que nunca perca contexto, eliminando necessidade de engenharia de prompt.
- B) Modelo X, se o custo e a latência de API forem restrições reais e 8k já cobre system prompt + histórico + resposta com folga.
- C) Modelo Y, porque modelos com janela maior têm melhor raciocínio em tarefas curtas, mesmo sem usar a janela extra.
- D) Modelo X, mas apenas se você implementar RAG; caso contrário, a janela pequena impede qualquer conversa de múltiplas rodadas.

## 3. Em um pipeline que anexa trechos de documentação técnica ao prompt do usuário, o system prompt tem 1.5k tokens, a documentação recuperada 50k tokens, e o modelo tem janela de 32k tokens. As respostas param de citar a API mais recente que estava na documentação. O que a aula explica sobre essa situação?
- A) O modelo prioriza o system prompt e descarta documentação quando a soma passa de 50% da janela.
- B) A janela de 32k conta apenas tokens da mensagem do usuário; system prompt e documentação têm limites separados.
- C) A soma dos componentes (system prompt + documentação) excede a janela única de 32k, então parte da informação deixa de ser considerada pelo modelo.
- D) O retriever falhou ao não colocar a API recente no top-k enviado ao modelo.
