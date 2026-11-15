# Aula 06

## PRP: prompt que gera prompt

PRP é um Product Requirement Prompt: um artefato intermediário que transforma uma descrição de feature em um plano de implementação detalhado e reutilizável. Ele não substitui o documento da feature; ele o compila em uma estrutura que a IA consegue executar com menos ambiguidade. O ganho está em sair de um pedido solto para um prompt operacional, com contexto, critérios de sucesso, tarefas e validação. Isso reduz improviso do agente e aumenta previsibilidade no workflow com IA.

## Template `prp-base`

O `prp-base` é o molde que define como um PRP deve ser construído. Em vez de pedir à IA “implemente esta feature” de forma aberta, o template força a organização da intenção em campos como objetivo, escopo, arquivos relevantes, critérios de sucesso, riscos e validação. Esse formato existe porque a qualidade do plano depende menos de criatividade e mais de estrutura. Quanto mais consistente for o template, mais comparáveis e revisáveis ficam os PRPs gerados.

## Estrutura de pastas: `prps` e `templates`

A pasta `templates` guarda os moldes reutilizáveis, enquanto a pasta `prps` guarda os PRPs concretos gerados para cada feature. Essa separação evita misturar regra de geração com instância gerada, o que facilita manutenção e versionamento. Na prática, `templates/prp-base` define o formato, e `prps/<feature>.md` vira o plano executável daquela demanda. O repositório passa a ter uma camada explícita entre documentação de intenção e execução assistida.

## Documento de feature como entrada

O pipeline começa com um documento de feature escrito pelo desenvolvedor, como `docs/features/components-refactoring.md`. Esse arquivo descreve contexto, objetivo, mudanças esperadas, exemplos e observações de cautela, como a possibilidade de o contexto estar desatualizado. Retomando a documentação já acumulada do projeto, esse documento não precisa redefinir tudo; ele precisa delimitar a mudança atual com precisão suficiente para orientar a geração do PRP. Se a feature estiver vaga, o PRP herdará essa vagueza.

## Comando `generate prp`

O comando `generate prp` recebe o caminho do documento de feature e produz um arquivo PRP dentro da pasta `prps`. Conceitualmente, ele funciona como um shell script em Markdown: encapsula um prompt operacional reutilizável que sempre executa a mesma transformação. O ponto central é que o desenvolvedor não escreve manualmente cada PRP do zero; ele padroniza a geração. Isso torna o processo repetível e reduz dependência de memória ou improviso a cada nova feature.

## Blueprint de implementação gerado pela IA

Um PRP bem gerado inclui um `implementation blueprint`: modelo de dados, lista de tarefas, pseudocódigo, pontos de integração e sequência de validação. Esse blueprint não é código final, mas um mapa de execução que antecipa decisões técnicas antes da edição dos arquivos. Ele existe para deslocar raciocínio para a fase de planejamento, onde erro custa menos. Quando o agente chega à implementação, ele já opera com trilha definida em vez de explorar o problema do zero.

## Tree atual versus tree futura

Comparar a tree atual do projeto com a tree futura esperada obriga a IA a raciocinar sobre impacto estrutural, não apenas sobre diffs locais. Esse contraste explicita arquivos que serão criados, movidos, removidos ou reorganizados, o que é especialmente útil em refatorações. Em vez de deixar a estrutura emergir implicitamente durante a execução, o PRP antecipa a forma desejada do repositório. Isso melhora revisão humana porque o desenvolvedor consegue validar intenção arquitetural antes de aceitar mudanças.

## Contexto para implementação

O PRP lista quais arquivos e URLs precisam ser lidos e por quê, transformando contexto genérico em contexto operacional de implementação. A diferença é importante: documentação ampla ajuda a entender o projeto, mas implementação exige selecionar os artefatos que realmente influenciam aquela mudança. Esse filtro reduz ruído na janela de contexto e ancora o agente em fontes relevantes. Também ajuda o desenvolvedor a perceber quando faltam referências críticas antes da execução.

## `Non-gotchas`, `library quirks` e anti-patterns

Essas seções registram armadilhas específicas que a IA deve evitar durante a implementação. `Library quirks` captura comportamentos peculiares de bibliotecas; `non-gotchas` e anti-patterns delimitam erros recorrentes, decisões proibidas e atalhos indesejados. O valor disso está em converter conhecimento tácito do time em restrição explícita de execução. Sem esse tipo de instrução, o agente tende a sugerir soluções plausíveis em geral, mas erradas para aquele projeto.

## Quality/confidence score do PRP

O quality ou confidence score é uma estimativa interna da confiabilidade do PRP gerado. Ele não prova que o plano está correto, mas serve como sinal de risco para revisão humana mais cuidadosa. Um score alto não autoriza execução cega; apenas indica que o artefato parece mais consistente segundo os critérios do próprio prompt. O uso correto é tratá-lo como heurística de triagem, nunca como garantia.

## Comando `execute prp`

O comando `execute prp` consome o arquivo PRP já gerado e inicia a implementação seguindo o plano descrito nele. O fluxo típico inclui ler o PRP, aprofundar o raciocínio — por exemplo, com instruções como `ultrathink` —, executar tarefa por tarefa, validar resultados e registrar a referência do PRP usado. A diferença para um prompt direto de implementação é que a execução já nasce ancorada em escopo, estrutura, testes e critérios de aceite. O agente deixa de improvisar a estratégia enquanto codifica.

## Pipeline operacional completo

O pipeline fica mais seguro quando segue esta ordem: documento de feature → `generate prp` → revisão humana do PRP → `execute prp` → validação por testes e code review. Retomando o contexto, guidelines e ADRs já documentados, a novidade aqui é transformar esse acervo em plano executável. Esse encadeamento permite quebrar features grandes em escopos menores e iterar com mais controle. Quando o escopo cresce demais, o problema não é só o modelo; é o tamanho inadequado da unidade de trabalho.

## Revisão humana continua obrigatória

Nenhum PRP transfere responsabilidade técnica para a IA. O desenvolvedor continua responsável por revisar arquivo por arquivo, validar testes, rejeitar decisões ruins e prestar atenção extra em áreas de maior risco arquitetural. Um agente de code review pode complementar essa etapa, mas não substitui julgamento humano. O ganho real está em automatizar planejamento e execução parcial sem abrir mão de governança sobre o código final.

## Automação com controle graduado

A execução não precisa ser binária entre manual e totalmente automática. É possível permitir leitura e planejamento automáticos, bloquear escrita antes de revisão, restringir tipos de arquivo ou liberar commits incrementais conforme o risco da mudança. Esse controle graduado é o que torna o workflow útil em projetos reais, porque diferentes componentes exigem diferentes níveis de autonomia. Vibe Coding fica mais confiável quando opera sobre contexto documentado, plano explícito e checkpoints de validação.
