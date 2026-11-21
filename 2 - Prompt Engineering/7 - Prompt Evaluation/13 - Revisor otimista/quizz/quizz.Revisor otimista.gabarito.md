# Gabarito — Revisor otimista

## 1. Leitura da queda de 0.85 para 0.2 a 0.4 com o prompt otimista
**Correta: B**
**Por quê:** o prompt mandou ignorar problemas, elogiar e ser superficial, então a queda nas quatro métricas é consequência do comportamento pedido. Isso transforma a impressão "esse prompt é ruim" em números e mostra que a formulação do prompt muda muito a qualidade.
- **A:** a queda acompanha exatamente o que o prompt pediu (ignorar problemas, elogiar, ser superficial); atribuí-la a instabilidade do modelo ignora essa causa direta, que o professor aponta.
- **C:** os evaluators sem referência são justamente os que produziram sinal útil aqui; a queda é coerente com o prompt, não um artefato.
- **D:** o modelo seguiu o prompt degradado, então não perdeu capacidade; a queda vem da instrução, e a métrica captura esse efeito.
**Conceito:** Prompt degradado como experimento controlado

## 2. Valor de forçar um caso ruim
**Correta: A**
**Por quê:** scores altos seguidos podem dar a falsa impressão de que a avaliação funciona ou de que qualquer prompt razoável vai bem. Um prompt ruim de propósito mostra que o processo detecta degradação real.
- **B:** o prompt ruim não é um piso de produção, é um caso de contraste para testar a avaliação.
- **C:** a temperatura foi só um ajuste a mais no experimento; o caso ruim não serve para escolher temperatura.
- **D:** o caso ruim não mostra só que o modelo erra com instruções ruins; seu valor está em testar se a avaliação detecta a degradação.
**Conceito:** Caso ruim como contraste

## 3. Métrica quando não há resposta esperada
**Correta: C**
**Por quê:** na aula os evaluators de detalhe, profundidade, helpfulness e coerência rodam sem referência. Embedding distance (aula anterior) compara resposta e referência, então depende de uma referência fiel que este dataset não tem.
- **A:** uma lista de `findings` não representa a resposta final esperada, e a aula anterior mostra que referência parcial gera sinal pobre; além disso o prompt otimista deixa `findings` vazio.
- **B:** embedding distance depende fortemente da qualidade da referência.
- **D:** é possível medir sem referência, como o experimento da aula faz.
**Conceito:** Métrica com e sem referência
