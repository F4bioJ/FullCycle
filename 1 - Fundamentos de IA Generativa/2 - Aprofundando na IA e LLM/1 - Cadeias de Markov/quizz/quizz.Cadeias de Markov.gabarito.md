# Gabarito — Cadeias de Markov

## 1. POS tagging x exemplo do clima
**Correta: C**
**Por quê:** No clima, "chuva" é estado oculto e "guarda-chuva aberto" é observação. No POS tagging, os estados são as categorias gramaticais (verbo, substantivo) e "as observações vão ser as palavras".
- **A:** Inverte os papéis: a palavra é o que se vê, a categoria é o que se infere.
- **B:** Fonema como estado oculto é o caso do reconhecimento de fala, em que a observação é o sinal de áudio.
- **D:** A frase não é um estado, e a categoria gramatical não é observada diretamente.
**Conceito:** estado oculto x observação

## 2. A pergunta da matriz de emissão
**Correta: A**
**Por quê:** A emissão liga estado a observação: "cada estado oculto pode ter uma probabilidade associada de gerar uma determinada observação".
- **B:** Estado para estado é a matriz de transição.
- **C:** A sequência de estados mais provável é o resultado do Viterbi.
- **D:** A probabilidade de uma sequência de observações é o que o forward-backward calcula.
**Conceito:** matriz de emissão x matriz de transição

## 3. Os três algoritmos
**Correta: D**
**Por quê:** O forward-backward calcula "a probabilidade de uma sequência observada", o Viterbi mostra "a sequência de estados ocultos mais provável" e o Baum-Welch (EM) ajusta "os parâmetros do HMM com base nos dados observados".
- **A:** Troca os dois primeiros: o Viterbi devolve estados, não a probabilidade da sequência.
- **B:** O Baum-Welch ajusta parâmetros, e o Viterbi não treina o modelo.
- **C:** O Baum-Welch não mede a probabilidade da sequência, e o forward-backward não ajusta parâmetros.
**Conceito:** forward-backward, Viterbi e Baum-Welch

## 4. HMM x bigrama
**Correta: B**
**Por quê:** A aula fala em sair "das dependências explícitas que a gente tem só de palavras" para "uma estrutura interna que governa toda essa geração de observação" e "que não é diretamente visível".
- **A:** Guardar o que foi processado é a ideia das RNNs. O HMM depende só do estado anterior.
- **C:** O professor afirma o contrário: o HMM "vai só numa direção", sem dado que retroalimente.
- **D:** A aula aponta a necessidade de rotular dados como limitação do HMM.
**Conceito:** estrutura oculta x dependência explícita

## 5. A suposição que limita o longo prazo
**Correta: D**
**Por quê:** O HMM "vai assumir que a próxima observação depende apenas do estado atual, e o estado atual depende apenas do estado anterior. Isso vai limitar ele de capturar dependência de longo prazo".
- **A:** Estados ocultos são a característica central do modelo, não a causa dessa limitação.
- **B:** A rotulagem é outra limitação citada, ligada a custo e tempo, não ao alcance do contexto.
- **C:** A aula não fala em falta de estados. O problema é de quem cada passo depende.
**Conceito:** hipótese de Markov

## 6. O que significa "linear"
**Correta: B**
**Por quê:** "Essa linearidade significa que ele vai só numa direção. Eu não tenho um dado que retroalimenta", "sem ciclos complexos de interações cruzadas".
- **A:** A aula não trata de custo computacional ao falar de linearidade.
- **C:** Os estados ocultos continuam sendo usados. O linear é a direção do fluxo.
- **D:** A aula não discute se as probabilidades mudam com o tempo.
**Conceito:** fluxo unidirecional do HMM

## 7. Idioma sem corpus anotado
**Correta: A**
**Por quê:** "Você precisava rotular os dados pra conseguir trabalhar", e "a rotulagem é um processo caro e que demora pra fazer". Sem corpus anotado, esse custo vem primeiro.
- **B:** A aula não faz essa restrição. O limite apontado para linguagem é o longo prazo.
- **C:** Nada na aula condiciona o Viterbi ao número de categorias.
- **D:** A falta de paralelismo é a limitação das RNNs (aula 3), não a apontada aqui.
**Conceito:** custo de rotulagem

## 8. Por que esses casos funcionam bem
**Correta: C**
**Por quê:** "Esses casos vão funcionar muito bem porque tem uma estrutura sequencial probabilística muito clara", e o modelo consegue "capturar as dependências de curto prazo".
- **A:** Se os estados fossem observáveis, não haveria o que inferir. O HMM existe para estados ocultos.
- **B:** Há incerteza nos três casos. É por isso que o modelo é probabilístico.
- **D:** É o cenário em que o HMM "começa a quebrar".
**Conceito:** onde o HMM se aplica bem

## 9. Explicação longa gerada por um HMM
**Correta: B**
**Por quê:** Para texto longo, o HMM "possivelmente vai quebrar a coerência e vai repetir alguns padrões. Vai ficar meio prolixo".
- **A:** O problema descrito não é texto curto, é texto que se desorganiza.
- **C:** Fluência com fatos inventados é o perfil de alucinação dos LLMs, não a falha atribuída ao HMM.
- **D:** A aula diz que ele não é a melhor estratégia para geração livre, não que seja incapaz de gerar.
**Conceito:** HMM não serve para geração livre de texto

## 10. Afirmação INCORRETA sobre o HMM
**Correta: D**
**Por quê:** É o inverso: as observações são "os dados que a gente vê". O que não se vê diretamente são os estados ocultos.
- **A:** Correta: "ele não precisa continuar o tempo todo naquele estado, você pode transitar entre estados".
- **B:** Correta: é a distribuição de emissão.
- **C:** Correta: "tem bastante lugar que ainda usa os modelos de Markov".
**Conceito:** observações são visíveis; estados são ocultos
