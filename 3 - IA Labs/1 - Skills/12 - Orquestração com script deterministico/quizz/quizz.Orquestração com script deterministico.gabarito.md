# Gabarito — Orquestração com script deterministico

## 1. Por que acrescentar o check-layers a uma pipeline que já funcionava
**Correta: C**
**Por quê:** a pipeline da aula anterior foi feita só com Markdown e inferência. O professor lembra que a IA não é determinística: ela pode seguir o fluxo das camadas numa execução e sair dele em outra. O script é uma trava determinística no nível arquitetural, que confere o fluxo do mesmo jeito em toda execução e, se houver quebra, aciona a autocorreção.
- **A:** o pré-check das convenções da pasta architecture já fazia parte das subskills na aula anterior, e funcionou sem script; o check-layers confere imports, não a leitura de convenções.
- **B:** o script não escreve código. Ele resolve a camada de cada arquivo, confere os imports e barra as fronteiras proibidas; quem escreve continua sendo a subskill, por inferência.
- **D:** os testes já rodavam dentro da pipeline (os 28 testes passaram sem script). O passo 5 roda o gate depois que as camadas passam nos testes.
**Conceito:** trava determinística sobre a pipeline não determinística

## 2. Quem corrige uma violação do domínio
**Correta: A**
**Por quê:** o passo 5 manda autocorrigir cada violação delegando para a subskill da camada ofensora, isto é, a do arquivo que fez o import proibido. Aqui é o arquivo de src/domain que importa de src/services, então a correção vai para a subskill de domínio.
- **B:** a camada importada não fez nada de errado; o import proibido está no arquivo de domínio, que deveria não importar nada para fora (exceto o Zod).
- **C:** a implement feature roda o gate, mas, como visto na aula anterior, ela não escreve código: delega. O passo 5 mantém essa delegação.
- **D:** o gate roda no fim da pipeline, mas a delegação segue a camada ofensora, não a ordem bottom to up nem a última camada implementada.
**Conceito:** delegar a correção à subskill da camada ofensora

## 3. Qual import passaria pelo gate
**Correta: D**
**Por quê:** o serviço é o caso de uso que orquestra o domínio e o repositório: ele acessa o domínio, cria o produto e manda para o repositório. Esse import aponta para dentro, como pede a regra geral de que as dependências sempre apontam para dentro.
- **A:** a regra ditada diz que o domínio não importa nada para fora, exceto a dependência Zod. Um helper de src/shared está fora do domínio, então o import seria barrado.
- **B:** uma das regras é justamente que a rota não importa repositório; ela deve chamar o serviço.
- **C:** a regra principal é que a rota não pode importar nada de src/domain; o professor chama isso de quebra arquitetural.
**Conceito:** regra de dependências (apontam para dentro)

## 4. O que o exit 0 não garante
**Correta: B**
**Por quê:** o check-layers confere a camada de cada arquivo pelo path e os imports entre camadas, barrando as fronteiras definidas no script. Ele não testa regras de negócio, como o nome obrigatório e o preço diferente de zero; isso é papel dos testes de cada camada.
- **A:** é exatamente o que o exit 0 do gate atesta: os imports não cruzaram as fronteiras proibidas que o script define.
- **C:** o loop do passo 5 repete o processo até o exit ser zero; com o exit 0, ele termina.
- **D:** a skill define que a feature só está pronta com o gate verde, e o gate só roda depois que as camadas passam nos testes; para o professor, exit 0 é quando se pode classificar como pronto.
**Conceito:** o que o gate confere (fronteiras, não regras de negócio)

## 5. O que fazer quando a violação não sai
**Correta: C**
**Por quê:** o professor pensa em um max retry, mas, para o exemplo, escreve que o processo se repete até o exit ser zero e que, se as tentativas passarem de 10, o agente consulta o usuário com a tool AskUserQuestion. A feature não fica pronta com o gate vermelho.
- **A:** a skill diz que a feature só está pronta com o gate verde; passar de 10 tentativas leva a consultar o usuário, não a entregar.
- **B:** é meia-verdade: ele troca o max retry por "repetir até o exit ser zero", mas acrescenta o limite de 10 tentativas, depois do qual consulta o usuário.
- **D:** o passo 5 manda delegar a correção à subskill da camada ofensora; não há regra para o agente abandonar a delegação. O que ele faz depois de 10 tentativas é perguntar ao usuário.
**Conceito:** loop de autocorreção com limite e consulta ao usuário

