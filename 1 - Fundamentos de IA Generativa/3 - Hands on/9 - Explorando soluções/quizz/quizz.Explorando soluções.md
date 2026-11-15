# Quizz — Explorando soluções

**Capítulo:** 3 - Hands on · **Aula:** 9
**Base:** material da aula

---

## 1. Uma startup tem um chatbot com respostas amplas e fora do formato que o produto precisa. O prazo é curto e não há time de machine learning. Segundo a aula, por onde começar, e por quê?
- A) Pelo fine-tuning, porque respostas fora do formato vêm dos pesos, e ajustá-los resolve a causa do problema.
- B) Pelo RAG, porque resposta ampla indica falta de documentos, e recuperar contexto estreita o que o modelo diz.
- C) Pelo prompt, porque ele muda o comportamento da saída sem mexer em pesos, com menos custo e menos tempo.
- D) Pela temperatura, porque formato e amplitude dependem da aleatoriedade, e um valor baixo tende a fechar a resposta.

## 2. Uma equipe refinou por semanas um prompt que faz o modelo responder no padrão da empresa. Um colega faz a mesma pergunta pela API sem enviar esse prompt e recebe uma resposta genérica. O que explica isso?
- A) O prompt orienta a geração da chamada em que é enviado e não altera os pesos; sem ele, o modelo responde como antes.
- B) O prompt ajusta os pesos durante a sessão; quando a sessão muda, o modelo é restaurado à sua versão original.
- C) O modelo guarda o prompt na janela de contexto entre as chamadas, mas ele já tinha saído dela nessa pergunta.
- D) O modelo incorporou o padrão nos pesos, mas a variação entre execuções fez esta resposta sair diferente.

## 3. Depois de vários testes, um prompt bem especificado não leva o modelo ao comportamento que o negócio precisa, mesmo com toda a informação necessária à mão. A empresa aceita investir. Qual é o próximo passo coerente com a aula?
- A) Adotar RAG, porque recuperar mais documentos sobre o assunto muda a forma de o modelo se comportar.
- B) Subir a temperatura, porque mais abertura ao inesperado aproxima o modelo do comportamento pedido.
- C) Seguir alongando o prompt, porque o custo de mais instruções é menor do que o das outras saídas.
- D) Avaliar fine-tuning, porque agora é preciso adaptar o modelo, e o ganho pode justificar o custo.

## 4. Um assistente interno tem um prompt bem estruturado, mas responde com regras antigas sobre uma política de férias que mudou na semana passada. O que esse sintoma indica?
- A) A instrução ainda está aberta demais: especificar melhor tema, formato e tom vai trazer a regra nova.
- B) Falta informação externa ao prompt: o problema é acesso a conteúdo, e o RAG é a estratégia indicada.
- C) A temperatura está alta: com um valor menor, o modelo escolhe os tokens prováveis e acerta a regra nova.
- D) Falta fine-tuning: ajustar o modelo às mudanças de política é o jeito mais barato de mantê-lo atualizado.

## 5. Uma pessoa reescreve um pedido genérico em frases mais elegantes e mais longas, mas não acrescenta limite, formato nem foco. O que esperar, segundo a aula?
- A) A resposta melhora bastante, porque um texto mais longo dá à atenção mais contexto para relacionar com o pedido.
- B) A resposta segue pouco direcionada, porque o ganho vem de especificar o pedido, não de o texto soar melhor.
- C) A resposta fica mais precisa, porque o modelo espelha a qualidade do que recebe e varia menos entre execuções.
- D) A resposta fica no mesmo nível, porque é o retreino com exemplos que muda o que o modelo entrega a um pedido.

## 6. Uma equipe baixa a temperatura para 0,1 porque as respostas vinham genéricas. Elas ficam estáveis, mas continuam genéricas. O que explica isso?
- A) Temperatura baixa favorece tokens improváveis, e isso desloca a resposta para um conteúdo sem foco.
- B) Temperatura baixa encurta a janela de tokens, e o modelo perde o contexto necessário para detalhar.
- C) Temperatura alta era o que dava foco, porque abrir o leque de tokens aproxima a resposta do tema.
- D) Temperatura ajusta a escolha entre tokens, e a direção da resposta vem do que o prompt especifica.

## 7. Depois de estruturar melhor o prompt, um time roda a mesma geração de código 10 vezes, e as saídas ainda diferem entre si. Qual conclusão é coerente com a aula?
- A) O prompt claro aproxima a saída do esperado, mas isso não é perfeição, e o grau de variação também depende do modelo.
- B) O prompt ainda está mal estruturado, porque uma instrução bem escrita tende a trazer as 10 saídas quase iguais.
- C) Os pesos estão instáveis, porque a variação entre execuções indica que o modelo precisa ser retreinado para a tarefa.
- D) O prompt claro define o formato da saída, mas não altera a variação, que depende do modelo usado na tarefa.

## 8. Um prompt detalhado tem três vezes mais tokens de entrada que o genérico que ele substituiu. O financeiro diz que isso contradiz a economia de tokens defendida na aula. Como responder?
- A) O financeiro está certo: a economia da aula vem de prompts curtos, e a entrada maior tende a aumentar o custo final.
- B) A conta se fecha na própria chamada: o prompt detalhado encurta a resposta, e a saída menor cobre a entrada maior.
- C) O que importa é o custo total até a resposta útil: menos tentativas e correções podem compensar a entrada maior.
- D) A economia de tokens vale para uso pessoal com créditos; em API paga, o que o prompt traz é precisão, não redução de custo.

## 9. Sobre o custo de prompts vagos em cenários diferentes, qual afirmação está INCORRETA?
- A) Em uma assinatura de chat já paga, repetir perguntas vagas pesa menos no bolso do que em outros planos.
- B) Em um plano com créditos mensais, cada tentativa descartada reduz o que sobra para resultados úteis.
- C) Em um plano grátis com tokens limitados, pedidos vagos adiantam o momento em que o uso acaba.
- D) Em um produto de alto volume, a ineficiência do prompt pesa menos, porque se dilui entre os usuários.

## 10. Cada atendente de uma empresa escreve o prompt do seu jeito, a cada conversa. A gestão quer descobrir se respostas mais simpáticas funcionam melhor e depois automatizar o fluxo. Qual é o obstáculo?
- A) Sem instruções explícitas e fixas, não dá para comparar os estilos nem reproduzir o resultado com consistência.
- B) Teste A/B vale para parâmetros numéricos como temperatura, e estilo de prompt não é variável que se possa medir.
- C) A variação entre execuções atrapalha a comparação, e os testes dependem de um fine-tuning prévio do modelo.
- D) O tom da resposta vem dos pesos, então mudar o estilo exige retreino, e o prompt não chega a alterá-lo.
