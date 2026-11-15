# Quizz — Engenharia de prompt

**Capítulo:** 3 - Hands on · **Aula:** 10
**Base:** material da aula

---

## 1. Um time testou um pedido zero-shot para classificar o sentimento de avaliações curtas, e o resultado veio bom e barato. Agora quer usar o mesmo tipo de pedido para gerar pareceres técnicos no formato interno da empresa. Qual o principal risco?
- A) A saída tende a perder profundidade, porque o zero-shot limita os tokens de saída, mas o formato interno é respeitado.
- B) O modelo conhece pareceres como conhece sentimento, e o risco que sobra é o custo, que cresce com o tamanho do pedido.
- C) O bom resultado veio de um padrão que o modelo já conhecia, e em um formato próprio a saída tende a fugir do esperado.
- D) A falta de exemplos tende a gerar alucinação no conteúdo, mas o formato se resolve ao dar ao modelo uma persona de perito.

## 2. Uma equipe escolheu zero-shot para economizar tokens na API. Os pedidos são abertos, e cada resultado precisa de três ou quatro rodadas de correção até servir. O que esse caso mostra?
- A) A economia do zero-shot vale por chamada, e o retrabalho pode deixar o custo total acima do de um prompt específico.
- B) O zero-shot tende a economizar no total, pois as rodadas de correção seguem sem exemplos e com entrada pequena.
- C) O custo tende a vir do modelo, e não do prompt, e trocar por um modelo mais barato resolveria sem mudar o pedido.
- D) Um prompt específico gasta mais tokens por chamada, e isso tende a compensar só em volume alto, não em poucas rodadas.

## 3. Em um few-shot de sentimento, todas as frases de exemplo que criticam o preço foram rotuladas como neutro. Na consulta real, o modelo marca como neutro uma reclamação dura sobre preço. Qual a causa mais provável?
- A) Há exemplos de menos, e abaixo de certo número o modelo ignora os rótulos e decide olhando a frase final.
- B) Os exemplos alteraram os pesos do modelo, e por isso o desvio continuará nas próximas sessões da equipe.
- C) A tarefa é conhecida demais, e o treinamento prévio do modelo passou por cima do que os exemplos mostravam.
- D) O modelo infere o critério a partir dos pares, então os rótulos enviesados viraram o padrão que ele seguiu.

## 4. Um sistema via API usa few-shot com 3 exemplos, e a equipe quer subir para 40. O que é mais provável de acontecer?
- A) O custo tende a subir na primeira chamada, mas cai depois, porque o modelo memoriza os pares e dispensa o reenvio.
- B) A aderência ao padrão tende a melhorar, mas a entrada fica maior e cresce o trabalho de selecionar exemplos.
- C) A aderência tende a melhorar, e o custo pouco muda, porque exemplos pesam como instrução e não como tokens de entrada.
- D) A aderência tende a cair, e o custo a subir, porque exemplos demais fazem o modelo perder de vista a pergunta real.

## 5. Segundo a explicação da aula, por que pedir o passo a passo ajuda uma LLM em tarefas com encadeamento lógico?
- A) O modelo lida com sequência de texto, não com lógica, e escrever cada etapa o direciona a seguir esse encadeamento.
- B) O modelo passa a compreender a lógica ao ver as etapas, e os passos escritos tendem a funcionar como prova do resultado.
- C) O pedido tende a reduzir a aleatoriedade da geração, e a resposta menos variada acaba chegando ao resultado correto.
- D) O modelo tende a calcular as etapas em paralelo, e isso reduz os tokens gastos e libera atenção para a lógica.

## 6. Um modelo gera repetidamente um plano errado de migração de banco, e corrigir o resultado final não tem adiantado. Qual uso de CoT segue a prática descrita pelo professor?
- A) Pedir a execução com "pense passo a passo" e aceitar o resultado, porque os passos já melhoram a precisão da saída.
- B) Pedir várias execuções com passo a passo e ficar com a resposta que aparece mais vezes, sem precisar ler as etapas.
- C) Pedir um resumo mais curto do plano, para tirar a sujeira do texto que causa o desvio, e então mandar executar.
- D) Pedir os passos antes de executar, apontar o trecho errado, ver os passos de novo e só então liberar a execução.

## 7. Sobre o CoT, qual afirmação está INCORRETA?
- A) A resposta fica mais longa e com sujeira, e pode exigir um prompt mais simples depois para ficar utilizável.
- B) Em uso por API, o custo tende a subir, o que pede cuidado em aplicações que dependem dessa estratégia.
- C) A confiabilidade do passo a passo tende a ser parecida entre modelos, pois vem mais da técnica que do modelo usado.
- D) A técnica ajuda em cálculo, raciocínio multi-etapa e lógica de programação, em que as etapas são encadeadas.

## 8. Uma IA de primeiro atendimento de um escritório recebeu a persona de advogado trabalhista. Funciona bem nesse tema, mas, quando chegam pedidos mais amplos, as respostas ficam presas ao papel. Qual a leitura correta e o ajuste?
- A) A persona encheu a janela de contexto, e encurtar a descrição do papel faz o modelo voltar a responder com amplitude.
- B) A persona nichou o modelo nesse papel, e é preciso dar direcionamento para os casos amplos e testar até ajustar.
- C) A persona mudou o vocabulário, mas não o enquadramento, e o desvio vem de uma temperatura baixa que precisa subir.
- D) A persona tende a ficar mais rígida conforme a conversa avança, e reiniciar a sessão devolve a amplitude da resposta.

## 9. Uma empresa gera relatórios semanais por prompt. O texto vem bom, mas o tamanho e a organização mudam de uma semana para outra, o que atrapalha quem os lê em sequência. Entre as opções, qual ajuste ataca melhor esse problema?
- A) Zero-shot mais enxuto, porque um pedido curto tende a reduzir a liberdade do modelo e a variação entre as semanas.
- B) Chain-of-thought, porque pedir as etapas antes do texto tende a fixar a organização do relatório e reduzir a variação.
- C) Role-based, porque uma persona de analista experiente tende a trazer o formato típico desses relatórios e firmá-lo.
- D) Instruction tuning via prompt, porque comandos detalhados do que entregar e de como entregar deixam a saída padronizada.

## 10. O mesmo prompt detalhado de instruction tuning rendeu muito bem no modelo X e só razoavelmente no modelo Y. Qual explicação é a mais coerente com a aula?
- A) O prompt não altera os pesos, e o resultado tende a ser melhor em modelos já afinados para esse estilo de entrada.
- B) O prompt coube inteiro na janela de contexto de X, e em Y foi truncado, o que tirou parte das instruções detalhadas.
- C) A técnica exige um conjunto de dados supervisionado, e a diferença vem de X ter recebido esses dados com o prompt.
- D) A técnica exige um passo a passo explícito para funcionar, e a diferença vem de X ter exposto o raciocínio e Y não.
