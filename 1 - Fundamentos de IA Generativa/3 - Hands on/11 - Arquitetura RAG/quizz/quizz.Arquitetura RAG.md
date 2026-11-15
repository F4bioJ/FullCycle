# Quizz — Arquitetura RAG

**Capítulo:** 3 - Hands on · **Aula:** 11
**Base:** material da aula

---

## 1. Uma empresa treinou sua LLM em outubro. Em novembro, o time financeiro pergunta sobre o fechamento contábil do mês. Segundo a aula, por que retreinar o modelo sempre que sai um documento novo é uma má solução?
- A) Cada retreino apaga o conhecimento anterior do modelo, que precisaria ser reaprendido do zero.
- B) O retreino reduz a precisão do modelo, pois os documentos novos conflitam com o que ele já aprendeu.
- C) Chegam informações novas o tempo todo, então o treino teria de ser contínuo, com custo muito alto.
- D) Poucos documentos novos não alteram os pesos de forma perceptível, e a resposta continuaria igual.

## 2. Sobre o que o RAG muda em uma LLM, qual afirmação está INCORRETA?
- A) A busca incorpora os fatos novos ao conhecimento do modelo, que deixa de estar defasado em relação a eles.
- B) O modelo continua sem saber o que veio depois do treino, mesmo quando responde sobre esses fatos.
- C) A fonte pode ser restrita a documentos internos da empresa, sem nenhuma consulta à internet.
- D) A geração continua sendo palavra a palavra, agora sobre um prompt enriquecido com trechos recuperados.

## 3. Um time troca uma busca por palavras (como a de filmes na Netflix) por uma busca com embeddings. A consulta "acesso remoto seguro" passa a trazer um trecho sobre "VPN corporativa", que não contém nenhuma dessas palavras. O que mudou?
- A) Os embeddings guardam uma lista de sinônimos de cada palavra, e a busca troca os termos até achar o trecho.
- B) A LLM gera antes um rascunho da resposta, e o retriever procura as palavras desse rascunho nos documentos.
- C) Os documentos passam a ser indexados pelas suas palavras mais frequentes, o que amplia os resultados.
- D) Consulta e trecho viram vetores que representam o significado, e a busca compara a proximidade entre eles.

## 4. Um time liga o retriever a uma pasta com 5 mil PDFs, mas os PDFs foram só copiados para o armazenamento, sem nenhum processamento. O que vai dar errado na busca?
- A) A LLM não consegue ler PDFs e devolve um erro de formato antes mesmo de montar o prompt da resposta.
- B) Não há vetores dos documentos para comparar com o da query: faltou quebrá-los e gerar embeddings.
- C) O retriever ignora arquivos longos, então os PDFs de muitas páginas ficam de fora dos resultados.
- D) A query não vira embedding enquanto os documentos estiverem em formato diferente de texto puro.

## 5. Um assistente com RAG responde com frases genéricas e fora do assunto, embora a base contenha o documento certo. Nos logs, os trechos que entram no prompt tratam de outros assuntos. Qual medida ataca a causa?
- A) Trocar a LLM por uma maior, que consiga extrair a resposta certa mesmo de um contexto fraco.
- B) Melhorar a recuperação dos trechos, pois a resposta depende da relevância do contexto montado.
- C) Revisar a instrução do prompt, para a LLM responder usando apenas os trechos que recebeu.
- D) Aumentar a temperatura, para a LLM variar mais e se afastar das frases genéricas que vem gerando.

## 6. Um usuário pergunta "o que diz a cláusula 7 do contrato de prestação de serviços?". Por que mandar essa pergunta direto à LLM, sem as camadas intermediárias, tende a falhar?
- A) A pergunta é curta demais para gerar um embedding, e sem ele a LLM não consegue processar a entrada.
- B) A LLM só gera texto a partir de vetores de documentos, e não a partir de perguntas digitadas.
- C) A pergunta precisa antes ser corrigida pela camada de geração, que a reescreve para a busca funcionar.
- D) O contrato não estava no treino, e sem esse contexto na entrada o modelo pode alucinar.

## 7. Você precisa de informação atual e confiável sobre um tema, e o ChatGPT está buscando em muitos lugares da web. O que o professor faz, e por quê?
- A) Restringe no prompt as fontes a consultar, para reduzir o ruído e a chance de falha ou alucinação.
- B) Pede que o modelo consulte ainda mais fontes, para comparar os resultados e ficar com o que se repete.
- C) Troca a LLM por uma mais recente, cujo treino já inclua os fatos mais atuais sobre o tema.
- D) Pede que o modelo cite as fontes ao final, para o usuário descartar depois as que forem ruins.

## 8. Uma LLM treinada há dois anos, sem RAG, responde com segurança a "quanto foi o jogo de ontem?", com um placar inventado. Qual explicação é coerente com a aula?
- A) A janela de contexto era curta e cortou a parte da pergunta que indicava a data do jogo.
- B) O modelo recuperou da base vetorial um trecho sobre outro jogo e o usou como evidência.
- C) O fato não existe no treino, e sem fonte externa o modelo responde apenas com o que ficou nos pesos.
- D) Os pesos se degradaram com o tempo, o que distorceu o que o modelo tinha aprendido sobre jogos.

## 9. O FAQ de atendimento de uma empresa muda toda semana, com reclamações novas (por exemplo, um deploy errado que gerou impacto). Ligar o FAQ como fonte do RAG resolve o quê, em comparação com o retreino do modelo?
- A) A LLM recebe o FAQ inteiro no prompt a cada pergunta, o que dispensa quebrar e indexar os documentos.
- B) As respostas ficam corretas mesmo com uma busca ruim, pois o FAQ é uma fonte confiável.
- C) A busca passa a ser por palavra-chave, mais adequada a textos curtos como os de um FAQ.
- D) O conteúdo novo entra na base consultada pela busca, sem precisar mexer nos pesos do modelo.

## 10. Em uma versão paga do ChatGPT, a pergunta sobre algo de poucos minutos atrás é respondida com ajuda de busca na web. O que isso mostra sobre o conhecimento do modelo?
- A) O modelo segue sem conhecer o que veio depois do treino, mas busca esses dados e responde com base neles.
- B) Cada resultado buscado passa a fazer parte do treinamento, e o modelo não precisa buscar o mesmo fato de novo.
- C) O modelo ganhou memória viva: acompanha a web de forma contínua e aprende conforme as notícias saem.
- D) A geração deixou de ser feita pela LLM: o texto final é copiado das páginas encontradas pela busca.
