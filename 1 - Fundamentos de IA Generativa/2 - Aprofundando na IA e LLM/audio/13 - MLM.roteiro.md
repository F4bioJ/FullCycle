# MLM

## Abertura
Na aula passada, vimos a primeira forma de pré-treinar um modelo de linguagem: a CLM, modelagem causal de linguagem. O modelo lê da esquerda para a direita e tenta adivinhar a próxima palavra.

Hoje vem a segunda forma. Ela se chama MLM, modelagem de linguagem mascarada. Do inglês, Masked Language Modeling.

A boa notícia é que quase tudo o que você já sabe continua valendo. O ciclo de treino é o mesmo. O que muda é a tarefa que a gente entrega para o modelo resolver. E essa mudança pequena tem uma consequência grande: muda aquilo em que o modelo fica bom.

## Preencher lacunas olhando os dois lados
A frase-âncora deste bloco é: a MLM esconde palavras no meio da frase e treina o modelo a preenchê-las olhando para os dois lados.

Pense numa prova de português com exercício de completar. A frase vem assim: o, lacuna, hoje está muito azul. Você olha o que vem antes e o que vem depois da lacuna. O antes diz pouco. Mas o depois, hoje está muito azul, praticamente grita a resposta: céu.

É exatamente isso que o modelo faz. Algumas palavras são trocadas por uma máscara, e a máscara pode cair no meio da frase, não só no final. Para adivinhar a palavra escondida, o modelo usa o contexto à esquerda e o contexto à direita ao mesmo tempo. Por isso se diz que a MLM é bidirecional.

Compare com a CLM. Na CLM, o modelo só pode olhar para trás. O que vem depois está escondido dele. Na MLM, ele vê a frase inteira, menos os buracos.

O exemplo mais conhecido de modelo treinado assim é o BERT.

Então, de novo: a MLM esconde palavras no meio da frase e treina o modelo a preenchê-las olhando para os dois lados.

## Quanto esconder e como o modelo aprende
A frase-âncora aqui é: esconde-se só uma parte pequena das palavras, escolhidas ao acaso, e o resto do treino é igual ao da CLM.

Volte ao exercício de completar. Se o professor apagar metade da frase, ninguém consegue responder. Não sobra pista. Se apagar uma palavra aqui e outra ali, dá para resolver, e ainda assim você precisa pensar.

No treino é igual. O professor fala em cerca de vinte por cento das palavras, escolhidas aleatoriamente. Pouco o suficiente para sobrar contexto. Muito o suficiente para obrigar o modelo a aprender como as palavras se relacionam.

Depois disso, o ciclo você já conhece. A palavra original fica guardada. O modelo faz o palpite. O palpite é comparado com a palavra verdadeira. A diferença vira um sinal de erro, e o backpropagation, a retropropagação, ajusta os pesos e vieses da rede inteira. A mecânica não muda. O que muda é a pergunta que o modelo responde.

Esconde-se só uma parte pequena das palavras, escolhidas ao acaso, e o resto do treino é igual ao da CLM.

## Bom para entender, fraco para gerar
A frase-âncora deste bloco é: a MLM é ótima para compreender texto e fraca para gerar texto.

Por que ótima para compreender? Imagine que você precisa achar, numa pilha de documentos, os que falam de contratos de aluguel. Você não lê cada um da primeira à última linha. Seu olho corre pela página e bate em palavras-chave espalhadas pelo meio: inquilino, fiador, reajuste. Com essas pistas, você já sabe o assunto. Depois, se quiser, lê com calma.

A MLM aprende algo parecido. Ela junta pistas espalhadas pela frase inteira, antes e depois de cada ponto. Isso serve muito bem para tarefas como classificar um texto por assunto ou fazer busca por significado.

