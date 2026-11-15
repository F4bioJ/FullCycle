# Gabarito — Conhecimento em tempo real

## 1. Chatbot responde com segurança um preço que nunca existiu
**Correta: C**
**Por quê:** terminado o treino, o modelo fica congelado e não recebe dado novo. Sem busca externa, o preço de ontem não está em lugar nenhum para ele, e a aula alerta que, nesse caso, ele pode inventar ou alucinar só para responder.
- **A:** o cenário não tem busca nem documento, então o modelo não leu preço nenhum. O estouro da janela também não produz um valor inventado por si só.
- **B:** o dado mudou depois do treino, logo não pode estar nos pesos. A fluência textual é tema da aula anterior e não trata de arredondar números.
- **D:** a falta de busca externa é real, mas o modelo nem sabe que o preço mudou: a mudança veio depois do treino, e nada o avisou.
**Conceito:** conhecimento congelado e alucinação

## 2. Todas as conversas na mesma máquina de GPU
**Correta: A**
**Por quê:** a aula traz dois obstáculos independentes. Instâncias separadas são só um deles. O outro é que conversar não atualiza o modelo: isso exigiria refazer toda a conta estatística a cada interação, o que seria extremamente caro. Pôr todos na mesma máquina não mexe nesse segundo obstáculo.
- **B:** a aula não descreve instâncias dividindo contexto, e o contexto de uma janela não é aprendizado do modelo.
- **C:** acerta em "não muda", mas guardar não ensina: a aula diz que o banco só teria efeito se o modelo fosse treinado depois.
- **D:** a falta de comunicação não era a única barreira, então removê-la não faria os pesos mudarem durante o uso.
**Conceito:** instâncias separadas e custo de atualizar os pesos

## 3. Conversas guardadas não significam aprendizado
**Correta: D**
**Por quê:** a aula admite que o provedor pode guardar as conversas, mas elas só teriam efeito se ele treinasse o modelo depois. Ajustar pesos a cada conversa exigiria refazer toda a conta estatística, o que seria caro demais.
- **A:** a conta paga aparece na aula só para a memória ativada. Ela não define quem ensina o modelo.
- **B:** os pesos não mudam a cada conversa, nem um pouco. O ajuste durante o uso é exatamente o que a aula nega.
- **C:** guardar as conversas em um banco não faz com que elas voltem ao modelo a cada pergunta. A aula trata esse banco como material para um treino futuro, não como fonte de consulta.
**Conceito:** guardar não é treinar

## 4. O modelo sabe seu nome em uma conversa nova
**Correta: B**
**Por quê:** é a memória ativada: uma camada que guarda informações como o nome e acompanha a LLM. O modelo não aprendeu, anotou em um "caderninho" para buscar quando precisar, sem mexer em pesos.
- **A:** o contexto se perde quando você muda de conversa. Era a explicação certa para a mesma janela, não para uma nova.
- **C:** a aula nega que a memória reprograme pesos e vieses, mesmo em parte.
- **D:** o RAG busca documentos atualizados para responder perguntas. A aula não diz que conta paga faz busca externa a cada pergunta, e o nome vem da memória.
**Conceito:** memória ativada

## 5. A janela nova ignora as regras passadas antes
**Correta: C**
**Por quê:** ao mudar de conversa, o contexto se perde. O que o modelo tinha era o conteúdo daquela janela, retroalimentado a cada resposta, então as regras precisam voltar a fazer parte da conversa nova.
- **A:** repetir não coloca nada nos pesos. A repetição só fica no contexto da janela atual.
- **B:** a memória ativada guarda algumas coisas, como nome e preferências, não a conversa inteira.
- **D:** o modelo retroalimenta o conteúdo da janela aberta. Ao trocar de conversa, esse contexto se perdeu, e não há o que reler.
**Conceito:** contexto de conversa e limite da janela

## 6. Assistente para julgamentos de ontem e dados que mudam toda hora
**Correta: D**
**Por quê:** é o que o RAG faz: busca os documentos atualizados no momento da pergunta e os insere no prompt. Como o dado muda toda hora, ele precisa chegar na hora da consulta, e não por treino.
- **A:** a memória ativada guarda dados como nome e preferências, não uma base de fatos em mudança. E colar tudo na conversa esbarra no limite da janela.
- **B:** retreinar é caro e demorado, e uma versão semanal já estaria defasada para dados que mudam toda hora.
- **C:** Chain of Thought, da aula anterior, organiza o raciocínio, mas não traz informação que o modelo não tem.
**Conceito:** domínios que mudam o tempo todo

## 7. Retreinar ou adotar RAG
**Correta: A**
**Por quê:** retreinar é o único dos dois que põe o dado nos pesos, mas é caro e demorado, e o modelo volta a ficar congelado no novo recorte. O RAG traz o dado atual para o prompt, sem mudar pesos: o modelo lê, mas não aprende.
- **B:** o RAG também põe dado novo na resposta, ao buscar documentos atualizados e colocá-los no prompt. Eles não precisam ter aparecido no treino.
- **C:** a primeira parte está certa, mas o modelo não guarda o que leu: "não sabia, e talvez continue sem saber". Cada pergunta precisa de nova busca.
- **D:** o custo do retreino é real, mas o RAG não faz ajuste nenhum nos pesos, nem leve.
**Conceito:** retreino e RAG

## 8. A ordem do RAG
**Correta: B**
**Por quê:** a pergunta dispara a busca, os documentos entram no meio do prompt e o modelo faz o que está acostumado a fazer desde o treino, agora guiado por esse conteúdo.
- **A:** inverte a ordem: a busca vem antes da geração. O RAG não é um corretor do que já foi gerado.
- **C:** a ordem da busca está certa, mas os documentos não mexem nos pesos, nem temporariamente.
- **D:** o RAG não passa pela memória ativada, que guarda dados como nome e preferências do usuário.
**Conceito:** funcionamento do RAG

## 9. O time desliga o RAG e repete a pergunta
**Correta: D**
**Por quê:** é a analogia do livro: a pessoa leu a resposta, mas continua sem saber. Sem o documento e em outra conversa, o modelo volta ao conhecimento congelado e, como já visto, pode até inventar.
- **A:** o documento entrou no prompt, não nos pesos nem nos vetores do modelo.
- **B:** a memória ativada guarda dados como nome e preferências do usuário. A aula não diz que ela retém documentos recuperados.
- **C:** o modelo não guarda o conteúdo lido. O que estava no prompt daquela consulta não fica com ele, com ou sem a referência ao documento.
**Conceito:** ler não é aprender

## 10. O efeito do prompt com fontes em toda pergunta, sem escrever as fontes
**Correta: A**
**Por quê:** o professor diz que o RAG faz, de certa forma, o mesmo que ele faz no prompt, mas em uma arquitetura já organizada: a pergunta dispara a busca, e os documentos entram no prompt sem que ninguém precise escrever as fontes.
- **B:** a memória ativada guarda dados como nome e preferências do usuário. A aula não a descreve como um mecanismo de busca em fontes.
- **C:** o retreino põe o conteúdo nos pesos, mas é caro e demorado, e o modelo fica congelado de novo. Não dá o efeito de dado atual a cada pergunta.
- **D:** o RAG não exige treinar com os documentos. Eles entram no prompt no momento da pergunta, e o modelo os lê sem mudar pesos.
**Conceito:** prompt com fontes e RAG
