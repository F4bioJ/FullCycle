# Quizz — Conceitos básicos de Chain of Thought

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 9
**Base:** material da aula

---

## 1. No ChatGPT com GPT-5, alguém faz uma pergunta simples e acrescenta "pense passo a passo antes de responder". A resposta demora mais e gasta mais tokens. Qual explicação a aula dá?
- A) A frase funciona como um exemplo de saída, e o modelo imita uma estrutura em etapas, como no few-shot.
- B) O GPT-5 já raciocinava nessa pergunta; a frase só faz os passos aparecerem na resposta final.
- C) A frase leva o roteador a mandar a pergunta para o reasoning, mesmo sem a tarefa precisar disso.
- D) A frase aumenta a temperatura do modelo, que passa a gerar mais texto antes de chegar à resposta.

## 2. Um sistema em produção responde errado e ninguém sabe por quê. Qual uso do Chain of Thought a aula recomenda?
- A) Ativar o CoT por um tempo, ver em que passo o raciocínio erra e ajustar o prompt nesse ponto.
- B) Deixar o CoT ativo em produção, porque raciocinar em etapas costuma levar o modelo a corrigir os próprios erros.
- C) Acrescentar mais exemplos rotulados, porque o erro sugere que faltou um padrão para o modelo imitar.
- D) Pedir só a resposta final, porque o passo a passo muitas vezes traz passos inventados que confundem o diagnóstico.

## 3. Um modelo escreve "pego um, pego outro um, somo e tenho dois" e conclui "resposta final: três". O que esse caso ensina sobre o Chain of Thought?
- A) A instrução de CoT pediu poucos passos; com etapas mais detalhadas, a conclusão tende a acompanhar a conta.
- B) É uma falha típica de modelos antigos; nos modelos com reasoning, os passos tendem a garantir a resposta.
- C) O modelo errou a conta dentro de um dos passos, e corrigir esse passo no prompt resolve a conclusão.
- D) Os passos mostrados ajudam a inspecionar, mas não garantem a resposta: podem até não combinar com ela.

## 4. Um sistema classifica milhões de mensagens simples por dia, e a qualidade atual é boa. Um colega propõe acrescentar "pense passo a passo" para melhorar ainda mais. O que a aula indica?
- A) Adotar, porque o raciocínio em etapas costuma melhorar a resposta, e isso compensa o custo extra.
- B) Evitar, porque em tarefa simples o CoT gasta mais tokens e tempo, e a qualidade tende a ficar igual.
- C) Adotar só nos testes, porque em produção o passo a passo não é exibido ao usuário e não gera custo.
- D) Evitar, porque o CoT serve para cálculos e problemas lógicos, e não para classificar mensagens.

## 5. Uma equipe quer que o LLM devolva o diagnóstico de um bug num formato fixo e quer poder conferir como ele chegou ao diagnóstico. Como as técnicas das duas últimas aulas dividem esse trabalho?
- A) O few-shot mostra o caminho do diagnóstico, e o CoT fixa o formato da resposta final.
- B) O CoT dá conta das duas coisas: as etapas já padronizam o formato, e os exemplos sobram.
- C) O few-shot fixa o formato pelos exemplos, e o CoT expõe as etapas que permitem auditar.
- D) O CoT barateia a combinação, porque a resposta em etapas sai mais curta que os exemplos.
