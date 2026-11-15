# Gabarito — LayerNorm

## 1. O problema que as duas peças resolvem
**Correta: C**
**Por quê:** a aula diz que, com várias camadas processando, o Transformer fica difícil de treinar por causa da explosão de gradientes e perde estabilidade no fluxo de informação entre as camadas. A conexão residual e a LayerNorm existem para isso.
- **A:** perder a ordem dos tokens é o problema do processamento paralelo, resolvido pelo positional encoding (aula 10), não por estas peças.
- **B:** a camada position-wise processa cada posição separadamente, mas a atenção já mistura os tokens; isso não é o problema desta aula.
- **D:** decorar os dados (overfitting) não aparece na aula; o problema citado é de gradiente e de fluxo de informação.
**Conceito:** o problema das muitas camadas empilhadas

## 2. f(x) quase nulo com conexão residual
**Correta: A**
**Por quê:** saída = x + f(x). Se f(x) ≈ 0, a saída é praticamente x: o caminho residual mantém o sinal principal disponível mesmo quando a transformação da camada não ajuda.
- **B:** sem residual a saída seria quase nula; com ele, x continua lá. É justamente o que o atalho evita.
- **C:** o atalho pula uma camada, somando a entrada dela à saída dela; não liga a primeira camada à última.
- **D:** meia-verdade: o atalho ajuda o gradiente na volta, mas na ida ele também leva x adiante, então o sinal não fica quase nulo.
**Conceito:** saída = x + f(x)

## 3. O que a camada aprende com e sem residual
**Correta: D**
**Por quê:** com o atalho, x já chega à saída, então a camada aprende modificações sobre o sinal original. Sem ele, a saída da camada precisa carregar sozinha toda a informação, e a camada tem de reconstruí-la do zero.
- **A:** o atalho é só uma soma, sem pesos para ajustar; quem continua aprendendo é a camada.
- **B:** sem residual a camada transforma o dado normalmente; o que muda é que a saída dela precisa carregar sozinha toda a informação.
- **C:** inverte os papéis: controlar a escala é função da LayerNorm, e a camada continua processando o conteúdo.
**Conceito:** aprender modificações em vez de reconstruir o sinal

## 4. Residual e backpropagation
**Correta: B**
**Por quê:** no backpropagation o erro volta por toda a rede. O atalho aditivo dá ao gradiente um caminho que não depende só das transformações sucessivas, e o fluxo fica mais fluido.
- **A:** a aula não diz que a soma limita o gradiente; o benefício citado é dar ao gradiente um caminho mais fluido de volta, não travar o tamanho da atualização.
- **C:** nada na aula diz que o residual normaliza a escala dos gradientes; controlar a escala é o papel da LayerNorm, e não há faixa fixa garantida.
- **D:** o dado ainda passa por todas as camadas na ida; o atalho soma a entrada, não remove camadas.
**Conceito:** residual e fluxo de gradiente

## 5. Escala das ativações instável
**Correta: A**
**Por quê:** valores que ora crescem, ora encolhem entre as camadas são um problema de distribuição. A LayerNorm estabiliza a distribuição dos dados entre as camadas, controlando a escala e o comportamento estatístico das ativações, o que dá estabilidade numérica.
- **B:** a soma preserva a entrada, mas não controla a escala dos valores; é a LayerNorm que faz isso.
- **C:** segundo o resumo do professor, a LayerNorm não altera a lógica da atenção nem do feedforward.
- **D:** o residual soma f(x) em todos os casos; não há regra de descarte.
**Conceito:** papel da LayerNorm

## 6. Afirmação INCORRETA
**Correta: D**
**Por quê:** quem cria o atalho e soma x ao resultado da camada é a conexão residual. A LayerNorm estabiliza a distribuição dos dados entre as camadas.
- **A:** correta: é o papel da conexão residual.
- **B:** correta: é o papel da LayerNorm.
- **C:** correta: é a conclusão do resumo do professor sobre as duas juntas.
**Conceito:** papéis complementares de residual e LayerNorm

## 7. Positional encoding × residual
**Correta: C**
**Por quê:** o positional encoding soma ao embedding do token um vetor de posição na entrada do modelo. A conexão residual soma a entrada de cada camada à saída dessa camada (x + f(x)), para preservar o sinal através da profundidade.
- **A:** o residual não soma posição; soma a entrada da própria camada.
- **B:** inverte os papéis: quem carrega a posição é o positional encoding, e o residual preserva a informação como um todo.
- **D:** troca as duas: o vetor fixo de fórmula é o positional encoding de seno e cosseno; somar a entrada à saída é o residual.
**Conceito:** a soma do residual comparada à do positional encoding

## 8. x como dado "forte"
**Correta: B**
**Por quê:** a aula diz que o residual preserva as informações que não precisam ser transformadas, sem tirar da camada o espaço para transformá-las. Como x entra sempre na soma, ele segue adiante sem ficar mudando a cada camada.
- **A:** é o oposto: com o atalho, x chega à saída de qualquer forma, porque é somado ao que a camada produziu, quer ela o modifique ou não.
- **C:** é o oposto: x é somado à saída justamente para continuar sendo repassado.
- **D:** o atalho não normaliza nada; isso é a LayerNorm.
**Conceito:** preservar informação sem impedir a transformação

## 9. O que é um Transformer recém-montado
**Correta: D**
**Por quê:** o professor fecha a aula dizendo que tudo até aqui foi preparar a arquitetura. O próximo passo é treiná-la de fato, começando pelo pré-treinamento e depois o fine-tuning, para chegar a algo como o ChatGPT.
- **A:** o pré-treinamento ainda não aconteceu (é a próxima aula); o conhecimento da linguagem vem do treinamento, não das camadas.
- **B:** a aula apresenta o pré-treinamento como o próximo passo, antes do fine-tuning; montar a arquitetura não o dispensa.
- **C:** o modelo não foi treinado, e a LayerNorm não é um ajuste final das respostas.
**Conceito:** arquitetura pronta × modelo treinado

## 10. Sem residual, com LayerNorm
**Correta: A**
**Por quê:** as duas peças são complementares. Sem o residual, o gradiente perde o atalho no backpropagation e a entrada deixa de ser propagada adiante, então o treino fica mais difícil e converge mais devagar. A LayerNorm estabiliza a distribuição, mas não faz o papel do atalho.
- **B:** a LayerNorm estabiliza a distribuição dos dados; preservar e transportar a informação é o papel do residual, então a mudança é grande.
- **C:** a ordem dos tokens é assunto do positional encoding; o que a aula liga ao residual é o gradiente e a convergência, e por isso o treino não mantém a velocidade.
- **D:** a LayerNorm estabiliza a distribuição, mas não devolve o atalho do gradiente; o efeito que a aula descreve é no treino, que fica mais difícil de convergir.
**Conceito:** o residual não é substituído pela LayerNorm
