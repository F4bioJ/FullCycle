# Quizz — Datasets

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 6
**Base:** material da aula

---

## 1. Uma equipe criou uma triagem de tickets com LLM, ainda não lançada, e quer começar a avaliá-la esta semana. Pelo que a aula propõe, qual é o caminho mais adequado para obter os casos de teste?
- A) Adiar a avaliação até acumular execuções reais, porque os dados de produção refletem melhor o uso do sistema.
- B) Pedir a uma IA, com um prompt bem construído, um conjunto de exemplos que cubra as variações que importam.
- C) Rodar um A/B testing em produção, que dispensa dataset porque usa o comportamento real como evidência.
- D) Usar um LLM as Judge com rubrica, que avalia a resposta direto e por isso não depende de casos preparados.

## 2. Um time tem meses de logs de um assistente de revisão de código e cogita, em vez disso, gerar exemplos com IA. Qual afirmação sobre as duas fontes de dataset está de acordo com a aula?
- A) Os exemplos gerados por IA é que precisam de normalização; os logs já saem no formato da aplicação e entram como estão.
- B) Os exemplos gerados por IA refletem melhor o uso real, já que o prompt pede os casos que a equipe considera típicos.
- C) As duas fontes precisam ser combinadas no mesmo dataset, já que cada uma cobre a lacuna da outra.
- D) Os logs tendem a refletir melhor o uso real, mas precisam ser normalizados para a estrutura usada na avaliação.

## 3. Uma nova versão do prompt de revisão de código Go teve um resultado agregado só um pouco pior que a anterior no dataset de cerca de 18 exemplos. Como os metadados de cada exemplo (tópico e categoria) ajudam nesse caso?
- A) Permitem filtrar e agrupar os resultados por categoria, mostrando, por exemplo, se a queda se concentra em robustez.
- B) Servem de referência para o Code Evaluator, que compara a categoria prevista com a categoria registrada no exemplo.
- C) Substituem o output esperado nos casos sem ground truth, já que indicam o tipo de problema que o código contém.
- D) Definem os pesos do Composite Evaluator, dando mais peso às categorias que tiveram mais exemplos no dataset.

## 4. Um Code Evaluator vai rodar sobre o dataset de revisão de código Go da aula. Qual é o papel do campo `output` de cada exemplo nesse processo?
- A) Guardar a resposta que o prompt deu na última execução, para comparar a versão nova com a anterior.
- B) Descrever o formato JSON exigido, que a validação de schema usa para aceitar ou recusar a saída.
- C) Registrar a resposta esperada, a referência contra a qual a saída gerada pelo prompt será comparada.
- D) Armazenar o score que o evaluator atribuiu ao caso, para depois compor as métricas agregadas.

## 5. Sobre o dataset de análise de código montado no LangSmith, qual afirmação está INCORRETA?
- A) O input de cada exemplo já inclui a instrução da tarefa, e ainda assim é preciso um prompt entre os dados e a IA.
- B) Tópico e categoria fazem parte do que o prompt deve devolver no output, ao lado dos findings e do summary.
- C) O LangSmith é a ferramenta usada na aula, mas o dataset também poderia ser montado em outra ou à mão.
- D) Os findings esperados trazem o problema com linha, descrição e severidade, e o summary resume as correções.
