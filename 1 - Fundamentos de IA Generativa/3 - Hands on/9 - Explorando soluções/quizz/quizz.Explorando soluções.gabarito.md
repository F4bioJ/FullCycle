# Gabarito — Explorando soluções

## 1. Por onde começar com pouco prazo e sem time de ML
**Correta: C**
**Por quê:** o professor diz que, em uma construção de tiro curto, o prompt é o mais barato, porque controla o comportamento da LLM sem mudar arquitetura nem pesos. Resposta ampla e fora do formato é justamente o que uma instrução mais específica ataca.
- **A:** fine-tuning exige tempo, recursos e capacidade técnica, o que a startup não tem. Além disso, nada mostra que o problema esteja nos pesos antes de testar uma instrução melhor.
- **B:** o RAG serve quando falta informação externa ao prompt. Resposta ampla vem de pedido aberto, não de falta de documentos.
- **D:** a temperatura ajusta o comportamento probabilístico, não o formato pedido. Ela não substitui dizer o que se quer.
**Conceito:** prompt como primeira opção

## 2. Sem o prompt, a resposta volta a ser genérica
**Correta: A**
**Por quê:** o prompt influencia o comportamento da LLM sem mudar arquitetura nem pesos. O refinamento melhora a instrução, não o modelo. Quem não envia a instrução recebe o comportamento original.
- **B:** um prompt não ajusta pesos em momento nenhum, nem de forma temporária. Mexer nos pesos é o que o treinamento faz.
- **C:** a janela de contexto é o limite do que o modelo enxerga de uma vez no que recebeu. Ela não guarda prompts de uma chamada para outra, e o colega nem enviou o prompt.
- **D:** o padrão não foi incorporado aos pesos. A variação entre execuções existe, mas não é a causa aqui, já que a diferença está na ausência da instrução.
**Conceito:** prompt não altera os pesos

## 3. Prompt testado que não alcança o comportamento pedido
**Correta: D**
**Por quê:** o resumo do professor diz que o fine-tuning entra quando só as instruções não bastam e é preciso adaptar mais a fundo o comportamento do modelo, avançando quando o ganho esperado justifica o investimento. É o cenário descrito: prompt já testado, informação disponível e disposição para investir.
- **A:** o RAG resolve acesso a informação externa, e a informação já está à mão. Mais documentos não mudam a forma de o modelo se comportar.
- **B:** temperatura mais alta aumenta a variedade, sem direcionar o modelo para um comportamento específico. Ela não acrescenta conhecimento.
- **C:** o prompt é a opção mais barata no curto prazo, mas o cenário já mostrou o limite dele. Insistir ignora a troca entre custo e resultado.
**Conceito:** quando o fine-tuning se justifica

## 4. Política nova e resposta com a regra antiga
**Correta: B**
**Por quê:** o prompt já está bem estruturado, e o que falta é o conteúdo novo, que o modelo não tem. O resumo do professor diz que o RAG é útil quando o problema exige informação externa ao prompt.
- **A:** especificar melhor ajuda quando o pedido está aberto. Instrução nenhuma traz uma regra que o modelo não conhece.
- **C:** temperatura baixa favorece os tokens prováveis, mas sem a informação nova o mais provável continua sendo a regra antiga.
- **D:** fine-tuning é a opção cara, que mexe no treinamento. Repeti-lo a cada mudança de política é o oposto de barato.
**Conceito:** limite do prompt e papel do RAG

## 5. Texto mais elegante, sem especificar mais
**Correta: B**
**Por quê:** a aula separa saber escrever de dar instruções claras e eficazes. "O óbvio precisa ser dito": o que melhora a resposta é definir limite, linguagem, foco e formato, como no exemplo do resumo em até cinco linhas. Frases mais elegantes não acrescentam nada disso.
- **A:** a aula não atribui o ganho ao tamanho do texto. Mais palavras sem nova especificação não direcionam a resposta.
- **C:** a aula liga a precisão a uma instrução clara, não à elegância do pedido. Ela não diz que o modelo espelha a qualidade do texto recebido.
- **D:** a primeira parte até se aproxima da correta, mas a causa está errada: a aula mostra que um prompt melhor muda a resposta sem nenhum retreino.
**Conceito:** saber escrever não é saber instruir

