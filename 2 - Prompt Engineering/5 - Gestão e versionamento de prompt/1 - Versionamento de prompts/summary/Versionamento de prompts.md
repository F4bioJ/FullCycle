# Versionamento de prompts

## Prompt como parte do comportamento do sistema

Prompt não é apenas texto de entrada para um modelo; em aplicações com IA, ele participa diretamente da lógica que define a saída entregue ao usuário. Alterar um prompt pode mudar tom, formato, critérios de decisão, nível de detalhe e até restrições operacionais da resposta, o que equivale a alterar comportamento funcional do produto. Por isso, tratar prompt como artefato descartável cria um ponto cego de engenharia: o sistema muda, mas a mudança não fica governada com o mesmo rigor do código.

## Por que versionamento de prompt é necessário

Versionar prompts significa registrar e controlar mudanças em um elemento que afeta o comportamento da aplicação. Isso existe para que seja possível saber o que mudou, quando mudou e qual efeito aquela alteração produziu no sistema, reduzindo regressões comportamentais e perda de previsibilidade. Se uma resposta piora após uma edição de prompt, a ausência de histórico torna o diagnóstico muito mais difícil, porque o comportamento mudou sem rastreabilidade adequada.

## Prompts de produtividade

Prompts de produtividade são aqueles usados pelo desenvolvedor para acelerar tarefas do dia a dia, como gerar rascunhos, revisar código ou estruturar ideias. Eles importam, mas seu impacto costuma ficar restrito ao fluxo individual ou da equipe, e não ao comportamento final de um produto em produção. Por isso, a gestão desses prompts pode ser mais flexível, já que o risco operacional normalmente é menor.

## Prompts de aplicação

Prompts de aplicação são os prompts incorporados a sistemas que dependem deles para funcionar corretamente. Nesse caso, o prompt deixa de ser apoio à produtividade e passa a compor o comportamento entregue pelo software, o que o aproxima de uma regra de negócio ou de uma decisão funcional do sistema. Quando esse prompt muda, o produto muda junto; por isso, sua gestão exige controle de mudanças, histórico e critérios mais rigorosos de evolução.

## Duas perspectivas de versionamento

Embora ambos sejam prompts, prompts de produtividade e prompts de aplicação não devem ser tratados com a mesma estratégia de versionamento. A diferença central não está no formato do texto, mas na função que ele exerce: apoio ao trabalho do desenvolvedor ou definição do comportamento de uma aplicação com IA. Essa distinção orienta toda a governança posterior, porque o nível de criticidade, rastreabilidade e controle depende do papel do prompt no sistema.

## Foco da governança em projetos com IA

Em projetos que precisam de prompts para funcionar, a gestão de mudanças deixa de ser opcional e passa a ser parte da disciplina de engenharia de software. O objetivo não é apenas guardar versões, mas garantir que mudanças em prompts possam ser entendidas, auditadas e evoluídas com segurança. É nesse contexto que versionamento deixa de ser conveniência e passa a ser mecanismo de confiabilidade do produto.
