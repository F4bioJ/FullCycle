# Gabarito — LLMs

## 1. Afirmação incorreta sobre LLMs
**Correta: B**
**Por quê:** LLM é uma estratégia de modelagem e treino, e cada modelo pode ter um objetivo diferente. O GPT é treinado para prever a próxima palavra e gerar texto; o BERT, para preencher lacunas e compreender. Por isso eles servem a tarefas diferentes.
- **A:** verdadeira. Esses são os três blocos que o LLM herda do Transformer.
- **C:** verdadeira. Escala de parâmetros e de texto é o que define o termo.
- **D:** verdadeira. É a ideia central de que LLM não é uma coisa só.
**Conceito:** LLM como estratégia, não produto

## 2. BERT para redigir respostas de atendimento
**Correta: A**
**Por quê:** O BERT é treinado para preencher lacunas usando o contexto dos dois lados; o resultado é compreensão (classificar, buscar, extrair), não geração. Redigir texto livremente é o objetivo do GPT.
- **B:** descreve o GPT (unidirecional, da esquerda para a direita), não o BERT.
- **C:** o BERT é "from Transformers", baseado na mesma arquitetura.
- **D:** a escala de dados importa para o desempenho, mas o que separa os dois aqui é o objetivo de treino, não a quantidade de texto.
**Conceito:** BERT × GPT: objetivo de treino

## 3. Qual fase ataca respostas pouco proveitosas
**Correta: D**
**Por quê:** O RLHF aprende com a comparação entre respostas: preferências humanas orientam quais são mais úteis e adequadas, ajustando estilo, utilidade e aderência a instruções. O problema descrito nasce justamente de comparar respostas lado a lado, o que a D usa como sinal de treino.
- **A:** mais pré-treinamento com texto melhor amplia a base geral, mas não usa a comparação entre respostas como sinal.
- **B:** o fine-tuning supervisionado com exemplos corrigidos direciona o modelo a uma tarefa específica e até ajuda, mas aprende a reproduzir exemplos, não a preferir uma resposta entre várias; por isso não é a fase que ataca mais diretamente um problema que nasce da comparação entre respostas.
- **C:** few-shot não é fase de treino: apenas mostra exemplos ao modelo durante o uso, sem alterar o que ele aprendeu.
**Conceito:** RLHF

## 4. Aprender sem rótulos humanos
**Correta: C**
**Por quê:** É a autossupervisão: o próprio texto fornece a resposta. Ao esconder a próxima palavra ou uma lacuna e comparar com o original, o modelo aprende sem que ninguém precise rotular nada.
- **A:** descreve aprendizado a partir de uma amostra rotulada à mão; o pré-treinamento usa bilhões de tokens e dispensa esse rótulo manual.
- **B:** descreve o fine-tuning supervisionado, que exige exemplos rotulados por pessoas.
- **D:** o rótulo vem do próprio texto; não é preciso um segundo modelo para produzi-lo.
**Conceito:** Pré-treinamento autossupervisionado

## 5. Classificar chamados de suporte
**Correta: A**
**Por quê:** Depois do pré-treinamento, o modelo pode ser refinado por fine-tuning supervisionado para tarefas como classificação. Parte-se da base generalista, que já capturou a linguagem, em vez de treinar do zero para cada problema.
- **B:** treinar do zero repete o custo de aprender a linguagem, justamente o que o fine-tuning evita.
- **C:** repetir o pré-treinamento não usa os rótulos; e o fine-tuning serve para tarefas específicas, não só para estilo.
- **D:** o RLHF refina um modelo que já foi pré-treinado; as preferências não ensinam a linguagem do zero.
**Conceito:** Pré-treinamento × fine-tuning

## 6. Associação incorreta entre modelo e foco
**Correta: C**
**Por quê:** Olhar o contexto dos dois lados e focar em compreensão e classificação é o perfil do BERT. O LLaMA, da Meta, foi apresentado como aberto e útil para pesquisa e desenvolvimento.
- **A:** correta. O GPT é autoregressivo e foca em geração de texto e assistente.
- **B:** correta. O Gemini foi pensado para gerar texto, imagem e código.
- **D:** correta. O BERT usa o que vem antes e depois da palavra e é bom em sentimento e perguntas e respostas.
**Conceito:** Foco de cada modelo (GPT, BERT, LLaMA, Gemini)

## 7. Três amostras de notas fiscais
**Correta: D**
**Por quê:** LLMs realizam tarefas novas com poucos exemplos (few-shot), sem treinar um modelo específico. Três amostras são suficientes para demonstrar o padrão; não são suficientes para um treino.
- **A:** o RLHF reflete preferências humanas coletadas no treino, não adapta o modelo a uma tarefa nova durante a conversa.
- **B:** a autossupervisão usa grandes volumes de texto; não cria rótulos a partir de três amostras.
- **C:** fine-tuning supervisionado depende de um volume de exemplos rotulados maior do que três.
**Conceito:** Few-shot

## 8. Busca acha "erro de login" sem palavras em comum
**Correta: B**
**Por quê:** Os embeddings representam os tokens como vetores em um espaço de várias dimensões, o que permite medir a proximidade entre eles. Textos de sentido parecido ficam perto nesse espaço mesmo sem nenhuma palavra em comum, e é essa distância que a busca usa.
- **A:** a tokenização só divide o texto em tokens; sem palavras em comum, não há fragmentos repetidos para casar.
- **C:** a autoatenção relaciona os tokens dentro de uma mesma sequência; "login" está em outro texto, e a atenção não cria a representação numérica que permite medir distância.
- **D:** o RLHF ajusta o comportamento a preferências humanas sobre respostas; não é o que mede semelhança entre textos.
**Conceito:** Embeddings

## 9. Palavra rara dividida em fragmentos
**Correta: C**
**Por quê:** A unidade que o LLM processa é o token, e não a palavra. Cada token presta atenção em todos os demais tokens da sequência, inclusive os de outras palavras.
- **A:** a aula troca "palavras" por "tokens" justamente porque a atenção opera sobre os tokens.
- **B:** a autoatenção distribui atenção entre todos os tokens; não há regra que privilegie o fragmento final.
- **D:** cada token presta atenção em todos os outros da sequência, não só nos vizinhos, e os fragmentos raros entram como qualquer outro token.
**Conceito:** Autoatenção sobre tokens

## 10. "O ChatGPT apenas decorou textos"
**Correta: A**
**Por quê:** O professor diz que esses modelos não só memorizam padrões: também aprendem a representar contexto, o que permite fluência, coerência e adaptação a tarefas. Por isso conseguem generalizar, inclusive com poucos exemplos.
- **B:** meia-verdade: o modelo aprende padrões, mas recombinar trechos vistos não explicaria resumo, tradução ou tarefas novas com poucos exemplos.
- **C:** o RLHF refina o comportamento do modelo já treinado; os padrões aprendidos no pré-treinamento continuam sendo a base.
- **D:** a escala melhora a capacidade de captar padrões e a generalização, em vez de levar o modelo a ignorá-los.
**Conceito:** Representação de contexto além de memorizar
