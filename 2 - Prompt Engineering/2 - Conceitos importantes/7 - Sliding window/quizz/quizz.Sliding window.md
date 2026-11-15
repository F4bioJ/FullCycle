# Quizz — Sliding window

**Capítulo:** 2 - Conceitos importantes · **Aula:** 7
**Base:** material da aula

---

## 1. Um sistema de chat usa sliding window de 4.000 tokens. Quando a conversa ultrapassa esse limite, as mensagens mais antigas saem da janela. O desenvolvedor decide apenas descartá-las sem arquivar. Qual é a consequência operacional mais provável dessa escolha?
- A) A capacidade de retomar a sessão dias depois com o mesmo contexto é perdida permanentemente.
- B) A latência da resposta cai, porque o prompt fica menor a cada turno.
- C) O custo de inferência aumenta, pois o sistema precisa reprocessar o histórico descartado.
- D) O modelo passa a alucinar mais, pois perde o acesso aos fatos iniciais da conversa.

## 2. Uma equipe usa sliding window no histórico do chat e arquiva a curto prazo o que sai da janela. Que papel a sumarização, vista na aula anterior, tem nesse desenho?
- A) É a etapa que faz a janela deslizar: sem resumir o que sai, o limite de tokens não é respeitado.
- B) Substitui o arquivamento: o resumo passa a ser o armazenamento de longo prazo do histórico.
- C) Atua dentro da janela: o modelo resume as mensagens recentes para caber mais conteúdo novo.
- D) É um uso possível do que foi arquivado: a janela só decide o que fica, e o resumo vem depois.

## 3. Um assistente usa sliding window e arquiva no S3 tudo o que sai da janela. Depois de 40 turnos, o usuário pergunta sobre uma decisão da primeira mensagem, e o modelo responde como se ela nunca tivesse existido. Qual é a causa mais provável?
- A) O arquivamento falhou: com o histórico salvo no S3, o modelo conseguiria consultá-lo por conta própria.
- B) Arquivar guarda o conteúdo, mas o modelo só vê o que está dentro da janela naquele turno.
- C) A janela deslizou para trás e passou a priorizar as mensagens mais antigas da conversa.
- D) O arquivamento a longo prazo trocou o histórico por um resumo, e os detalhes se perderam.
