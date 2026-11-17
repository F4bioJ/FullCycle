# Analisando prompt especialista em analisar arquiteturas

## Agente especialista em arquitetura

Um agente especialista em arquitetura é um prompt operacional ajustado para produzir diagnóstico estrutural do sistema, não para modificar código. A especialização aparece na persona e no escopo: o agente assume repertório de arquitetura de software, padrões, system design e engenharia, mas recebe a restrição explícita de apenas analisar e reportar. Esse recorte reduz deriva de comportamento e evita que a LLM misture auditoria arquitetural com refatoração, consultoria ou geração de código. O resultado é um papel mais previsível dentro de um workflow maior.

## Mapeamento arquitetural com leitura seletiva

Mapear arquitetura não exige ler 100% da codebase; exige ler os pontos certos para reconstruir estrutura, relações e limites do sistema. O prompt orienta a LLM a identificar componentes, módulos, integrações, bancos de dados, infraestrutura e fluxos principais sem desperdiçar contexto em arquivos irrelevantes. Isso existe porque projetos grandes excedem facilmente a context window, então a tarefa precisa ser formulada em termos de objetivo, não de leitura exaustiva. A ferramenta escolhe a estratégia de exploração com base nesses objetivos e nas tools que possui.

## Critérios para leitura seletiva do codebase

A leitura seletiva funciona quando o prompt explicita quais artefatos têm maior valor arquitetural: diretórios principais, `Dockerfile`, `docker-compose`, manifests de Kubernetes, arquivos de ambiente, automações, gerenciamento de pacotes, schemas e migrações. Esses arquivos revelam topologia do sistema, dependências operacionais, fronteiras de execução e pistas de deployment sem exigir inspeção linha a linha de toda a aplicação. Retomando o workflow já conhecido, os `inputs` aqui deixam de ser apenas contexto bruto e passam a guiar a estratégia de descoberta. Isso melhora cobertura útil por token consumido.

## Componentes como conceito flexível

Componente, nesse contexto, não é uma entidade fixa da linguagem ou do framework; é uma unidade estrutural relevante para entender a arquitetura. Em um projeto, ele pode aparecer como módulo, feature, bundle, package, domínio, subdomínio, serviço ou até um agrupamento inferido a partir de classes e pastas. O prompt resolve essa ambiguidade dando exemplos e autorizando a LLM a inferir a melhor granularidade conforme a organização real da codebase. Essa flexibilidade é essencial para o mesmo agente funcionar em Java, .NET, Go, PHP ou JavaScript sem amarrar a análise a uma convenção única.

## Acoplamento aferente e eferente

Acoplamento aferente mede quantas dependências chegam a um componente; acoplamento eferente mede de quantas dependências externas esse componente precisa para funcionar. A combinação dessas duas visões mostra centralidade, fragilidade e impacto de mudança: um componente muito referenciado tende a ser crítico, enquanto um componente que depende de muitos outros tende a ser mais sensível a instabilidade externa. Por isso o prompt pede não só a lista de componentes, mas também as ligações entre eles e uma introdução textual desses termos no próprio relatório. O relatório deixa de ser inventário e vira mapa de dependência arquitetural.

## Padrões arquiteturais, integrações e fluxo de dependências

O relatório precisa capturar padrões de alto nível, como camadas do tipo `controller -> service -> repository -> database`, além de chamadas a APIs externas e message queues. Esse mapeamento mostra como o sistema organiza responsabilidades e onde estão os pontos de integração que podem concentrar risco ou latência. As integrações externas, já tratadas anteriormente, entram aqui como evidência arquitetural: elas ajudam a localizar fronteiras do sistema e possíveis pontos únicos de falha. O valor está menos no diagrama formal e mais na leitura operacional das relações reais.

## Infraestrutura, deployment e limitações condicionais

Infraestrutura e deployment entram na análise apenas quando houver evidência em arquivos ou documentação presentes no projeto. Essa regra evita alucinação e impede que a LLM invente topologias, clusters ou pipelines inexistentes só porque são comuns naquele stack. O prompt usa uma condição explícita para incluir ou omitir a seção, preservando aderência ao que foi realmente encontrado. Em termos operacionais, isso transforma ausência de evidência em limitação documentada, não em chute plausível.

## Dívida técnica arquitetural e riscos estruturais

Dívida técnica arquitetural aparece quando a estrutura do sistema dificulta evolução, escalabilidade, isolamento de responsabilidades ou operação confiável. O prompt direciona a análise para antipatterns, bottlenecks, configuração mal gerenciada, bibliotecas compartilhadas críticas, pontos únicos de falha e riscos de segurança em nível estrutural. Isso é diferente de sugerir melhorias: o agente registra o estado atual como snapshot, sem virar consultor de solução. A utilidade desse recorte é produzir um diagnóstico reutilizável por etapas posteriores do workflow.

## Output de relatório arquitetural

O output estruturado em Markdown, já estabelecido anteriormente, é especializado aqui para servir de insumo a análises futuras. O relatório inclui sumário executivo, visão geral do sistema, tabela de componentes críticos, dependency mapping, tecnologias, riscos de segurança e, quando houver evidência, infraestrutura e deployment. A tabela de componentes é a peça central porque transforma a leitura arquitetural em entrada operacional para a próxima etapa, que aprofundará a análise por componente. Estrutura fixa importa porque outros agentes vão consumir esse artefato.

## Critérios de qualidade e workflow resumido

Os critérios de qualidade refinam a execução: percorrer diretórios para entender estrutura, priorizar o que é arquiteturalmente significativo, mapear fluxo de dados, limites de componentes, escalabilidade e caminhos relativos. As instruções negativas e o tratamento de erro, já conhecidos, são reaproveitados aqui para impedir modificação de arquivos, recomendações indevidas, cronogramas fictícios e fabricação de informação. O workflow resumido no prompt funciona como reforço operacional: ele condensa a ordem de execução esperada e reduz a chance de a LLM produzir uma resposta solta. Em prompts longos, esse resumo aumenta aderência sem mudar a lógica principal.

## Implementação prática do prompt

A implementação começa separando metadados da ferramenta do núcleo comportamental do agente. O que interessa no prompt interno é definir `Persona`, `Objetivo`, `Inputs`, `Outputs`, critérios, ambiguidades, instruções negativas e workflow, especializando cada bloco para arquitetura em vez de dependências. Em seguida, liste os artefatos que a LLM deve considerar na leitura seletiva e descreva o relatório final com seções fixas, incluindo a tabela de componentes e o dependency mapping. Por fim, determine o salvamento do artefato com nome padronizado e timestamp, para que o relatório possa ser persistido e consumido pelo orquestrador ou pela próxima etapa do pipeline.

## Conexão com o workflow maior

Retomando a visão geral do projeto, arquitetura e dependências podem ser analisadas em paralelo, mas a análise por componente depende deste relatório arquitetural. Isso faz deste agente o primeiro especialista que descasca a camada estrutural do sistema e produz a lista de componentes críticos que orientará a investigação seguinte. O artefato gerado não é apenas documentação; ele é estado útil do workflow. Sem esse mapa, a próxima etapa perde critério para decidir onde aprofundar.
