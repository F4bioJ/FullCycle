# Gabarito — Recall

## 1. Recall do exemplo de 20 logs da aula de precision
**Correta: B**
**Por quê:** recall = TP / (TP + FN). Havia 10 bugs reais e o prompt achou 8, então 2 escaparam (falsos negativos): 8 / (8 + 2) = 80%. Os 5 logs normais acusados são falsos positivos e só entram na precision, por isso o mesmo prompt tem precision de 61% e recall de 80%.
- **A:** 8 / 13 é a precision. O denominador do recall são os bugs reais (TP + FN), não os itens marcados (TP + FP).
- **C:** o recall não divide pelo total de logs; os 10 logs normais não fazem parte dos positivos que deveriam ser achados.
- **D:** somar FP e FN no denominador mistura as duas métricas; o recall ignora os alarmes falsos.
**Conceito:** fórmula do recall (TP / (TP + FN)) versus precision

## 2. Prompt mais restritivo e bugs que escapam
**Correta: D**
**Por quê:** exigir stack trace explícito torna o prompt mais restritivo: ele marca menos, e o que marca tende a estar certo (precision sobe). Os bugs que nunca foram marcados são falsos negativos, que derrubam o recall. É o trade-off da aula: mais restrição, mais confiabilidade e menos cobertura.
- **A:** confunde os erros. Bug real não marcado é falso negativo ("não acha"); falso positivo é acusar bug onde não há ("acha errado"). E o recall cai, não sobe.
- **B:** o denominador da precision é TP + FP; bugs não encontrados não entram nele. Com menos alarmes falsos, a precision sobe.
- **C:** ignora o trade-off: os bugs vistos em produção mostram que a cobertura caiu, então o recall piorou.
**Conceito:** falso negativo e trade-off precision × recall

## 3. Quando priorizar recall
**Correta: A**
**Por quê:** o resumo do professor diz que o recall ganha prioridade quando deixar um bug passar é mais grave do que investigar um alerta extra. No sistema de pagamentos, o falso negativo chega ao cliente e o falso positivo custa poucos minutos.
- **B:** o problema descrito é excesso de falsos positivos; aumentar o recall à custa de mais alarmes falsos pioraria o que já faz a equipe ignorar o canal.
- **C:** cada falso positivo vira uma alteração indevida em produção sem revisão, então o custo do alarme falso é alto e a precision pesa mais.
- **D:** é a perda de credibilidade por alertas incorretos, vista na aula de precision; mais alarmes falsos agravariam a desconfiança.
**Conceito:** custo do falso negativo versus custo do falso positivo

## 4. Afirmação INCORRETA sobre recall
**Correta: C**
**Por quê:** acusar poucos bugs, todos corretos, dá precision alta, não recall alto. Se havia muitos bugs reais e o prompt achou poucos, sobram muitos falsos negativos e o recall é baixo. Não ter falsos positivos é irrelevante para o recall. É o sistema "cuidadoso" que parece bom e deixa muitos casos passarem.
- **A:** verdadeira. As duas fórmulas têm TP no numerador; a precision soma FP no denominador e o recall soma FN.
- **B:** verdadeira. Um bug que deixa de ser achado vira falso negativo, e o recall cai sem depender de alarmes falsos.
- **D:** verdadeira. Falsos positivos não entram na fórmula do recall, mas aumentam o denominador da precision.
**Conceito:** o recall não enxerga falsos positivos

## 5. Recall de 100% não basta
**Correta: B**
**Por quê:** o recall mede só a cobertura dos bugs reais. Um prompt muito sensível, que abre o leque, pode chegar a 100% marcando quase tudo como bug, inclusive logs normais, e aí a precision cai. Segundo o professor, normalmente não dá para ter as duas extremamente altas; é preciso olhar a precision para julgar o prompt.
- **A:** recall de 100% significa TP / (TP + FN) = 1, ou seja, nenhum falso negativo; não há bug real escondido.
- **C:** marcar logs sem bug gera falsos positivos, que não entram na fórmula do recall; o recall de 100% não diz nada sobre eles.
- **D:** comparar com o prompt antigo pode ser útil, mas a justificativa está errada: falsos positivos do prompt anterior não afetam o recall dele nem a comparação de recall.
**Conceito:** sensibilidade e trade-off precision × recall
