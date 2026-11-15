# Uma simples correção de Bug

## Proatividade excessiva do modelo em correção de bug

Um prompt mal delimitado pode transformar uma correção simples em uma alteração ampla demais. No cenário de desenvolvimento, isso acontece quando o modelo corrige o bug pedido, mas também refatora funções, reescreve testes, adiciona documentação e aplica padrões em arquivos que não faziam parte do objetivo original. O resultado pode até parecer tecnicamente melhor, mas operacionalmente piora o fluxo da equipe. Uma PR que deveria validar uma troca de `>` por `>=` passa a exigir revisão extensa e muda o custo do code review.

## Impacto no code review e no workflow

O problema central não é apenas a qualidade do código gerado, mas o desvio de escopo dentro do processo de entrega. Quando a mudança se espalha por vários arquivos, o revisor deixa de avaliar uma correção pontual e passa a revisar uma refatoração implícita, o que aumenta tempo, atrito e risco percebido. Isso pode atrasar a entrada de um bugfix urgente em produção, mesmo sem introdução de defeitos novos. Em times reais, previsibilidade de revisão importa tanto quanto a correção em si.

## Ambiguidade operacional no prompt

A ambiguidade já foi tratada anteriormente; aqui, ela aparece como falha operacional. Um pedido como “valide a função, entenda o problema e faça a correção” informa intenção, mas não impõe fronteiras suficientes sobre até onde o modelo pode ir. Como o modelo tenta ser útil, ele interpreta espaço aberto como permissão para melhorar o contexto ao redor. Em desenvolvimento, essa liberdade costuma virar alteração colateral.

## Barreira de comportamento

Barreira de comportamento é a parte do prompt que restringe explicitamente o que o modelo pode e não pode fazer. Ela existe para conter a proatividade excessiva entre versões e famílias de modelos, já que o comportamento muda com o tempo mesmo quando o pedido parece “claro”. Em vez de confiar que o modelo vai inferir o limite correto, o prompt precisa declarar algo como: corrigir apenas o bug, não refatorar, não alterar arquivos fora do escopo, não reescrever testes além do necessário. Essa barreira reduz desvios e torna o resultado mais estável para o workflow de engenharia.

## Limites do prompt

Limitar o prompt significa definir o escopo de atuação antes da execução, não corrigir o excesso depois. Esses limites podem envolver quantidade de arquivos, tipo de mudança permitida, proibição de melhorias oportunistas e foco exclusivo na causa do bug. Retomando o cenário da correção simples, o objetivo não é “melhorar o módulo”, mas resolver uma condição errada sem expandir a intervenção. Quanto mais explícito for esse recorte, menor a chance de a PR crescer sem necessidade.

## Formato e saída esperada

Definir a saída final impede que o modelo invente a forma de entrega. Em um caso de desenvolvimento, isso pode significar pedir exatamente o patch mínimo, a lista de arquivos alterados, a justificativa da mudança e nada além disso. Sem essa definição, o modelo escolhe sozinho como responder e pode embutir mudanças extras porque considera isso útil. Saída especificada funciona como contrato de entrega e complementa os limites de comportamento.

## Variação entre versões de modelos

Mudanças de versão alteram o grau de iniciativa do modelo, mesmo quando o prompt permanece igual. Um modelo mais “centrado” pode executar só o pedido, enquanto outro mais agressivo tenta otimizar o código inteiro ao redor do bug. Por isso, um prompt que parecia suficiente em uma versão pode falhar em outra. Estruturação intencional serve justamente para reduzir essa dependência do temperamento do modelo.

## Estruturação intencional no caso de uso de desenvolvimento

Como o caso de uso já determina a estrutura do prompt, correção de bug exige uma composição orientada a controle de escopo e previsibilidade de revisão. O prompt precisa separar com clareza o problema, os limites de atuação e o formato da resposta, porque o custo de uma resposta “boa demais” pode ser alto no pipeline de entrega. Em desenvolvimento, utilidade não é maximizar mudanças positivas; é produzir a menor alteração correta para o objetivo atual. Essa lógica prepara o terreno para guidelines mais formais de construção de prompts.

## Passo a passo prático para uma correção de bug

Comece descrevendo o bug de forma objetiva e localizável: qual função está errada, qual condição falha e qual comportamento esperado deve surgir após a correção. Em seguida, imponha a barreira de comportamento: alterar apenas o necessário para corrigir o bug, sem refatorar, sem reorganizar código, sem expandir documentação e sem modificar arquivos fora do escopo definido. Depois, declare a saída esperada: patch mínimo, arquivos alterados e explicação curta da correção. Essa combinação conecta teoria e prática porque transforma um pedido aberto em uma instrução operacional revisável.

## Consequência prática para PRs pequenas e previsíveis

Uma PR pequena não é só uma preferência estética; ela preserva a capacidade de revisão rápida e reduz o custo cognitivo do time. Quando o modelo trabalha com limites e saída definida, a chance de gerar mudanças laterais diminui, e o code review volta a refletir o objetivo original da tarefa. Isso não elimina completamente o comportamento probabilístico da IA, mas melhora bastante a previsibilidade entre execuções e entre versões de modelo. Em ambientes de engenharia, esse ganho de previsibilidade vale mais do que uma refatoração não solicitada.
