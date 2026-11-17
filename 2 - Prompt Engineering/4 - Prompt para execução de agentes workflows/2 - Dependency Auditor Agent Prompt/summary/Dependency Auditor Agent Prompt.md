# Dependency Auditor Agent Prompt

## Agente auditor de dependências

Um agente auditor de dependências é um prompt operacional especializado em inspecionar manifests e lockfiles de um projeto sem alterar a codebase. Retomando a estrutura já definida anteriormente, a novidade aqui é transformar persona, escopo e objetivo em um artefato executável com limites explícitos: analisar, reportar e nunca modificar. Isso reduz a chance de o agente extrapolar para upgrades, edições ou recomendações fora do escopo técnico pedido.

## Objetivo detalhado em bullet points

O objetivo deixa de ser uma frase genérica e vira uma lista operacional de verificações: dependências desatualizadas, depreciadas, legacy, sem manutenção recente, com risco de licença, com vulnerabilidades conhecidas e com impacto de manutenção. Esse detalhamento importa porque o modelo responde melhor quando cada critério de sucesso já está explicitado. A dificuldade de escrever um bom prompt costuma estar menos na sintaxe e mais na clareza do que realmente se quer auditar.

## Inputs baseados em arquivos de dependência

Os inputs principais são os arquivos que representam o estado declarativo das dependências, como `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `requirements.txt` e equivalentes de outros ecossistemas. O agente também pode inferir linguagem, framework e tooling do repositório, além de aceitar instruções opcionais do usuário, como priorizar segurança ou licenciamento. Se nenhum arquivo relevante for encontrado, o comportamento correto não é improvisar: é declarar a limitação e pedir confirmação para continuar com contexto incompleto.

## Output estruturado em Markdown

O output em Markdown funciona como contrato de entrega: define seções fixas, ordem de apresentação e granularidade do relatório. Em vez de pedir “um relatório de auditoria”, o prompt especifica blocos como `summary`, `critical issues`, tabela de dependências, análise de risco, dependências não verificadas, arquivos críticos, notas de integração e plano de ação. Essa estrutura melhora legibilidade, facilita salvar o resultado em arquivo e torna a resposta mais comparável entre execuções.

## Skeleton of thoughts

Skeleton of thoughts é a especificação explícita do esqueleto da resposta antes da geração do conteúdo detalhado. Em vez de deixar o modelo decidir sozinho como organizar o raciocínio, o prompt impõe uma sequência de seções e exemplos de colunas, como versão atual, última versão e status `outdated`. O efeito prático é reduzir ambiguidade estrutural sem exigir que o modelo exponha cadeia de pensamento interna.

## Exemplos dentro do formato de saída

Quando o prompt mostra exemplos concretos de linhas de tabela, como `Express`, `Lodash` ou `LangChain` com versão atual e status, ele não está ensinando o domínio ao agente; está calibrando o formato esperado. Isso evita respostas vagas do tipo “algumas dependências estão desatualizadas” e força uma saída verificável. O mesmo vale para seções condicionais, como a lista de dependências não verificadas, que só deve aparecer quando houver casos reais.

## Dependências diretas vs. transitivas

Dependências diretas são as declaradas explicitamente pelo projeto; dependências transitivas são trazidas indiretamente por outras bibliotecas. Separar essas duas categorias é essencial porque uma auditoria completa da árvore pode explodir em volume e desviar o foco do relatório principal. Neste caso, o critério operacional é auditar apenas as diretas, deixando claro que a exclusão das transitivas é uma decisão de escopo, não uma negação de relevância.

## Critérios operacionais de auditoria

Os critérios controlam como o agente deve executar a análise: identificar package managers, comparar versões com a última estável, sinalizar pacotes depreciados, verificar manutenção, licenças, vulnerabilidades, `breaking changes` e `single points of failure`. Retomando os critérios já vistos anteriormente, a camada nova aqui é o nível de operacionalização: cada regra orienta a produção do relatório e a classificação de risco em `critical`, `high`, `medium` e `low`. Sem esse bloco, o formato pode até sair correto, mas o conteúdo tende a ser inconsistente.

## Uso de MCP servers

MCP servers entram como fontes auxiliares para validação externa de versões, manutenção e vulnerabilidades. Ferramentas como `Context7` e `Firecrawl` ampliam a capacidade do agente de consultar documentação e páginas relevantes, mas o prompt não deve acoplar a execução a um único servidor específico se outros equivalentes puderem cumprir a mesma função. A instrução correta é condicional: usar MCP quando disponível e, quando não estiver acessível, declarar a limitação e continuar com base apenas nos arquivos locais.

## CVE e bancos de vulnerabilidade

CVE, sigla para `Common Vulnerabilities and Exposures`, é um identificador único para vulnerabilidades publicamente conhecidas. Em uma auditoria de dependências, citar o ID do CVE transforma uma alegação genérica de risco em uma referência rastreável por ferramentas e equipes de segurança. Isso também explica por que o prompt proíbe inventar CVEs: um identificador falso compromete a confiabilidade inteira do relatório.

## Ambiguidades e assumptions

Assumptions são regras de decisão antecipadas para cenários ambíguos, como múltiplos ecossistemas no mesmo diretório, ausência de versão, falta de lockfile ou execução em monorepo. Em vez de deixar o agente escolher arbitrariamente, o prompt define como ele deve separar auditorias, registrar nível de confiança e decidir entre pasta específica ou projeto inteiro. Esse bloco não elimina incerteza; ele a torna explícita e controlada.

## Instruções negativas aplicadas

As instruções negativas já conhecidas ganham aqui um papel de contenção operacional: não editar a codebase, não executar upgrades, não assumir vulnerabilidades, não usar linguagem vaga, não inserir emojis e não estimar tempo de correção. Cada proibição remove um comportamento comum de modelos generalistas que seria inadequado em um relatório técnico. O resultado é um agente mais previsível e menos propenso a preencher lacunas com opinião ou decoração textual.

## Tratamento de erro

Tratamento de erro em prompt operacional significa definir como o agente falha, não apenas como ele acerta. Se faltarem manifests, permissões de leitura ou acesso a fontes externas, a resposta deve vir em formato estruturado com `status`, `reason` e próximos passos objetivos, como informar caminho de arquivos ou liberar acesso ao workspace. Isso transforma falha em estado observável do workflow, em vez de produzir uma resposta confusa ou parcialmente inventada.

## Workflow resumido no prompt

Um workflow resumido no final do prompt funciona como checklist de execução: detectar projeto e stack, inventariar dependências, comparar versões, sinalizar riscos, verificar licenças, identificar arquivos críticos e consolidar o relatório. Mesmo que essas etapas já estejam implícitas nos blocos anteriores, escrevê-las em sequência ajuda o agente a seguir uma ordem estável. O prompt deixa de ser apenas uma descrição de requisitos e passa a operar como especificação de processo.

## Salvamento do relatório e uso em CLI

Quando o agente roda em ambientes como CLI, o relatório pode aparecer apenas na saída do terminal, o que dificulta leitura e compartilhamento. Por isso, o prompt pode incluir um passo final: se o usuário não informar caminho de saída, o agente deve perguntar onde salvar o arquivo Markdown. Essa pequena regra conecta a análise técnica ao uso real do artefato gerado.
