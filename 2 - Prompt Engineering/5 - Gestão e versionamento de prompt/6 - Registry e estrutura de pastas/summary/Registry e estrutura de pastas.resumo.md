# Registry e estrutura de pastas

## O `registry.yml`

Na IDE, o professor mostra como organiza os prompts de aplicação. O registro é um arquivo `registry.yml`, uma sugestão que funciona bem para ele. Os prompts podem ser categorizados como o time quiser; no exemplo, há um grupo `Agents` com dois prompts, um de code review e outro de pull request. Cada entrada tem `description`, `version`, o caminho (`path`) do arquivo e o modelo usado. Os campos são definidos conforme a necessidade do projeto: dá para criar campos opcionais e um campo de metadados. YAML traz estrutura, mas também pode ser um banco de dados; o importante é ter um catálogo dos prompts.

## Pasta `prompts` separada do código

O registry fica na pasta `prompts`, que deve ser totalmente apartada do código-fonte. Assim fica claro que quem mexe nessa pasta é o responsável pelos prompts.

## Uma pasta por prompt, com versões e README

Cada prompt tem uma pasta com o mesmo ID do prompt; dentro dela ficam as versões e um README. O README diz para que o prompt serve, como usá-lo, as variáveis de entrada, onde ele é usado e o changelog. Sem essa documentação, o prompt pode não passar, e o software pode não fornecer todas as informações de que o prompt precisa.
