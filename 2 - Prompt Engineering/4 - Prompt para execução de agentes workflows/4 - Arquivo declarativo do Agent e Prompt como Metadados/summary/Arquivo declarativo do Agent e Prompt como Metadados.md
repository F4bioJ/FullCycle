# Arquivo declarativo do Agent e Prompt como Metadados

## Prompt encapsulado como agente

Um prompt isolado descreve comportamento; um agente encapsulado transforma esse comportamento em um artefato operacional descobrível pela ferramenta. Retomando o auditor de dependências já definido anteriormente, a novidade aqui é que ele deixa de ser apenas texto colado em uma execução manual e passa a existir como uma unidade registrada, com nome, descrição e regras de ativação. Isso importa porque o sistema consegue decidir quando reutilizar esse especialista sem depender de o usuário reescrever toda a instrução a cada chamada.

## Metadados declarativos do agente

Metadados declarativos são campos externos ao prompt interno que registram identidade e condições de uso do agente. Nesse caso, o arquivo do agente inclui informações como nome, descrição, modelo e atributos visuais, formando uma camada de registro que a ferramenta consulta antes da execução. Essa separação permite manter o comportamento técnico do auditor dentro do prompt e, ao mesmo tempo, expor ao sistema quando e por que ele deve ser selecionado.

## Descrição do agente

A descrição do agente funciona como um contrato semântico de descoberta. Em vez de instruir detalhadamente como auditar dependências — algo que já está no prompt interno — ela informa em quais tipos de problema esse agente é especialista, como análise de saúde, segurança e status de dependências. Uma descrição bem escrita reduz ambiguidade na seleção do agente, porque aproxima a intenção do usuário das capacidades registradas no artefato.

## Subagente e especialização

Um subagente é um agente especializado que pode ser chamado por outro agente mais geral durante a execução. No cenário mostrado, o agente principal de codificação delega a auditoria para o `Dependency Auditor` quando detecta uma necessidade compatível com esse domínio. Essa divisão melhora previsibilidade, porque cada agente opera com escopo mais estreito e produz saídas mais consistentes do que um agente genérico tentando resolver tudo sozinho.

## Invocação contextual de agente

A invocação contextual acontece quando o sistema escolhe um agente com base no pedido atual, e não por chamada rígida e explícita em todos os casos. O mecanismo observa o contexto da solicitação, compara com os metadados e decide se aquele especialista deve entrar no fluxo. Isso é especialmente útil em workflows, porque o usuário pode pedir uma verificação em linguagem natural e ainda assim acionar o agente correto.

## Exemplos de trigger

Exemplos de trigger são amostras de situações que ensinam ao sistema quando o agente deve ser ativado. Eles não servem para executar a tarefa em si, mas para mapear padrões de contexto, pedido do usuário e resposta esperada de encaminhamento. Quando a ativação falha, um dos primeiros pontos a revisar é se os exemplos realmente representam as formas reais pelas quais o usuário pede aquela análise.

## Uso de XML nos exemplos

O XML aparece nos exemplos como uma estrutura explícita para separar contexto, fala do usuário, resposta do assistente e comentários de roteamento. Essa organização torna o padrão de ativação mais legível para a ferramenta, porque cada parte da interação fica marcada por tags ou blocos semanticamente distintos. O valor do XML aqui não está no formato em si, mas na clareza estrutural que ele oferece para descrever gatilhos de uso.

## Prompt como metadado operacional

O prompt continua existindo mesmo quando o agente ganha uma camada declarativa externa. A diferença é que agora ele passa a conviver com metadados operacionais que orientam descoberta, seleção e execução dentro da ferramenta. Retomando a estrutura do auditor já conhecida, `inputs`, `outputs` e workflow permanecem no núcleo do agente; o que muda é que esse núcleo agora pode ser encontrado e acionado automaticamente.

## Passo a passo de registro e ativação

O fluxo prático tem duas camadas. Primeiro, registra-se o agente em um arquivo declarativo com nome, descrição, exemplos de uso e demais metadados; depois, abaixo dessa camada, mantém-se o prompt interno especializado que já define comportamento, entradas e formato de saída. Quando o usuário faz um pedido como “verifique se nossas dependências estão atualizadas e seguras antes de um major release”, a ferramenta compara esse pedido com os exemplos de trigger, identifica aderência ao `Dependency Auditor` e delega a execução ao subagente.

## Ajuste de ativação por exemplos reais

Se o agente não for acionado quando deveria, o problema nem sempre está no prompt interno; muitas vezes está na camada de descoberta. A correção consiste em revisar a formulação da chamada real e adicioná-la como exemplo de trigger, aproximando o registro declarativo da linguagem que os usuários realmente usam. Esse ajuste reduz falsos negativos de ativação e torna o workflow mais confiável sem alterar a lógica central da auditoria.
