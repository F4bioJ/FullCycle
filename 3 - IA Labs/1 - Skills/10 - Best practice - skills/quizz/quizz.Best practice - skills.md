# Quizz — Best practice - skills

**Capítulo:** 1 - Skills · **Aula:** 10
**Base:** material da aula

---

## 1. A skill de qualidade do seu time, com a description "Ajuda em tarefas de qualidade do projeto", quase nunca é acionada. Um colega diz que description vaga causa excesso de disparo, e não falta dele, então a causa deve estar em outro lugar. O que a aula diz?
- A) O colega acerta: a description vaga amplia os disparos, e a falta deles indica um corpo longo demais, que pesa no nível 1.
- B) A falta de disparo indica que a skill não tem o "do not use", que é o trecho da description que diz ao modelo quando chamá-la.
- C) Description vaga pode tanto não disparar quanto disparar demais; a correção é deixá-la específica, com gatilhos concretos.
- D) A falta de disparo indica que faltam as `allowed-tools`, pois sem elas o modelo não tem permissão para acionar a skill.

## 2. Na sua equipe, um dev quer separar a revisão de PR em duas skills, "ler o diff" e "comentar o diff", porque skill quer dizer habilidade. Outro acha que é uma coisa só. Como o professor orienta essa decisão?
- A) Fazer antes a triagem mental do que é a responsabilidade, que pode envolver duas habilidades; a granularidade varia por projeto e por pessoa.
- B) Separar em duas, porque cada habilidade vira uma skill e, quanto mais granular, mais preciso fica o disparo feito pela description.
- C) Adotar a granularidade que o time de outro projeto já validou, para que as skills fiquem padronizadas entre os repositórios.
- D) Juntar a revisão com testes e scaffolding numa mesma skill, porque fazem parte do mesmo fluxo de trabalho do desenvolvedor.

## 3. A skill de revisão do seu time ganhou no corpo uma spec de convenções de 300 linhas. Pela boa prática do item 3, o que fazer?
- A) Manter a spec no corpo, já que o nível 2 entra quando a tarefa casa com a description e não pesa nas outras vezes.
- B) Transformar a spec num script, porque o script dá um resultado consistente e ainda tira esse peso do corpo.
- C) Resumir a spec dentro da description, para que o modelo já conheça as convenções no momento de decidir o disparo.
- D) Levar a spec para uma referência do nível 3, deixando o corpo curto e imperativo, com checklist e critérios de aceite.

## 4. Uma skill de testes deve (1) listar os arquivos que não têm `.test` nem `.spec` e (2) decidir quais casos testar em cada função. Pelo critério de script ou prosa, como dividir?
- A) As duas etapas em prosa: o modelo consegue fazer a busca sozinho, e um script se justifica quando a skill chama algo externo.
- B) A listagem num script, porque precisa ser determinística; a escolha dos casos fica nas instruções em markdown, para o modelo.
- C) As duas etapas em scripts, porque o script dá um resultado consistente e a skill deixa de depender da inferência.
- D) A escolha dos casos num script com as regras do time, e a listagem em prosa, já que a busca é uma tarefa simples.

## 5. Você vai criar uma skill nova e quer seguir o modo de trabalho que o professor descreve para os itens 3 e 4. Qual ordem ele propõe?
- A) Escrever a skill do jeito que acha que ela deve ser, testar e depois ir separando referências e scripts, enxugando o corpo.
- B) Definir antes as referências e os scripts, já que o nível 3 é onde a skill ganha contexto, e escrever o corpo por último.
- C) Escrever o corpo e já separar referências e scripts antes do primeiro teste, para que o teste rode na versão enxuta.
- D) Começar pelos scripts, porque o determinismo é a base da skill, e depois escrever a description e o corpo em volta deles.

## 6. Você achou na internet uma skill pronta de deploy, com scripts bash, e quer instalá-la no projeto. Pelo item de segurança da aula, qual é a conduta?
- A) Definir as `allowed-tools` da skill, que bloqueiam o que é malicioso e dispensam a leitura dos scripts antes da instalação.
- B) Descartar a skill, porque o veto de segurança da triagem proíbe usar skills que tragam scripts escritos por terceiros.
- C) Inspecionar a skill e os scripts antes de instalar, e usar as `allowed-tools` como uma camada a mais de segurança.
- D) Inspecionar os scripts, que são o que executa algo, sem se preocupar com o `skill.md`, que é texto em markdown.

## 7. A description de uma skill compartilhada foi editada e ela passou a disparar em pedidos errados, mas ninguém sabe quem mudou, quando nem por quê. Qual prática da aula ataca exatamente essa falta de controle?
- A) Marcar a skill com `DisableModelInvocation`, para que ela passe a rodar pelo slash command e pare de disparar sozinha.
- B) Registrar cada alteração no campo `metadata` do frontmatter, que guarda as informações adicionais sobre a skill.
- C) Versionar a skill no Git com o projeto, mas editá-la direto na branch principal, já que é texto e não código compilado.
- D) Versionar a skill no Git junto com o projeto e fazer cada mudança por PR, tratando a skill como código.

## 8. Sobre a análise que o Claude fez da skill Dev Helper, qual afirmação está INCORRETA?
- A) A falta do "do not use" leva a sobreposição com skills mais especializadas, ligada à granularidade escolhida.
- B) O problema central é um corpo extenso demais, e a correção principal seria levá-lo para referências do nível 3.
- C) O item coringa "outras coisas do dia a dia de dev" amplia os pedidos que podem acionar a skill.
- D) Pedidos como debugar um erro ou refatorar uma função poderiam disparar a skill de forma indevida.

## 9. O Dev Helper do seu time também gera scaffolding de repositórios, serviços, controladores e adapters. Como o professor encaminharia essa parte?
- A) Mantê-la no Dev Helper e levar as convenções de cada artefato para referências do nível 3, o que resolve a sobreposição.
- B) Juntá-la à skill de testes, já que os testes também estão entre os artefatos que o scaffold gera no projeto.
- C) Separá-la numa skill própria e, conforme a granularidade, desdobrá-la por artefato, já que cada um tem as suas convenções.
- D) Criar uma skill por artefato, sem exceção, porque cada habilidade deve ser uma skill, independente do projeto.

## 10. Na skill boa de geração de testes, a convenção do time ficou no corpo, e não no nível 3. Por que isso não contradiz o item 3?
- A) A convenção ainda é pequena; conforme crescer, deve ir para uma referência específica, linkada no corpo.
- B) Convenções do time precisam ficar no corpo para serem seguidas, e as referências servem para guardar dados.
- C) A skill já tem um script no nível 3, que tira o peso do corpo, então a convenção pode continuar nele.
- D) Pelo item 4, o que não é determinístico fica em prosa, e a prosa é o corpo; o que vai para o nível 3 é o script.
