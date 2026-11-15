# Minha IA produziu um lixo

## Saída ruim como insumo de projeto

Uma resposta ruim da IA não deve encerrar o processo com frustração; ela deve iniciar um diagnóstico. Em vez de apenas concluir que “o código ficou um lixo”, o passo útil é fazer um Code Review da saída e mapear falhas concretas: uso de bibliotecas antigas, arquivos grandes demais, funções desnecessárias, abandono de implementação no meio do caminho e quebra de padrões do projeto. Esse mapeamento transforma erro difuso em problema observável e corrigível. O valor está em converter reclamação em especificação.

## A metáfora da IA como funcionário novo

Tratar a IA como um funcionário no primeiro dia ajuda a ajustar expectativa e método. Um funcionário novo erra porque ainda não conhece regras locais, convenções do time, versões corretas de dependências e limites de escopo; com a IA acontece o mesmo em cada novo chat. Essa metáfora existe para deslocar o foco de “a ferramenta falhou” para “o processo de instrução ainda está incompleto”. O efeito prático é passar a treinar o sistema com regras explícitas, em vez de esperar alinhamento implícito.

## Documentar erros para treinar prompts futuros

Cada erro recorrente pode virar uma instrução permanente. Se a IA importou um pacote obsoleto, registre a regra correta, mostre o import errado e o import certo e acrescente a exigência de consultar a documentação antes de escolher bibliotecas daquela família. Se ela cria funções desnecessárias, adicione uma verificação obrigatória para revisar redundância após cada implementação. Documentar assim reduz repetição de falhas e cria memória operacional fora do modelo.

## Guidelines como restrições reutilizáveis

Guidelines são regras curtas e acionáveis que orientam comportamento recorrente do modelo. Elas podem limitar tamanho de arquivo, exigir funções limpas, pedir reaproveitamento de código existente ou obrigar retomada de contexto após interrupção. Diferentemente de uma correção pontual no chat, uma guideline é escrita para ser reutilizada em execuções futuras. Isso transforma aprendizado local em padrão de trabalho.

## Few-shot no contexto do erro corrigido

Few-shot é a técnica de fornecer poucos exemplos para induzir o padrão desejado. No caso discutido, isso aparece quando se mostra explicitamente um import incorreto e outro correto, ou quando se exemplifica a forma esperada de saída. O modelo não recebe apenas uma regra abstrata; ele passa a ter pares concretos de comparação para imitar. Isso é especialmente útil quando a diferença entre certo e errado depende de convenções específicas do projeto ou da stack.

## Chain of thought como encadeamento de verificação

Quando o prompt inclui instruções como “após criar qualquer função, revise se ela realmente é necessária”, ele força uma sequência de raciocínio operacional. Aqui, chain of thought importa menos como explicação interna do modelo e mais como estrutura de passos: implementar, revisar, comparar com o que já existe e só então manter a solução. Esse encadeamento reduz respostas impulsivas e aumenta autocorreção. Em engenharia de software, isso serve para conter proliferação de código desnecessário.

## Skeleton of thoughts e especificação da saída

Skeleton of thoughts é uma forma de orientar a estrutura do pensamento ou da resposta por meio de um esqueleto explícito. Quando você combina exemplos com uma forma mais específica de saída, está delimitando não só o conteúdo, mas a organização da resposta. Isso ajuda quando a IA até entende a tarefa, mas entrega em um formato confuso ou difícil de revisar. O ganho principal é previsibilidade estrutural.

## Estrutura clara evita que a base de prompts vire bagunça

Retomando a ideia de prompt como artefato projetado, a base de conhecimento criada a partir desses erros também precisa de organização. Conforme guidelines, exemplos e restrições crescem, um arquivo desestruturado passa a gerar mais ambiguidade em vez de mais controle. O mesmo cuidado usado para manter testes automatizados legíveis vale aqui: clareza, separação de responsabilidades e manutenção ao longo do tempo. Mais informação só ajuda quando está organizada.

## Limites de comportamento aplicados ao fluxo real

Os limites de comportamento, já estabelecidos anteriormente, ganham aqui uma função de treinamento acumulativo. Se a IA abandona um arquivo ao ser interrompida, a instrução não deve apenas corrigir o erro atual, mas definir a regra futura: terminar o arquivo atual antes de mudar de direção, ou corrigir e depois retomar exatamente do ponto onde parou. Esse tipo de limite reduz bugs introduzidos pelo próprio fluxo conversacional. O objetivo deixa de ser só responder melhor e passa a ser operar melhor dentro do workflow.

## Base de conhecimento de prompts como ativo

Quando erros documentados viram guidelines, exemplos e restrições reutilizáveis, o conjunto deixa de ser improviso e vira ativo do projeto. Esse ativo reduz dependência de memória individual, acelera onboarding de novos chats e melhora consistência entre tarefas de desenvolvimento, agentes e geração de documentos. Ele não elimina falhas, porque modelos continuam probabilísticos, mas diminui reincidência e encurta o caminho até uma saída útil. O ganho acumulado aparece com o tempo, não em uma única interação.
