# Entendendo Objetivos

## Uma checklist de objetivos

Depois de dividir a avaliação em objetivos, como e quem, o professor começa pelos objetivos: uma lista de termos que ajuda a ter claro o que se quer avaliar num prompt. São termos comuns no mercado, em ferramentas, tutoriais, manuais e APIs.

## Correctness

Verifica se a saída bate com uma **referência**: um fato ou um exemplo do que é certo para aquela chamada. O resultado da LLM é comparado com essa referência, o que mostra o quanto a informação está apurada.

## Relevance

Verifica se a saída realmente responde à pergunta ou à solicitação feita. O professor usa o exemplo de "qual é a capital do Brasil?" respondida com "França" e diz que a relevância aí é mínima. A justificativa que ele dá ("a resposta está errada") encosta em correctness; o que relevance olha é se a saída atende ao pedido.

## Faithfulness e groundedness

Os nomes variam conforme a literatura e a ferramenta, mas os conceitos são parecidos: verificar se a saída se mantém **fiel ao contexto** esperado e não alucina. Groundedness acrescenta a pergunta "em que essa resposta se baseia?", ou seja, qual referência a sustenta. O exemplo é o link que o ChatGPT às vezes mostra ao lado da resposta: ele indica de onde veio a informação. O professor ressalta que ser fiel ou ter base é diferente de ser exato.

## Conciseness

Verifica se a saída é objetiva e sem enrolação. Receber dez páginas para uma pergunta provavelmente não é o objetivo: quanto mais direta a resposta, desde que atenda, melhor.

## Helpfulness

Verifica se o resultado é **útil e claro** para o usuário. Ser objetivo é uma coisa; fazer o usuário entender e achar que aquilo fez sentido é outra. Não basta a resposta ter grounding, relevância, correção e objetividade: a pergunta é se ela foi útil.

## Harmfulness, bias e toxicity

Verificam se a saída pode prejudicar alguém (harmfulness), se traz uma opinião enviesada em tema sem resposta certa ou errada, como "qual é o melhor político?" (bias), e se é tóxica, falando mal de pessoas ou com palavrões (toxicity).

## Format adherence

Verifica se a saída vem no formato pedido: JSON válido, uma estrutura ou schema definido, um texto que passe numa regex.

## Efficiency

Mede latência, custo em tokens e throughput (quantas requisições por segundo o sistema aguenta).

## Pairwise

A avaliação **pairwise** (ou pairwise preference) compara duas versões e diz qual ganhou. O professor destaca a pergunta que acompanha o resultado: ganhou com base em qual critério?

## Dos termos aos objetivos concretos

Exemplos de objetivos: garantir que o prompt siga um formato; que a saída seja fiel ao contexto, sem alucinar; que a resposta seja curta e direta; que o prompt A gere respostas mais corretas que o B. Como essas categorias já são difundidas, quase um padrão, fica mais simples decidir o que medir ou melhorar no prompt. O passo seguinte, anunciado pelo professor, é ver quais métricas atendem a esses objetivos.
