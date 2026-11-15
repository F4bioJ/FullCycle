# RLHF

## Classificação da aula

Theoretical

## RLHF como ajuste de comportamento

RLHF combina Fine-Tuning com feedback humano para alinhar a saída do modelo ao que pessoas consideram útil, seguro e apropriado. Retomando o Fine-Tuning supervisionado já citado anteriormente, a novidade aqui é que o ajuste não depende só de pares fixos de entrada e saída: ele também incorpora preferências humanas sobre a qualidade das respostas. Isso permite controlar melhor estilo, aderência a instruções e comportamento do modelo em situações ambíguas. O objetivo não é apenas prever o próximo token, mas aproximar a resposta do que humanos avaliam como melhor.

## Etapa 1: SFT

SFT, ou Supervised Fine-Tuning, usa pares de pergunta e resposta escritos por humanos como exemplos de alta qualidade. Quando alguém fornece uma instrução como “explique a teoria da relatividade como se eu fosse uma criança” e escreve a resposta esperada, o modelo aprende o formato, o nível de detalhe e o tom desejado para esse tipo de pedido. Essa etapa cria uma base inicial de comportamento alinhado a instruções. Ela ainda não aprende preferências relativas entre respostas concorrentes; apenas imita exemplos considerados bons.

## Etapa 2: Reward Model

O Reward Model aprende a transformar preferências humanas em um sinal numérico de qualidade. Em vez de marcar uma resposta apenas como certa ou errada, humanos comparam múltiplas saídas para a mesma pergunta e as ranqueiam, por exemplo A melhor que C, e C melhor que B. Com isso, o sistema aprende padrões do que costuma receber notas mais altas, como clareza, utilidade e segurança. Essa etapa é importante porque muitas tarefas abertas não têm uma única resposta correta, mas várias respostas com qualidades diferentes.

## Etapa 3: RL com PPO

Depois que o modelo de recompensa foi treinado, o ajuste por Reinforcement Learning usa esse sinal para otimizar o comportamento do modelo gerador. PPO, citado aqui como Proximal Policy Optimization, é o algoritmo usado para atualizar a política de geração de forma a maximizar a recompensa prevista sem alterar o modelo de maneira instável. Na prática, o modelo passa a favorecer respostas que o Reward Model considera mais úteis, seguras e claras. Essa etapa fecha o ciclo do RLHF ao transformar preferências humanas em atualização efetiva dos parâmetros.

## Por que RLHF é necessário em LLMs

Retomando o pré-treinamento autoregressivo já visto, um LLM aprende principalmente a prever o próximo token com base no contexto. Esse objetivo produz fluência linguística, mas não garante consistência lógica, concisão, segurança ou obediência a instruções do usuário. Sem alinhamento adicional, o modelo pode repetir vieses presentes nos dados, ser prolixo ou gerar conteúdo ofensivo. RLHF atua justamente nesse espaço entre “texto plausível” e “resposta desejável”.

## Efeitos práticos do alinhamento

Um modelo alinhado tende a admitir melhor quando não sabe algo, seguir instruções com mais precisão e reduzir alucinações. Também muda o tom de interação: respostas podem ficar mais respeitosas, menos agressivas e menos inclinadas a agradar o usuário a qualquer custo. Essas diferenças aparecem ao comparar versões de um mesmo sistema ou produtos distintos, porque pequenas mudanças no processo de alinhamento alteram bastante o comportamento percebido. O ganho principal não é conhecimento bruto, mas qualidade de interação e controle sobre a saída.

## Prompt direto e comportamento do modelo

Quando o prompt é excessivamente social, com rodeios e tentativas de suavizar o pedido, o modelo pode interpretar que precisa priorizar agradabilidade em vez de objetividade. Um comando mais direto, com critérios explícitos e sem firulas, tende a reduzir prolixidade e diminuir respostas inventadas, porque restringe melhor o espaço de geração. Isso não substitui RLHF, mas interage com ele: o comportamento aprendido pelo modelo responde aos sinais que o usuário fornece no prompt. Em sistemas alinhados para serem prestativos, a forma do pedido influencia bastante o resultado.

## Instruction Tuning como etapa complementar

Instruction Tuning pode ocorrer antes ou junto de RLHF para ensinar o modelo a responder bem a uma grande variedade de instruções humanas. Em vez de especializar o sistema em um domínio único, essa etapa amplia a capacidade generalista, como escrever uma carta de demissão em tom amigável ou criar um roteiro sobre IA. Retomando a ideia de modelos generalistas já discutida no capítulo, o ponto novo aqui é que a generalização é treinada explicitamente por tarefas formuladas como instruções. RLHF então refina quais dessas respostas são preferíveis do ponto de vista humano.

## Limitações do RLHF

RLHF depende de julgamento humano, e julgamento humano é inevitavelmente subjetivo. Quando várias respostas são aceitáveis e muito parecidas, a escolha da “melhor” pode refletir preferência de estilo, vocabulário ou tom, não uma verdade objetiva. Além disso, o processo é caro, exige anotação humana e herda vieses de quem avalia. Essa limitação não invalida o método; apenas mostra que alinhamento também carrega valores e critérios humanos para dentro do modelo.
