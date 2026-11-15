# Quizz — Fine Tuning supervisionado

**Capítulo:** 2 - Aprofundando na IA e LLM · **Aula:** 14
**Base:** material da aula (Q1 e Q3 ligam com o pré-treinamento das aulas 12 e 13)

---

## 1. CLM e MLM são treinamentos sem supervisão. O que torna supervisionado o fine tuning desta aula?
- A) Passa a existir uma função de perda comparando a previsão com o esperado, o que o pré-treino não tinha.
- B) Os dados vêm de um domínio especializado, como prontuários médicos, e não de texto genérico da internet.
- C) Cada exemplo traz uma entrada e a saída esperada definida antes, que guia o ajuste dos pesos.
- D) Os pesos passam a ser ajustados por backpropagation, mecanismo que o pré-treino não usava.

## 2. Um modelo pré-treinado em português passou por fine tuning com conversas de pré-triagem de um hospital. Depois, a empresa o põe no atendimento de uma borracharia. Pela analogia do professor, o que esperar?
- A) Escreve um português correto, mas a especialização de hospital não o deixa melhor na borracharia.
- B) Atende a borracharia tão bem quanto o hospital, porque aprendeu a fazer triagem de atendimento.
- C) Atende pior que um modelo sem fine tuning, porque a especialização tomou o lugar do pré-treino.
- D) Responde repetindo frases do hospital, porque o modelo decorou os exemplos do dataset de triagem.

## 3. Comparando o fine tuning supervisionado com o pré-treinamento, qual afirmação está INCORRETA?
- A) Nos dois casos, os pesos e os vieses da rede são ajustados por backpropagation.
- B) Nos dois casos, a cross entropy pode medir a distância entre a previsão e o esperado.
- C) No fine tuning, os dados miram uma tarefa e trazem a resposta esperada de cada entrada.
- D) No fine tuning, os rótulos dizem a resposta certa, e a função de perda deixa de ser usada.

## 4. Uma empresa lança um assistente para clientes que fazem perguntas curtas, como "como está o tempo?", sem dizer onde buscar. Por que, segundo a aula, isso pesa a favor do fine tuning supervisionado?
- A) Perguntas curtas gastam poucos tokens, e o fine tuning compensa mais quando cada consulta custa pouco.
- B) O cliente não vai escrever o contexto no prompt, então o direcionamento precisa já estar no modelo.
- C) Prompts curtos causam overfitting, e o fine tuning corrige isso aumentando a variedade dos dados.
- D) O fine tuning substitui a base de dados externa, e o modelo passa a saber a previsão do tempo por si.

## 5. Uma empresa treina o chatbot com milhares de conversas de atendimento, mas os atendentes seguiam um roteiro fixo e quase todas as respostas são iguais. Depois do treino, o que é mais provável?
- A) Respostas mecânicas, presas ao roteiro, e mais besteira quando a pergunta foge dele.
- B) Viés nos dados: com tanta repetição, os rótulos ficam desbalanceados e os pesos vão na direção errada.
- C) Bom desempenho em geral, porque milhares de conversas já formam uma base de tamanho considerável.
- D) Custo alto de manutenção, porque dados repetidos obrigam a retreinar o modelo com mais frequência.

## 6. Na rotulagem do dataset de um banco, várias respostas que indicavam um concorrente foram marcadas como corretas por engano. Depois do treino, o chatbot indica o concorrente com naturalidade. O que explica isso?
- A) O dataset era pequeno, e o modelo decorou as poucas respostas que viu, inclusive essas.
- B) Faltaram guardrails, que seriam a camada responsável por barrar citações a concorrentes.
- C) O concorrente já estava no pré-treino, e o fine tuning tem pouco efeito sobre o que veio dele.
- D) O backpropagation seguiu os rótulos, e o erro de rotulagem virou comportamento aprendido.

## 7. Um hospital fez um fine tuning pesado com 20 anos de dados de medicina. Seis meses depois surgiram protocolos novos. Qual caminho a aula aponta?
- A) Refazer o fine tuning completo com a base inteira, para os protocolos novos pesarem como os antigos.
- B) Fazer um fine tuning incremental só com os dados novos, usando algo como LoRA para treinar leve.
- C) Voltar ao pré-treinamento com CLM incluindo os protocolos, porque fine tuning serve à tarefa, não a dado novo.
- D) Trocar por prefix tuning, que reajusta os pesos do modelo e custa menos que o fine tuning completo.

## 8. Em qual cenário a aula indica o fine tuning completo, apesar do custo?
- A) Um modelo feito em inglês precisa passar a atender bem contratos jurídicos em português.
- B) Um modelo já especializado precisa incorporar os dados dos últimos seis meses.
- C) A empresa quer levar o modelo a algo bem distante do que ele era após o pré-treino.
- D) O modelo é muito grande, e a equipe quer especializá-lo gastando o mínimo possível.

## 9. Por que um fine tuning parcial com LoRA tende a preservar o que o modelo já sabia?
- A) Porque usa uma base reduzida de exemplos, e poucos exemplos mexem pouco nos pesos do modelo.
- B) Porque troca o ajuste de pesos por um prompt interno fixo que guia as respostas do modelo.
- C) Porque reajusta as matrizes de pesos já existentes com passos pequenos, e pouca coisa se altera.
- D) Porque insere matrizes nas camadas e treina só essa parte, sem reescrever o modelo todo.

## 10. Uma equipe aplicou prompt tuning a um modelo muito grande para especializá-lo gastando pouco. Depois do treino, o que mudou no modelo?
- A) Ganhou uma instrução interna aprendida que guia as respostas, e os pesos originais seguem iguais.
- B) Os pesos das camadas foram reajustados por backpropagation, porém com uma base menor de exemplos.
- C) Cada camada recebeu matrizes novas, que foram treinadas no lugar dos pesos originais do modelo.
- D) Ganhou um filtro após a geração, que barra respostas fora do tom antes de chegarem ao cliente.
