# Gabarito — Gestão e controle de versão

## 1. Repositório de prompts clonado inteiro dentro do projeto
**Correta: C**
**Por quê:** O professor alerta que, em algum momento, a IA vai ler a pasta clonada. Ao encontrar guidelines e contextos totalmente diferentes (TypeScript, Go, Python), ela fica sujeita a um grande nível de ambiguidade, que é o sintoma do cenário.
- **A:** A aula não fala de clone desatualizado; o problema dela é a mistura de contextos dentro do projeto, que aconteceria mesmo com tudo atualizado.
- **B:** Pull request e code review são o fluxo de mudança dos prompts de equipe, mas não explicam a mistura de convenções; o problema aparece mesmo com prompts revisados.
- **D:** A janela de contexto e o truncamento são conceitos de aulas anteriores, mas a aula não atribui o problema a isso: a causa apontada é a ambiguidade entre guidelines diferentes.
**Conceito:** ambiguidade ao clonar o repositório de prompts no projeto

## 2. Onde guardar o `AGENTS.md` e os workflows próprios do projeto
**Correta: A**
**Por quê:** O professor separa prompts de uso geral ("coringas") de prompts específicos do projeto. Um `AGENTS.md`, comandos ou workflows próprios daquele projeto fazem parte dele e, por isso, são salvos dentro do projeto.
- **B:** O repositório geral com links simbólicos é a solução para prompts de uso geral, não para os que só fazem sentido naquele projeto.
- **C:** A pasta `.prompts` com `.gitignore` serve para expor prompts gerais sem versioná-los no projeto; aqui a ideia é o contrário, versionar junto com o projeto.
- **D:** Guardar no repositório geral e copiar quando precisar trata como coringa um prompt que pertence ao projeto.
**Conceito:** prompts de uso geral versus específicos do projeto

## 3. Por que links simbólicos em vez de cópias
**Correta: D**
**Por quê:** Com links, os prompts continuam num único repositório, sem cópias espalhadas pela máquina (o professor já se perdeu sem saber qual `CLAUDE.md` era o melhor), e cada projeto traz só os arquivos que fazem sentido naquele momento.
- **A:** A aula não diz que o link muda a prioridade das instruções para o agente; o link só aponta para o arquivo do repositório central.
- **B:** O `.gitignore` é colocado pelo próprio dev na pasta `.prompts` justamente para que os links não entrem no Git; ele não bloqueia cópias nem deixa links visíveis.
- **C:** A aula não liga os links a pull requests; mudanças nos prompts gerais seguem o fluxo do repositório central.
**Conceito:** links simbólicos e fonte única de prompts

## 4. Afirmação INCORRETA sobre o que conta como prompt
**Correta: B**
**Por quê:** O professor mostra que `AGENTS.md` e `CLAUDE.md` podem ser tanto de uso geral (por exemplo, um `CLAUDE.md` com instruções sobre uma tecnologia, reaproveitado por links) quanto específicos do projeto. Dizer que eles sempre pertencem ao projeto e ficam fora do repositório geral está errado.
- **A:** Correta: o professor diz que o `AGENTS.md` está virando padrão e é procurado por Codex, Gemini e Claude.
- **C:** Correta: ele cita os comandos do Claude como prompts, que são o que de fato será executado.
- **D:** Correta: um `CLAUDE.md` sobre a tecnologia usada é exemplo de prompt que pode estar no repositório de uso geral.
**Conceito:** arquivos de agente como prompts

## 5. Prompts pessoais num repositório próprio
**Correta: A**
**Por quê:** O professor recomenda manter o controle de versão também para prompts pessoais. O que não faz sentido é abrir pull request e code review sobre o próprio prompt num repositório em que só você mexe.
- **B:** O controle de versão vale para prompts pessoais e de equipe; espalhar prompts pelos projetos é o que a aula pede para evitar.
- **C:** Inverte a recomendação: o que se dispensa é o PR e o code review, e o repositório único continua sendo o centro.
- **D:** A ambiguidade vem de a IA ler guidelines de contextos diferentes dentro do projeto, o que acontece mesmo com um só autor.
**Conceito:** controle de versão de prompts pessoais
