# Quick Wins com IA - 29/07/2025

Fonte: https://devfullcycle.notion.site/Quick-Wins-com-IA-29-07-2025-2411423c0388801d8369f34cfe403e6c

## Excalidraw

[Link para o Excalidraw](https://link.excalidraw.com/readonly/o0p0jhaHnLDKZV1bdgv8)

## Principais tópicos abordados

### Ferramentas de desenvolvimento com IA

Baseadas em IDEs:
- [Cursor](https://cursor.com/)
- [Windsurf](https://windsurf.com/)
- [VSCode + Github Copilot](https://code.visualstudio.com/docs/copilot/getting-started)
- [JetBrains](https://www.jetbrains.com/#)

Agentes CLI:
- [Claude Code](https://www.anthropic.com/claude-code)
- [Gemini](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)
- [Codex](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started)

### Documentos de Contexto

Documentos adicionados ao projeto de software tornam-se um ativo a longo prazo, ajudando a minimizar o aumento da complexidade do software com o tempo. Assim como os testes automatizados são ativos valiosos para o software, os documentos de contexto também se enquadram nessa categoria.

### Rules / Memories

São documentos normalmente utilizados pelas IDEs e Agentes de IA para que o agente consiga aplicar regras e lembrar de comportamentos sobre como o software deve ser desenvolvido. Ferramentas como Cursor oferecem a possibilidade de criar diversos arquivos de rules, que ficam armazenados na pasta .cursor/rules. Já agentes CLI como Claude Code utilizam um arquivo específico para isso, ex: CLAUDE.md.

A diferença semântica entre Rules e Memories pode depender diretamente da IDE ou Agente. Por exemplo: O Cursor possui arquivos específicos de regras que a IA deve seguir, mas também conta com recursos de memories que são acessados pelo modelo, trazendo lembretes sobre como o agente deve se comportar. Ex: "Todas as vezes que criar uma função pública, deve-se fazer sua documentação como comentário logo acima da função."

Já ferramentas como CLAUDE Code, tratam o conceito de memories como instruções que são lidas diretamente do arquivo CLAUDE.md.

### Context Engineering

**O que é?** Construção de sistemas e workflows que fornecem as informações e ferramentas corretas no formato ideal para a LLM.

O problema não está "somente" no LLM
