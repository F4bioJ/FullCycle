# Objetivos geração de respostas

## Abertura
Esta aula é uma virada de chave. Até aqui, você viu como os modelos evoluíram e onde eles tropeçam. Na aula passada, por exemplo, vimos que o conhecimento fica congelado depois do treino.

Agora a pergunta muda. O que acontece entre o momento em que você manda um prompt e o momento em que a resposta aparece? E o que você pode mexer nesse caminho?

Vamos passar por quatro ideias. Primeira: a resposta nasce um token por vez. Segunda: token não é palavra. Terceira: cada modelo quebra o texto do seu jeito, e isso custa dinheiro. Quarta: dá para ajustar o comportamento do modelo sem treinar nada de novo, mas esse ajuste cobra um preço.

## A resposta nasce um token por vez
A frase-âncora é esta: a resposta é uma sequência de pequenas escolhas, um token por vez.

O modelo não enxerga a resposta inteira e depois a escreve. Ele olha o contexto, calcula o que tem mais chance de vir em seguida, escolhe um token e repete o processo, agora com esse token fazendo parte do contexto.

Pense em caminhar por um bairro sem mapa, decidindo a cada esquina. Você vira à direita na primeira esquina, e todas as esquinas seguintes já são outras. O destino não estava decidido no começo: ele vem da soma das decisões.

Essa ideia resolve um mistério do dia a dia. Por que trocar uma palavra do prompt muda tanto a resposta? Porque você mudou o contexto logo na primeira esquina, e o caminho inteiro mudou.

Ela também explica uma ilusão. Às vezes, o modelo parece ter respostas prontas guardadas: você pergunta uma definição famosa, e o texto vem quase igual toda vez. Parece uma cópia. Só que, na operação, ele continua prevendo um token por vez. O caminho é tão marcado que ele passa sempre pelas mesmas esquinas.

Onde isso quebra? Em cada esquina, ele escolhe o que é provável, e provável não é o mesmo que verdadeiro. Essa é a mesma raiz da alucinação que você já viu.

Mas de que são feitos esses passos? De tokens. E token é uma unidade que engana. A resposta é uma sequência de pequenas escolhas, um token por vez.

## Token não é palavra
A frase-âncora é esta: token é a unidade do modelo, e ela nem sempre coincide com a palavra.

A aula mostra isso em uma ferramenta da OpenAI chamada Tokenizer. Você escolhe o modelo, escreve uma frase e vê como ela é cortada. Não precisa nem fazer login.

O professor começa com "o cachorro foi na praça". O "o" é um token de um único caractere. O espaço seguido de "cachorro" é outro token. Até ali, parece que cada palavra virou um token.

Aí ele escreve "paralelepípedo", e a palavra se desmancha em vários pedaços, como Par, Ale, Lep, Ip e Edo.

Por quê? Não é por ser comprida. É por ser rara. Imagine uma caixa de peças de montar. Você não guarda uma peça especial para cada objeto raro. Você guarda as peças comuns, que servem para muita coisa, e monta o objeto raro com elas. Os pedaços de "paralelepípedo" aparecem bem mais do que a palavra inteira.

O que isso resolve? O vocabulário não precisa guardar uma unidade longa para cada termo raro.

Onde isso quebra? Na sua intuição. Quem conta palavras para estimar o tamanho de um texto erra. Dois documentos com o mesmo número de palavras podem ter quantidades bem diferentes de tokens, se um deles estiver cheio de termos raros.

E essa quebra não é igual em todo modelo. Token é a unidade do modelo, e ela nem sempre coincide com a palavra.

## Cada modelo quebra de um jeito, e token é custo
A frase-âncora é esta: mais fragmentação significa mais tokens, e mais tokens significam mais custo e menos espaço na janela.

Na demonstração, o professor troca o modelo sem mudar a frase. A quebra muda. Em um dos modelos, "cachorro" passa a ter dois tokens, e "praça" se quebra mais. No modelo Legacy, o mais antigo da lista, a fragmentação é ainda maior.

A explicação dele é que o modelo com menos tokens no treinamento não chegou a tratar "cachorro" como uma palavra forte. Já o treinamento mais forte, com mais tokens, mantém a palavra inteira.

Pense no mesmo texto enviado por dois serviços que cobram por pedaço. Um deles corta o texto em poucos pedaços, e o outro corta em muitos. A mensagem é a mesma, e a conta é diferente.

O efeito prático aparece em dois lugares. O primeiro é o custo: cada token vira dinheiro. O segundo é a janela de contexto, aquela que você viu há pouco: quanto mais tokens, menos espaço sobra.

Isso também traz uma armadilha na hora de migrar. Se você mediu o consumo no modelo A, esse número pode não valer para o modelo B. Meça de novo.

