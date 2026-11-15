# GANs — resumo

## Por que falar de geração de imagem

Até aqui a IA generativa foi vista principalmente pelo lado dos LLMs, porque, no dia a dia de quem trabalha com tecnologia e com geração de código, a geração de texto é o uso mais frequente e o que mais cresce em escala. Mas há outras áreas que dependem de outras formas de geração, como a geração de imagem, útil para quem trabalha com marketing e publicidade. Esta aula é um capítulo curto, que apresenta esse outro aspecto da IA generativa antes de voltar a aprofundar os LLMs.

## Imagem exige estratégias diferentes do texto

Os LLMs foram pensados para resolver problemas da linguagem natural: coesão textual, a formação das palavras e a geração de texto pensando na próxima palavra, caminho que o curso percorreu do bigrama até os LLMs modernos. Para imagem, nada disso é necessariamente a realidade. Existe uma coesão de imagem, que é diferente da coesão textual, e não dá para assumir que uma imagem tenha sempre uma relação direta da esquerda para a direita, como o texto tem. Por isso são necessárias outras estratégias, e é daí que nasceram as GANs.

## As GANs e o salto de realismo

Por volta de 2014, a geração de imagens era rudimentar, difícil e de baixa qualidade, com aparência muito artificial. Era complicado gerar uma imagem ultrarrealista, e o resultado não chegava perto do que os editores de imagem faziam, então não servia para uso em ampla escala pela comunidade. As GANs vieram para resolver parte disso: passaram a criar imagens mais realistas, próximas do que se imagina ser uma imagem de alta qualidade. Com isso, a IA generativa abriu caminho para áreas como arte, moda, jogos e design.

## Gerador e discriminador

Uma GAN funciona com dois componentes. O gerador pode ser imaginado como um falsificador, e o discriminador como um policial. O professor ressalva que a analogia não é exata, mas dá a ideia: o gerador fica tentando gerar coisas falsas, e o discriminador fica dizendo se o que recebeu é falso ou real.

## Exemplo da nota de 10 reais

Imagine que o gerador tente produzir imagens da nota de 10 reais. O discriminador avalia cada uma e responde: falsa, real, falsa, real, e assim por diante. Esse retorno é repassado ao gerador, que fica cada vez mais próximo de gerar apenas coisas reais. Ao longo do tempo, o gerador vai se afinando e entendendo o que é falso e o que é real. Assim, os dois melhoram juntos, e a saída passa a ter notas cada vez mais realistas.

## Onde as GANs funcionam bem

As GANs são muito boas para gerar rosto humano, além de moda, arte e jogos. Segundo o professor, foi com elas que a área deu esse salto de qualidade.

## VAEs: controle sobre o que é gerado

Os VAEs trazem uma ideia diferente e complementar. Além de gerar imagens realistas, eles buscam permitir controlar diretamente o que está sendo gerado. O exemplo da aula: gerar a imagem realista de um homem sorrindo, de cabelo curto e bigode. Em vez de pedir apenas "um homem", o VAE permite direcionar a saída com detalhes, por meio da manipulação das variáveis latentes, para chegar a um resultado melhor. Com GANs e VAEs, a geração de imagem evolui.

## Encoder e decoder

O VAE é um modelo probabilístico que aprende com um encoder, que comprime as informações, e um decoder, que reconstrói os dados para gerar o que se precisa.

## Estabilidade, qualidade em casos específicos e outras aplicações

Ao contrário das GANs, os VAEs são, segundo o professor, mais estáveis do ponto de vista matemático e mais controlados, e não "abrem" tanto. Em compensação, trazem mais qualidade quando se fala de algo muito específico, o que ajuda em áreas que exigem mais detalhes do que está sendo gerado. Eles ajudaram não só na imagem, mas também no som: a camada de voz, antes mais complicada, ficou mais realista.

## Próximos passos

O capítulo fecha com o aviso de que a turma volta aos LLMs para aprofundar ainda mais nessa matéria.
