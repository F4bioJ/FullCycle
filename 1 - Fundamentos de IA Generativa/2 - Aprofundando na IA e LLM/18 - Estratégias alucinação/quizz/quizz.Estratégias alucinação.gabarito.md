# Gabarito — Estratégias alucinação

## 1. Acréscimo ao prompt que ataca a causa da resposta inventada
**Correta: A**
**Por quê:** O professor liga a alucinação à tendência da LLM de **agradar**, maior quando o usuário a trata como pessoa. A instrução de cautela mostra que ela não precisa agradar e reduz a tendência de completar a lacuna com criatividade.
- **B:** Pedir fontes é uma técnica válida, mas o efeito que o professor atribui a ela é forçar consistência e permitir a verificação, não tirar a pressão de agradar.
- **C:** Pedir o raciocínio também é válido, mas não impede o modelo de completar a lacuna: dá mais consistência lógica e expõe o salto para você ver.
- **D:** É o oposto: tratar o modelo como pessoa é justamente o que o professor aponta como causa da tendência de agradar.
**Conceito:** instrução de cautela contra a tendência de agradar

## 2. Pedir evidências: afirmação INCORRETA
**Correta: C**
**Por quê:** A verificação é do usuário, não do modelo: o professor diz para, depois, ir atrás dos autores e ver se fazem sentido. A lista serve à conferência, não a substitui (e a aula anterior mostrou que o modelo inventa fontes).
- **A:** Verdadeira. O professor diz que pedir as fontes força o modelo a buscar consistência no conhecimento que tem.
- **B:** Verdadeira. A listagem permite que você faça a verificação.
- **D:** Verdadeira. Quando você nicha o local da busca, a chance de alucinar cai.
**Conceito:** pedir fontes como apoio à verificação humana

## 3. O que o raciocínio exposto permitiu no exemplo da floresta
**Correta: D**
**Por quê:** O valor do Chain of Truth Proofing é expor o caminho: no exemplo da Amazônia, a afirmação extrema aparece sem nenhum passo de busca, e isso mostra que o modelo deu um salto e inventou.
- **A:** Explicar o caminho dá mais consistência lógica, mas não garante a conclusão; o próprio cenário mostra uma conclusão sem base.
- **B:** O professor diz o contrário: além de olhar o processamento do Manus, pedir a explicação é o jeito melhorado, e serve em qualquer ferramenta.
- **C:** A técnica não impede o erro (o cenário mostra que ele aconteceu); ela o torna visível para você.
**Conceito:** Chain of Truth Proofing para detectar saltos de inferência

## 4. Instruções repetidas em todo prompt
**Correta: B**
**Por quê:** A persona ou escopo declarado (pasta de conversa no ChatGPT, agente no Copilot) permite colocar ali todas as instruções anteriores, para não precisar repeti-las a cada uso.
- **A:** O professor recomenda o contrário: não ficar pulando de uma ferramenta para outra.
- **C:** Few-shot é uma técnica a mais, com outro propósito (calibrar até onde inferir por exemplos); não substitui as outras e, segundo o professor, dá muito trabalho.
- **D:** A afinação pelo uso é uma observação do professor, mas ele não a apresenta como motivo para retirar as instruções; para elas, a sugestão é deixá-las no escopo.
**Conceito:** persona/escopo como contexto persistente

## 5. Efeito de declarar "dados até 2023, não prevê o futuro"
**Correta: A**
**Por quê:** A declaração mostra ao modelo o que ele é e o limite do que tem; daqui para frente, ele não deve inventar nem tentar prever. O efeito é reduzir respostas fora desse limite.
- **B:** Few-shot é dar exemplos de certo e errado; a declaração é uma instrução de escopo, sem exemplos.
- **C:** O enriquecimento com dados externos é da técnica de pedir e nichar fontes; declarar o limite restringe o modelo, não dispara busca.
- **D:** O professor diz o contrário: no escopo você pode colocar também as instruções anteriores (cautela, fontes), para não repeti-las. Uma não dispensa a outra.
**Conceito:** escopo declarado limita o que o modelo infere

