# Quizz — Analisando prompt de analise de componentes

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 9
**Base:** material da aula

---

## 1. No prompt de arquitetura, o agente lia a codebase de forma seletiva, guiado por objetivos. No prompt de componentes, o professor pede uma leitura mais agressiva dos arquivos. O que justifica essa mudança?
- A) O relatório de arquitetura já trouxe os caminhos de cada componente, então a leitura seletiva perde a função em qualquer análise.
- B) Regras de negócio aparecem em detalhes de código, então a janela de contexto deixa de ser uma preocupação nesse tipo de análise.
- C) O recorte é um componente só, com bem menos arquivos que o projeto, então dá para ler mais a fundo o que está nele.
- D) Testes, fixtures e mocks entram como input, e esses arquivos precisam ser lidos por inteiro para servir à análise.

## 2. Ao aplicar o prompt num componente de pagamentos enorme, o relatório volta raso: poucas regras de negócio e um data flow genérico. Pela aula, qual é o melhor próximo passo?
- A) Acrescentar ao prompt um workflow final que repita as seções, para o agente não pular etapas.
- B) Reduzir os objetivos do prompt, para o agente concentrar a leitura nas regras de negócio desse componente.
- C) Exigir mais parágrafos por regra de negócio, para forçar o agente a escrever mais sobre cada uma.
- D) Rodar outro prompt que divida o componente em subcomponentes e analisar cada um em nível mais baixo.

## 3. Num módulo de pagamentos com regras como "pagamento mínimo de um dólar", por que o prompt pede uma tabela com tipo, descrição, arquivo e linha, e depois um detalhamento separado de cada regra?
- A) Cada componente pode ter muitas regras; separar e localizar cada uma mostra o que ela faz e onde está.
- B) A tabela ordena as regras por criticidade, e o detalhamento se limita às de maior criticidade no componente.
- C) O detalhamento por regra substitui o data flow, que deixa de ser necessário quando as regras estão descritas.
- D) As regras de negócio são extraídas dos testes, e a tabela indica em que arquivo de teste cada uma foi achada.

## 4. No formato de saída do prompt, o professor envolve com XML, como placeholder, o trecho em que a IA deve escrever. Qual é o motivo dado na aula?
- A) Fazer o relatório final sair em XML, um formato mais fácil de outro agente do workflow processar depois.
- B) A definição está em Markdown, e sem essa marca a IA pode confundir o formato com o conteúdo que deve gerar.
- C) Marcar quais seções são opcionais, para o agente omitir as que não se aplicam ao componente.
- D) Separar as instruções de sistema das de usuário, como se faz ao dividir system prompt e user prompt.

## 5. Sobre o workflow no final do prompt de componentes, qual afirmação está INCORRETA?
- A) Ele resume, em passo a passo, as instruções que vieram antes no prompt.
- B) Ele tende a ajudar mais quando o prompt reúne muita informação e muita instrução.
- C) Ele é opcional e depende de a tarefa ser complexa ou longa, como o professor indicou para o formato de prompts.
- D) Ele permite cortar as seções detalhadas do prompt, já que repete o essencial delas de forma mais curta.
