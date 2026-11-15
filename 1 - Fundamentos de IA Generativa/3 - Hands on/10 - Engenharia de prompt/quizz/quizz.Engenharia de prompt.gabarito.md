# Gabarito — Engenharia de prompt

## 1. Risco de levar o zero-shot de uma tarefa conhecida para um formato próprio
**Correta: C**
**Por quê:** O professor indica o zero-shot quando o modelo já desempenha bem a tarefa, como a classificação de sentimento, para a qual várias LLMs já estão preparadas. Fora disso, a desvantagem aparece: a resposta pode vir fora do padrão ou do formato desejado, e o resultado depende fortemente da clareza da instrução.
- **A:** A falta de profundidade é uma desvantagem real, mas o zero-shot não limita os tokens de saída, e o formato é justamente o que ele não garante.
- **B:** O exemplo de sentimento funciona por ser um padrão para o qual os modelos estão preparados. A aula não permite supor o mesmo para um formato interno da empresa, e o custo baixo é a vantagem do zero-shot.
- **D:** A aula diz que o few-shot reduz a alucinação, mas não que a persona resolve o formato: ela influencia tom, vocabulário e profundidade.
**Conceito:** Quando o zero-shot é suficiente

## 2. Economia do zero-shot versus custo total
**Correta: A**
**Por quê:** O zero-shot economiza tokens em cada pedido, mas a aula anterior mostrou que uma pergunta aberta gasta mais até a resposta tomar forma, porque são precisas mais interações para corrigir o rumo. O ganho de um prompt específico está no custo total.
- **B:** Ignora que cada rodada soma tokens de entrada e de saída; somadas, as rodadas podem custar mais que um prompt bem feito.
- **C:** O zero-shot depende fortemente da clareza da instrução. Pedidos abertos explicam a necessidade de correção, e um modelo mais barato não muda isso.
- **D:** É verdade que um prompt específico gasta mais por chamada, mas o ganho vem de reduzir o retrabalho, então ele aparece justamente quando há rodadas de correção, e não só em volume alto.
**Conceito:** Custo por chamada versus custo total do prompt

## 3. Exemplos enviesados no few-shot
**Correta: D**
**Por quê:** No few-shot, o modelo infere o critério a partir dos pares de entrada e saída. Se os rótulos estão enviesados, ele aprende um padrão ruim, e a saída fica pior do que poderia.
- **A:** Três exemplos já bastam para começar, segundo o professor, e o caso mostra o modelo seguindo os rótulos, e não os ignorando.
- **B:** Um prompt não altera os pesos. O "treinar" do professor é figura de linguagem, e o efeito não passa para outras sessões.
- **C:** O sintoma é o oposto: o modelo seguiu o critério dos exemplos em vez de passar por cima dele.
**Conceito:** Few-shot depende da qualidade dos exemplos

## 4. Subir de 3 para 40 exemplos
**Correta: B**
**Por quê:** O professor diz que, quanto mais exemplos, melhor, e aponta o preço: mais tokens de entrada e mais tempo para selecionar bons exemplos.
- **A:** Os exemplos fazem parte do prompt e não ficam memorizados no modelo. A entrada continua carregando os pares.
- **C:** Exemplos ocupam tokens de entrada; essa é a primeira desvantagem citada na aula.
- **D:** O custo sobe, mas a aula não descreve queda de aderência: o professor diz o contrário, que quanto mais exemplos, melhor.
**Conceito:** Troca entre controle e custo no few-shot

## 5. Por que o CoT ajuda em lógica
**Correta: A**
**Por quê:** O professor lembra que um Transformer compreende sequenciamento de texto, e não lógica. O CoT o direciona a se sair melhor em pedidos que dependem de encadeamento.
- **B:** O modelo continua sem compreender lógica, e os passos escritos não provam nada: o professor alerta que eles também precisam ser conferidos.
- **C:** Aleatoriedade é assunto dos parâmetros de geração, como a temperatura, que são separados do texto do prompt. Pedir o passo a passo não os altera.
- **D:** As etapas são geradas em sequência, e o CoT gasta mais tokens, não menos.
**Conceito:** Mecanismo do chain-of-thought

## 6. CoT como depuração
**Correta: D**
**Por quê:** É o fluxo que o professor descreve: pedir o passo a passo, identificar o erro, mandar corrigir aquele trecho, ver de novo e só então deixar executar.
- **A:** Sem ler os passos, perde-se o que torna o CoT útil aqui: inspecionar e corrigir o processo intermediário.
- **B:** Votar entre execuções é outra ideia, que a aula não apresenta, e não ler as etapas descarta a transparência.
- **C:** O prompt mais simples depois do CoT serve para organizar a resposta longa. A sujeira é efeito do formato, não a causa do erro de raciocínio.
**Conceito:** CoT para depurar o raciocínio

## 7. Afirmação incorreta sobre o CoT
**Correta: C**
**Por quê:** A afirmação é falsa: a transparência depende do modelo. O professor conta que o ChatGPT, em uma atualização, inventava coisas no meio da cadeia, e por isso o passo a passo também precisa ser conferido.
- **A:** Verdadeira: é a desvantagem citada de resposta longa e suja, que pode exigir outro prompt.
- **B:** Verdadeira: o professor alerta para o custo via API.
- **D:** Verdadeira: são os usos citados na aula, em que a lógica é encadeada.
**Conceito:** Limites do chain-of-thought

## 8. Limite da persona
**Correta: B**
**Por quê:** A desvantagem citada é que o modelo fica nichado no papel e não abre quando chega algo mais amplo, a menos que receba esse direcionamento. Ajustar a persona exige testes.
- **A:** A aula não atribui esse efeito à janela de contexto. O sintoma vem de o modelo seguir o papel, e não de falta de espaço.
- **C:** A persona influencia tom, vocabulário e profundidade, e o resumo do professor inclui o enquadramento. A temperatura não explica o sintoma.
- **D:** A aula liga o efeito ao papel definido, e não ao andamento da conversa. Reiniciar a sessão com a mesma persona traria o mesmo nicho.
**Conceito:** Trade-off do role-based

## 9. Estratégia para saída padronizada
**Correta: D**
**Por quê:** Instruction tuning define o que se quer, em que estilo e em que tamanho, como no exemplo da inflação. A aula aponta como vantagens o estilo direto e a facilidade de padronizar, ao preço de exigir precisão de comando.
- **A:** Zero-shot pode vir fora do formato desejado e depende fortemente da clareza; um pedido mais curto dá ao modelo mais liberdade, não menos.
- **B:** CoT inspeciona o raciocínio e deixa a resposta mais longa e suja. Ele não fixa o formato da saída.
- **C:** A persona influencia tom, vocabulário e profundidade, mas a aula não diz que ela fixa tamanho ou estrutura.
**Conceito:** Instruction tuning para padronizar

## 10. Por que o mesmo prompt rende diferente entre modelos
**Correta: A**
**Por quê:** Via prompt, os pesos não mudam. A técnica funciona bem em modelos já afinados para esse tipo de entrada, como o GPT, e alguns respondem melhor que outros, por isso o professor recomenda conferir.
- **B:** Nada no cenário indica truncamento, e a aula atribui a diferença ao afinamento de cada modelo. O professor cita prompts desse tipo com 3 a 4 páginas.
- **C:** A lógica lembra o treinamento supervisionado, mas via prompt não há conjunto de dados enviado para treino.
- **D:** A aula trata CoT e instruction tuning como estratégias distintas, e o passo a passo não é requisito desta.
**Conceito:** Dependência do modelo no instruction tuning
