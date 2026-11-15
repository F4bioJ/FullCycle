# Trabalhando com zero-shot em diversos modelos

## Abertura
Nas duas últimas aulas, o assunto foi o papel. Vimos que dizer ao modelo quem ele é muda o tom e o jeito da resposta. E vimos isso rodando, com o professor universitário e o aluno explicando recursão.

Hoje entra a técnica que, no chute do professor, é a mais usada no mundo. O zero-shot.

Vamos ver quatro coisas. O que define o zero-shot. Quando ele vale a pena. Onde ele quebra. E um experimento que mostra uma coisa que pouca gente percebe: o mesmo prompt simples pode custar quase dez vezes mais, dependendo do modelo.

## O que define o zero-shot
A frase-âncora é esta: zero-shot é dar a tarefa sem dar nenhum exemplo.

Você manda só a instrução. Nada de "se entrar isto, responda aquilo". O modelo tem que se virar com o que já sabe. Por isso a técnica mede a capacidade base do modelo, a habilidade de generalizar.

Pense em alguém que chega num restaurante e pede: "me traz um prato leve". Não mostrou foto, não apontou para a mesa do lado. Só disse o que queria. O garçom resolve com a experiência que tem. Isso é zero-shot.

Agora o detalhe que confunde muita gente. Zero-shot não tem nada a ver com o tamanho do prompt. Uma pergunta de cinco palavras no ChatGPT é zero-shot. Um prompt de duas páginas, cheio de regras e contexto, também é, desde que não tenha nenhum exemplo de resposta. O que conta é a ausência de exemplos. Na prática, é verdade, o zero-shot aparece mais em prompts curtos. Mas isso é costume, não definição.

Repetindo a âncora: zero-shot é dar a tarefa sem dar nenhum exemplo.

## Quando usar
A frase-âncora aqui: zero-shot serve para tarefas diretas e para economizar tokens em escala.

Os casos típicos são simples. Resumir um parágrafo. Perguntar a capital de um país. Traduzir uma frase curta. Pedir o esqueleto de uma API. Pedir uma explicação de arquitetura orientada a eventos.

E tem um caso que é decisão de engenharia, não de conveniência. Imagine um sistema que chama um LLM, um modelo de linguagem grande, milhões de vezes por dia. Cada token custa dinheiro. Cada exemplo que você coloca no prompt é pago de novo em cada chamada. É como um entregador que leva junto um manual de instruções a cada entrega. Uma vez não pesa. Um milhão de vezes, pesa.

Se o modelo consegue fazer a tarefa sem exemplo, o prompt fica curto, e a conta cai.

Mas atenção: economizar tokens no prompt não garante economizar tokens no total. Isso vai aparecer no experimento.

## Onde o zero-shot quebra
A frase-âncora: sem exemplo, você perde controle.

São cinco limitações.

Primeira. Problemas complexos. Você não manda uma pergunta muito difícil sem dar nenhum apoio.

Segunda. Pouco controle do formato. Sem exemplo, o modelo responde do jeito que quiser, conforme a temperatura configurada. Pode vir uma palavra, pode vir um parágrafo.

Terceira. Alucinação. O modelo pode inventar o que não sabe. O zero-shot não protege contra isso.

Quarta. Sensibilidade ao texto. Trocar uma única palavra do prompt pode mudar bastante a saída. É como pedir direções a alguém: "como chego ao centro?" e "qual o caminho para o centro?" deveriam dar a mesma resposta, mas às vezes não dão.

Quinta. Raciocínio lógico elaborado. O zero-shot é perguntar e responder. Para problemas de várias etapas encadeadas, não é a ferramenta.

O resumo do professor acrescenta um ponto útil. Pedir um formato na instrução ajuda. Mas, quando a saída precisa ser muito padronizada, pedir não tem a mesma firmeza de mostrar um exemplo.

Repetindo: sem exemplo, você perde controle.

## O experimento e a detecção de intenção
A frase-âncora: entender a intenção é descobrir o que está por trás da pergunta.

O professor monta três prompts, todos zero-shot. O primeiro pergunta qual é a capital do Brasil. O segundo pede a intenção do usuário num texto: alguém procurando um restaurante japonês bem avaliado perto de São Paulo. O terceiro repete a pergunta da capital, mas pede para responder só com o nome da cidade.

O segundo prompt merece atenção. Em sistemas com RAG, a geração aumentada por recuperação, o sistema busca documentos antes de responder. E, para buscar bem, precisa saber o que o usuário quer. A pessoa escreveu sobre restaurante, cidade e avaliação. A intenção diz quais filtros usar na busca: tipo de comida, região, nota.

