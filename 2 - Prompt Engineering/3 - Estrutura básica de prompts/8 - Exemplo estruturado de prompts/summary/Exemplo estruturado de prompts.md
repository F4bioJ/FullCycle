# Exemplo estruturado de prompts

## Estrutura em seções

Um prompt estruturado organiza instruções em blocos explícitos, em vez de concentrar tudo em um texto corrido. Essa divisão reduz ambiguidade, facilita manutenção e torna o prompt reutilizável como artefato de trabalho. Em tarefas de desenvolvimento, o ganho principal não está em “falar mais”, mas em separar intenção, contexto e restrições de forma auditável.

## Persona e escopo

Persona e escopo definem quem o modelo deve ser naquela tarefa e até onde ele pode ir. No exemplo de Node.js com Jest, dizer que o agente é especializado em `Node.js` e testes com `Jest`, além de proibir refatorações no código original, reduz improviso e evita mudanças fora da fronteira da tarefa. Essa seção funciona como um enquadramento operacional: ela orienta competência esperada e limita comportamento ao mesmo tempo.

## Objetivo

O objetivo precisa descrever a tarefa de forma direta e específica. “Escreva testes para o código abaixo” é amplo demais; “escreva testes unitários para a função abaixo usando Jest, cobrindo entradas válidas e inválidas” já informa tipo de teste, ferramenta e cobertura mínima. A diferença prática é que o modelo deixa de inferir sozinho o que você quis dizer e passa a executar um pedido mais controlado.

## Entrada separada e mínima

A entrada deve conter apenas o necessário para resolver a tarefa e aparecer separada visualmente do restante do prompt. Retomando o cenário de geração de testes, a função alvo entra em um bloco próprio, sem misturar código com instruções de objetivo. Essa separação evita que o modelo confunda dado de entrada com regra de execução e ajuda a manter o prompt sistemático.

## Formato de saída

O formato de saída já foi discutido antes como mecanismo de previsibilidade; aqui ele vira uma seção explícita da estrutura. Exigir um objeto JSON com campos como `testFile` e `coverageNotes` reduz respostas fora do padrão e facilita integração com agentes ou outros programas. JSON não é obrigatório em todos os casos, mas formatos com regras claras diminuem variação e tornam a resposta mais processável.

## Critérios de qualidade

Critérios de qualidade definem o que conta como uma resposta boa antes da execução começar. No exemplo, os testes precisam rodar com `npm test` sem ajustes, cobrir casos válidos e inválidos e não usar bibliotecas externas além de `Jest`. Sem essa seção, o modelo pode até cumprir a tarefa em aparência, mas falhar no que realmente importa para aceitação técnica.

## Ambiguidades e pressupostos

Tratamento de ambiguidades especifica como o modelo deve agir quando faltar informação necessária. Se a versão do Node não estiver informada, o prompt pode mandar assumir `Node 18` e registrar isso no campo `assumptions`. O valor dessa seção está em transformar inferências implícitas em pressupostos declarados, o que melhora revisão, rastreabilidade e confiança no resultado.

## Instruções negativas

Instruções negativas listam explicitamente o que não pode aparecer ou acontecer na resposta. No exemplo, proibir explicações ou comentários fora do JSON impede que o modelo “enfeite” a saída e quebre o contrato esperado. Esse tipo de restrição é especialmente útil na camada de saída, onde pequenas variações já podem inviabilizar automação.

## Tratamento de erro

Tratamento de erro define como o modelo deve responder quando não conseguir cumprir a tarefa. Em vez de improvisar ou entregar algo parcialmente inválido, ele pode retornar um JSON com `statusError` e a explicação do problema. Isso transforma falha em resposta estruturada, o que é mais útil para depuração e para fluxos automatizados.

## Exemplo completo aplicado ao caso Node/Jest

Um prompt completo para esse cenário combina, na mesma ordem, `Persona and Scope`, objetivo, entrada, formato de saída, critérios, ambiguidades, instruções negativas e tratamento de erro. Retomando o exemplo de testes em Node/Jest, a força da estrutura não está em prometer o “melhor prompt do mundo”, mas em tornar a intenção explícita e reaproveitável. Quando você pede apenas “gere o teste disso aqui”, a chance de sair fora do padrão aumenta; quando cada seção define papel, tarefa, dados, qualidade e exceções, o comportamento fica muito mais previsível.

## Reutilização como ativo

Prompts estruturados dão trabalho para construir, mas esse custo inicial compra reutilização futura. Assim como testes e documentação acumulam valor no projeto, prompts bem organizados deixam de ser texto descartável e passam a compor uma base reaproveitável entre tarefas, agentes e programas. O ganho real está na intencionalidade persistente: você para de começar do zero e passa a evoluir um padrão.
