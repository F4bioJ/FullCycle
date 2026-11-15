# Gabarito — Arquitetura RAG

## 1. Por que retreinar a cada documento novo é má solução
**Correta: C**
**Por quê:** Novas informações chegam o tempo todo. Manter o modelo sempre atualizado exigiria treino contínuo, extremamente caro e sem fim. O RAG evita isso ao buscar a informação nova em uma fonte externa.
- **A:** A aula não descreve o retreino como algo que apaga o conhecimento anterior; o problema apontado é custo e continuidade.
- **B:** A aula não fala em perda de precisão por conflito com o que o modelo aprendeu; o argumento dela é o custo de um treino que nunca para.
- **D:** A aula não usa esse argumento; o que ela diz é que manter o treino em dia teria de ser um trabalho contínuo e muito caro.
**Conceito:** Defasagem da LLM e custo de retreino

## 2. Afirmação INCORRETA sobre o RAG
**Correta: A**
**Por quê:** A busca não incorpora nada ao modelo: os pesos não mudam, e os trechos recuperados entram só no contexto daquela resposta. O modelo continua defasado; ele apenas consulta o dado novo antes de responder.
- **B:** Verdadeira: a aula diz que ele não vai saber o que há de novo após o treinamento, mas consegue buscar dados em tempo real.
- **C:** Verdadeira: a aula propõe "nichar" a base em documentos da empresa, como os guardados em um bucket S3.
- **D:** Verdadeira: quem gera continua sendo a LLM, agora com a pergunta e os trechos no prompt.
**Conceito:** O que o RAG muda (e o que não muda)

## 3. Como "acesso remoto seguro" chega a "VPN corporativa"
**Correta: D**
**Por quê:** A query vira um vetor que representa o significado da frase, e os trechos indexados também são vetores. A comparação é por proximidade de significado, não por palavras em comum.
- **A:** Embedding é uma representação vetorial, não uma lista de sinônimos; a aproximação vem da proximidade dos vetores.
- **B:** Na arquitetura da aula, a geração é a última camada, e a busca usa o vetor da query, não um rascunho da resposta.
- **C:** Descreve busca por palavra-chave, exatamente o que a aula contrapõe à busca por embedding.
**Conceito:** Busca semântica por embedding

## 4. Documentos sem processamento prévio
**Correta: B**
**Por quê:** O retriever compara o vetor da query com vetores dos documentos. Para isso, os documentos precisam ter sido quebrados em partes e convertidos em embeddings de antemão.
- **A:** A LLM não lê os PDFs nessa etapa; ela só recebe os trechos no prompt, depois da busca. O problema é a ausência de vetores.
- **C:** A aula não fala em limite de tamanho; documentos longos são justamente quebrados em pedaços.
- **D:** A conversão da query independe do formato dos documentos.
**Conceito:** Preparo da base vetorial (documentos em pedaços e embeddings)

## 5. Respostas genéricas com trechos fora do assunto
**Correta: B**
**Por quê:** Os logs mostram que o contexto entregue à LLM já chega errado, e a qualidade da resposta depende da qualidade e da relevância desse contexto. A causa está antes da geração, na recuperação dos trechos.
- **A:** Uma LLM maior continua recebendo os mesmos trechos irrelevantes; a medida não ataca a causa.
- **C:** Se os trechos já chegam fora do assunto, instruir a LLM a usar só esses trechos não os torna relevantes; a causa está na recuperação.
- **D:** Temperatura muda a variação da geração, não os trechos que entram no prompt.
**Conceito:** Depuração: qualidade da recuperação e do contexto

## 6. Por que a pergunta direto à LLM tende a falhar
**Correta: D**
**Por quê:** A query é só a pergunta e não traz o contexto factual, que não está no treinamento. Sem o enriquecimento com a base de conhecimento, o modelo não tem de onde tirar a cláusula e pode alucinar.
- **A:** Uma pergunta curta pode virar vetor, e o embedding serve à busca, não como requisito para a LLM processar a entrada.
- **B:** A LLM processa perguntas de texto normalmente; o que falta é o contexto.
- **C:** A geração é a última camada, depois da recuperação e da montagem do prompt.
**Conceito:** Camada 1: query sem contexto suficiente

## 7. Nichar as fontes
**Correta: A**
**Por quê:** Com busca aberta, o modelo vai a muitos lugares. O professor restringe no prompt as fontes permitidas, o que reduz o ruído e o risco de falha ou alucinação.
- **B:** É o oposto do que o professor faz: ele reduz as fontes em vez de ampliá-las.
- **C:** Um modelo novo também fica defasado logo após o treino; a aula resolve isso com busca em fontes escolhidas.
- **D:** Citar fontes ajuda a conferir depois, mas não limita onde o modelo busca e não é o que a aula propõe.
**Conceito:** Controle das fontes de contexto

## 8. Por que a LLM sem RAG inventa o jogo de ontem
**Correta: C**
**Por quê:** O modelo só tem a "foto" do treinamento, sem acesso a dados em tempo real. Diante de uma pergunta do momento, ele não tem o fato e tende a inventar ou a dar uma resposta confusa.
- **A:** A janela de contexto é um limite real, mas a pergunta inteira cabe nela; o que falta é o fato, ausente do treino.
- **B:** O enunciado diz que não há RAG, então não existe retriever nem base vetorial para trazer um trecho errado.
- **D:** Defasagem não é degradação: os pesos ficam iguais depois do treino, o que falta é o que veio depois.
**Conceito:** Limitação da LLM pura e alucinação

## 9. FAQ de atendimento como fonte
**Correta: D**
**Por quê:** A fonte é consultada no momento da pergunta, então o conteúdo novo fica disponível para a busca sem alterar os pesos do modelo.
- **A:** O retriever traz só os trechos mais próximos da query, e os documentos continuam sendo quebrados e convertidos em embeddings.
- **B:** Uma fonte confiável não compensa uma busca ruim: a resposta depende da relevância dos trechos recuperados.
- **C:** A busca continua semântica, por embedding, seja qual for o tamanho do texto.
**Conceito:** Atualização via fonte externa

## 10. ChatGPT pago buscando na web
**Correta: A**
**Por quê:** O modelo continua sem saber o que veio depois do treino, mas busca dados em tempo real e responde com base neles.
- **B:** O resultado da busca não entra no treinamento; ele só alimenta o contexto daquela resposta.
- **C:** A aula afirma o contrário: a LLM não tem memória viva, e a busca é o que traz o dado novo, sem aprendizado contínuo.
- **D:** A LLM continua gerando a resposta; a busca alimenta o contexto, não substitui a geração.
**Conceito:** Dados em tempo real versus conhecimento do treino
