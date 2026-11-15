# Hands on - Top_P — resumo

## O que a aula testa

O alvo é o **top-p**. Para simplificar, e avisando que não é a explicação mais científica, o professor o descreve como um top-k aperfeiçoado, que dá mais abertura ao modelo. O corte é pela probabilidade acumulada, não por uma quantidade fixa de candidatos.

## Como o corte funciona

Na frase "o cachorro latiu hoje ___", imagine 10 candidatos para a próxima palavra. Os números são inventados para facilitar a conta:

| Candidato | Probabilidade | Soma acumulada |
|---|---|---|
| cedo | 60% | 60% |
| na | 20% | 80% |
| cozinha | 10% | 90% |

- **Top-p 0,9:** a soma chega a 90% no terceiro candidato. O modelo escolhe entre esses três e despreza os demais.
- **Top-p 0,6:** a soma já chega a 60% no primeiro, então só sobra "cedo".

## O experimento: top-p baixo contra top-p alto

**Como montar:** no Playground, o prompt é o mesmo e só o valor de top-p muda. Primeiro, 0,1, para fechar na palavra mais provável. Depois, 0,9. O máximo é 1, mas o professor prefere 0,9.

**Cuidado com o máximo de tokens:** a primeira execução deu erro porque esse campo estava em zero. Se o valor for baixo demais, a resposta também pode sair cortada, e o teste passa a medir o limite de geração, não o top-p.

**Como comparar:** clique em nova mensagem antes de rodar a segunda vez. A resposta anterior continua acima da nova, o que permite comparar as duas sem perder nenhuma.

## O que observar

Não procure só grandes mudanças de conteúdo. Muitas vezes a estrutura geral continua parecida, e a diferença aparece nos detalhes:

- se a resposta segue caminhos mais previsíveis ou escolhe palavras mais conservadoras;
- se surgem pequenas alternativas de formulação com o limiar mais alto.

## O que isso mostra

O efeito do top-p costuma ser mais sutil que o da temperatura e, como o professor avisa, nem sempre gera uma variação perceptível. Uma diferença pequena não invalida o teste, porque faz parte do comportamento do parâmetro. É isso que torna necessário controlar bem a comparação.

A transcrição termina quando o professor começa a comparar as saídas, sem descrever o que mudou. Portanto, o resultado desse teste você precisa ver no vídeo ou reproduzir.

## O que fazer por conta própria

1. Fixe o prompt e confirme que o máximo de tokens tem um valor suficiente.
2. Rode com top-p 0,1.
3. Crie uma nova mensagem e rode o mesmo prompt com top-p 0,9.
4. Compare a escolha de palavras e as pequenas variações de formulação entre as duas respostas.