E por que fraca para gerar? Porque gerar uma conversa é construir a frase para frente, uma palavra puxando a próxima. Ninguém fala montando a frase inteira e depois tampando algumas palavras. Na hora de gerar, o lado direito ainda não existe. E o modelo foi treinado justamente contando com ele. O objetivo de treino não combina com o jeito como a geração acontece.

Por isso, se você quer um chatbot, a escolha natural é um modelo do tipo CLM, como os GPTs. Se você quer entender, classificar ou buscar, um modelo do tipo MLM, como o BERT, se encaixa melhor.

A MLM é ótima para compreender texto e fraca para gerar texto.

## Sem supervisão, nos dois casos
A frase-âncora é: tanto a CLM quanto a MLM tiram a resposta certa do próprio texto, sem rótulo e sem ninguém acompanhando.

Pense de novo no exercício de completar. Quem corrige não precisa de gabarito externo. A resposta certa é a palavra que foi apagada. Ela já estava ali.

Na CLM, você esconde a próxima palavra e pede para o modelo prever. Na MLM, você tampa algumas palavras no meio e pede para ele adivinhar. Nos dois casos, o texto cru basta. Não é preciso alguém marcando frase por frase, como na detecção de sentimento que vimos na aula passada. Dá para deixar o treino rodando sozinho. Por isso essas abordagens aparecem com o nome em inglês unsupervised, ou seja, não supervisionadas por um humano.

E é isso que permite treinar com volumes enormes de texto. Depois desse pré-treino geral vem o fine-tuning, que é o assunto das próximas aulas.

Tanto a CLM quanto a MLM tiram a resposta certa do próprio texto, sem rótulo e sem ninguém acompanhando.

## CLM e MLM lado a lado
Vale juntar as duas numa comparação só, porque é aqui que se confunde.

As duas usam a palavra máscara, mas com sentidos diferentes. Na CLM, a máscara causal esconde o futuro. O modelo só olha para trás. Na MLM, a máscara tampa algumas palavras no meio, e o modelo olha para os dois lados.

As duas comparam o palpite com a palavra verdadeira e ajustam a rede por retropropagação. Muda qual é a palavra verdadeira: na CLM, a próxima; na MLM, a que foi tampada.

As duas dispensam rótulos. E cada uma fica boa numa coisa: a CLM em continuar texto, a MLM em entender texto.

Uma última ligação. Lá atrás, o bigrama também olhava só para a palavra anterior. A CLM herda essa direção, só que com toda a força do Transformer. A MLM quebra a direção e olha para os dois lados.

## Revisão
Recapitulando as frases-âncora.

A MLM esconde palavras no meio da frase e treina o modelo a preenchê-las olhando para os dois lados.

Esconde-se só uma parte pequena das palavras, escolhidas ao acaso, e o resto do treino é igual ao da CLM.

A MLM é ótima para compreender texto e fraca para gerar texto.

Tanto a CLM quanto a MLM tiram a resposta certa do próprio texto, sem rótulo e sem ninguém acompanhando.

Agora, três perguntas.

Primeira pergunta: na frase "ele sentou no banco e ficou olhando o rio", a pista que diz que banco é um assento vem depois da palavra. Qual modelo tende a captar isso melhor, e por quê?

[pausa 5]

Resposta: o modelo treinado com MLM, porque aprendeu a usar o contexto à direita. O modelo de CLM só enxerga o que veio antes de banco.

Segunda pergunta: por que não se mascara metade da frase no treino?

[pausa 5]

Resposta: porque não sobraria contexto para inferir as palavras escondidas. Mascara-se pouco, ao acaso, para manter pistas e ainda assim criar um desafio.

Terceira pergunta: um colega diz que a MLM não usa retropropagação, porque só preenche lacunas. Ele está certo?

[pausa 5]

Resposta: não. O ciclo é o mesmo da CLM: prever, comparar com a palavra verdadeira e ajustar os pesos por retropropagação. O que muda é só a tarefa, ou seja, qual palavra fica escondida e quais lados o modelo enxerga.
