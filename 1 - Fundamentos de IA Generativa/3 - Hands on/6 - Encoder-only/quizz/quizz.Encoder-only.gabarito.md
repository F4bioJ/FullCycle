# Gabarito — Encoder-only

## 1. Transformer completo para classificar chamados
**Correta: B**
**Por quê:** A aula diz que o modelo completo é muito pesado, porque trabalha os dois lados da arquitetura, e que algumas tarefas não precisam disso. Classificar pede compreensão, não geração, e o encoder-only resolve sendo mais leve, rápido e barato.
- **A:** A aula não diz que o modelo completo é incapaz de classificar. O argumento é de peso e custo, não de impossibilidade.
- **C:** Os Transformers surgiram justamente para não depender da ordem rígida das RNNs.
- **D:** Descreve a lógica de um modelo gerador. O modelo completo inclui o encoder, que é a parte que compreende o texto.
**Conceito:** por que o Transformer foi dividido em arquiteturas

## 2. Um só modelo encoder-only para classificar e redigir
**Correta: D**
**Por quê:** A aula traça esse limite: para só classificar, ele é ótimo; para classificar e usar o texto para criar um novo, não é o melhor. Sua função principal é a compreensão, não a geração.
- **A:** Inverte o limite. Compreender bem não torna o modelo bom em gerar um texto extenso.
- **B:** O mascaramento é o treino do BERT e desenvolve compreensão. Preencher lacunas não equivale a criar um texto inteiro.
- **C:** A classificação é justamente um dos usos do encoder-only, que resolve a tarefa sem o decoder.
**Conceito:** encoder-only compreende, não gera

## 3. Palavras à direita esclarecem "banco"
**Correta: A**
**Por quê:** Na atenção bidirecional, cada token olha para os tokens à esquerda e à direita, e o modelo calcula a importância relativa entre eles. Assim, o que vem depois de "banco" também pesa na representação da palavra.
- **B:** A informação posicional marca a posição do token, não define o sentido dele. Quem traz o contexto é a atenção.
- **C:** Ele não troca de direção: olha a sentença inteira ao mesmo tempo, o que veio antes e o que vem depois.
- **D:** O BERT não busca prever o próximo token. Essa é a lógica dos modelos geradores.
**Conceito:** atenção bidirecional

## 4. Por que o GPT não olha para a direita
**Correta: C**
**Por quê:** A aula explica que o GPT olha o passado e gera o futuro. O que estaria à direita ainda não existe: é o que ele precisa produzir.
- **A:** O motivo não é economia, e sim a tarefa de geração. Aliás, a aula aponta os modelos só de leitura como os mais leves.
- **B:** O GPT é um Transformer, e os Transformers foram criados para não depender da ordem rígida das RNNs.
- **D:** A tokenização só divide o texto em tokens. Ela não remove o que vem à direita.
**Conceito:** BERT olha os dois lados, GPT olha o passado para gerar

## 5. "Manga" em duas frases
**Correta: D**
**Por quê:** Ao final de cada camada do encoder, cada token ganha uma representação vetorial que carrega a importância relativa das outras palavras e reflete o significado no texto. Com palavras diferentes em volta, as representações de "manga" diferem.
- **A:** A atenção não atua só em um rótulo final: é ela que torna contextual a representação de cada token.
- **B:** A posição também é considerada, mas não é a única diferença. O contexto das outras palavras entra pela atenção.
- **C:** Dá a conclusão certa pela causa errada. A diferença vem da atenção, não de o tokenizador mudar conforme a frase.
**Conceito:** saída contextualizada de cada token

## 6. Por que o mascaramento desenvolve compreensão
**Correta: A**
**Por quê:** No Masked Language Modeling, o modelo prevê as palavras ocultas com base no contexto completo. Acertar mostra que ele compreendeu o todo, olhando para frente e para trás para tapar os buracos.
- **B:** Continuar a frase a partir do último token é o raciocínio de um modelo gerador, não o do mascaramento.
- **C:** A palavra é oculta para o modelo prever, não para reduzir o vocabulário.
- **D:** A informação de posição vem dos embeddings posicionais. O objetivo do mascaramento é prever a palavra oculta pelo contexto, não aprender a ordem da frase.
**Conceito:** treinamento por mascaramento (MLM)

## 7. Campos de e-mail e um rótulo só
**Correta: C**
**Por quê:** O NER separa partes do texto em categorias como pessoa, organização e local, como no exemplo de Steve Jobs. A classificação entrega um rótulo para o texto, que é o sintoma descrito.
- **A:** A busca semântica encontra textos parecidos. Não separa pessoa, organização e local dentro de um texto.
- **B:** O NER é um uso de encoder-only citado na aula, então não é preciso um modelo gerador.
- **D:** O sintoma não é uma resposta cortada, e sim uma tarefa diferente da desejada.
**Conceito:** NER contra classificação

## 8. Busca semântica sem vetores nos documentos
**Correta: B**
**Por quê:** A aula descreve os dois lados: converter o texto da consulta em vetor, converter os textos dos documentos em vetores e comparar por similaridade vetorial. Sem vetores nos documentos, não há o que comparar.
- **A:** O NER separa trechos em categorias, como pessoa e local. Nomes extraídos não são o vetor de significado do texto, que é o que a busca compara.
- **C:** A busca semântica é apresentada como uso de encoder-only e encontra documentos existentes, sem escrever novos.
- **D:** Classificar é outra tarefa. Um rótulo por assunto não substitui o vetor de significado de cada documento.
**Conceito:** busca semântica por similaridade vetorial

## 9. O texto com menos palavras iguais veio primeiro
**Correta: B**
**Por quê:** A aula usa esse exemplo: "como fazer um bolo" e "receita para preparar um bolo" têm embeddings similares porque têm semânticas parecidas. O texto com "barco" trata de outro assunto, embora repita mais palavras da consulta.
- **A:** É a lógica de buscar a palavra, que a busca semântica substitui pela comparação de significado.
- **C:** A atenção bidirecional olha os dois lados de cada token. A aula não diz que o último token pesa mais.
- **D:** O sorteio entre candidatos é da escolha do próximo token na geração. A busca compara a similaridade entre vetores.
**Conceito:** embeddings para similaridade semântica

## 10. Escolher um modelo da família BERT
**Correta: C**
**Por quê:** A aula descreve o DistilBERT como menor e simplificado, com um resultado um pouco pior, mas mais veloz e mais barato. É a troca que o cenário aceita.
- **A:** O ALBERT usa parâmetros compartilhados, em vez de abrir mão deles.
- **B:** A aula apresenta o RoBERTa como mais eficiente, mas também mais pesado, e o cenário tem orçamento e tempo de resposta apertados.
- **D:** A aula não diz que as variantes acrescentam camadas: o DistilBERT é menor que o BERT, e é a ele que a aula atribui o menor custo.
**Conceito:** escolha entre as variantes do BERT
