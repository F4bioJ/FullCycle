# Gabarito — Skill N3

## 1. Só a skill, sem o script de scan
**Correta: C**
**Por quê:** o nível 3 é o que usa referências e scripts, um ou outro, ou os dois. Sem nenhuma pasta, a skill fica no corpo (nível 2), como a skill simples da aula 3.1.3, que vai da fase 2 direto para a 5. E, sem o script, a busca depende só da IA: segundo o professor, ela pode buscar, dizer que buscou ou buscar só 20%, 30% ou 50%, porque a inferência é dela.
- **A:** mandar fazer uma busca no corpo não torna a skill N3; o nível 3 vem das referências ou dos scripts. E a cobertura completa é justamente o que se perde sem o script.
- **B:** o nível está certo, mas a conclusão não: um passo a passo no corpo continua sendo interpretado pelo modelo, que decide o quanto buscar. A garantia de 100% vem do script determinístico.
- **D:** o nível 1 é o que está sempre carregado (name e description); quando a skill é executada, o corpo é lido, então ela é N2.
**Conceito:** nível 2 × nível 3 e a garantia do script

## 2. Por que a triagem de TODO/FIXME cabe numa skill
**Correta: A**
**Por quê:** o professor diz que é algo relativamente fácil de produzir, mas que cabe bastante numa skill porque é repetitivo, do dia a dia, e totalmente executável. Isso conversa com o critério de reutilização da aula 3.1.6.
- **B:** o procedimento não óbvio é um dos três SIMs da aula 3.1.6, mas não é a justificativa dada aqui; o professor chama a tarefa de relativamente fácil.
- **C:** pela aula 3.1.6, dado vivo ou estado em tempo real aponta para tools e MCP (e, no caso da segurança, até veta a skill); o professor não justifica a skill por aí.
- **D:** a skill não é o que dá ao harness acesso aos arquivos; o próprio modelo pode buscar sozinho. O problema, segundo a aula, é que essa busca depende da inferência dele.
**Conceito:** quando a necessidade vira skill

## 3. Duas buscas pelo script e duas pelo modelo
**Correta: D**
**Por quê:** o professor define determinístico (o script, os linters, os formatadores) como o que tem a certeza de ser executado e sempre devolve a mesma resposta. Já o modelo é não determinístico: segue o mesmo padrão de inferência dentro de um mesmo contexto, mas a resposta vem de forma diferente, como no "oi" enviado duas vezes.
- **A:** o professor diz o contrário: mesmo dentro do mesmo contexto, a resposta do modelo muda. É isso que o torna não determinístico.
- **B:** o script é determinístico mesmo sendo chamado pela sessão; é justamente por isso que o professor o usa para garantir a busca.
- **C:** a aula não fala em o modelo se estabilizar; o professor pergunta "oi" de novo e recebe outra resposta, e diz que, sem script, a busca depende da inferência a cada vez.
**Conceito:** determinístico × não determinístico

## 4. Script rodando depois da classificação
**Correta: B**
**Por quê:** na skill da aula, o primeiro passo é o script, que traz 100% das ocorrências; depois, com base na resposta dele, vem a classificação. Invertendo a ordem, o modelo classifica o que ele mesmo encontrou, e, segundo o professor, sem o script a busca pode cobrir só 20%, 30% ou 50%. O script no fim lista tudo, mas a triagem já foi feita sobre a busca do modelo.
- **A:** a coleta do script fica completa, mas a classificação foi feita antes, sobre o que o modelo achou; ela não passa a cobrir o que só o script trouxe.
- **C:** o nível 3 vem de a skill usar referências ou scripts, não da posição do script no corpo; a aula não liga uma coisa à outra.
- **D:** o script continua determinístico em qualquer posição; o problema é a classificação ter sido feita antes, sobre dados incompletos.
**Conceito:** script primeiro, classificação depois

## 5. O que o script muda (INCORRETA)
**Correta: C**
**Por quê:** é a incorreta. O script torna determinística a coleta: ele é executado e devolve 100% das ocorrências. A classificação vem depois, feita pelo modelo com base na resposta do script, e o modelo continua não determinístico. Por isso o professor sugere referências com listas de classificação para dizer o que realmente é alto, médio ou baixo.
- **A:** correta: o professor diz que, sendo determinístico, o script vai trazer 100% de tudo, e a classificação ocorre com base na resposta dele.
- **B:** correta: com o script, a busca deixa de depender da inferência do modelo, que poderia buscar só uma parte.
- **D:** correta: o professor chama o script de, de novo, o quality gate dentro da skill, para garantir que ela execute aquilo que tem que ser executado.
**Conceito:** o que o script garante e o que não garante

