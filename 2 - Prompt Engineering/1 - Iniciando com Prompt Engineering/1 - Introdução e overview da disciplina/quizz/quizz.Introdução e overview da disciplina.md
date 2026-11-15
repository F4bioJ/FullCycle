# Quizz — Introdução e overview da disciplina

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 1
**Base:** material da aula

---

## 1. Numa aplicação com IA, um dev ajusta uma frase do prompt, sem tocar em nenhuma regra de código, e sobe direto para produção. Dias depois as respostas pioram, e ninguém sabe dizer qual texto estava no ar antes. O que explica melhor o problema, segundo a aula?
- A) O modelo se ajustou à frase nova durante o uso, e sem um retreino a aplicação não recupera o comportamento antigo.
- B) Uma frase isolada pesa pouco na saída, então a causa mais provável está no modelo ou na configuração da aplicação.
- C) O prompt faz parte do comportamento do software, e sem versioná-lo não há como comparar as versões nem voltar atrás.
- D) Faltou monitorar custo e latência em produção, porque a queda de qualidade costuma aparecer primeiro nesses sinais.

## 2. Um prompt funciona bem no modelo atual, e o time quer migrar para um modelo mais barato. A plataforma de gestão já mostra a estimativa de custo de cada um. Qual decisão é mais coerente com a aula?
- A) Testar o mesmo prompt nos dois modelos e verificar se o resultado continua sendo o esperado antes de migrar.
- B) Migrar com base na estimativa de custo, já que o prompt carrega as instruções que definem a qualidade da resposta.
- C) Comparar variações do prompt no modelo atual e levar a melhor delas para o modelo mais barato, sem repetir o teste.
- D) Migrar e acompanhar custo e latência em produção, pois esses sinais mostram se o resultado ainda é o esperado.

## 3. Um time copia de outro projeto um prompt que usa uma técnica conhecida e obtém resultados ruins e inconsistentes. Qual é a causa mais provável, de acordo com a aula?
- A) As técnicas valem para os modelos em que foram publicadas, então cada modelo exige uma técnica própria e diferente.
- B) O modelo já memorizou as instruções vistas em conversas de outros projetos, e por isso a cópia perde o efeito.
- C) Faltou caprichar nas palavras do prompt, já que a qualidade da saída depende sobretudo do vocabulário escolhido.
- D) A técnica foi usada sem entender por que ela existe e em que condição funciona, o que atrapalha o resultado.

## 4. Um dev pede à IA "gere a documentação do projeto" e recebe um texto genérico. Com base na aula, o que mais tende a melhorar o resultado?
- A) Trocar para um modelo maior, já que texto genérico indica que a janela de contexto do modelo atual ficou curta.
- B) Definir qual tipo de documento é necessário e orientar no prompt o objetivo, a profundidade e o formato da saída.
- C) Pedir de uma vez todos os documentos possíveis e depois ficar apenas com aqueles que fizerem sentido para o projeto.
- D) Repetir o mesmo pedido algumas vezes e escolher a melhor resposta, porque a variação compensa a falta de direção.

## 5. A fatura da API de uma aplicação sobe e as respostas demoram mais, embora o modelo e o volume de requisições sejam os mesmos. Na semana anterior, alguém mudou o prompt. Qual afirmação é coerente com a aula?
- A) O prompt influencia a qualidade da resposta, enquanto custo e latência dependem do modelo e da infraestrutura.
- B) O modelo está reaprendendo a instrução nova, e o custo tende a cair assim que os pesos terminarem de se ajustar.
- C) Um prompt mal desenhado pode gerar respostas longas demais, o que eleva o gasto e o tempo de execução da aplicação.
- D) Basta encurtar o texto do prompt para resolver, porque os tokens de entrada são o que a fatura da API considera.
