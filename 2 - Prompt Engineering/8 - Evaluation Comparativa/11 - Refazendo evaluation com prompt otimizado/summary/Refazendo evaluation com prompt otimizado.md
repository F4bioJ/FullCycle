# Refazendo evaluation com prompt otimizado

## Evolução controlada do prompt

Otimizar prompt com evidência exige tratar a mudança como uma nova versão do mesmo artefato, não como um experimento informal. Aqui, o prompt A evolui de `Security Expert V1` para `Security Expert V2`, ampliando o escopo de análise: em vez de olhar apenas segurança, a nova versão também considera performance. Essa mudança altera a política de inspeção do modelo e, por isso, pode deslocar o placar pairwise mesmo sem mudar mais nada no pipeline.

## Versionamento e commits como trilha experimental

Commits do prompt funcionam como trilha de auditoria do experimento. Eles permitem comparar a versão anterior com a atual e responder exatamente o que mudou entre uma execução e outra. Quando o prompt é alterado no LangSmith, a comparação deixa de ser “prompt antigo versus prompt novo criado manualmente” e passa a ser “versão anterior versus versão atual do mesmo artefato”, o que melhora rastreabilidade e reduz ambiguidade.

## Comparação controlada

Uma comparação entre versões só é tecnicamente válida quando o restante do experimento permanece constante. Retomando o cenário pairwise já conhecido, o script continua o mesmo, o dataset continua o mesmo e o juiz continua o mesmo; a única variável alterada é o prompt. Esse isolamento é o que permite atribuir a mudança no resultado à nova instrução, e não a diferenças de implementação, dados ou critério de julgamento.

## Dataset constante e juiz constante

Manter o dataset constante garante que as duas versões enfrentem exatamente os mesmos casos. Manter o juiz constante preserva a mesma régua de decisão entre as execuções, evitando que uma mudança no avaliador contamine a leitura do placar. Sem esses dois controles, a comparação entre versões perde valor experimental, porque o resultado passa a misturar múltiplas causas.

## Reexecução sem alterar o resto do experimento

Quando apenas o prompt muda, a validação correta é rerodar exatamente o mesmo script. Isso preserva o pipeline operacional e transforma a execução em um teste de hipótese simples: “a nova versão do prompt vence mais do que a anterior?”. A referência breve ao pairwise basta aqui: as duas saídas continuam sendo comparadas caso a caso sob a mesma estrutura já estabelecida.

## Leitura do novo placar

O placar muda de um cenário equilibrado, `5,5 vs 4,5`, para uma vantagem mais clara, `8 vs 2`. Essa diferença sugere que a nova versão do prompt A passou a produzir respostas que o juiz prefere com mais frequência sob o mesmo critério. O ponto central não é apenas “ganhou”, mas “ganhou mais depois da alteração controlada”, o que transforma refinamento de prompt em evidência mensurável.

## Interpretação da melhoria

Uma vitória maior não prova que o prompt ficou universalmente melhor em qualquer contexto; ela prova que, sob aquele dataset, aquele juiz e aquele critério, a nova versão teve desempenho superior. Essa leitura é mais robusta do que uma impressão subjetiva, porque está ancorada em comparação controlada. Em engenharia de prompts, melhoria útil é melhoria reproduzível nas mesmas condições de teste.

## Trade-off entre qualidade, latência e custo

Melhorar qualidade não encerra a decisão técnica. Um prompt mais elaborado pode consumir mais tokens, aumentar latência e elevar custo por execução, então o ganho no placar precisa ser lido junto com o custo operacional. A escolha correta depende do contexto: em alguns casos, uma versão menos precisa, mas significativamente mais barata, entrega melhor relação custo-benefício do que a vencedora absoluta.

## Aplicação prática no experimento

Retomando o experimento já montado no LangSmith, o fluxo fica simples: atualizar o prompt versionado, manter dataset, script e juiz inalterados, rerodar A e B e comparar o novo placar agregado. Em seguida, inspecionar tokens e custo para verificar se a melhoria compensa financeiramente. Esse processo transforma iteração de prompt em ciclo auditável de hipótese, execução e decisão.
