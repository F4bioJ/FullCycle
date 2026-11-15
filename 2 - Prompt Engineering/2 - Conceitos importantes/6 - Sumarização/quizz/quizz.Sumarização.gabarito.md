# Gabarito — Sumarização

## 1. Risco residual de alucinação por omissão de detalhes finos no resumo.
**Correta: D**
**Por quê:** A sumarização é compressão semântica: preserva a estrutura geral mas remove nuances, exceções e detalhes finos. Isso reduz alucinação por perda bruta de contexto (truncamento), mas não elimina o risco de alucinação por falta de detalhes específicos que o resumo omitiu.
- **A:** Alucinação do modelo de sumarização é possível, mas não é o risco *principal* inerente à técnica de sumarização em si; o resumo omitir detalhes é garantido pela natureza da compressão.
- **B:** O objetivo da sumarização é *liberar* tokens; o resumo é sempre mais curto que o histórico original, senão a técnica falharia.
- **C:** O monitoramento de tokens é operação trivial (contagem de inteiros) e não adiciona latência perceptível.
**Conceito:** limite da sumarização

## 2. Modelo barato para sumarizar porque a tarefa exige menos capacidade que a tarefa principal.
**Correta: A**
**Por quê:** A lógica econômica central: resumir é comprimir informação conhecida, tarefa que exige menos capacidade do que a resolução do problema original (que pode demandar raciocínio complexo, código, análise). Isso transforma sumarização em decisão arquitetural de custo.
- **B:** Temperatura é parâmetro disponível em virtualmente todas as APIs de LLMs, independente de custo.
- **C:** Verboso ou não depende do prompt, não do preço do modelo; modelos caros seguem instruções de concisão se bem promptados.
- **D:** Modelos caros costumam ter janelas *maiores*, não menores; o problema não é capacidade de processar o histórico.
**Conceito:** decisão arquitetural de custo

## 3. Identificar a afirmação falsa sobre garantia de eliminação de alucinação via resumo.
**Correta: C**
**Por quê:** O resumo, por ser compressão, *sempre* omite detalhes, nuances e exceções. A aula é explícita: "a sumarização diminui o risco de respostas desconectadas, mas não elimina risco de alucinação". Dizer que garante que nunca alucine contradiz o mecanismo central.
- **A:** Correto: persistir o resumo evita reprocessar o histórico antigo repetidamente.
- **B:** Correto: o resumo armazenado serve como estado compacto recuperável.
- **D:** Correto: a rotina de monitoramento + disparo automático + armazenamento torna isso cíclico e automático.
**Conceito:** armazenamento e reutilização

## 4. Prompt único falha porque critérios de relevância mudam entre domínios (chat vs livro).
**Correta: B**
**Por quê:** A aula afirma explicitamente: "Não existe um único prompt de sumarização que funcione igualmente bem para qualquer domínio. Resumir um livro e resumir o histórico de codificação são tarefas semanticamente diferentes, com critérios distintos de relevância, granularidade e fidelidade."
- **A:** Truncamento silencioso da entrada é comportamento de implementação, não limitação inerente; o problema é o prompt não especificar *o que* manter para um livro técnico.
- **C:** Modelos resumem narrativas contínuas rotineiramente; a atenção não "falha" em não-diálogos.
- **D:** Temperatura 0 ajuda consistência, mas não resolve a ausência de critérios de relevância específicos do domínio no prompt.
**Conceito:** prompt varia por conteúdo

## 5. Trade-off: truncamento = fidelidade recente vs quebra de continuidade; sumarização = continuidade vs perda de detalhes finos.
**Correta: A**
**Por quê:** Truncamento = corte literal: mantém tokens recentes com fidelidade total, mas quebra a continuidade temática (o modelo "esquece" o início). Sumarização = compressão semântica: mantém a estrutura geral e pontos-chave (continuidade), mas remove nuances e detalhes finos por definição de compressão.
- **B:** Truncamento funciona em qualquer sequência de tokens (código, docs, diálogo); não é restrito a diálogos.
- **C:** Nenhuma das duas dá janela ilimitada; ambas gerenciam limite fixo. Sumarização permite *mais* histórico efetivo, não ilimitado.
- **D:** Sumarização *não* garante zero perda; é compressão com perda. A chamada extra de LLM é custo real, mas o ganho não é "zero perda".
**Conceito:** troca truncamento vs sumarização
