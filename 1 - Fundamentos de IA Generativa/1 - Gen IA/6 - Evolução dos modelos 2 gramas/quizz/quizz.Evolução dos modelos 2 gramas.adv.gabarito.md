# Gabarito — Evolução dos modelos 2 gramas (avançado)

## 1. P("o cão preto dorme")
**Correta: D**
**Por quê:** P(cão|o) = 1/3, P(preto|cão) = 1/1 = 1 e P(dorme|preto) = 1/2. O produto é 1/6. O bigrama avalia pares, e todos os pares dessa frase foram vistos, embora a frase inteira não.
- **A:** O bigrama não exige a frase inteira no treino, só os pares.
- **B:** Só P(cão|o) vale 1/3. "Cão" só aparece seguido de "preto", então P(preto|cão) = 1.
- **C:** Esquece o último fator, P(dorme|preto) = 1/2.
**Seção:** 1. Um bigrama inteiro em uma tabela
**Conceito:** probabilidade de uma frase no bigrama

## 2. Por que "o cão branco come" dá zero
**Correta: B**
**Por quê:** "Cão" só foi visto antes de "preto", então P(branco|cão) = 0. Como a probabilidade da frase é um produto, esse único zero anula tudo.
- **A:** O bigrama pontua frases nunca vistas, como mostra a pergunta 1.
- **C:** "Branco" aparece no corpus. O zero vem do par, não da palavra.
- **D:** "Branco come" foi visto em "o gato branco come", e P(come|branco) = 1.
**Seção:** 3. Por que não basta aumentar o n · O problema da frequência zero
**Conceito:** frequência zero

## 3. Laplace em "o cão branco come"
**Correta: C**
**Por quê:** Somar 1 a todas as contagens dá probabilidade pequena aos pares não vistos. Como as probabilidades de cada linha continuam somando 1, essa fatia sai dos pares vistos.
- **A:** Palavras fora do vocabulário são tratadas com o `<unk>`. A suavização atua sobre as contagens dos pares.
- **B:** "Cão branco" continua com contagem bem menor que "gato branco", então as duas frases não empatam.
- **D:** A probabilidade dada aos não vistos tem de sair de algum lugar, e sai dos vistos.
**Seção:** 3. Por que não basta aumentar o n · O problema da frequência zero
**Conceito:** suavização

## 4. Trocar o bigrama por um 5-grama
**Correta: A**
**Por quê:** Quanto mais longa a sequência, menor a chance de ela ter aparecido no treino. Com o mesmo corpus, mais sequências corretas ficam sem contagem e recebem zero.
- **B:** O contexto maior existe, mas não há dados para estimá-lo. É o problema dos dados esparsos.
- **C:** A suposição muda com n: o 5-grama olha quatro palavras para trás. E o resultado piora pela esparsidade.
- **D:** As combinações possíveis crescem com n (50.000⁵ contra 50.000²), não encolhem.
**Seção:** 3. Por que não basta aumentar o n
**Conceito:** dados esparsos

## 5. Embeddings em vez de símbolos
**Correta: C**
**Por quê:** Com vetores próximos para "gato" e "cão", o que o modelo aprende sobre um vale, em boa parte, para o outro. É a troca da tabela de símbolos pelo espaço de vetores.
- **A:** É o comportamento dos símbolos isolados, que os embeddings resolvem.
- **B:** Vetores próximos não são vetores iguais. A transferência é parcial ("em boa parte").
- **D:** Proximidade aproxima as probabilidades, não troca uma palavra pela outra.
**Seção:** 4. A limitação que a aula não nomeou: palavras são símbolos isolados
**Conceito:** símbolos x vetores

## 6. LLM em temperatura zero repetindo parágrafo
**Correta: D**
**Por quê:** O loop vem de escolher sempre a continuação mais provável: se a cadeia de escolhas volta ao mesmo ponto, ela se repete. O material diz que LLMs também entram em loop nessas condições, e que repetição costuma ser configuração de geração.
- **A:** O material separa os dois: alucinação é afirmar com fluência algo falso; o loop é defeito do processo de geração.
- **B:** Um LLM tem contexto de milhares de tokens. O problema não é falta de contexto.
- **C:** Frequência zero é um problema de contagem do n-grama, não da geração de um LLM.
**Seção:** 5. O loop "gato preto gato preto" não é só do bigrama
**Conceito:** loop como defeito de geração

## 7. 125 trilhões de combinações
**Correta: A**
**Por quê:** Nenhum corpus cobre essa quantidade. A maioria das combinações, incluindo muitas corretas, nunca aparece e fica com contagem zero.
- **B:** O n-grama continua sendo contagem. O custo do contexto em computação aparece nas implicações, para os modelos neurais.
- **C:** O número não é uma exigência de frases. O ponto é que nenhuma quantidade realista de dados cobre as combinações.
- **D:** O trigrama segue a suposição de Markov com janela de duas palavras.
**Seção:** 3. Por que não basta aumentar o n
**Conceito:** explosão combinatória

## 8. "Só estatística" x "entende"
**Correta: B**
**Por quê:** O LLM também é um modelo estatístico da próxima palavra. As diferenças estão no tamanho do contexto, na representação por vetores e na forma de combinar o contexto (atenção).
- **A:** É a simplificação da aula que o material corrige.
- **C:** O LLM é estatístico. Não há regras de significado à parte.
- **D:** O material não atribui significado ao bigrama, que trata palavras como símbolos sem relação.
**Seção:** 6. O que o bigrama e o LLM têm em comum · O que a aula simplificou
**Conceito:** bigrama e LLM: mesma tarefa, outra representação

## 9. O último fator, P(dorme|preto)
**Correta: D**
**Por quê:** Para decidir entre "dorme" e "come", o modelo consulta só a linha "preto". A informação sobre o animal já ficou para trás. É a ausência de memória, visível na conta.
- **A:** Ponderar o contexto é o que a atenção faz no LLM. O bigrama não combina contexto.
- **B:** A regra da cadeia exata condicionaria a tudo, mas a suposição de Markov corta para só a palavra anterior. É isso que o fator mostra.
- **C:** O fator é condicional a "preto", não a frequência geral de "dorme" no corpus.
**Seção:** 1. Um bigrama inteiro em uma tabela · 2. A suposição de Markov
**Conceito:** suposição de Markov

## 10. Afirmação INCORRETA
**Correta: C**
**Por quê:** O material corrige exatamente isso: aumentar o n esbarra na explosão combinatória e nos dados esparsos, e foi preciso mudar a representação.
- **A:** Correta: "treinar é contar".
- **B:** Correta: com sorteio, as outras continuações também saem.
- **D:** Correta: é o tratamento descrito para palavras fora do vocabulário.
**Seção:** O que a aula simplificou
**Conceito:** representação, não só processamento
