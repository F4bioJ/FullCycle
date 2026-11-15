# Gabarito — Como a Gen AI aprende (avançado)

## 1. O que a regra da cadeia troca
**Correta: C**
**Por quê:** Dar uma probabilidade a cada texto que existe é impossível. A regra da cadeia escreve p(texto) como produto de p(token | anteriores), e assim basta aprender uma única função que, dado um começo, devolve a distribuição do próximo token.
- **A:** A unidade continua sendo o token. A regra decompõe o texto em tokens, não agrupa em frases.
- **B:** Amostrar o corpus é outra questão. A regra da cadeia é uma identidade matemática, não uma redução dos dados.
- **D:** O log transforma o produto em soma na prática, mas isso é detalhe de cálculo e não o que a regra da cadeia faz.
**Seção:** 1. O "mapa probabilístico" é uma multiplicação
**Conceito:** regra da cadeia

## 2. Perda média de A (0,50 e 0,50) e de B (0,90 e 0,10)
**Correta: A**
**Por quê:** A: (0,69 + 0,69) / 2 = 0,69. B: (0,11 + 2,30) / 2 ≈ 1,20. A probabilidade média é 0,50 nos dois, mas a curva do −log é assimétrica: ir de 0,50 para 0,90 economiza 0,58, e cair de 0,50 para 0,10 custa 1,61.
- **B:** A perda é a média dos exemplos. O 0,11 não compensa o 2,30.
- **C:** A perda não é função da probabilidade média, e sim a média de −log de cada probabilidade.
- **D:** Compara a média de B (1,20) com a soma de A (1,38). Na mesma base, B perde: 2,41 contra 1,38.
**Seção:** 2. Como o mapa é desenhado: a função de perda
**Conceito:** entropia cruzada

## 3. Curva de perda e "não saber que não sabe"
**Correta: D**
**Por quê:** Dar 1% ao token certo custa mais de seis vezes o que custa dar 50%. O treino empurra o modelo a nunca descartar o plausível, e por isso ele produz continuações plausíveis mesmo sem ter a informação.
- **A:** A perda é calculada em todos os tokens, e os casos de probabilidade baixa são os que mais pesam.
- **B:** O material não liga a perda ao tamanho da resposta. O tamanho aparece na seção sobre desvio na geração.
- **C:** É o inverso: ficar em 0,50 custa 0,69, e errar com confiança (0,01) custa 4,61.
**Seção:** 2. Como o mapa é desenhado: a função de perda
**Conceito:** a perda treina o plausível

## 4. Treinar mais não resolve o descarrilamento
**Correta: B**
**Por quê:** No treino o modelo sempre prevê a partir do texto real. Na geração, prevê a partir do que ele mesmo escreveu, situação que o treino não cobre. Baixar ainda mais a perda melhora a previsão sobre começos corretos, e o problema está nos começos com erro.
- **A:** O material não associa perda baixa a textos curtos.
- **C:** Os embeddings são ajustados no treino, e o desvio não vem deles.
- **D:** A perda é calculada para cada token do trecho.
**Seção:** 3. O escritor que se autocompleta, e por que ele se perde
**Conceito:** diferença entre treino e geração

## 5. Dez etapas de 10 tokens com verificação
**Correta: D**
**Por quê:** Cada etapa tem 0,99¹⁰ ≈ 90% de chance de não desviar. Encadear dez etapas sem verificar dá 0,90¹⁰ ≈ 35%, quase os 37% do texto único, porque é a mesma conta. O que muda o resultado é a verificação: o desvio é pego na etapa em que surgiu e não vira contexto das seguintes.
- **A:** A primeira metade está certa, e a conclusão não: verificar interrompe a propagação, que é a causa do problema.
- **B:** A divisão não altera a chance por token.
- **C:** Um desvio em qualquer etapa anterior contamina as seguintes, se ninguém o corrigir.
**Seção:** 3. O escritor que se autocompleta, e por que ele se perde · Implicações
**Conceito:** acúmulo de erro na autoregressão

## 6. "Café", "chá" e "xícara"
**Correta: A**
**Por quê:** O que aproxima dois vetores é aparecer em contextos parecidos, ou seja, ocupar as mesmas lacunas. "Café" e "chá" são intercambiáveis em "tomei um ___ quente".
- **B:** É a simplificação da aula que o material corrige: aparecer junto não é o critério.
- **C:** Um vetor por palavra é o limite do embedding estático e não tem relação com a distância entre palavras diferentes.
- **D:** Ocupar as mesmas posições aproxima os vetores. Direções opostas correspondem a cosseno −1,0.
**Seção:** 4. Embeddings: de onde vêm as coordenadas · O que a aula simplificou
**Conceito:** contextos parecidos x coocorrência

## 7. Ranking de [3, 4] e [30, 40] para a consulta [4, 3]
**Correta: C**
**Por quê:** cos = (a · b) / (|a| × |b|). Para X: (12 + 12) / (5 × 5) = 0,96. Para Y: (120 + 120) / (50 × 5) = 0,96. Y é X multiplicado por dez, e o cosseno olha só a direção.
- **A:** O produto escalar é dez vezes maior, mas é dividido por um tamanho dez vezes maior.
- **B:** X está de fato mais perto em linha reta, mas a medida usada é o ângulo.
- **D:** [3, 4] e [4, 3] não têm a mesma direção, então o resultado não é 1,0.
**Seção:** 4. Embeddings: de onde vêm as coordenadas
**Conceito:** similaridade de cosseno

## 8. O que rei − homem + mulher ≈ rainha mostra
**Correta: B**
**Por quê:** O resultado mais citado do artigo é que as direções no espaço carregam significado: o deslocamento de "homem" para "mulher" é parecido com o de "rei" para "rainha".
- **A:** Não há pares armazenados. Os vetores são subproduto do treino de prever palavras vizinhas.
- **C:** O material não diz isso. O −1,0 aparece só como leitura geométrica do cosseno.
- **D:** O resultado é aproximado (≈): cai perto do vetor de "rainha", e não em cima de uma palavra.
**Seção:** 4. Embeddings: de onde vêm as coordenadas
**Conceito:** direções com significado

## 9. Custo de trocar embedding estático por contextual
**Correta: A**
**Por quê:** A tabela do material compara os custos: no estático, uma consulta a uma tabela; no contextual, rodar o modelo, porque o vetor é recalculado a cada frase.
- **B:** O cosseno continua valendo para qualquer par de vetores do mesmo espaço.
- **C:** Não há anotação manual. O sentido vem das palavras ao redor.
- **D:** O contextual dá um vetor por ocorrência, calculado na hora, e não uma lista fixa de sentidos.
**Seção:** 5. Um vetor por palavra não basta
**Conceito:** embedding estático x contextual

## 10. Afirmação INCORRETA
**Correta: D**
**Por quê:** Cosseno 0,0 indica vetores perpendiculares, sem relação. Direções opostas dão −1,0.
- **A:** Correta: cada modelo tem o próprio espaço, então os vetores antigos deixam de ser comparáveis.
- **B:** Correta: é a correção que o material faz à frase da aula.
- **C:** Correta: é o aprendizado autossupervisionado.
**Seção:** 4. Embeddings: de onde vêm as coordenadas
**Conceito:** leitura do cosseno
