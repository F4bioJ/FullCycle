# Documentação e categorização

## README como índice categorizado

Depois de separar prompts de uso geral e de projeto e de organizar tudo num repositório (com links simbólicos), o professor "ultrarrecomenda" um passo a mais: o repositório de prompts deve ter um README que funcione como índice categorizado. Não precisa de firula, mas cada prompt precisa ter documentação.

## Por que documentar

Pode parecer trabalhoso, mas esses prompts vão pautar o desenvolvimento da equipe. Isso afeta a produtividade de quem já está no time e de quem está chegando e vai usar os prompts. Eles são um ativo do projeto.

## Documento de cada prompt

Cada prompt fica numa pasta, categorizada como o time quiser, com um arquivo de documentação (por exemplo, `documento.md`) que traz:

- o nome do prompt;
- o link para o prompt "plain" (o raw, em `prompt.md` ou `.yml`), para clicar e copiar;
- o objetivo do prompt;
- os modelos testados e usados;
- observações gerais;
- um pequeno changelog com as últimas atualizações. Não é obrigatório, e há quem prefira o diff, mas permite que quem chega veja, por exemplo, as três últimas mudanças. A própria IA pode atualizar essa documentação.

## Categorias sugeridas

- **Exploração e planejamento:** o que vem antes de implementar, feito com a IA: analisar o codebase, verificar vulnerabilidades e segurança, levantar guidelines e boas práticas do projeto, planejar novas features.
- **Documentação:** prompts para criar e manter design docs, como DR, RFC e PRD.
- **Implementação:** o que faz a IA programar: workflows de desenvolvimento, testes automatizados, correção de bug, refatoração e LLM as a judge (você diz o que espera e o modelo julga o que ficou bom ou ruim no código).
- **Especializados em linguagens e frameworks:** regras, comandos e guidelines para Go, Spring, Laravel, LangGraph, LangChain etc., dizendo o que fazer e o que nunca fazer. Segundo o professor, isso muda o jogo: a assertividade pode sair de uns 50% e chegar perto de 90%.
- **Infraestrutura:** Dockerfile, Docker Compose, Kubernetes, Terraform e esteiras de CI/CD.
- **Utilidades (`utils`):** prompts pré-configurados, como comandos, para tarefas do dia a dia: commit, pull request a partir de um template, code review.

## Liberdade para adaptar

O time pode renomear e mudar as categorias, e nem todo time precisa de todas. O que importa é a linha de raciocínio, que deixa claro onde está cada coisa.

## Genérico e especializado juntos

Pedir à IA para gerar testes é uma tarefa genérica, mas ela precisa de guidelines. Um prompt genérico de testes automatizados funciona em conjunto com uma especialização (como fazer testes em Go), que traz a especificidade desejada.
