# Gabarito — Documentação e categorização

## 1. Campos da documentação que respondem às dúvidas da dev nova
**Correta: B**
**Por quê:** A dúvida "com qual modelo foi validado" é respondida pelo campo de modelos testados e usados; a dúvida "por que a versão atual responde diferente" é respondida pelo changelog, que, segundo o professor, permite a quem chega ver as últimas mudanças do prompt.
- **A:** O objetivo diz para que serve o prompt e o link raw dá acesso ao texto, mas nenhum dos dois informa o modelo ou o que mudou.
- **C:** Nome e categoria ajudam a encontrar o prompt, o que a dev já conseguiu; não explicam modelo nem mudanças.
- **D:** As observações gerais podem trazer contexto, mas não são o lugar indicado para o modelo testado nem para o histórico; o link raw só mostra o texto atual.
**Conceito:** campos da documentação por prompt

## 2. Testes em Go fora das convenções
**Correta: D**
**Por quê:** A aula mostra que o prompt genérico de testes funciona em conjunto com uma especialização (como fazer testes em Go), que traz a especificidade desejada. Assim o genérico continua valendo para outras stacks.
- **A:** Colocar as regras de Go dentro do genérico o tira do papel de genérico: ele deixaria de servir para os projetos em outras linguagens.
- **B:** O LLM as a judge aparece na aula como prompt de implementação para julgar o código, mas não daria ao gerador as guidelines que faltam; o problema continuaria na geração.
- **C:** A especialização em linguagem é um prompt de uso geral reaproveitável, não um substituto do genérico copiado para cada projeto.
**Conceito:** composição de prompt genérico com especialização

## 3. Associação correta entre prompt e categoria
**Correta: C**
**Por quê:** Gerar commit, pull request a partir de template e code review são os exemplos que o professor dá para utilidades: tarefas pontuais do dia a dia, pré-configuradas como comandos.
- **A:** Verificar vulnerabilidades e segurança aparece em exploração e planejamento, junto de analisar o codebase.
- **B:** Refatoração aparece em implementação, entre o que faz a IA programar; as guidelines do projeto aparecem em exploração e planejamento só quando o prompt as levanta e verifica, não quando as aplica ao código.
- **D:** Terraform e CI/CD aparecem na categoria de infraestrutura, separada de implementação.
**Conceito:** categorias do repositório de prompts

## 4. Afirmação INCORRETA sobre a documentação
**Correta: A**
**Por quê:** O professor diz que é "importantíssimo" documentar cada prompt, porque eles pautam o desenvolvimento da equipe. O versionamento com PR e code review registra mudanças, mas não traz objetivo, modelos testados e observações para quem vai usar o prompt.
- **B:** Correta: o README é um índice categorizado e o professor diz que não precisa de muita firula.
- **C:** Correta: o changelog é recomendado, mas "não é nada tão obrigatório", e há quem coloque como diff.
- **D:** Correta: o professor lembra que dá para pedir à IA que atualize a documentação.
**Conceito:** papel da documentação por prompt

## 5. Devs novos sem saber para que serve cada prompt
**Correta: B**
**Por quê:** O professor justifica a documentação justamente pelo efeito na produtividade de quem já está e de quem chega. O documento de cada prompt traz o objetivo e as observações de uso (resolve "para que serve" e o uso divergente), e o README como índice categorizado mostra onde está cada coisa (resolve "onde achar").
- **A:** O changelog ajuda a ver o que mudou no prompt, mas não explica para que ele serve nem onde encontrá-lo.
- **C:** PR e code review são para mudanças no prompt, não para cada uso; o problema não é de versionamento, que o time já tem.
- **D:** A pasta `utils` é a categoria de tarefas repetitivas como commit e PR; mover prompts para lá não documenta seu objetivo.
**Conceito:** documentação e índice para onboarding
