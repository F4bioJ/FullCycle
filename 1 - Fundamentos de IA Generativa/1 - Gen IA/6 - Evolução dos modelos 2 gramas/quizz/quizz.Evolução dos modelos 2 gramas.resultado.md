# Resultado — Evolução dos modelos 2 gramas

## Histórico (migrado do formato antigo)

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 6*

Nível: **difícil** (alternativas plausíveis, detalhes de outras aulas misturados e meias-verdades)

| Rodada | Resultado | Erros |
|---|---|---|
| 1ª (07/10/2026) | **8/10** | Q4 (fase da estatística simples), Q10 (afirmação incorreta) |
| Revisão dos erros (07/10/2026) | 1/2 | R1: descartou corretamente a "linguagem fluida", mas deixou de fora as "regras rígidas e limitadas". R2 ✅ (bigrama não tem coerência global, por mais dados que receba) |
| Revisão extra (07/10/2026) | ✅ 1/1 | Fixado: "regras simples e uma linguagem não fluida" |

> 📌 **Pontos para revisar:** na fase da estatística simples a IA **já gerava** conteúdo, mas com **regras rígidas e linguagem NÃO fluida**. A falta de fluidez era o problema central, e não só a falta de criatividade. O bigrama **não** mantém coerência global, mesmo com muitos dados: sua probabilidade é local e isolada.

## 🔁 Revisão dos erros

### R1. Sobre a fase da estatística simples, quais frases estão corretas? ❌

I. A máquina já conseguia gerar texto e imagem.
II. A linguagem gerada era fluida, mas faltava criatividade.
III. O modelo trabalhava com regras rígidas e limitadas.
IV. O professor a compara a "começar a criar um cérebro".

- A) I, II e III
- B) II, III e IV
- C) I, III e IV
- D) Apenas I e IV

**Resposta: C.** Sua resposta foi a D. A II é falsa porque a linguagem **não** era fluida. A III é verdadeira, e o professor resume a fase como "regras simples e uma linguagem não fluida".

---

### R2. Por que está errado dizer que, com dados suficientes, o bigrama manteria a coerência do texto inteiro? ✅

- A) Porque o bigrama só olha pares de palavras, com uma probabilidade local e isolada. Sem memória além do n-grama atual, mais dados não dão a ele visão do contexto global
- B) Porque o bigrama até mantém coerência com muitos dados, mas o problema real é o custo de processamento
- C) Porque, com mais dados, o bigrama passaria a captar a semântica, mas continuaria sem projetar as palavras seguintes
- D) Porque o problema do bigrama é apenas a repetição em loop, que mais dados tornariam ainda pior

**Resposta: A.** A limitação é **estrutural**: está na janela de duas palavras, e não no volume de dados.

---

### R3 (extra). Complete: "são ______ e uma linguagem ______." ✅

- A) regras flexíveis / fluida, porém sem criatividade
- B) regras simples / não fluida
- C) regras probabilísticas / coerente, porém curta
- D) poucos dados / fragmentada, porém criativa

**Resposta: B.** A fase da estatística simples **gera** conteúdo, mas com **regras simples (rígidas)** e **linguagem não fluida**.
