# Quizz — Trabalhando com zero-shot em diversos modelos

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 7
**Base:** material da aula

---

## 1. Um dev escreve um prompt de duas páginas com o contexto do sistema, as regras de negócio e a estrutura esperada da resposta, mas não mostra nenhuma resposta pronta. Como a aula classifica esse prompt?
- A) Não é zero-shot: com tanto contexto descrito, o prompt passa a ser tratado como few-shot.
- B) Não é zero-shot: a técnica é a pergunta curta e direta, como "o que é isso?" no ChatGPT.
- C) É zero-shot: o que define a técnica é a falta de exemplos "de → para", e não o tamanho.
- D) Depende do modelo: num modelo com reasoning, o mesmo prompt passa a contar como outra técnica.

## 2. Um sistema faz milhões de chamadas por dia a um LLM para tarefas simples, como traduzir frases curtas. Por que a aula aponta o zero-shot como boa escolha nesse cenário?
- A) Sem exemplos, o prompt fica mais curto, e em milhões de chamadas a economia de tokens pesa no custo.
- B) Sem exemplos, o modelo tem menos material para copiar e, por isso, alucina menos em alta escala.
- C) Sem exemplos, o formato de saída fica mais estável, o que facilita processar milhões de respostas.
- D) Sem exemplos, o modelo dispensa a linha de raciocínio interna e gasta menos tokens de saída.

## 3. Uma aplicação envia um prompt zero-shot e repassa a resposta a outro sistema, que espera sempre a mesma estrutura. Depois que alguém troca uma palavra do prompt, as respostas mudam de forma. Pela aula, qual leitura está mais correta?
- A) Foi alucinação: sem exemplos, o modelo inventou um formato que não existia no prompt.
- B) Foi a temperatura alta: baixá-la resolve, e o prompt pode ser reescrito à vontade depois.
- C) Foi falta de role: um papel no system prompt fixaria a estrutura sem precisar de exemplos.
- D) Duas limitações do zero-shot: pouco controle de formato e saída sensível ao texto.

## 4. Sobre as limitações do zero-shot apresentadas na aula, qual afirmação está INCORRETA?
- A) Trocar uma única palavra do prompt pode mudar bastante a resposta do modelo.
- B) Sem exemplos para imitar, o zero-shot reduz o risco de o modelo inventar dados.
- C) Sem um formato pedido, a estrutura da resposta fica a critério do modelo e da temperatura.
- D) A resposta pode variar de uma execução para outra, mesmo sem mudar o prompt.

## 5. Num sistema com RAG, antes de buscar documentos, um prompt zero-shot pede ao modelo a intenção do usuário. Pela aula, para que serve esse passo?
- A) Para reescrever a pergunta em inglês, já que o modelo devolveu a intenção nesse idioma.
- B) Para trocar a busca no banco pela resposta do modelo quando a intenção for simples.
- C) Para ajustar o tom da resposta final ao tom que o usuário usou ao fazer a pergunta.
- D) Para entender o que está por trás da pergunta e decidir que filtros usar na busca.

## 6. Um time troca o GPT-3.5 Turbo pelo GPT-4 mantendo o prompt "Qual é a capital do Brasil?". O código que lê a resposta esperava só o nome da cidade e quebrou. O time quer manter o GPT-4. Pelo que a aula mostrou, qual ajuste resolve?
- A) Pedir "responda apenas com o nome da cidade", formato que o GPT-4 seguiu no teste.
- B) Trocar de modelo: o estilo da resposta depende dele, e o prompt não altera esse formato.
- C) Baixar a temperatura, porque a frase completa veio da aleatoriedade, e não do estilo do GPT-4.
- D) Trocar "Qual é" por "Diga qual é", já que a saída muda muito com pequenas mudanças no texto.

## 7. No experimento, o GPT-5 nano respondeu só "Brasília.", mas consumiu bem mais tokens de saída que o GPT-3.5 Turbo para a mesma pergunta. Qual é a causa apontada na aula?
- A) A resposta foi gerada longa e depois cortada para caber no formato pedido pelo prompt.
- B) Modelos nano tokenizam pior o português e gastam mais tokens para a mesma palavra.
- C) Ele gera uma linha de raciocínio interna, que consome tokens mesmo sem aparecer na resposta.
- D) Por ser pequeno, o nano gera várias respostas internas e escolhe a melhor para devolver.

## 8. Uma empresa classifica a intenção de milhões de mensagens simples por dia e testa trocar um modelo sem reasoning por um com reasoning. Os dois acertam quase sempre. Pela aula, o que mais provavelmente se perde com a troca?
- A) Aderência ao formato, porque o raciocínio interno tende a alongar a resposta visível.
- B) Custo e latência: cada chamada demora mais e gasta tokens de raciocínio escondidos.
- C) Generalização, porque o reasoning depende de exemplos e piora quando o prompt é zero-shot.
- D) Latência, mas não custo: os tokens de raciocínio ficam escondidos e não entram na saída.

## 9. Um time usa um prompt zero-shot curto para que o modelo resolva problemas de lógica com várias etapas encadeadas, e os erros são frequentes. Pela aula, qual diagnóstico é o mais coerente?
- A) Faltou um papel no system prompt: com role de especialista, o modelo raciocinaria em etapas.
- B) O prompt está curto: com duas páginas de instruções, mesmo sem exemplos, o modelo acertaria.
- C) A tarefa exige raciocínio elaborado, que o zero-shot não cobre: ele é só pergunta e resposta.
- D) O modelo alucinou por falta de dados, e um RAG com detecção de intenção resolveria os erros.

## 10. Na aula anterior, o system prompt dizia "você é um professor universitário de ciência da computação..." e o user prompt pedia "explique recursão em 50 palavras", sem mostrar nenhuma resposta-modelo. À luz desta aula, como classificar esse prompt?
- A) É zero-shot com role: o papel dá contexto, mas não é exemplo de entrada e saída.
- B) É role prompting, e não zero-shot: com system prompt, ele passa para outra categoria.
- C) É few-shot: o papel diz como responder, o que equivale a um exemplo "de → para".
- D) Não é zero-shot: o limite de 50 palavras define o formato e conta como exemplo.
