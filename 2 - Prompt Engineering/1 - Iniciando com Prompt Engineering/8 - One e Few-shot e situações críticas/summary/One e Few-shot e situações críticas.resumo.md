# One e Few-shot e situações críticas — resumo

## Do zero-shot ao one-shot e few-shot

Na aula anterior, o zero-shot pedia a tarefa sem nenhum exemplo. No one-shot e no few-shot, o prompt traz um ou poucos exemplos de entrada e saída, para o modelo pegar o padrão esperado. Segundo o resumo do professor, a instrução deixa de ser só declarativa: os exemplos viram uma referência do que fazer. O ganho é mais controle sobre a forma da saída. O custo é depender da qualidade e da clareza dos exemplos. O resumo também lembra que isso não "treina" o modelo no sentido tradicional: os exemplos só condicionam a resposta naquele contexto.

## Quando usar

- ensinar a formatar um e-mail;
- criar um caso de teste adicional a partir de um exemplo;
- mostrar o resumo de uma notícia e pedir outro semelhante;
- padronizar o estilo da documentação de uma API;
- criar perguntas no estilo de um quizz de estudo.

Nesses casos, o formato importa tanto quanto o conteúdo. O modelo precisa reproduzir uma transformação que viu, e o resultado depende de quanto o exemplo representa bem a tarefa.

## Limitações

- **Qualidade do exemplo:** o resultado depende muito dele.
- **Variações:** os exemplos não cobrem todas as variações possíveis, e a tarefa pode ser mais ou menos complexa.
- **Custo:** cada exemplo acrescenta tokens ao prompt. O resumo do professor acrescenta que os exemplos também ocupam a janela de contexto e podem aumentar a latência; em alto volume, esse custo pesa na viabilidade da solução.
- **Viés:** exemplos rígidos demais fazem o modelo responder sempre do mesmo jeito diante de algo parecido, seguindo os exemplos à risca. Ele fica menos criativo, imita demais e não inova, até no tipo de comentário que faz. O resultado é muita repetição. Quando se quer uma saída menos uniforme, como numa redação, essa repetição pode atrapalhar. O professor menciona a temperatura nesse contexto.

## O experimento: quatro mensagens

O professor monta um script Python, rodado no GPT-3.5 Turbo, com quatro mensagens:

1. **One-shot de formato:** "Qual é a capital da França? Paris" e depois "Qual é a capital do Brasil?".
2. **One-shot de classificação:** `DatabaseConnectionLost at 10h34` → `error`, e depois "classifique `DiskUsage at 85%`".
3. **Few-shot com quatro exemplos:** classificar a criticidade de logs. Conexão com o banco perdida → error; disco em 85% → warning; tempo de resposta do banco acima do threshold → warning; usuário logado com sucesso → info. Depois, classificar "API Response Time is above the threshold".
4. **Few-shot com 15 exemplos:** os mesmos tipos de log e mais vários, com ambiguidades colocadas de propósito. Disco em 85% é warning, mas disco em 90% é error. Disco baixo é warning, mas disco com 5% livres é error. Memória em 75% e latência acima do threshold são warning. "Connection timeout, retrying" poderia ser warning ou error, conforme a aplicação. No fim, pede para classificar "CPU usage at 95%".

## Resultados

- **Mensagem 1:** respondeu só "Brasília". O exemplo ensinou também a forma da resposta: curta, sem explicação.
- **Mensagem 2:** respondeu `status`, uma saída que não fazia sentido. Um único exemplo não bastou para o modelo entender o critério, ainda mais com o GPT-3.5 Turbo.
- **Mensagem 3:** respondeu `warning`, provavelmente por analogia com o exemplo do tempo de resposta acima do threshold.
- **Mensagem 4:** com o mesmo prompt, a primeira execução deu `warning`. Ao rodar de novo, deu `error`, depois `error` de novo e depois `warning`. Segundo o professor, nas mensagens com menos exemplos a resposta volta sempre `warning`, porque ali um exemplo deixa claro que passar do threshold é warning.

## Mais exemplos não é melhor resposta

Muitos exemplos podem gerar mais ambiguidade e mais margem de interpretação, e a IA dá respostas inesperadas. Com exemplos parecidos e rótulos diferentes, ela perde a linha de raciocínio e responde cada hora de um jeito. Os dois extremos falham: o one-shot da mensagem 2 deu `status`, e os 15 exemplos da mensagem 4 deram respostas que mudam a cada execução. Para o professor, isso foi aprendido "na dor", e depois ele viu que quem estuda o assunto já sabia.

## Situações críticas

Imagine que essa classificação decida se o sistema abre uma issue no GitHub: se for erro, abre; se não for, não abre. Com a saída oscilando entre `warning` e `error` para o mesmo log, a automação passa a abrir issues ao acaso, só porque o prompt tem exemplos demais. O resumo do professor conclui que, em cenários sensíveis, o objetivo não é ter muitos exemplos, e sim ter exemplos sem conflito entre si. Um conjunto pequeno, claro e consistente costuma ser mais seguro do que uma coleção grande com rótulos ambíguos.
