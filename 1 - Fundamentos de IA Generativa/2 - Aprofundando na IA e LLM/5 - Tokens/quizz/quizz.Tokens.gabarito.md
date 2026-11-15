# Gabarito — Tokens

## 1. Palavra inventada
**Correta: C**
**Por quê:** A palavra nova é quebrada em pedaços mais familiares, que o vocabulário já tem. Assim, para o modelo, nunca existe uma palavra totalmente desconhecida: só combinações de pedaços que ele conhece.
- **A:** Não há troca por palavra parecida. O modelo trabalha com os pedaços da própria palavra.
- **B:** A aula não descreve um token de "desconhecida". A palavra é decomposta, e nada se perde.
- **D:** O que a aula descreve são pedaços familiares que o vocabulário já tem, não letras soltas interpretadas só pela ordem.
**Conceito:** tokens e palavras desconhecidas

## 2. Como o BPE chega aos tokens
**Correta: A**
**Por quê:** O BPE começa com unidades mínimas e vai agrupando as combinações que aparecem muitas vezes. Quanto mais recorrente a sequência, mais forte ela fica como token; combinações fracas permanecem separadas.
- **B:** O caminho é o inverso: parte de unidades pequenas e agrupa, não de palavras inteiras que são divididas.
- **C:** O agrupamento não parte de uma lista pronta de sílabas e prefixos.
- **D:** O critério é a repetição nos textos, não o significado do grupo.
**Conceito:** BPE agrupa por incidência

## 3. GPT x interessante
**Correta: D**
**Por quê:** "GPT" aparece muito junto nos textos, então fica forte como bloco. "Interessante" tem trechos que se repetem mais do que a palavra inteira, e por isso é dividida. É a mesma lógica de "cach" virar token e "cachorro" não: o pedaço pode ser mais forte que o todo.
- **A:** Não há regra para siglas ou para palavras comuns. A força estatística decide.
- **B:** Não existe um limite fixo de letras por token.
- **C:** Não há inclusão manual de blocos pelos criadores do modelo. A decisão é estatística.
**Conceito:** pedaço mais forte que o todo

## 4. Por que o "4" fica separado
**Correta: B**
**Por quê:** Na aula, o "4" é um número difícil de conectar a outras sequências, então não tem ligação forte com nada e permanece como token próprio. Combinações fracas ficam separadas.
- **A:** A aula não descreve uma etapa à parte para dígitos. A decisão vem da força das combinações.
- **C:** Tokens de um caractere existem por frequência, sem exigir que sejam palavras completas ("é" sozinho é um exemplo da aula).
- **D:** O hífen não é apontado como separador. O motivo citado é a dificuldade de conectar o número a outras sequências.
**Conceito:** combinação fraca fica separada

## 5. Quando os tokens são formados
**Correta: A**
**Por quê:** Os tokens foram formados durante a criação do modelo, quando ele leu muitos textos. Na conversa, o texto é convertido com a cadeia de tokenização já estabelecida.
- **B:** Não há tokens temporários: palavras novas, mesmo com erro, são quebradas em tokens que já existem.
- **C:** A atenção não forma tokens. Ela trabalha sobre tokens já existentes.
- **D:** Os tokens não existem antes do treino nem vêm da gramática: surgem da leitura dos textos.
**Conceito:** tokens definidos no treino

## 6. Ganho do vocabulário de tokens
**Correta: D**
**Por quê:** Usar tokens reduz o vocabulário total e dá flexibilidade para lidar com qualquer idioma ou estilo de escrita, inclusive quando o usuário erra.
- **A:** Um token pode ser só um fragmento, sem significado isolado. Ele só precisa ser útil para compor muitas sequências.
- **B:** A vantagem apontada é no vocabulário e na flexibilidade, não em processar frases com menos esforço.
- **C:** Nada é corrigido nem traduzido antes. As entradas diferentes é que passam a ser tratáveis, porque são quebradas em pedaços conhecidos.
**Conceito:** vantagens da tokenização

## 7. Cobrança por token
**Correta: C**
**Por quê:** O processamento é feito em cima do token, então é o volume de tokens que acompanha o trabalho do modelo e, por isso, a cobrança.
- **A:** O "token" da cobrança é a unidade de texto, não um token de acesso ou autenticação.
- **B:** A aula não apresenta dicionário por idioma como motivo. O motivo citado é que o processamento é feito em cima do token.
- **D:** A conversão em tokens é só a preparação. Cobra-se pelo processamento em cima dos tokens.
**Conceito:** cobrança por token

## 8. Janela de 8.000
**Correta: B**
**Por quê:** Janelas como 8.000 ou 32.000 medem capacidade em tokens, não em palavras nem em caracteres. A contagem de palavras do editor não diz quantos tokens o texto vira.
- **A:** A janela não mede palavras, então 7.500 palavras não garantem que caiba.
- **C:** Meia-verdade: a janela mede tokens, mas não existe mínimo de dois por palavra (palavras curtas e comuns podem ser um token só). A maior incidência é de um a três, então a conta pode passar de 8.000 ou não: só o tokenizador diz.
- **D:** A aula não fala em reservar metade da janela para a resposta.
**Conceito:** janela de contexto em tokens

## 9. Tamanho dos tokens (INCORRETA)
**Correta: D**
**Por quê:** A maior incidência é de um, dois ou três tokens por palavra. Palavras com cinco tokens existem (o professor já viu), mas são casos raros, e não o comum.
- **A:** Verdadeira: "sol" foi citada como palavra de um token.
- **B:** Verdadeira: palavras como "naturalmente" se dividem em mais de um token.
- **C:** Verdadeira: não existe tamanho fixo para token.
**Conceito:** tokens de tamanhos diferentes

## 10. Tokens e embeddings
**Correta: C**
**Por quê:** O embedding continua existindo: cada token passa por ele, depois participa da atenção e do cálculo de probabilidade da próxima saída. Mudou a unidade (de palavra para token), não o pipeline.
- **A:** O embedding não é refeito do zero: a mesma etapa passa a receber tokens no lugar de palavras.
- **B:** Todo token passa por embedding, seja palavra inteira ou pedaço, na entrada e na saída.
- **D:** Entrada e saída do modelo são sempre sequências de tokens, não só a saída.
**Conceito:** tokens no pipeline do modelo
