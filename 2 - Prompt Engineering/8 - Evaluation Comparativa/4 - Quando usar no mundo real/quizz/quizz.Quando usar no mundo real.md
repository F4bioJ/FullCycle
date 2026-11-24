# Quizz — Quando usar no mundo real

**Capítulo:** 8 - Evaluation Comparativa · **Aula:** 2.8.4
**Base:** material da aula

---

## 1. Duas equipes querem avaliar prompts. A equipe 1 classifica conversas em "usuário bravo" ou não, com um rótulo esperado para cada uma. A equipe 2 quer medir a qualidade do código que o modelo gera. Qual escolha de métrica é a mais coerente com a aula?
- A) F1 para as duas, porque o prompt influencia a classificação nos dois casos e a fórmula não muda de uma tarefa para outra.
- B) F1 para a equipe 1, onde acertos e erros são medidos de forma objetiva; a equipe 2 precisa de outro tipo de avaliação.
- C) F1 para a equipe 2, porque qualidade de código também vira sim ou não, e o F1 captura bem a parte qualitativa.
- D) F1 para a equipe 1, porque o LLM identifica o humor; em classificações tradicionais ele não se aplicaria.

## 2. O F1 do prompt caiu de 0,65 para 0,40 no mesmo dataset, e a equipe não sabe se a nova versão perde casos reais ou inventa casos. O que a aula permite concluir?
- A) O F1 baixo indica que o prompt inventa casos, pois quem perde casos reais ainda teria um F1 alto.
- B) O F1 baixo sugere rótulos ruins no dataset, pois precision e recall dependem do rótulo, e o prompt não precisa ser revisto.
- C) Há desequilíbrio, e olhar precision e recall separados mostra se o problema é perder casos ou inventar casos.
- D) O F1 baixo indica que o prompt perde casos, pois a precision baixa pesa pouco no F1, ao contrário do recall.

## 3. Um desenvolvedor ajusta o prompt, confere cinco conversas, vê que melhorou e quer publicar sem rodar um dataset. Qual argumento do professor responde melhor?
- A) Evaluation só se justifica quando o prompt vai para produção; durante o desenvolvimento, conferir casos à mão já equivale a testes.
- B) O F1 resume acertos e erros de um dataset, então um valor alto medido uma vez já garante o prompt nas mudanças futuras.
- C) O prompt é sensível, então o ideal é evitar mudanças, já que evaluation só mede o estado atual e não ajuda ao longo do tempo.
- D) Sem medir acertos e erros num dataset, nada garante o prompt no tempo, como software sem testes, e ele é sensível.
