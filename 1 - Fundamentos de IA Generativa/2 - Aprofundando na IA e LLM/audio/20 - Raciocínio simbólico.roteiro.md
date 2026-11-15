# Raciocínio simbólico

## Abertura
Na aula passada, vimos a janela de contexto: o limite do que o modelo consegue considerar de uma vez. Hoje o problema é outro. Mesmo quando tudo cabe na janela, o modelo pode errar uma conta ou uma dedução simples.

O assunto é raciocínio simbólico, também chamado de raciocínio lógico. Vamos entender por que uma LLM, um grande modelo de linguagem, escreve tão bem e calcula tão mal. Depois vamos ver três saídas para isso. E, no fim, as armadilhas que continuam existindo.

Vale guardar o motivo desta sequência de aulas. Conhecer as dificuldades evita endeusar a tecnologia. E ajuda você a decidir onde pode confiar nela.

## Fluência não é raciocínio
A frase deste bloco é: fluência não é raciocínio.

Pense em alguém que decorou como soam as explicações de matemática. Essa pessoa fala com segurança, usa os termos certos e monta frases bonitas. Agora peça a ela que resolva uma conta nova. A segurança na fala não ajuda em nada.

Com a LLM acontece algo parecido. Ela tem fluência textual. Ela sabe construir frases e reproduzir texto. Tudo o que vimos no curso, do n-grama às cadeias de Markov e às redes neurais, serve para uma coisa: decidir qual é o próximo token.

Isso resolve muito bem a linguagem natural. Só que matemática não é previsibilidade estatística. Quando a tarefa pede várias condições e etapas que dependem umas das outras, o padrão de linguagem não basta. E isso aparece em matemática, em cálculo e em desenvolvimento de sistemas, que é o nosso dia a dia.

A LLM até consegue fazer. Mas é muito mais difícil para ela do que para nós. Então, fluência não é raciocínio. E para ver a diferença, precisamos saber o que é raciocinar com símbolos.

## O que é raciocínio simbólico
A frase deste bloco é: raciocínio simbólico é manipular símbolos seguindo regras formais.

Lembre de uma função matemática que só tem letras, como x e y. Você ainda não sabe os números. Mesmo assim, consegue trabalhar com ela, porque conhece as regras. No fim do cálculo, o x recebe um valor. Na programação é igual: você tem uma variável e atribui um valor a ela.

Esse tipo de raciocínio permite tirar consequências a partir de premissas. Por exemplo: se todos os A são B, e X é A, então X é B. Você nem precisa saber o que A e B significam. A conclusão vem da estrutura da frase.

É aí que a LLM tropeça. Ela não trabalha com a regra, e sim com a probabilidade do que vem depois. E ela tem dificuldade em seguir várias etapas encadeadas, em lidar com negação, com quantificadores, com contradições e com implicações.

Guarde: raciocínio simbólico é manipular símbolos seguindo regras formais. Agora vem a pergunta que confunde muita gente: se ela não sabe fazer isso, por que costuma acertar?

## Consegue, mas não compreende
A frase deste bloco é: ela consegue, mas não compreende.

O professor fez o teste do "todos os A são B" no ChatGPT. E o ChatGPT acertou e ainda explicou direitinho. Por quê? Porque esse tipo de exemplo aparece aos milhões: em livros de matemática, na internet, até em brincadeiras de rede social. O modelo viu muito disso no treino.

Imagine um aluno que acerta uma prova porque resolveu exatamente aquela questão na semana anterior. A nota é boa. Mas troque os dados e o formato, e ele pode travar.

É a mesma ideia aqui. A LLM trabalha com base probabilística, não simbólica. Ela é treinada para prever a próxima palavra. Dentro dela, a frase vira vetor, e os vetores entram num cálculo de probabilidade. Ela imita o que costuma vir em seguida, sem fazer a dedução. Isso é ótimo para linguagem natural e muito frágil para lógica formal.

O risco aparece quando você apresenta algo que ela ainda não mapeou. Aí a chance de vir uma resposta errada é grande. Um acerto num caso famoso não prova que o modelo vai acertar no seu caso. Consegue, mas não compreende. E o problema cresce quando há muitas etapas.

## O erro que desce a cascata
A frase deste bloco é: errou no começo, compromete tudo para baixo.

Imagine uma receita em que cada passo usa o resultado do anterior. Se você trocar o sal pelo açúcar logo no início, os passos seguintes podem ser perfeitos, e o bolo continua estragado.

