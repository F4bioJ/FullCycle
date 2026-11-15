# Quizz — Context Window vs memória, custo e latência

**Capítulo:** 2 - Conceitos importantes · **Aula:** 3
**Base:** material da aula

---

## 1. Um sistema usa um modelo com janela de 128k tokens. O engenheiro dobra o contexto médio por requisição de 4k para 8k tokens. Considerando apenas o custo computacional de atenção (O(n²)), qual é o impacto aproximado no processamento por token gerado?
- A) Quadruplica o custo, pois a atenção compara cada token com todos os outros.
- B) Dobra o custo, pois a relação é linear com o número de tokens.
- C) Aumenta 8 vezes, pois o reprocessamento iterativo soma O(n) a cada passo.
- D) Permanece igual, pois o cache interno reaproveita quase toda a computação anterior.

## 2. Você precisa classificar e-mails curtos (média de 50 tokens) em 'spam' ou 'ham'. Dois modelos estão disponíveis: Modelo A (7B parâmetros, janela 4k) e Modelo B (70B parâmetros, janela 128k). Qual escolha equilibra melhor qualidade, custo e latência para essa tarefa?
- A) Modelo A, mas apenas se você truncar o prompt para 1k tokens; caso contrário, o Modelo B fica mais rápido.
- B) Modelo B, pois modelos maiores têm cache interno mais eficiente e compensam o custo extra.
- C) Modelo B, porque janela maior permite incluir mais exemplos no few-shot e melhora a acurácia.
- D) Modelo A, pois a tarefa é simples, cabe na janela menor e evita custo e latência desnecessários do modelo maior.

## 3. Um chatbot mantém histórico de 20 turnos (≈3k tokens). Ao adicionar um sistema de cache de prompt prefixado, a latência cai 30% nas primeiras requisições, mas retorna ao patamar original nas subsequentes. Qual a causa mais provável?
- A) Cada nova resposta do assistente altera o sufixo do contexto, gerando cache miss no bloco prefixado.
- B) O cache de prefixo só funciona na primeira inferência; turnos seguintes invalidam a chave de cache.
- C) O cache armazena apenas embeddings estáticos; a atenção recalcula pesos a cada token novo.
- D) O modelo troca para processamento não-cacheado quando o contexto ultrapassa 2k tokens.

## 4. Qual das seguintes afirmações sobre eficiência de prompt NÃO é suportada pela aula?
- A) Escolher modelo com janela menor para tarefas simples evita superdimensionamento de infraestrutura.
- B) Usar batch prompting (agrupar várias tarefas em uma chamada) elimina o reprocessamento iterativo dos tokens.
- C) Sumarizar o contexto antes de enviá-lo ao modelo diminui o n efetivo da atenção O(n²).
- D) Truncar histórico antigo reduz memória, custo e latência simultaneamente.

## 5. Durante a geração de uma resposta longa, você observa que a latência por token aumenta progressivamente. Se você ativar uma opção que limita a resposta a 256 tokens (em vez de deixar ilimitado), qual efeito direto isso tem no custo computacional total daquela requisição?
- A) Não altera o custo total, pois o modelo já pré-aloca o máximo da janela de contexto.
- B) Reduz apenas a latência do primeiro token; o custo por token subsequente permanece idêntico.
- C) Reduz o custo total, pois evita que n cresça até valores onde O(n²) domina.
- D) Aumenta o custo total, pois o modelo gasta mais computação tentando comprimir a resposta.
