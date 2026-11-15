# Introdução a temperatura

## Abertura

Começamos um capítulo novo, e agora a teoria vai para as suas mãos.

No capítulo passado, a última aula deixou uma promessa. O mesmo modelo pode responder de jeitos bem diferentes, sem mudar nenhum peso. Faltava mostrar como. O primeiro botão desse painel se chama temperatura.

Esqueça o clima. Esqueça também o calor da placa de vídeo. Aqui, temperatura é um ajuste de geração. Hoje você vai entender o que ele faz, quando subir, quando descer e o que ele não consegue resolver. No fim, vou falar rapidamente de como preparar o Hugging Face, a plataforma dos testes práticos.

## A escolha do próximo token

A frase-âncora é esta: o modelo não escolhe a palavra certa, ele escolhe a partir de probabilidades.

Imagine a frase: o cachorro hoje latiu no. Quintal é uma boa continuação. Portão também. Sofá é menos comum, mas pode acontecer. Telhado seria estranho, mas não é impossível. O modelo não tem uma resposta única guardada. Ele tem uma lista de opções, cada uma com a sua chance.

Isso resolve um problema de linguagem: quase sempre existe mais de uma continuação aceitável. Mas também significa que nada ali é matemática exata. E lembre que a opção pode ser uma palavra inteira, um pedaço de palavra ou um símbolo.

Se existe uma lista de chances, alguém precisa dizer quanta liberdade o modelo tem para sair do topo dela. Esse é o próximo ponto.

O modelo não escolhe a palavra certa, ele escolhe a partir de probabilidades.

## O que a temperatura faz

A frase-âncora é esta: a temperatura controla a abertura ao inesperado.

Quanto maior a temperatura, maior a abertura. Quanto menor, mais fechada fica a escolha. Pense na lista de chances como um morro. Com temperatura baixa, o pico fica mais pontudo, e quintal domina. Com temperatura alta, o morro fica mais achatado. Quintal ainda tende a ser o favorito, mas sofá e telhado passam a ter uma chance real de sair.

Repare no que não acontece. A ordem não vira de cabeça para baixo. O modelo também não ganha palavras novas. A temperatura só muda o quanto a escolha fica concentrada ou espalhada.

Isso resolve uma necessidade prática: adaptar a mesma máquina a tarefas diferentes. O professor apresenta como faixa usual de zero vírgula um até um, subindo de um décimo em um décimo. E a escolha boa, nas palavras dele, depende do que você vai fazer.

A temperatura controla a abertura ao inesperado.

## Temperatura baixa

A frase-âncora é esta: temperatura baixa troca variedade por consistência.

Entre zero vírgula um e zero vírgula três, o modelo tende a ficar nos tokens mais prováveis. Pense em um parecer jurídico. Você não quer um advogado poeta, e sim um texto técnico, conservador e previsível.

O que isso resolve é a falta de consistência. O problema aparece quando a tarefa pede o contrário. Peça uma música com temperatura zero vírgula um, e ela tende a sair correta e sem graça. Tentar de novo ajuda pouco, porque as tentativas ficam parecidas.

E tem uma armadilha mais séria. Consistente não quer dizer correto. Se o caminho mais provável para o modelo for uma informação falsa, a temperatura baixa vai mantê-lo nesse caminho, com muita firmeza.

Temperatura baixa troca variedade por consistência.

## Temperatura alta

A frase-âncora é esta: temperatura alta troca previsibilidade por variedade.

Entre zero vírgula sete e um, o modelo fica mais propenso a escolher palavras improváveis. É o que você quer em um brainstorm, um poema ou uma letra de música. A surpresa, nesses casos, é o objetivo.

O que isso resolve é o texto engessado. O limite aparece nas tarefas sensíveis. Imagine um atendente virtual que explica regras de reembolso. Alguém acha que ele está robótico e sobe a temperatura. Ele fica mais solto, mas também mais propenso a escolhas pouco adequadas, e isso pode custar a qualidade da informação.

Além disso, cada token escolhido entra no contexto do próximo. Um desvio logo no começo pode levar o resto do texto para outro rumo. É a sequência de escolhas locais que você já viu no capítulo passado.

Temperatura alta troca previsibilidade por variedade.

## O especialista na biblioteca

