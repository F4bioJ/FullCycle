# Introdução e overview da disciplina

## Prompt Engineering como prática intencional

Prompt Engineering é a prática de projetar instruções para modelos de IA de forma deliberada, em vez de tratar prompt como texto improvisado. Isso importa porque, em aplicações reais, a forma de pedir altera diretamente a qualidade da resposta, a consistência do comportamento e a utilidade do sistema. Quando o prompt passa a ser pensado como artefato de engenharia, ele entra no mesmo espaço de decisão do código e da arquitetura. A consequência é clara: escrever bem deixa de ser suficiente; é preciso estruturar, justificar e manter.

## O prompt como parte do comportamento do software

Em software com IA, o prompt influencia a saída tanto quanto regras implementadas em código influenciam um fluxo tradicional. Por isso, a aplicação não depende apenas do modelo escolhido, mas também da forma como contexto, instruções e restrições são organizados. Retomando o cenário de aplicações corporativas com IA, o prompt deixa de ser entrada casual e passa a compor o comportamento observável do sistema. Isso afeta manutenção, previsibilidade e evolução do produto.

## Técnicas e tipos de prompts

Tipos e técnicas de prompts são estruturas recorrentes usadas para induzir respostas mais adequadas ao objetivo do sistema. Muitas já aparecem no uso cotidiano de forma intuitiva, mas resultados confiáveis exigem entender por que cada técnica existe e em que condição ela funciona melhor. Sem essa intenção, o time tende a obter respostas inconsistentes ou difíceis de reproduzir. Esse repertório será a base para escolhas mais conscientes nas próximas explorações práticas.

## Escrita orientada por estrutura, não por improviso

Escrever prompt profissional não significa apenas escolher boas palavras, mas explicitar contexto, tarefa, formato esperado e critérios de qualidade. O valor está menos em “digitar melhor” e mais em compreender o mecanismo por trás da instrução e sua relação com o resultado produzido. Em desenvolvimento de software, isso permite transformar um exemplo isolado em padrão reutilizável. A escrita passa a servir à operação do sistema, não apenas à interação momentânea.

## Agentes e assistentes com IA

Prompts bem estruturados viabilizam a criação de agentes e assistentes capazes de apoiar fluxos de trabalho de engenharia e produtos internos. Um agente integrado a uma aplicação empresarial depende de instruções estáveis para agir de forma útil, enquanto um assistente de codificação precisa de prompts que orientem estilo, escopo e limites da resposta. A diferença entre um experimento interessante e um componente confiável costuma estar nessa estrutura. Por isso, projetar prompts é parte da construção desses sistemas, não um detalhe periférico.

## Armazenamento, versionamento e gestão de prompts

Prompt precisa ser armazenado e versionado porque mudanças pequenas podem alterar significativamente o comportamento da aplicação. Em um sistema com IA, tratar prompt como ativo solto dificulta auditoria, rollback e comparação entre versões. A gestão adequada permite saber qual instrução estava em produção, por que ela foi alterada e qual efeito gerou. Isso aproxima prompts das práticas já consolidadas para código-fonte e configuração.

## Observabilidade com LangSmith e PromptLayer

Ferramentas como LangSmith e PromptLayer ampliam a observabilidade do uso de prompts ao registrar execuções, respostas, custos e outros sinais operacionais. Esse tipo de visibilidade é essencial quando o sistema precisa ser acompanhado em produção e não apenas testado localmente. Em vez de depender de percepção subjetiva, a equipe passa a inspecionar como os prompts estão sendo usados e quais resultados estão produzindo. Observabilidade, nesse contexto, é o que torna possível operar IA com disciplina técnica.

## Avaliação e testabilidade de prompts

Prompt também precisa ser testável. Avaliar vários prompts para a mesma tarefa, ou o mesmo prompt em modelos diferentes, permite comparar qualidade, aderência ao esperado e estabilidade do resultado. Isso é especialmente importante quando a aplicação precisa entregar respostas úteis de forma repetível, e não apenas impressionar em uma execução isolada. Testabilidade transforma escolha de prompt em processo comparável, e não em opinião.

## Documentação com IA e design docs

A geração de documentação com IA ganha valor quando o time entende que existem múltiplos tipos de documentos, cada um adequado a um contexto de software. Design docs, diagramas e outras formas de documentação exigem prompts que orientem objetivo, profundidade e formato da saída. Sem essa clareza, a IA tende a produzir texto genérico; com instruções bem definidas, ela acelera a produção de artefatos úteis para comunicação e planejamento. O ganho real está em estruturar a demanda documental, não apenas em automatizar texto.

## Reprodutibilidade com repositório de exemplos

Manter exemplos de código e prompts em um repositório permite reproduzir experimentos, validar resultados e compartilhar referência comum entre pessoas do time. Essa prática reduz ambiguidade porque o comportamento discutido deixa de depender de memória ou de capturas soltas de tela. Quando exemplos ficam versionados no GitHub, torna-se mais fácil testar, adaptar e evoluir o que já funcionou. Reprodutibilidade é um requisito prático para aprender, comparar e operar prompts com consistência.

## Custo, latência e previsibilidade

Prompt Engineering afeta diretamente custo, latência e previsibilidade da aplicação. Instruções mal desenhadas podem gerar respostas longas demais, execuções mais lentas ou saídas inconsistentes, elevando gasto operacional e reduzindo confiança no sistema. Retomando a ideia de que prompt compõe o comportamento do software, otimizar esse artefato é também otimizar operação. Qualidade de resposta, tempo de execução e produtividade do time passam a depender dessa engenharia.
