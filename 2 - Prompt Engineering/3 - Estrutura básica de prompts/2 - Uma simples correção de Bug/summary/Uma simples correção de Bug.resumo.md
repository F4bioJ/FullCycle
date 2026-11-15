# Uma simples correção de Bug — resumo

## O problema dos prompts incompletos no desenvolvimento

O professor inicia a aula apresentando um caso simples, mas crítico: prompts incompletos ou ambíguos podem atrapalhar severamente o desenvolvimento de software. Ele propõe um cenário comum para ilustrar a dinâmica: um desenvolvedor recebe a tarefa de corrigir um bug, utiliza IA junto com suas ferramentas e conhecimento técnico, gera uma *pull request* (PR) e esta segue para *code review* por outro desenvolvedor.

## O cenário da correção simples e a atuação da IA

No exemplo, o bug original era uma função simples que exigia apenas a troca de um operador "maior" por "maior ou igual". O desenvolvedor pede à IA para fazer a correção. A IA, no entanto, age de forma proativa demais: corrige o bug, melhora os testes, adiciona documentação ausente, refatora funções aplicando princípios de *Clean Code* (extraindo funções menores) e propaga esse padrão para outras partes do módulo. Tecnicamente, o código fica "top", os testes passam e não há novos bugs introduzidos.

## Impacto no *code review* e no *workflow* da equipe

O problema surge no processo de revisão. Em vez de revisar uma linha de código em um arquivo, o revisor se depara com 500 linhas alteradas em cinco arquivos. O que levaria cinco minutos passa a consumir o dia inteiro. O *workflow* da equipe é modificado e enrolado: a PR deixa de ser uma correção de bug urgente e vira uma revisão de refatoração não solicitada. Isso pode impedir que a correção urgente chegue à produção no tempo necessário, pois o escopo da revisão fugiu completamente do objetivo inicial.

## A causa raiz: proatividade excessiva e ausência de limites

O professor explica que isso ocorre porque a IA foi "proativa demais". O desenvolvedor não pediu refatoração, documentação nem melhoria de testes; pediu apenas a correção do bug. A ambiguidade do prompt abriu espaço para que a IA interpretasse "faça a correção" como "melhore tudo ao redor". O professor relata experiência pessoal: ao usar o Claude Sonnet 3, o modelo era centrado e fazia apenas o pedido. Com o lançamento do Claude Sonnet 4, o comportamento mudou para um "desenvolvedor desenfreado", saindo fazendo coisas não pedidas. Novos modelos (Opus, GPT-5, Gemini, etc.) surgem constantemente, e o comportamento varia entre versões.

## A falha do prompt ingênuo

Um prompt como "valide essa função, entenda o problema e faça a correção" parece claro, mas falha porque não gera uma barreira de comportamento. Ele informa a intenção, mas não impõe fronteiras sobre até onde o modelo pode ir. Como os modelos são probabilísticos e tentam ser úteis, interpretam a liberdade como permissão para melhorias colaterais. Não é possível garantir comportamento absoluto apenas com instruções vagas, pois a natureza do modelo muda com as versões.

## Barreiras de comportamento: limitando a atuação da IA

Para conter isso, o professor introduz o conceito de **barreira de comportamento**: parte do prompt que restringe explicitamente o que o modelo pode e não pode fazer. Exemplos: "corrija apenas o bug", "não refatore", "não altere arquivos fora do escopo", "não reescreva testes além do necessário". Essas barreiras servem para estabilizar o resultado diante da variação entre modelos e versões, transformando um pedido aberto em uma instrução operacional controlada.

## Definição da saída esperada (*output*)

Além dos limites de atuação, é obrigatório especificar o **formato da saída final**. Se não for definido, o modelo inventa a forma de entrega. No contexto de desenvolvimento, isso significa pedir exatamente: *patch* mínimo, lista de arquivos alterados, justificativa curta da correção e nada além disso. A saída especificada funciona como um contrato de entrega que complementa as barreiras de comportamento.

## Estruturação intencional para o caso de uso de correção de bug

Como o caso de uso dita a estrutura do prompt, uma correção de bug exige composição orientada a controle de escopo e previsibilidade de revisão. O prompt deve separar claramente: descrição objetiva do bug (função, condição falha, comportamento esperado), barreiras de comportamento (escopo restrito, proibições de melhorias oportunistas) e formato da resposta (patch mínimo, arquivos, explicação). Isso conecta teoria e prática, transformando a ambiguidade em instrução revisável.

## Consequência prática: PRs pequenas e previsíveis

O professor finaliza enfatizando que uma PR pequena não é preferência estética, mas necessidade operacional: preserva revisão rápida, reduz custo cognitivo do time e mantém o *code review* alinhado ao objetivo original. O uso de limites e saída definida diminui drasticamente a chance de mudanças laterais. Embora a IA seja probabilística e não haja garantias absolutas, essa estruturação melhora muito a previsibilidade entre execuções e versões de modelo, ganho que vale mais no pipeline de engenharia do que refatorações não solicitadas.
