# Identificando bugs na prática com ReAct — resumo

## O que testar

Um prompt ReAct para depurar uma API REST em Go. O professor avisa que o prompt é um exemplo, não está totalmente ajustado, mas serve para abrir a mente para resolver problemas do dia a dia.

O prompt tem quatro partes:

1. **Papel:** você é um desenvolvedor back-end Go que está depurando uma API REST.
2. **Formato ReAct:** alternar entre *Thought* (a linha de pensamento), *Action* (um passo concreto a fazer, checar ou executar) e, depois de cada ação, uma *Observation* do que ela revelou. No fim, uma *Final Answer* com a recomendação de correção.
3. **Restrição contra alucinação:** "do not fabricate information that is not provided in the context". Por exemplo, se o contexto não traz logs, não usar logs de erro no raciocínio.
4. **Contexto:** o usuário relata que `POST /products` sempre retorna erro 500. Junto vai o código do handler, que faz o decode do JSON para a struct `Product`, prepara o `INSERT`, executa no banco e retorna `201 Created`. A struct tem id, nome, descrição, `price` e estoque.

## O que observar

A resposta percorre o handler etapa por etapa, eliminando hipóteses:

- **Decode do JSON:** se falhasse, o handler devolveria 400, não 500. Hipótese descartada.
- **Preparação da query:** uma falha ali poderia derrubar o programa e contribuir para um 500, mas não explica um 500 que acontece sempre.
- **Execução da query:** revisando os tipos passados ao `Exec`, o modelo nota que `price` é `string` na struct, enquanto o banco normalmente espera um número (`float64` ou decimal), e aponta esse descompasso de tipo como provável causa da falha na execução.

**Final Answer:** mudar `price` de `string` para `float64`. O professor diz que esse é exatamente o problema do código dele, em que `price` está como `string`. Nada foi executado na aula: a última observação, de que o endpoint "pode não mais retornar" 500, é uma previsão do modelo, não o resultado de um teste. Pelo resumo do professor, se o banco exigir precisão monetária mais rígida, outro tipo compatível também serviria; o essencial é eliminar o descompasso.

## O que o experimento mostra

- **O ReAct expõe a trilha de decisão.** O valor não está só em acertar: dá para ver por que cada hipótese caiu e auditar o caminho em vez de aceitar um palpite.
- **O código de status filtra hipóteses.** Separar falha de entrada (400) de falha interna (500) leva a investigação para a camada do banco.
- **A restrição de contexto protege o diagnóstico.** Sem logs inventados, a conclusão se apoia só no código fornecido.
- **Mais controle que a IDE.** As IDEs já procuram erros, mas um prompt específico, ou um conjunto de prompts prontos, dá mais controle sobre a análise.

A próxima aula traz outro exemplo de ReAct, fora da programação.
