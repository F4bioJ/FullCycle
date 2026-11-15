# Quizz — Alucinação

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 17
**Base:** material da aula

---

## 1. Um usuário pergunta à LLM sobre um tema muito conhecido e depois sobre um tema obscuro, com poucos textos publicados. As duas respostas saem igualmente fluentes e seguras. Pela aula, o que isso revela?
- A) O tom seguro indica que o modelo achou fontes para os dois temas na base factual que consulta.
- B) O tom vem da previsão de tokens, que funciona igual nos dois temas, haja ou não conhecimento por trás.
- C) O modelo entende os dois temas, porque sua base de informação é tão grande que cobre até assuntos raros.
- D) No tema obscuro, o modelo detectou a falta de dados no treino e compensou gerando com mais cuidado.

## 2. Um time decide confiar nas respostas da LLM que vierem bem estruturadas e sem hesitação, e revisar só as confusas. Por que esse critério falha?
- A) Respostas confusas costumam estar certas, porque o modelo hesita justamente quando está conferindo os fatos.
- B) O modelo só soa seguro quando o prompt é direto, então o critério avalia o prompt e não o conteúdo da resposta.
- C) Respostas bem estruturadas tendem a ser alucinação contextual, que aparece sobretudo em textos mais longos.
- D) A fluência e a confiança vêm da previsão textual e aparecem do mesmo jeito quando o conteúdo é falso.

## 3. Qual associação entre caso e tipo de alucinação está INCORRETA?
- A) Uma conversa longa termina contradizendo premissas do começo → alucinação estrutural.
- B) O modelo sugere código que chama uma função inexistente da biblioteca → alucinação estrutural.
- C) O modelo atribui uma frase a Steve Jobs e indica um artigo que nunca existiu → alucinação de citação.
- D) O modelo afirma que Marie Curie ganhou três prêmios Nobel → alucinação factual.

## 4. Alguém pede à LLM "artigos científicos que comprovem que a Terra é plana" e recebe uma lista de títulos que, ao clicar, não existem. O que melhor explica esse resultado?
- A) O modelo viu muitos textos terraplanistas no treino e reproduziu os artigos que estavam nessa base.
- B) O modelo buscou na internet e encontrou páginas que saíram do ar depois que a resposta foi gerada.
- C) O pedido já supõe que os artigos existem, e o modelo completa o padrão esperado sem checar se existem.
- D) O tema exige combinar teorias que o modelo não aprendeu juntas, e ele preenche esse vazio com suposições.

## 5. Pela aula, qual destes fatores NÃO é apontado como algo que favorece a alucinação?
- A) Falta de conhecimento específico sobre o tema nos dados de treinamento do modelo.
- B) Prompt com exemplos da resposta esperada, que prende o modelo a um formato fixo.
- C) Pergunta que exige combinar, por inferência, conteúdos que o modelo não aprendeu juntos.
- D) Tendência do modelo a parecer humano e agradável para manter o usuário usando.

## 6. Um usuário nota que, quando escreve pedidos longos, cheios de rodeios e cordialidade, a LLM responde com mais floreio e inclui detalhes sem base. Pela aula, o que melhor explica isso?
- A) O modelo é feito para parecer humano e agradar, e espelha o jeito do usuário, tentando convencer mesmo sem base.
- B) Pedidos longos levam à alucinação contextual, que aparece quando a conversa cresce e perde a correlação.
- C) O modelo percebe que não sabe a resposta e decide disfarçar com floreio, para não admitir que desconhece o tema.
- D) A cordialidade é registrada como aprovação, e o modelo aprende na própria conversa a dar respostas mais longas.

## 7. Uma equipe usa a mesma LLM para sugerir temas de posts internos e para redigir trechos de pareceres jurídicos. A taxa de erro do modelo é a mesma nas duas tarefas. Pela aula, como a equipe deve tratar isso?
- A) Com o mesmo nível de revisão nas duas, porque a taxa de erro é igual e é ela que mede o risco.
- B) Tirando a LLM dos pareceres, já que a aula conclui que ela não serve para o domínio jurídico.
- C) Revisando mais os pareceres: o mesmo erro pesa mais ali, e quem revisa precisa conhecer o tema.
- D) Trocando o modelo dos pareceres por um que alucine menos e mantendo a revisão leve dos posts.

## 8. Por que o professor liga a alucinação ao risco de um novo "inverno da IA"?
- A) A alucinação obriga a retreinar os modelos, e o custo desse retreino derruba o investimento no setor.
- B) Governos tendem a proibir modelos que alucinam, como fizeram com os primeiros sistemas especialistas.
- C) A alucinação mostra que as redes neurais chegaram ao limite técnico, como aconteceu com o perceptron.
- D) A cada erro percebido a confiança dos usuários cai, e o uso que sustenta o momento atual encolhe.

## 9. Um analista pede à LLM um relatório sobre um tema que conhece pouco e decide conferir cada afirmação depois. Qual ressalva da aula se aplica?
- A) Conferir tudo é muito difícil no volume e na fluência das respostas, então ele precisa conhecer o tema.
- B) A conferência pode ser trocada por pedir ao modelo a fonte de cada afirmação que entrar no relatório.
- C) Basta pedir ao próprio modelo que revise o relatório, porque ele consegue reconhecer os próprios erros.
- D) Os fatos recentes são o ponto fraco; o que é anterior ao treino tende a sair certo e pode entrar direto.

## 10. Por que a alucinação contextual tende a aparecer no fim de respostas ou de conversas longas?
- A) Depois de certo número de tokens, o modelo deixa de consultar a base factual que usava no começo.
- B) O modelo foi treinado quase só com textos curtos, então não aprendeu a sustentar um texto longo.
- C) A geração é token a token e, quanto mais longa, mais difícil manter a correlação com o começo.
- D) No fim da resposta, o modelo passa a priorizar agradar o usuário em vez de manter o tema original.
