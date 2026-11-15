# Gabarito — Transformers (avançado)

## 1. Origem do paralelismo
**Correta: A**
**Por quê:** Sem recorrência, nenhuma posição espera pela anterior. Todas as comparações saem de multiplicações de matrizes, o tipo de conta que a GPU faz bem.
- **B:** A MLP é aplicada a cada posição em separado. Ela não junta os tokens e não é a fonte do paralelismo.
- **C:** Não há reordenação: a posição é somada ao embedding e viaja junto com o conteúdo.
- **D:** As heads olham a sequência inteira, cada uma com suas matrizes. Não dividem o texto em trechos.
**Seção:** 4. A camada feedforward e de onde vem o paralelismo
**Conceito:** fonte do paralelismo

## 2. Custo ao dobrar o contexto
**Correta: B**
**Por quê:** A atenção compara todos os tokens com todos, então o custo é O(n²). Dobrar n multiplica o número de pares por quatro: de 16 milhões para 64 milhões por head.
- **A:** Seria verdade se o custo fosse linear. Mas cada token novo é comparado com todos, e todos com ele.
- **C:** O paralelismo reduz o tempo de espera, não a quantidade de contas. O custo existe e é pago em GPU.
- **D:** O número de heads é um fator constante: multiplica o custo nos dois cenários e não muda a proporção.
**Seção:** 7. O preço: custo quadrático
**Conceito:** custo quadrático da atenção

## 3. Respostas longas e lentas
**Correta: C**
**Por quê:** Na geração, o decoder produz um token por vez, e cada um depende dos anteriores. Esse laço é sequencial, e mais GPUs não o encurtam.
- **A:** Modelos de chat são decoder-only, e mesmo no encoder-decoder a entrada é codificada uma única vez.
- **B:** A feedforward trata as posições de forma independente, e por isso roda em paralelo.
- **D:** O positional encoding depende só da posição e é uma soma barata. Não é o gargalo.
**Seção:** O que a aula simplificou
**Conceito:** paralelismo no treino x geração autorregressiva

## 4. A máscara do decoder
**Correta: D**
**Por quê:** As conexões para posições futuras recebem −∞ antes do softmax. Assim cada posição só usa o passado, e o treino pode calcular todas as posições de uma vez simulando a geração passo a passo.
- **A:** O encoder nunca recebe a saída do decoder. A máscara age dentro do decoder.
- **B:** Um token pode prestar atenção em si mesmo (27% no exemplo numérico).
- **C:** Não há descarte por peso baixo. A máscara depende da posição, não do peso.
**Seção:** 8. Encoder, decoder e o que cada família usa
**Conceito:** máscara causal

## 5. Família de modelo para classificação
**Correta: B**
**Por quê:** Classificar não exige gerar texto. Um encoder-only enxerga o contexto dos dois lados e entrega uma representação pronta para um classificador, com custo muito menor que o de um LLM generativo.
- **A:** Funciona, mas paga o custo da geração token a token para produzir um rótulo.
- **C:** O encoder-decoder é indicado quando a saída é um texto novo (tradução, resumo).
- **D:** O ViT é a aplicação da arquitetura a imagens.
**Seção:** 8. Encoder, decoder e o que cada família usa
**Conceito:** escolha entre encoder-only e decoder-only

## 6. Instrução no meio de um contexto longo
**Correta: C**
**Por quê:** Todos os tokens entram no cálculo, mas cada um recebe um peso. Uma instrução enterrada em um contexto longo pode ficar com pouco peso nas posições que importam para a resposta.
- **A:** O positional encoding é um vetor somado ao embedding. Ele não perde precisão no meio nem apaga tokens.
- **B:** O custo quadrático limita o tamanho da janela, mas o que cabe nela é processado. Não há descarte do meio.
- **D:** A feedforward atua em cada posição separadamente. Ela não mistura tokens nem sobrescreve nada.
**Seção:** Implicações para quem constrói software com IA
**Conceito:** ler tudo não é pesar tudo igual

## 7. Empilhar camadas sem nada especial
**Correta: A**
**Por quê:** O caminho entre dois tokens caiu de O(n) para O(1), o que resolve o desvanecimento ao longo da sequência. Na profundidade, o gradiente atravessa camada por camada, e é a conexão residual (com a LayerNorm) que o mantém vivo.
- **B:** São dois caminhos diferentes. O de um passo é entre tokens dentro da camada, e não entre camadas.
- **C:** Não há recorrência no Transformer. O problema na profundidade é o mesmo de qualquer rede profunda.
- **D:** O positional encoding é somado uma vez, antes da primeira camada, e não tem papel no gradiente.
**Seção:** 6. O que segura o treino: residual e LayerNorm
**Conceito:** gradiente na sequência x na profundidade

## 8. Pesos de atenção como explicação
**Correta: D**
**Por quê:** Há várias heads em várias camadas, cada uma com uma distribuição de pesos própria, além das MLPs. Uma head isolada mostra uma parte pequena do que levou à resposta.
- **A:** Com o mesmo prompt e os mesmos pesos do modelo, a atenção sai igual. Ela não é sorteada.
- **B:** Os pesos de atenção são calculados a cada uso. Quem só existe no treino é o gradiente.
- **C:** Toda head calcula relações entre tokens. A posição já vem somada ao embedding.
**Seção:** Armadilhas comuns
**Conceito:** atenção não é explicação

## 9. Por que várias heads
**Correta: B**
**Por quê:** "Latindo" precisa saber quem late e também o tempo verbal. Cada head tem as próprias matrizes e pode aprender uma pergunta diferente, com custo parecido ao de uma atenção única.
- **A:** As heads não são divididas por idioma. Todas olham a mesma sequência.
- **C:** Não há votação. As saídas das heads são concatenadas e combinadas.
- **D:** A janela de contexto é a mesma para todas as heads. Elas não dividem o texto.
**Seção:** 3. Multi-head: várias perguntas ao mesmo tempo
**Conceito:** heads como pontos de vista

## 10. Transformer e veracidade
**Correta: C**
**Por quê:** Estabilidade de treino não é precisão factual. A arquitetura melhora a coerência, mas Transformers alucinam, e o curso tem aulas sobre isso.
- **A:** É a frase "alucina muito pouco" da aula, que o material corrige. Treinar bem não garante que o modelo guarde fatos.
- **B:** A família não muda isso. Ler os dois lados ajuda a entender o texto, não a garantir fatos.
- **D:** A razão é falsa: o custo limita a janela, mas não leva o modelo a cortar fatos do contexto.
**Seção:** O que a aula simplificou
**Conceito:** coerência não é veracidade
