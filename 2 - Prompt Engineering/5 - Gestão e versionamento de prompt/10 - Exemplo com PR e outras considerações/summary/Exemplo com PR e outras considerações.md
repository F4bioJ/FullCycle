# Exemplo com PR e outras considerações

## ID único como requisito operacional

Um prompt de aplicação precisa ter um ID único para poder ser localizado de forma previsível em qualquer ponto do sistema. Esse identificador é a âncora entre o código, o registry, a estrutura de pastas e, futuramente, mecanismos remotos de publicação ou busca. Sem essa referência estável, o projeto passa a depender de convenções implícitas, o que aumenta ambiguidade e dificulta manutenção. Quando o acervo cresce, a ausência de IDs claros rapidamente vira perda de controle operacional.

## Generalização do padrão para outro agente

Retomando o padrão já usado no Code Reviewer, o fluxo permanece o mesmo no agente de pull request: o código monta uma request, localiza o prompt pelo identificador, carrega o arquivo correspondente e envia o resultado para a LLM. O ponto novo não está no mecanismo de execução, mas no fato de que ele se aplica a outro agente sem exigir mudança estrutural no pipeline. Isso mostra que o prompt não deve ser tratado como um texto solto, e sim como um artefato endereçável dentro da aplicação.

## Exemplo do agente de pull request

No exemplo de pull request, a request contém dados simulados como informações da mudança e nomes de arquivos, que servem de entrada para o prompt. A implementação então obtém o caminho do prompt, faz o carregamento e repassa o template resolvido para a LLM, preservando o mesmo padrão de integração já estabelecido. O valor desse exemplo está em mostrar que trocar o agente não exige reinventar a infraestrutura; basta apontar para outro prompt identificado corretamente. A variação está no conteúdo e no contrato de entrada, não na disciplina de execução.

## Seleção de prompt por variável de ambiente

O ID do prompt pode ser parametrizado por variável de ambiente quando a aplicação precisa trocar o artefato ativo sem alterar código-fonte. Isso é útil para alternar entre ambientes, experimentar versões ou direcionar execuções diferentes conforme configuração operacional. Essa flexibilidade só funciona bem quando o identificador já foi definido de forma consistente, porque a variável não substitui governança; ela apenas muda qual prompt será selecionado. Em outras palavras, a configuração externa depende de uma base interna organizada.

## Seleção futura por versão

Além do ID, a seleção por versão permite escolher qual variante do prompt deve ser carregada em runtime. A ideia de versionamento já foi estabelecida anteriormente; aqui, o avanço é perceber que ID e versão formam juntos a chave prática de localização do artefato correto. Isso prepara o sistema para rollback, evolução controlada e coexistência de variantes sem colisão. Sem um identificador estável, a própria noção de versão perde utilidade operacional.

## Integração com LLM

Depois que o prompt é localizado e carregado, ele segue para a LLM pelo mesmo mecanismo de execução já conhecido. A integração continua separando três responsabilidades: identificar qual prompt usar, montar o conteúdo com as entradas da request e enviar o resultado ao modelo. Essa separação evita acoplamento entre lógica de negócio e texto do prompt, além de permitir trocar o agente ou o modelo com menos impacto. O resultado é um pipeline reutilizável para múltiplos casos de uso baseados em prompts.

## Organização consistente do projeto

A organização dos prompts precisa ser clara o suficiente para que qualquer componente consiga descobrir qual artefato carregar sem heurísticas frágeis. Registry, estrutura de pastas e convenções de nomenclatura já resolvem parte desse problema; o ponto enfatizado aqui é que tudo isso depende de identificação consistente. Quando cada prompt tem um nome estável e único, o sistema consegue crescer sem transformar localização e manutenção em trabalho manual. Escalar prompts em aplicação exige disciplina de catálogo, não apenas bons textos de instrução.
