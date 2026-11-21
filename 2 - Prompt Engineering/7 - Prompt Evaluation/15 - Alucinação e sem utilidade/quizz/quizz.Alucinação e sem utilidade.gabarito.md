# Gabarito — Alucinação e sem utilidade

## 1. Evaluator que detecta vulnerabilidades inventadas
**Correta: B**
**Por quê:** O faithfulness da aula foi descrito para exigir uma resposta grounded, que não invente problemas que não existem no contexto. Ele roda sem referência porque julga a resposta a partir do input (o código enviado), como na aula de Additional criteria. No Bad Hallucination foi justamente a nota mais baixa (0.14).
- **A:** Coherence também caiu (0.32), mas mede se o texto é coerente com o que foi escrito na saída; uma lista de vulnerabilidades inventadas pode ser coerente entre si.
- **C:** Detail caiu (0.33), mas mede o nível de detalhe; um achado inventado pode vir bem detalhado, então detail não é o critério que mira a invenção.
- **D:** Helpfulness caiu (0.21) porque a revisão perde valor, mas o critério desenhado para punir a invenção é o faithfulness.
**Conceito:** faithfulness sem referência detecta invenção

## 2. Diagnóstico pelo padrão dos scores
**Correta: A**
**Por quê:** X é o Bad Hallucination: a pior nota fica no faithfulness, o critério que cobra base no código, sinal de invenção. Y é o Bad Not Helpful: helpfulness, detail e depth quase zerados mostram uma resposta que não entrega análise. O padrão entre os critérios indica o tipo de falha.
- **B:** Inverte os casos. A coherence alta de Y não indica invenção, e "longo e fora do código" é a falha do revisor verboso, não a de X.
- **C:** As notas baixas mostram que os dois prompts são ruins, mas a aula mostra justamente que o padrão diferencia invenção de ausência de análise.
- **D:** Coherence 0.4 ainda é baixa e convive com helpfulness 0.12; uma resposta que não ajuda não está pronta para produção.
**Conceito:** padrão de scores: alucinação vs. inutilidade

## 3. Por que a alucinação derruba também as outras notas
**Correta: D**
**Por quê:** Para o professor, o modelo começou a alucinar e "fazer um monte de besteira", e por isso as notas ficaram ruins de modo geral. Uma revisão sobre vulnerabilidades que não existem não ajuda a corrigir o código, então helpfulness, coherence e detail caem junto com o faithfulness.
- **A:** Sem referência, os evaluators julgam a partir do input e da própria saída (o faithfulness confere a base no código recebido); a aula não fala em notas baixas "por dúvida", e sim em notas baixas porque o modelo inventou.
- **B:** O prompt pede um summary dramático, mas a aula não atribui a queda ao tamanho; punir floreio e desvio foi a leitura do caso verboso.
- **C:** A aula não diz que os findings vieram sem detalhe; a causa apontada é a invenção, que tira o valor da revisão inteira.
**Conceito:** alucinação degrada a utilidade da revisão

## 4. Por que a coherence fica acima das outras no caso sem utilidade
**Correta: B**
**Por quê:** O resumo do professor explica que uma frase genérica ainda pode ser internamente consistente, mesmo sem ajudar em nada. Coherence olha se o texto é coerente com o que foi escrito na saída, e não se há análise útil, por isso cai menos que helpfulness, detail e depth.
- **A:** Medir se a resposta ajuda é o papel do helpfulness, que ficou em 0.12.
- **C:** Todos os evaluators do Bad Not Helpful rodaram sem referência; não há texto-alvo para comparar.
- **D:** Medir objetividade é o papel do conciseness, que ficou em 0.13, mesmo com o summary de três palavras.
**Conceito:** coherence mede consistência interna, não utilidade

## 5. Testar se os evaluators detectam alucinação em outro stack
**Correta: C**
**Por quê:** É o método da aula: manter o pipeline e os evaluators, degradar o prompt de propósito para provocar uma falha conhecida (o professor diz que extrapolou só para mostrar o impacto do prompt) e ver se o critério certo pune essa falha, como o faithfulness caindo para 0.14 no Bad Hallucination. O professor reforça que isso vale com outra ferramenta, outro provider e outro modelo.
- **A:** Notas estáveis num prompt sem falha provocada não mostram se o evaluator detectaria uma invenção; falta o caso ruim controlado para comparar.
- **B:** A aula detecta invenção sem referência, com faithfulness julgando a partir do input; trocar tudo por correctness com referência abandona o método mostrado.
- **D:** Subir a temperatura (como no revisor otimista) não garante a falha que se quer testar, e comparar com as notas do professor ignora que o stack é outro; o que se compara é o caso ruim com o caso normal no próprio stack.
**Conceito:** degradar o prompt de propósito para validar a avaliação
