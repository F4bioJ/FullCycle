# Tipos e tecnicas e Prompts

## Estrutura do prompt e qualidade da resposta

Escrever um prompt melhor não significa sempre adicionar mais contexto. Informação em excesso pode introduzir ruído, ambiguidade ou restrições desnecessárias, o que piora a resposta em vez de melhorá-la. A qualidade da saída depende da relação entre objetivo, contexto útil e forma de instrução. Em Prompt Engineering, estrutura relevante costuma valer mais do que volume de texto.

## Por que existem técnicas de prompt

Retomando a ideia de tipos e técnicas de prompts já apresentada, o ponto novo aqui é a justificativa para estudá-los como repertório técnico. Essas técnicas surgem porque tarefas diferentes exigem formas diferentes de orientar o modelo, e essa diferença já foi observada em papers, benchmarks e comparações entre modelos. Não se trata de escrever “mais bonito”, mas de escolher uma estrutura que induza o comportamento mais adequado para cada problema. Isso transforma o prompt em decisão experimental e não em improviso textual.

## Por que aprender com código e experimentação

Técnicas de prompt ficam abstratas demais quando são ensinadas apenas por definição. Ao executar prompts em código ou em interfaces como ChatGPT no browser, fica possível observar variação de resposta, impacto de pequenas mudanças e comportamento do modelo sob condições controladas. Essa prática torna visível o que, de outro modo, pareceria apenas recomendação subjetiva. Para desenvolvedores, esse formato aproxima o estudo de prompts da lógica de teste, comparação e inspeção de comportamento.

## Como a prática ajuda a entender o comportamento do modelo

Rodar o mesmo prompt com pequenas alterações permite discutir o que mudou na saída e inferir o que está acontecendo por baixo do capô do modelo. O objetivo não é abrir a implementação interna da IA, mas entender efeitos observáveis da instrução sobre qualidade, foco e consistência da resposta. Esse tipo de análise ajuda a construir intuição técnica sobre quando simplificar, quando estruturar mais e quando trocar de técnica. Sem esse ciclo de execução e comparação, o aprendizado tende a ficar superficial.

## Organização do estudo das próximas técnicas

Os vários tipos de prompt formam um mapa de leitura para o restante do capítulo. Como esse repertório pode confundir quando aparece apenas como lista, a abordagem correta é estudar cada técnica em uso, comparando intenção, efeito e limite prático. A primeira técnica dessa sequência é o role prompt, que muitas pessoas já usam de forma automática, mas sem avaliar claramente o impacto dessa escolha. O avanço aqui é sair do uso intuitivo e passar a observar a técnica como mecanismo deliberado de controle da resposta.
