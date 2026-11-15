# Conceitos básicos do ReAct

## Abertura
Na aula passada, o Skeleton of Thought organizou a resposta em tópicos antes de escrever. Tudo ainda acontecia dentro da cabeça do modelo. Hoje isso muda.

O assunto é o ReAct. O nome junta duas palavras em inglês: reasoning, que é raciocinar, e acting, que é agir. E não tem nada a ver com o React do JavaScript.

A frase-âncora da aula é esta: o ReAct pensa, age e olha o resultado antes de pensar de novo.

## O loop de pensar, agir e observar
O ReAct pensa, age e olha o resultado antes de pensar de novo.

Imagine um mecânico diante de um carro que não pega. Ele pensa: pode ser a bateria. Então age: liga o voltímetro. Depois observa: a bateria está boa. Com isso, pensa outra vez: então pode ser o motor de arranque. E assim segue, um passo de cada vez, guiado pelo que viu.

O modelo faz o mesmo. Ele raciocina, escolhe uma ação, recebe a observação do que a ação produziu e usa essa observação para decidir o próximo passo.

O ganho aparece quando o modelo tem ferramentas. Se a tarefa é listar os repositórios públicos de alguém, e existe uma ferramenta do GitHub, a ação é chamar essa ferramenta. O modelo deixa de só descrever o que faria. Ele faz, e o retorno real guia o passo seguinte.

Por isso a técnica acabou embutida nas próprias LLMs. No LangChain, por exemplo, existe um tipo de agente chamado ReAct, que segue exatamente esse padrão.

Agora, onde ele quebra. Um loop precisa de um ponto de parada. Sem isso, o agente continua pensando e agindo, e cada volta gasta mais tokens. Por isso, quem monta um agente define quando ele deve parar.

O ReAct pensa, age e olha o resultado antes de pensar de novo. E esse vai e volta tem um preço.

## Custo, usos e limitações
Cada volta do loop escreve um pensamento, uma ação e uma observação. O texto cresce rápido. O ReAct é longo, verboso e lento.

Pense numa central de atendimento com dois milhões de chamados por dia. Se cada chamado passar por várias voltas desse ciclo, a conta de tokens explode e a fila trava. Por isso, o ReAct raramente roda em alta escala. Ele brilha na exploração e no dia a dia de quem desenvolve.

Os usos citados na aula são estes: depurar um erro, criar um agente que busca informação interna, automatizar uma tarefa que exige decidir e executar, simular um troubleshooting e integrar o modelo com uma ferramenta externa. Muitos modelos já trabalham assim por conta própria, mas o prompt permite forçar essa linha de raciocínio.

Agora, a limitação mais traiçoeira. O modelo pode fingir. Ele pode escrever que rodou os testes quando nenhuma ferramenta de testes existe. E pode inventar o resultado: todos os testes passaram. Qualquer modelo pode fazer isso, mas no ReAct pesa mais. O próximo raciocínio se apoia nessa observação falsa, e todo o resto do loop fica torto.

Some-se a isso a dificuldade de controlar quando ele para, e fica claro por que colocar o ReAct em produção de alta escala é mais complexo e mais arriscado.

## Comparando com as técnicas anteriores
Vale separar o ReAct das técnicas que vieram antes.

O Chain of Thought, cadeia de pensamento, raciocina passo a passo numa única passada, sem sair do texto. O Self-consistency roda várias cadeias e fica com a resposta que mais aparece. O Tree of Thought abre ramos alternativos e escolhe entre eles. O Skeleton of Thought monta o esqueleto e depois expande cada tópico.

Em todas elas, o modelo só pensa. O ReAct é o primeiro em que ele age no mundo e reage ao que volta. A pergunta que separa todas elas é esta: o próximo passo depende de um resultado real vindo de fora? Se depende, é ReAct.

## Revisão
Recapitulando a frase-âncora: o ReAct pensa, age e olha o resultado antes de pensar de novo. Ele é poderoso com ferramentas, caro em escala e precisa de um ponto de parada.

Primeira pergunta: um agente ReAct chamou a ferramenta do GitHub. O que ele faz com o retorno?

[pausa 5]

Resposta: trata o retorno como observação e raciocina sobre ela para decidir a próxima ação ou concluir.

Segunda pergunta: por que o ReAct quase nunca roda em alta escala?

[pausa 5]

Resposta: porque cada volta do loop é verbosa. Ele gasta muitos tokens e demora, então serve mais para exploração e desenvolvimento.

Terceira pergunta: por que uma observação inventada é tão perigosa no ReAct?

[pausa 5]

Resposta: porque o próximo raciocínio se apoia nela. O agente passa a decidir em cima de um estado que nunca existiu.
