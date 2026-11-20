# Fazendo pull e controle de versão

## Pull remoto via SDK

O `langsmith_client` representa a etapa em que a aplicação consome um prompt remoto em vez de depender de um arquivo local. Retomando o prompt `agent-pull-request-creator`, o fluxo passa por identificar o prompt, fazer o `pull` via SDK e usar o artefato retornado na composição com o modelo. O efeito prático é que o texto do prompt deixa de ser responsabilidade direta do código da aplicação, embora continue sendo parte do comportamento executado. Isso separa autoria e governança do prompt da integração em runtime.

## Uso do prompt baixado na aplicação

Depois do `pull`, o prompt já pode ser encadeado com o modelo e executado com `invoke`, recebendo o dicionário de entradas esperado. O ponto importante não é a sintaxe específica da linguagem, mas o contrato operacional: a aplicação baixa um artefato remoto, injeta os inputs e executa o LLM com aquele estado do prompt. Isso permite que o software use um prompt mantido por outra pessoa ou equipe, desde que o ID e a referência de versão sejam estáveis.

## Comportamento padrão sem versão explícita

Quando nenhuma versão específica é informada no consumo, o SDK resolve o prompt para o estado mais recente disponível. Esse comportamento é conveniente para desenvolvimento rápido, mas é arriscado quando a aplicação precisa de reprodutibilidade, rollback ou promoção controlada entre ambientes. Em produção, depender implicitamente da última revisão significa aceitar mudança de comportamento sem fixação explícita do estado consumido.

## Prompt tag não seleciona versão de execução

`Prompt tags`, já usadas anteriormente no push, continuam sendo apenas metadados de catalogação e busca. Acrescentar algo como `:1.0.0` no consumo não funciona se essa informação foi criada como `prompt tag`, porque ela não aponta para um commit executável. O erro de “commit não encontrado” expõe exatamente essa diferença: a aplicação não baixa “a tag textual do prompt”; ela baixa um estado versionado identificado por commit.

## Commit tag como referência operacional de versão

`Commit tag` é o rótulo associado a um commit específico do histórico e é esse rótulo que o SDK usa para resolver qual revisão baixar. Se nenhuma `commit tag` existir, a alternativa é referenciar diretamente o hash do commit, que é o identificador real daquele estado. A consequência é direta: `prompt tag` organiza o catálogo, enquanto `commit tag` controla qual versão entra em execução.

## Convenções de commit tags

Como a plataforma restringe o uso de pontos, a convenção de nome precisa ser adaptada para strings como `v1-0-0`, `dev` ou `prod`. Essa limitação não muda o mecanismo de versionamento; ela apenas afeta a forma de nomear referências legíveis para humanos. O valor dessas tags está em traduzir o histórico técnico de commits para referências operacionais que a aplicação consegue consumir com clareza.

## Seleção de ambiente e rollback por tag

Associar `dev` a um commit antigo e `prod` ao commit mais recente cria uma camada simples de promoção entre estados do prompt. A aplicação pode apontar para `dev` durante experimentação e para `prod` em runtime estável, sem alterar o conteúdo do prompt no código. O mesmo mecanismo serve para rollback: basta reposicionar a `commit tag` para outro commit válido, em vez de editar a aplicação.

## Passo a passo do consumo versionado

O fluxo correto é: publicar o prompt, consultar o histórico de commits, criar uma `commit tag` no commit desejado e consumir o prompt remoto usando o ID mais essa referência operacional. Se o desenvolvedor tentar usar uma `prompt tag` como se fosse versão, o SDK não encontrará o commit correspondente. Quando a referência está correta, o `pull` baixa o estado exato do prompt e o restante do pipeline executa normalmente com o modelo.

## Cache de prompt remoto

Consumir prompt remoto em toda execução adiciona chamadas de API desnecessárias e aumenta latência, custo e dependência da disponibilidade da plataforma. Por isso, o padrão recomendado é baixar o prompt e armazená-lo em cache, renovando esse cache conforme a estratégia de atualização da aplicação. O cache não substitui o versionamento; ele reduz o custo operacional de consultar repetidamente uma versão que já foi resolvida.

## O conceito central de versionamento remoto

O ponto decisivo não é o código do exemplo, porque a mesma lógica pode ser implementada em qualquer linguagem. O que precisa ficar fixo é a distinção entre metadado de organização e referência real de execução: `prompt tag` classifica, `commit tag` versiona operacionalmente. Sem essa separação conceitual, o consumo remoto parece funcionar até o momento em que a aplicação precisa escolher exatamente qual revisão do prompt deve rodar.
