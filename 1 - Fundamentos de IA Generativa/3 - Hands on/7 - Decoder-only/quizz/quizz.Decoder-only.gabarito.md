# Gabarito — Decoder-only

## 1. Por que preferir o decoder-only para continuar texto
**Correta: B**
**Por quê:** a aula diz que focar em um tipo de atividade reduz a complexidade. Prever o próximo token pede só o histórico, então não gastar atenção com os dois lados deixa o modelo mais eficiente, mais barato e mais rápido.
- **A:** ler o texto inteiro nos dois sentidos é o que faz o encoder-only, não o decoder-only.
- **C:** a aula não diz que o encoder atrapalha a geração. O argumento é o peso da arquitetura, não uma incapacidade do modelo completo.
- **D:** o decoder-only não dispensa a ordem. A aula insiste que ele precisa respeitar a ordem das palavras.
**Conceito:** decoder-only e tarefas autoregressivas

## 2. Linha de "tudo" toda com check
**Correta: D**
**Por quê:** cada linha enxerga a si mesma e o passado. "Tudo" é a última palavra, então as outras células da linha são passado e a última é ela mesma: não sobra futuro para bloquear. É o que acontece com a linha de "rápido" no exemplo da aula, e o triângulo de zeros aparece nas linhas de cima.
- **A:** a aula mostra check na própria posição: "correu" vê "correu", e o resumo do professor diz que cada linha enxerga a diagonal e o passado.
- **B:** cada passo libera mais um token, somando ao que já estava liberado. A linha enxerga todo o histórico, não só o token anterior.
- **C:** a última linha não fica fora da máscara, que vale para todas. O check em tudo é o resultado da regra, e não uma exceção a ela.
**Conceito:** leitura da máscara triangular inferior

## 3. Retirar a máscara causal
**Correta: A**
**Por quê:** sem máscara, cada posição enxerga os tokens à frente, inclusive o que deveria prever: é a "trapaça" que o resumo do professor cita. Na geração esses tokens ainda não existem, então se perde a consistência entre treino e inferência que a máscara garante.
- **B:** a meia-verdade está em ver os dois lados. Esse acesso não vira compreensão útil aqui, porque a tarefa é prever um token que passa a estar à vista, e a geração continua sem futuro para olhar.
- **C:** a ordem vem da numeração das posições, que a aula descreve como uma senha de cada elemento. A máscara não carrega essa numeração.
- **D:** a qualidade não se mantém. Com o token a prever à vista, a previsão no treino fica trivial, e o modelo não aprende a gerar sem esse apoio.
**Conceito:** por que a máscara importa (treino × inferência)

## 4. Do desenho da aula ao modelo real
**Correta: A**
**Por quê:** a aula avisa que a matriz real é de tokens, um pouco maior porque as palavras são quebradas, e que o computador vê vetores. O mascaramento acontece sobre esses vetores e depende da posição, como diz o resumo do professor.
- **B:** a máscara não olha o significado. Quem pondera a importância dos tokens é a atenção, depois que a máscara já definiu o que pode ser visto.
- **C:** a matriz não fica por palavra. A aula diz o contrário, que ela cresce porque as palavras são quebradas em tokens.
- **D:** a máscara continua triangular nesse nível. A aula não cria exceção para tokens da mesma palavra.
**Conceito:** tokens e vetores na matriz de atenção

## 5. A máscara transforma o Transformer em RNN?
**Correta: C**
**Por quê:** o professor avisa que explicou passo a passo como se fosse uma RNN, mas que foi uma simplificação. O Transformer processa em paralelo, com a numeração de cada posição, e a máscara impõe a direção da esquerda para a direita.
- **A:** o paralelismo não é exclusivo do encoder-only. A aula o descreve justamente no decoder-only.
- **B:** a aula não fala de estado passado entre tokens nas camadas. Esse mecanismo é o da RNN, e o Transformer não depende dele.
- **D:** o Transformer não descarta a ordem. A aula diz que ele precisa respeitá-la e que carrega a ordenação com ele.
**Conceito:** ordem sem RNN

## 6. Máscara e atenção: quem faz o quê
**Correta: D**
**Por quê:** "cachorro" e "azul" vêm antes de "correu", então a máscara libera os dois. Depois, como diz a aula, o modelo olha os tokens anteriores e decide quais são importantes para prever o próximo.
- **A:** a máscara não bloqueia por irrelevância, e sim por posição. "Azul" está no passado e continua liberado.
- **B:** o feedforward position-wise atua em cada posição individualmente e não compara posições.
- **C:** a primeira metade é verdadeira, mas equilibrar valores é um controle de escala. Quem decide o que importa para prever "correu" é a atenção, não a LayerNorm.
**Conceito:** máscara (o que pode ser visto) × atenção (o que importa)

## 7. Trocar várias heads por uma
**Correta: B**
**Por quê:** a aula explica que multi-head é olhar a mesma informação com diferentes olhares ao mesmo tempo. Cada head vê os mesmos vetores de um jeito e aprende uma relação diferente, e com uma head só isso se perde.
- **A:** as heads não dividem o histórico em trechos: todas olham a mesma informação.
- **C:** as heads rodam ao mesmo tempo, mas não dividem uma mesma conta: cada uma aprende uma relação diferente. O ganho apontado pela aula é de olhares, não de velocidade.
- **D:** a aula não limita o alcance de uma head aos tokens próximos. O que define o histórico visível é a máscara, que libera todo o passado.
**Conceito:** multi-head attention com máscara causal

## 8. Tirar o feedforward position-wise
**Correta: C**
**Por quê:** a aula o descreve como um "mini cérebro" aplicado a cada posição de forma individual, que ajuda a captar padrões não lineares e a combinar significados mais abstratos. A atenção não substitui esse papel.
- **A:** trocar informação entre posições é o papel da atenção. O resumo do professor diz que o feedforward não mistura posições.
- **B:** a informação de ordem vem da numeração de cada elemento, não dessa etapa. A frase da fala ("transforma em uma posição") pode confundir, mas o "position-wise" indica que a etapa é aplicada por posição.
- **D:** o controle dos valores é o papel da LayerNorm.
**Conceito:** feedforward position-wise

## 9. Valores instáveis e informação perdida
**Correta: A**
**Por quê:** a LayerNorm mantém os valores equilibrados, para nada explodir ou morrer no treino. A conexão residual leva o resultado para a camada seguinte e evita esquecer o que veio das anteriores.
- **B:** troca os papéis das duas peças.
- **C:** acerta o papel da LayerNorm, mas atribui a ela também a preservação da informação, que é da conexão residual.
- **D:** acerta o papel da conexão residual, mas atribui a ela também o equilíbrio dos valores, que é da LayerNorm.
**Conceito:** LayerNorm e conexões residuais

## 10. Mascaramento do BERT × máscara do GPT
**Correta: D**
**Por quê:** no MLM (aula anterior), algumas palavras são ocultadas, e o modelo as prevê com o contexto completo, olhando para os dois lados. A máscara causal bloqueia, para cada posição, tudo o que vem depois. O nome é parecido, mas o propósito é outro.
- **A:** o MLM não esconde especificamente tokens futuros: oculta palavras da sentença, e o modelo usa o que está antes e depois delas.
- **B:** o BERT não usa a matriz triangular em nenhuma camada: sua atenção é bidirecional, e o MLM oculta palavras, sem bloquear um dos lados.
- **C:** o MLM é um método de treino, e a máscara causal vale para treino e inferência, como garante a consistência citada na aula.
**Conceito:** MLM × máscara causal
