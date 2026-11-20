# Quizz — Langsmith Prompt Hub

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 12
**Base:** material da aula

---

## 1. Uma aplicação de alto volume baixa o prompt do hub do LangSmith pelo SDK a cada requisição que recebe. O que a aula alerta sobre esse cenário?
- A) O hub limita o número de downloads por prompt, e a aplicação passa a receber erro após o limite.
- B) Em larga escala, é preciso fazer cache, em vez de chamar a API do hub o tempo inteiro.
- C) O ideal é fazer fork do prompt a cada requisição, para que mudanças no original não afetem a aplicação.
- D) Prompts baixados com essa frequência precisam estar públicos, para dispensar a API key nas chamadas.

## 2. Um time vai guardar no hub um prompt com uma instrução de sistema fixa e as mensagens de conversa com o usuário. Que tipo de prompt é esse, e como ele se diferencia do outro tipo do hub?
- A) String prompt, que separa instruções do sistema e conversação; o chat prompt é o conteúdo todo numa só chamada.
- B) Os dois tipos guardam o mesmo conteúdo; a diferença é que só o chat prompt aceita variáveis no template.
- C) Chat prompt, que separa instruções do sistema e conversação; o string prompt é o conteúdo todo numa só chamada.
- D) Chat prompt, que guarda o conteúdo todo numa só chamada; o string prompt separa instruções do sistema e conversação.

## 3. Uma empresa quer usar o hub do LangSmith para o prompt de um agente interno, sem que outras pessoas o vejam. O que a aula mostra sobre isso?
- A) O prompt pode ficar público com prompt tags restritas, que escondem o conteúdo de quem busca no hub.
- B) Basta fazer fork de um prompt público, e a cópia fica invisível para quem não pertence à empresa.
- C) Os prompts do hub são públicos por natureza, então o interno precisa continuar no Git do projeto.
- D) O hub tem repositórios privados: o prompt não fica visível e a aplicação o chama com uma API key.
