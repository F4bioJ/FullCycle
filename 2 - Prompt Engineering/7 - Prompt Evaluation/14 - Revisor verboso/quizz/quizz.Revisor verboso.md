# Quizz — Revisor verboso

**Capítulo:** 2.7 - Prompt Evaluation · **Aula:** 2.7.14
**Base:** material da aula

---

## 1. Um prompt de revisão de código manda o modelo abrir com história da linguagem e filosofia, analisar o código brevemente e fechar com ética. A resposta fica longa, mas os scores de `detail` e `consistency` caem. Qual é a melhor leitura?
- A) O volume de texto não vira detalhe útil, porque o conteúdo extra fugiu do código e perdeu relevância para a tarefa.
- B) O evaluator de `detail` mede o tamanho do texto e a conta falhou, já que a resposta ficou longa demais para ele.
- C) O modelo reduziu o nível de detalhe por conta própria, porque o prompt pedia uma análise breve do trecho de código.
- D) A queda vem do uso de evaluators sem referência, que punem respostas longas por não terem texto-alvo para comparar.

## 2. Ao abrir o feedback do evaluator de `detail`, a equipe lê que o usuário enviou código em Go e o assistente não comentou o código, falando de code review e da história do Go. Como usar esse feedback?
- A) Pedir mais detalhes no prompt, já que o evaluator indicou que faltou profundidade na análise do código enviado.
- B) Tratar a explicação como diagnóstico da causa, a perda do contexto da tarefa, e cortar do prompt o que desvia o modelo.
- C) Usar o texto para justificar a nota no relatório, porque a correção do prompt deve partir do valor do score.
- D) Usar o feedback para trocar o modelo, já que o desvio do código indica limitação do modelo e não do prompt.

## 3. Ao rodar o Bad Verbals, o professor já esperava nota baixa no evaluator `consistency`. Qual raciocínio sustenta essa expectativa, segundo a aula?
- A) O prompt exige várias seções e o evaluator mede o quanto o formato pedido foi cumprido ao pé da letra.
- B) A resposta contradiz as próprias afirmações, e o evaluator mede a coerência interna do texto gerado pelo modelo.
- C) A temperatura alta do experimento espalha a resposta, e o evaluator mede a variação entre execuções repetidas.
- D) Ele mede se a resposta é direta e objetiva, e o prompt leva o modelo a escrever além do necessário.
