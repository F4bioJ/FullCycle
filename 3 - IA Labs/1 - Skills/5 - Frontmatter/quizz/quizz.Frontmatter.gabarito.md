# Gabarito — Frontmatter

## 1. Propriedades de padrão aberto
**Correta: C**
**Por quê:** O professor lista como padrão aberto, que outros harnesses (Codex, Open Code) devem interpretar: `name`, `description`, `allowed-tools`, `metadata`, `license` e `compatibility`. As demais propriedades do frontmatter ficam no grupo das específicas do Claude Code, e a aula foca nas de padrão aberto.
- **A:** `model` e `effort` foram vistas na aula 2 como propriedades de execução, mas não estão na lista de padrão aberto desta aula.
- **B:** `DisableModelInvocation` e `context` também vieram da aula 2 e não aparecem entre as de padrão aberto.
- **D:** `metadata`, `license` e `compatibility` são de padrão aberto, mas `Disallowed Tools` e `model` não estão na lista do professor.
**Conceito:** padrão aberto vs. propriedades do Claude Code

## 2. Atribuições do frontmatter (qual está INCORRETA)
**Correta: B**
**Por quê:** O professor diz que o `name` tem que ser o nome da skill e seguir o padrão de ter o mesmo nome da pasta; a aula não abre exceção para a description citar a pasta. As outras três atribuições seguem a aula.
- **A:** Correta segundo a aula: `compatibility` é requisito do ambiente, para sinalizar dependência de um runtime ou de uma versão específica de biblioteca.
- **C:** Correta segundo a aula: `allowed-tools` permite usar tools sem pedir permissão e está no grupo de padrão aberto, lido por outros harnesses como o Codex.
- **D:** Correta segundo a aula: `license` define o tipo de licença e, com `metadata`, está entre as propriedades de padrão aberto.
**Conceito:** name igual à pasta e propriedades de padrão aberto

## 3. Repositório criado com o Claude Code aberto
**Correta: D**
**Por quê:** Na demonstração, depois do `git init` num novo Bash, a skill ainda acusava que não havia repositório inicializado. O professor fechou e abriu o Claude Code de novo, "só para a gente ter o contexto correto", e aí a skill analisou as mudanças.
- **A:** Recarregar as skills serve para reindexar uma skill criada com a sessão aberta; não foi o que o professor fez para o repositório.
- **B:** A description é o classificador de disparo; mudar o texto dela não faz a sessão enxergar um repositório novo.
- **C:** `compatibility` sinaliza pré-requisitos de ambiente para quem usa a skill; não muda o que a sessão aberta enxerga.
**Conceito:** reabrir a sessão para ter o contexto correto

## 4. Formato de quatro partes da description
**Correta: A**
**Por quê:** O formato tem quatro itens: quando usar, o gatilho (termos em geral entre aspas), quando não usar e o que a skill produz. O texto tem o que produz ("Gera mensagens de commit descritivas"), quando usar ("ao revisar alterações antes de commitar") e os gatilhos entre aspas. Falta dizer quando não usar.
- **B:** Os gatilhos estão lá, entre aspas, como o professor recomenda; a aula não pede uma lista separada.
- **C:** "Gera mensagens de commit descritivas" já diz o que a skill produz.
- **D:** "Use ao revisar alterações antes de commitar" é o momento de uso; os gatilhos são os termos entre aspas.
**Conceito:** formato de quatro partes da description

## 5. Qual description segue as boas práticas
**Correta: C**
**Por quê:** É a única em terceira pessoa ("Processa... e gera"), específica (Excel, .xlsx, relatório de vendas) e com termos-chave de gatilho, as três boas práticas da aula.
- **A:** Tem termo entre aspas e é específica, mas está em segunda pessoa ("Você pode usar"), forma que o professor diz evitar.
- **B:** Está em terceira pessoa, mas é vaga ("em geral") e os termos entre aspas ("ajuda", "arquivo") não apontam capacidade específica alguma.
- **D:** Tem termo entre aspas e é específica, mas está em primeira pessoa ("Posso ajudar"), outro exemplo que o professor diz evitar.
**Conceito:** boas práticas da description (terceira pessoa, específica, sem vagueza)

