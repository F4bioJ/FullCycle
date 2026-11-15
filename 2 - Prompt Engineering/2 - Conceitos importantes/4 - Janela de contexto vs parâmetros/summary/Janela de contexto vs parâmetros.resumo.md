# Janela de contexto vs parâmetros — resumo

## Diferença fundamental entre janela de contexto e parâmetros
O professor destaca que, para atuar com Prompt Engineering, é essencial não confundir janela de contexto com número de parâmetros. Janela de contexto é a quantidade de tokens que o modelo consegue processar de uma só vez. Parâmetros são os pesos ajustados no treinamento, funcionando como a memória do que o modelo aprendeu.

## Parâmetros como memória estática do modelo
Os parâmetros armazenam correlações, padrões de linguagem, código, imagens e nuances (como os sentidos de "go"). O modelo é estático após o treinamento: os pesos não mudam durante o uso normal, apenas em novo treinamento ou fine-tuning. Em inferência, o modelo aplica esse conhecimento fixo para gerar respostas probabilísticas, o que explica por que a mesma entrada pode produzir saídas diferentes.

## Capacidade, custo e número de parâmetros
De forma geral, mais parâmetros aumentam a capacidade de capturar nuances e textos complexos, oferecendo mais possibilidades internas para a inferência. Contudo, isso eleva consumo de memória, tempo de treinamento e custo operacional. Mais parâmetros significam maior potencial, não garantia de melhor resultado em todo cenário.

## Independência entre janela de contexto e parâmetros
As duas dimensões não são proporcionais. Um modelo pode ter muitos parâmetros e janela pequena, ou poucos parâmetros e janela grande. O exemplo do GPT-3 ilustra isso: 175 bilhões de parâmetros com apenas 2.048 tokens de contexto. "Saber muito" e "processar muito contexto de uma vez" são propriedades independentes.

## Qualidade do treinamento como fator decisivo
Aumentar parâmetros não corrige modelo mal treinado. Pesos ruins apenas armazenam padrões inadequados em maior escala. Para o engenheiro de prompt, isso significa que limitações na resposta podem vir da qualidade do aprendizado, não apenas do prompt ou da janela de contexto.
