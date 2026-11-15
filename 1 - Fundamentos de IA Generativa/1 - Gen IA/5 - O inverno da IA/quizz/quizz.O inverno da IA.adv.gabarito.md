# Gabarito — O inverno da IA (avançado)

## 1. Bayes com 4% de spam
**Correta: B**
**Por quê:** spam e "grátis": 0,30 × 0,04 = 0,012. Legítimo e "grátis": 0,02 × 0,96 = 0,0192. P(spam | "grátis") = 0,012 / (0,012 + 0,0192) ≈ 0,38. A mesma palavra, com a mesma força, dá resultados muito diferentes conforme a proporção de spam na caixa.
- **A:** Ignora o P(spam) da fórmula. A taxa de base pesa tanto quanto a frequência da palavra.
- **C:** 30% é P("grátis" | spam), a probabilidade invertida. Confundir as duas é o erro clássico com Bayes.
- **D:** O resultado não é proporcional à taxa de base, porque ela entra no numerador e no denominador.
**Seção:** 3. A virada probabilística, em uma conta
**Conceito:** teorema de Bayes e taxa de base

## 2. "Cartão" e "crédito" contadas em separado
**Correta: D**
**Por quê:** A suposição de independência é falsa, e o modelo conta a mesma evidência duas vezes, o que distorce as probabilidades. Mas a decisão só precisa que a classe certa seja a mais provável, e essa ordem costuma se manter.
- **A:** A evidência dobrada exagera o valor, mas em geral não inverte a ordem entre as classes.
- **B:** O cálculo continua definido. A independência é uma suposição do modelo, não uma condição do teorema.
- **C:** As probabilidades saem distorcidas. O que se mantém é só a ordem.
**Seção:** 3. A virada probabilística, em uma conta · Por que "naive"
**Conceito:** por que o Naive Bayes funciona

## 3. Trechos de notícias no fim do spam
**Correta: A**
**Por quê:** É o envenenamento bayesiano. O filtro combina a evidência de cada palavra, então encher a mensagem de palavras comuns em e-mails legítimos puxa a nota para baixo.
- **B:** O filtro considera as palavras da mensagem toda. O ataque funciona justamente porque o texto extra entra na conta.
- **C:** Palavras de notícia são comuns e foram vistas nos e-mails legítimos. É por isso que elas pesam para "legítimo".
- **D:** O material não descreve esse descarte. O ataque é sobre a combinação das evidências.
**Seção:** 3. Linha do tempo e ponto fraco
**Conceito:** envenenamento bayesiano

## 4. Hopfield para prever a próxima palavra
**Correta: C**
**Por quê:** A rede de Hopfield é uma memória endereçada pelo conteúdo: dada uma entrada, cai no padrão gravado mais próximo. Ela não processa sequências nem carrega estado de um passo para o outro, que é o que as RNNs do capítulo 2 fazem.
- **A:** É o contrário: completar entradas parciais é exatamente o que ela faz.
- **B:** Os pesos da rede de Hopfield são simétricos.
- **D:** As redes de Hopfield clássicas não combinam com o treino por gradiente. Os pesos são gravados por uma regra simples.
**Seção:** 2. A rede de Hopfield não é a RNN das próximas aulas
**Conceito:** Hopfield x RNN de sequência

## 5. P1 tão corrompido que parece P2
**Correta: D**
**Por quê:** A rede atualiza os neurônios até cair em um mínimo de energia. Ela não sabe de onde a entrada veio, só onde está: se a entrada ficou mais perto do vale de P2, rola para P2.
- **A:** Não há registro da origem. A rede só tem os pesos e a entrada atual.
- **B:** A rede sempre se move até um mínimo de energia. Ficar parada só acontece se a entrada já for um mínimo.
- **C:** Ela recupera padrões gravados, não cria novos. Gerar é papel das GANs.
**Seção:** 2. A rede de Hopfield não é a RNN das próximas aulas
**Conceito:** memória associativa como mínimo de energia

## 6. Discriminador respondendo 0,5
**Correta: A**
**Por quê:** No equilíbrio teórico, o gerador reproduz a distribuição dos dados reais e o discriminador não consegue mais distinguir, então responde 1/2 para tudo.
- **B:** Pelo material, o discriminador "reduzido a jogar uma moeda" é o objetivo do jogo, não uma falha.
- **C:** Copiar os exemplos não é o equilíbrio descrito. O gerador reproduz a distribuição, não as amostras.
- **D:** Os dois modelos têm papéis e pesos diferentes até o fim.
**Seção:** 4. GANs: o jogo e o ponto de equilíbrio
**Conceito:** equilíbrio da GAN

## 7. O lugar das GANs
**Correta: C**
**Por quê:** O material diz que as GANs são um ramo paralelo voltado a imagens, e que os LLMs vêm da linha Markov → RNN → Transformer.
- **A:** É a leitura da linha do tempo como fila única, que o material corrige.
- **B:** O sinal de erro do gerador vem de outro modelo, e não de rótulos de anotadores.
- **D:** Os LLMs são treinados para prever o próximo token com o texto como rótulo, sem jogo adversarial.
**Seção:** 4. GANs: o jogo e o ponto de equilíbrio · O que a aula simplificou
**Conceito:** GANs como ramo paralelo

## 8. Dez casos na demo, dez mil clientes
**Correta: B**
**Por quê:** O relatório Lighthill apontou métodos que funcionam em problemas de brinquedo e não escalam. O material repete o alerta nas implicações: um protótipo que funciona com dez casos não garante nada sobre dez mil.
- **A:** O envenenamento é um ataque deliberado, e o cenário fala de problemas variados.
- **C:** As máquinas LISP caíram por razões de mercado do hardware, não por escala de casos.
- **D:** O ALPAC comparou custo, precisão e velocidade com o tradutor humano. O cenário não fala de custo.
**Seção:** 1. Foram dois invernos, com gatilhos conhecidos · Implicações
**Conceito:** explosão combinatória

## 9. Os dois invernos
**Correta: D**
**Por quê:** O segundo inverno (≈1987–2000) atingiu os sistemas especialistas, baseados em regras, que tinham sobrevivido ao primeiro.
- **A:** O livro *Perceptrons* (1969) é gatilho do primeiro inverno, que atingiu as redes neurais.
- **B:** Inverte os invernos: sistemas especialistas e Quinta Geração são do segundo.
- **C:** O termo aparece em 1984, antes do colapso de 1987, como um alerta.
**Seção:** 1. Foram dois invernos, com gatilhos conhecidos
**Conceito:** os dois invernos

## 10. Afirmação INCORRETA
**Correta: A**
**Por quê:** O material diz o oposto: a falha técnica sozinha não causa um inverno; a distância entre o que foi vendido e o que foi entregue, sim.
- **B:** Correta: o período marca a viabilização de ideias antigas, não a criação.
- **C:** Correta: é a regra de gravação descrita no material.
- **D:** Correta: é a formulação do jogo de soma zero.
**Seção:** 1. Foram dois invernos, com gatilhos conhecidos
**Conceito:** causa dos invernos: promessa acima da entrega
