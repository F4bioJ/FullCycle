# Gabarito — F1

## 1. Comparação entre X (0,90 / 0,40) e Y (0,65 / 0,65) pelo F1
**Correta: C**
**Por quê:** o F1 não é soma nem média das métricas: é 2·P·R/(P+R), que reflete o equilíbrio entre elas. X dá 2·0,36/1,30 ≈ 0,55; Y dá 2·0,4225/1,30 = 0,65. Y vence porque X está desbalanceado (acerta bem, mas deixa passar muitos bugs).
- **A:** o F1 não deixa uma métrica alta compensar a baixa; é justamente o desequilíbrio que o puxa para baixo (X fica em ≈ 0,55).
- **B:** o F1 não é a soma das métricas; a fórmula multiplica e divide, então somas iguais podem dar F1 diferentes.
- **D:** o resultado (Y vence) está certo, mas a causa não: o F1 não prioriza o recall, ele pesa precision e recall de forma simétrica.
**Conceito:** F1 como equilíbrio entre precision e recall (fórmula)

## 2. Por que é raro ter 100% de precision e 100% de recall
**Correta: B**
**Por quê:** o professor diz que uma métrica enfraquece a outra: sendo muito estrito, provavelmente se deixa de acertar casos; sendo muito aberto, acha-se quase todos, mas erra-se muito.
- **A:** a limitação do conjunto de testes não foi o argumento da aula; o motivo é a tensão entre as duas métricas.
- **C:** inverte a causa e o efeito: o prompt estrito derruba o recall (deixa passar bugs) e o aberto derruba a precision (falsos bugs).
- **D:** as duas métricas avaliam a mesma tarefa (achar bugs) por ângulos diferentes: precision pelos alertas emitidos, recall pelos bugs reais.
**Conceito:** Trade-off entre precision e recall

## 3. Leitura do F1 de ≈ 0,65 (precision 0,61, recall 0,7)
**Correta: D**
**Por quê:** o F1 combina precision e recall em um só número e mostra o equilíbrio entre achar a maioria dos bugs e errar menos ao trazer como bug o que não é. No exemplo, 2·0,61·0,7/(0,61+0,7) ≈ 0,65.
- **A:** 65% dos bugs encontrados seria o recall, e o recall aqui é 0,7; o F1 não é uma taxa de bugs achados.
- **B:** descreve a precision (alertas certos), que aqui é 0,61; o F1 combina as duas métricas e não equivale a nenhuma delas.
- **C:** a aula não define limiar de aprovação; o F1 só resume o equilíbrio, e a decisão depende do contexto.
**Conceito:** Interpretação do F1
