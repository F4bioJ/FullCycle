# Conectando skill ao mundo externo

Aula prática: o professor continua evoluindo a skill de triagem de pendências criada na aula anterior (a de nível 3, com um script que varre os marcadores como TODO e FIXME). Nesta aula ele faz três coisas com ela: move a política de classificação para uma referência, faz a skill publicar o resultado no GitHub e corrige um erro que aparece no caminho.

## Passo 1: a classificação vira uma referência

Até aqui, os critérios de classificação estavam escritos dentro do `skill.md`. O professor pede ao Claude Code, em linguagem natural, que analise a skill passo a passo, crie um diretório `reference` com um arquivo próprio para essa política e depois atualize o `skill.md` com um link para ela.

- **O que observar:** a pasta `reference` aparece com o arquivo da política de classificação, e o `skill.md` passa a apontar para ele. O professor faz questão de conferir o link: se o conteúdo sai do `skill.md`, a skill precisa saber onde ele foi parar.
- **O teste:** ao rodar a skill de novo, o relatório sai coerente com o que já tinha saído antes, inclusive nas recomendações.
- **O que isso mostra:** é o progressive disclosure em uso. O corpo fica mais leve e a política só é lida quando a skill precisa dela, no nível 3.

## Por que conectar ao mundo externo

Com a skill agora no nível 3, com referência, script e o `skill.md`, o professor dá o passo seguinte. Para ele, só classificar não faz muito sentido: o resultado precisa ir para algum lugar onde vire uma ação e seja ajustado depois. O destino escolhido é uma issue num repositório do GitHub.

## Três caminhos para falar com o GitHub

O professor cita três opções:

- o **GitHub CLI** (`gh`);
- a **API do GitHub**, autenticada com um personal token;
- o **MCP do GitHub**, que pode rodar via Docker ou pela própria instalação.

Ele usa o CLI porque, nas palavras dele, é algo que todo mundo já tem na máquina e é o mais fácil de demonstrar, mas deixa a escolha em aberto.

## Passo 2: um novo passo na skill, criar a issue

O pedido ao Claude Code é: depois da classificação e das recomendações, usar o `gh` para criar uma issue com todas as informações e recomendações. O professor já estava logado no GitHub. Ele acrescenta um ponto de atenção sobre **idempotência**, ou deduplicação: se a issue já existir, ela deve ser só atualizada; se não existir, deve ser criada.

- **O que observar:** o `skill.md` ganha um passo 4, com a sequência pré-checagem, verificar se a issue já existe, montar o corpo, criar ou atualizar e confirmar no chat.
- **Um detalhe:** como ele não pediu script nenhum, os comandos (Bash, `gh`) foram parar dentro do próprio `skill.md`.

## Boa prática: um skill.md limpo e linear

Esse detalhe leva o professor a uma boa prática: manter o `skill.md` o mais limpo e linear possível. O arquivo já tinha Bash e comandos do `gh` misturados às instruções; a classificação, que também morava ali, acabou de ir para a referência. Conforme o projeto evolui, aparece a necessidade de refatorar a skill, e isso faz parte do trabalho.

## Passo 3: o primeiro erro, e a depuração

O professor recarrega a skill e a roda de novo. O relatório sai igual, mas a issue não é publicada: o projeto local ainda não tinha a origem remota apontando para o repositório. O professor chama isso de entrar no dia a dia, no processo de debugging: a skill foi elaborada, mas caiu num erro, e é preciso corrigi-lo com os recursos disponíveis.

Para a demonstração, ele passa a URL do repositório e a issue é criada, com a triagem do chat. Mas ele observa que, desta vez, a criação não aconteceu pela skill; foi só para mostrar o resultado.

## Passo 4: a correção definitiva

Para resolver de vez, ele pede uma nova verificação na skill: se a origem remota não existir, perguntar ao usuário qual é a URL do GitHub, usando a ferramenta de perguntas ao usuário (ele fala em "ask tool"), **antes** de criar a issue, para garantir que o repositório remoto exista.

- **O teste:** ele apaga a issue no navegador, copia só a skill e o projeto para um diretório novo e abre ali uma nova sessão do Claude Code.
- **O que observar:** a skill gera o relatório, faz a verificação pedida, vê que o remoto existe e que não há issue (ela foi apagada), e publica a issue no GitHub.

## O que a aula mostra

A mesma skill foi crescendo em etapas: no começo, segundo o professor, fazia muita coisa; depois ganhou o script determinístico, agora ganhou a referência e, por fim, o contato com o mundo externo. Cada etapa saiu de um pedido em linguagem natural ao próprio Claude Code, seguido de conferir o `skill.md`, rodar e corrigir o que falhou.
