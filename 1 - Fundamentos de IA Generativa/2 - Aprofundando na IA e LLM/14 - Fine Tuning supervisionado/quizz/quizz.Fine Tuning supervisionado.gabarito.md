# Gabarito — Fine Tuning supervisionado

## 1. O que torna o fine tuning supervisionado
**Correta: C**
**Por quê:** no fine tuning supervisionado, o dataset é montado em pares de entrada e saída (pergunta e resposta, código incompleto e completo), e o rótulo indica a resposta certa e guia o aprendizado. No CLM e no MLM, o próprio texto prepara a tarefa, sem rótulo externo.
- **A:** o pré-treino também tem função de perda. Na CLM e na MLM, o valor esperado (a palavra escondida) é comparado com a previsão, e a aula diz que a cross entropy da aula anterior continua sendo usada aqui.
- **B:** usar texto especializado caracteriza o fine tuning em geral, mas o que o torna supervisionado são os pares de entrada e saída com rótulo. Texto especializado sem rótulo continuaria sendo treino sem supervisão.
- **D:** o pré-treino também ajusta pesos e vieses por backpropagation. A aula diz que esse mecanismo é o mesmo.
**Conceito:** supervisionado = pares de entrada e saída rotulados (ligação com CLM/MLM)

## 2. Analogia do hospital e da borracharia
**Correta: A**
**Por quê:** na analogia, o português do pré-treino continua servindo em qualquer lugar ("a máquina generalista continua te apoiando"), mas o contexto de hospital não funciona numa borracharia. A especialização ajuda só na tarefa para a qual foi feita.
- **B:** a especialização é para aquele contexto. O professor diz que, na borracharia, o contexto de hospital "não vai funcionar", e que só o português continua servindo.
- **C:** a aula diz o contrário: a base generalista é preservada e continua apoiando o modelo, então ele não fica pior do que era sem o fine tuning.
- **D:** repetir frases decoradas é sintoma de overfitting (dataset pequeno ou repetitivo), e o cenário não indica isso. Não é a consequência de usar o modelo em outro domínio.
**Conceito:** a especialização se soma à base generalista, não a substitui

## 3. Fine tuning supervisionado x pré-treinamento (INCORRETA)
**Correta: D**
**Por quê:** os rótulos dizem qual é a resposta esperada, mas é a função de perda que mede a diferença entre ela e o que o modelo respondeu. O professor diz que a cross entropy "também é presente aqui": sem ela não haveria erro para o backpropagation corrigir.
- **A:** verdadeira: em ambos, pesos e vieses são ajustados por backpropagation.
- **B:** verdadeira: a aula diz que a cross entropy, vista na aula de pré-treinamento, também é usada aqui para comparar a resposta com a correta.
- **C:** verdadeira: os dados são especializados numa tarefa e organizados em pares de entrada e saída.
**Conceito:** o mecanismo de treino é o mesmo (rótulo + perda + backpropagation); mudam os dados (ligação com a aula 12)

## 4. Prompt curto do cliente e fine tuning
**Correta: B**
**Por quê:** quem escreve um bom prompt diz onde buscar e o que não quer, e isso guia o modelo. O cliente final só pergunta "como está o tempo?", sem esse contexto. Se ninguém vai escrever o prompt, o direcionamento tem de estar preparado no modelo.
- **A:** a aula não relaciona o tamanho da pergunta nem o custo por consulta à decisão de fazer fine tuning.
- **C:** overfitting vem de dataset pequeno ou repetitivo no treino, não do tamanho do prompt do usuário.
- **D:** o professor avisa que, nesse exemplo, misturou base de dados e fine tuning. O fine tuning direciona o comportamento, mas não faz o modelo saber a previsão do tempo sem buscar a informação.
**Conceito:** fine tuning quando o prompt sozinho não basta

## 5. Dataset repetitivo
**Correta: A**
**Por quê:** é o overfitting da aula: com muita informação repetida ("toda vez a pessoa pergunta a mesma coisa, o atendente responde a mesma coisa"), o modelo decora em vez de gerar, as respostas ficam mecânicas e cresce a chance de responder besteira.
- **B:** na aula, viés nos dados é rótulo errado: algo marcado como certo que estava errado. Repetição de respostas corretas não é isso; é a causa do overfitting.
- **C:** tamanho é só metade do requisito. A aula pede base de tamanho considerável **e** sem texto repetitivo, e aqui as respostas são quase todas iguais.
- **D:** o retreino frequente vem da mudança do domínio (atualização constante), não da repetição dos dados.
**Conceito:** overfitting (dados pequenos ou repetitivos)

