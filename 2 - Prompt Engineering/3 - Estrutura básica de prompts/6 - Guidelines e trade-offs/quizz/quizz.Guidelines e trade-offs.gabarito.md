# Gabarito — Guidelines e trade-offs

## 1. Estratégia para classificar mensagens em volume alto
**Correta: A**
**Por quê:** A aula indica zero-shot para tarefas simples, de senso comum ("valide", "identifique", "sumarize"), e para alto volume: "faça isso e ela vai fazer de uma forma mais barata e rápida"; com volume e tokens altos, "esse negócio vai virar praticamente inviável".
- **B:** Few-shot gasta mais tokens por chamada; a aula não diz que os exemplos baixam o custo total.
- **C:** Few-shot é para domínio específico ou formato com muitas especificidades; três categorias genéricas não exigem isso.
- **D:** Cadeias de pensamento aumentam latência e tokens (aula anterior), o que pesa justamente no volume alto.
**Conceito:** Zero-shot em tarefa simples e alto volume

## 2. O preço do few-shot
**Correta: B**
**Por quê:** "Trabalhar com few-shot é muito mais caro que com zero-shot, a latência é maior, e você gasta muito mais token e processamento da IA quando ela tem que imitar um comportamento que você passou pra ela."
- **A:** Caching foi tema de aula anterior, mas esta aula não o usa para zerar o custo do few-shot; ela diz que o few-shot é mais caro.
- **C:** A aula não fala de a IA recusar casos diferentes dos exemplos.
- **D:** A aula não liga few-shot a vazamento de dados dos exemplos.
**Conceito:** Custo do few-shot

## 3. Por que exemplos ajudam no domínio específico
**Correta: C**
**Por quê:** "O exemplo sempre traz o que é esperado dela. Ou seja, no final do dia, você está dando o quê? O formato de saída", ligando ao que foi dito no início do módulo.
- **A:** A aula não diz que o exemplo ensina conhecimento novo do domínio; ele mostra o resultado esperado ("baseado no exemplo X, espero que você retorne Y").
- **B:** Raciocinar passo a passo é chain of thought, outra técnica.
- **D:** A aula não liga o few-shot a menos chamadas nem a custo total menor; diz que ele é mais caro, mais lento e gasta mais tokens.
**Conceito:** Exemplo como formato de saída

## 4. A conta do custo por ponto de assertividade
**Correta: D**
**Por quê:** Os 4 pontos de diferença (86% → 90%) custam US$ 2 mil a mais (10 mil → 12 mil): "a cada 1% de assertividade a mais, vai custar 500 dólares".
- **A:** Divide o custo total do few-shot, e não a diferença de custo, pelos pontos ganhos.
- **B:** Atribui a diferença total a um único ponto; ela cobre os 4 pontos.
- **C:** Troca a unidade: a diferença de US$ 2 mil é por mês (10 mil → 12 mil por mês), então cada ponto custa US$ 500 por mês, não por ano.
**Conceito:** Custo por ponto de assertividade

## 5. Decidir numa tarefa crítica
**Correta: B**
**Por quê:** "Muitas vezes essa decisão não é de competência do desenvolvedor": ele leva a conta às áreas de produto e financeira (respostas piores contra dinheiro a mais). E a criticidade pesa: "às vezes vale a pena eu pagar ainda mais porque 90% não é o suficiente". Triagem de exames é uma tarefa crítica.
- **A:** A decisão muitas vezes não é da engenharia; e o zero-shot barato vale para tarefas simples, não para um domínio específico em que o erro é grave.
- **C:** A conta é técnica, mas a aula diz que a escolha muitas vezes não é de competência do desenvolvedor: vai para produto e finanças.
- **D:** A aula aceita mitigação quando a tarefa "não é nem tão crítica"; com erro que atrasa diagnóstico grave, fixar os 90% de antemão ignora o peso do erro, que a aula manda pôr na conta.
**Conceito:** Decisão de produto e criticidade da tarefa
