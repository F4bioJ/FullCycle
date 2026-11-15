# Cadeias de Markov

## Da dependência local dos bigramas aos estados ocultos

Bigramas modelam sequências olhando relações locais entre poucos elementos, enquanto HMMs introduzem uma estrutura interna para explicar como as observações são geradas. Essa mudança importa porque muitos fenômenos sequenciais não são descritos apenas por palavras adjacentes ou por sinais explícitos. O modelo passa a considerar que existe um estado do sistema que influencia o que é observado, mesmo quando esse estado não aparece diretamente nos dados.

## Estado oculto e observação

Estado oculto é a variável interna que governa o comportamento do sistema, mas não é observada diretamente. O que se observa são saídas geradas por esse estado, chamadas observações ou outputs. A utilidade do modelo está justamente em inferir o estado interno a partir de sinais visíveis, como usar indícios para estimar uma condição que não está explicitamente disponível.

## Intuição com o exemplo do clima

No cenário do clima, estados ocultos podem ser `sol`, `chuva` e `nublado`, enquanto observações podem ser `céu limpo`, `vento forte` e `guarda-chuva aberto`. O meteorologista não precisa observar diretamente toda a dinâmica atmosférica para inferir o estado provável; ele usa evidências indiretas. Esse é o padrão central do HMM: observações visíveis funcionam como pistas probabilísticas sobre um estado interno invisível.

## Transição entre estados

Um HMM não assume que o sistema permanece fixo no mesmo estado; ele modela a chance de transição entre estados ao longo do tempo. Isso permite representar mudanças como sair de `nublado` para `chuva` ou reinterpretar um contexto quando uma nova evidência aparece. A matriz de transição codifica essas probabilidades e define como o estado atual influencia o próximo estado.

## Emissão de observações

Cada estado oculto possui uma distribuição de emissão, isto é, uma probabilidade de gerar determinadas observações. Em termos práticos, o modelo responde perguntas como: se o estado for `chuva`, qual a chance de observar `guarda-chuva aberto`? Essa camada é essencial porque conecta o mundo interno do modelo ao dado efetivamente disponível para inferência.

## Estrutura probabilística do HMM

Os elementos centrais do HMM são estados ocultos, observações, matriz de transição e matriz de emissão. A matriz de transição modela a probabilidade de mudar de um estado para outro, enquanto a matriz de emissão modela a probabilidade de cada estado produzir certas evidências observáveis. Juntas, essas estruturas permitem calcular sequências prováveis e interpretar dados sequenciais com incerteza.

## Algoritmos principais

O algoritmo forward-backward calcula a probabilidade de uma sequência observada, o que permite avaliar quão compatíveis os dados estão com o modelo. O algoritmo de Viterbi encontra a sequência de estados ocultos mais provável para explicar as observações. Já Baum-Welch, frequentemente associado a EM, ajusta os parâmetros do modelo com base nos dados observados, refinando transições e emissões.

## Aplicações em fala e linguagem

Em reconhecimento de fala, os estados ocultos podem representar sons fonéticos e as observações correspondem aos sinais de áudio. Em POS tagging, os estados ocultos representam categorias gramaticais, como verbo e substantivo, enquanto as observações são as palavras da sequência. Isso melhora a construção de frases porque o modelo passa a considerar uma estrutura gramatical implícita, e não apenas a proximidade entre palavras.

## Aplicação em biologia computacional

Sequências genéticas também se ajustam bem a HMMs porque exibem estrutura sequencial probabilística clara. O modelo foi usado para identificar regiões específicas em cadeias de DNA a partir de padrões observáveis ao longo da sequência. Esse tipo de problema combina bem com HMMs porque a inferência depende de estados internos que não são diretamente rotulados no dado bruto.

## Limitações estruturais

HMMs capturam bem dependências de curto prazo, mas assumem que a próxima observação depende apenas do estado atual e que o estado atual depende apenas do estado anterior. Essa hipótese de Markov simplifica o problema, porém limita a modelagem de dependências longas e de interações cruzadas complexas. Em linguagem natural, isso reduz a capacidade de manter coerência em frases longas ou em contextos que exigem retroalimentação entre partes distantes da sequência.

## Linearidade e custo de rotulagem

A estrutura do HMM é linear no sentido de avançar estado a estado, sem representar naturalmente ciclos complexos de retroalimentação como os que aparecem no raciocínio humano e em modelos mais modernos. Além disso, muitos usos práticos dependiam de dados rotulados, e a rotulagem é cara e demorada. Por isso, embora HMMs tenham sido um avanço importante e ainda sejam úteis, eles não são a melhor escolha para geração livre de texto longo e coerente como a realizada por LLMs atuais.
