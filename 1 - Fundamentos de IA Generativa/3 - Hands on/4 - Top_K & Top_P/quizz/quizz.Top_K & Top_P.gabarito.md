# Gabarito — Top_K & Top_P

## 1. Por que "nublado" sai mesmo com "limpo" em 60%
**Correta: C**
**Por quê:** A aula insiste que o modelo não entrega direto o token de maior probabilidade: existe um grau de aleatoriedade na escolha. Liderar dá mais chance, não garantia.
- **A:** Gerar texto não ajusta os pesos. O treinamento já acabou quando o modelo responde.
- **B:** A variação vem da escolha entre os candidatos, não de um cálculo que muda até trocar o líder.
- **D:** O limite de tokens corta a resposta no fim; ele não troca um token por outro.
**Conceito:** a geração não é fixa, tem aleatoriedade

## 2. Tirar toda a aleatoriedade para soar mais humano
**Correta: A**
**Por quê:** A aula diz o contrário da proposta: sem abertura, o modelo fica repetitivo e excessivamente previsível, parecido com um chatbot de árvore de decisão. A abertura é o que aproxima o texto da linguagem humana.
- **B:** É a suposição que a aula derruba. Sempre escolher o mais provável gera repetição, não naturalidade.
- **C:** Inverte o efeito: sem sorteio, o modelo fica preso às mesmas escolhas e não explora outros tokens.
- **D:** A aleatoriedade muda quais tokens saem, logo muda o texto. A aula não a liga ao tempo de resposta.
**Conceito:** por que a geração precisa de abertura

## 3. O quarto colocado com top-k = 3
**Correta: D**
**Por quê:** Top-k mantém os K primeiros do ranking e despreza os demais naquele passo, mesmo que tenham probabilidade próxima. "Deserto" é o quarto, então sai, por 0,01 de diferença.
- **A:** Não há tolerância. O limite é rígido em quantidade.
- **B:** Os tokens fora do K são descartados, não apenas enfraquecidos.
- **C:** Cortar pela soma coberta é o critério do top-p, não do top-k.
**Conceito:** corte rígido por quantidade no top-k

## 4. Top-k = 1 com temperatura 1,0
**Correta: B**
**Por quê:** Com K = 1, só o token mais provável continua elegível. A temperatura altera a distribuição, mas não amplia o conjunto, e com um candidato não há escolha a fazer. O texto tende a ficar repetitivo.
- **A:** A temperatura não muda o K. São controles de camadas diferentes.
- **C:** Os dois controles são combinados na geração. Um não desativa o outro.
- **D:** A temperatura muda as chances, mas não inverte o ranking. O líder não troca, e com K = 1 sai sempre o mesmo token naquele contexto.
**Conceito:** temperatura e top-k atuam em camadas diferentes

## 5. Top-p fixo em duas distribuições
**Correta: A**
**Por quê:** Top-p soma até atingir P. Com um líder de 0,95, um token basta. Com a probabilidade espalhada, são precisos muitos tokens para chegar a 0,9. O conjunto acompanha a distribuição.
- **B:** Inverte a relação: um líder forte cobre a massa logo no início, e o conjunto fica menor.
- **C:** Número fixo de candidatos é o comportamento do top-k. P fixa a soma, não a quantidade.
- **D:** P vale para a soma acumulada do conjunto, não como piso para cada token.
**Conceito:** top-p adapta o conjunto à distribuição

## 6. Top-k = 5 contra top-p = 0,9 com líder de 0,97
**Correta: D**
**Por quê:** O top-k mantém cinco tokens mesmo quando quase toda a probabilidade está no primeiro; os outros quatro dividem no máximo os 0,03 restantes. O top-p para no líder, pois 0,97 já passa de 0,9.
- **A:** O top-k não olha a soma. Ele mantém K tokens, independentemente da massa que cobrem.
- **B:** Inverte os dois: o top-p para assim que atinge P, sem percorrer a cauda.
- **C:** O top-k não filtra por valor de probabilidade, só por posição no ranking.
**Conceito:** o que é fixo e o que varia em cada corte

## 7. Subir a temperatura com top-k = 2
**Correta: B**
**Por quê:** O K continua decidindo quem é elegível: os dois primeiros. A temperatura achata a distribuição, então a diferença de chance entre eles diminui e o segundo sai com mais frequência.
- **A:** A temperatura não abre o corte. Quem define o tamanho do conjunto é o K.
- **C:** O K limita quem entra, mas não impede a temperatura de alterar as chances.
- **D:** A temperatura aproxima as probabilidades, sem inverter a ordem do ranking.
**Conceito:** temperatura muda a distribuição, K muda os elegíveis

## 8. Afirmação incorreta sobre top-k e top-p
**Correta: C**
**Por quê:** Está incorreta porque o top-k é fixo em quantidade e variável em cobertura. Os mesmos K tokens podem cobrir quase tudo em um passo concentrado e pouco em um passo espalhado.
- **A:** Verdadeira: os dois partem dos tokens ordenados por probabilidade.
- **B:** Verdadeira: a aula diz que top-k é uma técnica estatística, não usada só em LLMs.
- **D:** Verdadeira: o tamanho do conjunto no top-p depende do peso de cada token em cada contexto.
**Conceito:** o top-k fixa a quantidade, não a cobertura

## 9. Baixar o top-p de 0,9 para 0,6
**Correta: A**
**Por quê:** A soma é 0,35 e depois 0,35 + 0,25 = 0,60. A regra é soma maior ou igual a P, então o corte acontece em "horizonte". Baixar P reduz o conjunto.
- **B:** Baixar P diminui o conjunto, mas não o reduz ao líder quando o líder não atinge P. "Céu" sozinho cobre 0,35, abaixo de 0,6.
- **C:** Atingir P já basta. Não é preciso ultrapassá-lo, e "mar" não é necessário.
- **D:** P define justamente quais tokens ficam no conjunto, então mudar P muda quem é elegível.
**Conceito:** massa acumulada e regra de parada do top-p

## 10. Mudar temperatura e top-p na mesma rodada
**Correta: B**
**Por quê:** Temperatura e top-p atuam em camadas diferentes, e o resumo do professor avisa que misturar as duas funções leva a conclusões erradas sobre "criatividade". Para atribuir o efeito, é preciso mudar um parâmetro por vez.
- **A:** Baixar P reduz o conjunto elegível, em vez de ampliá-lo.
- **C:** Fixar a quantidade é o que faz o top-k. O top-p muda o conjunto elegível, então também pode ter contribuído para a mudança.
- **D:** A temperatura continua alterando a distribuição mesmo quando o top-p muda. Um não anula o outro.
**Conceito:** isolar parâmetros ao interpretar um experimento
