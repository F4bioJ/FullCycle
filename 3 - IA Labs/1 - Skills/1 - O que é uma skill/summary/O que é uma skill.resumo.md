# O que é uma skill — resumo

A aula abre o módulo explicando o que é, de fato, uma skill e apresentando o padrão Agent Skills, que guia as aulas seguintes e as skills que serão construídas ao longo do curso. Na fala do professor, "Claude" vale para o Claude ou para qualquer outro CLI (ou harness) que o aluno esteja usando.

## Skill é conhecimento, não código

A primeira ideia é que a skill não é um código: ela é um conhecimento que o CLI/harness lê sob demanda. O professor acha mais fácil entender a skill pelo que ela **não** é, porque os desenvolvedores tendem a associá-la a coisas que já conhecem:

- **Não é um código**, mas pode executar um código.
- **Não é uma função**, mas pode executar algo repetidas vezes, como uma função faz.
- **Não é um endpoint**, mas pode consumir um, por meio de ferramentas bash, inclusive coisas externas.

No fim, a skill é **uma pasta com instruções em Markdown** que o CLI consegue ler sob demanda para executar o que essas instruções dizem. O professor adianta que, a partir desse Markdown, existem níveis diferentes de construção de skill, com habilidades sendo agregadas aos poucos, tema que fica para depois.

## O padrão aberto Agent Skills

Das criações de skill nasceu um padrão aberto chamado Agent Skills. Ele não é um recurso proprietário, e sim uma **convenção de arquivos**: a instrução em Markdown fica dentro de uma pasta com uma estrutura determinada, que deve ser seguida por obrigação. Por isso a skill é **portátil**: a mesma skill pode rodar em vários lugares, porque todos leem do mesmo jeito, no mesmo formato, obedecendo à mesma convenção.

## Por que usar uma skill: cenários sem e com skill

- **Padrão do time:** sem skill, o padrão precisa ser reaplicado em todo prompt pedido à LLM. Com skill, cria-se um wrapper com a instrução do padrão, e esse arquivo é lido sozinho na hora certa.
- **Conhecimento na cabeça de uma pessoa:** o que só um desenvolvedor ou um tech lead sabe só está disponível enquanto essa pessoa está na empresa. Com skill, esse conhecimento é versionado no Git e pode até ser revisado numa PR.
- **Cada dev do seu jeito:** uma skill que padroniza tende a dar resultados consistentes entre processos, pessoas e sessões. Isso importa porque a LLM não é determinística: mesmo com o mesmo prompt, a essência da resposta pode ser parecida, mas a forma e o contexto da resposta mudam.
- **Passos determinísticos:** sem skill, o modelo improvisa em passos que deveriam ser determinísticos, como os de formatters e linters, que atestam se um arquivo segue o padrão. Com skill, o passo exato deve virar um **script**; assim a verificação fica de fato padronizada, com saída idêntica, e o resultado do script pode orientar as ações seguintes. Onde o script entra depende do nível da skill, que será visto em breve.
- **Onboarding:** sem skill, a integração de alguém novo vira perguntas a um colega, o que funciona, mas atrapalha o processo. Com skill, é possível criar várias skills que resolvem problemas específicos sob demanda e orientam quem chega, na empresa ou no projeto, "ensinando" o Claude a responder como o time deseja.

## Quando criar uma skill

- **Reutilização:** se algo se repete em vários prompts, dias ou projetos, é provável que precise virar skill. O professor promete modelos mentais para essa decisão nas próximas aulas.
- **Procedimento não óbvio:** um objetivo bem específico, como uma ordem de passos, um padrão do time ou convenções a seguir, que o Claude por padrão tende a não acertar sozinho. A skill embute esse conhecimento no CLI.
- **Estabilidade:** se a regra muda todo dia, provavelmente não precisa de skill; se já dura semanas, meses ou anos, é provável que valha padronizá-la numa skill.
- **Segurança:** credenciais, dados sensíveis e segredos não devem, de modo algum, virar skill. Se a ideia de skill envolve isso, ela é vetada na hora.

## O que vira skill e o que fica em outro lugar

Por serem novidade e estarem em evidência, há a tendência de usar skill para tudo, mesmo quando já existe outra ferramenta para o caso. O professor compara:

- **Procedimento repetitivo e não óbvio:** vira skill, que faz o wrapper dessa habilidade e a torna um modelo de uso constante.
- **Fato sempre verdadeiro do projeto** (um padrão imposto, que precisa valer sempre): vai para o `CLAUDE.md` ou o `AGENTS.md`, porque eles têm garantia de leitura sempre, durante a execução.
- **Regras mecânicas** (estilo, formatação, linters): não precisam estar descritas na skill. Podem virar um script dentro da skill, que a skill usa, ou ficar numa ferramenta tradicional, como o ESLint no ambiente Node, executada pela skill por um comando bash.
- **Acesso a sistemas ou a dado vivo:** já existem protocolos prontos, o MCP e as tools. A skill pode chamar essas tools e esses MCPs.
- **Fatos voláteis** (como versões de bibliotecas): o professor prefere buscas via tool ou na web. A skill pode usar uma tool de web search para consultar documentação e elaborar um guia técnico, uma documentação ou um plano de implementação, mas ela usa esses recursos, não os cria.
- **Ação explícita com efeito colateral** (o exemplo é o deploy): a skill é o uso principal, com o passo a passo de instruções automatizado por ela, usando no front matter a propriedade que o professor chama de "DisableModelInvocation". As partes mecânicas do deploy podem ficar em outras ferramentas.

## Próximos passos

O professor anuncia dois aspectos técnicos, o front matter e o progressive disclosure, que considera essenciais para desenvolver uma skill boa. Antes deles, a próxima aula mostra uma skill pequena, o "Hello World" das skills, para ligar o que foi dito à prática.
