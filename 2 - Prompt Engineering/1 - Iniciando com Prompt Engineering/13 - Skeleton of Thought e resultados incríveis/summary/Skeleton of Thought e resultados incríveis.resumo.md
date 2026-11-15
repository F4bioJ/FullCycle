# Skeleton of Thought e resultados incríveis — resumo

## O que é Skeleton of Thought

Depois do Tree of Thought, a aula apresenta o Skeleton of Thought ("esqueleto de pensamento"). O professor lembra que são muitas técnicas, mas com a prática a escolha e a escrita ficam fluentes.

A técnica funciona em duas etapas: primeiro o modelo cria um **esqueleto de tópicos**, depois **expande cada tópico**. Segundo o professor, ela funciona como um template. Pelo resumo do professor, o ganho principal não é explorar alternativas, como no Tree of Thought, mas impor uma estrutura à resposta antes da redação final. Por isso ela vale mais quando a qualidade depende mais de organização do que de criatividade livre.

## Quando usar

- estruturar uma redação antes de escrevê-la;
- criar uma ADR (Architecture Decision Record);
- planejar os endpoints de uma API antes de sair codificando;
- organizar um artigo em seções e depois detalhá-las;
- montar uma checklist de requisitos antes de analisar tudo.

## Limitações

- **Esqueleto ruim leva a expansão ruim.** Cada tópico do esqueleto é expandido para formar a resposta, então uma falha na estrutura passa para o texto final. O resumo do professor chama o esqueleto de artefato de planejamento: ele define quais blocos existirão, em que ordem e com que escopo.
- **Perda de contexto entre etapas.** O modelo pode misturar uma etapa com outra, principalmente quando o nome de uma seção é ambíguo e se confunde com o de outra.
- **Mais tokens.**
- **Exige controle para o modelo não pular direto para os detalhes**, ou seja, não sair detalhando sem seguir o esqueleto que você definiu.

O resumo do professor acrescenta que a técnica não corrige falta de contexto nem substitui julgamento técnico: se o esqueleto estiver errado, a expansão só amplia o erro.

## Saída em duas fases: mostrar ou não o esqueleto

A saída vem em duas fases: primeiro o esqueleto, depois o resultado. Mas não é obrigatório imprimir o esqueleto; o prompt pode pedir só o resultado.

O motivo para imprimir está no next token. Quando o esqueleto aparece na saída, o modelo vê o que já escreveu, e esses tokens ajudam a calcular o que vem depois. Por isso a resposta tende a ser melhor. Sem o esqueleto impresso, o modelo perde esses tokens e pode não chegar à melhor resposta. Ainda assim, dá para ter resultados muito bons sem ele, e o professor admite que, na maioria das vezes, não pede o esqueleto antes.

## Os três prompts do experimento

O professor diz que adora a técnica para documentação. O resumo do professor explica por quê: documentação costuma falhar mais por desorganização do que por falta de conteúdo.

Ele mostra três prompts de complexidade crescente, todos com papel, um "passo 1" que gera só o esqueleto e um "passo 2" que o expande.

**Prompt 1, otimização de query SQL.** Papel de Senior Backend Engineer; um desenvolvedor júnior pergunta como otimizar uma query SQL. Passo 1: gerar só o esqueleto da resposta, de 3 a 5 bullet points. Passo 2: expandir cada bullet de forma clara e detalhada, com exemplos, numa resposta final simples de seguir.

**Prompt 2, ADR.** Papel de arquiteto de software, para produzir uma ADR que justifique escolher PostgreSQL em vez de MongoDB. Passo 1: gerar só o esqueleto, com os headers das seções da ADR e sem nenhuma explicação, seguindo o padrão de ADR (contexto, decisão, alternativas, consequências e referências). Passo 2: depois de mostrar o esqueleto, expandir cada seção, terminando com uma ADR profissional, estruturada e fácil de ler.

**Prompt 3, API REST em Go.** Papel de desenvolvedor sênior em Go, para ajudar a criar uma API REST de gerenciamento de produtos. Passo 1: gerar um esqueleto de 6 a 8 bullet points cobrindo modelo de dados (structs), escolha do framework HTTP, roteamento, handlers, validação, camada de banco de dados, tratamento de erros e estrutura do projeto, **e ainda não expandir**. Passo 2: expandir cada bullet com exemplos e boas práticas de Go, incluindo código de structs, handlers e rotas, pacotes como go-chi e net/http, error handling idiomático e organização em pacotes. A API deve ter o CRUD de produtos com os campos ID, nome, descrição, preço e estoque.

O professor rodou os três de uma vez no GPT-4o.

## Resultados

**Query SQL.** O esqueleto trouxe indexação, evitar `SELECT *`, otimizar joins, reestruturar queries e analisar o plano de execução. Na expansão, cada bullet ganhou explicação e exemplo, na mesma ordem do esqueleto.

**ADR.** O esqueleto listou contexto, decisão, alternativas consideradas, consequências e referências. A expansão descreveu o contexto (o time decidindo entre PostgreSQL e MongoDB numa aplicação nova), a decisão pelo PostgreSQL por ter um ecossistema mais maduro, as alternativas (MongoDB, MySQL e SQLite), as consequências positivas e negativas e as referências. O professor destaca a estrutura, concordando ou não com a decisão: o prompt deu pouco contexto, e o objetivo era mostrar o poder de ajustes no prompt.

**API em Go.** O esqueleto saiu em oito etapas: structs, framework HTTP, rotas, handlers, validação, banco de dados, tratamento de erros e estrutura do projeto. A expansão trouxe a struct do produto, o import do go-chi, as rotas do CRUD, os handlers, a validação com o go-playground, a camada de banco com PostgreSQL, o tratamento de erros e a organização das pastas.

## Combinação com as técnicas anteriores

O professor pergunta se isso lembra o jeito de pedir para a IA desenvolver software: dar contexto e instruí-la passo a passo. Sugere combinar as técnicas: explorar linhas de pensamento com Chain of Thought e Tree of Thought, depois criar com o Skeleton of Thought um esqueleto dos passos para resolver o problema, discutir e ajustar as sugestões e usar o resultado como plano de ação para a IA implementar a ideia.

## O que fica

Os prompts não são grandes. São curtos e intencionais, e mesmo assim geram resultados que, para o professor, mudam o jogo na programação.
