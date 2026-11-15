# GANs

## Abertura
Até agora, quase tudo o que você estudou foi sobre texto. Do bigrama até os LLMs, os grandes modelos de linguagem, a pergunta foi sempre a mesma: qual é a próxima palavra?

Esta aula é um desvio curto. Ela sai do texto e entra na imagem. E mostra que, quando o dado muda, a estratégia também precisa mudar.

Você vai conhecer duas ideias. A primeira é a GAN, rede adversária generativa. A segunda é o VAE, autoencoder variacional. No fim, vai saber dizer o que cada uma busca e por que nenhuma das duas funciona como um LLM.

## Por que imagem é outro problema
A frase-âncora deste bloco é: texto tem ordem, imagem não tem uma ordem fixa.

Pense numa frase. Você lê da esquerda para a direita, palavra por palavra. Cada palavra depende das anteriores. Foi essa ordem que permitiu prever a próxima palavra, do bigrama até os LLMs.

Agora pense na foto de um cachorro deitado no tapete. Onde ela começa? Pelo focinho? Pelo canto de cima? O olho do cachorro combina com a orelha, que combina com o tapete, tudo ao mesmo tempo. A imagem também tem coesão, mas é uma coesão visual, não textual. Ela não segue sempre uma relação direta da esquerda para a direita.

Por isso, a lógica de prever o próximo elemento não serve de guia para imagem. Foi preciso inventar outras estratégias.

Repetindo: texto tem ordem, imagem não tem uma ordem fixa. É dessa diferença que nascem as GANs.

## GAN: o falsificador e o policial
A frase-âncora da GAN é: dois modelos em confronto, um gera e o outro julga.

Antes das GANs, as imagens geradas por computador eram rudimentares. Pareciam artificiais, de baixa qualidade, longe do que um editor de imagem fazia. Não dava para usar em larga escala.

A GAN mudou isso com uma ideia simples. Ela tem dois componentes. O primeiro é o gerador. O segundo é o discriminador.

Imagine o gerador como um falsificador e o discriminador como um policial. O professor avisa que a analogia não é exata, mas ajuda a enxergar.

O exemplo da aula é a nota de dez reais. O gerador tenta produzir imagens da nota. O discriminador recebe notas verdadeiras e notas geradas, misturadas, e vai dizendo: essa é falsa, essa é real, essa é falsa.

Cada resposta do policial volta para o falsificador. É esse retorno que ensina o gerador a chegar mais perto do real. E isso acontece durante todo o treino, não só no final. O policial também vai ficando mais afiado. Os dois melhoram juntos, e as notas geradas ficam cada vez mais realistas.

Agora um raciocínio que a aula permite fazer. Se o policial acerta quase sempre, o falsificador ainda está fraco e tem muito a corrigir. E se o policial for fraco demais e aprovar quase tudo? Então o falsificador quase não recebe sinal do que está errado. Ele perde o motivo para melhorar.

Repetindo: dois modelos em confronto, um gera e o outro julga.

## Onde a GAN brilha e onde ela não chega
A frase-âncora aqui é: a GAN busca realismo.

A GAN ficou muito boa em rostos humanos, moda, arte e jogos. Foi esse salto de realismo que abriu a IA generativa para arte, moda, jogos e design. Também é útil para quem trabalha com marketing e publicidade.

Mas repare no que o policial diz. Ele só diz real ou falso. Ele não diz "faça o homem sorrindo" nem "coloque um bigode". Então enganar o policial empurra o gerador para o realismo, mas não indica, por si só, qual detalhe gerar.

É aí que a aula traz a segunda ideia.

Repetindo: a GAN busca realismo.

## VAE: controlar o que se gera
A frase-âncora do VAE é: comprimir, mexer nas variáveis latentes e reconstruir.

O VAE busca, além de gerar imagens realistas, controlar o que está sendo gerado. O exemplo da aula: você não quer só um homem. Você quer um homem sorrindo, de cabelo curto e de bigode.

Como ele faz isso? O VAE é um modelo probabilístico com duas partes. O encoder comprime os dados numa representação compacta. O decoder reconstrói os dados a partir dessa representação.

Pense numa receita de bolo. Em vez de guardar o bolo inteiro, você guarda a receita: quanto de açúcar, quanto de chocolate. Essa receita é a representação comprimida. As quantidades são as variáveis latentes. Mexa no açúcar e o bolo muda. Mexa na variável do sorriso e o rosto muda.

Então o decoder não inventa do nada. Ele reconstrói a partir do que o encoder comprimiu. E é nessa representação que você atua para direcionar a saída.

Segundo a aula, o VAE é mais estável do ponto de vista matemático e mais controlado que a GAN. Ele não se abre tanto, mas ajuda quando você precisa de detalhes específicos. E não ficou só na imagem: ajudou também no som, deixando a voz sintética mais realista.

Repetindo: comprimir, mexer nas variáveis latentes e reconstruir.

## Comparando com o que você já viu
Vamos colocar os três lado a lado.

O LLM trabalha com sequência. Ele olha o que veio antes e prevê a próxima palavra. Um modelo só, avançando passo a passo.

A GAN não prevê próxima coisa nenhuma. São dois modelos que se confrontam. Um gera, o outro julga, e o realismo nasce desse confronto.

O VAE também não tem um policial. Ele tem um encoder e um decoder. Comprime, deixa você mexer na representação, e reconstrói.

Uma armadilha comum é trocar as peças. Encoder e decoder são do VAE. Gerador e discriminador são da GAN. Previsão da próxima palavra é do LLM.

Outra armadilha é achar que estabilidade é da GAN. É o contrário. Na aula, quem é mais estável e controlado é o VAE. A força da GAN é o realismo.

## Fechamento
As frases-âncora desta aula, em sequência.

Texto tem ordem, imagem não tem uma ordem fixa.

Dois modelos em confronto, um gera e o outro julga.

A GAN busca realismo.

Comprimir, mexer nas variáveis latentes e reconstruir.

## Revisão
Primeira pergunta: por que a lógica do LLM, de prever a próxima palavra, não se transfere direto para imagens?

[pausa 5]

Resposta: porque a imagem não tem sempre uma relação direta da esquerda para a direita. A coesão dela é visual, então a ordem do texto não serve de guia.

Segunda pergunta: numa GAN, o discriminador está aprovando quase tudo que o gerador cria. O que acontece com o gerador?

[pausa 5]

Resposta: ele recebe pouco sinal do que é falso e perde o estímulo para melhorar. Sem um policial exigente, o falsificador não evolui.

Terceira pergunta: por que enganar o discriminador não garante escolher os detalhes da imagem?

[pausa 5]

Resposta: porque o discriminador só diz se parece real ou falso. Ele não diz qual atributo gerar. Na aula, o direcionamento aparece com o VAE.

Quarta pergunta: no VAE, de onde o decoder tira a imagem que gera?

[pausa 5]

Resposta: da representação comprimida pelo encoder. Mexendo nas variáveis latentes dessa representação, você direciona a saída.

Quinta pergunta: uma equipe quer melhorar a voz sintética com um treino mais previsível. Qual das duas ideias da aula combina mais?

[pausa 5]

Resposta: o VAE. A aula diz que ele ajudou a deixar a voz mais realista e que é mais estável do ponto de vista matemático.