## 6. Quando o script de scan roda
**Correta: A**
**Por quê:** pelas aulas 3.1.2 e 3.1.3, o script é do nível 3 e roda na fase 4, depois que a skill foi acionada e o corpo (nível 2) foi lido. Na skill de triagem, o primeiro passo do corpo é executar o script determinístico; com base na resposta dele vem a classificação.
- **B:** a fase 0 só indexa as skills disponíveis (aula 3.1.3); nenhum script roda antes do pedido.
- **C:** a description decide o acionamento (fase 1), mas não executa o script; é o corpo, lido depois, que manda rodá-lo.
- **D:** o que fica sempre carregado é o nível 1, name e description; scripts são do nível 3 e só entram quando o corpo leva a eles.
**Conceito:** script no nível 3 / fase 4

## 7. Como conferir que o script rodou
**Correta: D**
**Por quê:** é o que o professor faz no fim da aula: abre o "run shell" e mostra que o Bash rodou o script de scan. O registro da execução mostra o que de fato aconteceu naquela execução.
- **A:** o professor alerta justamente que a IA pode falar que buscou; a palavra do modelo não é a garantia.
- **B:** ter o script na pasta não prova que ele rodou; pela aula 3.1.3, a leitura do nível 3 é condicional e segue o corpo, e o modelo pode decidir não seguir tudo.
- **C:** o formato do relatório pode sair certo mesmo que a busca tenha sido feita pelo modelo; formato não prova de onde vieram os dados.
**Conceito:** conferir a execução do script

## 8. A mesma pendência ora média, ora baixa
**Correta: B**
**Por quê:** a classificação é feita pelo modelo, que é não determinístico. O professor diz que a skill poderia ter referências com listas de classificação, dizendo o que realmente é alto, médio ou baixo, o que dá ao modelo um critério escrito para classificar.
- **A:** a description é o classificador do disparo da skill (aulas 3.1.2 e 3.1.7), não da prioridade dos itens no relatório.
- **C:** a coleta já é determinística e completa; rodar o script de novo traz as mesmas ocorrências e não mexe na classificação.
- **D:** o professor cita o GitHub para centralizar os itens e corrigi-los depois, não como forma de fixar o critério de prioridade da skill.
**Conceito:** referências para a classificação

## 9. Qual etapa de uma skill de revisão vira script
**Correta: A**
**Por quê:** pelo raciocínio da aula, o script cabe na parte determinística: a busca que precisa acontecer de verdade e trazer 100% do que existe, com a mesma resposta a cada execução. Na skill de triagem é o primeiro passo, e o resto (classificar, priorizar e sugerir) fica com o modelo, a partir da saída do script.
- **B:** avaliar se um log é útil ou esquecido é julgamento, como a classificação de prioridade da triagem, que fica com o modelo depois do script.
- **C:** sugerir uma correção para cada caso depende de interpretar o código, como as recomendações da triagem, feitas pelo modelo.
- **D:** o resumo é a parte que o modelo produz a partir dos dados; na triagem, o relatório final é escrito pelo modelo, não pelo script.
**Conceito:** o que vai para o script

## 10. Triagem com referências e sem script
**Correta: C**
**Por quê:** o nível 3 usa referências e scripts, um ou outro, ou os dois, então a versão só com referências é N3. As listas de classificação dão o critério do que é alto, médio ou baixo, como sugere o professor. Mas a varredura fica a cargo do modelo, e sem o script não há a garantia de buscar 100%.
- **A:** o professor diz que a skill N3 pode usar um script, uma referência ou os dois; não é preciso ter script.
- **B:** estar no nível 3 não torna nada determinístico; referência é contexto lido pelo modelo. Determinístico é o script.
- **D:** é verdade que a referência é contexto lido pelo modelo, mas a conclusão está errada: o professor sugere as listas de classificação justamente para dizer ao modelo o que realmente é alto, médio ou baixo, ou seja, para orientar a classificação.
**Conceito:** N3 com referências × N3 com script
