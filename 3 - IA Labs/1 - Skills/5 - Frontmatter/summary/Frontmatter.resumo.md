# Frontmatter — resumo

A aula volta ao frontmatter, anunciado no fim da aula anterior, e apresenta as propriedades que ele aceita, com atenção especial à `description`. Depois o professor cria uma segunda skill, de mensagens de commit, para aplicar as boas práticas e testar o disparo pela description. Na fala dele, "Claude" vale para o Claude Code ou para outro harness.

## Propriedades de padrão aberto e propriedades do Claude Code

O frontmatter aceita muitos parâmetros, principalmente no harness do Claude Code. O professor separa dois grupos:

- **Padrão aberto:** propriedades que devem ser interpretadas por qualquer harness, como o Codex ou o Open Code. Se é que dá para chamar de padrão, diz ele.
- **Específicas do Claude Code:** as demais, que só esse harness entende.

A aula foca nas de padrão aberto, e, entre elas, na `description`.

## As propriedades de padrão aberto

- **`name`:** o nome da skill, que segue o padrão já visto: o mesmo nome da pasta.
- **`description`:** o **classificador de disparo**, a propriedade mais importante. É ela que diz se a skill vai executar ou não.
- **`allowed-tools`:** já apareceu antes; permite que a skill use tools sem pedir permissão.
- **`metadata`:** informações adicionais sobre a skill.
- **`license`:** o tipo de licença.
- **`compatibility`:** requisitos do ambiente. Serve para sinalizar pré-requisitos, por exemplo quando a skill depende de um runtime ou de uma versão específica de uma biblioteca.

Metadados, licença e compatibilidade são, segundo o professor, coisas já conhecidas no mundo do desenvolvimento. Na skill do exemplo ele não vai precisar de `allowed-tools`, `metadata` nem `license`, e por ora os deixa de lado.

## A description e o formato de quatro partes

A `description` é o classificador: decide se a skill será executada. É tão importante que, mais adiante no curso, será possível testar se ela cumpre esse papel. Quando usá-la? Sempre.

O professor recomenda um formato de quatro itens:

1. **Quando usar** a skill.
2. **O gatilho:** os termos que acionam a skill, em geral entre aspas (na Simple Logger, "log" seria um deles).
3. **Quando não usar.**
4. **O que a skill produz.**

Com isso se monta uma metodologia para escrever a description, mas dentro dela ainda há boas práticas a observar.

## Boas práticas da description

- **Escreva em terceira pessoa.** Prefira "Processa arquivos Excel e gera relatório" a "Posso ajudar a processar arquivos do Excel" ou "Você pode usar isso para processar Excel".
- **Seja específico e inclua termos-chave.** É a mesma regra dos gatilhos entre aspas, só que aplicada ao texto corrido da descrição.
- **Evite o vago.** A descrição deve falar das capacidades da skill para funcionalidades específicas.

O motivo: quanto mais específica, com gatilhos de execução e em terceira pessoa, maior a garantia de que o Claude, ou outro harness, com um conjunto de, digamos, 100 ou 200 skills, dispare aquela que realmente faz sentido no momento.

## A skill de mensagens de commit

Para aplicar o que foi visto, o professor cria a skill **message commits**: copia o `skill.md` da Simple Logger e a adapta para gerar mensagens de commit de um repositório.

- **Description:** ele a escreve a partir de um texto pronto, em inglês: gerar uma mensagem de commit descritiva, seguida de quando usá-la. Reconhece que é uma versão simplificada, mas suficiente para ter um bom resultado.
- **Corpo:** uma seção de formato da mensagem de commit, com a instrução de gerar a mensagem seguindo esse formato, e exemplos de entrada e saída. Um deles parte de "Added user authentication with JWT tokens" e mostra a mensagem esperada; os outros cobrem uma correção (fix) e uma atualização de documentação.

## Executando pelo slash command

Com o Claude Code aberto, ele recarrega as skills ("reload skills") e a nova skill aparece. Ao rodá-la, ela acusa que não há repositório. Ele faz `git init` num novo Bash e roda a skill outra vez, mas a resposta ainda acusa que não há repositório inicializado: o repositório foi criado em outro Bash, com o Claude Code já aberto. Então ele fecha e abre o Claude Code de novo, para ter o contexto correto. Agora a skill carrega, analisa as mudanças, vê que não há nada em stage, mas que há arquivos a commitar, lê esses arquivos e sugere mensagens de commit.

## Testando o disparo pela description

Até aqui, a skill foi invocada diretamente; ainda não se testou se a description a dispara. Em uma nova sessão, o professor pede, em texto livre, algo como "create commit message for changes". A skill é carregada: foi o processo de classificação, pela description, que a acionou. Ela lê os arquivos e devolve as mensagens.

Depois ele pede, em português, que a skill separe cada alteração do projeto e gere a mensagem de commit com base nas mudanças. Em vez de agrupar tudo em uma mensagem, ela agrupa de outro jeito e entrega seis mensagens.

## Uma habilidade, N resultados

O fechamento: a habilidade de gerar mensagens de commit pode ser replicada de modo que, a partir do prompt que se faz, saiam N resultados diferentes. A ação executada, porém, continua sendo exatamente a mesma.
