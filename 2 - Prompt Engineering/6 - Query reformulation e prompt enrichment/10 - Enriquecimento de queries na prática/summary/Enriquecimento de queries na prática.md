# Enriquecimento de queries na prática

No vídeo anterior, falamos sobre como enriquecer respostas utilizando um loop iterativo para preencher lacunas. Agora quero abordar algo extremamente importante, que é o foco deste capítulo: como enriquecer perguntas. Ao enriquecer perguntas, conseguimos obter respostas melhores.

Não se apegue ao código Python em si. Procurei organizar o exemplo de forma estruturada, pois dependendo da abordagem pode ficar complicado. Por isso, quero que você entenda bem os detalhes. Separei em classes para tornar mais compreensível — normalmente eu faria funções chamando uma à outra, mas aqui optei por mais organização.

A ideia central é como enriquecer uma pergunta relacionada à correção de uma pull request. Defini algumas informações obrigatórias para reformular a pergunta. Se esses dados não estiverem disponíveis, o sistema deve perguntar ao usuário até obtê-los, para então gerar a pergunta final enriquecida. Com essas informações, podemos consultar um banco de dados, chamar a LLM ou executar alguma ferramenta.

Neste exemplo, defini como informações obrigatórias: ID da pull request, repositório, branch, preocupações (concerns), guia de estilo e requisitos de teste. Conforme desenvolvemos aplicações com LLM, será cada vez mais comum criar classes com Pydantic ou Data Classes para estruturar as respostas em modelos de dados, em vez de trabalhar apenas com linguagem natural.

Criei um modelo base que indica se a pergunta é complexa, se requer subqueries (perguntas menores), um campo de clarifications (perguntas ainda necessárias) e entidades capturadas a partir do interesse do usuário. Por exemplo, se o usuário menciona "minha PR é a PR ID 10", a entidade capturada seria "PR ID 10".

O motor de funcionamento para enriquecer a pergunta funciona assim: chamo o modelo com um prompt que define a tarefa. O prompt instrui o assistente a identificar informações faltantes para gerar perguntas de clarificação. Ele deve continuar perguntando até obter todas as seis informações obrigatórias. A resposta deve ser em JSON, indicando se há subqueries, as clarificações necessárias e as entidades identificadas.

O JSON permite estruturar a resposta e popular o modelo de dados. Em seguida, utilizo outra chain para reescrever tudo em linguagem natural, de forma organizada, concisa e clara, combinando a pergunta original com o contexto obtido.

Por fim, temos o método principal que executa o enriquecimento e gera a resposta final em linguagem natural, com todas as informações coletadas, resultando em uma pergunta bem formulada.

Na prática, haverá uma interação com o usuário: o sistema pergunta, o usuário responde, e o loop continua até que todas as clarificações sejam obtidas. Só então a pergunta final enriquecida é gerada.

Você terá acesso ao código fonte para analisar passo a passo. Meu objetivo não é o código em si, mas sim o conceito de como enriquecer perguntas. Sei que pode parecer confuso, especialmente com o formato JSON, mas a execução tornará tudo mais claro.

Vou executar o programa. Vou rodar "python query_enrichment.py". Ele perguntará: "Qual é a sua pergunta?" Vou responder em português: "revise a minha pull request". Então, essa é a minha pergunta inicial.

Agora vamos ver o que acontece. Preste atenção. Este arquivo está extenso principalmente devido ao debug. Observem: aqui temos o round 1, onde preciso enriquecer o output. A pergunta é complexa? Sim, porque se não fosse, ele não expandiria as perguntas. Aqui estão as subperguntas geradas: identificar o ID da PR, determinar o repositório, descobrir o branch, clarificar concerns, verificar o style guide e especificar os requirements.

Esse é o JSON atual com as perguntas que preciso responder. Para cada uma, preciso obter as informações: PR ID, nome do repositório, branch, etc. Quando todas essas clarificações forem resolvidas, terei a pergunta final enriquecida. As entidades ainda estão vazias.

Ele pede clarificações: "Qual é o ID da sua Pull Request?" Vou responder "1". Em seguida: "Qual é o ID do seu repositório?" Vou me negar a responder por enquanto para ver o comportamento.

Ele informa que no primeiro round conseguiu o PR ID. Agora, a pergunta sobre o ID da pull request não aparece mais, e a entidade PR ID agora é 1. Ele então pergunta: "Qual é o nome do seu repositório?" Vou responder "iagem". Depois: "Qual é o branch?" Vou responder "teste". Ainda deixo algumas respostas pendentes.

Agora ele tem as informações: nome do repositório, branch name e PR ID. Restam três pontos a clarificar. Observem como as perguntas estão evoluindo: "Revise a pull request com ID 1 no repositório iagem, no branch test." As subqueries já estão mudando porque já tenho dados suficientes para construir uma pergunta melhor.

Continuo: para concerns, vou responder "golang style to be used" — minha preocupação é não seguir o estilo Go. Para test requirements, vou responder "atingir 80% de cobertura".

Agora ele tem todas as entidades e não há mais nada a esclarecer. Vejam como ficou a pergunta final: "Você poderia revisar minha pull request com ID 1 no repositório iagem, no branch test, garantindo que siga o style guide Go e atinja os requirements de 80% de cobertura de testes."

Perceberam? Saímos de uma pergunta extremamente aberta — "revise minha pull request" — para uma pergunta muito mais completa, simplesmente enriquecendo a estrutura com o que considero importante.

Muitas vezes, quando um usuário faz uma pergunta vaga em um chat, podemos cair nesse loop interativo. Após responder todos os requisitos, enviamos a pergunta enriquecida para a LLM, que executará a operação.

Existem outras formas de enriquecimento. Se tivéssemos contexto anterior — como qual PR o usuário estava mexendo, qual branch, qual projeto — muitas informações já viriam preenchidas, e a query, apesar de vaga, já estaria melhor do que apenas a pergunta original.

O importante é entender que existem diversas técnicas para garantir perguntas cada vez mais completas para a LLM. Este é apenas um exemplo, com múltiplas chamadas e iterações, mas espero que tenha ficado claro como criar técnicas interessantes baseadas nos dados disponíveis e no que considero obrigatório ou não.

Aqui, fui respondendo conforme o sistema perguntava. Mas, na prática, quando um usuário faz uma pergunta vaga, podemos ter prompts que reformulem a pergunta com base no perfil do usuário, no último código que ele mexeu, na função que ele exerce, nos guias da empresa, etc. A pergunta reformulada pode ser gerada a partir de dados do banco, chamadas de ferramenta ou perguntas diretas ao usuário, como fizemos.

É muito melhor enviar uma pergunta completa como essa do que mandar para o sistema "corrija uma PR" sem saber sequer o ID da PR. Quando você internaliza essa ideia, passa a obter respostas cada vez mais completas.

O interessante é que, se eu fizer uma pergunta como "revise minha PR que está no repositório iagem, no branch X, e tome cuidado para não esquecer de seguir o estilo oficial de programação em Go", ele já captura algumas informações: repositório iagem, branch X. O PR ID e os concerns ele não pegou, mas já temos uma base. Com ajustes no prompt, provavelmente conseguiria capturar mais entidades e gerar uma pergunta final ainda mais rica.

Isso mostra que não precisamos começar do zero. Quando o sistema roda, podemos capturar entidades, entender o contexto e trazer apenas as informações que realmente importam, reformulando a pergunta de forma gramaticalmente correta e bem estruturada com os dados obtidos do usuário.

Este é um exemplo simples de como utilizar essas técnicas. Não tem como falar de prompt sem abordar enriquecimento de query e melhoria de respostas.
