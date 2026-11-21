# Revisor otimista

## Prompt degradado como experimento controlado

Um prompt degradado é uma instrução escrita de propósito para induzir comportamento ruim do modelo. Ele não serve para uso em produção; serve para provar, com evidência mensurável, que a qualidade da saída depende diretamente da formulação do prompt. Retomando o cenário de revisão de código, a degradação aqui não vem do modelo “falhar sozinho”, mas de um comando explícito para ignorar problemas, elogiar o código e responder de forma superficial.

## Revisor otimista que ignora problemas

O papel de “revisor de código otimista” foi configurado com viés forte: ignorar vulnerabilidades, focar apenas em elogios, manter `findings` vazio e produzir um `summary` positivo. Esse tipo de instrução reduz a utilidade da revisão porque elimina exatamente o comportamento esperado de um code review técnico: identificar riscos, apontar falhas e justificar achados. Quando o prompt manda o modelo evitar crítica e profundidade, a queda nas métricas deixa de ser surpresa e passa a ser consequência direta do design da instrução.

## Como a degradação foi implementada

A implementação manteve o mesmo pipeline de avaliação já estabelecido e trocou apenas o prompt por `Bad Text Before`, além de aumentar a temperatura para ampliar a criatividade e o desvio comportamental. Os evaluators usados foram `detail`, `depth`, `helpfulness` e `coherence`, todos sem referência e com score contínuo normalizado para a faixa `0`–`1`. Essa escolha isola o efeito da instrução: como o restante do experimento permanece comparável, a diferença observada pode ser atribuída ao prompt degradado.

## Leitura dos resultados do experimento

Os resultados ficaram baixos em todas as dimensões observadas: `coherence` em `0.35`, `depth` em `0.32`, `detail` em `0.22` e `helpfulness` em `0.38`. A leitura correta não é apenas “o modelo respondeu mal”, mas “o prompt produziu exatamente o comportamento ruim que foi solicitado”. O experimento valida o processo de avaliação porque transforma uma impressão subjetiva — “esse prompt parece ruim” — em sinais quantitativos comparáveis.

## Impacto do prompt nas métricas

A comparação com resultados anteriores mais altos, como na faixa de `0.85`, mostra que pequenas mudanças na instrução podem alterar drasticamente a qualidade percebida. `Detail` e `depth` caem porque o prompt exige brevidade e superficialidade; `helpfulness` cai porque elogios genéricos não ajudam a corrigir código; `coherence` também sofre porque a tarefa passa a conflitar com o objetivo real da revisão. O ponto central é que a métrica não está “punindo o modelo”; ela está capturando o efeito do comportamento que o prompt induziu.

## Por que forçar um caso ruim é útil

Forçar um caso ruim é uma estratégia pedagógica e de engenharia: ele cria contraste suficiente para mostrar que o processo de avaliação detecta degradação real. Sem esse contraste, scores altos sucessivos podem dar a falsa impressão de que qualquer prompt razoável funciona bem. Um prompt intencionalmente enviesado revela o valor do evaluator como instrumento de diagnóstico, não apenas como mecanismo de aprovação.
