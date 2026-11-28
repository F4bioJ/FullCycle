# Gabarito — Orquestração com script deterministico

## 1. Pipeline por inferência que às vezes sai do padrão: qual reforço?
**Correta: B**
**Por quê:** o professor lembra que a IA não é determinística: uma pipeline feita só com Markdown e inferência pode seguir o fluxo numa execução e sair dele em outra. A proposta da aula é uma trava determinística via script, que confere o fluxo do mesmo jeito em toda execução e, se houver quebra, aciona a autocorreção.
- **A:** mais instruções e exemplos podem reduzir o desvio, mas continuam dependendo da inferência, que é justamente a fonte da variação.
- **C:** um modelo mais forte continua não determinístico; a aula não troca o modelo, acrescenta uma checagem que não depende dele.
- **D:** a revisão pelo próprio agente também é inferência: pode deixar passar a mesma falha. O ponto da aula é a checagem por script.
**Conceito:** trava determinística sobre a pipeline não determinística

## 2. Qual dependência passaria pelo gate
**Correta: D**
**Por quê:** na aula, o serviço (o caso de uso) orquestra o domínio e o repositório: acessa o domínio, cria o que precisa e manda o resultado ao repositório. Essa dependência segue a regra geral de que as dependências sempre apontam para dentro.
- **A:** a regra principal da aula é que a rota (a entrada) não pode importar nada do domínio; o professor chama isso de quebra arquitetural.
- **B:** outra regra ditada é que a rota não importa repositório: ela chama o caso de uso.
- **C:** a regra diz que o domínio não importa nada para fora (na aula, a exceção é a dependência de validação, o Zod). Um utilitário de fora do domínio seria barrado.
**Conceito:** regra de dependências (apontam para dentro)

## 3. Script que só diz "FALHOU": o que se perde
**Correta: A**
**Por quê:** o professor pede um bloco por violação com a regra, o arquivo e a linha, o import ofensor, o porquê e como consertar, porque essa saída serve para um agente se autocorrigir. Sem isso, o agente sabe que falhou, mas não sabe o que mudar nem a qual subskill delegar.
- **B:** o código de saída diz que há erro (exit 2), mas não diz onde nem qual regra foi violada; a aula descreve a violação justamente para o agente não precisar adivinhar.
- **C:** o script é determinístico por conferir os imports do mesmo jeito toda vez, não pelo nível de detalhe da saída. O detalhe serve à autocorreção.
- **D:** a autocorreção é automática; o usuário só é consultado depois de um limite de tentativas. O bloco é feito para o agente ler.
**Conceito:** saída do script feita para o agente se autocorrigir

## 4. Quem corrige a violação do domínio
**Correta: C**
**Por quê:** o passo 5 da skill manda autocorrigir cada violação delegando para a subskill da camada ofensora, isto é, a do arquivo que fez o import proibido. Aqui, o import errado está no domínio.
- **A:** a camada importada não fez nada de errado; o import proibido está no arquivo do domínio, que não deve importar nada para fora.
- **B:** o orquestrador roda o gate, mas, como na aula anterior, não escreve código: delega. O passo 5 mantém essa delegação.
- **D:** o gate roda no fim da pipeline, mas a delegação segue a camada ofensora, não a ordem da pipeline nem a última camada implementada.
**Conceito:** delegar a correção à subskill da camada ofensora

## 5. A violação que não sai
**Correta: D**
**Por quê:** o professor pensa em um max retry, mas, para o exemplo, escreve que o processo se repete até o exit ser zero e que, se as tentativas passarem de um limite (10, na aula), o agente consulta o usuário (com a tool AskUserQuestion). A tarefa não fica pronta com o gate vermelho.
- **A:** a skill diz que a feature só está pronta com o gate verde; passar do limite leva a consultar o usuário, não a entregar.
- **B:** meia-verdade: ele repete até o exit ser zero, mas acrescenta o limite de tentativas, depois do qual chama o usuário.
- **C:** o passo 5 manda delegar à subskill da camada ofensora; não há regra para o orquestrador abandonar a delegação. Depois do limite, quem entra é o usuário.
**Conceito:** loop de autocorreção com limite e consulta ao usuário

## 6. Testes verdes com gate vermelho
**Correta: A**
**Por quê:** o passo 5 roda depois que as camadas passam nos testes e define que a feature só está pronta com o gate verde. Os testes conferem o comportamento de cada parte; o gate confere as fronteiras entre camadas. Com o gate vermelho, ainda há violação a corrigir.
- **B:** a skill não deixa violação para depois: com exit 2, entra a autocorreção.
- **C:** a camada de fora é justamente a que tem regras na aula: a rota não pode importar o domínio nem o repositório.
- **D:** o passo 5 corrige cada violação na subskill da camada ofensora e roda o gate de novo; não manda refazer a pipeline.
**Conceito:** critério de pronto: gate verde, além dos testes

## 7. O que o exit 0 não garante
**Correta: C**
**Por quê:** o script resolve a camada de cada arquivo pelo path, confere os imports e barra as fronteiras proibidas definidas nele. Ele não testa regra de negócio; isso fica com os testes de cada camada.
- **A:** é exatamente o que o exit 0 atesta: os imports não cruzaram as fronteiras que o script define.
- **B:** o loop repete até o exit ser zero; com o exit 0, ele termina.
- **D:** o gate roda depois que as camadas passam nos testes, e, para o professor, exit 0 é quando a tarefa pode ser classificada como pronta.
**Conceito:** o que o gate confere (fronteiras, não regras de negócio)

## 8. Onde pôr a regra para valer fora da skill
**Correta: B**
**Por quê:** o passo 5 só roda quando a skill é usada. Por isso o professor põe a regra no CLAUDE.md, que é obrigatoriamente lido a todo momento: ao concluir qualquer feature ou ao terminar de editar qualquer arquivo de `src`, o último passo obrigatório é rodar o gate.
- **A:** no início só entra o frontmatter (nível 1), como no progressive disclosure; o corpo, com o passo do gate, só é lido quando a skill é acionada.
- **C:** a description serve para decidir se a skill é acionada; ela não manda rodar nada a cada edição.
- **D:** na aula, o gate roda "automaticamente" depois da edição porque o agente segue a regra do CLAUDE.md e o executa via Bash, e não por um gatilho disparado ao salvar o arquivo.
**Conceito:** regra do gate no CLAUDE.md, lido sempre

## 9. CLAUDE.md e AGENTS.md sem duas cópias
**Correta: A**
**Por quê:** o professor explica que o CLAUDE.md é específico do Claude Code, que dá para usar o AGENTS.md e também deixá-lo só como referência ao CLAUDE.md: "não tem nenhum tipo de problema, ele consegue ler sem problema". Foi o que ele fez: o AGENTS.md saiu como um link para o CLAUDE.md, onde está a regra.
- **B:** a aula não apaga o CLAUDE.md; ele é o arquivo específico do Claude Code, e é nele que a regra foi escrita.
- **C:** a description decide o acionamento da skill; não garante que o corpo nem o gate rodem, e não substitui os arquivos lidos a todo momento.
- **D:** segundo o professor, o AGENTS.md que só referencia o CLAUDE.md é lido sem problema, então a cópia não é necessária.
**Conceito:** CLAUDE.md e AGENTS.md como link
