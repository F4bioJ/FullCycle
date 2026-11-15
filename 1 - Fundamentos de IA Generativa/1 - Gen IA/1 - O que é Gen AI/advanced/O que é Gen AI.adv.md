# O que é Gen AI — material avançado

**Capítulo:** 1 - Gen IA · **Aula:** 1

A aula apresentou a IA generativa como uma mudança de paradigma: de prever para gerar. Este material mostra o que essa frase significa em termos técnicos, onde ela é precisa e onde esconde detalhes que importam para quem constrói software.

---

## 1. Os três pilares, com números

A aula citou GPUs, dados organizados e Transformers. Um marco concreto junta os dois primeiros: a **AlexNet**, de Krizhevsky, Sutskever e Hinton, em 2012.

| Dado | Valor |
|---|---|
| Competição | ImageNet (ILSVRC) 2012 |
| Erro top-5 | 15,3%, mais de 10,8 pontos à frente do segundo colocado |
| Hardware | duas placas Nvidia GTX 580 de 3 GB (placas de videogame) |
| Tempo de treino | cinco a seis dias |
| Tamanho | 8 camadas, cerca de 60 milhões de parâmetros |
| Dados | 1,2 milhão de imagens rotuladas |

Três coisas chamam a atenção. A rede precisou ser **dividida entre duas placas** porque não cabia em uma. O conjunto de dados só existia porque alguém rotulou mais de um milhão de imagens. E a margem de vitória foi tão grande que a área inteira mudou de direção.

O terceiro pilar veio em 2017, com o Transformer. E os pilares não são independentes: o Transformer venceu justamente por ser a arquitetura que **melhor aproveita GPUs**, já que processa os tokens em paralelo (assunto da aula 4 do capítulo 2).

## 2. Preditiva × generativa, em termos precisos

A distinção da aula tem nome técnico:

| | Modelo discriminativo | Modelo generativo |
|---|---|---|
| O que aprende | p(y \| x): a probabilidade do rótulo, dado o exemplo | p(x): a distribuição dos próprios dados |
| Pergunta que responde | "Este e-mail é spam?" | "Como é um e-mail plausível?" |
| Saída | um rótulo ou um número | um novo exemplo, sorteado da distribuição |
| Exemplo da aula | recomendar um livro ao Nathan | escrever o livro |

O modelo discriminativo só precisa aprender a **fronteira** entre as classes. O generativo precisa aprender **como os dados são**, o que é muito mais difícil e exige muito mais dados. Por isso a IA generativa dependeu dos três pilares.

## 3. Gerar ainda é prever

Aqui está o ponto que a aula deixou implícito. Um LLM não tem um mecanismo de "criação" separado. Ele faz uma única coisa: dado um texto, calcula a **probabilidade de cada token possível vir em seguida**. A geração é um laço em volta dessa previsão:

```python
texto = prompt
while not terminou(texto):
    probs = modelo(texto)        # previsão: distribuição sobre o próximo token
    token = sortear(probs)       # amostragem
    texto = texto + token        # a saída vira entrada
```

A mudança de paradigma está em dois detalhes desse laço:

1. **O que é previsto.** Em vez de um rótulo sobre o dado ("spam"), o modelo prevê um pedaço do próprio dado (a próxima palavra).
2. **A realimentação.** Cada previsão é devolvida como entrada da próxima. Milhares de previsões pequenas e encadeadas produzem um texto inteiro.

O sorteio explica por que o mesmo prompt dá respostas diferentes: o modelo não escolhe sempre o token mais provável, ele **sorteia** de acordo com as probabilidades. A temperatura, tema do capítulo "Hands on", controla o quanto esse sorteio se arrisca.

## 4. "Geração não é cópia", com uma ressalva importante

Na maior parte do tempo a frase vale: o modelo sorteia de uma distribuição aprendida e produz sequências que nunca existiram. Mas ele **também memoriza**.

Em dezembro de 2020, Carlini e colegas mostraram que era possível extrair dados de treino do GPT-2 apenas fazendo consultas ao modelo. Recuperaram **centenas de trechos literais**, incluindo nomes, telefones, e-mails, conversas, código e identificadores únicos. E concluíram que **modelos maiores vazam mais** do que modelos menores.

