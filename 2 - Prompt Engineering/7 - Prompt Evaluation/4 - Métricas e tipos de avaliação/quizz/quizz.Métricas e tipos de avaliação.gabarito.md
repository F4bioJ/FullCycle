# Gabarito — Métricas e tipos de avaliação

## 1. Mesma resposta escrita com outras palavras
**Correta: C**
**Por quê:** Embedding similarity compara pelo sentido: a referência e a saída viram embeddings, como na busca semântica, e a métrica mede o quão próximas elas ficam. As duas frases dizem o mesmo com palavras diferentes, que é o caso que essa métrica cobre.
- **A:** Exact Match só aceita a saída idêntica à referência. Aqui ela marcaria erro numa resposta com o conteúdo certo.
- **B:** String distance mede a proximidade do texto, e as frases têm palavras bem diferentes ("reembolso é feito" contra "recebe o dinheiro de volta"). A distância seria grande mesmo com o sentido igual.
- **D:** Na aula, precision mede o quanto a IA acerta olhando falsos positivos (no exemplo, marcar como bug o que não era), e não a contagem de palavras em comum com a referência.
**Conceito:** embedding similarity — proximidade de sentido, não de texto

## 2. LLM juiz automatizado continua subjetivo
**Correta: A**
**Por quê:** Métricas objetivas dão o resultado por fórmula ou regra clara. No LLM as Judge, outra IA analisa a resposta segundo critérios, e a nota vem desse julgamento. Rodar em lote não muda a natureza da métrica: o professor põe faithfulness entre as subjetivas e diz que muitas delas já rodam com boa precisão usando um LLM.
- **B:** O professor diz que as métricas subjetivas podem ser avaliadas por um humano ou por outra IA. O LLM as Judge é justamente o caso em que um LLM faz esse papel.
- **C:** As sistêmicas olham a execução (latência, tokens, throughput, pass rate). Faithfulness, se a resposta não alucina, olha o conteúdo.
- **D:** A avaliação comparativa coloca a saída A contra a saída B. Uma rubrica que dá nota a cada resposta não compara as respostas entre si.
**Conceito:** LLM as Judge — métrica subjetiva mesmo automatizada

## 3. Conferir o formato de um JSON consumido pelo backend
**Correta: D**
**Por quê:** Validação de JSON e schema validation garantem que o output está estruturado como se espera, e são métricas determinísticas: a regra dá o resultado, sem interpretação. É a forma direta de medir o format adherence visto na aula anterior, quando a saída vai para software.
- **A:** Exact Match exige a saída idêntica à referência. Um JSON com todos os campos certos, mas com outro cliente ou outro valor, também falharia, então ele mede o conteúdo exato, e não a estrutura.
- **B:** Embedding similarity mede proximidade de sentido. Um JSON "parecido" pode ter um campo faltando ou `valor` como texto e ainda assim ficar próximo da referência.
- **C:** Formato não depende de interpretação quando há regra explícita. A aula põe a validação de JSON e de schema entre as métricas objetivas, e não entre as subjetivas.
**Conceito:** schema validation — métrica determinística de estrutura

## 4. Comparação offline entre dois prompts registrada como teste A/B
**Correta: B**
**Por quê:** Comparar a saída A com a saída B, geradas por prompts diferentes, é pairwise evaluation (ou model comparison). O professor diz que o A/B testing não deixa de ser um pairwise, mas, no contexto dessas verificações, costuma ser feito em produção, medindo as taxas de aceitação e a performance real.
- **A:** O professor distingue os dois: todo A/B compara duas versões, mas quando se fala em A/B a referência é a medição em produção, e não uma comparação offline num dataset.
- **C:** Na aula, pairwise evaluation e model comparison aparecem como nomes da mesma comparação entre saídas, e o exemplo dado é justamente o de prompts diferentes.
- **D:** O professor diz que o A/B em produção mostra o quanto aquilo funcionou, e não necessariamente se o usuário falou que gostou.
**Conceito:** pairwise × A/B testing — comparação offline × produção

## 5. Avaliação possível sem ground truth
**Correta: C**
**Por quê:** Ground truth é a referência com as respostas corretas já conhecidas. Latência e custo em tokens são métricas sistêmicas: medem a execução do prompt e não dependem de comparar a resposta com uma resposta certa.
- **A:** A aula define correctness como verificar se a resposta está correta de acordo com uma referência. Sem ground truth, falta essa referência.
- **B:** Embedding similarity transforma a referência e a saída em embeddings e mede a proximidade entre elas. Sem referência, não há com o que comparar.
- **D:** String distance tolera diferenças, mas mede a distância até um texto de referência. Sem esse texto, não há distância a medir.
**Conceito:** ground truth — quais métricas dependem de referência
