# Frontmatter e progressive discloure — resumo

## A anatomia de uma skill, na prática

O professor abre uma pequena skill de code review, a TeamCodeReview, para mostrar como uma skill é por dentro. Ela fica numa pasta: `.claude/skills/` seguida do nome da skill. Dentro dela há sempre um arquivo `skill.md`, o arquivo de instruções, que é de fato a skill. Esse arquivo tem duas partes: um bloco logo no topo, o **frontmatter**, e, abaixo dele, o **corpo**, com as instruções.

No exemplo, o nome declarado no frontmatter é o mesmo nome da pasta, e o professor diz que tem que ser assim. O corpo traz passos bem definidos e um padrão para a saída esperada. Essa skill executa comandos Bash: como visto na aula anterior, a skill não é código, mas pode executar comandos, e nada impede que sejam comandos Node, Java ou qualquer outra coisa que rode num terminal e faça sentido no contexto da skill.

A pasta da skill também tem outras pastas: uma de scripts, uma de referências (reference) e uma de evals. O professor só as apresenta aqui; o papel de scripts e referências aparece mais adiante, nos níveis do progressive disclosure.

## Frontmatter: o bloco YAML no topo

O frontmatter é um conjunto de propriedades num bloco no estilo YAML, sempre no topo da skill. Grande parte dessas propriedades é opcional, e o uso de cada uma depende do que você quer fazer. O professor as agrupa em "padrões", segundo o que cada grupo define:

- **Identidade e disparo:** `name` e `description`. São as duas propriedades extremamente importantes, porque guiam a decisão de executar ou não a skill. O professor as trata como obrigatórias.
- **Quem pode invocar:** por exemplo, `DisableModelInvocation`, que impede o CLI (no caso dele, o Claude Code) de carregar a skill sozinho. Com ela, a skill só roda quando o usuário digita o slash command dela.
- **Ferramentas,** com foco em segurança: `Allowed Tools` diz quais tools o CLI pode usar sem pedir permissão, e `Disallowed Tools` segue o mesmo padrão no sentido inverso. Assim se habilitam ou desabilitam ferramentas por padrão.
- **Execução,** ou seja, qual modelo e de que forma a skill roda: `model`; `effort`, o nível de esforço de raciocínio enquanto a skill roda; e `context`, uma espécie de fork que faz a skill rodar num subagente isolado, em que o corpo da skill vira o prompt do subagente.

## A description como classificador

Das duas propriedades obrigatórias, a que mais pede cuidado é a `description`. Ela descreve o que a skill faz, mas não é uma descrição simples: funciona como um **classificador**. Tudo o que se escreve ali é usado para decidir quando executar a skill ou não.

O professor faz uma correção na própria fala: quem toma essa decisão não é o Claude Code, que só dispara a skill, e sim o modelo, qualquer que seja o modelo em uso. Por isso `name` e `description` precisam ser escritos com carinho, e as boas práticas para isso ficam para as aulas seguintes.

## As duas formas de executar uma skill

1. **Slash command:** ao digitar `/` no Claude Code, aparecem as skills e os comandos disponíveis, e o usuário escolhe um.
2. **Contexto:** o usuário pede algo, por exemplo "quero fazer um code review", e o modelo interpreta o pedido e procura uma skill que bata com aquele contexto (no exemplo, a TeamCodeReview). Para que ela seja encontrada, a description precisa estar muito bem feita.

## Progressive disclosure: revelar em camadas

O progressive disclosure é uma estratégia que revela as informações em camadas: a cada momento, só se carrega o necessário. É por meio dos níveis que ele cria que a skill fica mais capacitada e com mais impacto no resultado.

A analogia do professor é a de escolher um livro numa livraria. Primeiro você lê a capa e vira o livro para ver o resumo: faz sentido ou não? Se fizer, abre e lê o índice e a introdução, para confirmar. Só então começa a ler, focando em detalhes de capítulos específicos, e aí tem a informação completa e detalhada. A skill funciona da mesma forma.

## Por que é o coração das skills: escala

O professor considera o progressive disclosure o coração de tudo sobre skills porque ele dá **escala**: é possível ter dezenas de skills instaladas, porque o custo permanente é só o do nível 1. Os níveis 2 e 3 só passam a pesar quando a skill é realmente usada.

Daí vêm as boas práticas: manter o corpo curto, empurrar o peso para a pasta de referências (nível 3) e colocar dados ou análises determinísticas em scripts. Isso garante **precisão de disparo**, porque a decisão de chamar a skill acontece sobre os textos curtos do nível 1. Uma boa description é o que separa um disparo correto de um incorreto.

## Os três níveis

| Nível | O que é | Quando entra |
|---|---|---|
| 1 | `name` + `description`, os metadados | Sempre carregado. A partir do contexto do prompt, decide-se se a skill deve ser chamada ou não. |
| 2 | O corpo: as instruções, o passo a passo | Só quando a tarefa casa com a description. |
| 3 | Pastas de referência e scripts | Quando o corpo, já lido, leva a decisões: carregar mais contexto pelas referências, ou executar um comando ou script pela pasta de scripts. É onde a skill ganha contexto para resolver o problema. |

## Nem toda skill usa todos os níveis

O nível 1 toda skill tem, com certeza. Algumas param no nível 2; a grande maioria, segundo o professor, chega com um peso maior ao nível 3, e com pesos diferentes, umas com muita informação nesse nível, outras com pouca.

Além do carregamento por etapas, o progressive disclosure também ajuda a **projetar** a skill: pensar em níveis, começando pelo nível 1, depois o corpo (nível 2) e, por fim, o nível 3.
