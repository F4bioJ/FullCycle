# Gabarito — Revisor verboso

## 1. Texto longo, mas `detail` e `consistency` caem
**Correta: A**
**Por quê:** Quantidade de texto e qualidade de detalhe são dimensões diferentes. A resposta trouxe introdução histórica e filosófica em vez de análise do código, então o conteúdo extra não foi relevante para a tarefa e o `detail` ficou em 0.37, mesmo com muito texto.
- **B:** O evaluator não mede tamanho; ele avalia a relevância do que foi escrito, tanto que o score caiu apesar do volume.
- **C:** O próprio prompt mandou o modelo gastar a maior parte da resposta com introdução e reflexões; a análise breve era uma parte pequena do pedido, e o problema não foi o modelo reduzir por conta própria.
- **D:** Os evaluators sem referência são o padrão do capítulo e a aula os mantém aqui, porque o problema é visível na própria saída; a queda vem do conteúdo desviado.
**Conceito:** Volume de texto versus detalhe útil

## 2. Uso do feedback do evaluator de `detail`
**Correta: B**
**Por quê:** O feedback mostra a causa da penalização: o assistente saiu do contexto e não comentou o código em Go. Isso orienta a correção, que é remover do prompt as instruções que levam o modelo para fora do escopo, e não apenas olhar a nota.
- **A:** O problema não foi falta de profundidade; o modelo já escreveu muito. Pedir mais detalhes agravaria o desvio.
- **C:** Olhar apenas o valor do score esconde a causa; o texto do evaluator é o que revela o desvio de contexto, e a aula o abre justamente para entender por que o detalhe saiu baixo.
- **D:** O desvio foi induzido pelo prompt, que pediu história, filosofia e ética, e não por limitação do modelo.
**Conceito:** Feedback do evaluator como diagnóstico

## 3. Por que `consistency` baixa era esperada
**Correta: D**
**Por quê:** O professor usa `consistency` para medir o quanto a resposta é direta e objetiva. Como o Bad Verbals é o revisor mais verboso possível, ele escreveu muito além do pedido, e o professor comenta que a nota baixa era óbvia.
- **A:** Seguir o formato pedido não é o que o professor descreve para esse evaluator.
- **B:** Essa descrição se aproxima do que o professor atribui a `coherence`, que mede se o texto é coerente com o que foi escrito na saída.
- **C:** O aumento de temperatura foi do experimento anterior (Revisor otimista); aqui a aula não fala de temperatura nem de variação entre execuções.
**Conceito:** Consistency como objetividade
