# Aula 07

## Governança enterprise para uso de IA

Governança enterprise para IA é o conjunto de decisões técnicas, contratuais e operacionais que define quais ferramentas podem ser usadas, em quais contas e sob quais regras de proteção de dados. Em empresa grande, adoção séria não começa com cada desenvolvedor escolhendo sua ferramenta; começa com contrato corporativo, plano enterprise e restrição explícita ao uso de contas pessoais. Isso importa porque o maior risco não é a ferramenta oficial, e sim o vazamento informal por logins errados, uso de chats pessoais e ausência de controle central. A recomendação prática é tratar IA como qualquer outro ativo corporativo sensível: fornecedor homologado, política de acesso, bloqueio de alternativas não aprovadas e responsabilidade executiva sobre a decisão.

## Contratos, proteção de dados e uso corporativo

Planos enterprise existem para criar uma camada jurídica e operacional que não está presente no uso individual. Neles, a empresa negocia cláusulas sobre retenção, treinamento, isolamento de dados, filtros e conformidade regulatória, inclusive quando há exigências regionais como regras europeias de privacidade. Isso muda a discussão com stakeholders: o problema deixa de ser “usar IA ou não” e passa a ser “qual fornecedor, com qual contrato e com qual controle”. Em ambiente corporativo, a conta usada e o login adotado são parte da segurança, porque a mesma ferramenta pode ter políticas completamente diferentes entre plano pessoal e plano empresarial.

## Escolha de modelos para geração de documentação

Para gerar documentação, a variável mais importante nem sempre é o modelo “mais inteligente”, mas a combinação entre prompt e capacidade de contexto. Quando a documentação precisa ser produzida a partir de uma codebase grande, janelas extensas de contexto reduzem truncamento e perda de informação, o que favorece modelos com maior capacidade de tokens. Se a documentação não é o produto final do sistema, diferenças entre modelos tendem a cair, desde que o prompt esteja bem estruturado. A decisão prática é simples: priorize janela de contexto em tarefas de leitura ampla de repositório e priorize adequação do modelo ao objetivo quando a documentação for parte crítica do próprio produto.

## Prompt como ativo versionável

Retomando o uso de PRP e templates, o ponto novo aqui é que prompt deixa de ser texto descartável e passa a ser artefato de engenharia. Quando um prompt controla migração, geração de documentação, transformação de código ou comportamento de agente, ele afeta diretamente o resultado da aplicação e precisa ser tratado como código: evoluído, comparado, revisado e versionado. A consequência é que mudanças de modelo, contexto ou instrução podem degradar o sistema mesmo sem alterar uma linha da aplicação. Versionar prompts evita o cenário de “prompt 1, prompt 2, prompt 3” sem rastreabilidade nem critério de regressão.

## CI/CD para prompts

CI/CD para prompts é a prática de validar automaticamente se uma alteração de prompt preserva a qualidade esperada do resultado. O pipeline não testa apenas se o software compila ou se o banco responde; ele também executa o prompt em casos controlados para verificar se a saída continua aceitável após uma mudança. Isso existe porque o comportamento da aplicação pode quebrar por regressão de instrução, não apenas por regressão de código. Em times que dependem de IA para fluxos críticos, prompt sem validação automatizada vira uma fonte silenciosa de falha em produção.

## Metaprompts e personalização do workflow

Um metaprompt é um prompt usado para gerar ou refinar outro prompt, o que permite transformar tentativa e erro em processo repetível. Em vez de depender de instruções improvisadas, o time pode capturar como trabalha, converter esse procedimento em prompt e iterar sobre ele com exemplos, correções e critérios explícitos. Isso explica por que repositórios-base de PRP raramente são usados sem adaptação: cada projeto exige recortes próprios de contexto, validação e estrutura. A prática correta não é copiar o template inteiro, mas extrair o que serve, modificar o restante e alinhar o artefato ao workflow real do time.

## Integração Jira/MCP e origem corporativa das tarefas

Retomando MCP, a camada nova é usá-lo para conectar o fluxo de desenvolvimento assistido por IA às ferramentas onde o trabalho realmente nasce. Em muitos times, a feature não começa no terminal nem no editor, mas em tickets do Jira, páginas do Confluence e artefatos de produto; integrar essas fontes ao contexto do agente reduz transcrição manual e perda de intenção. A utilidade prática está em transformar tarefas externas em insumo operacional para planejamento, PRP e execução. Quando essa ponte existe, o fluxo deixa de ser individual e passa a conversar com o sistema de gestão da empresa.

## Context engineering em ambiente real

Context engineering é a disciplina de montar, selecionar e entregar ao agente o conjunto certo de informações para uma tarefa, combinando documentação, MCP, RAG, APIs externas e estado do projeto. A diferença em relação à documentação isolada é que o contexto deixa de ser apenas arquivo persistido e passa a incluir fontes dinâmicas e conectadas ao ambiente corporativo. Isso importa porque, em operação real, a intenção do trabalho está distribuída entre código, tickets, integrações e restrições de negócio. Escalar quick wins para times exige projetar esse fluxo de contexto, não apenas escrever bons prompts localmente.

## Testes com IA: o problema real está no prompt operacional

Retomando testes, o risco principal não é “a IA gerar testes”, mas gerar testes, executá-los e corrigir o código sem limites claros. Esse fluxo tem três etapas acopladas — desenvolvimento do teste, execução e correção — e falha por dois motivos distintos: o teste pode estar errado ou o código pode estar errado. Sem instruções explícitas sobre até onde o agente pode alterar a aplicação quando um teste falha, a automação tende a entrar em ciclos destrutivos de correção. A recomendação prática é descrever o procedimento humano de teste como prompt operacional, incluindo critérios de parada, escopo de modificação e condições de revisão.

## Commits incrementais como guardrail operacional

Commits incrementais funcionam como guardrail porque limitam o raio de dano de uma execução agêntica. Sempre que um critério de aceitação passa, os testes validam e a revisão humana aprova, o estado deve ser salvo imediatamente com um commit padronizado. Isso reduz a necessidade de caçar regressões em mudanças longas e confusas, especialmente quando a IA gera muitos testes ou altera múltiplos arquivos em sequência. Em workflow com IA, granularidade de commit não é só organização de histórico; é mecanismo de contenção operacional.

## Adoção prática em times

Uma adoção madura de IA em desenvolvimento combina ferramenta homologada, contexto bem projetado, prompts versionados, integração com sistemas corporativos e checkpoints frequentes de qualidade. O desenvolvedor continua responsável pelo resultado, mas desloca seu esforço de digitação para supervisão, definição de limites e desenho do processo. Quando a equipe trata a IA como extensão do seu próprio modo de trabalhar, e não como substituto mágico, o comportamento do agente tende a refletir melhor o padrão técnico do time. O ganho real aparece quando o workflow individual passa a funcionar também em escala organizacional.
