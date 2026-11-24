# Primeira skill

Aula prática: depois de ver o que é uma skill e as fases que o Claude Code percorre ao usá-la, o professor cria a primeira skill do zero, à mão. É o "hello world" das skills, bem simples, para mostrar o processo de criação. A partir das próximas, ele vai usar a IA para ajudar em algumas partes.

## A pasta e o skill.md

Uma skill começa com uma pasta e o seu arquivo `skill.md`. A do exemplo se chama **Simple Logger**, e dentro da pasta dela fica o `skill.md`.

## O frontmatter: só name e description

A primeira coisa do arquivo é o frontmatter, o nível 1. O professor cola um frontmatter já pronto, troca o nome e tira o `allowed-tools`: por enquanto ficam só duas propriedades, `name` e `description`. Ele apaga a description antiga e escreve uma nova, algo como "log message file for debugging purposes": registrar uma mensagem num arquivo, só para depuração.

## Inglês ou português?

Pode escrever em português, sem problema. O professor lembra que, como no código, o padrão costuma ser o inglês. Quem não domina o inglês pode escrever tudo em português e depois pedir ao próprio Claude, ou a outra IA, que traduza. Ele próprio escreve algumas coisas direto em inglês e, nas mais complexas, escreve em português e pede a tradução.

## O corpo: as instruções

Abaixo do frontmatter vem o corpo, em Markdown: um título com o nome da skill e as instruções que a LLM deve interpretar e executar, isto é, a habilidade reutilizável. A do exemplo diz "use Python to write a log message" e traz um trecho simples de Python que abre (e cria) um arquivo de log e escreve nele "This is a log message". Com isso, a skill está pronta para uso.

## Recarregar ou não as skills

Aqui está o ponto que liga a demonstração à aula anterior. Se o Claude Code já estava aberto quando a skill foi criada, é preciso recarregar as skills (o professor fala em "reload skills") para que ele reindexe. Se a skill foi criada antes de abrir o Claude Code, não precisa: a fase 0, de startup e indexação, já rodou com ela no lugar.

## O que observar na execução

Para conferir se a skill foi reconhecida, o professor digita `/` e o nome, Simple Logger, e a executa. Vale observar:

- **a leitura:** o Claude Code lê a skill e passa pelos ciclos de fases vistos antes;
- **a execução:** ele roda o trecho de Python das instruções;
- **o resultado:** o arquivo de log com a mensagem aparece ao lado, na tela.

## O próximo passo

A seguir, o professor vai aprofundar o frontmatter e os parâmetros que ele aceita, com atenção especial à description, que é o classificador da skill e vai ser muito usada daqui em diante.