## 6. Temperatura baixa e resposta ainda genérica
**Correta: D**
**Por quê:** o resumo do professor separa os dois: os parâmetros ajustam o comportamento probabilístico, e o prompt define a direção da saída. Baixar a temperatura estabiliza a resposta, mas um pedido vago continua produzindo algo genérico.
- **A:** é o inverso: temperatura baixa favorece os tokens de maior probabilidade.
- **B:** temperatura e janela de tokens são controles diferentes, e um não encurta o outro.
- **C:** temperatura alta aumenta a variedade, sem aproximar a resposta do tema. Ela não dá foco a um pedido vago.
**Conceito:** parâmetros de geração x prompt

## 7. Mesmo prompt, 10 saídas diferentes
**Correta: A**
**Por quê:** o resumo do professor diz que precisão não significa perfeição, e sim maior aderência ao resultado esperado. Na fala, ele conta que a mesma pergunta feita 10 vezes veio de 10 jeitos diferentes, e que o tamanho da variação depende do modelo.
- **B:** é a expectativa que a aula desmonta: é muito difícil vir 10 vezes igual ou muito parecido, mesmo com instrução boa.
- **C:** a variação é normal na geração e não indica problema nos pesos. Retreinar não está em questão aqui.
- **D:** o grau de variação depende do modelo, mas não só dele: o resumo do professor diz que instruções mais claras ajudam a estabilizar o comportamento observado. O ganho do prompt também não se limita ao formato.
**Conceito:** precisão não é perfeição

## 8. Prompt com mais tokens de entrada
**Correta: C**
**Por quê:** o resumo do professor diz que perguntas abertas exigem mais interações para corrigir o rumo e que um prompt melhor reduz o custo total para chegar à resposta. A comparação certa não é a de uma chamada, e sim a do caminho até a resposta útil.
- **A:** a aula defende instruções mais específicas, não prompts curtos: o exemplo bom dela é mais longo que o genérico.
- **B:** a aula não promete uma resposta menor em cada chamada. O argumento dela é reduzir as interações para corrigir o rumo, ou seja, o caminho inteiro.
- **D:** a aula cita a redução de custo justamente nas APIs pagas e diz que isso também vale para sistemas corporativos em escala.
**Conceito:** economia de tokens é custo total

## 9. Afirmação incorreta sobre o custo de prompts vagos
**Correta: D**
**Por quê:** esta é a afirmação incorreta. O resumo do professor diz o contrário: em sistemas corporativos em escala, pequenas ineficiências se multiplicam rapidamente. O volume não dilui o custo, ele o soma a cada chamada.
- **A:** é verdadeira. É a ressalva do professor: quem já paga o ChatGPT pode fazer muitas perguntas.
- **B:** é verdadeira. É o exemplo do Veo 3: promptar mal desperdiça os créditos, e sobram poucos vídeos aproveitáveis.
- **C:** é verdadeira. É o exemplo do Manus de graça: os tokens acabam depois de certo uso.
**Conceito:** o peso do custo muda com o cenário

## 10. Prompts livres e o teste de estilos
**Correta: A**
**Por quê:** a aula diz que o prompt facilita o controle e os testes A/B de estilo, e que assim se automatizam fluxos com consistência. O resumo do professor completa: quanto mais explícita a instrução, mais fácil é reproduzir, avaliar e ajustar. Com cada atendente improvisando, não há o que comparar.
- **B:** o exemplo da própria aula é um teste A/B de estilos de prompt, como ser mais ou menos simpático.
- **C:** a variação existe, mas a aula não condiciona os testes ao fine-tuning. Testar prompts é justamente o caminho que dispensa mexer no modelo.
- **D:** a aula mostra o contrário: o estilo da resposta pode ser ajustado pela instrução, sem retreino.
**Conceito:** prompt como artefato testável
