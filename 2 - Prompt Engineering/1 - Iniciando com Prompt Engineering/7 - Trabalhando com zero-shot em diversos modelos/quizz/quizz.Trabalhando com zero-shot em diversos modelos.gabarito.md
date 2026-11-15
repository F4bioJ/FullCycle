# Gabarito — Trabalhando com zero-shot em diversos modelos

## 1. Prompt de duas páginas sem resposta pronta
**Correta: C**
**Por quê:** a aula diz que a marca do zero-shot é não dar exemplos ("de → para"). Um prompt de duas páginas sem exemplo continua sendo zero-shot; o tamanho não importa.
- **A:** contexto não é exemplo. Few-shot é dar exemplos de entrada e saída, não descrever muito o sistema.
- **B:** o zero-shot aparece mais em prompts curtos, mas isso é uso comum, não definição. O professor cita justamente o prompt de duas páginas como zero-shot.
- **D:** a técnica é definida pelo prompt, não pelo modelo. No experimento, o GPT-5 nano usou reasoning e os prompts continuaram sendo zero-shot.
**Conceito:** definição de zero-shot (ausência de exemplos, não tamanho)

## 2. Zero-shot em sistema de alta escala
**Correta: A**
**Por quê:** a aula cita sistemas de alta escala que precisam economizar tokens: com milhões de chamadas, quanto menos se escreve, melhor, e o zero-shot funciona sem os exemplos que alongariam o prompt.
- **B:** o zero-shot não reduz a alucinação; ela é uma das limitações listadas na aula.
- **C:** é o contrário: pouco controle do formato de saída é limitação do zero-shot.
- **D:** o reasoning depende do modelo, não da técnica. O GPT-5 nano gastou 151 tokens de saída com um prompt zero-shot.
**Conceito:** zero-shot e economia de tokens em alta escala

## 3. Saída que muda de estrutura após editar o prompt
**Correta: D**
**Por quê:** a aula lista duas limitações que explicam o caso: pouco controle do formato de saída (o modelo responde do jeito que quiser) e saída que varia muito com pequenas mudanças no prompt.
- **A:** alucinação é inventar informação, não variar a forma de uma resposta correta.
- **B:** a temperatura influencia a resposta, mas a aula diz que trocar uma palavra do prompt muda muito a saída. Baixar a temperatura não libera o texto para ser reescrito sem efeito.
- **C:** na aula de role prompting, o papel muda estilo e comportamento, mas nem sempre é seguido; não substitui a padronização da saída.
**Conceito:** limitações do zero-shot (formato e sensibilidade ao texto)

## 4. Afirmação INCORRETA sobre as limitações
**Correta: B**
**Por quê:** a aula diz que o zero-shot pode gerar alucinação; não ter exemplos não reduz esse risco. É a única afirmação falsa.
- **A:** correta: a saída varia com pequenas mudanças no prompt.
- **C:** correta: sem formato pedido, o modelo responde do jeito que quiser, de acordo com a temperatura configurada.
- **D:** correta: o professor reexecuta o script e avisa que, a cada execução, as respostas podem mudar.
**Conceito:** limitações do zero-shot (alucinação)

## 5. Detecção de intenção antes da busca no RAG
**Correta: D**
**Por quê:** o professor explica que, num RAG, o sistema tenta entender a intenção por trás da pergunta para saber, por exemplo, quais filtros usar ao buscar no banco de dados.
- **A:** o modelo do teste devolveu a intenção em inglês, mas a aula não liga a detecção de intenção a traduzir a pergunta; o objetivo é orientar a busca.
- **B:** no RAG, a intenção orienta a busca, não a elimina.
- **C:** ajustar o tom é assunto de role prompting (aula 5), não o papel da intenção no RAG.
**Conceito:** detecção de intenção com zero-shot e RAG

## 6. GPT-4 respondeu com frase completa e quebrou o parser
**Correta: A**
**Por quê:** no experimento, o terceiro prompt ("responda apenas com o nome da cidade") fez o GPT-4 devolver só "Brasília", enquanto a pergunta sem restrição virou frase completa. Uma instrução de formato no próprio zero-shot resolve sem trocar de modelo.
- **B:** o estilo muda com o modelo, mas o teste mostrou que o prompt também controla a saída: com a restrição, o GPT-4 respondeu só o nome. E o time quer manter o GPT-4.
- **C:** a frase completa é o estilo do GPT-4 (ele gastou mais tokens por dar "uma resposta mais completa"), não um acaso da execução.
- **D:** a saída é sensível a pequenas mudanças, mas isso é uma limitação, não uma forma de controle: trocar uma palavra não pede o formato desejado.
**Conceito:** instrução de formato em zero-shot e diferença entre modelos

## 7. GPT-5 nano gastando muitos tokens para "Brasília."
**Correta: C**
**Por quê:** o professor explica que o GPT-5 nano usa reasoning: gera uma linha de raciocínio interna e consome tokens a cada trecho, mesmo sem mostrá-la na resposta final.
- **A:** a aula não fala em resposta gerada e cortada; os tokens vêm do raciocínio interno.
- **B:** a aula não atribui a diferença à tokenização; o GPT-3.5 Turbo respondeu "Brasília" com 3 tokens de saída.
- **D:** a aula não fala em gerar várias respostas e escolher a melhor; o que consome os tokens é a linha de raciocínio interna.
**Conceito:** custo oculto dos modelos com reasoning

## 8. Trocar por modelo com reasoning numa tarefa simples e massiva
**Correta: B**
**Por quê:** a aula mostrou que o GPT-5 nano demora mais e gasta tokens de raciocínio que não aparecem, e o token de saída costuma ser o mais caro. Numa tarefa trivial e massiva, isso pesa sem ganho de acerto.
- **A:** o raciocínio interno não aparece na resposta: o GPT-5 nano seguiu a restrição e respondeu só "Brasília.".
- **C:** a aula não liga reasoning a exemplos; o GPT-5 nano funcionou com prompts zero-shot.
- **D:** o professor diz que o modelo "torrou os seus tokens por baixo dos panos": eles são tokens de saída e contam no custo, mesmo invisíveis.
**Conceito:** escolha de modelo (custo e latência do reasoning)

## 9. Zero-shot em lógica com várias etapas
**Correta: C**
**Por quê:** a aula lista entre as limitações que o zero-shot pode falhar em problemas complexos e não serve para raciocínio lógico elaborado, porque é só perguntar e responder.
- **A:** o papel dá contexto e muda estilo (aula 5), mas a aula não diz que ele faz o modelo raciocinar em etapas.
- **B:** um prompt longo sem exemplos continua sendo zero-shot; o tamanho não remove a limitação para raciocínio elaborado.
- **D:** o problema não é falta de dados para buscar; detecção de intenção e RAG orientam a busca, não o raciocínio lógico.
**Conceito:** limitações do zero-shot (raciocínio elaborado)

## 10. Prompt de role prompting da aula anterior
**Correta: A**
**Por quê:** zero-shot é dar só a instrução, sem exemplos. O papel no system prompt dá contexto (aula 5), mas não mostra nenhuma resposta-modelo, então o prompt é zero-shot com role.
- **B:** as técnicas se combinam: o role muda o contexto, e o zero-shot diz respeito à ausência de exemplos, com ou sem system prompt.
- **C:** o papel não é uma demonstração de resposta; few-shot exige exemplos de entrada e saída.
- **D:** pedir um formato não é dar exemplo; o terceiro prompt da aula ("responda apenas com o nome da cidade") também é zero-shot.
**Conceito:** zero-shot combinado com role prompting
