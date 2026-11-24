# Quizz — F1

**Capítulo:** 8 - Evaluation Comparativa · **Aula:** 3
**Base:** material da aula

---

## 1. Duas versões de um prompt que revisa código foram testadas. A versão X teve precision 0,90 e recall 0,40; a versão Y teve precision 0,65 e recall 0,65. A soma das duas métricas é igual (1,30) nas duas versões. Como o F1 trata essa comparação?
- A) X vence, porque a precision muito alta compensa o recall baixo na combinação das duas métricas.
- B) Empatam, porque a soma é igual e o F1 junta as duas métricas somando-as em um número.
- C) Y vence, porque a fórmula 2·P·R/(P+R) reflete a proporção entre elas, e X está desbalanceado.
- D) Y vence, porque o F1 prioriza o recall para que menos bugs reais deixem de ser encontrados.

## 2. Um colega propõe ajustar o prompt de revisão de código até chegar a 100% de precision e 100% de recall ao mesmo tempo. Segundo o professor, por que isso raramente acontece?
- A) Porque o recall exige conhecer os bugs reais do código, e um conjunto de testes costuma omitir alguns, travando a métrica abaixo de 100%.
- B) Porque uma enfraquece a outra: um prompt estrito erra pouco, mas deixa passar casos; um aberto acha quase tudo, mas traz muitos falsos bugs.
- C) Porque um prompt estrito derruba a precision ao acusar bugs inexistentes, enquanto um prompt aberto derruba o recall ao ignorar bugs reais.
- D) Porque precision e recall avaliam tarefas distintas, a de achar bugs e a de classificar os já achados, e não se otimizam no mesmo prompt.

## 3. Um time mede o revisor de código com precision 0,61 e recall 0,7, e o F1 resulta em cerca de 0,65. Qual leitura desse F1 é coerente com a aula?
- A) Indica que 65% dos bugs reais do código foram encontrados, já descontando os alertas falsos que o sistema emitiu.
- B) Indica a proporção de alertas de bug que estavam certos, ajustada pelos bugs reais que passaram sem ser vistos.
- C) Indica que o prompt está aprovado, porque um F1 acima de 0,5 é o patamar de qualidade para uso em produção.
- D) Indica o equilíbrio entre achar a maioria dos bugs e errar menos ao acusar bugs que não existem no código.
