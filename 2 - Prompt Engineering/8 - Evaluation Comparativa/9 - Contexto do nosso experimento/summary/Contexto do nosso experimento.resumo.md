# Contexto do nosso experimento

## O plano do experimento

Depois de apresentar o pairwise evaluator na aula anterior, o professor monta um exemplo para mostrar a comparação na prática. A ideia tem duas etapas. Primeiro, dois prompts são carregados no LangSmith, o evaluation roda e o juiz compara as respostas para dizer quem ganhou, A ou B. Depois, um dos prompts é alterado (o script `update prompt` versão 2) e tudo roda de novo, para ver se a mudança melhorou o resultado. Assim, editar um prompt deixa de ser tentativa solta e vira uma hipótese testada no mesmo desenho de experimento.

## Prompt A e prompt B não são teste A/B

Quando o professor fala em "A, B", são só os rótulos das duas variantes: prompt A e prompt B. Ele avisa que isso não é um teste A/B, que normalmente acontece em produção. Aqui a comparação é feita num experimento controlado, sobre o dataset, e diz qual saída o juiz preferiu segundo um critério, não qual impacto a mudança teria em usuários reais.

## Preparação no LangSmith

O exemplo tem um dataset, funções auxiliares (helpers), um arquivo `run` que executa o processo e o script de atualização do prompt. O primeiro passo é subir o dataset (o professor sobe 10 exemplos). Em seguida, ele cria os dois prompts. Eles poderiam rodar só na máquina local, mas o professor mostra que também dá para criá-los no LangSmith.

## Dois prompts com focos diferentes

Os dois prompts recebem o mesmo código e fazem code review, mas com focos diferentes:

- um é focado em **performance**: procura problemas como N+1, memory leak, blocking e missing timeouts;
- o outro é focado em **segurança**: valida os findings pela perspectiva de vulnerabilidades.

Como a entrada é a mesma, a diferença entre os reviews vem da instrução de cada prompt, e é isso que o experimento compara.

## O juiz: LLM as a judge

Quem decide é um juiz, com a técnica de LLM as a judge: um prompt próprio, o pairwise judge. Ele recebe três entradas: o código-fonte (que vem do dataset), a resposta A e a resposta B. No prompt do juiz, o papel é de um técnico imparcial que verifica dois code reviews. A resposta A é o review do Security Expert e a resposta B, o do Performance Expert. Note que a ordem em que o professor mostrou os prompts (performance primeiro) não é a ordem das letras.

## As regras de decisão e o empate

O juiz deve fazer uma verificação objetiva: olhar o código real e verificar o impacto dos problemas apontados. As regras são:

- se encontrar pontos críticos reais de vulnerabilidade, escolhe **A**;
- se encontrar pontos críticos reais de performance, escolhe **B**;
- se os dois forem encontrados igualmente, declara **empate** (tie).

A resposta do juiz pode ser, portanto, A, B ou empate. O empate é um resultado legítimo: evita forçar um vencedor quando as duas respostas têm peso equivalente. Para o professor, esse juiz é o ponto mais importante do experimento; a execução fica para o vídeo seguinte.
