# Quizz — Conceitos básicos do ReAct

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 14
**Base:** material da aula

---

## 1. Um agente precisa listar os repositórios públicos de um usuário e tem acesso a uma ferramenta do GitHub. Seguindo o ReAct, o que acontece depois que ele chama essa ferramenta?
- A) O modelo gera várias cadeias de raciocínio sobre o retorno e fica com a conclusão que aparecer com mais frequência.
- B) O modelo monta um esqueleto de tópicos a partir do retorno e depois expande cada tópico na resposta final.
- C) O retorno encerra o ciclo, porque a ação já foi definida no raciocínio inicial e resta apenas formatar a resposta.
- D) O retorno vira uma observação, e o modelo raciocina sobre ela para decidir a próxima ação ou concluir a tarefa.

## 2. Um time quer usar um prompt ReAct na triagem automática de 2 milhões de tickets de suporte por dia, consultando a base interna a cada ticket. Qual avaliação está de acordo com a aula?
- A) Boa escolha: como o loop verifica cada passo, o volume alto dilui o custo dos tokens gastos nas etapas intermediárias.
- B) Má escolha para essa escala: cada ticket passa por ciclos longos e verbosos, gastando muitos tokens e tempo.
- C) Má escolha: o ReAct depende de um framework de agentes, como o LangChain, e escrito num prompt o modelo não segue o loop.
- D) Boa escolha se o modelo já trabalha com ReAct por dentro, porque nesse caso o prompt não acrescenta nenhum token.

## 3. No log de um agente de depuração aparece: "Pensamento: vou rodar os testes. Observação: os 42 testes passaram." Porém nenhuma ferramenta de testes foi registrada no sistema. Por que isso é grave num agente ReAct?
- A) Mostra que faltou um ponto de stop, que teria obrigado o agente a rodar os testes de verdade antes de encerrar o loop.
- B) É uma falha própria do ReAct: num prompt de Chain of Thought simples, o modelo não inventaria um resultado desses.
- C) A observação inventada vira base do próximo raciocínio, então as decisões seguintes se apoiam num estado falso.
- D) É um caso de verbosidade: o modelo escreveu passos além do necessário, mas a conclusão a que chegou continua valendo.
