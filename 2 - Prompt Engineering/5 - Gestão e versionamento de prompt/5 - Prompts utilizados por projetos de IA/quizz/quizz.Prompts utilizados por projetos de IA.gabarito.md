# Gabarito — Prompts utilizados por projetos de IA

## 1. Por que o prompt de aplicação é mais crítico
**Correta: C**
**Por quê:** O professor chama os prompts de aplicação de "ultracríticos" porque mudam o comportamento do sistema que vai para produção. Num workflow de desenvolvimento, se algo dá errado, você pode parar e entender; com o prompt no ar, consumido por uma IA em produção, "o buraco é mais embaixo".
- **A:** A aula não fala de tamanho de modelo, custo em tokens ou latência como motivo da criticidade.
- **B:** Inputs e metadados aparecem na aula como forma de organizar e testar o prompt, não como causa de mais erros; o risco vem de onde o prompt roda.
- **D:** A aula não compara número de usuários; a diferença é que, no desenvolvimento, quem programa pode parar e entender o erro, e em produção não.
**Conceito:** criticidade dos prompts de aplicação

## 2. Afirmação INCORRETA sobre o registry
**Correta: B**
**Por quê:** O professor diz que o registry pode ser gerenciado como o time quiser, em banco de dados, arquivos etc. O que importa é ter o índice; não existe exigência de banco de dados.
- **A:** Correta: o registry contém todos os prompts e as versões que serão usadas; é um índice.
- **C:** Correta: o índice traz se o prompt está em produção e pode indicar o modelo que ele usa.
- **D:** Correta: o professor cita metadados entre as informações que o índice pode ter.
**Conceito:** registry de prompts

## 3. Onde ficam os arquivos de prompt de uma aplicação
**Correta: A**
**Por quê:** O professor diz que os arquivos de prompt da aplicação podem ficar dentro do controle de versão do próprio projeto, e o registry funciona como o índice deles. É coerente com a aula 2.5.3: prompts específicos do projeto são salvos no projeto.
- **B:** O repositório central com links é a solução para prompts de uso geral (produtividade), não para os que fazem parte da aplicação.
- **C:** A pasta `.prompts` com `.gitignore` serve para expor prompts gerais sem versioná-los no projeto; prompts de aplicação precisam ser versionados.
- **D:** A aula 2.5.3 alerta contra clonar um repositório de prompts inteiro dentro do projeto: a IA lê guidelines de contextos diferentes e fica sujeita a ambiguidade.
**Conceito:** onde ficam os prompts de aplicação

## 4. Categorização dos prompts numa aplicação com DDD
**Correta: D**
**Por quê:** A aula diz que a categorização depende do projeto (agentes, casos de uso, componentes, subdomínios com DDD, features) e que qualquer forma serve, desde que tenha lógica, porque é a partir dela que o software faz as chamadas aos prompts.
- **A:** Agentes são só um dos exemplos; o professor diz que às vezes a aplicação nem tem agentes.
- **B:** Essas categorias são do repositório de prompts de produtividade (aula 2.5.4); a organização de prompts de aplicação segue a arquitetura do software.
- **C:** O modelo aparece como metadado do prompt, não como critério de categorização sugerido.
**Conceito:** categorização de prompts de aplicação

## 5. Saída passa de texto livre para JSON
**Correta: B**
**Por quê:** No semantic versioning, major indica ruptura no contrato esperado. Mudar o formato de saída a ponto de exigir alteração no código que consome a resposta é uma mudança incompatível.
- **A:** Patch é para corrigir um detalhe sem mudar a intenção; aqui o contrato da saída mudou.
- **C:** Minor acrescenta ou ajusta comportamento de forma compatível; como o consumidor precisa mudar, não é compatível.
- **D:** A versão do prompt registra mudanças no prompt; trocar o formato de saída é exatamente o tipo de mudança que precisa de versão.
**Conceito:** semantic versioning em prompts

## 6. Limite do `prompt.md` numa aplicação
**Correta: C**
**Por quê:** O professor diz que arquivos Markdown facilitam a leitura, mas não necessariamente seguem um padrão, e padronização é muito importante numa aplicação. Por isso formatos mais estruturados, como YAML, podem ajudar.
- **A:** A aula não diz que o modelo entende Markdown pior; o problema é de padronização do arquivo, não da resposta.
- **B:** Semantic versioning vale para o prompt independentemente do formato do arquivo.
- **D:** A aula diz que YAML ajuda a seguir convenções usadas pela LangChain e pelo LangSmith, não que o LangSmith rejeita Markdown.
**Conceito:** Markdown versus YAML

## 7. Migrar para YAML é obrigatório?
**Correta: A**
**Por quê:** O professor diz: se você precisa de algo mais estruturado, trabalhe com YAML; se não tem essa necessidade, trabalhe com Markdown, que "vai dar bom também". O importante é ter o arquivo do prompt.
- **B:** O registry pode ser gerenciado por arquivos ou banco de dados, sem exigir YAML; a versão em produção fica no índice.
- **C:** A aula não condiciona o teste de compilação ao YAML; ela diz que YAML ajuda com metadados, e que em Markdown eles podem gerar confusão.
- **D:** A aula não fala em número de prompts como gatilho; o critério é a necessidade de estrutura.
**Conceito:** quando usar YAML

## 8. Input declarada que o prompt não usa
**Correta: D**
**Por quê:** O teste de compilação garante que todas as inputs passadas são usadas dentro do prompt. Se `name` está declarada e não aparece no texto, o professor diz que ou você colocou um campo que não precisava, ou esqueceu de colocar algo.
- **A:** É justamente o caso que o teste de compilação deve pegar; ignorar a input esconderia um erro de estrutura.
- **B:** Medir qualidade é evaluation, que a aula separa do teste de compilação.
- **C:** A aula não faz exceção para inputs opcionais: o teste garante que todas as inputs passadas são usadas no prompt, e uma que sobra é sinal de campo desnecessário ou de esquecimento.
**Conceito:** teste de compilação do prompt

## 9. O que significa passar na compilação
**Correta: C**
**Por quê:** O teste de compilação garante a consistência estrutural (por exemplo, que as inputs são usadas no prompt). O professor deixa claro que ele não é evaluation: não diz se o prompt é bom ou ruim.
- **A:** Ser o ponto mais importante não faz da compilação uma garantia de qualidade; ela é uma camada, não a única.
- **B:** A compilação verifica estrutura, não a qualidade da resposta.
- **D:** Evaluation mede qualidade, o que a compilação não faz; as duas se complementam.
**Conceito:** compilação versus evaluation

## 10. Regressão: qual versão está rodando e o que mudou
**Correta: A**
**Por quê:** Na abordagem da aula, o registry é o índice que traz o prompt, a versão e se ela está em produção, ou seja, responde qual versão está rodando. O README do prompt traz um changelog para manter o rastro das mudanças, que responde o que mudou.
- **B:** Inverte os papéis: o changelog registra mudanças, não o status de produção, e o número semver indica só o tipo de mudança, não o conteúdo dela.
- **C:** Meia-verdade: o semver indica se a mudança foi major, minor ou patch, mas não diz qual versão está no ar nem o que mudou de fato.
- **D:** Meia-verdade: versão e descrição são metadados do prompt, mas quem marca se a versão está em produção é o registry, e a descrição não é um histórico de mudanças.
**Conceito:** registry e changelog no diagnóstico
