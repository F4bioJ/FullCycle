# Quizz — O que devemos avaliar

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 2
**Base:** material da aula

---

## 1. Uma equipe reescreveu o prompt de um assistente e quer saber se a nova versão é melhor. Para agilizar, rodou o prompt novo no modelo mais recente e deixou o prompt antigo no modelo que já estava em uso. A nota do novo foi maior. Por que esse resultado diz pouco sobre a qualidade do prompt?
- A) Trocar de modelo é incomum em evaluation, então os testes com modelos diferentes costumam ser descartados pela equipe.
- B) Cada modelo precisa de um dataset próprio, e a equipe usou entradas parecidas nos dois testes, o que distorce a nota.
- C) Mudaram duas variáveis juntas, prompt e modelo, então a diferença de nota não pode ser atribuída à instrução.
- D) Avaliar prompt mede o custo da execução, e a equipe comparou a qualidade da resposta, que depende do modelo.

## 2. Um time de suporte já tem duas versões de prompt e começou a avaliação escolhendo quais tipos de teste rodar e quem vai julgar as saídas, sem discutir por que está avaliando. Segundo a aula, qual é o risco dessa ordem?
- A) Como existem muitos tipos de avaliação e de avaliadores, sem um objetivo claro o time escolhe o como e o quem sem ter um critério para isso.
- B) O time perde a possibilidade de testar em produção, porque esse tipo de teste exige que o avaliador seja definido antes dos demais pontos.
- C) Quem avalia define quais tipos de teste existem, então decidir o avaliador por último limita as opções de avaliação do time.
- D) O objetivo é a etapa mais simples, porque costuma ser óbvio, e o risco real está em escolher o avaliador errado.

## 3. Ao avaliar o prompt A e o prompt B, uma equipe rodou o A em 50 exemplos e o B em outros 50 exemplos, escolhidos separadamente. O B teve notas melhores. Por que essa comparação é fraca?
- A) Faltou testar os dois prompts em produção, que é a forma de comparação indicada pela aula para saber qual prompt é melhor.
- B) Faltou definir a análise, porque sem ela o critério de melhor ou pior não existe e a nota do B não significa nada.
- C) Cada prompt deve ter um dataset próprio, ajustado ao seu estilo, e o B provavelmente se saiu melhor por acaso.
- D) Entradas diferentes misturam o efeito do prompt com o dos casos, e um dataset comum dá a mesma entrada para confrontar as saídas.