## 6. Few-shot Prompting
**Correta: D**
**Por quê:** Você dá exemplos do que entende como correto e incorreto; com o tempo o modelo entende até onde pode responder inferindo e vai sendo "afinado" para você.
- **A:** Few-shot acontece no prompt, na conversa; não é treinamento. O fine tuning supervisionado (aula 2.14) é que ajusta os pesos.
- **B:** O propósito descrito na aula é justamente calibrar o quanto o modelo pode inferir, não só imitar um formato.
- **C:** A primeira parte está certa, mas é a técnica de que o professor menos gosta, porque dá muito trabalho.
**Conceito:** few-shot como calibração por exemplos, com custo de preparo

## 7. O que se perde trocando de ferramenta toda semana
**Correta: C**
**Por quê:** O professor relata que, depois de anos de uso, a conta passa a falhar menos (ChatGPT mais afinado que Gemini, que é mais que Manus, e Llama menos ainda), e dá a dica de não ficar pulando de uma para outra.
- **A:** As técnicas de prompt ajudam em qualquer ferramenta, mas o professor relata diferença entre as contas pelo tempo de uso; não diz que elas igualam tudo.
- **B:** O professor atribui a afinação ao tempo de uso, não à persona configurada.
- **D:** A aula não fala de bases de treino diferentes; a diferença que o professor relata é entre as contas dele.
**Conceito:** afinação da conta pelo uso contínuo

## 8. Lição do precedente inexistente
**Correta: B**
**Por quê:** O professor insiste que não foi um erro de coerência: o fato "brotou", foi inventado, e até poderia ser coerente. Plausibilidade não substitui existência, e isso derruba a credibilidade.
- **A:** O professor diz que o problema não foi incoerência constitucional ("eu nem sei dizer se era").
- **C:** O tribunal não achou registro do caso: não era um caso real com detalhe errado, era inexistente.
- **D:** Além da retratação, o tribunal estabeleceu diretrizes mais rígidas para o uso de IA (o professor lembra que nos EUA isso varia por estado).
**Conceito:** fato fabricado e plausível em documento formal

## 9. Tipo de alucinação nos casos jurídicos
**Correta: D**
**Por quê:** Os três casos envolvem citações e precedentes inexistentes: a alucinação de citação ou fonte, que a aula 2.17 define como citar frases, artigos ou casos que não existem. Num contexto em que o juiz confere cada detalhe e as consequências são multas, retratação e reputação, a referência falsa é descoberta e cobrada. O professor chega a dizer "erro factual" no caso de Utah, mas pela classificação da aula anterior o que define o caso é a fonte inexistente, não um fato real distorcido.
- **A:** Contextual é a deriva ao longo de uma conversa longa; os casos não são sobre perda de coerência, e sim sobre referências que não existem.
- **B:** Factual, na classificação da aula 2.17, é afirmar errado algo que existe (Marie Curie com três Nobel em vez de dois); nos casos, as referências não existiam.
- **C:** Estrutural é sobre fórmulas, código e instruções; a estrutura formal da peça não é o que falhou.
**Conceito:** alucinação de citação em domínio que exige precisão

## 10. Postura recomendada para o escritório
**Correta: A**
**Por quê:** A empolgação precisa existir, mas com cautela: a IA é como um estagiário, alguém aprendendo, cujo trabalho você valida antes de passar adiante como verdade.
- **B:** As técnicas diminuem a alucinação, mas o professor não autoriza relaxar a validação; nos casos, uma única citação falsa já bastou para o dano.
- **C:** A afinação pelo uso é uma dica do professor, mas ele nunca a apresenta como substituta da validação.
- **D:** O professor diz que a empolgação precisa acontecer e que é preciso querer usar; ele pede cautela, não espera.
**Conceito:** IA como estagiário: usar com validação
