# Tipos e tecnicas e Prompts

## Abertura
Na aula passada, vimos que o prompt muda de peso conforme o lugar onde ele está.

Esta aula é curta e funciona como uma porta de entrada. Ela prepara o terreno para os tipos de prompt, com duas ideias e um combinado sobre como vamos estudar.

## Mais informação nem sempre ajuda
A frase-âncora: mais detalhe não é sinônimo de prompt melhor.

Imagine pedir a alguém que compre pão. Você entrega duas páginas, com a história da padaria, o trânsito da rua e o que você comeu ontem. A pessoa pode se perder, ou dar importância ao que não importava.

Com a IA pode acontecer algo parecido. Dar mais informação do que ela precisa pode gerar problemas e comprometer a resposta.

Isso corrige um reflexo comum: quando a resposta vem ruim, a gente despeja mais texto. Às vezes, o caminho é o contrário.

Só não vale cair no outro extremo. Essa ideia não diz que prompt curto é melhor. O ponto é dar o que a tarefa precisa.

Repetindo: mais detalhe não é sinônimo de prompt melhor. E, se o volume não resolve, o que resolve? A forma de instruir.

## Técnicas têm evidência por trás
A frase-âncora: as técnicas de prompt não foram criadas à toa.

Pense num remédio. Você confia nele porque foi testado e comparado com outras opções, e não porque alguém achou o nome bonito.

As técnicas de prompt também foram estudadas. Existem muitos papers, com estatísticas e comparações entre os tipos de prompt. E os benchmarks dos próprios modelos também mostram como esses prompts fazem a IA trabalhar.

Isso tira a escolha do campo do gosto pessoal. Tarefas diferentes pedem formas diferentes de orientar o modelo.

Atenção ao limite: isso não quer dizer que exista uma técnica campeã para tudo. A pergunta certa é qual técnica serve para aquela tarefa.

Repetindo: as técnicas não foram criadas à toa. Falta saber como aprender tantas delas.

## Ver a técnica rodando
A frase-âncora: técnica de prompt se aprende vendo rodar.

Você não aprende a cozinhar só lendo a definição de cada tempero. Em algum momento, você precisa provar a comida.

São muitos tipos de prompt, e só explicar cada um deixaria você meio perdido. Por isso, o professor vai mostrar os tipos na prática, com código ou com o ChatGPT aberto no navegador. A ideia é rodar um prompt e discutir o que aconteceu.

Ele chama isso de olhar por baixo do capô. Mas cuidado com a expressão. O objetivo não é abrir a implementação do modelo. É entender o efeito que a instrução tem sobre a resposta.

Repetindo: técnica de prompt se aprende vendo rodar. E o primeiro tipo a ser visto é o role prompt, que muita gente já usa no automático, sem entender o impacto que ele pode ter.

## Comparando vizinhos
Há dois motivos diferentes para não inflar um prompt, e é fácil misturá-los.

O motivo da aula passada é operacional. Dentro de um produto, o tamanho custa dinheiro e aumenta a latência, que é o tempo de espera.

O motivo desta aula é de qualidade. Mesmo que o tamanho saia de graça, o excesso ainda pode piorar a resposta.

Então, programar com IA libera o custo, mas não libera o ruído.

## Revisão
As frases-âncora, em sequência.

Mais detalhe não é sinônimo de prompt melhor.

As técnicas de prompt não foram criadas à toa.

Técnica de prompt se aprende vendo rodar.

Agora, três perguntas.

Primeira pergunta: se o custo do prompt não pesa, posso colocar tudo o que eu tiver nele?

[pausa 5]

Resposta: não é bom. O que vai além do necessário ainda pode comprometer a resposta.

Segunda pergunta: o que mostra que as técnicas não são questão de gosto?

[pausa 5]

Resposta: papers e benchmarks compararam os tipos de prompt, e tarefas diferentes pedem formas diferentes de orientar o modelo.

Terceira pergunta: o que significa olhar por baixo do capô nesta disciplina?

[pausa 5]

Resposta: é observar o efeito da instrução na resposta, rodando os prompts. Não é abrir a implementação interna do modelo.