A frase-âncora é esta: a temperatura não acrescenta conhecimento.

Imagine um especialista entrando em uma biblioteca. Você pede tudo sobre temas jurídicos. Com temperatura baixa, ele vai direto ao Vade Mecum. Com temperatura máxima, o mesmo especialista pode voltar com Monteiro Lobato ou Harry Potter.

O importante é que o especialista é o mesmo. A biblioteca é a mesma. Ele não aprendeu nada novo e não esqueceu nada. Só mudou o quanto ele se afasta do caminho mais óbvio.

Essa imagem ajuda a diagnosticar problemas. Se a resposta saiu estranha com temperatura alta, ainda não é hora de falar em retreinar o modelo. Primeiro, olhe para o ajuste. Agora, se falta conhecimento, nenhuma temperatura vai colocá-lo lá.

A temperatura não acrescenta conhecimento.

## O Hugging Face e o teste certo

A frase-âncora é esta: compare temperaturas repetindo o mesmo prompt.

A prática acontece no Playground do Hugging Face, um ambiente na web para testar modelos e mexer nos ajustes sem começar por código. O caminho é curto. Você cria uma conta e confirma o e-mail, porque sem isso não consegue gerar o token. Depois, cria um token de acesso nas configurações da conta, copia e cola no Playground. Esse token é a sua credencial. Feito isso, a temperatura aparece nos controles laterais.

Agora vem a parte que importa. Para ver o efeito, mantenha o mesmo prompt e mude só a temperatura. Por exemplo, teste zero vírgula um e depois um. Se você usar um pedido sobre contratos em um valor e um pedido sobre poemas no outro, não saberá de onde veio a diferença. Pode ter vindo do pedido, e não do ajuste.

É isso que você vai fazer na próxima aula.

Compare temperaturas repetindo o mesmo prompt.

## Temperatura e os vizinhos que se confundem

Vamos separar a temperatura de quatro coisas parecidas.

Primeiro, temperatura e treinamento. O treinamento muda os pesos, e é ali que o modelo aprende. A temperatura mexe só na escolha, durante a geração, com os pesos intactos.

Segundo, temperatura e prompt. O prompt muda o contexto, e com isso muda as chances de cada token. A temperatura pega as chances que existem e decide o quanto elas ficam concentradas. Os dois influenciam a saída, mas por caminhos diferentes.

Terceiro, temperatura e tokenização. A tokenização decide como o texto é quebrado em pedaços. Ela acontece antes da escolha e não depende da temperatura.

Quarto, temperatura e janela de contexto. A janela define quantos tokens cabem no contexto. A temperatura não aumenta nem diminui esse espaço.

Se a dúvida for onde cada coisa age, pense assim: o treinamento forma o modelo, a tokenização prepara o texto, a janela limita o contexto, o prompt dá o contexto, e a temperatura ajusta a escolha.

## Revisão

Vamos às frases-âncora, em sequência.

O modelo não escolhe a palavra certa, ele escolhe a partir de probabilidades.

A temperatura controla a abertura ao inesperado.

Temperatura baixa troca variedade por consistência.

Temperatura alta troca previsibilidade por variedade.

A temperatura não acrescenta conhecimento.

Compare temperaturas repetindo o mesmo prompt.

Agora, quatro perguntas.

Primeira pergunta: ao subir a temperatura, o token menos provável passa a ser o favorito?

[pausa 5]

Resposta: não. A distribuição fica mais achatada e ele ganha chance de sair, mas a ordem não se inverte.

Segunda pergunta: um modelo repete a mesma informação falsa em temperatura baixa. Baixar ainda mais resolve?

[pausa 5]

Resposta: tende a não resolver. A temperatura não acrescenta conhecimento, e o modelo continua no caminho mais provável, mesmo que ele esteja errado.

Terceira pergunta: um colega diz que, ao ajustar a temperatura, está retreinando o modelo. Qual é o erro?

[pausa 5]

Resposta: a temperatura age na escolha do próximo token, durante a geração. Os pesos continuam os mesmos.

Quarta pergunta: você quer saber se a temperatura deixa um texto mais criativo. Como monta o teste?

[pausa 5]

Resposta: repete o mesmo prompt e muda só a temperatura. Assim, a diferença pode ser atribuída ao ajuste, e não ao pedido.
