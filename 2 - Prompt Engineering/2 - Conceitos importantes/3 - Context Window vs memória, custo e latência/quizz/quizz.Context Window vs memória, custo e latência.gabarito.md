# Gabarito — Context Window vs memória, custo e latência

## 1. Dobrar contexto quadruplica custo de atenção por token.
**Correta: A**
**Por quê:** A atenção self-attention calcula relações entre todos os pares de tokens, gerando complexidade quadrática. Dobrar n quadruplica n². O cache atenua, mas não elimina: variações de prompt, histórico ou geração causam cache miss e forçam recálculo.
- **B:** Confunde complexidade linear com quadrática; ignora que cada token atende a todos os anteriores.
- **C:** Exagera o fator; O(n²) já captura o crescimento por passo, não se soma outro O(n) multiplicativo.
- **D:** Superestima o cache; a aula enfatiza que 'muita coisa bate em cache miss' e cada token conta.
**Conceito:** Complexidade O(n²) da atenção

## 2. Tarefa simples + contexto curto → modelo menor evita superdimensionamento.
**Correta: D**
**Por quê:** A aula ensina 'modelo certo para a tarefa certa' e 'não use bazuca para matar formiga'. Tarefa simples, contexto curto → modelo menor economiza memória, custo de infraestrutura e latência sem perda proporcional de qualidade.
- **A:** Cria condição arbitrária de truncamento; Modelo A já é adequado sem artifícios.
- **B:** Inventa vantagem de cache em modelo maior; a aula diz que cache miss é frequente independentemente do tamanho.
- **C:** Confunde capacidade de contexto com necessidade real; few-shot de 50 tokens não exige 128k.
**Conceito:** Seleção de modelo por adequação

## 3. Sufixo variável invalida cache de prefixo fixo a cada turno.
**Correta: A**
**Por quê:** A aula explica que o modelo reprocessa a sequência acumulada a cada token gerado ('Go é → rápida → e → eficiente'). O prefixo fixo até é cacheado, mas o sufixo que cresce (histórico + respostas novas) muda a cada turno, causando cache miss no bloco completo.
- **B:** Diz que cache 'só funciona na primeira'; o prefixo continua válido, é o sufixo que varia.
- **C:** Mecanismo incorreto; cache de atenção (KV cache) armazena chaves/valores, não só embeddings estáticos.
- **D:** Limite inventado; a aula não menciona threshold de 2k para desativar cache.
**Conceito:** Cache miss em contexto crescente

## 4. Batch prompting melhora throughput, não elimina reprocessamento por sequência.
**Correta: B**
**Por quê:** Batch prompting agrupa requisições independentes para melhorar throughput, mas não altera o reprocessamento iterativo dentro de cada sequência: cada tarefa no batch ainda gera token a token reaproveitando (ou não) seu próprio KV cache.
- **A:** Correta: ecoa 'modelo certo para a tarefa certa' e evitar 'bazuca para matar formiga'.
- **C:** Correta: sumarização reduz n efetivo, atacando diretamente a raiz quadrática.
- **D:** Correta: menos tokens → menos memória, menos computação O(n²), menos latência.
**Conceito:** Limites de técnicas de eficiência

## 5. Teto de tokens limita n e evita explosão quadrática no fim da geração.
**Correta: C**
**Por quê:** A aula mostra que cada token gerado reprocessa todo o contexto acumulado (O(n²) por passo). Limitar o comprimento máximo teta n, impedindo que o custo marginal por token exploda no final da geração longa.
- **A:** Confunde alocação estática de memória com computação dinâmica; a atenção roda sobre tokens reais, não alocados.
- **B:** Ignora que latência por token cresce com n; limitar tokens finais reduz custo marginal alto.
- **D:** Inventa mecanismo de 'compressão' que não existe; limitar saída só para a geração mais cedo.
**Conceito:** Limite de tokens como controle de custo O(n²)
