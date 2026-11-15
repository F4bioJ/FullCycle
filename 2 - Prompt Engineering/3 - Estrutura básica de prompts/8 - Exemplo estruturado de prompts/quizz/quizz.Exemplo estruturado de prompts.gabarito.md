# Gabarito — Exemplo estruturado de prompts

## 1. Texto extra em volta do JSON
**Correta: A**
**Por quê:** As instruções negativas listam o que não pode aparecer na resposta; o exemplo da aula é exatamente "não inclua explicações ou comentários fora do JSON". O professor acrescenta que "as instruções negativas normalmente são feitas para a saída".
- **B:** O prompt já pede "apenas com um objeto JSON" e mesmo assim a IA acrescentou texto; a aula trata isso com uma seção própria, a de instruções negativas, e não repetindo o pedido de formato.
- **C:** Os critérios dizem o que é um bom teste (rodar com npm test, cobrir casos, sem bibliotecas extras), não o que pode aparecer na resposta.
- **D:** A persona define papel e escopo de atuação no código, não o conteúdo permitido na saída.
**Conceito:** Instruções negativas na saída

## 2. Critérios de qualidade contra formato de saída
**Correta: B**
**Por quê:** Os critérios especificam "o que define para mim uma resposta boa" (rodar com npm test, cobrir casos válidos e inválidos, sem bibliotecas além do Jest); o formato de saída define "como a gente quer" a resposta (um JSON com testFile e coverageNotes), para evitar respostas fora do padrão.
- **A:** O formato também vale para o código: o próprio teste vai dentro do campo testFile do JSON.
- **C:** O professor chama o formato de saída de "o ponto mais crítico"; não é a parte opcional.
- **D:** A aula não fala de ordem de leitura nem de prioridade entre seções.
**Conceito:** Critérios de qualidade

## 3. Função colada no meio do objetivo
**Correta: D**
**Por quê:** "Se a entrada que você está passando está junto com o objetivo [...] ela misturou o objetivo dela com a função que ela tem que trabalhar, e aí as coisas começam a ficar menos sistemáticas, gerando ainda mais ambiguidade." Por isso a entrada vai num bloco separado.
- **A:** Uma função não estoura a janela de contexto; o problema apontado é a mistura, não o tamanho.
- **B:** A aula não fala de a função ser tomada por exemplo few-shot.
- **C:** Refatorar é risco tratado pela persona e escopo; a aula liga a mistura de entrada e objetivo à confusão e à ambiguidade.
**Conceito:** Entrada separada do objetivo

## 4. Por que listar os pressupostos
**Correta: C**
**Por quê:** "Toda vez que a própria IA tiver dúvida e que ela teve que assumir algo para terminar a tarefa, eu quero que ela fale para mim [...] Ela consegue informar para você o que ela assumiu." Assim, a inferência implícita vira um pressuposto declarado, que você pode revisar.
- **A:** A seção manda assumir um valor e seguir, não recusar a tarefa; recusar com motivo é papel do tratamento de erro.
- **B:** O objetivo é a transparência sobre o que foi assumido, não a economia de tokens; a lista fica dentro do JSON, em vez de substituir texto fora dele.
- **D:** O valor a assumir já está escrito no prompt (Node 18); a lista registra o que foi assumido, não serve para escolher versão.
**Conceito:** Ambiguidades e pressupostos

## 5. Falha sem quebrar a regra do JSON
**Correta: A**
**Por quê:** O tratamento de erro explica como a IA deve responder quando não consegue cumprir a tarefa: "um JSON statusError e a explicação do problema". A explicação vai dentro do JSON, e a instrução negativa continua respeitada.
- **B:** A aula não abre exceções na instrução negativa; ela define um formato próprio para o erro.
- **C:** Os pressupostos registram o que a IA assumiu para concluir a tarefa, não o motivo de não ter conseguido.
- **D:** Os critérios dizem o que é uma boa resposta, mas não dizem o que devolver quando ela não é possível.
**Conceito:** Tratamento de erro

## 6. Por que "não faça refatorações" agrada o revisor
**Correta: C**
**Por quê:** Ao dizer de cara o que a IA não vai fazer, "vai ter menos coisa para ele revisar pelo fato da IA não sair mexendo em códigos que ele não devia", o mesmo problema da PR inflada da aula da correção de bug.
- **A:** A aula liga a persona a reduzir improviso e garantir alinhamento técnico, não a mais cobertura de testes.
- **B:** O ganho citado é menos código para revisar, não economia de tokens.
- **D:** A proibição não pede justificativas; ela evita que as mudanças existam.
**Conceito:** Persona e escopo

## 7. Objetivo direto e sem ambiguidade
**Correta: B**
**Por quê:** A aula contrapõe "escreva testes para o código abaixo" (muito aberto) a "escreva testes unitários para a função abaixo, usando o Jest, cobrindo casos de entradas válidos e inválidos": diz o tipo de teste, a ferramenta e a cobertura.
- **A:** "Melhor cobertura possível" e "boas práticas" continuam vagos: não dizem tipo de teste, ferramenta nem casos.
- **C:** "Os testes que julgar necessários" devolve a decisão à IA, justamente a ambiguidade que a seção quer tirar.
- **D:** É o pedido que a aula usa como contraexemplo: com base em "todos esses outros testes", a chance de sair fora do padrão é grande.
**Conceito:** Objetivo direto

## 8. JSON entre agentes
**Correta: D**
**Por quê:** "Quando você for trabalhar com agentes de IA e esses caras se comunicando, JSON ou qualquer formato que tenha uma clareza de regras sempre vai mitigar um monte de problemas, inclusive riscos de segurança."
- **A:** A aula não justifica o JSON por economia de tokens.
- **B:** O professor diz que o JSON não é obrigatório; o ponto é a clareza de regras, não uma incapacidade dos agentes.
- **C:** O próprio exemplo mantém a instrução negativa junto do formato JSON; uma não substitui a outra.
**Conceito:** Formato de saída entre agentes

## 9. Prompt elaborado em alta escala
**Correta: B**
**Por quê:** "Esses tipos de prompt não são executados em alta escala [...] Às vezes, você acaba fazendo diversas chamadas para um modelo, com prompts menores, do que fazer ele ler uma quantidade enorme de tokens. Mas nada é regra: você só vai decidir isso no momento em que estiver com o problema na mão."
- **A:** Contraria a aula e as anteriores: em escala, cada token pesa, e a aula diz que prompts assim normalmente não rodam em alta escala.
- **C:** A aula não diz que as seções perdem utilidade em escala; ela sugere dividir em chamadas menores, não abandonar a estrutura.
- **D:** A aula não recomenda cortar seções específicas; ela sugere dividir o trabalho em chamadas menores e decidir caso a caso.
**Conceito:** Prompts elaborados e escala

## 10. O ganho da estrutura por seções
**Correta: C**
**Por quê:** A estrutura clara por seções fica "muito mais fácil de a IA entender e de você também, até mesmo quando você for reaproveitar esse prompt", e, assim como testes e documentação, os prompts viram "um ativo ao longo dos anos", podendo "ser reutilizados em diversos programas".
- **A:** O prompt estruturado fica mais longo, não mais curto; é por isso que a aula discute o custo dele em alta escala.
- **B:** As seções misturam papel (persona) e pedido da vez (entrada, objetivo); a aula anterior separa os dois entre system e user prompt, e esta aula não diz que o prompt inteiro vai para o system.
- **D:** A aula não fala de leitura em paralelo nem de tempo de resposta; o ganho citado é clareza e reaproveitamento.
**Conceito:** Prompt como ativo reutilizável
