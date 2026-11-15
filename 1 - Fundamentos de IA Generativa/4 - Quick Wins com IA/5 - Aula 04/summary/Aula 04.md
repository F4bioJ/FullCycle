# Aula 04

## Linguagem natural como interface operacional

Português e inglês passaram a funcionar como uma camada prática de programação porque grande parte da interação com agentes acontece por instruções textuais, arquivos Markdown e convenções escritas. Isso desloca parte do trabalho para artefatos como rules, memórias e guidelines, que orientam o comportamento da IA antes e durante a execução. O nome desses artefatos varia por ferramenta, mas a função é parecida: dar direção inicial. Retomando o que já foi visto sobre rules e memórias, o ponto novo é que eles não resolvem o problema sozinhos; servem apenas como base.

## Complexidade cresce com o tempo e contexto ajuda a contê-la

À medida que o software cresce, cresce também a complexidade operacional para alterar, testar e evoluir o sistema. Testes, documentação e redução de acoplamento continuam sendo mecanismos centrais para conter esse crescimento, mas a IA só ajuda de verdade quando recebe contexto suficiente para atuar sobre esses três pontos. Sem isso, ela produz testes superficiais, documentação incompleta e mudanças que pioram o desenho do sistema. O ganho real não vem de “usar IA”, mas de usá-la com contexto estruturado.

## Testes gerados por IA podem criar falsa segurança

Pedir “crie testes para essa classe” não garante cobertura dos edge cases que realmente importam para o comportamento do sistema. A IA tende a gerar casos triviais, como validações rasas ou testes de getter e setter, que aumentam volume sem aumentar confiança. Isso é mais perigoso do que não ter testes, porque cria a impressão de proteção onde ela não existe. A consequência prática é que geração de testes precisa ser guiada por contexto de negócio, riscos e comportamento esperado.

## Documento de contexto geral

Documento de contexto é o artefato que explica o que o projeto é, por que existe e como ele está organizado do ponto de vista técnico e de produto. Em projetos grandes, ele não precisa ser único: um contexto principal pode apontar para contextos específicos por módulo, preservando visão global e detalhe local. Esse documento reduz inferência errada porque a IA deixa de olhar apenas para código isolado e passa a entender intenção. Quanto melhor ela entende o propósito, menor a chance de propor soluções tecnicamente plausíveis, mas inadequadas ao sistema.

## Cada novo chat é um novo funcionário sem contexto

Abrir um novo chat equivale a colocar um novo integrante na equipe diante do repositório sem onboarding prévio. Mesmo que o agente seja competente, ele não sabe produto, histórico de decisões, bibliotecas adotadas, estratégia de testes, convenções de commit ou restrições arquiteturais. Retomando o workflow com IA já estabelecido, a implicação nova é direta: evitar novo chat por medo de reexplicar tudo é um sintoma de documentação insuficiente. Se reiniciar a conversa dói, faltou externalizar contexto.

## Stack, bibliotecas, testes e guidelines precisam estar explícitos

A IA precisa saber com qual stack está trabalhando, quais bibliotecas estão autorizadas, como o projeto sobe e quais convenções de implementação devem ser seguidas. Isso inclui estilo de comentários, indentação, uso de TypeScript, ferramenta de testes e outras regras operacionais do time ou do desenvolvedor. O `README` cobre a entrada no projeto; guidelines cobrem como trabalhar dentro dele. Sem essa camada, o agente preenche lacunas com suposições aprendidas em outros projetos.

## Documentar o porquê de cada biblioteca evita uso indevido

Listar uma biblioteca na stack não basta; é preciso registrar onde ela é usada e por qual motivo foi escolhida. Se o projeto usa Redis apenas para cachear catálogo de produtos, a IA precisa saber dessa restrição para não espalhar cache em checkout ou em outras features. O problema não é a biblioteca em si, mas a generalização indevida a partir de um indício técnico. Documentar intenção de uso transforma uma dependência genérica em uma decisão contextualizada.

## Documentação prévia de libs reduz erro de versão e consulta ruim à web

Bibliotecas de terceiros costumam ter documentação pública, e a IA frequentemente já viu exemplos delas no treinamento. Ainda assim, ela pode conhecer versões antigas, padrões obsoletos ou soluções incompatíveis com o projeto atual. Quando falha, tende a consultar a web, cair em documentação desatualizada, respostas antigas do Stack Overflow, trocar de biblioteca ou até inventar implementação. Gerar documentação prévia da versão realmente usada reduz esse desvio e aumenta a taxa de acerto.

## Tarefa e plano de ação completam o contexto

Contexto não substitui instrução de execução. Depois de explicar produto, arquitetura, stack e restrições, ainda é necessário dizer o que deve ser feito e, em muitos casos, fornecer um plano de ação para orientar a sequência de trabalho. Isso aproxima a interação com IA do onboarding de um desenvolvedor real: primeiro a pessoa entende o ambiente, depois recebe a tarefa. Sem essa última camada, o agente conhece o terreno, mas não sabe qual caminho seguir.

## Documentação é ativo, não custo descartável

Produzir contexto, guidelines e documentação de suporte dá trabalho, mas esse esforço se acumula como ativo do projeto. Assim como um teste continua gerando valor anos depois de ter sido escrito, um bom conjunto de documentos reduz retrabalho em cada nova interação com IA e em cada entrada de novo desenvolvedor. O benefício aparece na paz de espírito de poder abrir um novo chat sem medo de perder alinhamento. Reexplicação recorrente é custo operacional; documentação converte esse custo em infraestrutura reutilizável.

## State do projeto

`State` é um registro do estado atual do software e do trabalho em andamento. Ele não serve apenas para dizer em qual tarefa alguém parou, mas para capturar o que o sistema já faz, quais bugs estão abertos, quais limitações apareceram e o que ainda falta concluir. Esse artefato ajuda tanto o desenvolvedor quanto a IA a retomarem o trabalho sem depender da memória da conversa anterior. Em termos práticos, ele funciona como um snapshot narrativo do momento atual do projeto.

## `state.local.md` e regras locais por desenvolvedor

Em times que trabalham com Git, o estado de trabalho de cada pessoa é diferente porque cada branch, tarefa e fluxo individual evoluem em ritmos distintos. Por isso, informações que servem apenas ao desenvolvedor — como anotações de retomada, preferências pessoais de workflow ou rules particulares — devem ficar em arquivos locais, como `state.local.md`, ignorados pelo `.gitignore`. Isso evita poluir o repositório compartilhado com contexto privado ou temporário. A mesma lógica vale para rules locais: se a regra só ajuda um desenvolvedor específico, ela não deve virar convenção global do projeto.
