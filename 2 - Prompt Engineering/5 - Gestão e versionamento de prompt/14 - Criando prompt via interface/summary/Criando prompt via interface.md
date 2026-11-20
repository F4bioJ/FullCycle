# Criando prompt via interface

## Acesso inicial e preparação

Criar prompts pela interface do LangSmith começa com um pré-requisito operacional simples: gerar uma API key em `Settings > API Keys` e armazená-la nas variáveis de ambiente. Essa chave não serve para editar o prompt na tela, mas viabiliza reproduzir fluxos e preparar a integração posterior com a aplicação. Retomando a gestão remota já vista, a interface passa a ser o ponto de autoria, enquanto o consumo programático fica para a etapa seguinte.

## Escolha do tipo de prompt

A criação de um prompt começa pela escolha entre `chat prompt` e prompt baseado em instruções. No formato de chat, a interface organiza mensagens por papel, como `system` e `human`, além de permitir adicionar mensagens extras, ferramentas e esquema de saída. No formato de instruções, o prompt vira um template textual único, mais adequado quando o comportamento pode ser expresso como uma string parametrizada sem estrutura conversacional.

## Prompt baseado em instruções na interface

O prompt de instruções aparece como um `StringPromptTemplate` com duas partes visíveis: o template e as variáveis de entrada. Essa separação é importante porque a interface deixa explícito o contrato do prompt sem exigir edição em arquivo local. Em vez de alterar YAML ou código, a autoria acontece diretamente no formulário, o que reduz atrito para ajustes rápidos e para colaboração com pessoas fora do time de desenvolvimento.

## Execução interativa no playground

O playground é o ambiente de teste imediato do prompt antes do salvamento. Ao definir um template como `quanto é x mais y?`, a interface expõe os inputs correspondentes, permite preencher valores como `2` e `3` e executar o prompt na hora. Esse ciclo curto de editar, preencher entradas e rodar evita publicar um artefato sem validação básica de comportamento.

## Seleção de modelo para teste

A execução no playground depende da escolha de um modelo compatível com o tipo de teste desejado. No exemplo, a troca para `GPT-4o mini` foi necessária para rodar o fluxo pretendido, mostrando que o resultado do playground não depende apenas do texto do prompt, mas também da configuração do modelo. Quando um teste falha ou não executa como esperado, uma das primeiras verificações deve ser justamente o modelo selecionado.

## Leitura de resultado, tokens, custo e tempo

A interface não mostra apenas a resposta final; ela também expõe sinais operacionais da execução. Depois do teste, ficam visíveis o tempo de processamento, o status da execução, a contagem de `input tokens`, a contagem de `output tokens` e o custo estimado daquela chamada. Esses dados transformam o playground em uma ferramenta de ajuste técnico, porque permitem avaliar não só qualidade da resposta, mas também impacto financeiro e eficiência.

## Playground como espaço de iteração

Além de executar o prompt, o playground funciona como área de experimentação controlada. É nele que se testa uma pequena mudança no template, se compara o efeito de inputs diferentes e se observa se o custo cresce sem ganho proporcional de resultado. Essa etapa é especialmente útil quando o prompt ainda está sendo refinado por produto, operação ou prompt engineering, sem necessidade de alterar o repositório da aplicação.

## Salvamento e registro do prompt

Depois de validar o comportamento, o prompt pode ser salvo com um nome, como `a soma`, e passa a aparecer na listagem de prompts da plataforma. A interface registra o tipo do artefato, exibe informações como último commit e mantém o prompt organizado no hub, sem exigir que o autor preencha toda a estrutura manualmente. O salvamento transforma um experimento temporário do playground em um artefato persistente e reutilizável.

## Prompt privado e separação de responsabilidades

O prompt salvo nesse fluxo pode permanecer privado, o que é coerente com prompts que fazem parte do comportamento interno de uma aplicação. Lembra da gestão remota já estabelecida: aqui ela ganha a camada operacional de autoria, em que uma pessoa de produto ou outra função da empresa consegue criar e ajustar o prompt sem mexer no Git do software. O desenvolvedor continua responsável pela integração em runtime, mas a edição do conteúdo deixa de depender exclusivamente do repositório da aplicação.

## Relação com a aplicação

Esse fluxo não substitui a organização local de prompts já vista anteriormente; ele oferece uma alternativa de autoria e governança fora do código. Em muitos projetos, prompts continuarão em pastas versionadas no repositório, mas a interface do LangSmith atende cenários em que a edição precisa ser mais acessível e menos acoplada ao ciclo de desenvolvimento. O ponto central é separar onde o prompt é criado e ajustado de onde ele será consumido pela aplicação.
