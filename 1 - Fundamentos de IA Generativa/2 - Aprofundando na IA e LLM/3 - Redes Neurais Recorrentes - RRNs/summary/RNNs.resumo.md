# Resumo — Redes Neurais Recorrentes (RNNs)

## O problema que ainda faltava resolver
- **Bigramas**: coerência só entre pares (1↔2, 2↔3…); a palavra 1 perde ligação com o resto.
- **Cadeias de Markov**: conjunto maior de palavras, mas linear e de curto prazo.
- **Redes neurais profundas / Feedforward**: lidam com textos maiores, mas processam um **bloco fixo de entrada**, só para frente, e **não lembram o que veio antes**.
- Na linguagem natural, cada palavra depende das anteriores — e isso vale também para áudio, imagem e vídeo. Era preciso um modelo que **processasse para frente e guardasse o que já foi processado**.

## O que são as RNNs
- Projetadas para **dados sequenciais**: texto, áudio, séries temporais e vídeo.
- Introduzem um **estado interno (memória)** — o professor compara a uma **memória em cache**, próxima do processamento.
- A saída em cada instante depende **da entrada atual + do estado acumulado dos passos anteriores**.
- Para a época, foram muito melhores que as redes profundas anteriores.

## Por que foram um avanço
- Resolvem o caso **"o cachorro mordeu o homem" × "o homem mordeu o cachorro"**: como guardam o que foi processado, mantêm a ordem e a coerência.
- Evoluções práticas: **tradução automática**, **geração de texto**, **reconhecimento de fala** e **análise de sentimento** (entender o tom do que está escrito).

## Limitações das RNNs
1. **Desvanecimento de gradiente (vanishing gradient)**: em sequências longas, os gradientes (sinais de aprendizado) ficam **pequenos demais**; a rede **esquece o início** da sequência.
   - A memória não guarda "o cachorro", guarda **gradientes** — se ficam minúsculos, perde-se a rastreabilidade e o modelo pode **alucinar**.
   - Ex.: esquecer o **sujeito** do início da frase e usar um **verbo no final** que não concorda com ele.
2. **Explosão de gradiente**: o oposto — os gradientes ficam **grandes demais**, gerando **instabilidade no treinamento** e, de novo, perda de rastreabilidade.
3. **Processamento sequencial**: cada passo depende do anterior → **não dá para paralelizar** → treino lento e difícil de escalar para grandes volumes de dados (e volume é o que deixa uma IA melhor).
4. Alto **custo de processamento** (citado, mas o professor diz que isso foi resolvido depois).

## As evoluções: LSTM e GRU
Ambas são **melhorias de arquitetura** que **controlam/limpam a memória** para reduzir (não eliminar) os problemas de gradiente.

### LSTM — Long Short-Term Memory (veio primeiro)
Controla o fluxo de informação com **3 portas**:
| Porta | Função |
|---|---|
| **Entrada** | Decide o que entra na memória |
| **Esquecimento** | Decide o que deve ser apagado |
| **Saída** | Decide o que é passado adiante |
- Resultado: retém o que é **relevante** e descarta o **ruído**. O professor chama de "forma bruta" de resolver o problema de guardar informação.

### GRU — Gated Recurrent Unit (veio depois)
- **Simplificação da LSTM**: as portas de **entrada e esquecimento viram uma só** → **2 portas** em vez de 3.
- **Menos parâmetros** e **treinamento mais rápido**, com **desempenho comparável** à LSTM em muitas tarefas.
- É a mais citada no dia a dia, segundo o professor.

## O que LSTM e GRU ainda não resolvem
- Continuam **sequenciais** → sem paralelização, aprendizado lento.
- **Contexto muito longo** ainda é difícil de manter ("mais do mesmo": remendos sobre o modelo atual).
- Difícil **escalar** para grandes volumes e vocabulários complexos.
- Não capturam bem **relações estruturais e dependências entre tokens/vetores distantes**.

## Próximo passo
Com as RNNs se chegou "quase ao máximo" dessa linha. Faltam 3 coisas:
1. **Processamento em paralelo**;
2. Processar **muito mais dados** sem depender de guardar o passado em memória sequencial;
3. **Enxergar o passado** de forma ampla (não só para frente, como na Feedforward).
→ Isso leva à próxima evolução (próxima aula), rumo aos modelos atuais.

## Ideia-chave
RNNs adicionaram **memória** ao processamento sequencial, resolvendo a ordem das palavras e melhorando tradução, fala e sentimento. Mas sofrem com **desvanecimento/explosão de gradiente** e **não paralelizam**. **LSTM** (3 portas) e **GRU** (2 portas, mais leve) controlam a memória e aliviam o problema, sem resolver a sequencialidade nem o contexto muito longo.

---

## Além da aula
- **Por que o gradiente desvanece/explode:** no treino (*backpropagation through time*), o erro volta passo a passo pela sequência e é **multiplicado** a cada passo. Fator 0,9 por 50 passos → 0,9⁵⁰ ≈ 0,005 (desvanece). Fator 1,1 → 1,1⁵⁰ ≈ 117 (explode). Mesma causa, direções opostas.
- **Explosão tem remédio simples:** *gradient clipping* — se o gradiente passar de um limite, ele é "cortado" para aquele valor. O desvanecimento é mais difícil, e por isso exigiu mudar a arquitetura (LSTM/GRU).
- **Por que a LSTM funciona:** além do estado normal, ela tem um **estado de célula** que funciona como uma esteira: a informação passa adiante com atualizações **somadas** (não multiplicadas), controladas pelas portas. Sem tantas multiplicações, o gradiente sobrevive por mais passos.
- **Datas:** LSTM — Hochreiter & Schmidhuber, **1997**. GRU — Cho et al., **2014**. As portas da GRU se chamam **atualização** (*update*, que une entrada + esquecimento) e **reset** (quanto do passado usar ao calcular o novo estado).
- **RNN bidirecional:** roda uma RNN da esquerda para a direita e outra da direita para a esquerda, e combina as duas. Ajuda em tarefas onde o texto inteiro está disponível (ex.: classificação, tradução), mas não serve para gerar texto palavra a palavra.
- **O gargalo que levou à atenção:** em tradução, a arquitetura **seq2seq (2014)** usava uma RNN para ler a frase inteira e comprimi-la em **um único vetor**, que outra RNN usava para gerar a tradução. Frases longas não cabiam bem nesse vetor. A solução foi o **mecanismo de atenção** (Bahdanau, 2014): na hora de gerar cada palavra, o modelo pode "olhar" para todas as palavras de entrada. Em 2017, o artigo *"Attention Is All You Need"* removeu a recorrência e ficou só com a atenção → **Transformers** (provavelmente o tema das próximas aulas).
