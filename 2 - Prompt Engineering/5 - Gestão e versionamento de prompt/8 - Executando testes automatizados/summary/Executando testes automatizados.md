# Executando testes automatizados

## PyTest como camada de segurança para prompts

Prompt de aplicação precisa entrar na rotina de testes do projeto porque ele também pode quebrar por erro estrutural. O uso de PyTest aqui não serve para medir qualidade semântica da resposta; serve para impedir falhas básicas de contrato antes que elas cheguem ao código em execução. Essa automação transforma o prompt em um artefato verificável, com feedback imediato quando alguém altera campos, caminhos ou variáveis. O ganho principal é reduzir erros bobos que, em produção, viram falha funcional.

## Validação automatizada de YAML e do registry

Retomando a estrutura já organizada com `registry.yml` e `prompt.yml`, o primeiro passo é carregar os arquivos YAML e validar sua sintaxe. Isso cobre tanto o `registry` quanto os arquivos individuais de prompt, porque qualquer erro de formatação já inviabiliza o restante do pipeline. A checagem existe para falhar cedo: se o YAML não é válido, não faz sentido seguir para renderização ou execução de casos de teste. Em projetos maiores, essa validação evita que uma alteração simples de indentação quebre o sistema silenciosamente.

## Verificação de caminhos declarados no registry

O `registry` pode estar sintaticamente correto e ainda assim apontar para um arquivo inexistente. Por isso, um teste separado confirma se cada caminho declarado realmente existe dentro da pasta de prompts. Essa verificação protege contra renomeações, movimentação de arquivos e referências desatualizadas, que são comuns quando o acervo cresce. O erro deixa de aparecer só em runtime e passa a ser detectado no momento do commit ou da CI.

## Checagem da estrutura mínima do prompt

Depois de carregar os prompts, o teste valida a presença dos campos obrigatórios, como `id`, `version`, `template` e `input variables`. A ideia não é reexplicar o contrato do `prompt.yml`, mas garantir que ele continue sendo respeitado em todas as versões do acervo. Quando um desses campos some, o prompt deixa de ser consumível de forma previsível pelo código e pelos testes. Essa checagem funciona como um schema mínimo implementado no próprio conjunto de testes.

## Consistência entre variáveis declaradas e variáveis usadas

Um dos erros mais frequentes em prompts estruturados é declarar uma variável no `input` e não usá-la no `template`, ou usar no `template` uma variável que não foi declarada. O teste compara esses dois lados do contrato para detectar nomes errados, placeholders esquecidos e diferenças de grafia que parecem pequenas, mas alteram o comportamento final. Em Python, isso aparece com clareza quando o template é tratado como `f-string` ou mecanismo equivalente de substituição. O objetivo é garantir que toda variável necessária exista e que nenhuma variável declarada esteja sobrando sem motivo.

## Renderização do template com inputs de teste

Retomando os casos declarativos em `prompt.tests.yml`, cada teste fornece um conjunto concreto de entradas para renderizar o `template`. O processo consiste em pegar o prompt escolhido, injetar os valores do caso de teste e montar a versão final que seria usada pela aplicação. Essa renderização é o equivalente prático da compilação estrutural do prompt: ela confirma que o template aceita os inputs esperados sem quebrar. Se faltar variável ou houver placeholder inválido, a falha aparece imediatamente.

## Asserções estruturais com `expectContains`

Depois de renderizar o prompt, o teste verifica se certos trechos esperados aparecem no resultado final usando algo como `expectContains`. Essa asserção não avalia se a resposta da LLM será boa; ela apenas confirma que a montagem do prompt preservou informações essenciais do cenário de teste. Se um valor de entrada deveria aparecer no texto final e não aparece, há um problema de parsing, substituição ou estrutura do template. É uma validação simples, mas muito eficaz para detectar regressões grosseiras.

## Falhas típicas e leitura do erro

Quando uma variável declarada deixa de ser usada, o teste falha porque o contrato entre metadados e template foi quebrado. Quando um valor esperado, como uma palavra específica do cenário, não aparece após a renderização, a falha indica que a substituição não ocorreu como deveria ou que o template foi alterado de forma incompatível. Esses erros são valiosos porque apontam problemas objetivos e reproduzíveis, sem depender de interpretação subjetiva. O resultado é um ciclo de correção rápido: alterar, rodar `pytest`, corrigir e validar novamente.

## Entrada dos testes de prompt na CI

Inserir esses testes na suíte automatizada do projeto institucionaliza a governança dos prompts desde o dia zero. A cada mudança, a esteira pode validar sintaxe, caminhos, campos obrigatórios, variáveis e renderização antes de aceitar o merge. Isso evita perder controle quando o número de prompts e versões começa a crescer. A ferramenta específica pode variar, mas a disciplina permanece: prompt sem teste estrutural vira dívida operacional.
