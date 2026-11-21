# Embedding distance

## O que é o critério

Embedding Distance é um critério que foca na parte semântica. Ele pega o dado vetorizado (a resposta gerada), pega outro dado vetorizado (a referência) e calcula a distância entre os dois embeddings para ver o nível de similaridade. A similaridade do cosseno é a mais usada, mas há outras normas, como a L2, que usa a distância euclidiana.

## Como foi o experimento

O professor usou um evaluator built-in que não usa um LLM para julgar: ele usa o embedding da OpenAI. Basta informar o critério, passar os dados como referência (é preciso ter algo contra o que comparar) e definir um prefixo para identificar a execução. Por ser só um evaluator, roda rápido. O resultado foi 0.11, que ele comentou como um descolamento em relação à referência.

## Como interpretar o score

Esse número não é, por si só, um fator determinante para mudar o prompt: é apenas um nível de referência, não um feedback sobre o que melhorar. O professor atribuiu o resultado ao dataset, que tinha uma listinha de exemplos de outputs e não a resposta final esperada da LLM (ground truth).

## Escolha da métrica

Para rodar esse teste, a referência precisa ser a resposta final esperada, não só exemplos soltos. Nem toda métrica serve para todos os casos: parta do objetivo da avaliação e escolha as métricas que fazem sentido para ele.
