# Aula 04 — resumo

## A nova linguagem de programação
O português, ou o inglês, virou a nova linguagem de programação. Por isso, os projetos vão acumular cada vez mais arquivos Markdown com regras e guidelines. O nome desses arquivos depende da ferramenta: o Claude chama de memória o que fica no `CLAUDE.md`, enquanto o Cursor tem rules em uma pasta própria e também memórias, que são anotações que ele faz sobre um comportamento e não são necessariamente uma rule. O professor prefere focar nas ideias, não na ferramenta. Rules e memórias não garantem sucesso: são só um ponto de partida.

## Complexidade cresce com o tempo
Conforme o projeto cresce, a complexidade aumenta, e a briga constante é impedir que ela suba demais. É por isso que existem refatoração e testes, embora, no dia a dia, os bugs e os problemas urgentes dificultem esse cuidado. No início do software, entrega-se muita feature; com seis meses, já fica difícil; depois de um ano, uma feature nova pode gerar um problema grande.

## Três formas de reduzir a complexidade
Testes, documentação e redução do acoplamento diminuem a complexidade, e a IA pode ajudar nos três. O problema é pedir de forma ingênua.

## Testes que não testam
Pedir "crie os testes baseados nessa classe" não garante que os edge cases, onde o teste faz diferença, sejam cobertos. Testar getter e setter não adianta. O resultado é a falsa sensação de que o software está testado, o que é pior do que não ter teste: quem não tem teste sabe que não tem.

## Documentação e acoplamento
A documentação é uma das maiores dores da história do desenvolvimento. De especificações completas antes de desenvolver, chegamos, com o ágil, a projetos que só têm um README desatualizado. Já o acoplamento é o grande vilão da complexidade.

## Documento de contexto geral
Todo trabalho com IA precisa de um documento de contexto geral, que explica do que o projeto se trata, normalmente pelos lados de produto e técnico. Ele não precisa ser único: em um projeto com módulos grandes, cada módulo pode ter o seu, sempre referenciando o contexto principal. Isso ajuda a IA a entender o porquê do que está fazendo.

## O novo funcionário
Imagine contratar alguém muito inteligente, o Gabriel do exemplo, e pedir uma funcionalidade logo no primeiro dia. Ele não vai conseguir, ou não vai fazer como você gostaria, porque não conhece o produto, os problemas passados, as bibliotecas, os testes nem o padrão de commits. Vai fuçar no código e fazer o que acha melhor.

## Cada novo chat é um novo Gabriel
As ferramentas recomendam iniciar um novo chat para ter melhores resultados, mas a tentação é continuar no mesmo, porque ele já acumulou informação valiosa e mencionar um chat antigo não é a mesma coisa. Só que a janela de contexto estoura e a IA começa a errar de qualquer forma. Cada aba é um agente que não sabe nada e olha o código do zero; a documentação evita isso.

## O que a IA precisa saber
Há muitos tipos de documentação, tema de uma disciplina futura de Design Docs. Sem entender de produto, a IA olha código por código e tenta inferir o que fazer. Ela também precisa conhecer:

- a stack;
- as bibliotecas usadas;
- as guidelines: como comentar, indentação, qual ferramenta de teste;
- um README inicial que explique como subir o projeto.

Parece óbvio, mas muitas vezes não nos colocamos no lugar da IA.

## O motivo de cada biblioteca
Sem precisar chegar a um ADR (Architecture Decision Record) nem escrever uma bíblia, é preciso documentar o que se usa, em qual parte do sistema e por quê. Se o Redis serve só para cachear a listagem de produtos do e-commerce, a IA que o vê na stack pode implementar cache com ele no checkout. Quando sabe que o cache é apenas para o catálogo, ela não tende a colocá-lo em outras features.

## Documentação prévia das libs
A IA já viu muito código de frameworks populares, mas pode ter sido treinada em uma versão antiga ou de um jeito inadequado ao projeto. Aí gera código que não roda e, sem conseguir implementar, pode fazer downgrade, alucinar, trocar de biblioteca ou escrever uma do zero. Hoje ela também pode consultar a web, o que às vezes resolve, mas pode cair em um Stack Overflow de versão antiga. A saída é gerar previamente a documentação da parte necessária, na versão desejada, e indicá-la na memória, por exemplo: ela acerta muito mais sem depender da web.

## Tarefa e plano de ação
Por último, é preciso dizer ao Gabriel o que fazer. Cada pessoa gerencia tarefas de um jeito, e as IAs também estão começando a gerenciar as delas. Aí entra o plano de ação, que define como resolver o problema e dá origem às tarefas.

## A documentação é um ativo
Gerar tudo isso dá trabalho: não existe almoço grátis. Mas é um ativo, como um teste feito no primeiro dia, que ainda gera valor com cinco anos de projeto. A cada novo chat, em qualquer ferramenta, você recebe um Gabriel treinado. A regra é simples: se abrir uma janela nova obriga a explicar muita coisa, faltou documentação. A recompensa é abrir um novo chat com a mesma paz de espírito de ver os testes passarem.

## State
State é um documento com o estado atual do projeto, útil quando a tarefa para no meio e, no dia seguinte, é preciso saber onde você e a IA pararam. Não é necessariamente em qual tarefa se parou: mostra o que o software é capaz de fazer no momento, que problemas teve e que bugs podem estar acontecendo. É o que se contaria em uma daily.

## Arquivos locais
Como todos trabalham com Git, o state da funcionalidade de cada desenvolvedor é diferente do state dos colegas. O que serve só para você vai em um arquivo como `state.local.md`, colocado no `.gitignore`, porque tudo o que é comitado pode afetar o trabalho de outra pessoa. O mesmo vale para rules que só servem a você: elas também ficam locais.
