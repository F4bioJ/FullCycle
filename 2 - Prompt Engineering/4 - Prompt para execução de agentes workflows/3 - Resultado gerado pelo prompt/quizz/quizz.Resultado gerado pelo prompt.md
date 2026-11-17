# Quizz — Resultado gerado pelo prompt

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 3
**Base:** material da aula

---

## 1. Você escreve prompts muito melhor em português, e um prompt seu vai ser usado por uma equipe que só trabalha em inglês. Pelo que o professor faz no dia a dia, qual é o caminho?
- A) Escrever direto em inglês, porque em português o resultado do modelo costuma sair ruim na maioria dos casos.
- B) Manter em português e pedir que a resposta saia em inglês, já que o idioma do prompt não pesa no resultado.
- C) Escrever em português e traduzir com a própria IA, passando um pente fino na tradução antes de distribuir.
- D) Escrever o prompt direto em inglês, mesmo com mais esforço, porque o modelo treinou mais nesse idioma.

## 2. O `requirements.txt` traz `pandas==2.1.0` e `pydantic` (só o nome), e o projeto não tem lockfile. Meses depois, um deploy novo quebra, sem mudança no código, numa função que usa o pydantic. Pela aula, o que aconteceu?
- A) O pydantic foi instalado numa versão nova, porque a dependência sem versão declarada recebe o upgrade.
- B) O pandas foi atualizado junto, porque a versão fixada vale só até sair uma versão nova da própria dependência.
- C) O pydantic ficou na versão antiga, porque sem lockfile o instalador reaproveita a versão que já estava no ambiente.
- D) O pydantic não foi instalado, porque uma dependência declarada sem versão é tratada como opcional na instalação.

## 3. O relatório pôs o `agent.py` e o `.env` entre os arquivos mais críticos. Pela justificativa do próprio relatório, por que eles?
- A) São os arquivos que declaram as dependências do projeto, então todo pacote vulnerável passa por eles.
- B) São o core do workflow e lidam com informação sensível, como criar issues no GitHub e acessar o Discord.
- C) São os únicos que importam o LiteLLM, o pacote com a vulnerabilidade crítica apontada nos key findings.
- D) Guardam as credenciais do projeto, e uma dependência vulnerável só consegue expor dados por meio delas.

## 4. Um pacote com o nome possivelmente escrito errado aparece nas critical issues e de novo na seção de dependências não verificadas. Pela função dessa seção no prompt, por que ele está ali?
- A) Porque a seção sempre sai no relatório, e o agente a preenche com o item de menor confiança para não deixá-la vazia.
- B) Porque o agente não pode editar a codebase, então registra ali o nome errado em vez de corrigi-lo no manifesto.
- C) Porque um typo é classificado como risco low, e o risco low vai para essa seção em vez da análise de risco.
- D) Porque o agente não conseguiu confirmar o pacote, e a seção lista o que o usuário precisa investigar por conta.
