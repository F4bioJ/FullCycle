# Gestão e controle de versão

## Repositório central de prompts

Um repositório de prompts para uso geral concentra, em um único lugar, os prompts compartilhados pela equipe ou mantidos para reaproveitamento pessoal. Essa organização evita que o mesmo prompt fique duplicado em vários projetos e reduz a perda de contexto sobre qual versão está melhor ou mais atual. Retomando a ideia de versionamento já estabelecida, o avanço aqui é tratar o armazenamento local como uma decisão de arquitetura de trabalho, não apenas como conveniência.

## Problema de copiar o repositório inteiro para dentro do projeto

Clonar toda a coleção de prompts para dentro de cada projeto cria ruído operacional e aumenta o risco de ambiguidade. Ferramentas com IA podem ler essas pastas e encontrar guidelines, comandos e contextos conflitantes, misturando instruções de TypeScript, Go, Python ou de outros cenários que não pertencem ao projeto atual. O efeito prático é expor o ambiente de trabalho a instruções irrelevantes que podem interferir no comportamento esperado da IA.

## Links simbólicos na pasta `.prompts`

Link simbólico é um atalho do sistema de arquivos que aponta para um arquivo ou diretório real em outro local. Em vez de copiar prompts para dentro do projeto, a estratégia é criar uma pasta `.prompts` e expor nela apenas os prompts necessários por meio desses links. Isso mantém o projeto enxuto, preserva a fonte única no repositório central e permite selecionar exatamente quais prompts ficam visíveis no contexto de trabalho.

## Isolamento físico entre projeto e repositório geral

Separar fisicamente o projeto do repositório geral de prompts reduz acoplamento e evita contaminação de contexto. O projeto continua contendo apenas o que pertence à sua execução e manutenção, enquanto o repositório geral funciona como biblioteca reutilizável. Essa distinção é importante porque nem todo prompt acessível na máquina deve estar presente no espaço que a IA usa como referência durante o desenvolvimento.

## Uso de `.gitignore` para links locais

A pasta `.prompts` criada para consumo local não deve entrar automaticamente no controle de versão do projeto quando ela apenas referencia prompts genéricos externos. Adicionar essa pasta ao `.gitignore` impede que links simbólicos locais sejam commitados por engano e evita dependências implícitas de caminhos específicos da máquina de cada desenvolvedor. O resultado é um repositório de código mais limpo e menos sujeito a inconsistências entre ambientes.

## `Agents.md` e arquivos equivalentes como forma de prompt

Prompt, nesse contexto, não é apenas um bloco de texto colado manualmente em uma interface. Arquivos como `Agents.md`, `Claude.md` e equivalentes funcionam como instruções persistentes consumidas por ferramentas e agentes, podendo definir comportamento, contexto técnico e comandos executáveis. Por isso, eles devem entrar na mesma disciplina de organização aplicada aos demais prompts, inclusive quando forem reutilizáveis entre projetos.

## Prompts genéricos versus prompts específicos de projeto

Prompts de uso geral são coringas reutilizáveis: ajudam no dia a dia, mas não pertencem semanticamente a um projeto específico. Já prompts específicos do projeto — como um `Agents.md` próprio, comandos dedicados ou workflows particulares — fazem parte do funcionamento daquele repositório e devem ser salvos dentro dele. A regra prática é simples: se o prompt descreve convenções, contexto ou automações exclusivas do projeto, ele deixa de ser biblioteca compartilhada e passa a ser artefato do próprio projeto.

## Fluxo prático de organização

O fluxo operacional fica assim: mantenha um repositório central com prompts genéricos versionados, clone esse repositório localmente e, em cada projeto, crie uma pasta `.prompts` com links simbólicos apenas para os itens relevantes. Se o projeto exigir instruções próprias, salve esses arquivos diretamente no repositório do projeto, sem depender do acervo genérico. Essa combinação conecta governança e praticidade: reaproveitamento para o que é comum, versionamento local para o que é específico.
