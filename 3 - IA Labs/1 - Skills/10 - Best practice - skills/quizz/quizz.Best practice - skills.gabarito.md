# Gabarito — Best practice - skills

## 1. Description vaga e skill que não dispara
**Correta: C**
**Por quê:** no item 1, o professor diz que, se a description for vaga, a skill "ou não dispara ou dispara demais". A falta de disparo é, portanto, um sintoma possível da mesma causa. A correção é a do próprio item: uma description específica, com gatilhos concretos, como o "must use" e o "do not use".
- **A:** o corpo é o nível 2; o que está sempre carregado e decide o disparo é o nível 1 (name e description). E o colega erra ao achar que vagueza só causa excesso.
- **B:** inverte o papel do "do not use": ele diz quando a skill não deve ser usada e serve para conter disparos indevidos, como no Dev Helper; não é o trecho que faz a skill ser chamada.
- **D:** pelas aulas de frontmatter, `allowed-tools` trata das ferramentas que a skill pode usar; quem decide acionar a skill é o modelo, a partir da description.
**Conceito:** description vaga: falta ou excesso de disparo

## 2. Uma ou duas skills para a revisão de PR
**Correta: A**
**Por quê:** o item 2 fala de responsabilidade, não de habilidade. O professor avisa que, por skill significar habilidade, muita gente acha que precisa ser muito granular, mas uma responsabilidade pode envolver mais de uma habilidade. A granularidade é particular (muda de projeto para projeto e de pessoa para pessoa), por isso primeiro se faz a triagem mental do que de fato é uma responsabilidade.
- **B:** é a leitura que o professor desaconselha: tomar "skill = habilidade" ao pé da letra e granular ao máximo. A aula não diz que separar por habilidade melhora o disparo.
- **C:** o professor diz o contrário: a granularidade de um projeto pode não servir para outro, nem para o colega; não há um padrão a copiar.
- **D:** é exatamente o erro do Dev Helper, que junta revisão, testes e scaffolding e, segundo a análise, faz um monte de coisa e não faz nenhuma muito bem.
**Conceito:** uma skill = uma responsabilidade; granularidade

## 3. Spec de 300 linhas no corpo
**Correta: D**
**Por quê:** o item 3 manda empurrar o máximo do peso da skill para o nível 3 (referências e scripts), para que o corpo fique curto e imperativo, com checklist e critérios de aceite. O professor cita convenções e specs como exemplos do que vai para o nível 3.
- **A:** a premissa é verdadeira (o nível 2 só entra quando a tarefa casa com a description), mas a conclusão contraria a boa prática: o professor quer o corpo o menor possível, com o peso no nível 3.
- **B:** o script é para o que precisa ser determinístico (item 4); uma spec de convenções é material de consulta, que vai como referência.
- **C:** a description é o nível 1, sempre carregado; encher o nível 1 com a spec vai contra o progressive disclosure, que mantém curto o que é carregado para decidir o disparo.
**Conceito:** peso no nível 3, corpo curto e imperativo

## 4. Script ou prosa nas duas etapas
**Correta: B**
**Por quê:** pelo item 4, o que precisa ser determinístico vira script no bundle da skill, porque o script garante um resultado consistente. Listar os arquivos sem `.test` e `.spec` é a busca determinística que a skill boa da aula faz com um script bash; decidir os casos de teste é a parte que fica com o modelo, guiada pelas instruções e pela convenção do time.
- **A:** o modelo até consegue buscar sozinho, mas, como visto na aula da skill N3, a busca dele depende da inferência e pode cobrir só parte do projeto. A aula não condiciona o script a chamadas externas.
- **C:** a consistência do script vale para o que é determinístico; escolher casos de teste a partir do código é trabalho de interpretação, e na skill da aula é o modelo que escreve os testes.
- **D:** inverte o critério: a busca é justamente a parte determinística, e a escolha dos casos é a que depende do raciocínio do modelo.
**Conceito:** script para o determinístico, prosa para o resto

## 5. Ordem de trabalho na criação da skill
**Correta: A**
**Por quê:** ao juntar os itens 3 e 4, o professor descreve a ordem: primeiro ele faz a skill do jeito que acha que deve ser e a testa; depois vai levando-a para o nível 3, separando o que pode virar referência, verificando se há necessidade de scripts locais e tentando deixar o corpo o menor possível.
- **B:** é a ordem inversa: as referências e os scripts aparecem depois do primeiro teste, quando se vê o que pode ser separado.
- **C:** o corpo enxuto é o objetivo, mas na ordem do professor a separação vem depois do primeiro teste: primeiro a skill é testada como ele acha que deve ser, e só então se vê o que pode virar referência ou script.
- **D:** o script entra quando algo precisa ser determinístico, verificado depois do primeiro teste; o professor não o coloca como ponto de partida.
**Conceito:** escrever, testar e depois levar ao nível 3

