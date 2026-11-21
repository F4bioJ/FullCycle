# Quizz — Score com range

**Capítulo:** 7 - Prompt Evaluation · **Aula:** 10
**Base:** material da aula

---

## 1. Duas versões do prompt de revisão de código receberam `yes` em conciseness em todos os exemplos, no evaluator binário. A equipe quer saber qual das duas é melhor nesse critério. O que a troca para `ScoreString` acrescenta?
- A) Passa a exigir a referência do dataset, porque uma nota em faixa precisa de um alvo para ser graduada.
- B) Mostra a contagem de `yes` e `no` com mais exemplos, o que separa as versões pela taxa de aprovação.
- C) Dá uma nota em faixa a cada saída, o que separa versões aprovadas que antes caíam na mesma classe.
- D) Troca o critério de conciseness por outro mais rigoroso, que reprova a versão que tinha passado com folga.

## 2. Você quer avaliar relevance em faixa, comparando a saída com a resposta esperada que está no dataset. Qual configuração atende, e por quê?
- A) `labeled ScoreString`, porque o evaluator dá a nota em faixa e também recebe os dados de referência para comparar.
- B) `Labeled Criteria`, porque ele já recebe a referência do exemplo e por isso devolve a nota em faixa de 0 a 1.
- C) `ScoreString` normalizado por 10, porque a normalização já encaixa a referência do exemplo na escala da nota.
- D) `ScoreString` com os dados de `prepareDataWithRef`, porque basta a preparação incluir a referência no exemplo.

## 3. Ao ver conciseness em 0.78 no painel, um colega conclui que 22% das revisões foram reprovadas nesse critério e precisam ser inspecionadas. Por que essa leitura está errada?
- A) Porque 0.78 fica acima de 0.5, e pelo ponto de corte do binário as revisões teriam recebido `yes`.
- B) Porque a nota mede o afastamento da concisão, então 0.78 indica que 78% das revisões ficaram longas.
- C) Porque conciseness rodou sem referência, e sem ela a nota em faixa não diz nada sobre as revisões.
- D) Porque 0.78 é a nota de concisão convertida de 0 a 10 para 0 a 1, e não uma proporção de aprovadas.

## 4. Uma revisão de código descreve, com muitos detalhes técnicos corretos, o que cada função faz, mas não aponta nada que uma leitura rápida do código já não mostrasse. Como detail e depth tendem a se comportar?
- A) Depth fica alto e detail fica baixo, porque a descrição é extensa, mas cobre poucos pontos do código.
- B) Detail pode ficar alto e depth baixo, porque há volume de informação, mas a análise fica no óbvio.
- C) Os dois caem juntos, porque medem o mesmo volume de explicação, cada um em uma escala.
- D) Os dois ficam altos, e quem cai é relevance, por ser o critério com referência que confere o conteúdo.

## 5. Sobre usar score com range no lugar dos evaluators binários, qual afirmação está INCORRETA?
- A) Para uma triagem rápida, em que basta saber se a saída passou ou não, o binário continua útil.
- B) O professor supõe que o binário decide `yes` ou `no` a partir de um ponto de corte, o que esconde diferenças entre aprovadas.
- C) Conciseness com nota em faixa mede outra coisa que o de 0 ou 1, por isso os dois aparecem juntos no exemplo.
- D) No mesmo experimento, critérios com e sem referência convivem, cada um configurado como evaluator próprio.
