# Skeleton of Thought e resultados incríveis

## Skeleton of Thought

Skeleton of Thought separa a geração em duas fases: primeiro o modelo produz um esqueleto de tópicos ou seções, depois expande cada parte com detalhes. Essa técnica funciona como um template intermediário que organiza a resposta antes da redação final. O ganho principal não é explorar alternativas, como em Tree of Thought, mas impor estrutura hierárquica à solução. Isso é especialmente útil quando a qualidade da resposta depende mais de organização do que de criatividade livre.

## Esqueleto como artefato intermediário

O esqueleto é um artefato de planejamento: ele define quais blocos existirão, em que ordem aparecerão e qual escopo cada bloco deve cobrir. Se esse artefato vier mal definido, a expansão herdará a falha e produzirá uma resposta confusa, incompleta ou redundante. Por isso, nomes de seções ambíguos e tópicos mal recortados tendem a contaminar a etapa seguinte. A técnica exige controlar explicitamente que o modelo não pule direto para os detalhes antes de consolidar a estrutura.

## Saída em duas fases e impacto em tokens

A forma mais explícita de usar a técnica é pedir primeiro o esqueleto e, em seguida, a expansão de cada item. Isso aumenta consumo de tokens, porque a estrutura aparece no contexto antes da resposta final, mas também melhora a coerência local da continuação. Em muitos casos, o esqueleto nem precisa ser exibido ao usuário final; ele pode existir apenas como etapa de geração. Ainda assim, quando o modelo “vê” a própria estrutura anterior, tende a manter melhor a sequência e a cobertura dos tópicos.

## Documentação técnica com estrutura antes do texto

Documentação se beneficia muito dessa abordagem porque normalmente falha mais por desorganização do que por falta de conteúdo. Em vez de pedir um texto corrido sobre otimização de query SQL, peça 3 a 5 bullet points e só depois a expansão com exemplos. O resultado tende a separar melhor temas como indexação, `SELECT *`, `JOINs`, reescrita de query e plano de execução. Essa ordem transforma uma resposta genérica em uma explicação navegável e mais fácil de revisar.

## ADR com esqueleto explícito

ADR funciona muito bem com Skeleton of Thought porque já possui uma forma semiestruturada. Retomando o uso de documentação com IA, a novidade aqui é tratar as seções da ADR como o esqueleto obrigatório da resposta: `Contexto`, `Decisão`, `Alternativas`, `Consequências` e `Referências`. Primeiro o modelo lista apenas os headers; depois preenche cada seção com o conteúdo da decisão, como a escolha de PostgreSQL em vez de MongoDB. Isso reduz o risco de uma ADR virar texto opinativo solto e força o modelo a produzir um registro técnico legível.

## Planejamento de CRUD e estrutura de projeto

No planejamento de uma API REST em Go, o esqueleto organiza a implementação antes do código. Em vez de pedir “crie um CRUD de produtos”, a instrução define os blocos esperados: `structs`, framework HTTP, rotas, handlers, validação, camada de banco, tratamento de erro e estrutura de pastas. Depois da estrutura aprovada, cada item é expandido com exemplos de código e boas práticas idiomáticas. Esse fluxo transforma geração de código em planejamento guiado, o que reduz lacunas entre design, implementação e organização do projeto.

## Exemplo prático: otimização de query SQL

Um prompt eficaz delimita papel, tarefa e sequência de geração. Ao instruir um `Senior Backend Engineer` a responder em dois passos, o modelo primeiro produz bullets como indexação, evitar `SELECT *`, otimizar `JOINs`, reestruturar queries e analisar o plano de execução; depois detalha cada item com explicações e exemplos. O valor da técnica está em impedir que todos esses pontos apareçam misturados em um único bloco de texto. A resposta final fica mais auditável e mais fácil de transformar em checklist de revisão.

## Exemplo prático: ADR para PostgreSQL versus MongoDB

Ao pedir uma ADR em duas fases, a primeira saída contém apenas a espinha dorsal do documento. Na expansão, cada seção passa a carregar o conteúdo decisório: contexto do sistema, justificativa da escolha, alternativas consideradas, efeitos positivos e negativos e referências usadas. Mesmo com pouco contexto, a estrutura já força uma resposta mais profissional do que um parágrafo livre comparando bancos. O esqueleto, nesse caso, não é só formatação; ele define o tipo de raciocínio documental esperado.

## Exemplo prático: CRUD de produtos em Go

Retomando a ideia de planejamento antes da implementação, o CRUD em Go mostra o esqueleto como mapa técnico do projeto. A primeira fase lista etapas como modelagem com `structs`, uso de `go-chi` ou `net/http`, definição de rotas, handlers, validação com `go-playground`, acesso a PostgreSQL, error handling e organização em pacotes. A segunda fase expande cada bloco com trechos de código e decisões idiomáticas de Go. O resultado não é apenas “código gerado”, mas uma solução organizada que pode ser revisada, ajustada e usada como plano de execução.

## Relação com técnicas anteriores

Chain of Thought e Tree of Thought continuam úteis como apoio para explorar raciocínio e alternativas, mas aqui o foco muda para organização da resposta. Depois de explorar possibilidades, o esqueleto consolida a solução em uma sequência implementável. Essa combinação é valiosa quando a aplicação precisa sair da fase de análise e entrar na fase de documentação, design ou implementação. O modelo deixa de apenas pensar sobre o problema e passa a estruturar a entrega.

## Limitações e uso intencional

Skeleton of Thought não corrige falta de contexto nem substitui julgamento técnico. Se o esqueleto inicial estiver errado, incompleto ou ambíguo, a expansão apenas amplifica esse erro. Também há custo adicional de tokens e o risco de o modelo ignorar a separação entre fases e detalhar cedo demais. O uso vale mais a pena quando estrutura, legibilidade e planejamento são mais importantes do que respostas curtas e imediatas.
