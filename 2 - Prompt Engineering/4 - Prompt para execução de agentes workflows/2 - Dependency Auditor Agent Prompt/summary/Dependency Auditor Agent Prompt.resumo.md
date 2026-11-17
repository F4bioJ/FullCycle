# Dependency Auditor Agent Prompt

O professor abre no Notion um prompt real, em inglês, de um agente que faz **auditoria de dependências** de um projeto, seguindo a estrutura do capítulo anterior.

## Persona e escopo

O agente é um engenheiro de software sênior, especialista em dependências em várias linguagens. O escopo é o limite: o papel dele é **estritamente analisar e reportar**, sem modificar o projeto, fazer ou propor upgrades. O professor é o mais pontual possível para evitar alucinação e para a IA não fazer mais nem menos do que o pedido. Não é garantido, mas testando o risco cai bastante.

## Objetivo em bullet points

O objetivo é uma auditoria completa, detalhada em itens: dependências depreciadas, desatualizadas ou legacy (que vão ser descontinuadas), vulnerabilidades conhecidas, bibliotecas sem manutenção há mais de um ano, licenças e riscos legais, pontos de falha de manutenção e recomendações estruturadas, sem mexer no código. A dica do professor: escrever esses itens é difícil, porque muitas vezes nem quem pede tem clareza do que quer. Essa clareza é a maior dificuldade de um bom prompt.

## Entrada

- Os arquivos de dependências e os lockfiles: `package.json`, os locks de npm, pnpm e yarn, `requirements.txt` e equivalentes de Rust e Go. Detalhá-los dá foco ao agente, porque é neles que fica o manifesto das dependências.
- A linguagem, o framework e as ferramentas do repositório, que o agente detecta.
- Instruções opcionais do usuário, como focar em segurança ou licenciamento.
- Se nenhum arquivo de dependências for encontrado, o agente diz isso explicitamente e pede o caminho, confirmando se deve seguir com informação limitada.

## Saída: o esqueleto do relatório

A saída é um relatório em Markdown. O professor liga isso ao **skeleton of thoughts**: o prompt entrega o esqueleto do que quer e de como quer. As seções são:

1. **Summary:** visão geral do projeto, das dependências e dos principais achados.
2. **Critical issues:** vulnerabilidades, bibliotecas depreciadas ou legacy e dependências centrais.
3. **Tabela de dependências** com versão atual, última versão e status. O prompt traz linhas de exemplo (Express, Lodash, LangChain marcados como *outdated*), porque só pedir "uma tabela mostrando o que está depreciado" deixaria o pedido ambíguo.
4. **Análise de risco:** nível de criticidade, dependência, o registro no banco de vulnerabilidades e o detalhe do problema.
5. **Dependências não verificadas:** as que o agente não conseguiu checar, para o usuário investigar por conta própria. O prompt manda incluir essa seção **só se houver** casos. Sem essa observação, o modelo tende a criar a seção só para dizer que não há nada.
6. **Arquivos críticos:** os 10 arquivos com mais risco de dependência e o porquê (impacto no negócio, na integração). Depois de testar, o professor acrescentou "use sempre o caminho relativo", porque o agente às vezes mostrava o caminho completo do computador dele. Quanto mais detalhe, melhor.
7. **Notas de integração:** como cada dependência é usada no projeto.
8. **Plano de ação**, **sem estimativas de esforço ou tempo**. Os modelos costumam escrever "um dia" ou "quatro horas" sem base nenhuma. Se ele quisesse estimativas, o prompt precisaria dizer como calculá-las.
9. **Passo final:** se o usuário não informou onde salvar, o agente pergunta o caminho e o nome do arquivo. Num CLI (Claude Code, Gemini), o relatório na tela é ruim de ler, e o professor quer guardá-lo.

## Critérios

Os critérios dizem como gerar o relatório no formato pedido:

- identificar todos os package managers e arquivos de dependências;
- catalogar só as **dependências diretas** e ignorar as **transitivas** (dependências das dependências). Elas importam, mas formariam uma árvore gigante;
- comparar cada dependência com a última versão estável **apenas para reportar**, frase que reforça que ele não deve tentar o upgrade;
- marcar as depreciadas e as sem manutenção há mais de um ano, verificar vulnerabilidades e licenças;
- classificar os riscos em **critical, high, medium e low**, a escala que a tabela de risco usa;
- apontar os *single points of failure* (dependências que afetam várias features), as *breaking changes* das versões novas e o esforço de manutenção;
- usar **MCP servers**, como Context7 (acesso a documentação) ou Firecrawl (leitura de páginas), **quando estiverem disponíveis**. São exemplos, não obrigação: outro servidor pode fazer o mesmo papel;
- trazer números de versão, IDs das vulnerabilidades e próximos passos claros, em vez de conselhos genéricos;
- sem acesso a registros, MCP ou bancos de vulnerabilidades, deixar a limitação clara e trabalhar só com os arquivos do projeto.

## Ambiguidades e premissas

- Vários ecossistemas na mesma pasta (Python e Go, ou back-end e front-end): auditar cada um separado e dizer isso no resumo.
- **CVE** (*Common Vulnerabilities and Exposures*): cada vulnerabilidade conhecida recebe um ID único, usado por empresas e ferramentas de segurança.
- Versão faltando: documentar e informar o nível de confiança.
- Lockfile faltando (o arquivo que trava as versões): dizer que o risco de reproduzir o ambiente em produção é maior.
- Sem pasta indicada pelo usuário, auditar o projeto inteiro; com pasta, só ela. Isso cobre monorepos ou a auditoria de uma feature.

## Instruções negativas

Não modificar nem sugerir edições na codebase, não rodar comandos de upgrade, não inventar CVEs nem assumir vulnerabilidades, não usar frases vagas como "provavelmente seguro" ou "deve estar ok", não usar emojis nem caracteres estilizados e não estimar tempo de correção. O professor admite que, às vezes, os emojis aparecem mesmo assim; a instrução minimiza, não elimina.

## Tratamento de erro

Se a auditoria não puder ser feita (nenhum arquivo de dependência, falta de permissão de leitura), o agente responde num formato fixo: status de erro, razão e próximos passos, como informar o caminho dos manifestos, dar permissão de leitura no workspace ou confirmar o ecossistema.

## Workflow resumido

No fim, o prompt repete o passo a passo resumido (detectar a stack, inventariar, comparar versões, sinalizar riscos, verificar licenças, categorizar, gerar o relatório). Fica mais simples para o agente seguir e para quem lê.

## Limite do exemplo

Não é o melhor prompt possível, nem funciona 100%: o resultado depende do modelo e da codebase, porque a IA trabalha com probabilidade. Mas já entrega algo bem mais estruturado.
