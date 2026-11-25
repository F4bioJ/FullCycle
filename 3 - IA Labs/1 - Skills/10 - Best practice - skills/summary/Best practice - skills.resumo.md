# Best practice - skills — resumo

Até aqui, as boas práticas apareceram em partes específicas, principalmente no frontmatter. Nesta aula o professor olha para a skill como um todo e reúne seis itens de atenção na criação; alguns repetem o que já foi visto, mas, diz ele, vale reforçar. Depois, mostra na prática uma skill mal construída e uma bem construída.

## 1. Description específica, com gatilhos concretos

A description precisa ser específica e trazer gatilhos concretos, como o "do not use" e o "must use". Se ela for vaga, a skill ou não dispara, ou dispara demais, sem necessidade.

## 2. Uma skill, uma responsabilidade

Skill quer dizer habilidade, e por isso muita gente acha que precisa tratar tudo de forma muito granular. Mas o item fala de **responsabilidade**, e há projetos em que uma responsabilidade envolve mais de uma habilidade.

A granularidade é algo particular: o que é granular num projeto pode não ser em outro, e pode ser diferente da granularidade de um colega de trabalho. Por isso, primeiro se faz uma triagem mental para entender o que de fato é uma responsabilidade, mesmo que ela envolva duas habilidades. É a partir disso que se trabalha com skills e sub-skills, assunto que o professor promete retomar.

## 3. Empurrar o peso para o nível 3

A ideia é levar o máximo possível do peso da skill para o nível 3, as referências e os scripts. Assim o corpo fica curto e imperativo, com um checklist e critérios de aceite. Convenções, specs e coisas do tipo vão para o nível 3, como referências ou scripts.

## 4. Script ou prosa

O quarto item trata de quando priorizar um script e quando priorizar a prosa, que é a instrução em markdown. A análise é esta: se algo precisa ser determinístico, é muito provável que vire um script dentro do bundle da skill, porque o script garante um resultado consistente.

Os itens 3 e 4 se juntam numa forma de trabalhar: primeiro a skill é escrita do jeito que se acha que ela deve ser e é testada; depois vai sendo levada para o nível 3, separando o que pode virar referência e vendo se precisa de scripts locais, com o corpo o menor possível.

## 5. Segurança

Ao usar uma skill alheia, seja uma baixada da internet, seja um script de terceiro usado dentro da própria skill, é muito importante inspecioná-la antes de instalar. Além disso, o professor recomenda trabalhar com o `allowed-tools`: segundo ele, mesmo que haja scripts maliciosos, com essa propriedade se diz que só aquelas ferramentas estarão permitidas na skill. É, nas palavras dele, uma camada a mais de segurança. (Nas aulas de frontmatter, a mesma propriedade foi apresentada como a lista de tools que o CLI pode usar sem pedir permissão.)

## 6. Versionamento

Assim como o código, a skill tende a ser versionada no Git, e toda mudança passa por um PR, mantendo a mesma consistência do trabalho com código. A regra de vida do professor: **trate as suas skills como código**.

## A má prática: a skill Dev Helper

O professor montou de propósito uma skill com más práticas, bem comuns no dia a dia. A description é muito vaga: ajuda com código, revisão, testes e outras coisas do dia a dia. Com ela, um pedido para revisar, implementar ou testar algo tem grande chance de disparar a skill.

O corpo nem é tão grande. O problema é que há muita coisa num lugar só: revisar código, gerar testes e gerar scaffolding. O ideal seria separar cada parte. E, dependendo da granularidade, ir além:

- **Revisão de código:** sub-skills com as convenções de cada camada, com uma skill chamando outra que verifica as convenções.
- **Testes:** skills específicas para teste unitário, de integração e end-to-end.
- **Scaffold:** repositórios, serviços, controladores, testes e adapters têm cada um as suas convenções, além das do framework.

Ou seja, a skill agrupa responsabilidades que não cabem numa skill só.

## Usando o Claude para achar os disparos indevidos

O professor pede ao Claude que vá à skill Dev Helper, verifique em quais pedidos do dia a dia ela dispararia indevidamente, diga o motivo e mostre uma tabela. O problema central apontado é a falta do "do not use", o que leva à sobreposição com skills mais especializadas, ligada à granularidade discutida antes. Pedidos como debugar um erro, refatorar uma função ou escrever uma mensagem poderiam acioná-la; dos 12 pedidos listados pelo Claude, só dois eram de fato o que ela deveria fazer. Os motivos: descrição muito abrangente, uma skill que faz um monte de coisa e não faz nenhuma muito bem, e um item coringa, "outras coisas do dia a dia de dev". Para o professor, o próprio Claude entende o que foi feito errado, e o desenvolvedor pode usá-lo para ajudar na criação.

## A boa prática: a skill de geração de testes

A skill boa, de geração de testes, tem uma description muito mais desenvolvida, `allowed-tools` e um passo a passo com a execução de um script:

1. **Achar o que está sem teste:** um script bash faz uma busca determinística pelos arquivos `.test` e `.spec`.
2. **Convenção do time:** uma convenção pequena, que por isso ainda fica no corpo. Conforme ela crescer, deve ir para uma referência específica, linkada no corpo.
3. **Gerar os testes:** com base no que o script encontrou e nas boas práticas da convenção do time, escreve o código dos testes.

O professor a invoca diretamente; ela também poderia disparar pela description, mas assim a demonstração fica mais simples. O script identifica os arquivos sem teste, e a skill escreve os testes do carrinho, do cupom e do usuário; neste, por haver banco de dados, ela usa mocks, inclusive para o caso de erro. Tudo segue a convenção definida na skill.

## O contraste

De um lado, uma skill desorganizada, que não segue nenhum dos níveis discutidos; de outro, um resultado alinhado com as expectativas. Segundo o professor, seguir esse passo a passo mental traz, com o tempo, muita facilidade para criar skills.