## 6. Skill errada disparando entre muitas skills
**Correta: A**
**Por quê:** A description é o classificador. O professor justifica as boas práticas assim: quanto mais específica, com termos-chave e em terceira pessoa, maior a garantia de que o harness, num conjunto de 100 ou 200 skills, dispare a que faz sentido naquele momento.
- **B:** O corpo é o nível 2 e só é lido depois que a skill foi escolhida; a decisão de disparo acontece sobre o nível 1.
- **C:** Encurtar ao nome deixa a description vaga, o que o professor manda evitar; o que se pede é ser específico e incluir termos-chave.
- **D:** `compatibility` sinaliza requisitos do ambiente (runtime, versão de biblioteca); a aula não a usa para escolher entre skills.
**Conceito:** description específica como classificador entre muitas skills

## 7. Por que invocar a skill diretamente não testa a description
**Correta: A**
**Por quê:** Ao invocar a skill diretamente, o professor escolheu a skill; a description não precisou classificar nada. Para testar, ele abriu uma nova sessão e pediu em texto livre algo como "create commit message for changes", e a skill foi carregada pelo processo de classificação da description.
- **B:** Invocada diretamente, a skill executou por completo: carregou, analisou as mudanças e gerou mensagens; o corpo foi usado.
- **C:** A description é o classificador independentemente de `allowed-tools`, que só trata de usar tools sem pedir permissão.
- **D:** O reload skills serve para reindexar skills criadas com a sessão aberta; o teste do professor foi feito numa sessão nova.
**Conceito:** testar o disparo pela description

## 8. Skill nova não aparece no `/`
**Correta: B**
**Por quê:** A indexação é feita no startup (fase 0, aula 3). Se a skill foi criada com o Claude Code já aberto, é preciso recarregar as skills, como o professor faz nesta aula e na anterior, para ela aparecer.
- **A:** A lista do `/` vem da indexação, não de disparos anteriores; a skill pode ser chamada pelo slash antes de qualquer classificação.
- **C:** `compatibility` sinaliza requisitos do ambiente, como runtime ou versão de biblioteca; não controla a listagem.
- **D:** Na aula 4 o professor diz que se pode escrever em português sem problema; o idioma não impede a listagem.
**Conceito:** reload skills e indexação

## 9. Quando os exemplos do corpo pesam no contexto
**Correta: D**
**Por quê:** O corpo é o nível 2 do progressive disclosure: só é carregado quando o pedido casa com a description. Por isso os exemplos de entrada e saída da skill de commits só pesam no contexto depois do disparo.
- **A:** O nível 1 é só `name` e `description`; o corpo não é lido na indexação.
- **B:** O nível 3 são referências e scripts; os exemplos estão no corpo, que é o nível 2.
- **C:** A decisão de disparo acontece sobre o nível 1, antes de o corpo ser lido.
**Conceito:** corpo como nível 2

## 10. Uma habilidade, N resultados
**Correta: C**
**Por quê:** O fechamento do professor: a habilidade de gerar mensagens de commit é replicada de forma que, a partir do prompt feito, saem N resultados (mensagens agrupadas ou seis separadas), mas a ação executada continua sendo exatamente a mesma.
- **A:** O fato de a LLM não ser determinística foi discutido na aula 1, mas aqui o professor não propõe virar script; ele destaca que a ação se manteve.
- **B:** O segundo resultado, com as seis mensagens, veio de um pedido em texto livre, e a skill manteve a mesma ação; a aula não diz que o disparo pela description perde a padronização.
- **D:** O resultado mudou porque o prompt pediu para separar cada alteração; o modelo seguiu o pedido, não o ignorou.
**Conceito:** mesma habilidade, resultados diferentes conforme o prompt
