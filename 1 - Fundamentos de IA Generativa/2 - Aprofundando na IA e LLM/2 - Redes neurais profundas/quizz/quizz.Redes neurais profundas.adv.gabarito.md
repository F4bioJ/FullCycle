# Gabarito — Redes neurais profundas (avançado)

## 1. Dez camadas sem ativação
**Correta: D**
**Por quê:** W2 · (W1 · x) = (W2 · W1) · x. O produto de matrizes é uma matriz, então qualquer pilha de camadas lineares equivale a uma só.
- **A:** A complexidade vem da não linearidade, e não da contagem de camadas.
- **B:** O gradiente chega. O limite é o que a rede consegue representar.
- **C:** É o contrário: o XOR exige não linearidade.
**Seção:** 1. Profundidade só vale com não linearidade
**Conceito:** necessidade da função de ativação

## 2. O que o backpropagation calcula
**Correta: B**
**Por quê:** É a regra da cadeia aplicada da saída para a entrada, dando o gradiente da perda em relação a cada peso.
- **A:** Isso é a passagem para frente.
- **C:** A arquitetura é escolhida por quem projeta a rede.
- **D:** Isso é uma medida de similaridade.
**Seção:** 2. Como a rede aprende: backpropagation
**Conceito:** gradiente por regra da cadeia

## 3. Defeito do one-hot
**Correta: A**
**Por quê:** Cada vetor tem um único 1 em posição diferente. Qualquer par de palavras fica igualmente distante.
- **B:** Todo vetor one-hot tem o tamanho do vocabulário.
- **C:** O vetor one-hot é fixo por palavra.
- **D:** A frequência não aparece no one-hot.
**Seção:** 3. De one-hot a embedding
**Conceito:** one-hot x embedding

## 4. A camada de embedding
**Correta: C**
**Por quê:** É uma tabela com uma linha por palavra. Os valores são ajustados pelo backpropagation junto com o resto da rede.
- **A:** Ninguém monta os vetores à mão.
- **B:** Os valores são aprendidos, e não derivados das letras.
- **D:** Não é uma compressão do one-hot.
**Seção:** 3. De one-hot a embedding
**Conceito:** embedding como tabela aprendida

## 5. Vantagem sobre o n-grama
**Correta: C**
**Por quê:** Como os vetores de "gato" e "cão" são próximos, a rede dá a "o cão está no jardim" uma probabilidade razoável sem tê-la visto.
- **A:** A rede não guarda frases. Guarda pesos.
- **B:** A vantagem está na representação, e não no tamanho da janela.
- **D:** Isso seria uma forma de suavização, sem generalização por semelhança.
**Seção:** 4. O modelo da aula tem nome
**Conceito:** generalização por proximidade de vetores

## 6. Afirmação INCORRETA
**Correta: A**
**Por quê:** O que está fora da janela continua invisível, seja qual for o tamanho dela. Cada janela é processada do zero.
- **B:** Correta: é a origem do desvanecimento de gradiente.
- **C:** Correta: a proximidade emerge do treino.
- **D:** Correta: é a solução para o defeito dos pesos por posição.
**Seção:** 6. Os três limites e para onde eles levam
**Conceito:** janela não é memória

## 7. XOR com camada oculta
**Correta: B**
**Por quê:** Nos novos eixos (h1, h2), os quatro pontos passam a ser separáveis por uma reta. Cada camada redesenha o espaço para a seguinte ter um problema mais fácil.
- **A:** A ReLU zera negativos e mantém positivos. Não arredonda nada (h1 vale 2 no caso 1,1).
- **C:** A solução é uma regra de três linhas, e não uma memorização da tabela. Uma rede só linear, de qualquer tamanho, continuaria sem resolver.
- **D:** O perceptron também aprendia pesos. O limite dele era a única camada, que só traça uma reta.
**Seção:** 1. Profundidade só vale com não linearidade
**Conceito:** camada oculta como nova representação

## 8. Um vetor para os dois sentidos de "banco"
**Correta: D**
**Por quê:** GloVe é um embedding estático: uma linha da tabela por palavra, seja qual for a frase. Modelos como o BERT produzem vetores contextuais, diferentes conforme o uso.
- **A:** Mais dimensões não mudam o fato de existir um único vetor por palavra.
- **B:** Com mais exemplos o vetor melhora, mas continua um só, uma média dos sentidos.
- **C:** Quebrar em pedaços muda o vocabulário, mas "banco" continua com a mesma representação nas duas frases.
**Seção:** O que a aula simplificou
**Conceito:** embedding estático x contextual

## 9. Concatenação ainda generaliza mal
**Correta: C**
**Por quê:** "Cachorro na posição 1" e "cachorro na posição 3" passam por pesos diferentes, e a rede precisa reaprender a palavra em cada posição. A saída das aulas seguintes é compartilhar os pesos.
- **A:** A camada oculta combina as faixas, mas com pesos que distinguem cada uma. A ordem não se perde.
- **B:** Concatenar é justapor, e não somar. A soma é que perde a ordem.
- **D:** Os embeddings são ajustados junto com o resto da rede.
**Seção:** 5. Somar × concatenar
**Conceito:** pesos por posição

## 10. Embeddings prontos em domínio especializado
**Correta: A**
**Por quê:** Os vetores ficam próximos porque isso ajudou a prever palavras nos dados de treino. Jargão raro ou ausente nesses dados ganha vetores que não capturam o sentido.
- **B:** O problema não é o tamanho do texto, e sim o vocabulário fora do que o modelo viu.
- **C:** Os termos têm vetores densos, e não one-hot. Eles só estão mal posicionados.
- **D:** A busca consome os vetores prontos. Camadas a mais não mudam o que o treino aprendeu.
**Seção:** Implicações para quem constrói software com IA
**Conceito:** embedding reflete os dados de treino
