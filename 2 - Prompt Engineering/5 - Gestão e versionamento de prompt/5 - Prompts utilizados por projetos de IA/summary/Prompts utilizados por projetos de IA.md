# Prompts utilizados por projetos de IA

## Registry como índice da aplicação

Prompts de aplicação deixam de ser texto solto quando passam a existir em um registry. Esse registry funciona como o índice central da aplicação: ele lista quais prompts existem, quais versões estão disponíveis, qual está em produção e quais metadados acompanham cada item. O armazenamento pode ficar em arquivos ou banco de dados; o ponto essencial é ter uma fonte explícita de consulta e governança. Essa camada será a base para registrar, localizar e carregar prompts de forma previsível nas implementações seguintes.

## Categorização interna dos prompts

Retomando a ideia de que prompts de aplicação compõem o comportamento do sistema, a organização deles precisa seguir a arquitetura do próprio software. A categorização pode ser por agentes, por use cases como `payment`, por componentes, por subdomínios em Domain Driven Design ou por feature. Não existe taxonomia universal; existe uma exigência de coerência estrutural. A categoria importa porque ela define como o software encontra e referencia cada prompt durante a execução.

## Semantic versioning aplicado a prompts

Semantic versioning em prompts usa a mesma lógica de `major.minor.patch`, mas agora aplicada a mudanças comportamentais do sistema orientado por IA. Uma alteração `patch` tende a corrigir detalhe sem mudar a intenção central; uma `minor` adiciona ou ajusta comportamento de forma compatível; uma `major` sinaliza ruptura relevante no contrato esperado. Essa distinção melhora rastreabilidade operacional e reduz ambiguidade ao promover versões entre ambientes. Nas próximas implementações, esse versionamento será associado ao registro e ao carregamento dos prompts.

## `prompt.md` versus `prompt.yml`

`prompt.md` favorece leitura humana e edição livre, o que funciona bem quando a estrutura não precisa ser rigidamente interpretada por ferramentas. O problema é que Markdown não impõe um esquema consistente, então campos importantes podem aparecer de formas diferentes entre prompts. `prompt.yml` introduz estrutura explícita, o que facilita validação, automação e integração com convenções usadas em ecossistemas como LangChain e LangSmith. A escolha não é entre legível e ilegível, mas entre flexibilidade textual e padronização operacional.

## Metadados de entrada, saída, modelo e descrição

Metadados transformam o prompt em um artefato inspecionável pela aplicação e pela equipe. Campos como entradas esperadas, saída pretendida, versão, modelo utilizado e descrição permitem entender como o prompt deve ser executado e em que contexto ele faz sentido. Isso reduz uso incorreto e melhora manutenção, porque o comportamento esperado deixa de depender apenas da leitura do texto principal. Em formatos estruturados, esses dados também podem ser consumidos por testes, loaders e ferramentas de observabilidade.

## Teste de compilação do prompt

Teste de compilação verifica se o prompt está estruturalmente válido para execução, não se sua resposta é boa. O foco é garantir, por exemplo, que todas as inputs declaradas realmente aparecem no template e que não existem placeholders ausentes, extras ou inconsistentes. Se o prompt declara `name` como entrada e o template não usa `name`, há falha estrutural antes mesmo de qualquer julgamento de qualidade. Esse tipo de teste será usado depois como parte da automação básica de segurança para prompts versionados.

## Teste estrutural versus evaluation

Evaluation mede qualidade, adequação ou desempenho do comportamento gerado; teste estrutural apenas verifica se o prompt compila corretamente dentro do contrato definido. Confundir os dois leva a lacunas perigosas: um prompt pode ter boa avaliação qualitativa e ainda assim quebrar em produção por erro de variável, e um prompt estruturalmente válido pode continuar ruim do ponto de vista funcional. Por isso, compilação e evaluation são camadas complementares, não substitutas. A primeira protege integridade operacional; a segunda analisa resultado.

## README e changelog no contexto de prompts críticos

README e changelog já fazem parte da governança de prompts, mas aqui ganham peso operacional maior porque o artefato afeta diretamente produção. O README deve registrar onde o prompt é usado e qual contexto ele atende, enquanto o changelog ajuda a rastrear mudanças relevantes sem depender apenas do diff bruto. Essa documentação encurta diagnóstico quando uma regressão aparece após troca de versão. Em prompts críticos, contexto e histórico deixam de ser conveniência e passam a ser mecanismo de manutenção.
