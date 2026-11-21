# Gabarito — Embedding distance

## 1. Score que destoa com referência que é só uma listinha de exemplos
**Correta: A**
**Por quê:** a métrica compara a resposta com a referência no espaço vetorial. Se o dataset traz uma listinha de exemplos e não a resposta final esperada (ground truth), o score reflete esse desencontro. O professor disse que o resultado é só um nível de referência, não um fator determinante para mudar o prompt.
- **B:** conclui que o prompt piorou a partir do score isolado; o professor diz que o número não é determinante e depende da referência.
- **C:** o uso de embedding no lugar de LLM é só o mecanismo; o score continua sendo um sinal de proximidade semântica, desde que a referência seja adequada.
- **D:** o reasoning vem de evaluators com LLM julgador; aqui o score é só a distância entre vetores, sem explicação do que corrigir.
**Conceito:** Referência adequada para Embedding Distance

## 2. Embedding Distance para checar formato de saída
**Correta: C**
**Por quê:** o critério foca na parte semântica, comparando significado por vetores. Formato (JSON válido, sem texto extra) é outra dimensão, vista na aula anterior como format adherence: duas saídas com o mesmo sentido podem ter formatos diferentes. A métrica deve ser escolhida pelo objetivo, e mesmo uma boa referência não muda o que a distância mede.
- **A:** uma referência melhor torna a comparação semântica mais fiel, mas não faz a métrica medir formato.
- **B:** a aula não atribui ao embedding a captura de estrutura; ele mede proximidade de significado, e para formato a aula anterior apresenta a rubrica de format adherence.
- **D:** a qualidade da referência define a utilidade para o objetivo semântico; ampliar o dataset não transforma a métrica em checagem de formato.
**Conceito:** Escolher a métrica pelo objetivo

## 3. Afirmação incorreta sobre o Embedding Distance
**Correta: D**
**Por quê:** o professor diz que o resultado é apenas um nível de referência e que a escolha da métrica depende do objetivo; a distância não indica o que mudar no prompt, mesmo com boa referência.
- **A:** correta; a aula cita cosseno (mais usado) e L2 (euclidiana).
- **B:** correta; o evaluator built-in usa o embedding da OpenAI e não o LLM em si.
- **C:** correta; a comparação depende do par resposta-referência, e referência inadequada gera sinal pobre.
**Conceito:** Limites do score de distância
