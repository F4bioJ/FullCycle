# Resumo — Cadeias de Markov (HMMs)

## Contexto: a evolução depois dos bigramas
- Os **bigramas** olham apenas pares de palavras (dois "grupinhos"), num modelo bem linear e local.
- Os **HMMs (Hidden Markov Models)** são o próximo passo evolutivo: começam a olhar um contexto mais amplo e introduzem **estruturas internas não diretamente visíveis** que governam o que é observado.
- Ainda **não são LLMs** — são um degrau no caminho que levou até eles.

## Quem foi Markov
- **Andrei Markov**, matemático/estatístico russo, formado pela Universidade de São Petersburgo.
- Trabalhou com limites de integrais, teoria de aproximação e probabilidade.
- Sua principal contribuição aqui: as **Cadeias de Markov**. (Teve um filho homônimo, também matemático.)

## Ideia central: estados ocultos
- O HMM é um **sistema estatístico** baseado em **estados ocultos (hidden states)**: aquilo que não é observado diretamente, mas precisa ser **inferido** a partir de sinais indiretos.
- Exemplo da aula: ver o professor de blusa → inferir que está frio. A temperatura não está "escrita na testa"; ela é inferida.
- Exemplo do **meteorologista**: infere o clima (estado oculto) por observações indiretas — cor do céu, vento, sol, pessoas com guarda-chuva.
- Novas observações podem mudar a inferência (sai um sol forte → talvez não esteja frio).

## Elementos do modelo
| Elemento | O que é | Exemplo (clima) |
|---|---|---|
| **Estados ocultos** | Estrutura interna não observável | Sol, chuva, nublado |
| **Observações** | Saídas (outputs) geradas pelos estados, os dados que vemos | Céu limpo, vento forte, guarda-chuva aberto |
| **Matriz de transição** | Probabilidade de passar de um estado para outro | Sol → chuva |
| **Matriz (distribuição) de emissão** | Probabilidade de cada estado gerar determinada observação | Chuva → guarda-chuva aberto |

## Algoritmos principais
1. **Forward-Backward** → calcula a **probabilidade de uma sequência observada** acontecer.
2. **Viterbi** → encontra a **sequência de estados ocultos mais provável**.
3. **Baum-Welch (EM)** → **ajusta os parâmetros** do HMM com base nos dados observados.

Resumo da sequência: *calcular a probabilidade → achar a sequência mais provável → ajustar os parâmetros.*

## Aplicações
- **Reconhecimento de fala** (ex.: primeiras assistentes como Alexa/Google): estados ocultos = sons fonéticos; observações = sinais de áudio.
- **POS tagging (Part-of-Speech tagging)**: estados ocultos = categorias gramaticais (verbo, substantivo…); observações = palavras. Ajudou a melhorar a construção de frases.
- **Biologia computacional**: análise de sequências genéticas / DNA, identificação de regiões específicas.
- Funcionam bem onde há **estrutura sequencial probabilística clara** e **dependências de curto prazo**.

## Limitações
- **Propriedade de Markov**: a próxima observação depende só do **estado atual**, e o estado atual depende só do **estado anterior** → **não captura dependências de longo prazo**.
- É **linear / unidirecional**: vai só "para frente", sem retroalimentação nem ciclos complexos de interação cruzada (diferente do raciocínio humano, que volta e revisa decisões).
- Exige **dados rotulados** para tarefas supervisionadas → rotulagem é **cara e demorada**.
- **Não serve para geração de texto livre/longo**: perde coerência, repete padrões, fica prolixo — não faria o que o ChatGPT faz.
- Ainda é usado em vários lugares, apesar dessas limitações.

## Ideia-chave
Bigramas → olhavam só duas palavras. 
HMMs → introduzem **estados ocultos e probabilidades de transição/emissão**, permitindo inferir estruturas invisíveis — um grande salto, mas ainda **lineares e limitados a curto prazo**, o que abre caminho para os próximos modelos.

---

## Além da aula
- **Bigrama já é uma cadeia de Markov.** Um bigrama assume que a próxima palavra depende só da anterior — isso é exatamente a propriedade de Markov (ordem 1) aplicada a palavras. Um n-grama é uma cadeia de ordem n−1. A diferença do **HMM** é ter **estados ocultos** entre o que se vê e o que gera o que se vê.
- **Cadeia de Markov ≠ HMM.** A aula usa os termos quase como sinônimos. Numa cadeia de Markov simples os estados são **visíveis** (ex.: a própria palavra). No HMM os estados são **ocultos** e só as observações são vistas.
- **Formalmente:** transição = P(estado atual | estado anterior); emissão = P(observação | estado atual). Essas duas tabelas + a probabilidade do estado inicial definem um HMM.
- **Por que o Viterbi é esperto:** testar todas as sequências de estados possíveis seria exponencial (N estados, T passos → Nᵀ caminhos). O Viterbi usa **programação dinâmica**: a cada passo guarda só o melhor caminho até cada estado, ficando linear no tamanho da sequência. Criado por **Andrew Viterbi** (1967), cofundador da Qualcomm, originalmente para decodificar sinais de telecomunicação.
- **Baum-Welch não precisa de rótulos.** Nuance em relação à aula: com dados rotulados você treina o HMM simplesmente contando frequências. O Baum-Welch (algoritmo EM) serve justamente para quando **não há rótulos** — ele estima os estados ocultos e ajusta as matrizes iterativamente. Limitação: converge para um ótimo **local**, dependente do chute inicial.
- **Correção de datas:** Andrei Markov (1856–1922) se formou em São Petersburgo em **1878** e lecionou lá de **1886 até 1905** (a aula diz "formado em 1888 e professor até 1886", o que é inconsistente).
