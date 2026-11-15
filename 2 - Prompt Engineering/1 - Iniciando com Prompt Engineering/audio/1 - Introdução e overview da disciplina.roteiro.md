# Introdução e overview da disciplina

## Abertura
Começamos um módulo novo: Prompt Engineering, ou engenharia de prompt.

No módulo anterior, você viu como um modelo de linguagem é treinado e como ele gera texto. Também viu, de passagem, estratégias como zero-shot e few-shot. Agora a lente muda. O modelo sai do centro, e quem entra é o texto que você entrega a ele.

Esta aula é um mapa. Ela não ensina nenhuma técnica ainda. Ela mostra por que o assunto merece uma disciplina inteira e o que vem pela frente. Vamos passar por quatro ideias: como pedir, o prompt como parte do software, a gestão dos prompts e o que tudo isso custa.

## Como pedir
A primeira frase-âncora é esta: saber o que pedir não basta, o jogo está em como pedir.

Pense em pedir um relatório a um colega novo. Se você disser só "faz um relatório das vendas", ele entrega alguma coisa. Pode até estar certo, mas não é o que você queria. Se você disser para quem é, qual período, que formato e o que não pode faltar, o resultado muda. O colega é o mesmo. O pedido é que mudou.

Com técnicas de prompt acontece algo parecido. Você provavelmente já usa várias delas sem saber o nome. O problema aparece quando a técnica funciona por acaso. Se você não sabe por que ela funcionou, não sabe adaptá-la quando o caso muda, e ela falha sem que você entenda o motivo.

É por isso que a disciplina fala de escrita, mas não de digitar palavra por palavra. O que importa é entender o que está por trás de cada prompt e como aquele exemplo se encaixa no seu dia a dia. Por isso também o curso mostra o prompt, a resposta e o código juntos, e deixa os exemplos num repositório do GitHub para você testar.

E esse ponto de vista é mantido de propósito. Vai aparecer código, e vai aparecer um pouco de arquitetura, porque a fronteira entre os assuntos é uma zona cinzenta. Mas a pergunta da disciplina continua sendo sobre o prompt: como criar, como usar e como manter.

Saber o que pedir não basta, o jogo está em como pedir. E quando o pedido entra numa aplicação, ele deixa de ser só um pedido.

## O prompt como parte do software
A segunda frase-âncora: numa aplicação com inteligência artificial, o prompt é parte do comportamento do software.

Imagine um atendente virtual de uma empresa. Alguém troca uma frase da instrução dele, sem mexer em nenhuma linha de regra de negócio. No dia seguinte, ele responde de outro jeito a milhares de clientes. Nenhum código mudou, mas o produto mudou.

O professor resume isso de forma direta: nas aplicações que vamos desenvolver daqui para frente, metade é código e metade é prompt. É uma forma de dizer, não uma medida. Mas ela muda a postura. Prompt deixa de ser texto improvisado e vira artefato de engenharia, projetado de forma deliberada.

Isso é o que permite construir coisas maiores: agentes integrados às aplicações da empresa, agentes que ajudam a programar e assistentes para o dia a dia. A diferença entre um experimento curioso e um componente confiável costuma estar na estrutura desse texto.

Onde isso quebra? Quando o prompt é tratado como metade do sistema, mas sem nenhum dos cuidados que o código recebe. E essa é a ponte para a próxima ideia.

## A gestão dos prompts
A terceira frase-âncora: prompt sem gestão é risco, então ele precisa ser guardado, versionado, observado e avaliado.

Volte ao atendente virtual. As respostas pioraram, e alguém pergunta: qual era o texto da semana passada? Se ninguém sabe, não há como comparar nem como voltar atrás. É esse tipo de dano que o professor chama de irreparável. Guardar e versionar resolve essa parte.

Depois vêm as plataformas de terceiros, como LangSmith e PromptLayer. Elas mostram como os prompts estão sendo usados, estimam custo e trazem outros detalhes da operação.

Elas também ajudam a avaliar. Avaliar é responder a duas perguntas. Entre vários prompts, qual funcionou melhor? E o mesmo prompt, em modelos diferentes, continua dando o resultado esperado? Essa segunda pergunta é a que evita surpresas quando alguém decide trocar por um modelo mais barato.

Tudo isso também se liga à disciplina de Design Docs. Muitos desenvolvedores não têm ideia de quantos tipos de documento um projeto pode ter, cada um para um contexto. Pedir "gera a documentação" tende a produzir um texto genérico. Pedir o tipo certo, com objetivo, profundidade e formato, é outra história.

Prompt sem gestão é risco, então ele precisa ser guardado, versionado, observado e avaliado.

## O que está em jogo
A quarta frase-âncora: o prompt afeta a qualidade, o custo e a latência da aplicação.

A qualidade é a parte óbvia. O custo e a latência costumam surpreender. Um prompt mal desenhado pode provocar respostas longas demais. Resposta longa custa mais e demora mais. Pense numa conta de telefone: o valor depende também de quanto tempo se fala, e não só do plano contratado.

Por isso, ajustar o prompt também é ajustar a operação. O professor avisa que não há mágica, mas espera que você se surpreenda com tudo o que está em volta desse assunto.

## Para não confundir
Três pares costumam se misturar.

Primeiro, mudar o prompt e treinar o modelo. Você já viu que o treino mexe nos pesos. Mudar o prompt não mexe em peso nenhum. Ele muda o contexto de cada resposta. Por isso, voltar atrás em um prompt é trocar o texto, e não retreinar.

Segundo, versionar e observar. Versionar diz o que estava escrito em cada momento e permite voltar. Observar mostra o que está acontecendo no uso, como o custo. Uma coisa não substitui a outra.

Terceiro, observar e avaliar. Saber quanto um modelo custa não diz se a resposta dele está boa. Só a avaliação compara o resultado com o que era esperado.

## Revisão
Vamos às frases-âncora, em sequência.

Saber o que pedir não basta, o jogo está em como pedir.

Numa aplicação com inteligência artificial, o prompt é parte do comportamento do software.

Prompt sem gestão é risco, então ele precisa ser guardado, versionado, observado e avaliado.

O prompt afeta a qualidade, o custo e a latência da aplicação.

Agora, três perguntas.

Primeira pergunta: alguém alterou uma frase do prompt e as respostas pioraram. Por que não é preciso retreinar o modelo para voltar ao comportamento antigo?

[pausa 5]

Resposta: porque o prompt não muda os pesos. Basta voltar ao texto anterior, desde que ele esteja versionado.

Segunda pergunta: o time quer migrar para um modelo mais barato e já tem a estimativa de custo. O que falta antes de migrar?

[pausa 5]

Resposta: testar o mesmo prompt nos dois modelos e verificar se o resultado continua sendo o esperado.

Terceira pergunta: o modelo e o volume de uso continuam iguais, mas a fatura subiu depois de uma mudança no prompt. Qual é uma explicação possível?

[pausa 5]

Resposta: o prompt pode estar provocando respostas longas demais, e isso aumenta o custo e o tempo de execução.

Na próxima aula, vamos entender o que realmente é engenharia de prompt.
