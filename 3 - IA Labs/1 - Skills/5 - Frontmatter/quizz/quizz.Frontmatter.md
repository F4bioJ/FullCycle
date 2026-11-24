# Quizz — Frontmatter

**Capítulo:** 1 - Skills · **Aula:** 5
**Base:** material da aula

---

## 1. Seu time quer usar a mesma skill no Claude Code e no Codex. Qual conjunto de propriedades o professor colocou no grupo de padrão aberto, que qualquer harness deve interpretar?
- A) `name`, `description`, `model` e `effort`, que definem a identidade e a execução da skill.
- B) `name`, `description`, `DisableModelInvocation` e `context`, que controlam disparo e isolamento.
- C) `name`, `description`, `allowed-tools` e `compatibility`, ao lado de `metadata` e `license`.
- D) `description`, `metadata`, `Disallowed Tools` e `model`, ao lado de `license` e `compatibility`.

## 2. Você revisa o frontmatter de uma skill que exige certa versão do Python, roda git sem pedir permissão, é distribuída sob licença MIT e deve funcionar também no Codex. Qual afirmação está INCORRETA, segundo a aula?
- A) A exigência da versão do Python cabe em `compatibility`, como pré-requisito do ambiente.
- B) O `name` pode diferir do nome da pasta, desde que a `description` mencione essa pasta.
- C) Rodar o git sem pedir permissão cabe em `allowed-tools`, que outros harnesses também leem.
- D) A licença MIT cabe em `license`, que, como `metadata`, está entre as de padrão aberto.

## 3. Com o Claude Code aberto, você roda `git init` em outro terminal, chama a skill de commits e ela ainda acusa que não há repositório. O que o professor fez numa situação assim?
- A) Recarregou as skills, para a fase de indexação reler a pasta do projeto já com o repositório.
- B) Acrescentou "git init" à description, para a skill passar a reconhecer o repositório recém-criado.
- C) Declarou o git em `compatibility`, como requisito do ambiente, e rodou a skill mais uma vez.
- D) Fechou e abriu a sessão do zero, para ter o contexto correto, e rodou a skill mais uma vez.

## 4. Uma description diz: "Gera mensagens de commit descritivas a partir das mudanças do repositório. Use ao revisar alterações antes de commitar, ou quando o usuário pedir "commit message" ou "mensagem de commit"." Pelo formato de quatro partes do professor, o que falta?
- A) Quando não usar a skill, item que o texto não menciona em lugar algum.
- B) O gatilho, porque os termos entre aspas não bastam sem uma lista separada.
- C) O que a skill produz, porque o texto descreve a ação e não o resultado.
- D) Quando usar a skill, porque "ao revisar alterações" descreve o gatilho e não o momento.

## 5. Quatro descrições foram propostas para uma skill que lê planilhas e monta relatórios. Qual segue as boas práticas da aula?
- A) "Você pode usar esta skill para processar arquivos Excel (.xlsx) e gerar relatórios de vendas. Use com "planilha"."
- B) "Ajuda com arquivos, planilhas, documentos e relatórios em geral. Use quando pedirem "ajuda" ou "arquivo"."
- C) "Processa arquivos Excel (.xlsx) e gera relatórios de vendas. Use quando pedirem "planilha" ou "relatório"."
- D) "Posso ajudar a processar arquivos Excel (.xlsx) e a gerar relatórios de vendas. Use com "relatório"."

## 6. Você tem cerca de 150 skills instaladas, e o pedido "monta o relatório desta planilha" dispara a skill errada. Pelo que a aula recomenda, qual ajuste ataca a causa?
- A) Reescrever a description com capacidades específicas e os termos-chave do pedido, em terceira pessoa.
- B) Detalhar o corpo da skill com exemplos de entrada e saída, para o modelo reconhecer melhor o pedido.
- C) Encurtar a description ao nome da funcionalidade, para o modelo comparar 150 descrições curtas.
- D) Declarar em `compatibility` o tipo de arquivo tratado, para o harness filtrar as skills pelo ambiente.

## 7. O professor invocou a skill de commits diretamente e ela funcionou. Por que ele disse que isso ainda não testava a description?
- A) Porque escolher a skill à mão pula a classificação; o teste exige um pedido em texto livre, sem chamar a skill.
- B) Porque a invocação direta carrega o frontmatter, mas deixa o corpo com os exemplos para o disparo automático.
- C) Porque a skill ainda não tinha `allowed-tools`, e sem essa propriedade a description não participa do disparo.
- D) Porque a description passa a valer depois de um reload skills feito na mesma sessão em que ela é usada.

## 8. Você cria a pasta de uma skill nova com o Claude Code já aberto, digita `/` e ela não aparece na lista. O que explica isso, pelo que foi visto até esta aula?
- A) A `description` ainda não classificou pedido algum, e a skill entra na lista depois do primeiro disparo.
- B) A indexação acontece no startup; com a sessão já aberta, é preciso recarregar as skills para ela aparecer.
- C) Falta declarar a skill em `compatibility`, que informa ao harness em quais ambientes ela pode ser listada.
- D) O `name` foi escrito em português, e o slash command espera skills com o nome em inglês.

## 9. Na skill de commits, os exemplos de entrada e saída (como "Added user authentication with JWT tokens") ficaram no corpo. Pelo que as aulas ensinaram, quando eles pesam no contexto?
- A) A cada sessão nova, porque o corpo faz parte do nível 1 e é lido já na indexação.
- B) Só quando um script da pasta de scripts é executado, porque exemplos são material do nível 3.
- C) Desde a indexação, porque o modelo precisa dos exemplos para decidir se a description casa com o pedido.
- D) Só depois que o pedido casa com a description e o corpo, o nível 2, é carregado.

## 10. Depois da demonstração, um colega diz: "se cada pedido gera um número diferente de mensagens de commit, a skill não padroniza nada". Pelo fechamento do professor, qual é a melhor resposta?
- A) Ele tem razão: a variação mostra que a geração das mensagens deveria virar um script dentro da skill.
- B) Ele tem razão: a skill padroniza quando é chamada pelo slash command, mas não pelo disparo da description.
- C) Ele erra: a habilidade é a mesma e a ação executada também; o que muda o resultado é o prompt feito.
- D) Ele erra: o modelo segue o corpo à risca e ignora o pedido, e a variação vem do estado do repositório.
