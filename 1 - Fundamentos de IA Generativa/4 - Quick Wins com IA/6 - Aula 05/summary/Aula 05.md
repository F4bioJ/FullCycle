# Aula 05

## Context7 como fonte operacional de documentação

Context7 funciona como uma base consultável de documentação de linguagens, frameworks e bibliotecas, útil quando a IA precisa responder com base em referências externas em vez de depender apenas do treinamento. Retomando a necessidade de transformar contexto em artefato concreto, ele permite que a documentação das libs usadas no projeto deixe de ficar implícita e passe a existir em arquivos reutilizáveis. O ganho prático está em reduzir respostas genéricas e acelerar tarefas como geração de `docs-libs` por dependência. A limitação é que a qualidade do resultado depende da atualização do acervo disponível no próprio Context7.

## Configuração do MCP no Cloud Code

Conforme definido anteriormente, MCP é o mecanismo usado para conectar a IA a fontes externas. No Cloud Code, a configuração de um servidor MCP como o Context7 faz a ferramenta expor essa documentação para consulta direta durante a execução do agente. Isso muda o workflow porque a IA deixa de depender de copy-paste manual de trechos de docs e passa a buscar a fonte por conta própria. A mesma lógica pode ser usada em outras interfaces, como Cursor ou VS Code com Gemini, desde que suportem MCP.

## Prompt para gerar `docs-libs` automaticamente

Um prompt eficaz para esse caso combina três instruções: analisar o codebase, identificar bibliotecas de terceiros e consultar o MCP correto para gerar arquivos Markdown por dependência. A estrutura citada usa a pasta `src`, o `requirements.txt` e a saída em `docs-libs`, com exemplos como `langchain.md` e `pinecone.md`. Isso funciona porque obriga o agente a mapear dependências reais do projeto antes de documentá-las, em vez de inventar uma stack provável. Quando o uso do MCP precisa ser garantido, vale reforçar explicitamente no prompt qual servidor deve ser utilizado.

## Idioma de trabalho com a IA

Escrever instruções, tarefas e documentação operacional em português pode ser mais eficiente para quem pensa e decide mais rápido nesse idioma. O código e seus comentários podem continuar em inglês sem conflito, porque a linguagem de implementação e a linguagem de coordenação não precisam ser a mesma. A consequência prática é menor atrito cognitivo na hora de explicar problema, restrição e intenção arquitetural. Em desenvolvimento, clareza costuma valer mais do que micro-otimização de tokens.

## Plan Mode e execução automática no Cloud

O Cloud oferece dois modos úteis de operação: execução com edição automática e Plan Mode. No modo automático, o agente planeja e já altera arquivos; no Plan Mode, ele primeiro expõe a estratégia, permitindo revisão antes de executar. Isso é especialmente importante quando a tarefa envolve geração de documentação, atualização de dependências ou leitura de fontes externas, porque o custo de uma ação errada pode contaminar o repositório. A escolha entre os modos depende do risco da operação e do nível de confiança no prompt.

## Tokens em desenvolvimento: otimizar menos, descrever melhor

Em tarefas de desenvolvimento, o gargalo principal raramente é economizar alguns tokens por escrever em português ou resumir demais a instrução. O fator que mais afeta a qualidade costuma ser a riqueza do contexto fornecido: problema, restrições, arquivos relevantes e objetivo esperado. Retomando o ponto já visto sobre janela de contexto, o risco real está mais em insistir no mesmo chat por tempo demais do que em detalhar bem uma solicitação nova. Documentação abundante tende a melhorar a precisão do agente.

## Quando o Context7 não basta: clonar o repositório oficial

Algumas bibliotecas mudam rápido demais para que uma base intermediária de documentação permaneça atualizada. Nesses casos, clonar o repositório oficial na versão usada pelo projeto é uma forma direta de entregar à IA a fonte mais confiável disponível: o próprio código, exemplos e estrutura real da implementação. O prompt então passa a pedir que o agente vasculhe esse repositório e gere documentação, snippets e pontos principais orientados ao seu caso de uso, como um servidor MCP em `Streamable HTTP`. Essa abordagem é valiosa justamente quando a documentação pública está defasada ou inconsistente.

## Atualização assistida de versão a partir do código-fonte

Quando uma dependência está atrás da versão atual, a IA pode comparar a versão instalada com a mais recente, identificar breaking changes e propor um plano de migração. O fluxo descrito inclui analisar diferenças entre versões, localizar impactos no código atual, criar um plano de ação e só então abrir uma branch para executar a atualização. Isso transforma a IA em apoio de manutenção evolutiva, não apenas em geradora de código novo. A condição para funcionar bem é fornecer tanto o projeto atual quanto a referência atualizada da dependência.

## Firecrawl para navegar árvores de documentação

Fetch simples costuma capturar apenas a página inicial ou um conjunto restrito de páginas, o que é insuficiente para documentações profundas como as de frameworks. Firecrawl resolve esse problema com scraping orientado à navegação da árvore do site, seguindo links internos de forma recursiva para coletar conteúdo distribuído em múltiplas subpáginas. Integrado por MCP, ele permite pedir algo como “entre nessa documentação, percorra os links relevantes e organize um resumo estruturado”. O resultado é uma base muito mais completa do que a obtida por tools de fetch superficiais.

## Limites do scraping e alternativa com Playwright

Scraping profundo nem sempre resolve tudo, especialmente quando a documentação exige autenticação ou interação mais complexa. Nesses cenários, ferramentas de automação de navegador como Playwright tendem a ser mais adequadas porque conseguem simular navegação real com login e execução de ações na página. A escolha entre fetch, Firecrawl e Playwright depende da profundidade da coleta e do nível de interatividade exigido pela fonte. O critério prático é simples: use a ferramenta menos complexa que consiga acessar o conteúdo necessário com confiabilidade.
