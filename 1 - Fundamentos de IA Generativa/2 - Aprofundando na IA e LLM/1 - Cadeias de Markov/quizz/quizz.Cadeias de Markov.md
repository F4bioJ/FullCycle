# Quizz — Cadeias de Markov

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 1
**Base:** material da aula

---

## 1. No POS tagging descrito na aula, o que ocupa o lugar de "chuva" e de "guarda-chuva aberto" do exemplo do clima?
- A) A palavra faz o papel de "chuva"; a categoria gramatical, o de "guarda-chuva".
- B) O fonema faz o papel de "chuva"; a palavra, o de "guarda-chuva".
- C) A categoria gramatical faz o papel de "chuva"; a palavra, o de "guarda-chuva".
- D) A frase faz o papel de "chuva"; a categoria gramatical, o de "guarda-chuva".

## 2. Num HMM do clima, qual pergunta é respondida pela matriz de emissão?
- A) Estando nublado, qual a chance de eu ver um guarda-chuva aberto?
- B) Estando nublado hoje, qual a chance de o estado seguinte ser chuva?
- C) Dadas as observações, qual sequência de climas é a mais provável?
- D) Qual a chance de eu ver céu limpo e, em seguida, vento forte?

## 3. Três tarefas: (1) medir a probabilidade de uma sequência observada; (2) achar os estados ocultos mais prováveis; (3) ajustar os parâmetros aos dados. Qual associação segue a aula?
- A) (1) Viterbi; (2) forward-backward; (3) Baum-Welch.
- B) (1) forward-backward; (2) Baum-Welch; (3) Viterbi.
- C) (1) Baum-Welch; (2) Viterbi; (3) forward-backward.
- D) (1) forward-backward; (2) Viterbi; (3) Baum-Welch.

## 4. O que distingue o HMM do bigrama, segundo a aula?
- A) O HMM guarda em memória tudo o que processou; o bigrama, só o par.
- B) O HMM supõe uma estrutura interna não visível; o bigrama, só as palavras.
- C) O HMM realimenta decisões anteriores; o bigrama segue em linha reta.
- D) O HMM dispensa dados rotulados; o bigrama depende de rotulagem.

## 5. Qual suposição do HMM a aula aponta como causa da dificuldade com dependências de longo prazo?
- A) Os estados são ocultos, então o modelo não confirma se acertou.
- B) As observações precisam ser rotuladas, o que encarece o treino.
- C) O número de estados é fixo, então faltam estados para frases longas.
- D) A observação depende do estado atual, e este, só do estado anterior.

## 6. O que o professor quer dizer ao chamar o HMM de "linear"?
- A) Que o custo de cálculo cresce na proporção do tamanho da frase.
- B) Que ele avança em uma direção, sem que algo volte e realimente o anterior.
- C) Que ele trata as palavras em fila, sem usar os estados ocultos.
- D) Que as probabilidades de transição não mudam ao longo da sequência.

## 7. Um time quer treinar um HMM de POS tagging para um idioma sem nenhum corpus anotado. Que obstáculo a aula antecipa?
- A) Será preciso rotular os dados, um processo caro e demorado.
- B) O HMM não se aplica a idiomas com ordem de palavras flexível.
- C) O Viterbi exige que o idioma tenha poucas categorias gramaticais.
- D) Faltará processamento, já que o HMM não roda em paralelo.

## 8. Por que, segundo a aula, fala, POS tagging e sequências de DNA funcionam bem com HMM?
- A) Porque nesses casos os estados podem ser observados diretamente.
- B) Porque são domínios em que não há ambiguidade a resolver.
- C) Porque têm estrutura sequencial probabilística clara e de curto alcance.
- D) Porque exigem relacionar pontos muito distantes da sequência.

## 9. Se alguém pedisse a um HMM uma explicação longa sobre quem foi Markov, o que a aula prevê?
- A) Um texto coerente, porém limitado a poucas frases curtas.
- B) Um texto que perde a coerência e repete padrões, ficando prolixo.
- C) Um texto fluente, porém com fatos inventados sobre Markov.
- D) Nenhum texto, pois o HMM classifica sequências e não as gera.

## 10. Sobre o HMM, qual afirmação está INCORRETA segundo a aula?
- A) Os estados podem mudar ao longo da sequência, com certa probabilidade.
- B) Cada estado tem probabilidades associadas de gerar cada observação.
- C) Modelos de Markov ainda são usados em vários lugares.
- D) As observações são a parte do sistema que não se vê diretamente.
