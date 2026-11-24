# Quizz — Calculando as métricas

**Capítulo:** 2.8 - Evaluation Comparativa · **Aula:** 2.8.6
**Base:** material da aula

---

## 1. Num item do dataset, o modelo devolveu os findings {`sql_injection`, `n_plus_one`, `nome_ruim`} e o esperado era {`sql_injection`, `race_condition`}. Pela função da aula, quais contagens e métricas saem desse item?
- A) TP = 1, FP = 1 e FN = 2; precision de 0,5 e recall de 0,33.
- B) TP = 1, FP = 2 e FN = 1; precision de 0,5 e recall de 0,33.
- C) TP = 1, FP = 2 e FN = 1; precision de 0,33 e recall de 0,5.
- D) TP = 1, FP = 2 e FN = 2; precision de 0,33 e recall de 0,33.

## 2. Depois de rodar a evaluation, alguém reordena os exemplos do dataset por categoria antes de chamar a função de métricas, mas mantém a lista de outputs na ordem original. O que acontece com o resultado da evaluation?
- A) Cada output passa a ser comparado com o exemplo de outro item, e os scores saem sem refletir o prompt.
- B) Nada muda, porque interseção e diferença de conjuntos não dependem da ordem em que os itens aparecem.
- C) A precision é afetada e o recall não, porque o FP depende do que o modelo trouxe e o recall, do dataset.
- D) A função devolve 0 nos itens desalinhados, pelo mesmo tratamento usado quando o denominador é zero.

## 3. O modelo responde em texto livre ("encontrei um crash na linha 3") e o dataset guarda labels como `crash`. A função compara esses objetos brutos diretamente, e quase todos os itens saem com TP = 0, mesmo quando o modelo achou o problema certo. Qual é a causa mais provável?
- A) O prompt está conservador demais, e por isso o modelo deixa de reportar os bugs reais que o dataset esperava.
- B) O denominador zero está sendo tratado como 0, o que zera precision e recall nos itens em que o modelo acertou.
- C) A fórmula do F1 penaliza respostas em texto livre, porque combina precision e recall numa média que pune desequilíbrio.
- D) Os dois lados chegam em formatos diferentes, então a interseção fica vazia; é o que extract_predict e extract_expected evitam.

## 4. O prompt conservador devolve uma lista vazia de findings para um item cujo esperado é {`crash`}. O que a função da aula devolve para esse item, e como ler o resultado?
- A) A evaluation do lote é interrompida por divisão por zero, porque TP + FP é zero quando o modelo não traz nada.
- B) Precision 0, pelo tratamento do denominador zero, mesmo sem nenhum alarme falso; o recall 0 vem do `crash` perdido.
- C) Precision 1, porque o modelo não cometeu nenhum falso positivo; o recall 0 vem do `crash` que ficou sem ser reportado.
- D) Precision e recall ficam sem valor e o item é retirado da média, porque não houve nenhuma previsão para comparar.

## 5. Um colega sobe o dataset com o ground truth, roda a evaluation no LangSmith e espera ver precision, recall e F1 no painel. Pelo que a aula mostra, o que falta?
- A) Nada: com o ground truth no dataset, o LangSmith compara os outputs e calcula as três métricas por conta própria.
- B) Devolver o F1, que já combina precision e recall, para o LangSmith derivar as outras duas a partir dele.
- C) Uma função que calcula TP, FP e FN e devolve cada métrica num dicionário com score e comment para o LangSmith.
- D) Devolver as contagens de TP, FP e FN, para o LangSmith aplicar as fórmulas de precision, recall e F1 sobre elas.
