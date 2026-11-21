# Alucinação e sem utilidade

## Prompt que inventa vulnerabilidades fictícias

Um prompt pode falhar não por omitir análise, mas por fabricar problemas inexistentes no código. Retomando o cenário de revisão de código, isso acontece quando a instrução manda o modelo assumir vulnerabilidades como SQL Injection, Buffer Overflow e Memory Leaks mesmo sem evidência observável. O efeito principal aparece em faithfulness, que despenca porque a resposta deixa de estar ancorada no artefato analisado. A queda simultânea de helpfulness, coherence e detail mostra que alucinação não é só erro factual: ela degrada a utilidade global da revisão.

## Como configurar o caso de alucinação

O experimento usa evaluators sem referência para julgar a própria saída produzida, com foco em faithfulness, helpfulness, coherence e detail. A decisão técnica aqui é simples: manter o pipeline de avaliação e degradar apenas o prompt, para que a diferença de score seja atribuída ao comportamento induzido. O prompt ruim explicita a falha ao ordenar que o modelo invente findings e produza um summary dramático. Isso cria um caso extremo útil para validar se o evaluator consegue detectar invenção de conteúdo técnico.

## Leitura dos scores de alucinação

Quando o resultado mostra coherence em 0.32, detail em 0.33, helpfulness em 0.21 e faithfulness em 0.14, o padrão importa mais do que um número isolado. O menor score fica justamente na dimensão que deveria punir invenção, confirmando que o evaluator está sensível ao tipo de erro esperado. As outras notas também caem porque uma revisão baseada em fatos fictícios perde organização, valor prático e qualidade descritiva. Esse conjunto de métricas caracteriza um prompt que responde bastante, mas responde sobre coisas que não existem.

## Prompt preguiçoso com resposta mínima e genérica

Outro modo de falhar é não inventar nada e, ainda assim, não entregar valor algum. Um prompt preguiçoso força o modelo a responder com uma frase genérica, findings vazios e um summary mínimo, produzindo uma saída formalmente curta, porém operacionalmente inútil. O problema central aqui não é fidelidade ao código, e sim ausência de análise acionável. Em revisão de código, isso destrói a capacidade da resposta de orientar correção, priorização ou investigação técnica.

## Como configurar o caso sem utilidade

Nesse cenário, a avaliação observa helpfulness, detail, depth, coherence e conciseness sem usar referência. A escolha desses critérios permite separar uma resposta curta e objetiva de uma resposta curta e vazia, porque concisão sozinha não significa qualidade. O prompt ruim manda explicitamente não fornecer detalhes, findings ou análise real e ser o mínimo útil possível. Essa formulação cria um caso extremo de inutilidade, diferente do caso de alucinação, embora ambos sejam prompts ruins.

## Leitura dos scores de inutilidade

Os resultados de bad not helpful mostram coherence em 0.4, detail em 0.12, conciseness em 0.13, helpfulness em 0.12 e depth em 0.12. O traço dominante não é invenção de fatos, mas empobrecimento da resposta: quase não há conteúdo, quase não há profundidade e quase não há utilidade. A coherence fica um pouco menos degradada porque uma frase genérica ainda pode ser internamente consistente, mesmo sem ajudar em nada. Esse padrão diferencia um prompt que alucina de um prompt que simplesmente não trabalha.

## Contraste entre alucinação e inutilidade

Alucinação e inutilidade são falhas distintas e exigem leitura diagnóstica diferente das métricas. No primeiro caso, a resposta parece ativa demais e inventa achados; no segundo, ela se retrai a ponto de não entregar análise real. Faithfulness é o sinal mais forte para detectar invenção ancorada fora do código, enquanto helpfulness, detail e depth ajudam a identificar respostas vazias ou preguiçosas. O valor da avaliação está justamente em transformar esses comportamentos em padrões observáveis e comparáveis.

## Execução paralela e comparabilidade

Rodar os dois casos em paralelo não muda o método de avaliação, mas acelera a comparação entre padrões de falha. Como os experimentos mantêm a mesma tarefa e alteram principalmente o prompt, a leitura dos scores fica mais confiável para fins de engenharia. O dashboard do LangSmith passa a funcionar como instrumento de diagnóstico, não apenas como painel de notas. A consequência prática é saber se o prompt está errando por inventar demais ou por entregar de menos.

## Generalização do processo

O procedimento não depende de uma ferramenta, provider ou modelo específico. O ponto transferível é o método: definir um comportamento ruim de forma controlada, medir com critérios adequados e interpretar os scores como diagnóstico do prompt. A partir daí, qualquer equipe pode adaptar os evaluators e os modelos ao seu stack sem perder a lógica experimental. Quando o conceito está claro, o processo de avaliação deixa de ser tentativa e erro puramente intuitiva.
