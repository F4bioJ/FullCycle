# Conclusões — resumo

## Antes de escrever, entenda a tarefa

O capítulo percorreu vários tipos de prompt, e outros ainda vão aparecer no curso. A recomendação para fechar é: a partir de agora, antes de criar um prompt, pergunte qual é o contexto, para que o prompt vai servir, como você quer a saída, como quer auditar o que a IA está pensando e se quer explorar opções.

Há muitas variações, e tipos diferentes de prompt podem fazer tarefas parecidas. O que muda é o **nível de detalhamento** desejado. Do Chain of Thought em diante (deixando de lado zero-shot, one-shot e few-shot), tudo fica mais complexo, porque essas técnicas geram linhas de pensamento que a IA reaproveita para chegar à resposta.

## Clareza da saída e passo a passo só quando precisa

O primeiro ponto é ter clareza do que se quer como saída. O segundo é verificar se há **necessidade real** de a IA pensar passo a passo: é fácil viciar nisso e levar o hábito para sistemas, e sistemas gastam tokens. Pedir passo a passo não é obrigatório, mesmo quando a preocupação é auditar o resultado.

## Explorar alternativas

O professor incentiva abusar da exploração de alternativas no dia a dia, enquanto se trabalha e desenvolve. Em aplicações de alta escala, porém, raramente se trabalha dessa forma. Para explorar até o que você não sabe, há Tree of Thought e ReAct; para reverificar respostas, self-consistency. Também dá para gerar documentação e encontrar e resolver bugs. Com tantas técnicas, as opções são quase ilimitadas.

## Ser intencional dá trabalho

O professor não quer que o aluno continue escrevendo prompts como sempre escreveu. Ser intencional dá trabalho:

- pensar no esqueleto da documentação que a IA deve gerar;
- definir o formato da resposta para que ela seja compatível com a chamada de outro modelo;
- quando a IA gera código ruim, entender o que saiu errado e ajustar o prompt para ela não repetir o erro, por exemplo com few-shot ("nunca faça isso").

Essas técnicas mudam como se programa, como se integram e desenvolvem agentes e até como se usa a IA na interface do dia a dia (GPT, Claude, Gemini), inclusive no celular.

## Sem preguiça

Quanto mais se usam prompts bem feitos, melhores são as respostas, principalmente em **tarefas complexas**. Em tarefas realmente simples, não faz tanto sentido. Nas complexas, as técnicas dão munição para respostas mais precisas e para **minimizar** alucinações: a IA continua podendo alucinar e criar linhas de raciocínio erradas, mas o trabalho intencional leva o uso a outro nível.

## Fim da primeira etapa

O capítulo serviu para que todos entendam como criar prompts e falem a mesma língua no resto do curso. O professor desafia o aluno a criar prompts para descobrir bugs, gerar documentação e explorar alternativas em decisões técnicas, usando os exemplos do repositório da disciplina.
