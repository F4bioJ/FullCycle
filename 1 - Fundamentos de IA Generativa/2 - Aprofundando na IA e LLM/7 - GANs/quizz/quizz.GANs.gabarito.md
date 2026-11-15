# Gabarito — GANs

## 1. Por que prever a próxima palavra não se transfere direto para imagem
**Correta: C**
**Por quê:** O texto tem uma ordem de leitura, da esquerda para a direita, e os LLMs aproveitam isso para prever a próxima palavra. Na imagem existe coesão, mas ela não segue sempre essa relação direta, então são necessárias outras estratégias (foi daí que nasceram as GANs).
- **A:** A aula não diz que o bigrama se aplica a regiões da imagem; diz que a coesão visual exige outras estratégias.
- **B:** Meia-verdade: modelos grandes foram importantes no texto, mas o problema da imagem apontado é a estrutura da coesão, não o tamanho do modelo.
- **D:** A aula diz que a imagem não tem sempre uma relação direta da esquerda para a direita, então a ordem do texto não serve de guia; trocar palavras por pedaços de imagem não é o caminho apresentado.
**Conceito:** Imagem x texto (coesão visual)

## 2. Discriminador acertando quase sempre durante o treino
**Correta: A**
**Por quê:** Raciocínio sobre o mecanismo descrito na aula: o discriminador aponta o que é falso e o gerador se ajusta a esse retorno. Se o discriminador acerta quase sempre, as saídas ainda são distinguíveis do real e o gerador ainda tem o que corrigir.
- **B:** Meia-verdade. O objetivo é o gerador produzir coisas reais, e não o discriminador ficar bom.
- **C:** O discriminador faz parte do ciclo; sem ele o gerador não recebe retorno.
- **D:** Se o gerador fosse realista, o discriminador erraria com frequência, e não acertaria quase sempre.
**Conceito:** Dinâmica gerador x discriminador

## 3. Enganar o discriminador não garante escolher atributos
**Correta: D**
**Por quê:** Raciocínio sobre o mecanismo: o discriminador diz se a saída parece real ou falsa. Esse retorno empurra o gerador para o realismo, mas não indica qual atributo gerar. Na aula, a ideia de direcionar o que se gera é apresentada com os VAEs, sem afirmar que a GAN seja incapaz disso em qualquer variação.
- **A:** A aula não descreve avaliação atributo por atributo; o discriminador só separa real de falso.
- **B:** O objetivo do confronto é o oposto: imagens mais realistas, de alta qualidade.
- **C:** O retorno do discriminador acontece durante o treino, e é assim que o gerador melhora.
**Conceito:** Papel do discriminador x controle

## 4. Variar de forma controlada um detalhe da imagem
**Correta: B**
**Por quê:** A aula apresenta o VAE como a ideia para direcionar o que é gerado, manipulando as variáveis latentes. A resposta não afirma que a GAN seja incapaz disso, apenas que essa é a abordagem apresentada para esse fim.
- **A:** Mais rodadas de confronto aproximam o gerador do real, mas a aula não as associa a direcionar detalhes.
- **C:** O discriminador só separa real de falso; a aula não lhe atribui o papel de escolher detalhes.
- **D:** Prever o próximo pedaço é o raciocínio do texto, que a aula diz não valer da mesma forma para imagem.
**Conceito:** VAE e variáveis latentes

## 5. Resumo fiel da comparação GAN x VAE
**Correta: A**
**Por quê:** Segundo a aula, a GAN obtém realismo pelo confronto entre gerador e discriminador, e o VAE é apresentado como mais estável do ponto de vista matemático e mais controlado.
- **B:** A aula não afirma que o VAE gere sempre imagens menos realistas; a estabilidade não implica essa conclusão (meia-verdade com conclusão errada). Fora da aula: na prática, VAEs costumam gerar imagens menos nítidas que GANs, mas isso não vale "sempre" e não é consequência da estabilidade.
- **C:** A aula atribui a estabilidade e o maior controle ao VAE, e não à GAN.
- **D:** Encoder e decoder são do VAE; a GAN se apoia em gerador e discriminador, então a diferença vai além do tipo de dado.
**Conceito:** Troca GAN x VAE

## 6. Correção sobre o decoder do VAE
**Correta: D**
**Por quê:** O VAE aprende com um encoder, que comprime as informações, e um decoder, que reconstrói os dados para gerar o que se precisa. É na representação comprimida (variáveis latentes) que se atua para direcionar a saída.
- **A:** O decoder reconstrói os dados para gerar o que se precisa; a geração parte da representação comprimida, não é cópia.
- **B:** Conferir se a imagem parece real é o papel do discriminador da GAN, e o decoder não gera do zero.
- **C:** Gerar da esquerda para a direita é o raciocínio do texto; o decoder do VAE reconstrói a partir da representação comprimida.
**Conceito:** Encoder, decoder e espaço latente

## 7. O que mudou com as GANs
**Correta: C**
**Por quê:** As imagens eram rudimentares e de aparência muito artificial. As GANs trouxeram imagens mais realistas, com a qualidade que arte, moda, jogos e design exigem.
- **A:** Compressão e reconstrução descrevem o VAE; a GAN ganha realismo pelo confronto entre gerador e discriminador.
- **B:** O discriminador trabalha justamente comparando com exemplos reais.
- **D:** Estabilidade matemática e controle foram associados ao VAE, e não ao salto de realismo das GANs.
**Conceito:** Realismo das GANs

## 8. Voz sintética com treino estável
**Correta: B**
**Por quê:** A aula cita o VAE como o que ajudou na camada de voz, deixando-a mais realista, e o descreve como mais estável do ponto de vista matemático.
- **A:** A aula cita o VAE para voz, não o LLM de texto; essa alternativa extrapola o que foi visto.
- **C:** A aula cita o VAE, e não a GAN, na evolução da voz.
- **D:** Meia-verdade: a escolha (VAE) é coerente, mas o motivo não. A aula diz que o VAE ajudou a deixar a voz mais realista, não que seja o único modelo capaz de gerar voz.
**Conceito:** VAE além de imagem (voz)

## 9. Discriminador fraco demais
**Correta: D**
**Por quê:** Raciocínio sobre o mecanismo: o gerador melhora a partir do retorno do discriminador sobre o que é falso. Se o discriminador aprova quase tudo, esse sinal quase desaparece e o gerador perde o estímulo para chegar mais perto do real.
- **A:** Meia-verdade: ser pouco rejeitado não torna a saída mais realista, só tira o motivo para melhorar.
- **B:** O realismo se forma no confronto com o discriminador; os dados reais sozinhos não bastam.
- **C:** Estabilidade e controle são traços atribuídos ao VAE, e um discriminador fraco não os traz.
**Conceito:** Dinâmica gerador x discriminador

## 10. Afirmação INCORRETA sobre a analogia
**Correta: A**
**Por quê:** Na aula, o discriminador vai alimentando o gerador durante o treino, e é assim que ele fica afinado. O policial não age só no fim.
- **B:** Verdadeira: o gerador tenta produzir saídas que passem por reais.
- **C:** Verdadeira: o retorno ajuda o gerador a entender real e falso.
- **D:** Verdadeira: o professor diz que a analogia é "mais ou menos" assim.
**Conceito:** Analogia falsificador e policial
