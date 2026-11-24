# Quizz — Recall

**Capítulo:** 8 - Evaluation Comparativa · **Aula:** 2
**Base:** material da aula

---

## 1. Na aula de precision, um prompt analisou 20 logs, dos quais 10 eram bugs de fato: marcou 13 como bug, 8 corretamente (precision de 61%). Qual é o recall desse prompt e por quê?
- A) 61%: 8 acertos sobre os 13 logs marcados, porque os 5 alarmes falsos também contam como erro no recall.
- B) 80%: 8 acertos sobre os 10 bugs reais, porque os 2 bugs que escaparam são o erro que o recall conta.
- C) 40%: 8 acertos sobre os 20 logs analisados, porque o recall mede a cobertura de todo o conjunto avaliado.
- D) 53%: 8 acertos sobre 8 + 5 + 2, porque o recall soma alarmes falsos e bugs perdidos no denominador.

## 2. Uma equipe muda o prompt do classificador de logs para só marcar bug quando houver stack trace explícito. Depois disso, quase todo alerta é um bug real, mas o plantão passa a encontrar em produção bugs que o sistema nunca marcou. Qual leitura está correta?
- A) O recall subiu, porque quase todo alerta é bug real; os bugs vistos em produção são falsos positivos que o prompt deixou passar.
- B) A precision caiu, porque os bugs que escaparam entram como erro no denominador da precision, junto dos alarmes falsos.
- C) As duas métricas melhoraram, porque com menos ruído nos alertas o modelo distingue melhor os bugs reais dos logs normais.
- D) A precision subiu e o recall caiu: o prompt ficou mais restritivo e passou a deixar mais bugs reais sem marcação.

## 3. Um mesmo classificador de bugs pode ser ajustado para mais recall ou para mais precision. Em qual cenário faz mais sentido priorizar o recall, aceitando mais alarmes falsos?
- A) Logs de um sistema de pagamentos, em que um bug não detectado chega ao cliente e cada alerta extra custa poucos minutos de triagem.
- B) Um bot que abre chamado para cada bug acusado, numa equipe que já passou a ignorar o canal por excesso de alertas indevidos.
- C) Um fluxo em que cada bug marcado dispara uma correção automática, aplicada em produção sem revisão humana.
- D) Um relatório para a gerência, que passou a desconfiar da automação depois de ver vários logs normais listados como bug.

## 4. Sobre recall e falsos negativos, qual afirmação está INCORRETA?
- A) Recall e precision têm o mesmo numerador, os bugs reais encontrados; o que muda é o termo de erro no denominador.
- B) Se o modelo para de achar um bug que antes achava, o recall cai mesmo que nenhum alarme falso tenha surgido.
- C) Um prompt que acusa poucos bugs, todos corretos, tem recall alto, porque não cometeu nenhum falso positivo.
- D) Acrescentar alarmes falsos sem mudar os bugs encontrados deixa o recall igual, mas derruba a precision.

## 5. Depois de trocar o prompt, um colega comemora: "O recall foi para 100%, então o prompt novo é melhor." O que falta checar antes de concordar?
- A) Os falsos negativos, porque um recall de 100% ainda pode esconder bugs reais que o prompt deixou escapar.
- B) A precision, porque um prompt mais sensível pode achar todos os bugs marcando também muitos logs normais.
- C) Os logs normais acusados, porque um recall de 100% também exige que o prompt não tenha marcado logs sem bug.
- D) O recall do prompt antigo, porque a alta só conta como melhora se o prompt anterior gerava mais falsos positivos.
