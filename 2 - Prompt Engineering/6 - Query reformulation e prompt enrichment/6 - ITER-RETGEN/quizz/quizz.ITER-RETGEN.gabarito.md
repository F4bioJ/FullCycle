# Gabarito — ITER-RETGEN

## 1. Por que marcar [MISSING] em vez de completar
**Correta: C**
**Por quê:** No ITER-RETGEN, tudo o que está marcado como [MISSING] vira pergunta. As perguntas alimentam a busca, e as respostas substituem os marcadores. Marcar a incerteza em vez de "chutar" é o que faz a informação vir da recuperação.
- **A:** É a lógica do HyDE, da aula anterior, que preenche tudo, mesmo com dados hipotéticos, para gerar embeddings. No ITER-RETGEN, as lacunas viram perguntas.
- **B:** A aula não liga os marcadores à economia de tokens.
- **D:** As lacunas são preenchidas pela busca, e não pelo usuário.
**Conceito:** Missing Markers viram perguntas para a busca

## 2. Lacunas pendentes depois do primeiro ciclo
**Correta: A**
**Por quê:** O professor diz que, depois de reescrever o rascunho com as respostas, verifica-se se ainda há algo pendente. Se houver, o processo se repete: novas perguntas, nova busca e reescrita, até a versão final. É o "loop iterativo" da técnica.
- **B:** Se ainda há lacunas, o trabalho não terminou. A aula manda verificar o que ficou pendente e repetir, e não encerrar.
- **C:** Trocar de técnica no meio não faz parte do ITER-RETGEN, que segue alternando geração e recuperação.
- **D:** A Expansion serve para quando houve pouca interação (poucas perguntas geradas). Lacunas pendentes se resolvem com novas perguntas e busca, e não sendo trocadas por outras.
**Conceito:** loop iterativo — repetir enquanto houver pendências

## 3. Poucas lacunas e resposta rasa
**Correta: D**
**Por quê:** A aula diz que, se houve pouca interação (poucas perguntas geradas), faz-se uma expansão adicional: mais Missing Markers, mais perguntas, mais informação e uma resposta final mais completa.
- **A:** Repetir as mesmas perguntas não traz informação nova. O problema é haver poucas lacunas.
- **B:** A etapa Query transforma cada lacuna numa pergunta. Com poucas lacunas, dividir as perguntas não cria pontos novos a investigar.
- **C:** Um novo rascunho com as mesmas lacunas repete o mesmo resultado. O que falta são lacunas novas.
**Conceito:** Expansion — mais lacunas quando há poucas perguntas

## 4. HyDE × ITER-RETGEN
**Correta: B**
**Por quê:** No HyDE, o modelo escreve uma resposta hipotética completa, sem linguagem especulativa e mesmo com dados possivelmente errados, que serve para uma busca vetorial. No ITER-RETGEN, o modelo marca como [MISSING] o que não sabe, e essas lacunas guiam um loop de perguntas e buscas.
- **A:** O HyDE não marca lacunas. O prompt dele pede um texto assertivo, sem linguagem especulativa, mesmo com dados hipotéticos.
- **C:** O HyDE não usa o documento hipotético na resposta final. E o rascunho do ITER-RETGEN é reescrito, e não descartado.
- **D:** No HyDE, o documento hipotético é gerado e usado numa busca. Quem itera, alternando geração e busca, é o ITER-RETGEN.
**Conceito:** lacunas e iteração × documento hipotético único

## 5. "Me fala sobre Python": por que ITER-RETGEN e a que preço
**Correta: C**
**Por quê:** O professor diz que, quando a pergunta é muito vaga e se quer uma resposta muito completa, o loop traz uma quantidade impressionante de informação relevante. O preço vem da aula sobre o fluxo básico: cada rodada de perguntas e busca acrescenta chamadas, e cada chamada aumenta custo e latência.
- **A:** O rascunho sai com lacunas ([MISSING]), e não completo. São essas lacunas que guiam as buscas.
- **B:** As lacunas são preenchidas com o que vem da busca. A técnica não põe dados hipotéticos na resposta, que é o que ela evita ao marcar [MISSING].
- **D:** A aula de ITER-RETGEN não liga a técnica a um banco vetorial nem a embeddings. O custo citado vem das várias chamadas do loop.
**Conceito:** quando usar ITER-RETGEN — pergunta vaga, resposta completa
