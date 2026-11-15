# Role Prompting na prática — resumo

## O que a aula faz

O professor sai da teoria da aula anterior e mostra, num script Python com LangChain, a mesma pergunta respondida por dois papéis diferentes. O código fica no repositório da disciplina, na pasta de exemplos de role prompting.

## As três mensagens de um chat

- **system:** as instruções iniciais, que a IA recebe antes de começar a conversa com o usuário final;
- **user:** o que o usuário pede;
- **assistant:** a resposta do modelo.

No experimento, o papel vai no system prompt.

## A montagem do experimento

- **System prompt 1:** "você é um professor universitário de ciência da computação, extremamente técnico, que explica de forma conceitual, com definições formais e pseudocódigo".
- **System prompt 2:** "você é um aluno de high school começando a programar, pouco técnico, que prefere explicar com palavras simples e exemplos".
- **User prompt, igual nos dois:** "explique recursão em 50 palavras". Recursão é quando uma função chama a si mesma.

Com isso, ele monta dois ChatPrompts, cada um com um system prompt e o mesmo user prompt, formata as mensagens e as envia ao modelo (um GPT). O nome do modelo importa pouco: o objetivo é ver a diferença. Só o papel muda entre as duas chamadas.

Uma função auxiliar, `printllmresult`, mostra o prompt e a resposta coloridos, um embaixo do outro, e informa os tokens de entrada, os de saída e o total gasto em cada chamada. O assunto dos tokens volta mais adiante no curso.

## O que observar no resultado

- **Professor:** "técnica de programação em que uma função chama a si mesma", com caso base e casos recursivos que garantem a terminação. É uma resposta formal, bem técnica.
- **Aluno:** linguagem de adolescente, com o "it's like" ("é tipo assim") do inglês, e um exemplo concreto: um espelho refletindo outro espelho, repetindo a imagem até você não conseguir ver mais.

O conteúdo é o mesmo, mas a forma e o exemplo mudam completamente. O system prompt muda muito o comportamento.

## Papel não é só o cargo

"Engenheiro de software" é um papel, mas "engenheiro de software que programa em tal linguagem e explica de forma técnica" também é, e diz muito mais. Em vez de "você é um cozinheiro", algo como "você é um cozinheiro especialista em steaks americanos bem apimentados, técnica usada pelos maiores restaurantes". Escrever só "você é um engenheiro de software, resolva esse bug" e esperar que isso mude muito o resultado é ingenuidade.

## Role prompting não precisa estar no system

Neste exemplo o papel está no system prompt, e normalmente é assim, mas não é obrigatório. O usuário também pode passar um papel no meio da conversa, e a partir dali o modelo começa a se comportar de outra forma.

O resumo do professor acrescenta que vale repetir o teste em outros modelos: alguns seguem o papel com mais consistência, outros deixam as duas respostas mais parecidas.
