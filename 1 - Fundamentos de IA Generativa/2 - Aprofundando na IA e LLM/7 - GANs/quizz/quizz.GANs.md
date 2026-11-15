# Quizz — GANs

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 7
**Base:** material da aula

---

## 1. Os LLMs resolvem a geração de texto prevendo a próxima palavra, do bigrama aos modelos atuais. Por que esse raciocínio não se transfere direto para gerar imagens?
- A) A imagem tem coesão própria, mas ela se resolve aplicando o mesmo bigrama a regiões da imagem.
- B) A coesão textual só foi resolvida com modelos grandes, e a imagem exige modelos ainda maiores.
- C) A imagem não tem sempre uma relação direta da esquerda para a direita, então a ordem do texto não serve de guia.
- D) A imagem também é lida em sequência, em blocos, e bastaria trocar palavras por pedaços de imagem.

## 2. Durante o treino de uma GAN, o discriminador passa a acertar quase todas as vezes quais imagens são reais e quais são geradas. O que isso indica?
- A) O gerador ainda produz saídas distinguíveis das reais e precisa melhorar.
- B) O sistema atingiu seu objetivo, pois o discriminador já está bem treinado.
- C) O discriminador deve ser descartado, porque já aprendeu tudo o que o gerador podia ensinar.
- D) O gerador já produz imagens realistas, e o discriminador só confirma isso.

## 3. Pelo mecanismo descrito na aula, por que um gerador que consegue enganar o discriminador não garante, por si só, a escolha dos atributos da imagem?
- A) O discriminador avalia atributo por atributo e acaba limitando o que o gerador pode produzir.
- B) Enganar o discriminador exige imagens de baixa qualidade, incompatíveis com detalhes específicos.
- C) O gerador só recebe retorno depois do treino pronto, sem ajustar atributos durante o processo.
- D) O retorno do discriminador diz apenas se a saída parece real ou falsa, e não qual atributo gerar.

## 4. Segundo a aula, uma equipe quer variar de forma controlada um detalhe da imagem gerada, como a expressão do rosto. Qual ideia é a apresentada para esse fim?
- A) Aumentar as rodadas entre gerador e discriminador até a saída ganhar mais detalhes.
- B) Manipular as variáveis latentes do VAE, apresentadas para direcionar a saída gerada.
- C) Gerar muitas imagens e pedir ao discriminador que escolha a que tem o detalhe desejado.
- D) Usar um LLM, que prevê o próximo pedaço da imagem conforme o detalhe que foi pedido.

## 5. Segundo a aula, qual resumo da troca entre GAN e VAE é o mais fiel?
- A) A GAN busca realismo por confronto entre dois modelos; o VAE é mais estável e controlado.
- B) O VAE é mais estável e, por isso, gera sempre imagens menos realistas que as da GAN.
- C) A GAN é mais estável porque o confronto equilibra os dois modelos; o VAE é menos controlado.
- D) Os dois se apoiam em encoder e decoder, e a diferença está só no tipo de dado gerado.

## 6. Um colega afirma que o decoder do VAE "inventa" a imagem do nada. Qual correção é a mais adequada?
- A) O decoder reproduz fielmente a imagem de entrada, e por isso não há geração nova.
- B) O decoder gera a imagem do zero, e o encoder apenas confere se ela parece real.
- C) O decoder completa a imagem pedaço a pedaço, da esquerda para a direita, depois do encoder.
- D) O decoder reconstrói a saída a partir da representação que o encoder comprimiu.

## 7. Segundo a aula, o que mudou com as GANs para abrir caminho para arte, moda, jogos e design?
- A) A geração passou a funcionar por compressão e reconstrução dos dados, ganhando mais fidelidade.
- B) O treino passou a dispensar exemplos reais, bastando o gerador competir com o discriminador.
- C) As saídas ficaram realistas o bastante para uso amplo, ao contrário das imagens artificiais de antes.
- D) A geração ganhou estabilidade matemática e controle de variáveis latentes, além do realismo.

## 8. Uma equipe quer melhorar a voz sintética de um produto e prefere uma abordagem mais previsível no treino. Qual decisão é coerente com a aula?
- A) Usar um LLM de texto, porque voz também é uma sequência e a previsão da próxima palavra se aplica.
- B) Considerar o VAE, citado na aula na evolução da voz, por ser mais estável.
- C) Usar uma GAN, citada na aula na evolução da voz, por seu confronto entre dois modelos.
- D) Considerar o VAE, porque a aula o apresenta como o único modelo capaz de gerar voz.

## 9. Imagine uma GAN em que o discriminador é fraco demais e aprova quase tudo que o gerador cria. Qual é o resultado mais provável?
- A) O gerador produziria imagens mais realistas, já que quase nada seria rejeitado.
- B) O gerador compensaria sozinho, pois o realismo depende só da qualidade dos dados reais.
- C) O treino ficaria mais estável e controlado, como no VAE, e o realismo seria preservado.
- D) O gerador receberia pouco sinal do que é falso e perderia o estímulo para melhorar.

## 10. Na analogia do falsificador (gerador) e do policial (discriminador), qual afirmação está INCORRETA?
- A) O policial só age depois do treino, avaliando a nota final sem influenciar o falsificador.
- B) O falsificador sempre tenta produzir saídas que passem por reais diante do policial.
- C) O retorno do policial ajuda o falsificador a entender o que é real e o que é falso.
- D) A analogia é aproximada: o próprio professor ressalva que não é exatamente assim.
