# CoT com Self-consistency — resumo

## O que é self-consistency

Self-consistency (autoconsistência) é um mecanismo usado junto com o Chain of Thought. Um único raciocínio pode estar errado e levar a uma resposta errada. Para ganhar consistência, o modelo raciocina várias vezes sobre a mesma pergunta e escolhe a resposta mais consistente entre as que ele mesmo gerou. Se houver respostas diferentes, fica a da maioria. O exemplo do professor é o de uma prova de múltipla escolha: o modelo às vezes marca A e às vezes marca B. Com self-consistency, ele elabora a linha de raciocínio várias vezes e fica com a resposta que mais aparece.

## Para que serve

Confirmar cálculos, validar hipóteses diferentes, classificar sentimento, revisar a interpretação de um texto e decidir numa questão de múltipla escolha. Para o professor, a técnica é útil principalmente na dúvida sobre uma decisão técnica, um cálculo ou um algoritmo.

## Limitações

- gasta mais tokens;
- pode ser mais lento;
- nem sempre converge para a resposta correta;
- agrega pouco valor em tarefas fáceis;
- pode repetir respostas redundantes.

## O experimento: problema N+1

A pergunta é sobre um endpoint que busca todos os usuários e, num loop, busca os posts de cada um: quantas queries são feitas para N usuários? A resposta certa é N+1, ou seja, uma query para a lista mais uma por usuário. O prompt pede três linhas de raciocínio diferentes, passo a passo. No fim, o modelo deve resumir as respostas e escolher a mais consistente, ignorando outliers (respostas espúrias, muito diferentes das outras). Também dá para pedir mais caminhos, como 10 ou 20. Há ainda uma condição: se as três respostas forem diferentes, o modelo deve dizer que não encontrou uma resposta consistente. O professor admite que conseguiu reproduzir esse caso pouquíssimas vezes.

## Resultados

**GPT-3.5 Turbo:**
- **1ª execução:** o primeiro caminho deu N (esqueceu a query da lista). O segundo deu N+1. O terceiro supôs uma otimização que o código não tinha e chegou a duas queries. As três respostas foram diferentes, mas o modelo não seguiu a condição e respondeu N, que está errado. Ele chegou a gerar a hipótese correta.
- **2ª execução:** os três caminhos deram N+1, e a resposta foi N+1.
- **3ª execução:** N, N e N+1. O modelo escolheu N pela maioria. Foi consistente, mas errado.

**GPT-4o:** nas duas execuções, os três caminhos deram N+1.

## O que fica

A técnica é pedir vários caminhos e escolher pela consistência entre eles. Como o resumo do professor resume, consistência é sinal de estabilidade, não prova de verdade: se o erro se repete na maioria dos caminhos, a votação consolida o erro. E o modelo muda o resultado. O 3.5 Turbo variou entre execuções, e o GPT-4o convergiu para N+1.
