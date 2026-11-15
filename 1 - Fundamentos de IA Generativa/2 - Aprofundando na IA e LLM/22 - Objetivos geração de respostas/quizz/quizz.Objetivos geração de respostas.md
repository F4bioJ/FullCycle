# Quizz — Objetivos geração de respostas

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 22
**Base:** material da aula

---

## 1. Uma pessoa troca uma única palavra no início do prompt e a resposta final sai bem diferente, com o mesmo modelo e os mesmos parâmetros. Qual explicação segue da aula?
- A) A nova palavra ajusta alguns pesos durante a conversa, e essa mudança cresce a cada token gerado.
- B) A nova palavra leva o modelo a buscar outra resposta pronta, guardada para aquele tipo de pergunta.
- C) A nova palavra altera o contexto do próximo token, e cada escolha local passa a influenciar as seguintes.
- D) A nova palavra consome mais tokens, e a janela cheia faz o modelo descartar o início da resposta.

## 2. Perguntado sobre uma definição muito conhecida, um modelo devolve quase sempre o mesmo texto. Um colega conclui: "ali ele parou de gerar e só copia uma resposta armazenada". Como a aula trata isso?
- A) A resposta parece memorizada, mas na operação o modelo segue prevendo um token por vez.
- B) A conclusão está certa: com perguntas comuns, ele troca a predição por uma consulta à memória.
- C) A conclusão está certa em parte: ele copia o início guardado e prevê só os tokens finais.
- D) A repetição não vem do modelo, e sim de um texto do provedor colocado no meio do prompt.

## 3. Duas palavras têm o mesmo número de letras: uma é muito comum nos textos, a outra é rara. O que a aula leva a esperar no Tokenizer?
- A) As duas quebrarem em igual número de tokens, porque a quebra acompanha a quantidade de letras.
- B) As duas quebrarem nas sílabas, porque o tokenizador segue a divisão gramatical da língua.
- C) A rara virar um token único, porque o vocabulário reserva unidades inteiras para termos específicos.
- D) A rara quebrar em mais tokens, porque seus pedaços são mais frequentes do que a palavra inteira.

## 4. Um app recebe dois documentos com o mesmo número de palavras: uma conversa simples e um laudo cheio de termos técnicos raros. O laudo chega muito mais perto do limite da janela de contexto. Por quê?
- A) Termos técnicos exigem raciocínio simbólico, e essa etapa consome uma parte reservada da janela.
- B) Termos raros se quebram em vários tokens, e a janela é ocupada por tokens, não por palavras.
- C) Termos raros não estão nos pesos, e o modelo precisa guardar cada um deles na memória ativada.
- D) Termos técnicos provocam mais alucinação, e as correções internas ocupam espaço na janela.

## 5. Uma equipe mede no Tokenizer quantos tokens seus prompts gastam no modelo A e usa esse número para prever o custo de migrar para o modelo B. Qual é o risco?
- A) Nenhum relevante: a quebra vem do idioma do texto, então a contagem só muda entre línguas.
- B) Nenhum relevante: o modelo B pode quebrar diferente, mas o custo é medido por palavra.
- C) A contagem valer só para a entrada: a quebra é igual, mas a saída de cada modelo tem outro tamanho.
- D) A previsão errar: o modelo B pode quebrar o mesmo texto de outra forma e gastar outra quantidade.

## 6. No Tokenizer, um modelo mais antigo quebra "cachorro" em pedaços, e um mais novo mantém a palavra em um token só. Qual é a causa, na explicação do professor?
- A) O treino do mais antigo teve menos tokens, e "cachorro" não se firmou ali como palavra forte.
- B) O mais antigo trabalha com uma janela de contexto menor, o que obriga a dividir palavras maiores.
- C) O fine-tuning do mais novo juntou em um só token as palavras que avaliadores humanos aprovaram.
- D) O mais novo aprendeu "cachorro" com as conversas dos usuários depois que o treino terminou.

## 7. Uma empresa quer o mesmo modelo respondendo com tom empático no atendimento e de forma direta no suporte técnico. Alguém diz que serão precisos dois modelos treinados em separado. O que a aula indica?
- A) Serão precisos em parte: o prompt ajusta o formato, mas o tom empático pede um fine-tuning próprio.
- B) Bastam os parâmetros: temperatura e Top-K escolhem o tom, e o prompt define só o assunto da resposta.
- C) Bastam prompt e parâmetros: eles deslocam as probabilidades do próximo token sem mudar os pesos.
- D) Basta o prompt: os parâmetros mudam sobretudo o tamanho da resposta, e o tom não passa por probabilidades.

## 8. Para deixar um chatbot menos repetitivo, a equipe aumenta bastante a temperatura e o Top-P. As respostas ficam mais variadas, mas surgem mais afirmações sem base. O que melhor explica?
- A) Os parâmetros altos alteraram as probabilidades guardadas nos pesos, e os fatos ficaram menos prováveis.
- B) A escolha do próximo token ficou mais livre, e isso traz variedade junto com risco de alucinação.
- C) As respostas variadas ficaram mais longas, e o excesso de tokens empurrou os fatos para fora da janela.
- D) O modelo já alucinava no mesmo nível, e a variedade só deixou visível o que antes saía repetido.

## 9. Uma LLM resume contratos com configuração restritiva e vai bem. A equipe usa a mesma configuração para sugerir slogans, e eles saem previsíveis e parecidos entre si. Qual decisão segue a lógica da aula?
- A) Abrir os parâmetros só nos slogans, aceitando ali mais risco de deriva e mantendo o contrato restritivo.
- B) Abrir os parâmetros nas duas tarefas, porque uma configuração única deixa o comportamento mais previsível.
- C) Manter os parâmetros e fazer fine-tuning com slogans aprovados, porque a falta de variedade vem do treino.
- D) Manter os parâmetros e mudar só o prompt, porque abrir a geração levaria os slogans a alucinar demais.

## 10. Sobre o Tokenizer da OpenAI, qual afirmação está INCORRETA?
- A) Permite comparar como modelos diferentes quebram a mesma frase, e dá para testar sem fazer login.
- B) Ajuda a antecipar custo, porque mostra em quantos tokens um texto será dividido em cada modelo.
- C) Mostra que um espaço seguido de palavra pode formar um token, e que um caractere também pode.
- D) Mostra que a quebra de uma frase é igual entre modelos, e que só o preço por token muda entre eles.
