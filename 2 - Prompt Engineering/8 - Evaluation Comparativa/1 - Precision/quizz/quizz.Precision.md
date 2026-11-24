# Quizz — Precision

**Capítulo:** 8 - Evaluation Comparativa · **Aula:** 1
**Base:** material da aula

---

## 1. Um prompt de triagem roda sobre 40 logs, dos quais 15 são bugs de fato. Ele marca 12 logs como bug, e 9 dessas marcações estão corretas. Qual é a precision desse prompt?
- A) 60%, dividindo os 9 acertos pelos 15 bugs que de fato existem nos logs.
- B) 50%, somando aos 9 acertos os 3 alarmes indevidos e os 6 bugs perdidos.
- C) 75%, dividindo os 9 acertos pelos 12 logs que foram marcados como bug.
- D) 22,5%, dividindo os 9 acertos pelo total de 40 logs avaliados no dataset.

## 2. O time ajusta o prompt de detecção de bugs. A nova versão passa a ignorar alguns bugs reais que a anterior pegava, mas todas as marcações que ela ainda faz estão corretas. O que acontece com a precision da nova versão?
- A) Fica em 100%, porque a fórmula olha só para as marcações feitas e nenhuma delas é falso positivo.
- B) Cai, porque cada bug real deixado de fora entra no denominador da fórmula, junto com as marcações.
- C) Cai na proporção dos bugs perdidos, porque o numerador de true positives ficou menor que antes.
- D) Fica igual à da versão anterior, porque a quantidade de logs avaliados no dataset não mudou.

## 3. Depois de colocar em produção um prompt que classifica logs, a equipe de plantão reclama que passa horas investigando alertas de bug que, no fim, não eram bug. Qual leitura dessa situação é a correta?
- A) A precision deve estar alta, porque os bugs reais dos logs também estão sendo encontrados pelo prompt.
- B) Faltam true positives, e o prompt deveria sinalizar mais itens como bug para a precision subir.
- C) Os falsos positivos afetam a confiança da equipe, mas não entram no cálculo da precision do prompt.
- D) A precision deve estar baixa, porque boa parte do que o prompt devolve como bug são falsos positivos.

## 4. Dois prompts são avaliados no mesmo dataset de logs. O prompt X sinaliza qualquer indício de erro; o prompt Y só marca bug quando há uma falha clara no log. Qual afirmação é a mais defensável?
- A) X tende a ter precision maior, porque, ao sinalizar mais itens, acaba acertando mais bugs reais.
- B) Y tende a ter precision maior, mas esse número sozinho não mostra quantos bugs reais ele deixou passar.
- C) Os dois terão a mesma precision, porque com o mesmo dataset a métrica depende dos logs e não do prompt.
- D) Y tende a ter precision menor, porque devolver menos alertas reduz os true positives do numerador.

## 5. Um relatório de avaliação informa apenas que o prompt v3 tem precision de 0,95 num dataset de logs. Qual conclusão esse número sustenta?
- A) Quando o v3 acusa um log como bug, quase sempre é bug de fato, com poucos alarmes indevidos.
- B) O v3 marcou como bug 95% dos logs do dataset e deixou os outros 5% sem marcação.
- C) O v3 classificou corretamente 95% de todos os logs do dataset, contando bugs e não bugs.
- D) O v3 marcou como bug 5% dos logs normais do dataset, que eram os seus falsos positivos.
