# Resultado gerado pelo prompt

O professor mostra o relatório que o prompt do agente auditor de dependências (aula anterior) gerou ao rodar numa codebase dele.

## O foco é o prompt, não a ferramenta

O professor rodou o prompt numa codebase dele; ferramentas como o Claude Code podem mudar. A ideia não é estudar Claude Code, Gemini ou Codex, e sim ver como o prompt afeta o resultado.

## Por que o prompt está em inglês

A IA tende a dar um resultado um pouco melhor, às vezes bem melhor, em inglês, porque teve mais treinamento nesse idioma. Mesmo assim, no dia a dia o professor escreve a maioria dos prompts em português: funciona na maioria das vezes e ele escreve mais rápido. Quando vai distribuir o prompt, ou entregá-lo a uma empresa que só trabalha em inglês, ele traduz com a própria IA e passa um pente fino na tradução para evitar mal-entendidos. Outra saída é manter o prompt e pedir, no final dele, que o relatório seja gerado em português.

## Summary

O resumo descreve o projeto: agentes em Python sobre o Google ADK, num pipeline que verifica bugs e cria issues no GitHub, com 11 dependências diretas no `requirements.txt` e nenhum lockfile. As dependências são, em geral, bem mantidas, mas há vulnerabilidades e problemas de versão. O professor nota que poderia ter pedido, nas instruções, a data de geração do relatório.

## Key Findings

Os achados principais: uma vulnerabilidade crítica no LiteLLM (pacote que permite usar qualquer modelo de IA, rodando com o ADK ou não), seis vulnerabilidades críticas, uma dependência que pode ter o nome escrito errado (typo) ou não ser usada, a falta de lockfile e a mistura de dependências pinadas e não pinadas.

## Lockfile

O lockfile garante a versão exata de cada dependência que está sendo usada, como o `package-lock` no Node. Sem ele, podem surgir problemas na hora de colocar em produção.

## Dependência pinada e não pinada

A pinada tem a versão exata declarada (ex.: `1.0.2`): quando sai uma versão nova, não é feito upgrade. A não pinada tem só o nome; se houver atualização, ela é instalada e pode quebrar o software.

## Critical issues

Detalham LiteLLM, Pydantic e Pandas, as depreciadas e o possível typo (conferir o nome do pacote).

## Tabela e análise de risco

Depois vêm as dependências desatualizadas e a análise de risco.

## Dependências não verificadas

Nelas reaparece o pacote com possível erro de nome.

## Arquivos críticos

O relatório aponta os arquivos mais afetados pelas dependências, como o `agent.py` (os arquivos de agentes que usam o Google ADK) e o `.env`, e diz por quê: são o core do workflow, lidam com informação sensível (criam issues no GitHub e acessam o Discord), têm vulnerabilidades de autenticação e configuração e acessam logs externos que podem ter conteúdo malicioso.

## Integration notes

Mostram como os principais pacotes são usados.

## Plano de ação

O plano imediato: corrigir o nome do pacote, atualizar LiteLLM, Pydantic e Pandas, criar um lockfile, fixar as versões e revisar as variáveis de ambiente do `.env`. Esse foi o resultado obtido com o prompt da aula anterior.