É como um atendente de loja que ouve "estou procurando algo para correr" e já sabe que vai para a seção de tênis, não de roupa social.

E o modelo faz isso sem nenhum exemplo. Só com a instrução.

## Três modelos, o mesmo prompt
A frase-âncora: o mesmo zero-shot muda de resposta quando muda o modelo.

Primeiro, o GPT-3.5 Turbo, um modelo antigo, sem raciocínio automático. Na capital, respondeu só "Brasília". Na intenção, praticamente devolveu a pergunta com outras palavras, mas entendeu. E com a restrição, de novo, "Brasília".

O professor roda de novo e lembra: a cada execução, a resposta pode mudar.

Depois, o GPT-4. Na capital sem restrição, veio uma frase inteira: "A capital do Brasil é Brasília". Mais palavras, mais tokens. Na intenção, uma redação mais caprichada. E, com a restrição de formato, ele obedeceu: só "Brasília".

Repare no que isso ensina. Se o seu código espera só o nome da cidade, trocar de modelo pode quebrar o sistema. E a correção mais simples não é trocar de modelo de novo. É pedir o formato no próprio prompt.

## O custo escondido do reasoning
A frase-âncora: o modelo com reasoning gasta tokens pensando, mesmo quando você não vê.

O terceiro modelo é o GPT-5 nano. A primeira coisa que se nota é a demora. A segunda é a conta.

Para responder "Brasília", com ponto final, ele gastou cento e cinquenta e um tokens de saída. O GPT-3.5 Turbo tinha gastado dezesseis no total para a mesma pergunta. A resposta visível é igual. O custo, quase dez vezes maior.

Por quê? O GPT-5 nano usa reasoning, raciocínio interno. Antes de responder, ele gera uma linha de pensamento. Cada pedaço dessa linha é token. E você paga, mesmo que nada disso apareça na tela. O token de saída, ainda por cima, costuma ser o mais caro.

Pense num taxista que te deixa no destino certo, mas deu três voltas no quarteirão antes. Você chegou ao mesmo lugar. O taxímetro, não.

Isso não quer dizer que reasoning seja ruim. Quer dizer que, para uma pergunta trivial repetida milhões de vezes, ele pode ser caro e lento sem trazer ganho nenhum.

Repetindo: o modelo com reasoning gasta tokens pensando, mesmo quando você não vê.

## Comparações
Vamos separar o que tende a se confundir.

Zero-shot e role prompting não são opostos. O papel dá contexto. O zero-shot é sobre a falta de exemplos. Aquele prompt da aula passada, com o professor universitário no system prompt e o pedido de explicar recursão, era zero-shot com role. Nenhuma resposta-modelo foi mostrada.

Pedir formato e dar exemplo também são coisas diferentes. "Responda só com o nome da cidade" é instrução. O prompt continua zero-shot. Exemplo é mostrar uma pergunta e a resposta esperada.

E prompt curto não é sinônimo de chamada barata. O prompt do GPT-5 nano era curtinho. O raciocínio interno é que encareceu a chamada.

Por fim, como escolher o modelo. Se todos acertam uma pergunta simples, acertar não decide nada. O que decide é se ele segue o formato pedido, que estilo ele usa, quanto demora e quanto custa.

## Fechamento
As âncoras da aula, em sequência.

Zero-shot é dar a tarefa sem dar nenhum exemplo.

Zero-shot serve para tarefas diretas e para economizar tokens em escala.

Sem exemplo, você perde controle.

Entender a intenção é descobrir o que está por trás da pergunta.

O mesmo zero-shot muda de resposta quando muda o modelo.

O modelo com reasoning gasta tokens pensando, mesmo quando você não vê.

## Revisão
Primeira pergunta. Um prompt de duas páginas, com muitas regras e nenhum exemplo de resposta, é zero-shot?

[pausa 5]

Resposta: sim. O que define o zero-shot é não ter exemplo, não o tamanho do prompt.

Segunda pergunta. Num sistema com RAG, para que serve descobrir a intenção do usuário antes de buscar?

[pausa 5]

Resposta: para saber o que está por trás da pergunta e decidir quais filtros usar na busca.

Terceira pergunta. O GPT-4 respondeu com uma frase inteira, e o seu código esperava só o nome da cidade. Qual é a correção mais simples sem trocar de modelo?

[pausa 5]

Resposta: pedir o formato no prompt, como "responda apenas com o nome da cidade". O GPT-4 seguiu essa instrução no teste.

Quarta pergunta. Por que o GPT-5 nano gastou tantos tokens para responder uma palavra só?

[pausa 5]

Resposta: porque ele usa reasoning. Gera uma linha de raciocínio interna que consome tokens de saída, mesmo sem aparecer na resposta.