Num problema de álgebra ou num código com várias dependências, é assim. A LLM tem falta de consistência entre etapas. Os agentes lidam um pouco melhor com isso, mas a dificuldade continua. E, se ela erra no primeiro passo, o resto herda o erro.

O pior é o segundo efeito: ela tende a gerar respostas plausíveis. O texto continua bem encadeado e o tom continua seguro. Se errar, ela pode convencer você de que está certa.

Para você, fica o alerta: um texto bem escrito não é sinal de um raciocínio certo. Errou no começo, compromete tudo para baixo. E por que ela não percebe o próprio erro? Porque lhe faltam duas coisas.

## Sem memória simbólica e sem verificação
A frase deste bloco é: não há caderno de anotações nem corretor.

Quando você resolve um problema difícil, você anota cada passo no papel e volta nele depois. O computador comum faz o mesmo: guarda valores na memória, busca de novo e continua o processamento.

O Transformer não tem esse caderno. Ele guarda vetores e correlações, porque está tentando construir uma frase, e não resolver um problema matemático. Não há memória simbólica que persista.

Também não há corretor. Um compilador avisa quando o código não faz sentido. Um provador lógico avisa quando a dedução não fecha. A LLM não tem nada disso por dentro. Então a resposta pode parecer certa sem que nada a tenha conferido.

O professor dá um exemplo clássico. João tem o dobro da idade de Maria. Daqui a cinco anos, a soma das idades será quarenta e cinco. Qual a idade de cada um? Para resolver, você precisa escrever que João é igual a duas vezes Maria, e depois montar as operações. Essa passagem do texto para a álgebra é o ponto difícil.

Veja o que pode acontecer. O modelo dá o resultado certo. Você pede para ele abrir os cálculos, e ele erra no meio. Isso sugere que o resultado pode ter vindo de um padrão visto no treino, e não de uma conta feita passo a passo.

Não há caderno de anotações nem corretor. Agora vamos às saídas. A primeira é a mais simples.

## Chain of Thought
A frase deste bloco é: pensar em voz alta organiza, mas não garante.

Chain of Thought, ou cadeia de pensamento, é conhecido pela sigla CoT. Você estimula o modelo a pensar em voz alta. Em vez de pedir só a resposta, você pede: vamos resolver passo a passo.

É como pedir a um aluno que mostre a conta, e não só o resultado. A conta aberta força uma ordem. E, se algo sai errado, você vê onde foi.

Isso resolve duas coisas. Organiza o raciocínio do modelo, o que melhora as chances de acerto. E deixa você dar feedback sobre um passo específico. No problema das idades, se o modelo escrever que Maria terá quarenta e cinco anos, você nota na hora que ele trocou a soma das idades pela idade dela.

Mas o CoT tem limite. Ele não cria um caderno nem um corretor. O modelo continua sendo probabilístico. Expor um passo não é o mesmo que conferir esse passo. Pensar em voz alta organiza, mas não garante. Quando você precisa de exatidão, a saída é outra.

## Raciocínio híbrido
A frase deste bloco é: a LLM conversa, a ferramenta calcula.

Pense num gerente de banco atendendo um cliente. Ele entende o pedido e explica o resultado. Mas a conta quem faz é o sistema, e não a cabeça dele.

O raciocínio híbrido segue essa divisão. A LLM é boa de texto. Então você a combina com algo que é bom de cálculo: um Python, uma calculadora, uma API, um motor simbólico. O modelo gera o raciocínio em linguagem natural e delega o cálculo.

É assim que funcionam ferramentas como LangChain e AutoGPT. Elas encadeiam o processamento e o raciocínio. O professor conta que o LangChain é muito usado por grandes empresas, e o curso ainda vai falar mais disso.

Essa abordagem resolve a parte do cálculo em si. O que continua nas mãos do modelo é interpretar o pedido, e ali ele ainda pode errar. Por isso, vale manter a validação. A LLM conversa, a ferramenta calcula. E existe uma ideia mais ambiciosa que essa.

## Modelos neurossimbólicos
A frase deste bloco é: além de calcular, provar.

Um modelo neurossimbólico une Deep Learning, o aprendizado profundo, com um sistema de lógica simbólica. A ideia é ter a desenvoltura da LLM com a precisão de um sistema formal.

