# Framework de decisão - vira ou não skill — resumo

Depois de ver o que é uma skill, como criá-la e o que é o frontmatter, a aula responde a uma pergunta-chave: quando criar uma skill e quando não criar. O professor apresenta um modelo mental para usar nos projetos a partir de agora e, no fim, mostra um prompt que usa a IA para ajudar nessa triagem.

## Uma base reutilizável, uma skill por projeto

O primeiro ponto: mesmo que a skill seja uma habilidade reutilizável, é bem provável que você tenha uma base de skill que pode reaproveitar, mas que vai precisar customizá-la, gerando uma nova skill por projeto. Cada projeto tem as suas convenções, configurações, arquitetura e formas de programar, e a skill precisa ser adequada para seguir essas convenções.

## A triagem em uma frase

Se o professor pudesse resumir a triagem numa frase, seria: **"Isso é conhecimento procedural reutilizável?"** Se a resposta for sim, já há um bom ponto. Quem quiser pode acrescentar uma segunda questão: **"É estável o bastante para valer um arquivo versionado?"**

As duas partes avaliam coisas diferentes. A primeira é uma análise daquilo que se quer executar. A segunda já é uma questão de design: compensa ter mais um arquivo no projeto e versionar mais coisas só para ter aquele ganho?

## A técnica dos três SIMs

Se a frase não deixar a decisão clara, o professor sugere outra forma: responder a três perguntas. Cada "sim" é um ponto a favor da skill.

- **Reutilização:** é repetitivo? Algo que se faz em vários dias, em vários prompts iguais, em vários projetos iguais? Se sim, bom ponto.
- **Procedimento não óbvio:** existe um "como" específico, como uma ordem de execução, um padrão do time ou uma convenção, que o Claude Code (o harness) não consegue acertar sozinho? Se o modelo já faz bem sem nenhuma instrução a mais, provavelmente não precisa de skill. Se ele está pecando nisso, é mais um sim.
- **Estabilidade:** a regra dura dias, semanas, meses? Se sim, mais um ponto. Se não, é bem provável que não precise de skill.

## Segurança: o veto

Depois da frase ou dos três SIMs, vem mais uma análise, que vale para as duas formas de pensar: a **segurança**. O candidato envolve algum segredo, credencial, token, ou algo que depende de estado em tempo real? Se sim, não se faz skill. O professor é taxativo: isso descarta a ideia mesmo que os três SIMs tenham dado positivo, porque é um procedimento de segurança, e segurança é sempre bem-vinda.

## A zona cinzenta: skill ou outra alternativa?

Na triagem, há uma zona cinzenta entre as skills e as alternativas que já existem: o `CLAUDE.md`, algo determinístico como um linter ou um formatter, as tools de MCP e a busca externa por tools de web. É aí que o professor pede uma análise com carinho:

| Situação | Destino |
|---|---|
| Procedimento repetível e não óbvio | Skill, "100%" |
| Uma fonte de verdade, algo que é sempre verdade para o projeto | `CLAUDE.md` ou `AGENTS.md`, porque há garantia de que o harness sempre vai lê-los; a skill, como já visto, pode ou não ser lida |
| Regra mecânica (linters, formatters) | Provavelmente não precisa ser separada numa skill; a skill pode usar o linter, o que o professor acha bem interessante |
| Acesso a dados externos ou a dados vivos | Tools ou MCP; não é preciso criar uma skill para isso, mesmo que uma skill possa usar uma MCP tool via linha de comando |

Mesmo com essa zona cinzenta, o professor ressalta que há definições bem claras de cada coisa: o que cada uma tem, quais são as diferenças e quando usar ou não.

## A decisão: qual nível de skill

Feita a triagem, e sem bater na zona cinzenta, falta decidir. Se vira skill, em qual nível? Com o nível 1, segundo o professor, provavelmente você não vai trabalhar; a dúvida real é entre o N2 e o N3. A partir do N2, há o corpo, que é lido. A partir do N3, há também as referências, os arquivos externos, os scripts. Por isso essa análise também precisa ser feita: uma skill não é só as instruções do corpo, mas também as referências e tudo mais que a compõe.

## Um prompt de triagem como quality gate

Para ajudar na decisão, o professor mostra um pequeno prompt que funciona como revisor, uma espécie de **quality gate**. Ele diz ao modelo que ele é um revisor, tem um espaço para o **candidato** (o que se quer analisar), aplica as perguntas da estrutura de decisão vista na aula e pede uma resposta formatada com um **veredito**. Para usar, basta trocar o candidato e colar o prompt numa sessão do Claude Code.

Os exemplos da demonstração:

- **Checklist de code review do time** (segurança, nomes e convenções, a partir de um diff): o veredito é que vira skill. O modelo ainda identificou que já existe a skill Team Code Review no projeto.
- **Qual versão de uma biblioteca, como o Next.js:** não vira.
- **Usar espaços em vez de tab na indentação do projeto:** não vira, porque já existe algo que faz isso, o linter.
- **Sempre responder em português do Brasil:** não vira. Cai na zona cinzenta, já que informações que são sempre verdade devem ir para o `CLAUDE.md`, que acaba sendo o destino certo, como o professor esperava.

Com esse prompt, segundo o professor, já dá para ter uma ideia do que pode e do que não pode ser uma skill.
