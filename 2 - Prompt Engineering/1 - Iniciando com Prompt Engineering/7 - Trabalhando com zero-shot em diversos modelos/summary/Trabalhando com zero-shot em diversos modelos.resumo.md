# Trabalhando com zero-shot em diversos modelos — resumo

## De role prompting para técnicas mais usadas

Depois do código de role prompting, o professor passa para as categorias de prompt mais fortes e mais usadas no dia a dia. A primeira é o zero-shot, que, no chute dele, é o tipo de prompt mais usado no mundo.

## O que é zero-shot

Zero-shot é a técnica em que o modelo recebe só a instrução da tarefa, sem nenhum exemplo. O objetivo é testar a generalização e a capacidade base que o modelo já tem.

## A marca do zero-shot é não ter exemplo

O que define o zero-shot não é o tamanho do prompt, é a falta de exemplos do tipo "de → para": "se entrar assim, responda assim". Perguntar "o que é isso?" no ChatGPT é zero-shot. Um prompt de duas páginas também é, desde que não traga nenhum exemplo de como a IA deve responder. Na prática, porém, o zero-shot aparece mais em prompts menores.

## Quando usar

- resumir um parágrafo de um artigo;
- perguntar a capital de um país;
- gerar rapidamente o esqueleto de uma API;
- traduzir uma frase curta;
- explicar o que é uma arquitetura orientada a eventos;
- sistemas de alta escala que precisam economizar tokens.

O último caso é uma decisão de custo. Um sistema que faz milhões de chamadas a um LLM paga por cada token, então quanto menos se escreve, melhor. O zero-shot ajuda porque o modelo consegue trabalhar mesmo sem exemplos de como responder, o que deixa o prompt mais curto.

## Limitações

- **Problemas complexos:** pode falhar; não se manda uma pergunta muito complexa sem dar exemplo nenhum.
- **Pouco controle do formato de saída:** o modelo responde do jeito que quiser, conforme a temperatura configurada.
- **Alucinação:** a IA pode inventar informação que não conhece. O zero-shot não resolve isso.
- **Sensibilidade ao texto:** trocar uma palavra do prompt pode mudar muito a saída.
- **Raciocínio lógico elaborado:** o zero-shot não serve para isso, porque é só perguntar e responder.

O resumo do professor acrescenta que pedir um formato explícito ajuda, mas não tem a estabilidade de mostrar exemplos quando a saída precisa ser muito padronizada.

## O experimento: três prompts zero-shot

O professor monta um script Python com três mensagens, todas zero-shot:

1. "Qual é a capital do Brasil?"
2. "Descubra a intenção do usuário do seguinte texto: estou procurando um restaurante perto de São Paulo que tenha uma boa classificação para comida japonesa."
3. "Qual é a capital do Brasil? Responda apenas com o nome da cidade."

O primeiro é uma pergunta factual, o segundo pede uma inferência sem exemplo e o terceiro testa quanto uma instrução de formato já molda a saída.

## Detecção de intenção

Entender a intenção do usuário é importante em arquiteturas com LLM, como o RAG (Retrieval Augmented Generation). Quando o usuário pergunta algo, o sistema tenta descobrir o que está por trás da pergunta para decidir, por exemplo, quais filtros usar na busca no banco de dados.

## GPT-3.5 Turbo

O primeiro teste usa o GPT-3.5 Turbo, um modelo antigo, sem linha de raciocínio automática. Ele é rápido, mas os modelos atuais também são, então a diferença que interessa não é a velocidade, é a forma de raciocinar.

- **Capital:** respondeu só "Brasília", com 3 tokens de saída.
- **Intenção:** respondeu quase repetindo a pergunta ("o usuário busca recomendações de restaurantes japoneses bem avaliados em São Paulo"), mas entendeu a intenção, sem que nenhum formato tivesse sido pedido.
- **Capital com restrição:** "Brasília".

O professor reexecuta o script e lembra que, a cada execução, as respostas podem mudar.

## GPT-4

Com o GPT-4, os mesmos prompts dão respostas diferentes:

- **Capital:** "A capital do Brasil é Brasília", uma frase completa, que gasta mais tokens do que o "Brasília" do 3.5 Turbo.
- **Intenção:** uma redação mais elaborada, "buscar um restaurante japonês muito bem avaliado em São Paulo".
- **Capital com restrição:** só "Brasília", seguindo o formato pedido.

Tudo continua sendo zero-shot, e tudo muda conforme o modelo. As chamadas ficaram entre 19 e 53 tokens.

## GPT-5 nano e o custo do reasoning

Com o GPT-5 nano, a primeira diferença é a demora para responder. A segunda é o consumo de tokens: para devolver só "Brasília.", ele gastou 151 tokens de saída, contra 16 tokens no total do GPT-3.5 Turbo para a mesma pergunta. No terceiro prompt foram 157. Na intenção, ele respondeu com um rótulo curto entre parênteses ("location-based restaurant search with Japanese cuisine preference").

O motivo é que o GPT-5 nano usa reasoning: gera uma linha de raciocínio interna, e cada trecho dela consome tokens, mesmo que nada disso apareça na resposta final. A resposta tem uma palavra, mas os tokens foram gastos por baixo dos panos. E o token de saída costuma ser o mais caro. O professor adianta que linha de raciocínio e os tipos de prompt para ela serão assunto mais adiante.

## O que o experimento mostra

Entender o tipo de modelo é importante: o mesmo prompt zero-shot muda de qualidade, estilo e custo conforme o modelo escolhido. Segundo o resumo do professor, a leitura certa não é "qual modelo acertou", já que todos acertam uma pergunta simples, e sim a aderência ao formato pedido, a variação de estilo, o tempo de resposta e o custo em tokens. Um modelo com reasoning pode parecer mais sofisticado e ser economicamente inadequado para tarefas triviais em grande volume.
