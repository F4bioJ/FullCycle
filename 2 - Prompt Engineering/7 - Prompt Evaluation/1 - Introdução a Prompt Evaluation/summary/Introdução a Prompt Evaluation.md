# Introdução a Prompt Evaluation

## Prompt evaluation como processo de engenharia

Prompt evaluation é o processo de avaliar prompts com critérios explícitos, em vez de depender de impressão subjetiva. Dizer que um prompt é “bom” ou “ruim” não basta, porque essa classificação só faz sentido quando existe uma referência clara do que está sendo medido. Sem esse enquadramento, o ajuste de prompts vira tentativa e erro sem aprendizado acumulado. Tratar o prompt como algo mensurável transforma experimentação solta em engenharia reproduzível.

## Critérios claros em vez de julgamento intuitivo

Um prompt só pode ser comparado de forma útil quando os critérios de análise estão definidos. Esses critérios existem porque diferentes prompts podem otimizar coisas diferentes: qualidade da saída, custo operacional ou experiência do usuário. Quando a equipe não explicita o que considera sucesso, duas pessoas podem olhar a mesma resposta e chegar a conclusões incompatíveis. A avaliação organiza essa decisão e reduz ambiguidade.

## O risco de iterar sem aprendizado acumulado

Testar prompts “na sorte” produz mudanças, mas não produz conhecimento confiável sobre por que um resultado melhorou ou piorou. Isso cria um ciclo de iteração sem memória técnica: a equipe tenta variações, observa impressões pontuais e perde a capacidade de repetir o que funcionou. Em sistemas reais, esse comportamento encarece manutenção e dificulta evolução consistente. Avaliar de forma estruturada evita que cada nova tentativa recomece do zero.

## Prompt como componente mensurável do sistema

O prompt não é apenas texto de instrução; ele atua como um componente que altera o comportamento do sistema. Mudar esse componente pode modificar a resposta gerada, o consumo de recursos e a forma como o usuário percebe o produto. Por isso, o prompt precisa ser tratado com o mesmo rigor aplicado a outras partes que afetam resultado de negócio. Se ele influencia o sistema, ele também precisa ser observado, comparado e evoluído com método.

## Qualidade da saída, custo e experiência do usuário

A avaliação de prompts importa porque o prompt afeta diretamente três dimensões centrais. A primeira é a qualidade da saída: respostas mais corretas, úteis e adequadas ao objetivo do sistema. A segunda é o custo, já que a formulação do prompt influencia processamento e, portanto, gasto operacional. A terceira é a experiência do usuário, porque a percepção de utilidade, clareza e consistência da IA depende fortemente de como o prompt orienta o modelo.

## Comparação entre prompts e avaliação contínua

Comparar prompts é necessário porque pequenas mudanças podem gerar impactos relevantes no comportamento do sistema. Essa comparação não deve acontecer apenas uma vez, mas de forma contínua, já que o uso real revela efeitos que nem sempre aparecem em testes informais. Avaliação contínua cria uma base para decidir quando um prompt realmente melhorou o sistema e quando apenas pareceu melhor em um caso isolado. Esse é o ponto de partida para, nas próximas etapas, definir objetivos, métricas, evaluators e datasets de forma disciplinada.
