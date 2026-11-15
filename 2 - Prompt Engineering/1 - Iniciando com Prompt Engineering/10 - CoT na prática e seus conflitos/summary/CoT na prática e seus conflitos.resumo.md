# CoT na prática e seus conflitos — resumo

## O que testar

Quatro mensagens em dois pares: a mesma tarefa, com e sem Chain of Thought.

1. **Log, direto:** classificar a criticidade de `Disk Usage at 85%`, respondendo só `Info`, `Warning` ou `Error`.
2. **Log, com CoT:** o mesmo log, pedindo para pensar passo a passo no porquê e dar só a resposta final depois de `answer`.
3. **Strawberry, direto:** quantos "r" há em *strawberry*? Responder só com o número.
4. **Strawberry, com CoT:** explicar passo a passo, quebrando a palavra letra por letra em bullet points e apontando cada "r", e dar a resposta depois de `answer`.

O mesmo script roda em três modelos: GPT-3.5 Turbo, GPT-5 nano e GPT-4o.

## GPT-3.5 Turbo

- **Log:** `info` nas duas versões. Com CoT, ele explica que 85% de uso de disco é normal e não exige ação. A resposta é a mesma, mas agora dá para auditar o raciocínio. O custo subiu de 35 para 110 tokens.
- **Strawberry direto:** respondeu `2`, com 1 token de saída. Está errado: a palavra tem três "r".
- **Strawberry com CoT:** quebrou a palavra em bullet points e acertou: 3. Rodando de novo, a explicação mudou, mas a resposta continuou 3: a forma não fica sempre igual.

## GPT-5 nano (com reasoning)

O modelo demora mais, porque pensa antes de responder.

- **Strawberry com CoT:** gastou cerca de 1.300 tokens para dizer que há três "r".
- **Strawberry direto:** acertou (3) sem que se pedisse passo a passo, mas gastou 235 tokens. Por padrão, o modelo raciocina por dentro, e cada passo desse raciocínio conta como token de saída.
- **Log:** `warning` nas duas versões. Na versão com CoT, devolveu só `warning`, sem o passo a passo pedido. O professor supõe que, como o modelo já raciocina, ele respondeu direto. Para quem precisa auditar, raciocinar não é o mesmo que mostrar o raciocínio.

Somar um CoT explícito a um modelo que já raciocina pode custar muito para uma resposta trivial.

## GPT-4o

O GPT-4o responde mais rápido, porque por padrão não usa reasoning. Numa das chamadas, o consumo foi de 247 tokens, e o professor comenta que melhorou em relação ao nano.

- **Strawberry:** acertou (3).
- **Log com CoT:** gerou quatro passos, bem mais detalhados que os do 3.5 Turbo, e classificou como `warning`. A justificativa: em práticas operacionais, um disco em 85% pede gerenciar a capacidade do storage antes de chegar a um estado crítico.

## O que o experimento mostra

- **O critério muda com o modelo:** o mesmo log de disco em 85% foi `info` no 3.5 Turbo e `warning` no GPT-5 nano e no GPT-4o. Trocar de modelo muda a linha de raciocínio e pode mudar a classificação.
- **O CoT pode corrigir erros:** decompor a palavra fez o 3.5 Turbo acertar a contagem.
- **O CoT determina três coisas:** a qualidade, a latência (demora mais) e o custo (mais tokens).
- **A conclusão do resumo do professor:** usar CoT quando o processo importa e evitá-lo quando a resposta direta já atende com custo menor.
