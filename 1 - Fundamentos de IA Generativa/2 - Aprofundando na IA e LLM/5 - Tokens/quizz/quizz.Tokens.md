# Quizz — Tokens

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 5
**Base:** material da aula

---

## 1. Um usuário escreve uma palavra inventada, que nunca apareceu nos textos que o modelo viu. Por que um modelo baseado em tokens ainda consegue processá-la?
- A) O modelo busca a palavra mais parecida no vocabulário e a troca antes de processar.
- B) A palavra vira um token especial de "desconhecida", e o resto da frase dá o contexto.
- C) A palavra é quebrada em pedaços mais familiares, que o vocabulário já conhece.
- D) O modelo a divide em letras soltas, e o significado vem da ordem delas na frase.

## 2. Como o Byte Pair Encoding chega aos seus tokens?
- A) Parte de unidades mínimas, como letras, e agrupa as combinações que mais se repetem.
- B) Parte de palavras inteiras do dicionário e as divide até que cada pedaço caiba num limite.
- C) Parte de sílabas e prefixos da gramática e junta os que formam palavras com sentido.
- D) Parte de unidades mínimas e agrupa as combinações de maior significado no idioma.

## 3. Segundo a aula, por que "GPT" tende a virar um token único enquanto "interessante" pode ser dividida?
- A) Siglas viram tokens únicos por regra do tokenizador, e palavras comuns são divididas por regra.
- B) "GPT" é curta o bastante, e "interessante" passa do limite de letras que cabe num token.
- C) "GPT" foi inserida no vocabulário pelos criadores do modelo, e "interessante" não, por ser comum.
- D) "GPT" se repete como um bloco, e partes de "interessante" se repetem mais que a palavra inteira.

## 4. Na frase "GPT-4 é poderoso", o "4" costuma virar um token separado de "GPT". Segundo a aula, por quê?
- A) O "4" é um dígito, e o tokenizador trata dígitos numa etapa à parte, antes das letras.
- B) Número é difícil de conectar a outras sequências, então não forma uma combinação forte.
- C) Tokens de um único caractere só existem quando representam uma palavra completa.
- D) O hífen antes do "4" funciona como separador e impede o agrupamento.

## 5. Um colega afirma que o ChatGPT cria tokens novos a cada conversa, conforme o usuário escreve. O que a aula diz sobre isso?
- A) Não procede: os tokens foram formados no treino, e na conversa só são aplicados.
- B) Procede em parte: palavras novas ganham tokens temporários durante a conversa.
- C) Não procede: os tokens são formados na atenção, a cada resposta que o modelo gera.
- D) Não procede: os tokens existem antes do treino, definidos junto com a gramática do idioma.

## 6. Uma equipe compara um vocabulário de palavras inteiras com um de tokens. Qual ganho do segundo a aula aponta?
- A) Cada unidade passa a carregar um significado completo, o que separa bem as palavras do idioma.
- B) O texto vira menos unidades, e o modelo processa a mesma frase com menos esforço.
- C) Os erros de grafia e os outros idiomas são corrigidos e traduzidos antes de entrar no modelo.
- D) O vocabulário total é menor, e fica mais fácil lidar com idiomas e estilos de escrita diferentes.

## 7. Por que os provedores de IA cobram por token, e não por palavra ou por requisição?
- A) Porque cada requisição gasta um token de acesso, que o provedor soma no fim do mês.
- B) Porque cobrar por palavra exigiria um dicionário por idioma, e o token dispensa esse dicionário.
- C) Porque o modelo processa token a token, então o trabalho cresce com o volume deles.
- D) Porque o provedor converte o texto em tokens antes, e cobra por essa conversão.

## 8. Um desenvolvedor conta 7.500 palavras num relatório e quer enviá-lo a um modelo anunciado com 8.000 de janela de contexto. Qual é a leitura correta?
- A) Cabe com folga, pois a janela mede palavras e 7.500 é menor do que o limite de 8.000.
- B) Não dá para garantir: a janela é medida em tokens, e palavras não dizem quantos o texto rende.
- C) Não cabe: a janela mede tokens, e toda palavra rende pelo menos dois tokens.
- D) Cabe, mas o modelo só considera o início, pois metade da janela fica reservada para a resposta.

## 9. Qual das afirmações sobre o tamanho dos tokens está INCORRETA?
- A) Uma palavra curta e comum, como "sol", pode ser um único token.
- B) Uma palavra pode se dividir em dois tokens ou mais, como acontece com "naturalmente".
- C) Um token pode ser uma letra, um pedaço de palavra ou uma palavra inteira.
- D) O mais comum é a palavra render quatro ou cinco tokens, e as de um token são exceção.

## 10. Um colega diz que, com tokens no lugar de palavras, os embeddings das aulas anteriores deixam de fazer sentido. Qual é a correção mais fiel à aula?
- A) Ele está certo: o embedding era de palavras, então o token exige uma representação nova.
- B) Ele está meio certo: o embedding vale só para tokens de palavra inteira, e os pedaços ficam de fora.
- C) Ele está errado: cada token passa por embedding e depois segue para a atenção e a probabilidade.
- D) Ele está errado: o embedding continua valendo, mas só a saída do modelo passa a ser em tokens.
