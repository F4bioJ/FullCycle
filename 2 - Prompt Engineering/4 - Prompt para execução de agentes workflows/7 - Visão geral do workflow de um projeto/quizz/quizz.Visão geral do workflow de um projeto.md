# Quizz — Visão geral do workflow de um projeto

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 7
**Base:** material da aula

---

## 1. No workflow, o agente de arquitetura nota, no meio da análise, um detalhe que seria útil ao agente de dependências, mas não o coloca no relatório. Pelo que a aula explica sobre subagentes, o agente de dependências terá acesso a esse detalhe?
- A) Sim, porque os dois são gerados pelo mesmo agente principal e trabalham dentro da janela de contexto dele.
- B) Sim, porque o agente principal enxerga o histórico dos subagentes e repassa a eles o que for relevante.
- C) Não, porque cada agente tem a própria janela de contexto e só o que sai como output chega ao outro.
- D) Não, porque o orquestrador guarda no manifesto o histórico dos agentes, mas só o libera ao fim do workflow.

## 2. Numa sessão longa, a janela de contexto do Claude Code enche. Pelo que a aula descreve, o que a ferramenta faz por padrão e qual é o custo disso?
- A) Compacta o histórico, perdendo parte da informação, mas tenta preservar o que veio no início, como a solicitação inicial.
- B) Descarta as mensagens mais antigas para abrir espaço, incluindo a solicitação inicial, e mantém o trecho mais recente.
- C) Passa a conversa a um subagente com janela nova, que recebe uma cópia do histórico inteiro e continua o trabalho.
- D) Compacta o histórico sem perda de detalhe, porque o resumo gerado guarda as instruções anteriores na íntegra.

## 3. Um agente consulta um sistema, pega resultados financeiros, faz um cálculo e segue para o passo seguinte, e a execução cai no meio. Pela aula, qual é o papel do estado nesse cenário?
- A) Guardar a conversa completa de cada agente, como um log para auditoria do que o modelo respondeu em cada passo.
- B) Fazer o agente seguir os passos na ordem exata do prompt, sem que o modelo pule ou reordene alguma etapa.
- C) Permitir que os agentes do fluxo leiam a janela de contexto uns dos outros enquanto a execução está em andamento.
- D) Registrar em que ponto a execução está, como um snapshot de onde parou, para saber de onde continuar.

## 4. O workflow parou depois de gerar os relatórios de arquitetura e de dependências e 3 dos 7 relatórios de componentes. Você roda de novo. Pela aula, o que permite continuar de onde parou?
- A) A janela de contexto do agente principal, que foi compactada mas ainda guarda quais relatórios já saíram.
- B) O manifesto mantido pelo orquestrador, que registra o tracking das tarefas que os agentes já concluíram.
- C) O `README.md`, que o orquestrador atualiza como índice a cada relatório que um agente termina de gerar.
- D) O relatório de arquitetura, que lista os componentes do sistema e marca quais deles já foram analisados.

## 5. Uma equipe montou o workflow com orquestrador e espera que, com o mesmo prompt, cada execução siga os mesmos passos, linha a linha. O que a aula diz sobre essa expectativa?
- A) Não se sustenta: a IA é probabilística, o orquestrador aumenta a confiabilidade, mas não garante exatidão.
- B) Se sustenta: com orquestrador e manifesto, cada passo fica registrado e o fluxo se torna determinístico.
- C) Se sustenta em parte: o desvio vem dos agentes em paralelo, e rodar tudo em sequência garante a exatidão.
- D) Se sustenta nos passos: o mesmo prompt fixa a sequência de etapas, e o que varia é só o texto dos relatórios.

## 6. No workflow, duas análises começam em paralelo logo após o setup, mas a análise dos componentes não começa com elas. Por quê?
- A) Porque cada componente é analisado a partir do relatório de dependências, que precisa estar pronto antes.
- B) Porque o Claude Code admite dois subagentes por vez, e a análise de componentes espera uma vaga livre.
- C) Porque a lista de componentes que serão analisados sai do relatório de arquitetura, que precisa estar pronto.
- D) Porque o orquestrador precisa gerar antes o `README.md`, onde fica a lista dos componentes do sistema.

## 7. Você vai reaproveitar o workflow num projeto de outro tipo. Pelo que a aula diz do orquestrador, o que tende a acontecer com o prompt dele?
- A) Precisa ser reescrito do zero, porque é o orquestrador que concentra o conhecimento técnico de cada análise.
- B) Fica como está, sem ajuste, porque um prompt genérico não sofre influência das especificidades do projeto.
- C) É trocado pelo prompt de um dos especialistas, que já tem uma estrutura pronta para acompanhar tarefas.
- D) Mantém a ideia principal, com ajustes pontuais, porque seu foco é o tracking do fluxo e não o domínio.

## 8. Sobre as estruturas dos prompts usados nesse workflow, qual afirmação está INCORRETA?
- A) Os prompts do agente arquitetural, do auditor de dependências e da análise de componentes seguem a mesma estrutura.
- B) O comando, o orquestrador e os especialistas seguem a mesma estrutura, e o que muda entre eles é só o papel.
- C) O prompt do orquestrador usa uma estrutura diferente da usada nos prompts dos agentes especialistas.
- D) As estruturas são templates para não partir do zero, e o aluno tem liberdade para alterá-las no próprio projeto.

## 9. Você quer montar esse workflow numa ferramenta de IA que não tem o recurso de comandos. Pelo que a aula explica sobre comandos, qual é o caminho?
- A) Transformar o comando em um subagente, porque é o subagente que tem janela própria para rodar o workflow.
- B) Trocar o comando por um framework como o LangGraph, porque sem comandos não há como descrever o fluxo.
- C) Passar ao agente principal o prompt do comando, porque o comando é um prompt que traz o fluxo de trabalho.
- D) Desistir do paralelismo, porque são os comandos que permitem disparar vários agentes ao mesmo tempo.

## 10. No fechamento do workflow, como é produzido o `README.md` e para que ele serve?
- A) O orquestrador mapeia os relatórios gerados e monta o `README.md` com a lista deles, para ver como está o sistema.
- B) O agente de arquitetura, que tem a lista de componentes, consolida no `README.md` o conteúdo dos outros relatórios.
- C) O agente principal lê na própria janela de contexto o texto de cada relatório e escreve no `README.md` um resumo consolidado.
- D) Cada agente de componente acrescenta ao `README.md` a sua seção ao terminar, e o arquivo vira o relatório final consolidado.
