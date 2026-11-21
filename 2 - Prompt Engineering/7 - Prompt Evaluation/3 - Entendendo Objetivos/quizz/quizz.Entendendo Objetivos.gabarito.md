# Gabarito — Entendendo Objetivos

## 1. Documento desatualizado no RAG: faithfulness x correctness
**Correta: B**
**Por quê:** Faithfulness verifica se a saída se mantém fiel ao contexto e não alucina; a resposta repete o que o trecho recuperado diz, com o link como base. Correctness compara a saída com uma referência do que é certo, e a referência diz R$ 60. É o ponto do professor: ser fiel ou ter base é diferente de ser exato.
- **A:** Alucinar é trazer o que não está no contexto. Aqui o valor veio do documento recuperado, então a saída é fiel a ele, mesmo estando errada.
- **C:** O link dá grounding (mostra de onde veio a informação), mas ter base não garante bater com a referência. A fonte estava desatualizada.
- **D:** Groundedness pergunta se a resposta se baseia em algo, e ela se baseia no documento. A idade do documento afeta a exatidão, que é correctness.
**Conceito:** Faithfulness/groundedness x correctness — fiel não é exato

## 2. Resposta correta e curta que o iniciante não entende
**Correta: D**
**Por quê:** O professor separa ser objetivo de ser útil: helpfulness verifica se o resultado é útil e claro para o usuário, além de ter grounding, relevância, correção e objetividade. A resposta é correta, ligada à pergunta e curta, mas o usuário não entendeu.
- **A:** Conciseness verifica se a saída é direta e sem enrolação. Uma resposta curta não falha nesse objetivo; o que faltou foi clareza para o usuário.
- **B:** Relevance verifica se a saída responde à pergunta feita. A resposta trata do que foi perguntado; o problema é o usuário não conseguir usá-la.
- **C:** Correctness compara a saída com uma referência do que é certo, e o enunciado diz que o conteúdo está correto. Clareza para o usuário é helpfulness.
**Conceito:** Helpfulness — objetivo e correto não é o mesmo que útil

## 3. Associação incorreta entre objetivo e termo
**Correta: C**
**Por quê:** Indicar de onde veio a informação é grounding: o professor dá o exemplo do link que o ChatGPT mostra ao lado da resposta. Isso é groundedness, não correctness, que compara a saída com uma referência do que é certo.
- **A:** Está correta. Format adherence verifica se a saída vem no formato pedido, como JSON válido e um schema definido.
- **B:** Está correta. Efficiency cobre latência, custo em tokens e throughput.
- **D:** Está correta. O professor usa "qual é o melhor político?" como exemplo de bias: opinião enviesada em tema sem resposta certa ou errada.
**Conceito:** Groundedness — indicar a fonte da resposta

## 4. Pairwise sem critério
**Correta: A**
**Por quê:** A pairwise compara duas versões e diz qual ganhou, e o professor destaca a pergunta: ganhou com base em qual critério? Sem critério, os 70% não dizem em que dimensão A é melhor, então o resultado não indica o que melhorar.
- **B:** Quem compara com uma referência é correctness. A pairwise compara as duas versões entre si.
- **C:** É o contrário: a aula anterior mostrou que, para comparar prompts de forma justa, as versões rodam sobre o mesmo conjunto de entradas.
- **D:** Efficiency é outro objetivo da lista (latência, custo, throughput). A pairwise pode comparar qualquer critério definido.
**Conceito:** Pairwise — ganhou com base em qual critério

## 5. Correctness no FAQ e no brainstorming
**Correta: C**
**Por quê:** Correctness verifica se a saída bate com uma referência, um fato ou exemplo do que é certo para aquela chamada. O FAQ tem a resposta aprovada para cada pergunta; o brainstorming não tem resposta certa para comparar.
- **A:** Verificar se a saída não alucina é faithfulness. Correctness depende de uma referência.
- **B:** O link é grounding: mostra de onde veio a informação, não o que é a resposta certa. Ter base é diferente de ser exato.
- **D:** Comparar duas versões e dizer qual ganhou é a avaliação pairwise, não correctness; e o brainstorming continua sem referência do que é certo.
**Conceito:** Correctness — comparar com uma referência
