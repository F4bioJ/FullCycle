# Enriquecimento de queries na prática

## De enriquecer a resposta para enriquecer a pergunta

Na aula anterior, o loop iterativo enriqueceu a **resposta**. Agora o foco é o tema central do capítulo: enriquecer a **pergunta**, porque uma pergunta melhor gera uma resposta melhor. O professor pede para não se apegar ao Python: o código foi separado em classes só para ficar mais organizado.

## O cenário: revisar uma pull request

O exemplo enriquece um pedido de revisão de pull request. O sistema define **informações obrigatórias** e, enquanto faltar alguma, **pergunta ao usuário** até obtê-la. Só então gera a pergunta final, que pode ser usada para consultar um banco, chamar o LLM ou executar uma ferramenta.

As seis informações obrigatórias são: **ID da PR**, **repositório**, **branch**, **preocupações** (*concerns*), **guia de estilo** e **requisitos de teste**.

## A estrutura: modelos de dados em vez de texto solto

O professor observa que, em aplicações com LLM, vai ser cada vez mais comum estruturar as respostas em modelos de dados (**Pydantic** ou **Data Classes**), em vez de trabalhar só com linguagem natural. O modelo base tem:

- se a pergunta é **complexa**;
- se requer **subqueries** (perguntas menores);
- **clarifications**: as perguntas que ainda precisam de resposta;
- **entidades** capturadas do que o usuário disse. Exemplo: em "minha PR é a PR ID 10", a entidade é "PR ID 10".

## O motor do enriquecimento

1. Um prompt define a tarefa: identificar o que falta e gerar **perguntas de clarificação**, incluindo o que não está explícito na pergunta. Ter só algumas respostas não basta: o prompt insiste até obter as seis informações obrigatórias. A resposta vem em **JSON** (subqueries, clarificações e entidades), que popula o modelo de dados.
2. Outra chain **reescreve tudo em linguagem natural**, de forma organizada, concisa e clara, combinando a pergunta original com o contexto obtido.
3. O método principal executa o loop com o usuário (o sistema pergunta, o usuário responde) até não restar clarificação, e só então gera a pergunta final.

## A execução

Com `python query_enrichment.py`, o professor responde à pergunta inicial com **"revise a minha pull request"**.

- **Round 1:** a pergunta é marcada como complexa (se não fosse, o sistema não a expandiria em subperguntas) e gera subperguntas: identificar o ID da PR, o repositório, o branch, os concerns, o style guide e os requirements. As entidades ainda estão vazias. Resolvidas todas as clarificações, as subperguntas ficam resolvidas, e a pergunta final fica enriquecida.
- Ele responde o ID da PR ("1") e **se recusa** a responder o repositório, para ver o comportamento. O sistema registra a entidade PR ID = 1, deixa de perguntar por ela e volta a pedir o repositório.
- Ele informa o repositório ("iagem") e o branch ("teste"). A pergunta já evolui: "Revise a pull request com ID 1 no repositório iagem, no branch test."
- Por fim, informa o concern (seguir o estilo de Go) e o requisito de teste (80% de cobertura).
- **Pergunta final:** "Você poderia revisar minha pull request com ID 1 no repositório iagem, no branch test, garantindo que siga o style guide Go e atinja os requirements de 80% de cobertura de testes."

## O que isso mostra

Sai-se de uma pergunta extremamente aberta para uma pergunta completa, só estruturando o que se considera obrigatório. É muito melhor mandar isso ao sistema do que "corrija uma PR" sem saber nem o ID. Num chat, uma pergunta vaga pode cair nesse loop interativo: só depois de o usuário responder a todos os requisitos a pergunta enriquecida vai para o LLM, que executa a operação. O professor ressalva que este exemplo repete várias chamadas para chegar à pergunta completa.

Também há outras formas de enriquecer. Com contexto anterior (a PR, o branch ou o projeto em que o usuário estava mexendo), muitos campos já viriam preenchidos. Prompts podem reformular a pergunta com base no **perfil do usuário**, no último código que ele mexeu, na função que exerce ou nos guias da empresa. Os dados podem vir do banco, de chamadas de ferramenta ou de perguntas diretas ao usuário.

Num teste com uma pergunta mais rica ("revise minha PR no repositório iagem, no branch X, seguindo o estilo oficial de Go"), o sistema já capturou o repositório e o branch, mas não o ID da PR nem os concerns. Com ajustes no prompt, provavelmente capturaria mais entidades. O sistema não precisa começar do zero: captura as entidades, entende o contexto e pergunta só o que falta.
