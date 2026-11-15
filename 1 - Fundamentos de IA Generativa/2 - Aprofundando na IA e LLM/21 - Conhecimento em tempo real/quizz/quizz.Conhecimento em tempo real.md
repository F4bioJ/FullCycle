# Quizz — Conhecimento em tempo real

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 21
**Base:** material da aula

---

## 1. Uma loja colocou um chatbot sobre uma LLM cujo treinamento terminou há um ano, sem nenhuma busca externa. Um cliente pergunta o preço de um produto que mudou ontem, e o bot responde com segurança um valor que nunca existiu. O que melhor explica o caso?
- A) O modelo leu o preço novo, mas a janela de contexto estourou e ele completou o valor de cabeça.
- B) O modelo tem o dado certo nos pesos, porém a fluência textual o leva a arredondar os números.
- C) O modelo parou no treino, não tem o dado novo e pode inventar algo só para dar uma resposta.
- D) O modelo sabe que o preço mudou, mas, sem busca externa, estima o valor novo a partir do antigo.

## 2. Um provedor passa a rodar todas as conversas de um grupo de usuários na mesma máquina de GPU. Alguém conclui que agora o modelo vai aprender com esse grupo. O que a aula permite responder?
- A) Não muda: estar na mesma máquina não faz a conversa virar treino, que seria caro demais a cada interação.
- B) Aprende em parte: as instâncias passam a dividir o contexto, e o que foi dito vale até o servidor reiniciar.
- C) Não muda: o que ensina o modelo é guardar as conversas em banco, o que independe de a máquina ser a mesma.
- D) Passa a aprender: a falta de comunicação entre instâncias era a barreira, e agora os pesos podem mudar.

## 3. O provedor de uma LLM guarda todas as conversas em um banco de dados. Um usuário conclui: "então o modelo já está aprendendo com o que eu digo hoje". Onde está o erro dele?
- A) Guardar conversas só existe na conta paga, e o modelo aprende apenas com esse grupo de usuários.
- B) Os pesos até mudam a cada conversa, mas o ajuste é pequeno demais para aparecer na resposta.
- C) O modelo consulta esse banco a cada pergunta, o que é recuperação de conversas e não aprendizado.
- D) Guardar não é treinar: só um treino futuro mudaria os pesos, e a cada conversa custaria demais.

## 4. Você abre uma conversa nova no GPT-4 de uma conta paga, sem citar nada, e ele já sabe seu nome. A conversa anterior tinha estourado o limite. O que explica isso?
- A) O contexto da conversa anterior continua ativo e é herdado por toda conversa aberta depois.
- B) Uma memória à parte guardou o nome, e o modelo a consulta quando precisa, sem mudar os pesos.
- C) O modelo recalculou uma parte pequena dos pesos só para a sua conta, sem alterar o resto dele.
- D) O nome veio da internet por RAG, pois as contas pagas fazem uma busca externa a cada pergunta.

## 5. Depois de muitas perguntas na mesma janela, a conversa estoura e o produto pede para abrir outra. Na janela nova, o modelo ignora as regras de formato que você tinha passado no início. O que resolve melhor?
- A) Repetir as regras algumas vezes na janela nova, até o modelo incorporá-las aos pesos e parar de esquecer.
- B) Ativar a memória do produto, que guarda a conversa anterior inteira e a devolve assim que a janela abre.
- C) Passar de novo as regras que importam na janela nova, porque o contexto antigo ficou na outra conversa.
- D) Pedir ao modelo que releia a conversa anterior, já que ele a mantém guardada para retroalimentar a resposta.

## 6. Um escritório quer um assistente que responda com base em julgamentos publicados ontem e em dados internos que mudam toda hora. Qual caminho é mais adequado?
- A) Ativar a memória do produto e colar os julgamentos na conversa, para o modelo guardá-los com o tempo.
- B) Fazer fine-tuning semanal com os julgamentos novos, para cada versão incorporar o que saiu na semana.
- C) Instruir o modelo com Chain of Thought, para raciocinar passo a passo a partir do que sabe de direito.
- D) Buscar os documentos atuais a cada pergunta e colocá-los no prompt, para o modelo gerar a partir deles.

## 7. Um modelo treinado em 2026 responde com a memória de 2025, e um time avalia duas saídas: retreinar ou adotar RAG. Qual comparação está correta?
- A) Retreinar põe o dado nos pesos, mas é caro, lento e congela de novo; RAG traz o dado atual sem ensinar nada ao modelo.
- B) Retreinar é o caminho para ter o dado novo na resposta; RAG ajuda a achar o documento que o modelo já viu no treino.
- C) Retreinar põe o dado nos pesos e é caro; RAG evita repetir esse custo porque o modelo retém o que leu nas buscas.
- D) Retreinar é caro, mas deixa o modelo em dia até o próximo fato novo; RAG troca esse custo por ajustes leves nos pesos.

## 8. Em um sistema com RAG, o usuário pergunta sobre uma norma publicada hoje. O que acontece, e em que ordem?
- A) O modelo gera um rascunho com o que sabe, a busca confere os documentos atuais e corrige o que estiver errado.
- B) A busca traz os documentos atuais, eles entram no prompt e o modelo gera a resposta com o que aprendeu no treino.
- C) A busca traz os documentos atuais, eles viram ajustes temporários nos pesos e o modelo gera a resposta com eles.
- D) O modelo recebe a pergunta, procura a norma na memória ativada e só recorre aos documentos se não a encontrar.

## 9. Com RAG ligado, um assistente acerta uma pergunta sobre uma resolução nova. O time desliga o RAG, abre outra conversa e repete a pergunta. Pelo que a aula mostra, o que se deve esperar?
- A) O documento lido na primeira resposta passou a fazer parte dos vetores, então o modelo acerta de novo.
- B) A memória ativada guardou sozinha o que veio dos documentos recuperados, então o modelo acerta de novo.
- C) O modelo guardou o conteúdo lido e perdeu só a referência ao documento, então acerta sem citar a fonte.
- D) O modelo só leu o trecho naquela consulta e nada mudou por dentro, então não sabe e pode até inventar.

## 10. Quando precisa de dado atual, o professor indica no prompt as fontes onde o modelo deve buscar. Uma empresa quer o mesmo efeito em toda pergunta dos atendentes, sem que ninguém escreva as fontes. Pelo que a aula diz, o que atende a esse pedido?
- A) RAG, que faz algo parecido com o prompt, só que com a busca em uma arquitetura já organizada.
- B) Memória ativada, que registra as fontes usadas pelos atendentes e as consulta em cada pergunta.
- C) Retreino periódico com as fontes, que dispensa a busca porque o conteúdo delas já vai para os pesos.
- D) RAG, mas só depois de treinar o modelo com os documentos que a busca vai trazer para o prompt.
