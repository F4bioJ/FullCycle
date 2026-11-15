# Engenharia de prompt — resumo

A aula apresenta cinco estratégias de prompt, cada uma indicada para um tipo de situação. A transcrição traz alguns nomes distorcidos ("view short", "Chain of Tough", "Hold-based", "Instruction Tunning"); aqui eles aparecem na forma correta.

## Zero-shot prompting

É a forma mais comum no dia a dia: um único pedido, simples e direto, sem exemplos e sem elaboração.

- **Vantagens:** é simples, rápido de escrever e econômico em tokens. Funciona bem quando o modelo já desempenha muito bem a tarefa.
- **Desvantagens:** a resposta pode vir vaga, pouco profunda ou fora do formato desejado, e depende fortemente da clareza da instrução.

Serve quando não se precisa de tanta precisão, quando ainda não se sabe bem o que se quer e em atividades mais criativas. Exemplo: "classifique o sentimento da frase: estou muito feliz com o produto que acabei de comprar", tarefa para a qual muitas LLMs já estão preparadas.

## Few-shot prompting

Aqui entram exemplos de entrada e saída antes da pergunta real, para o modelo perceber o estilo e o padrão esperados. O professor fala em "treinar" o modelo, mas é uma figura de linguagem: um prompt não muda os pesos, como a aula anterior explicou. O modelo passa a inferir o critério a partir dos exemplos, e não só do comando.

- **Vantagens:** dá mais controle sobre formato e estilo, reduz a alucinação e facilita tarefas ambíguas ou muito contextualizadas.
- **Desvantagens:** ocupa mais tokens de entrada e exige tempo para selecionar bons exemplos. Exemplos ruins ensinam um padrão ruim, e a saída fica pior do que poderia.

No exemplo de sentimento, o prompt traz três frases já rotuladas como positivo, negativo e neutro. Só então vem a frase real: "achei o preço justo, mas o prazo de entrega podia ser melhor". O professor diz que daria para usar 40 exemplos e que, quanto mais exemplos, melhor, mas três já bastam para começar.

## Chain-of-thought prompting (CoT)

Pede ao modelo que explique o raciocínio passo a passo antes de responder. O professor usa isso quando pega um modelo alucinando: pede o passo a passo, identifica onde está o erro, manda corrigir aquele trecho, pede para mostrar de novo e só então libera a execução. O controle passa a valer sobre o processo intermediário, e não apenas sobre o formato final.

O motivo de funcionar vem de um ponto já visto: seguir uma lógica é das coisas mais difíceis para um Transformer, que compreende sequenciamento de texto, e não lógica. O CoT o direciona a se sair melhor em pedidos que dependem de encadeamento, e a maior parte das lógicas é encadeada. O professor cita papers que defendem o uso em cálculo, raciocínio multi-etapa e lógica de programação.

- **Vantagens:** mais precisão e menos erro em tarefas complexas, mais transparência sobre como a resposta foi gerada, e depuração e refinamento mais fáceis.
- **Desvantagens:** a resposta fica mais longa e cheia de sujeira, o que pode exigir outro prompt para organizá-la. Via API, o custo tende a subir bastante.

A transparência depende do modelo. Segundo o professor, o ChatGPT teve uma atualização que inventava coisas no meio da cadeia de pensamento quando não tinha resposta. Isso melhorou depois, mas o passo a passo também precisa ser conferido.

O exemplo: "se João tem 3 maçãs e ganha mais 2, quantas ele tem agora?", pedindo que o modelo conte o passo a passo. A saída provável soma 3 e 2 e chega a 5. O pedido pode ser bem mais elaborado quando a tarefa exige.

## Role-based prompting

O modelo recebe um papel, uma persona: a partir de agora, pense como um advogado, um médico, um cientista de dados ou um professor. Isso influencia tom, vocabulário e profundidade. Dá até para pedir que o modelo leia o que há na web sobre um jornalista e passe a responder no tom dele. Um uso prático é o primeiro contato com o cliente em um escritório de advocacia, em que o modelo já responde como advogado.

- **Vantagens:** mais precisão e coerência em domínios específicos e mais facilidade em contexto profissional, inclusive com uma persona que segue as diretrizes da empresa.
- **Desvantagens:** o modelo fica nichado no papel e não abre quando chega algo mais amplo, a menos que receba esse direcionamento. Ajustar a persona exige muitos testes, porque ela não sai certa de primeira, e o processo gasta bastante.

Exemplo: "você é um advogado trabalhista experiente; explique de forma clara os direitos de um trabalhador segundo a CLT".

## Instruction tuning via prompt

O professor diz que dá para fazer isso pelo recurso que chama de Instruct GPT ou direto no prompt. A lógica é a do treinamento supervisionado visto antes, mas aqui com prompts moldados para esse comportamento. O resumo do professor deixa claro que, via prompt, os pesos do modelo não mudam: o que se faz é escrever comandos explícitos sobre conteúdo, estilo, restrições e tamanho.

- **Vantagens:** estilo mais direto, fácil de padronizar, e bom funcionamento em modelos já afinados para esse tipo de entrada, como o GPT.
- **Desvantagens:** exige muita precisão de comando, e alguns modelos respondem melhor do que outros. O professor cita GPT e DeepSeek como bons, e diz não ter certeza sobre o Manus, que achou inferior na versão que usou. Por isso, vale conferir antes de usar.

Exemplo: "explique o conceito de inflação em uma linguagem simples, com até três parágrafos curtos" já define a informação, o estilo e o tamanho. É um caso simples: o professor conta que tem prompts desse tipo com 3 a 4 páginas no livro que escreveu.

## Escolha da estratégia

Cada estratégia tem prós e contras, e cabe a quem usa decidir qual faz mais sentido para cada aplicação. O resumo do professor enquadra a decisão como uma troca entre custo, controle e precisão: zero-shot favorece rapidez e economia, few-shot melhora a aderência por demonstração, CoT permite inspecionar o raciocínio, role-based alinha a resposta a um domínio e instruction tuning padroniza a saída com comandos detalhados.
