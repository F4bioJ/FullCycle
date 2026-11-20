# ITER-RETGEN

## Um loop entre geração e recuperação

Antes da parte prática, o professor apresenta o **ITER-RETGEN**, uma técnica bem utilizada para **expandir o contexto** da pergunta do usuário. A ideia é um **loop iterativo que alterna geração e recuperação**: gera-se um rascunho e, depois, usa-se esse rascunho para buscar, de forma mais específica, as informações que faltam.

## Rascunho com Missing Markers

O primeiro passo é gerar um rascunho com **Missing Markers**, que são lacunas no texto. Exemplo, numa pergunta sobre Python: "A última versão da linguagem Python é [MISSING]" e "Python foi criado por [MISSING]". Em vez de escrever a informação, o rascunho marca que ela está faltando.

## Das lacunas às perguntas, e das respostas ao texto

Com o rascunho pronto, o que está em [MISSING] vira **perguntas**, que alimentam uma **busca**. As respostas obtidas substituem os marcadores pela informação correta ou expandida, e o rascunho é **reescrito**. Em seguida, verifica-se se ainda há algo pendente. Se houver, o processo se repete: novas perguntas, nova busca, novas respostas, até a versão final.

## Por que vale a pena

Às vezes a pergunta é extremamente vaga e se quer uma resposta extremamente completa, o que é difícil para a IA fazer de uma vez. Com esse loop, a quantidade de informação relevante que se consegue trazer é, nas palavras do professor, impressionante.

## As quatro etapas: Draft, Query, Fill e Expansion

1. **Draft:** a partir do input do usuário, que pode ser uma pergunta aberta ou ruim, gera-se um rascunho de resposta. O prompt é **provocativo**: pede para verificar especificidades e trazer informações específicas e, **onde não houver certeza**, colocar [MISSING].
2. **Query:** tudo o que está marcado como [MISSING] é usado para gerar perguntas.
3. **Fill:** com as perguntas, faz-se a busca, obtêm-se as respostas e gera-se a resposta completa para o usuário.
4. **Expansion:** se houve pouca interação, ou seja, poucas perguntas foram geradas, faz-se uma expansão: mais Missing Markers, mais perguntas, mais informação e uma resposta final ainda mais completa.

Nas próximas aulas, o professor mostra exemplos de código com esse comportamento.
