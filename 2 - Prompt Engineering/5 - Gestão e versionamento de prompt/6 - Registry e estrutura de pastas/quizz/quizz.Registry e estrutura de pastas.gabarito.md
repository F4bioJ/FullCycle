# Gabarito — Registry e estrutura de pastas

## 1. Por que a pasta `prompts` fica apartada do código
**Correta: B**
**Por quê:** O professor explica que o código-fonte não tem nada a ver, fisicamente, com as pastas dos prompts: "quem está mexendo nessa pasta é responsável por mexer com o prompt". A separação marca a responsabilidade sobre os prompts.
- **A:** A ambiguidade por guidelines diferentes é o problema da aula 2.5.3, de clonar um repositório de prompts de uso geral no projeto; aqui os prompts são da própria aplicação.
- **C:** Prompts de aplicação precisam ser versionados; a pasta `.prompts` com `.gitignore` era para prompts gerais de produtividade.
- **D:** A aula não fala de recompilação nem de carregamento; o motivo dado é a separação de responsabilidades.
**Conceito:** separação entre prompts e código-fonte

## 2. Por que a falta de README pode quebrar o prompt
**Correta: D**
**Por quê:** O README do exemplo traz o uso, as variáveis de entrada, onde o prompt é usado e o changelog. Sem essa documentação, quem integra o prompt pode não saber quais informações ele precisa, e o software pode deixar de fornecê-las; por isso o prompt pode não passar.
- **A:** O README é documentação para pessoas; a aula não diz que ele é enviado ao modelo junto com o template.
- **B:** A versão de cada prompt fica no registry (campo `version`), não no README.
- **C:** A aula não liga o changelog à execução de testes; ele serve para manter o rastro das mudanças.
**Conceito:** README do prompt e integração com o software

## 3. Afirmação INCORRETA sobre a estrutura
**Correta: C**
**Por quê:** O professor diz que os campos do registry podem ser definidos de acordo com a necessidade do projeto, com campos opcionais e um campo de metadados. Não há convenção fixa.
- **A:** Correta: o `registry.yml` é uma sugestão; ele diz que dá para usar banco de dados, desde que exista um catálogo.
- **B:** Correta: a pasta do prompt tem o mesmo ID do prompt, e dentro dela ficam as versões.
- **D:** Correta: o README do exemplo traz a finalidade, o uso, as variáveis de entrada, onde é usado e o changelog.
**Conceito:** registry e estrutura de pastas
