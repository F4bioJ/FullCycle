# Quizz — Top_K & Top_P

**Capítulo:** 3 - Hands on · **Aula:** 4
**Base:** material da aula

---

## 1. Para "O céu hoje estava...", o modelo atribui 60% a "limpo" e menos que isso aos demais. Mesmo assim, em algumas execuções sai "nublado". Qual é a melhor explicação?
- A) Os pesos do modelo são ajustados entre as execuções, e por isso "nublado" ganha força com o uso.
- B) O cálculo do próximo token é aproximado, e em certas execuções "nublado" passa a liderar a lista.
- C) A escolha final tem aleatoriedade, e assim um token menos provável pode sair mesmo sem liderar.
- D) O limite de tokens da saída encurtou a resposta e obrigou o modelo a trocar o token escolhido.

## 2. Um time propõe: "vamos tirar toda a aleatoriedade e pegar sempre o token mais provável, para a conversa soar mais humana". O que a aula prevê?
- A) O oposto: repetindo as mesmas escolhas, o texto soa mecânico como um chatbot de árvore de decisão.
- B) O esperado: como o token mais provável é o mais natural, o texto tende a soar mais humano.
- C) Mais variedade: sem o sorteio, o modelo passa a explorar tokens que antes ficavam de fora.
- D) Pouca mudança: a aleatoriedade afeta mais o tempo de resposta do que o texto final gerado.

## 3. Com top-k = 3, o modelo ordena: "céu" 0,40; "mar" 0,30; "campo" 0,14; "deserto" 0,13; "luz" 0,03. O que acontece com "deserto" nesse passo?
- A) Entra na disputa, porque está quase empatado com o terceiro e o corte tolera diferenças pequenas.
- B) Entra na disputa com chance menor, porque o corte reduz o peso dos tokens fora do K sem retirá-los.
- C) Fica de fora se os três primeiros somarem 0,9 ou mais, porque o corte depende da massa coberta.
- D) Fica de fora, mesmo quase empatado com o terceiro, porque o corte considera a posição no ranking.

## 4. Um dev define top-k = 1 e temperatura 1,0, esperando um texto bem criativo. O que é mais provável?
- A) Texto criativo: a temperatura alta age antes do corte e amplia o K conforme a abertura pedida.
- B) Texto mecânico: com um só candidato elegível, não há entre quem sortear, mesmo em temperatura alta.
- C) Texto criativo: a temperatura 1,0 desativa o top-k, porque os dois controles não atuam juntos.
- D) Variação pequena: o K deixa um candidato por passo, mas a temperatura alta pode trocar o líder.

## 5. Com top-p = 0,9 fixo, em um passo o líder sozinho tem 0,95; em outro, a probabilidade se espalha por dezenas de tokens. O que ocorre com o conjunto elegível?
- A) Fica pequeno no primeiro passo e cresce no segundo, porque o corte para quando a soma atinge 0,9.
- B) Fica grande no primeiro passo e diminui no segundo, porque um líder forte exige cobrir mais massa.
- C) Mantém o mesmo tamanho nos dois passos, porque p define o número de candidatos após a ordenação.
- D) Fica pequeno nos dois passos, porque um p alto retém os tokens que individualmente passam de 0,9.

## 6. Em um passo, o líder tem 0,97 e o restante se divide em valores ínfimos. Como top-k = 5 e top-p = 0,9 se comparam nesse passo?
- A) Ficam iguais: os cinco primeiros somam mais de 0,9, então o top-k também para no líder.
- B) O top-p mantém mais tokens, porque precisa somar toda a cauda da distribuição antes de parar.
- C) O top-k mantém só o líder, porque o corte por K desconsidera tokens de probabilidade muito baixa.
- D) O top-k mantém cinco tokens, quatro deles quase sem chance; o top-p mantém só o líder.

## 7. Com top-k = 2, um dev sobe a temperatura de 0,1 para 1,0. O que muda na escolha do próximo token?
- A) Entra um terceiro candidato, porque a temperatura alta abre o corte feito pelo K.
- B) Os dois seguem como os únicos elegíveis, com chances mais equilibradas entre eles.
- C) Os dois seguem com as chances de antes, porque o K congela a distribuição do passo.
- D) O segundo passa à frente do primeiro, porque a temperatura alta inverte o ranking.

## 8. Sobre top-k e top-p, qual afirmação está INCORRETA?
- A) Os dois ordenam os tokens por probabilidade antes de decidir quais continuam elegíveis.
- B) Top-k é uma técnica estatística, e seu uso não se restringe aos modelos de linguagem.
- C) Com o mesmo K, a probabilidade coberta pelo conjunto tende a ser igual em todos os passos.
- D) Um top-p de 0,6 pode manter dois tokens em um contexto e mais tokens em outro.

## 9. No exemplo do sol, os primeiros tokens são "céu" 0,35, "horizonte" 0,25 e "mar" 0,15. Se o top-p cai de 0,9 para 0,6, quem fica elegível?
- A) Só "céu" e "horizonte", porque a soma já atinge 0,6 no segundo token.
- B) Só "céu", porque um p mais baixo reduz a escolha ao token mais provável.
- C) "Céu", "horizonte" e "mar", porque a soma precisa ultrapassar 0,6 para parar.
- D) Os mesmos cinco de antes, porque p altera o sorteio e mantém o conjunto.

## 10. No Playground, um aluno sobe a temperatura e baixa o top-p na mesma rodada, vê o texto mudar e conclui: "o top-p deixou a resposta mais criativa". Como avaliar essa conclusão?
- A) Está certa: um top-p menor amplia o conjunto elegível, e isso produz a criatividade percebida.
- B) Não se sustenta: os dois mudaram juntos e agem em camadas diferentes, então faltou isolar um deles.
- C) Não se sustenta: o top-p fixa a quantidade de candidatos, então o efeito veio da temperatura.
- D) Está certa: quando os dois mudam juntos, a temperatura perde efeito e o top-p decide o resultado.
