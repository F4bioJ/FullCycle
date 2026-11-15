# Mapa da evolução dos modelos de linguagem

Aulas 1.6 e 2.1 a 2.6. Versão em Markdown puro do diagrama em [mapa-evolucao-modelos-linguagem.mermaid.md](mapa-evolucao-modelos-linguagem.mermaid.md).

**2-grama → HMM → Redes neurais profundas → RNNs (LSTM/GRU) → Transformers → Tokens → LLMs**

## Visão geral

| Aula | Tecnologia | Ideia central | Limitação que levou à próxima |
|---|---|---|---|
| 1.6 | **2-grama** | Próxima palavra pela frequência do par com a anterior | Falta estrutura além de pares de palavras |
| 2.1 | **HMM** | Estados ocultos geram observações visíveis | Dependências curtas e rotulagem cara |
| 2.2 | **Redes neurais profundas** | Camadas profundas + embeddings, janela fixa | Sem memória fora da janela fixa |
| 2.3 | **RNNs (LSTM · GRU)** | Estado recorrente funciona como memória | Contexto longo difícil e sem paralelismo |
| 2.4 | **Transformers** | Self-attention: cada token pesa todos os outros, em paralelo | — (base dos modelos atuais) |
| 2.5 | **Tokens (BPE)** | Unidade real de entrada: pedaços de palavra | — (unidade de entrada do modelo) |
| 2.6 | **LLMs** | Transformer + escala massiva de dados e parâmetros | — |

✔ = o que a tecnologia trouxe · ✘ = onde ela trava

---

## Aula 1.6 · 2-grama (bigrama)

- ✔ Prevê a próxima palavra só pela anterior
- ✔ Estatística pura: frequência de pares
- ✔ Simples e barato de computar
- ✘ Sem memória e sem plano global
- ✘ Repetição / looping ("gato preto, gato preto...")
- ✘ Coerência só local, nunca global

⬇ *falta estrutura além de pares de palavras*

## Aula 2.1 · HMM (Cadeias de Markov ocultas)

- ✔ Estados ocultos geram observações visíveis
- ✔ Matriz de transição + matriz de emissão
- ✔ Algoritmos: Forward-Backward · Viterbi · Baum-Welch
- ✔ Usos: reconhecimento de fala, POS tagging, DNA
- ✘ Hipótese de Markov: só olha o estado anterior
- ✘ Linear e dependente de dados rotulados

⬇ *dependências curtas e rotulagem cara*

## Aula 2.2 · Redes neurais profundas (feedforward)

- ✔ Muitas camadas, viabilizadas por dados + GPUs
- ✔ Word embeddings: palavra vira vetor
- ✔ Significado parecido = vetores próximos
- ✔ Janela fixa de palavras anteriores para prever a próxima
- ✘ Fluxo só para frente, ordem das palavras mal tratada
- ✘ Nenhuma memória além da janela

⬇ *sem memória fora da janela fixa*

## Aula 2.3 · RNNs (LSTM · GRU)

- ✔ Estado recorrente = memória da sequência
- ✔ Saída depende da entrada + histórico
- ✔ LSTM: portas de entrada, esquecimento e saída
- ✔ GRU: menos portas, mais leve
- ✘ Desvanecimento / explosão de gradiente
- ✘ Processamento passo a passo: não paraleliza

⬇ *contexto longo difícil e sem paralelismo*

## Aula 2.4 · Transformers (Attention Is All You Need)

- ✔ Abandona a recorrência
- ✔ Self-attention: cada token pesa todos os outros
- ✔ Positional Encoding preserva a ordem
- ✔ Atenção + camadas MLP feedforward
- ✔ Processa tudo em paralelo (GPUs/TPUs)
- ✔ Escala para bilhões de parâmetros

⬇ *unidade de entrada do modelo*

## Aula 2.5 · Tokens (BPE)

- ✔ Unidade real de processamento: pedaços de palavra
- ✔ BPE agrupa sequências frequentes no corpus
- ✔ Vocabulário fixado durante o treino
- ✔ Lida com palavras novas e erros de escrita
- ✔ Contexto e custo medidos em tokens

⬇ *escala massiva de tokens*

## Aula 2.6 · LLMs (GPT · BERT · LLaMA · Gemini)

- ✔ Transformer + escala massiva de dados e parâmetros
- ✔ Pré-treino autossupervisionado → fine-tuning → RLHF
- ✔ GPT: autoregressivo, foco em gerar
- ✔ BERT: bidirecional, foco em compreender
- ✔ Capacidades emergentes: zero/few-shot, raciocínio em etapas
