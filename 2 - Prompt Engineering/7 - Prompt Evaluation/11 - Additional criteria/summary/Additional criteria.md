# Additional criteria

## Correctness com referência e score contínuo

Correctness e relevance já foram introduzidos anteriormente; aqui, o avanço está em executá-los com referência e ler o resultado como score contínuo, não como decisão binária. Quando a saída do modelo é comparada com o esperado do dataset, o evaluator passa a julgar aderência ao alvo conhecido, o que torna a análise mais útil para tarefas como revisão de código com ground truth estruturado. Scores como `0.75` e `0.84` não significam apenas “passou” ou “falhou”: eles mostram grau de qualidade e permitem comparar versões de prompt com mais nuance.

## Customização explícita de faithfulness

Faithfulness pode ser transformado em uma rubrica operacional própria quando o critério built-in é genérico demais para o caso de uso. No cenário de revisão de código, a rubrica precisa deixar explícito que a resposta deve ser grounded no código fornecido, sem inventar problemas, contexto ou suposições não observáveis. Isso muda o evaluator de um julgamento abstrato para uma checagem alinhada ao contrato real da aplicação. Como o foco é a fidelidade ao input analisado, esse critério pode ser aplicado sem referência, desde que a descrição da rubrica seja precisa.

## Rubrica de format adherence orientada ao contrato de saída

Format adherence já era conhecido como critério, mas aqui ele deixa de ser apenas “seguir formato” e vira uma especificação concreta do que conta como conformidade. A rubrica define que a resposta deve retornar somente um JSON válido, sem texto antes ou depois, sem markdown e sem explicações extras. Esse nível de detalhe importa porque uma saída quase correta ainda pode quebrar integração, parser ou pipeline automatizado. Em vez de confiar em uma noção vaga de formato, o evaluator recebe instruções suficientes para penalizar desvios pequenos, mas operacionalmente relevantes.

## Code specificity como critério próprio

Code specificity é um critério novo que mede o quanto a análise técnica realmente aponta evidências concretas no código. Uma resposta específica menciona linha, problema identificado, terminologia técnica adequada e sinais observáveis que sustentam a conclusão. Esse critério existe porque uma revisão pode parecer correta em alto nível e ainda assim ser genérica demais para uso prático. Ao separar especificidade de outros critérios, fica mais fácil distinguir “resposta plausível” de “resposta acionável para engenharia”.

## Reescrever critérios built-in como rubricas customizadas

Um critério built-in serve como ponto de partida, não como limite do sistema de avaliação. Quando a equipe reescreve o critério com instruções próprias, ela transforma uma categoria ampla em uma rubrica ajustada ao comportamento esperado do produto. Isso é especialmente útil quando o evaluator precisa julgar detalhes que o built-in não explicita, como idioma esperado, ausência total de texto fora do JSON ou necessidade de citar linhas do código. O ganho não é só flexibilidade: é diagnóstica, porque a nota passa a refletir exatamente o que a equipe considera qualidade.

## Leitura do feedback detalhado do evaluator

A nota sozinha não basta; o valor real aparece no reasoning associado ao score. Quando o evaluator atribui `0.98` em format adherence, o próximo passo é inspecionar por que a nota não foi máxima e localizar o desvio concreto. No exemplo, a saída estava estruturalmente correta, mas houve desalinhamento com a instrução de linguagem, o que justificou a penalização. Essa leitura transforma avaliação em ferramenta de depuração de prompt, não apenas em dashboard de números.

## Interpretação conjunta de múltiplos critérios

Retomando o cenário de revisão de código, a mesma resposta pode receber notas altas em especificidade, médias em faithfulness e quase máximas em formato. Essa separação evita conclusões simplistas como “o prompt é bom” ou “o prompt é ruim”, porque cada critério revela uma dimensão diferente do comportamento. Uma saída pode estar bem formatada e ainda exagerar inferências; outra pode ser fiel ao código, mas vaga demais para ser útil. Avaliar em paralelo permite decidir qual aspecto do prompt precisa ser refinado.

## Métricas operacionais junto da avaliação qualitativa

A qualidade da resposta não é a única variável relevante em prompt engineering. Latência, consumo de tokens e custo por execução aparecem ao lado dos scores e ajudam a medir a viabilidade do prompt em produção. Um prompt com rubrica excelente, mas custo excessivo, pode ser inadequado para uso contínuo; um prompt barato, mas com baixa fidelidade, também não resolve o problema. A avaliação prática combina qualidade semântica e restrições operacionais na mesma análise.
