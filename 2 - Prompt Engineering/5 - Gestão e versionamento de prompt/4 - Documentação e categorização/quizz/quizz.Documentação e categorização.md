# Quizz — Documentação e categorização

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 4
**Base:** material da aula

---

## 1. Uma dev nova no time acha o prompt de geração de testes no repositório, mas não sabe com qual modelo ele foi validado nem por que a versão atual responde diferente da que um colega usava mês passado. Quais itens da documentação do prompt sugerida na aula respondem a essas duas dúvidas?
- A) O objetivo do prompt e o link para a versão raw em `prompt.md` ou `.yml`.
- B) Os modelos testados e o changelog com as últimas atualizações do prompt.
- C) O nome do prompt e a categoria em que ele aparece no índice do README.
- D) As observações gerais e o link para a versão raw em `prompt.md` ou `.yml`.

## 2. O time usa um prompt genérico de testes automatizados. Nos projetos em Go, os testes saem fora das convenções da linguagem. Pela lógica da aula, qual é a melhor saída?
- A) Reescrever o prompt genérico com as regras de Go, para que ele já saia certo nos projetos dessa linguagem.
- B) Passar a revisar os testes gerados com um LLM as a judge, que aponta o que ficou fora das convenções.
- C) Criar, dentro de cada projeto em Go, um prompt de testes próprio que substitui o genérico do repositório.
- D) Usar o prompt genérico em conjunto com um prompt especializado em testes em Go, que traz as guidelines.

## 3. Qual associação entre prompt e categoria segue a sugestão da aula?
- A) Prompt que verifica vulnerabilidades e segurança do codebase → implementação.
- B) Prompt que refatora um módulo seguindo as guidelines do projeto → exploração e planejamento.
- C) Prompt que lê os arquivos alterados e gera a mensagem de commit → utilidades.
- D) Prompt que monta a esteira de CI/CD e o Terraform → implementação.

## 4. Sobre a documentação do repositório de prompts, qual afirmação está INCORRETA?
- A) Se o time já versiona tudo com PR e code review, o documento de cada prompt pode ser dispensado.
- B) O README funciona como índice categorizado e não precisa de firula para cumprir seu papel.
- C) O changelog no documento do prompt é recomendado, mas não é obrigatório, e há quem prefira o diff.
- D) A própria IA pode ser usada para manter atualizada a documentação de cada prompt do repositório.

## 5. Um time recebe devs novos todo mês. O repositório de prompts já é versionado com PR e code review, mas os recém-chegados não sabem para que serve cada prompt nem onde achar o de cada tarefa, e acabam usando o de code review de jeitos diferentes. Pela aula, o que resolve esse problema?
- A) Incluir em cada prompt um changelog, que mostra a quem chega as três últimas mudanças feitas nele.
- B) Criar o documento de cada prompt, com objetivo e observações de uso, e indexá-lo num README categorizado.
- C) Exigir PR e code review a cada uso de prompt, para padronizar a forma como cada dev o aplica.
- D) Mover os prompts mais usados para a pasta `utils`, onde ficam pré-configurados como comandos.