## 6. Por que o gate roda numa edição fora da pipeline
**Correta: D**
**Por quê:** o passo 5 da implement feature só roda quando a skill é usada. Por isso o professor põe a regra no CLAUDE.md, arquivo obrigatoriamente lido a todo momento: ao concluir qualquer feature ou ao terminar de editar qualquer arquivo de src, o último passo obrigatório antes de dizer que a tarefa terminou é rodar o gate.
- **A:** no startup só entra o frontmatter (nível 1), como visto no progressive disclosure; o corpo, com o passo 5, só é lido quando a skill é acionada.
- **B:** o ESLint foi configurado para receber as regras customizadas, mas o gate é rodado pelo agente via Bash, como a regra do CLAUDE.md manda; a aula não mostra execução automática ao salvar.
- **C:** o AGENTS.md saiu como um link para o CLAUDE.md, não como uma cópia da regra; o CLAUDE.md é o arquivo específico do Claude Code.
**Conceito:** regra do gate no CLAUDE.md, lido sempre

## 7. Como fazer a regra valer em duas ferramentas
**Correta: A**
**Por quê:** o professor explica que o CLAUDE.md é específico do Claude Code e que dá para usar o AGENTS.md fazendo só uma referência ao CLAUDE.md, sem problema. Foi o que ele fez: o AGENTS.md saiu como um link para o CLAUDE.md, onde está a regra.
- **B:** a skill é portátil, mas não tem garantia de leitura: o passo 5 só roda quando a implement feature é acionada, e a regra precisa valer em qualquer edição de src. Fato que precisa valer sempre vai para o CLAUDE.md ou o AGENTS.md.
- **C:** a description está no nível 1 para decidir o acionamento da skill; ela não garante que o corpo nem o gate sejam executados.
- **D:** segundo o professor, o AGENTS.md que só referencia o CLAUDE.md é lido sem problema, então duplicar não é necessário.
**Conceito:** CLAUDE.md e AGENTS.md como link

## 8. Para que serve o formato do bloco de erro
**Correta: B**
**Por quê:** o professor diz que o formato servirá para um agente se autocorrigir. Com a regra, o arquivo e a linha, o import ofensor, o porquê e como consertar (e, no teste, a camada afetada com a subskill), o agente sabe o que corrigir e a quem delegar.
- **A:** a autocorreção é automática; o usuário só é consultado se as tentativas passarem de 10.
- **C:** o ESLint é o meio de rodar as regras customizadas; quem corrige, no passo 5, é o agente, delegando à subskill.
- **D:** o script é determinístico e só detecta e reporta; quem lê a saída e delega para a subskill é o agente, que interpreta o bloco.
**Conceito:** saída do script feita para o agente se autocorrigir

## 9. Testes verdes com gate vermelho
**Correta: C**
**Por quê:** o passo 5 roda depois que todas as camadas passam nos testes e define que a feature só está pronta com o gate verde. Os testes conferem o comportamento de cada arquivo; o gate confere as fronteiras entre camadas. Com exit 2, ainda há violação a corrigir.
- **A:** meia-verdade: as subskills garantem os testes do seu arquivo, mas o critério de pronto que o professor escreveu é o gate verde, e não só os testes.
- **B:** a rota é a camada de fora, e por isso é justamente a que tem regras: não pode importar nada de src/domain nem o repositório.
- **D:** o passo 5 corrige cada violação delegando à subskill da camada ofensora e repete o gate; não manda refazer a pipeline.
**Conceito:** critério de pronto: gate verde, além dos testes

## 10. O que o teste de edição mostra
**Correta: D**
**Por quê:** o teste foi só no nível de edição. O gate detectou as duas violações, devolveu exit 2 e o agente passou sozinho para a autocorreção, até o exit 0 aparecer no registro do shell. O professor reconhece que o exemplo é sucinto e que o ideal é continuar usando e gerar novas features para validar integralmente.
- **A:** o professor diz que não vai testar a pipeline por completo; o teste mostra a regra do CLAUDE.md agindo depois de uma edição, não as camadas sendo implementadas.
- **B:** o script é determinístico: a detecção não depende de quem fez a edição. O registro do shell mostra o check layers rodando com exit 2 e, depois, com exit 0.
- **C:** a aula não mostra o limite de 10 tentativas sendo atingido: o agente se autocorrigiu e o teste foi concluído. E os blocos por violação apareceram, sim, no teste.
**Conceito:** o que o teste de edição valida e o que falta
