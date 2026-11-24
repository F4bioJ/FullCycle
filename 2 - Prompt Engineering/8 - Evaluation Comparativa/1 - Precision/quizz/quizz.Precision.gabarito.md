# Gabarito — Precision

## 1. Precision de um prompt que marca 12 logs, com 9 acertos
**Correta: C**
**Por quê:** precision = true positives / (true positives + false positives). O prompt marcou 12 logs: 9 true positives e 3 false positives. 9 / (9 + 3) = 9 / 12 = 75%. O denominador contém só o que o modelo devolveu como positivo.
- **A:** divide pelos 15 bugs existentes, mas o denominador da precision não são os bugs que existem no dataset, e sim as marcações feitas (TP + FP).
- **B:** soma ao denominador os 6 bugs não detectados, que não fazem parte da fórmula da precision. O resultado (9 / 18) não corresponde à métrica da aula.
- **D:** divide pelo total de logs avaliados; a fórmula não inclui os logs que o prompt não marcou como bug.
**Conceito:** fórmula da precision (denominador = positivos devolvidos)

## 2. Prompt que perde bugs reais, mas não erra nenhuma marcação
**Correta: A**
**Por quê:** se todas as marcações estão corretas, false positives = 0, e precision = TP / (TP + 0) = 100%. Bugs reais deixados de fora não entram na fórmula; a precision mede a confiabilidade do que foi devolvido, não a cobertura. É o caso de um prompt conservador, que a precision sozinha favorece.
- **B:** é a leitura que o professor sugere no exemplo dos 10 bugs com 5 detectados, mas a fórmula que ele apresenta não tem termo para bugs não detectados; o denominador é TP + FP.
- **C:** o numerador de true positives diminuiu, mas o denominador (TP + FP) diminuiu junto, porque FP = 0; a razão continua TP / TP = 100%.
- **D:** a precision não depende do número de logs avaliados, e sim de quantas marcações acertaram e quantas erraram; mudar o comportamento do prompt muda a métrica.
**Conceito:** precision não mede bugs deixados de fora

## 3. Equipe sobrecarregada com alertas que não eram bug
**Correta: D**
**Por quê:** alertas de bug que não eram bug são falsos positivos. Precision baixa significa alto índice de falsos positivos: boa parte do que o prompt devolve está errado, e isso consome tempo de triagem e reduz a confiança na automação.
- **A:** encontrar bugs reais (true positives) não basta para a precision ser alta: o denominador inclui os falsos positivos, e um sistema pode "encontrar muitos problemas" e gerar pouco valor se boa parte dos alertas estiver errada.
- **B:** sinalizar mais itens tende a aumentar também os falsos positivos, que já são o problema relatado; o sintoma aponta excesso de falsos positivos, não falta de acertos.
- **C:** os falsos positivos estão no denominador da fórmula (TP + FP); são justamente o que derruba a precision.
**Conceito:** falsos positivos e precision baixa

## 4. Prompt que sinaliza tudo × prompt restritivo
**Correta: B**
**Por quê:** um prompt restritivo devolve menos alertas, porém mais confiáveis, e por isso tende a ter precision maior. Mas a precision não mede quantos bugs reais foram encontrados, então olhar só para ela pode favorecer prompts conservadores demais, que deixam bugs passar.
- **A:** sinalizar qualquer indício aumenta os positivos devolvidos, mas também tende a elevar os falsos positivos, o que derruba a precision; acertar mais bugs não garante precision maior.
- **C:** a métrica depende do comportamento do prompt; a aula mostra justamente que mudar o prompt altera a precision, mesmo com o mesmo dataset.
- **D:** devolver menos alertas pode reduzir os true positives, mas reduz também os falsos positivos do denominador; num prompt restritivo, a proporção de acertos tende a subir, não a cair.
**Conceito:** prompt agressivo × restritivo e o efeito na precision

## 5. O que uma precision de 0,95 permite concluir
**Correta: A**
**Por quê:** precision é a proporção de acertos entre os itens marcados como positivos. 0,95 significa que, de cada 100 logs que o v3 acusa como bug, cerca de 95 são bugs de fato: alta precision, baixo índice de falsos positivos.
- **B:** a precision não é a fração dos logs que o modelo marcou; é a fração de acertos dentro do que ele marcou. Quantos logs foram marcados não aparece no número.
- **C:** a precision não conta os logs que o modelo não marcou, então não diz quantos logs normais foram classificados corretamente.
- **D:** os 5% restantes são falsos positivos entre os itens marcados como bug, não 5% dos logs normais do dataset; o denominador são as marcações do modelo.
**Conceito:** leitura da precision (confiabilidade dos positivos)