## 6. Rótulos errados no dataset do banco
**Correta: D**
**Por quê:** é o viés nos dados. Se o rótulo diz que a resposta errada está certa, o backpropagation ajusta os pesos nessa direção, e o modelo "entende que aquilo é certo, mas você treinou ela errado".
- **A:** o cenário não diz que o dataset era pequeno. A causa é o rótulo errado, não a decoreba (overfitting).
- **B:** guardrails são outro caminho citado, mas a aula diz que o próprio fine tuning também pode ensinar a não citar outras empresas. Aqui o problema é que ele ensinou o contrário.
- **C:** o fine tuning ajusta os pesos do modelo pré-treinado justamente para mudar o comportamento dele naquele contexto.
**Conceito:** viés nos dados (rótulo errado vira comportamento)

## 7. Atualizar o modelo médico depois de seis meses
**Correta: B**
**Por quê:** é o exemplo do professor: como o modelo já está preparado, faz-se um fine tuning incremental com uma base reduzida, só do que mudou, usando algo como LoRA para deixar o treino mais leve.
- **A:** retreinar tudo é justamente o custo da atualização constante que as ferramentas citadas evitam.
- **C:** a aula não manda voltar ao pré-treinamento. O fine tuning incremental incorpora dados novos.
- **D:** prefix tuning não reajusta os pesos do modelo: treina um prompt interno que guia o comportamento.
**Conceito:** atualização constante e fine tuning incremental com LoRA

## 8. Quando usar o fine tuning completo
**Correta: C**
**Por quê:** a aula diz que o fine tuning completo, que atualiza todos os parâmetros, é usado num domínio novo ou quando o modelo precisa ficar "totalmente diferente do que ele foi treinado inicialmente", mesmo exigindo muito poder computacional, tempo e dinheiro.
- **A:** esse é o exemplo do professor para o fine tuning **parcial**: o modelo aprende português e contratos jurídicos sem esquecer o inglês.
- **B:** incorporar seis meses de dados é o caso do fine tuning incremental com LoRA.
- **D:** modelo muito grande e pouco gasto é o caso do prefix tuning ou do prompt tuning.
**Conceito:** fine tuning completo x parcial (escolha prática)

## 9. Por que o LoRA preserva o conhecimento
**Correta: D**
**Por quê:** no fine tuning parcial, só uma parte é treinada. O LoRA insere matrizes nas camadas, e o treino fica mais leve e não apaga o que o modelo já sabia, porque o modelo inteiro não é reescrito.
- **A:** a base reduzida aparece no exemplo da atualização incremental, mas não é o que preserva o conhecimento. O que preserva é treinar só uma parte do modelo, sem reescrevê-lo inteiro.
- **B:** guiar o modelo com um prompt interno treinado é o prefix ou prompt tuning, não o LoRA.
- **C:** o LoRA não reajusta as matrizes de pesos já existentes. Ele insere matrizes novas e treina só elas.
**Conceito:** LoRA insere matrizes e treina só uma parte

## 10. O que muda com o prompt tuning
**Correta: A**
**Por quê:** em vez de moldar o modelo, o prefix tuning e o prompt tuning treinam um prefixo, um prompt interno que acompanha o modelo e guia seu comportamento, sem um backpropagation atualizando os pesos do modelo. Por isso são bons para modelos muito grandes.
- **B:** essas técnicas não reajustam os pesos das camadas. Reajustar pesos com uma base menor seria um fine tuning comum, só que menor.
- **C:** inserir matrizes nas camadas descreve o LoRA, não o prompt tuning. E no LoRA as matrizes novas se somam ao modelo, não substituem os pesos originais.
- **D:** um filtro externo aplicado depois da geração está mais perto de um guardrail. O professor só usou o guardrail como comparação, e o prompt interno é treinado e acompanha o modelo.
**Conceito:** prefix/prompt tuning (prompt interno treinado)
