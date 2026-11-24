# Quizz — Skill N3

**Capítulo:** 1 - Skills · **Aula:** 8
**Base:** material da aula

---

## 1. Ao criar a skill de triagem, o modelo perguntou se o professor queria um script de scan ou só a skill. Se ele tivesse escolhido só a skill (frontmatter e corpo, sem pastas, com o corpo mandando o modelo procurar os marcadores), o que mudaria, pelo que a aula ensina?
- A) A skill continuaria no nível 3, porque o corpo manda fazer uma busca no projeto, e a varredura seguiria cobrindo todos os arquivos.
- B) A skill ficaria no nível 2, mas a varredura continuaria completa, porque o corpo traz ao modelo o passo a passo exato da busca.
- C) A skill ficaria no nível 2, e a varredura passaria a depender só da inferência do modelo, que decide o quanto buscar.
- D) A skill cairia para o nível 1, porque, sem script nem referência, só o frontmatter seria carregado na hora de executar.

## 2. Um colega acha exagero criar uma skill para varrer os TODOs e FIXMEs do projeto: "é uma tarefa fácil". Como o professor justifica que essa necessidade cabe numa skill?
- A) Mesmo sendo relativamente fácil, a tarefa se repete no dia a dia e é totalmente executável, o que a torna boa candidata.
- B) A tarefa parece fácil, mas exige um procedimento não óbvio, que o modelo não acerta sem instruções detalhadas no corpo.
- C) Como a busca depende do estado atual do código, a tarefa envolve dado vivo, e a skill é o lugar certo para consultá-lo.
- D) Sem uma skill, o harness não consegue abrir os arquivos do projeto, então a varredura precisa ser empacotada como skill.

## 3. Num projeto que não muda, um dev roda duas vezes o script de scan e depois pede duas vezes ao modelo, sem script, a mesma busca pelos marcadores, no mesmo contexto. Pelo que a aula ensina, o que ele deve esperar?
- A) As duas buscas do modelo saem iguais, porque o contexto é o mesmo; elas mudariam caso o projeto mudasse entre uma e outra.
- B) O script e o modelo variam do mesmo jeito, porque os dois rodam dentro da sessão do harness, que não é determinística.
- C) O modelo varia na primeira busca e se estabiliza na segunda, porque reaproveita o que encontrou da vez anterior.
- D) O script devolve as mesmas ocorrências nas duas rodadas; o modelo segue o mesmo padrão, mas as respostas podem vir diferentes.

## 4. Um dev inverte a ordem dos passos da skill de triagem: o modelo procura e classifica as pendências que encontrar e, no fim, o script de scan roda para listar as ocorrências no relatório. Pelo raciocínio da aula, o que se perde?
- A) Nada de essencial: como o script ainda roda no fim, a coleta continua completa e a classificação também fica completa.
- B) A classificação deixa de partir do que o script coletou e passa a valer para o que o modelo achou na busca dele.
- C) A skill deixa de ser N3, porque o nível 3 exige que o script seja o primeiro passo do corpo da skill.
- D) O script passa a rodar de forma não determinística, porque é chamado depois de uma etapa feita pelo modelo.

## 5. A skill de triagem agora executa o script de scan no primeiro passo e só depois classifica. Sobre o que isso muda, qual afirmação está INCORRETA?
- A) Os dados que o modelo recebe para classificar passam a vir de uma busca que traz 100% das ocorrências.
- B) A parte do projeto que é varrida deixa de ser decidida pela inferência do modelo a cada execução.
- C) O relatório inteiro, incluindo a prioridade dada a cada item, passa a sair igual nas próximas execuções.
- D) O script funciona como um quality gate, que assegura a execução daquilo que tem que ser executado.

## 6. Quando a skill de triagem é executada, em que momento o script de scan roda, considerando as fases e os níveis vistos nas aulas 3.1.2 e 3.1.3?
- A) Depois do acionamento e da leitura do corpo, quando o passo 1 do corpo manda executar o script de scan.
- B) Na fase 0, de startup e indexação, para que o resultado da varredura já esteja pronto antes do pedido.
- C) No roteamento, porque a description, ao classificar o pedido, já aciona o script sem precisar ler o corpo.
- D) No início da sessão, porque scripts são leves e ficam carregados junto com o frontmatter no nível 1.

## 7. Você quer ter certeza de que o relatório de uma execução veio mesmo do script de scan, e não de uma busca feita pelo modelo por conta própria. Qual verificação é a mais confiável, pelo que a aula mostra?
- A) Perguntar ao modelo, ao fim da execução, se ele rodou o script de scan, e confiar na resposta que ele der.
- B) Conferir se a pasta da skill tem o script de scan, já que um script no nível 3 roda em toda execução.
- C) Ver se o relatório segue o formato pedido no corpo, com os grupos alto, médio e baixo e as recomendações.
- D) Abrir o registro da execução do shell e ver se o Bash rodou o script de scan naquela execução.

## 8. Depois de algumas execuções, o time nota que o mesmo tipo de pendência às vezes sai como prioridade média e às vezes como baixa. Qual evolução da skill, entre as que o professor cita, ataca esse problema?
- A) Reescrever a description, que é o classificador da skill, para deixar mais claros os níveis de prioridade esperados.
- B) Acrescentar referências com listas de classificação, que dizem o que realmente é alto, o que é médio e o que é baixo.
- C) Rodar o script de scan mais de uma vez antes de classificar, para que a coleta dos marcadores fique mais completa.
- D) Abrir os itens no GitHub, para que a prioridade de cada um fique registrada lá e não mude nas próximas execuções.

## 9. Um time quer uma skill de revisão que: (1) liste os arquivos alterados que contêm console.log; (2) avalie se cada log é útil ou foi esquecido; (3) sugira uma correção para cada caso; (4) resuma a revisão para o autor. Pelo raciocínio da aula, qual parte é a melhor candidata a virar script?
- A) A etapa 1, porque a busca precisa cobrir todos os arquivos e devolver o mesmo resultado a cada execução.
- B) A etapa 2, porque a avaliação de cada log precisa sair igual em todas as revisões e por isso deve ser fixa.
- C) A etapa 3, porque a correção sugerida ao autor precisa seguir o mesmo texto em todos os arquivos revisados.
- D) A etapa 4, porque o resumo é a parte que o autor lê e por isso não pode variar de uma revisão para outra.

## 10. Outro time faz uma versão da skill de triagem sem script: no lugar dele, uma pasta de referências com as listas de classificação, e o corpo manda varrer o projeto. O que essa versão ganha e o que não ganha?
- A) Não é N3, porque o nível 3 exige um script; as referências sozinhas deixam a skill no nível 2, sem critério novo.
- B) É N3 e ganha a garantia de varrer 100% do projeto, porque o que fica no nível 3 é lido de forma determinística.
- C) É N3 e ganha critérios escritos para a prioridade, mas a varredura continua dependendo só da inferência do modelo.
- D) É N3, mas a classificação fica igual à de antes, porque referências só trazem contexto e não mudam a decisão do modelo.
