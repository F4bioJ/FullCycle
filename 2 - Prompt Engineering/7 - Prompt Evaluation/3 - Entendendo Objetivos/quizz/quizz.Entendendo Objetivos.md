# Quizz — Entendendo Objetivos

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 3
**Base:** material da aula

---

## 1. Num assistente com RAG, a busca traz um documento desatualizado que diz que o plano custa R$ 50; o preço atual, registrado na referência de teste, é R$ 60. O assistente responde "R$ 50" e mostra o link do documento. Como essa saída se sai nos objetivos da aula?
- A) Falha nos dois: um valor desatualizado é alucinação, e uma saída que alucina não é fiel ao contexto.
- B) Vai bem em faithfulness, pois segue o trecho recuperado, mas falha em correctness diante da referência.
- C) Vai bem nos dois: o link dá grounding à resposta, e a resposta com grounding bate com a referência.
- D) Falha em groundedness, pois o link aponta para um documento antigo, mas vai bem em faithfulness.

## 2. Um assistente responde a um usuário iniciante com três linhas corretas e diretamente ligadas à pergunta, mas cheias de jargão; o usuário não entende o que fazer. Qual item da checklist capta essa falha?
- A) Conciseness, porque a resposta curta demais deixou de fora a explicação de que o usuário precisava.
- B) Relevance, porque uma resposta que o usuário não entende deixa de responder à solicitação feita.
- C) Correctness, porque a referência de uma boa resposta inclui ser clara para o público que pergunta.
- D) Helpfulness, porque ser correto e objetivo não garante que o usuário entenda e ache a resposta útil.

## 3. Uma equipe escreveu objetivos para avaliar um prompt e associou cada um a um termo da checklist. Qual associação está INCORRETA?
- A) "O retorno precisa passar no schema JSON que o serviço seguinte consome" → format adherence.
- B) "A versão nova não pode aumentar a latência nem o custo em tokens por chamada" → efficiency.
- C) "A resposta precisa indicar o trecho do manual de onde tirou a informação" → correctness.
- D) "Perguntado sobre o melhor político, o assistente não deve tomar um dos lados" → bias.

## 4. Dois prompts, A e B, rodam sobre as mesmas entradas, e revisores escolhem, em cada par de respostas, "qual ficou melhor", sem nada além disso. A vence em 70% dos pares. Qual é o problema dessa avaliação pairwise?
- A) Sem critério definido, não se sabe em que A foi melhor: mais correto, mais curto, mais útil ou outro.
- B) A pairwise exige uma resposta de referência por entrada, e sem ela o resultado não diz qual acertou.
- C) As versões deveriam rodar sobre entradas diferentes, para que uma não seja favorecida pelos casos.
- D) A pairwise mede a eficiência das versões, e não a qualidade, então não diz qual responde melhor.

## 5. Um FAQ tem, para cada pergunta de teste, a resposta aprovada pelo jurídico. Um assistente de brainstorming não tem respostas certas para comparar. Em qual dos dois correctness faz sentido como objetivo, e por quê?
- A) Nos dois, porque correctness verifica se a saída não alucina, e isso independe de existir referência.
- B) No brainstorming, se cada ideia vier com um link, porque o link serve como a referência que ele exige.
- C) No FAQ, porque correctness compara a saída com uma referência do que é certo, e lá ela existe.
- D) No brainstorming, rodando duas versões do prompt, porque correctness compara as duas e aponta a melhor.
