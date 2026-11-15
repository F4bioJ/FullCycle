# Finalizando com regras de ouro

## Checklist mental de revisão

Regras de ouro em prompting funcionam como um checklist curto para validar a estrutura antes da execução. A utilidade desse checklist não está em impor um template rígido, mas em evitar omissões que aumentam ambiguidade, erro e variação indesejada na resposta. Se um item importante não aparece no prompt, essa ausência precisa ser intencional e justificada pelo caso de uso. O valor prático está em transformar estrutura em hábito de revisão, não em decorar uma fórmula fixa.

## Itens que normalmente precisam estar no prompt

A revisão final deve verificar se o prompt cobre os blocos essenciais já estabelecidos: persona e escopo, objetivo, entradas separadas e mínimas, formato de saída, critérios, tratamento de ambiguidades e erros e proibições necessárias. Retomando a estrutura anterior, a pergunta correta não é “meu prompt está bonito?”, mas “cada parte necessária para controlar o comportamento do modelo está explícita?”. Esse tipo de checagem reduz improviso do modelo e torna a resposta mais auditável. Quando o prompt falha, normalmente a falha aparece justamente em um desses pontos ausentes ou mal definidos.

## Proibições como mecanismo de controle

Proibições não são detalhe cosmético; elas delimitam o espaço de ação do modelo. Dizer o que não pode acontecer evita que a resposta viole formato, extrapole escopo ou introduza conteúdo que atrapalha consumo automático e revisão humana. Em prompts estruturados, restrições negativas funcionam como contenção de comportamento, especialmente quando o modelo tende a completar lacunas por inferência excessiva. Elas devem existir quando há risco real de desvio, não como lista arbitrária de comandos.

## Adaptação ao caso de uso

A estrutura é estável como referência, mas a implementação muda conforme o contexto operacional. Um prompt para processamento em batch, por exemplo, pode exigir entradas maiores, organização diferente dos dados e um formato de saída menos simples do que o usado em um caso pontual. Isso significa que “mínimo” e “adequado” são decisões relativas à tarefa, ao volume e ao modo de execução. O checklist continua válido, mas cada item precisa ser calibrado para o cenário real.

## Regras de ouro como heurística de projeto

A pergunta central antes de rodar um prompt é sempre a mesma: o que entra, o que sai, o que é permitido, o que é proibido e como o agente reconhece o contexto logo no início. Essa heurística consolida a estrutura já conhecida em uma nota mental reutilizável. Retomando o exemplo estruturado anterior, a camada nova não é criar outra seção, mas revisar se todas as seções essenciais estão cobertas antes de executar. Esse hábito acelera construção, melhora consistência e reduz retrabalho em prompts reutilizados.