Até aqui, olhamos como o texto entra no modelo. Agora vem a parte de controlar o que sai. Mais fragmentação significa mais tokens, e mais tokens significam mais custo e menos espaço na janela.

## Ajustar a saída sem mudar os pesos
A frase-âncora é esta: prompt e parâmetros mudam a saída sem tocar nos pesos.

O professor compara a LLM, o modelo de linguagem grande, a um motor que você pode ajustar. O mesmo modelo pode responder de forma factual ou criativa, resumida ou detalhada, técnica ou informal, empática ou direta.

Esse controle vem de duas alavancas. A primeira são as instruções no prompt. A segunda são os parâmetros de geração, como temperatura, Top K e Top P. Eles serão explicados nas próximas aulas. Por enquanto, guarde o efeito: eles definem o quanto a escolha do próximo token será conservadora ou diversa.

Voltando às esquinas: uma configuração restritiva faz o modelo seguir quase sempre pela rua principal. Uma configuração aberta deixa ele entrar em ruas menos prováveis.

Isso resolve um problema caro. Se uma empresa quer um tom empático no atendimento e um tom direto no suporte, ela não precisa de dois modelos treinados em separado. O modelo é o mesmo, e a distribuição dos próximos tokens é que se desloca. Também não existe um botão de "modo fixo" lá dentro.

Prompt e parâmetros mudam a saída sem tocar nos pesos.

## A troca: variedade e alucinação
A frase-âncora é esta: mais liberdade traz mais variedade e também mais risco de alucinação.

Quando você abre os parâmetros, ganha respostas menos repetitivas. Só que as ruas menos prováveis também levam a lugares que não existem. A resposta pode derivar e começar a afirmar coisas sem base.

Por isso, a configuração ideal depende da tarefa. Imagine que você usa a mesma LLM para resumir um contrato e para sugerir slogans. No contrato, você quer consistência, então a configuração fica restritiva. Se você usar essa mesma configuração nos slogans, eles vão sair previsíveis e parecidos. Aí faz sentido abrir os parâmetros só nessa tarefa, aceitando mais risco de deriva ali.

O mesmo raciocínio vale para resumos, código, e-mails, conteúdo e chatbots, que são as aplicações que o professor promete explorar. Cada uma pede um perfil de saída. Quem entende o mecanismo sai da tentativa e erro e passa a escolher esse perfil com intenção.

Mais liberdade traz mais variedade e também mais risco de alucinação.

## O que não confundir
Vamos separar o que costuma se misturar.

Token e palavra. A palavra é a unidade que você enxerga. O token é a unidade que o modelo usa e que entra na conta.

Raro e comprido. O que fragmenta uma palavra é a raridade, e não o número de letras.

Pesos e parâmetros de geração. Os pesos vêm do treino e ficam congelados, como na aula passada. Os parâmetros agem na hora de escolher o próximo token. Mexer neles não ensina nem desensina nada ao modelo.

Parâmetros e tokenização. Os parâmetros mudam a escolha do que sai. A tokenização muda como o texto é cortado. Abrir a temperatura não fragmenta o seu texto, e trocar a quebra não é um controle de tom.

Resposta que parece memorizada e memória ativada. O caderninho da aula passada guarda informações sobre você, fora dos pesos. Já a definição que sai sempre igual não vem de um caderninho: ela é predição token a token, por um caminho muito provável.

## Fechamento
Vamos repetir as frases-âncora.

A resposta é uma sequência de pequenas escolhas, um token por vez.

Token é a unidade do modelo, e ela nem sempre coincide com a palavra.

Mais fragmentação significa mais tokens, e mais tokens significam mais custo e menos espaço na janela.

Prompt e parâmetros mudam a saída sem tocar nos pesos.

Mais liberdade traz mais variedade e também mais risco de alucinação.

## Revisão
Primeira pergunta: por que trocar uma única palavra no início do prompt pode mudar a resposta inteira?

[pausa 5]

Resposta: porque ela muda o contexto da primeira escolha, e cada escolha influencia as seguintes.

Segunda pergunta: duas palavras têm o mesmo número de letras, uma comum e outra rara. Qual delas tende a virar mais tokens, e por quê?

[pausa 5]

Resposta: a rara, porque os pedaços dela aparecem mais do que a palavra inteira.

Terceira pergunta: você mediu o consumo de tokens no modelo A e vai migrar para o modelo B. Por que não confiar nesse número?

[pausa 5]

Resposta: porque o modelo B pode quebrar o mesmo texto de outra forma e gastar outra quantidade de tokens.

Quarta pergunta: uma equipe abre os parâmetros de um chatbot, e surgem mais afirmações sem base. O que aconteceu com os pesos?

[pausa 5]

Resposta: nada. Os pesos continuam iguais. A escolha do próximo token ficou mais livre, e isso aumenta o risco de alucinação.