Pense num redator que trabalha ao lado de um auditor. O redator escreve, e o auditor confere a prova de cada conclusão. Aqui a meta vai além de delegar a conta: é provar que o cálculo está no caminho certo.

O limite é a maturidade. Há avanços, mas o professor diz que ainda não viu isso funcionando. Portanto, não dá para desenhar um sistema hoje contando com isso como solução pronta. Além de calcular, provar: é uma promessa, ainda em estudo. Vamos às armadilhas que continuam valendo.

## Negação e quantificadores
A frase deste bloco é: não trabalhe na negativa, e todo X é Y não é todo Y é X.

Compare duas frases. Primeira: ninguém que é rico é feliz. Segunda: ninguém que não é rico é feliz. A segunda exige um esforço até para nós. Para o modelo também. Por isso, o conselho é não trabalhar na negativa. Se a sua regra tem negação em cima de negação, reescreva na forma afirmativa.

A outra armadilha é inverter quantificadores. Pense nesta regra: todo pedido aprovado foi pago. Ela não diz que todo pedido pago foi aprovado. Um pedido pode estar pago e ainda aguardar a aprovação. O modelo pode trocar o sentido da frase, e a resposta vai soar perfeitamente natural.

A álgebra simbólica e a lógica proposicional e de predicados também podem dar errado. Modelos como o GPT-quatro fazem isso melhor, mas ainda não é perfeito. Nesses cenários, a regra prática é: mais atenção, mais validações, ou uma das estratégias que vimos. Não trabalhe na negativa, e todo X é Y não é todo Y é X.

## Não confunda com os vizinhos
Agora vamos separar o que costuma se misturar.

Janela de contexto e raciocínio simbólico. A janela limita o que o modelo enxerga e como distribui a atenção. O raciocínio simbólico é sobre o que ele não sabe fazer, mesmo enxergando tudo. Uma janela maior não ensina a fazer contas.

A atenção e o verificador. A atenção pesa tokens para prever o próximo. Ela não confere se um passo lógico é válido. Dar peso a uma palavra é diferente de checar uma dedução.

Alucinação e erro de raciocínio. Os dois vêm com o mesmo tom seguro. Na alucinação, o problema costuma ser um dado errado ou inventado. No erro de raciocínio, os dados podem estar todos certos, e a conclusão é que não decorre deles.

CoT e raciocínio híbrido. No CoT, o modelo continua fazendo tudo: você só pede que ele mostre os passos. No híbrido, a conta sai do modelo e vai para uma ferramenta.

Híbrido e neurossimbólico. O híbrido delega o cálculo para fora e já é usado. O neurossimbólico busca também provar o caminho e ainda está em estudo.

## Revisão
Vamos repetir as frases-âncora.

Fluência não é raciocínio.

Raciocínio simbólico é manipular símbolos seguindo regras formais.

Ela consegue, mas não compreende.

Errou no começo, compromete tudo para baixo.

Não há caderno de anotações nem corretor.

Pensar em voz alta organiza, mas não garante.

A LLM conversa, a ferramenta calcula.

Além de calcular, provar.

Não trabalhe na negativa, e todo X é Y não é todo Y é X.

Agora, as perguntas.

Primeira pergunta: um modelo acertou o "todos os A são B". Isso autoriza usá-lo em regras internas da sua empresa, que nunca foram publicadas?

[pausa 5]

Resposta: não. O acerto pode vir de padrões vistos no treino. Sem padrão parecido, o risco de erro aumenta.

Segunda pergunta: o modelo dá o resultado certo, mas erra ao abrir os cálculos. O que isso indica?

[pausa 5]

Resposta: que o resultado pode ter vindo de um padrão, e não de uma conta feita passo a passo.

Terceira pergunta: por que uma resposta com erro na primeira etapa é tão perigosa?

[pausa 5]

Resposta: porque as etapas seguintes herdam o erro, e o texto continua soando plausível.

Quarta pergunta: você já usa Chain of Thought, e as contas ainda saem erradas. Qual é o próximo passo?

[pausa 5]

Resposta: raciocínio híbrido. A LLM interpreta o pedido, e o cálculo vai para o Python ou para uma API.

Quinta pergunta: a regra diz que todo pedido aprovado foi pago. Um pedido está pago. Ele foi aprovado?

[pausa 5]

Resposta: a regra não permite concluir. Ele pode ter sido aprovado ou não. Afirmar que sim é inverter o quantificador.

Até a próxima aula.
