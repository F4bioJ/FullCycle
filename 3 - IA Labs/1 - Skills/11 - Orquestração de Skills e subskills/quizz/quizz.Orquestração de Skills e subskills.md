# Quizz — Orquestração de Skills e subskills

**Capítulo:** 1 - Skills · **Aula:** 11
**Base:** material da aula

---

## 1. Uma empresa monta uma skill `gerar-relatorio-mensal` como orquestradora, com subskills para coleta de dados, gráficos e texto. Qual divisão de papéis segue o desenho da aula?
- A) O orquestrador escreve o texto final e as subskills buscam os dados, porque o texto é a parte mais importante.
- B) O orquestrador define as etapas, a ordem e o que passar a cada subskill; cada subskill produz a sua parte.
- C) Cada subskill decide por conta própria quando rodar, e o orquestrador junta os resultados no fim da execução.
- D) O orquestrador produz um rascunho de tudo, e as subskills revisam cada parte seguindo as convenções.

## 2. Uma consultoria atende três clientes com a mesma skill de documentação, e cada cliente tem um padrão próprio de escrita. Seguindo a aula, como organizar?
- A) Uma skill só, e o padrão de cada cliente num arquivo de convenção no projeto dele, lido antes de gerar.
- B) Uma cópia da skill para cada cliente, com o padrão dele escrito no corpo, para o modelo não misturar.
- C) Uma skill só, com uma seção por cliente no corpo, e a porta de decisão pergunta qual seção usar.
- D) Uma skill só, sem padrões, e o usuário cola o padrão do cliente no pedido a cada execução.

## 3. Uma skill orquestradora de onboarding cria as contas de um novo funcionário, mas o pedido não diz em qual equipe ele entra, e isso muda os acessos. Pelo desenho da aula, o que se espera?
- A) Escolher a equipe mais comum, seguir a pipeline e listar a suposição no relatório de fechamento.
- B) Encerrar a execução e pedir que o usuário refaça o pedido já informando a equipe do funcionário.
- C) Criar as contas sem os acessos da equipe e deixar essa decisão para uma execução posterior.
- D) Parar na porta de decisão, perguntar a equipe ao usuário, registrar a resposta e seguir a pipeline.

## 4. O professor ressalta que toda a orquestração foi feita só com arquivos `.md`, por inferência. Se uma etapa um dia gerar algo fora do padrão, o que ele propõe para pegar isso?
- A) Uma porta de decisão a mais no fim, para o usuário revisar cada arquivo antes de a pipeline terminar.
- B) Uma convenção mais longa e detalhada, porque o desvio indica que o modelo teve pouco contexto.
- C) Um script determinístico que confira o formato e aponte o desvio, permitindo a autocorreção.
- D) Um orquestrador que escreva ele mesmo as partes críticas, sem delegar essas etapas às subskills.

## 5. Um dev quer dividir cada subskill em várias menores, uma para cada tipo de arquivo, "para ficar mais organizado". Pelo que esta aula e a anterior dizem sobre granularidade, qual é a melhor resposta?
- A) Quanto mais subskills, melhor, porque cada uma fica mais curta, e corpo curto é a regra da aula anterior.
- B) A divisão é particular e entra quando é necessária; parte-se da responsabilidade, não do tamanho.
- C) Não vale dividir, porque o orquestrador fica limitado a chamar uma subskill por etapa da pipeline.
- D) Vale dividir até ter uma subskill por arquivo, já que o orquestrador trabalha num ciclo por arquivo.
