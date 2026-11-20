# Quizz — Registry e estrutura de pastas

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 6
**Base:** material da aula

---

## 1. Na demonstração, a pasta `prompts` fica totalmente apartada do código-fonte da aplicação. Qual é o motivo que o professor dá para essa separação?
- A) Evitar que a IA de código leia os prompts e fique sujeita à ambiguidade entre guidelines diferentes.
- B) Deixar claro que quem mexe nessa pasta responde pelos prompts, à parte de quem mexe no código.
- C) Manter os prompts fora do controle de versão do projeto, como a pasta `.prompts` da aula 2.5.3.
- D) Permitir que o registry carregue os prompts sem precisar recompilar o código-fonte da aplicação.

## 2. O professor diz que, sem a documentação no README de cada prompt, o prompt pode não passar e o software pode não trazer as informações de que ele precisa. Qual é a ligação entre as duas coisas?
- A) O README é lido pelo modelo junto com o template, e sem ele o modelo perde o contexto da tarefa.
- B) O registry consulta o README para descobrir a versão em produção, e sem ele carrega a versão errada.
- C) O changelog do README é o que dispara os testes, e sem ele uma versão nova vai ao ar sem verificação.
- D) O README traz as variáveis de entrada e onde ele é usado, e sem isso o código pode não fornecê-las.

## 3. Sobre a estrutura demonstrada na aula, qual afirmação está INCORRETA?
- A) O `registry.yml` é uma sugestão; um banco de dados também serve, desde que exista um catálogo dos prompts.
- B) Cada prompt tem uma pasta com o mesmo ID usado no registry, e as versões ficam dentro dessa pasta.
- C) Os campos de cada entrada do registry seguem uma convenção fixa, sem espaço para campos extras.
- D) O README do prompt registra para que ele serve, as variáveis de entrada, onde é usado e o changelog.