## 6. Skill da internet com scripts bash
**Correta: C**
**Por quê:** no item 5, o professor diz que, ao usar skills alheias (baixadas da internet) ou scripts de terceiros, é muito importante inspecioná-los antes da instalação. Além disso, recomenda as `allowed-tools`, que ele chama de uma camada a mais de segurança.
- **A:** o professor apresenta as `allowed-tools` como uma camada **a mais**, somada à inspeção, e não como substituta dela.
- **B:** o veto de segurança da aula do framework de decisão é sobre segredos, credenciais, tokens ou estado em tempo real no candidato a skill; ele não proíbe skills de terceiros, que a aula manda inspecionar.
- **D:** a skill não é código, mas pode executar comandos, como visto na aula de frontmatter e progressive disclosure; e o professor fala em inspecionar a skill alheia como um todo, não só os scripts.
**Conceito:** segurança: inspecionar antes de instalar

## 7. Mudança na description sem rastro
**Correta: D**
**Por quê:** o item 6 é o versionamento: assim como o código, a skill é versionada no Git, e toda mudança passa por um PR. Com isso se sabe quem mudou, quando e por quê, e a mudança é revisada antes de entrar. A regra do professor é tratar as skills como código.
- **A:** `DisableModelInvocation` faz a skill rodar só pelo slash command, o que esconde o sintoma, mas não diz quem mudou, quando nem por quê, e tira da skill o disparo por contexto.
- **B:** o `metadata` guarda informações adicionais sobre a skill; não é um histórico de mudanças nem passa por revisão, como o PR.
- **C:** é meia prática: o Git guarda o histórico, mas o professor diz que toda mudança passa por um PR, como no código. Editar direto na branch principal pula a revisão que teria barrado a description ruim.
**Conceito:** versionar a skill como código (Git e PR)

## 8. A análise do Dev Helper (INCORRETA)
**Correta: B**
**Por quê:** é a afirmação falsa. O professor diz que o corpo do Dev Helper "nem é tão grande assim"; o problema é ter muita coisa num lugar só (revisão, testes e scaffolding), e o problema central apontado pela análise do Claude é a falta do "do not use". Levar o corpo para referências não resolveria o disparo nem a mistura de responsabilidades.
- **A:** verdadeira: é o problema central da análise, ligado pelo professor à granularidade que se quer trabalhar.
- **C:** verdadeira: o item coringa é um dos motivos listados, junto com a descrição abrangente e a skill que faz um monte de coisa e não faz nenhuma muito bem.
- **D:** verdadeira: debugar um erro e refatorar uma função estão entre os pedidos que, segundo a análise, poderiam acioná-la.
**Conceito:** diagnóstico de uma skill mal construída

## 9. O scaffolding dentro do Dev Helper
**Correta: C**
**Por quê:** o professor diz que o ideal é separar o scaffolding da revisão e dos testes. E, dependendo da granularidade com que se quer trabalhar, ir além: repositórios, serviços, controladores, testes e adapters têm cada um as suas próprias convenções, além das convenções do framework.
- **A:** levar as convenções para o nível 3 enxuga o corpo, mas não separa as responsabilidades nem muda a description vaga, que é o que causa a sobreposição.
- **B:** os testes aparecem mesmo na lista do scaffold, mas o professor separa scaffolding, testes e revisão em partes diferentes, cada uma com as suas convenções; juntar duas delas repete a mistura do Dev Helper.
- **D:** o professor deixa o desdobramento a depender da granularidade do projeto e da forma como se quer abordar; transformar cada habilidade numa skill é a leitura granular demais que ele desaconselha no item 2.
**Conceito:** separar responsabilidades; granularidade por projeto

## 10. A convenção do time no corpo da skill boa
**Correta: A**
**Por quê:** o professor explica que a convenção do time ainda tem itens bem pequenos e por isso está no corpo. Conforme ela crescer, com novos itens e dados, surge a necessidade de levá-la para uma referência específica e linká-la no corpo. O item 3 é uma direção para o peso da skill, aplicada quando há peso a mover.
- **B:** convenções e specs são justamente o que o item 3 manda levar para as referências; elas não servem só para dados.
- **C:** o item 3 manda levar ao nível 3 referências **e** scripts; ter um script não libera o corpo para guardar convenções e specs, que o professor cita como material de referência.
- **D:** confunde prosa com corpo: prosa é a instrução em markdown, e as referências do nível 3 também são texto. O item 4 decide entre script e prosa, e o item 3 decide onde a prosa pesada fica, que é a referência.
**Conceito:** quando mover conteúdo do corpo para referência
