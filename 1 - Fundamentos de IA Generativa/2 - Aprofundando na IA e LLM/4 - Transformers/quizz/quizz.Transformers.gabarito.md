# Gabarito — Transformers

## 1. Por que "latindo" se liga a "cachorro" e não a "menino"
**Correta: C**
**Por quê:** A self-attention compara cada token com todos os outros e dá peso pela força da relação. A proximidade na frase não entra nessa decisão, e por isso "cachorro" pesa mais mesmo estando longe.
- **A:** O positional encoding só informa a posição de cada token. Ele não marca função sintática.
- **B:** A feedforward transforma a representação de cada token. Ela não reordena nada.
- **D:** Estado interno que carrega informação adiante é o mecanismo da RNN, justamente o que o Transformer eliminou.
**Conceito:** self-attention pesa por relação, não por distância

## 2. Problemas que motivaram o Transformer
**Correta: A**
**Por quê:** O professor cita os dois problemas que vinham sendo carregados "desde Markov, desde o bigrama": a dificuldade de capturar dependência de longo prazo e a incapacidade de paralelizar.
- **B:** Par de palavras é o limite do bigrama, e os embeddings já existiam bem antes de LSTM e GRU.
- **C:** A explosão de gradiente é um problema real das RNNs, mas não é a motivação apontada, e "excesso de portas" não foi citado.
- **D:** Janela fixa sem memória é a limitação da feedforward, resolvida pelas RNNs.
**Conceito:** limitações de LSTM/GRU que o Transformer ataca

## 3. Remover o positional encoding
**Correta: D**
**Por quê:** Como o Transformer não processa os tokens em sequência, a ordem precisa ser informada de forma explícita. Sem o positional encoding, essa informação some.
- **A:** Os pesos de atenção continuam sendo calculados. Eles vêm da camada de atenção.
- **B:** O paralelismo não depende do positional encoding. É o contrário: o encoding existe porque o processamento é paralelo.
- **C:** A não linearidade vem da MLP, que continua lá.
**Conceito:** papel do positional encoding

## 4. Atenção x MLP
**Correta: B**
**Por quê:** É a formulação do resumo do professor: a atenção decide "com quem" cada token se relaciona, e a MLP transforma "como" a informação combinada é refinada.
- **A:** Inverte os papéis. A não linearidade é da MLP e a relevância é da atenção.
- **C:** Numerar posições é papel do positional encoding, e comparar todos com todos é papel da atenção.
- **D:** Guardar histórico e esquecer é o vocabulário das portas da LSTM.
**Conceito:** divisão de trabalho no bloco do Transformer

## 5. Attention x self-attention
**Correta: B**
**Por quê:** Na self-attention, a comparação acontece dentro da própria sequência: cada token observa todos os demais da mesma entrada.
- **A:** Nos dois casos os pesos são calculados conforme o contexto. Não há versão com pesos fixos.
- **C:** A aula não restringe a self-attention aos tokens anteriores: cada token observa todos os demais. Olhar só para trás é uma máscara usada na geração, não a definição de self-attention.
- **D:** O positional encoding é usado junto com a self-attention, não em oposição a ela.
**Conceito:** definição de self-attention

## 6. O que sai da camada de atenção
**Correta: A**
**Por quê:** Os pesos de atenção compõem uma nova representação contextualizada: o token deixa de representar só a si mesmo e passa a incorporar o contexto relevante.
- **B:** Descreve o efeito do positional encoding, que acontece antes da atenção.
- **C:** A atenção não se limita aos vizinhos imediatos. Esse é o limite dos bigramas.
- **D:** Estado oculto acumulado é o mecanismo da RNN.
**Conceito:** representação contextualizada

## 7. As palavras fora da relação central
**Correta: D**
**Por quê:** O professor diz que "tudo vai ser prestado atenção, o modelo vai olhar pra tudo", mas dá mais peso a "livro", "João" e "leu" para correlacioná-las. O resto vem acompanhando, com peso menor.
- **A:** Nada é descartado. A aula diz que o modelo olha para tudo.
- **B:** Se os pesos fossem iguais, não haveria atenção. O positional encoding informa a posição, não a relevância.
- **C:** Não há segunda passada. Todos os pesos saem do mesmo cálculo.
**Conceito:** atenção pondera, não filtra

## 8. Por que o Transformer escalou
**Correta: C**
**Por quê:** O resumo diz que a estrutura favorece paralelização e treinamento distribuído, e que o encaixe com GPUs e TPUs acelerou os ciclos de experimentação e o aumento de escala.
- **A:** As camadas feedforward continuam em todos os blocos. São elas que dão a não linearidade.
- **B:** Os pesos são os mesmos para todos os tokens. Pesos por posição eram o defeito da feedforward com janela.
- **D:** O positional encoding só informa a posição. Ele não limita sequências nem reduz custo.
**Conceito:** escala vem do paralelismo

## 9. O que mudou na multimodalidade
**Correta: B**
**Por quê:** A aula contrasta a "IA multimodelo" de antes, uma IA por modalidade, com a arquitetura que favorece representações integradas entre texto, imagem e áudio.
- **A:** É o cenário antigo que a aula descreve, com um modelo isolado por tipo de dado.
- **C:** O ViT trata pedaços da imagem como tokens. Não converte a imagem em texto.
- **D:** Continua sendo uma arquitetura por modalidade, só que costurada. A aula fala da mesma arquitetura tratando todas as modalidades.
**Conceito:** representações integradas entre modalidades

## 10. Afirmação INCORRETA
**Correta: D**
**Por quê:** A não linearidade vem da MLP, que continua em todo bloco depois da atenção. A atenção decide "com quem" cada token se relaciona, e a MLP refina "como".
- **A:** Correta: é como o resumo descreve a camada de atenção.
- **B:** Correta: o professor diz que recomendação e tradução já tinham caminho mais pavimentado, e que a IA generativa foi quem mais se beneficiou.
- **C:** Correta: é a razão de existir do positional encoding.
**Conceito:** atenção e MLP são complementares
