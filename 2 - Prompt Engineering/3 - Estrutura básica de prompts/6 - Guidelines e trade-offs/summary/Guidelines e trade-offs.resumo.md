# Guidelines e trade-offs — resumo

## Zero-shot em tarefas simples

Para uma tarefa simples, de senso comum, como validar, identificar ou sumarizar, o professor indica zero-shot: na maioria das vezes não é preciso dar exemplos. Exemplos: "valide se esse JSON é válido", "identifique o sujeito desta frase", "resuma este parágrafo em cinco palavras". Esse tipo de tarefa raramente aparece num workflow de desenvolvimento. Você pede e espera o resultado com a menor quantidade de tokens possível.

## Zero-shot em alto volume

Com um volume muito alto de chamadas, o zero-shot também é a escolha, porque é mais barato e mais rápido; com muitos tokens por chamada, o volume torna o projeto praticamente inviável. Ainda é preciso testar e comparar modelos. Sempre que a tarefa, mesmo num agente, não tiver um domínio muito específico, dá para usar zero-shot.

## Few-shot em domínios específicos

Quando há muitas especificidades no resultado ou no formato esperado, num domínio específico (medicina, psicologia, contas matemáticas), o professor recomenda few-shot: "baseado no exemplo X, espero que você retorne Y". O preço é que few-shot é bem mais caro que zero-shot: tem latência maior e gasta mais tokens e processamento, porque a IA precisa imitar o comportamento mostrado.

## O exemplo é o formato de saída

O exemplo sempre traz o que se espera da IA, ou seja, no fim das contas é o formato de saída, como foi dito no início do módulo. Isso afeta diretamente o custo.

## A conta do trade-off

Suponha que o zero-shot acerte 86% com custo de US$ 10 mil por mês, e o few-shot acerte 90% com custo 20% maior, US$ 12 mil por mês. Os 4 pontos a mais custam US$ 2 mil, ou US$ 500 por ponto percentual. A pergunta é se vale a pena, e essa conta precisa ir para o papel.

## A decisão não é só do desenvolvedor

Muitas vezes a decisão não é de competência do desenvolvedor: ela envolve as áreas de produto e financeira. O papel do desenvolvedor é apresentar a troca, algo como "teremos 4% de respostas piores para economizar US$ 2 mil; o que vocês preferem?", junto dos processos de mitigação possíveis. É parecido com aceitar consistência eventual em sistemas distribuídos: se a tarefa não é tão crítica, pode valer economizar; em outras, nem 90% é suficiente.

## Prompt engineering vai além de escrever prompts

Falar de zero-shot e few-shot nesses termos mostra que prompt engineering não é só saber escrever prompts: envolve custo, latência e decisões de negócio. Quando o assunto chega à arquitetura, o prisma é diferente.
