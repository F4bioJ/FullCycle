# Exemplo prático com Agent Code Reviewer

## `prompt_registry.py` como camada de acesso

`prompt_registry.py` concentra o acesso ao `registry.yaml` e transforma o índice de prompts em uma API de uso dentro da aplicação. Em vez de espalhar caminhos de arquivos e leitura de metadados pelo código, a aplicação consulta um ponto único, como `registry.getPrompt(id)`. Isso reduz acoplamento com a estrutura física da pasta `prompts` e cria uma fronteira clara entre o código executável e os artefatos versionados. Retomando o registry já definido anteriormente, a novidade aqui é seu uso como dependência real de runtime.

## Request tipado com `dataclass`

Uma `dataclass` para o request do prompt modela explicitamente todas as entradas esperadas pela execução, como `diff`, linguagem, `rules`, `security_level` e `review_focus`. Esse objeto funciona como contrato entre o código da aplicação e o prompt estruturado, evitando passar um dicionário solto sem semântica clara. A vantagem prática é validação conceitual mais simples, melhor legibilidade e menor risco de esquecer ou nomear incorretamente uma variável. O mesmo raciocínio se estende ao output da LLM: quanto mais o comportamento do prompt entra no software, mais importante se torna modelar entrada e saída como dados de aplicação.

## Carregamento do YAML com `loadPrompt`

`loadPrompt` faz a ponte entre o arquivo YAML versionado e um template executável compatível com LangChain. A função recebe o caminho físico do prompt, faz o parse do arquivo e devolve um `PromptTemplate`, pronto para interpolar as variáveis declaradas anteriormente no `prompt.yml`. Isso elimina a necessidade de montar manualmente o template em código e preserva o prompt como artefato externo, versionado e carregável em runtime. Se o arquivo estiver malformado ou incompatível com o contrato esperado, a falha aparece no carregamento, o que facilita diagnóstico.

## Montagem do `chain`

O `chain` encadeia três etapas: template, modelo e parser de saída. Primeiro, o `PromptTemplate` recebe os valores concretos do request; depois, a LLM executa a inferência; por fim, o parser converte a resposta para um formato consumível pela aplicação. Essa composição deixa o fluxo explícito e separa responsabilidades: o prompt monta a instrução, a LLM gera a resposta e o parser trata a saída. Em implementações simples, o parser pode apenas retornar texto; em cenários mais controlados, ele pode preparar a base para saídas estruturadas.

## Conversão do request para dicionário e `invoke`

A chamada com `invoke` exige que as variáveis do template sejam entregues no formato esperado pela biblioteca, normalmente um dicionário chave-valor. Por isso, o objeto tipado do request é convertido antes da execução, preservando a ergonomia de modelagem no código e a compatibilidade com a interface do `chain`. Essa etapa parece trivial, mas é onde surgem muitos erros de integração: nomes divergentes entre atributos e placeholders, campos ausentes ou valores montados no formato errado. O request tipado reduz esse risco, mas não elimina a necessidade de consistência com o contrato do prompt.

## Exemplo do agente Code Reviewer

No agente `Code Reviewer`, o campo principal do request é o `diff`, porque a revisão depende do trecho alterado, e os demais atributos refinam o comportamento esperado da análise. Linguagem, regras do repositório, foco da revisão e nível de segurança não são detalhes acessórios; eles condicionam o tipo de crítica que a LLM deve produzir. O exemplo mostra a evolução direta do prompt já estruturado: aquilo que antes era apenas um artefato versionado agora participa do fluxo real da aplicação. O resultado final da `Code Review` passa a ser consequência de um pipeline reproduzível, não de um prompt colado manualmente.

## Execução fim a fim no script

Quando o script é executado, o fluxo completo fica visível: localizar o prompt no registry, obter seu caminho, carregar o YAML como template, instanciar a LLM, montar o `chain` e chamar `invoke` com os dados do request. Esse encadeamento é a primeira integração operacional do sistema de prompts com o código da aplicação. A principal decisão técnica aqui é manter o prompt fora do código-fonte e carregá-lo dinamicamente, o que preserva versionamento, rastreabilidade e possibilidade de troca sem reescrever a lógica de execução. O script do agente demonstra exatamente essa passagem do artefato estruturado para comportamento executável.
