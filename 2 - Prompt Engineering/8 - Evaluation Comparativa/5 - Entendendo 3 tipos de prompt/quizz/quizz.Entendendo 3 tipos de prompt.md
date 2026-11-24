# Quizz — Entendendo 3 tipos de prompt

**Capítulo:** 2.8 - Evaluation Comparativa · **Aula:** 2.8.5
**Base:** material da aula

---

## 1. Um colega quer comparar os prompts agressivo e conservador. Ele roda o agressivo nos 30 primeiros itens do dataset e o conservador nos 30 seguintes, cada um contra o seu ground truth. O conservador sai com precision maior. Qual é a principal fraqueza dessa conclusão?
- A) Nenhuma relevante: como cada trecho tem o seu ground truth, as métricas ficam comparáveis mesmo entre subconjuntos diferentes.
- B) O prompt deixou de ser a única variável: a diferença pode vir dos trechos de código, que mudaram junto com o prompt.
- C) O ground truth do conservador precisaria ser mais restrito, porque esse prompt foca em três vulnerabilidades críticas.
- D) O conservador deveria ser medido por recall, e não por precision, porque o professor o escreveu para ter recall mais alto.

## 2. Num time, cada alerta indevido do code review custa horas de triagem, e deixar passar alguns bugs menores é aceitável. Qual prompt da aula combina com esse cenário, e qual métrica ele tende a favorecer?
- A) O agressivo, que favorece precision, porque suspeitar de tudo e ser extremamente rigoroso deixa os alertas mais confiáveis.
- B) O balanceado, porque o limiar de 80% de confiança deixa precision e recall equilibrados no ponto de que o time precisa.
- C) O conservador, que favorece recall, porque reporta o que tem 100% de certeza e assim acerta mais bugs reais.
- D) O conservador, que favorece precision, porque prefere não reportar nada a gerar um falso positivo na revisão.

## 3. Você quer reaproveitar o prompt balanceado num dataset novo, de código Go em que quase todos os bugs são de concorrência. Por que trocar o dataset e manter o prompt como está é arriscado?
- A) As prioridades do prompt, os exemplos few-shot e a checklist foram escolhidos pelos tipos de problema do dataset original.
- B) O limiar de 80% de confiança foi calculado a partir do dataset original e perde a validade quando o tipo de bug muda.
- C) O risco é pequeno: o limiar de 80% de confiança não depende do tipo de bug, então o prompt se adapta ao dataset novo.
- D) O prompt balanceado exige 100% de certeza para reportar, e bugs de concorrência raramente chegam a esse nível de evidência.

## 4. O prompt balanceado analisa uma função e chega a quatro candidatos a finding. Pelas regras que ele recebeu, qual deve ser reportado?
- A) Uma possível SQL injection, com 85% de confiança, deduzida do nome da função, sem conferir se a entrada chega à consulta.
- B) Um nome de variável fora do padrão, com 90% de confiança, num caso que o próprio time considera de fronteira.
- C) Uma consulta ao banco feita dentro de um loop (N+1), visível no código, com 82% de confiança.
- D) Uma possível lentidão, com 88% de confiança, porque a função parece fazer coisa demais, mas sem um padrão específico.

## 5. Alguém enxuga o prompt balanceado: tira os exemplos few-shot e a checklist e deixa só "analise o código Go e reporte o que tiver 80% ou mais de confiança". Qual é o efeito mais provável?
- A) Pouco muda, porque o limiar de 80% de confiança já define sozinho o que conta como finding em cada categoria.
- B) O modelo perde a referência do que conta como problema em cada categoria e passa a decidir com mais ambiguidade.
- C) Ele passa a se comportar como o agressivo, porque sem a checklist o limiar de confiança deixa de ser respeitado.
- D) O efeito fica restrito ao formato da resposta, porque o few-shot serve para mostrar como o output deve sair.