A memorização acontece com sequências que aparecem muitas vezes no treino ou que são muito distintas. A consequência é prática: o que entra no treino pode sair na resposta.

## 5. O prompt como condição

Tecnicamente, o prompt não é uma "ordem" que o modelo interpreta. Ele é o **começo do texto** que o modelo vai continuar. O que se obtém é p(continuação | prompt).

Isso explica o que a aula chamou de "saber promptar":

- Cada palavra do prompt **desloca a distribuição** das continuações prováveis.
- Um prompt vago deixa a distribuição larga, e o sorteio cai no meio dela: a resposta genérica.
- Um prompt específico estreita a distribuição em torno do que se quer.

O mesmo vale para o alerta sobre código. Quem não sabe programar escreve um prompt que não restringe o que importa (casos de borda, restrições de segurança, contrato da função), e o modelo preenche as lacunas com o mais comum, que nem sempre é o correto.

## 6. Por que a saída "parece certa" e está errada

O modelo é treinado para produzir a continuação **mais plausível**, e plausível não é sinônimo de verdadeiro. Um texto fluente e errado e um texto fluente e correto têm a mesma "cara" estatística.

É a origem da regra da aula, "sempre revise": a fluência não carrega nenhuma informação sobre a correção. Em código o risco é maior, porque código plausível compila, passa por uma leitura rápida e falha em produção.

## 7. O exemplo do "assado"

Para decidir entre "frango assado" e "pele assada", o modelo usa as palavras ao redor. O mecanismo que faz isso é a **atenção**: a representação de "assado" é recalculada como uma média ponderada das outras palavras da frase, e "frango" ou "pele" puxam o significado para um lado. O cálculo completo está no material avançado da aula de Transformers.

---

## O que a aula simplificou

- **"Deixamos de prever e passamos a gerar."** A geração é feita de previsões: o modelo prevê o próximo token e repete. O que mudou foi o alvo da previsão e a realimentação.
- **"Não copia nem cola trechos."** Vale como regra geral, mas modelos memorizam e podem reproduzir trechos literais do treino, e os maiores fazem isso mais.
- **"GPUs, dados e Transformers" como três fatores paralelos.** Eles se reforçam: o Transformer foi adotado por ser a arquitetura que escala em GPU, e só compensa com muito dado.
- **"Um bom prompt" como habilidade de redação.** É mais útil pensar no prompt como a condição que estreita uma distribuição: o que não é dito é preenchido pelo mais comum.

## Implicações para quem constrói software com IA

- **Não coloque segredos em dados de treino ou de fine-tuning.** O que o modelo viu, ele pode repetir.
- **Código gerado pode reproduzir código existente**, com a licença dele. Em projetos comerciais, isso é um risco jurídico e não só técnico.
- **Trate a saída como rascunho de um colega rápido e confiante**: revise lógica, segurança e aderência ao requisito, como em qualquer revisão de código.
- **Não espere a mesma resposta duas vezes.** Se o sistema precisa de saídas reproduzíveis, isso tem de ser projetado (temperatura baixa, validação da saída, testes).
- **Especifique o que importa.** Tudo o que o prompt deixa em aberto é decidido pela média dos dados de treino.

## Armadilhas comuns

- Confiar na fluência como sinal de correção.
- Achar que o modelo "consulta" os dados de treino como um banco de dados: ele guarda padrões nos pesos, com memorização ocasional.
- Achar que generativo substitui preditivo: para classificar ou estimar um número, um modelo discriminativo costuma ser mais barato, mais rápido e mais fácil de avaliar.

## Fontes

- AlexNet (Krizhevsky, Sutskever, Hinton, 2012) — https://en.wikipedia.org/wiki/AlexNet
- Carlini et al., *Extracting Training Data from Large Language Models*, 2020 — https://arxiv.org/abs/2012.07805
- Vaswani et al., *Attention Is All You Need*, 2017 — https://arxiv.org/abs/1706.03762
