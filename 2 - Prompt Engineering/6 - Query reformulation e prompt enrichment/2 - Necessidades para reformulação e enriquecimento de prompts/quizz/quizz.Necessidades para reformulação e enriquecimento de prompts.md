# Quizz — Necessidades para reformulação e enriquecimento de prompts

**Capítulo:** 6 - Query reformulation e prompt enrichment · **Aula:** 2
**Base:** material da aula

---

## 1. Num assistente interno, o usuário digita apenas "Docker e Kubernetes". Pela abordagem da aula, o que a reformulação deve fazer antes de enviar ao modelo?
- A) Repassar o texto como veio, porque acrescentar termos mudaria aquilo que o usuário quis dizer.
- B) Corrigir a ortografia e expandir sinônimos, que é o tratamento indicado para consultas curtas.
- C) Inferir a intenção provável e transformá-la num pedido completo, como um guia do básico ao avançado.
- D) Exigir a resposta em JSON, porque consultas curtas costumam gerar respostas sem estrutura.

## 2. Na reformulação "Explique como desenvolver um CRUD com Golang e disponibilizar endpoints REST utilizando o framework Gin", por que o professor incluiu "REST"?
- A) Porque uma API pode usar outros protocolos, e sem dizer qual deles a resposta fica genérica.
- B) Porque o framework Gin exige que o protocolo da API seja declarado já na pergunta.
- C) Porque o termo indica que a API terá as operações de criar, ler, atualizar e remover.
- D) Porque termos técnicos explícitos reduzem o risco de o modelo alucinar sobre a linguagem.

## 3. Um usuário pergunta "O que é melhor, Go ou Python?". Por que essa pergunta tende a gerar uma resposta pouco útil?
- A) Ela traz uma premissa falsa embutida, e o modelo pode alucinar ao tentar confirmá-la.
- B) Ela é curta demais para o modelo identificar de quais linguagens se está falando.
- C) Ela não define o formato de saída, então o modelo não consegue montar uma comparação.
- D) Falta o contexto de uso, e sem ele o modelo não tem base para ser assertivo.

## 4. Uma equipe reformula as perguntas dos usuários para pedir a saída em Markdown. Agora essa saída vai ser lida por outro sistema, sem IA, que processa os dados automaticamente. Segundo o professor, o que faz sentido?
- A) Manter Markdown, porque é o formato em que o modelo responde melhor e qualquer sistema lê texto.
- B) Pedir JSON, porque um sistema sem IA nem sempre entende Markdown, mas interpreta JSON.
- C) Deixar o formato livre, porque fixar um formato na reformulação altera a intenção do usuário.
- D) Pedir Markdown organizado módulo a módulo, porque a divisão em seções já permite a integração.

## 5. Um usuário pergunta "Quem criou o Kubernetes em 1995?", mas o Kubernetes não existia nessa época. Qual reformulação segue o que a aula recomenda e por quê?
- A) Acrescentar sinônimos e os termos em inglês, para a busca achar documentos sobre Kubernetes.
- B) Manter a pergunta, porque o modelo corrige a premissa quando o fato está no seu treinamento.
- C) Perguntar quem é o autor do Kubernetes e quando foi lançado, para o ano não ser assumido.
- D) Pedir a resposta em JSON com os campos autor e ano, o que impede o modelo de alucinar.

## 6. Quando a resposta depende de uma busca num banco de dados, por que reformular a pergunta acrescentando sinônimos e termos em inglês ajuda?
- A) A consulta mede relevância pelas palavras, e mais termos afins trazem documentos melhores.
- B) Os termos extras ampliam o conhecimento que o modelo recebeu no treinamento sobre aquele assunto específico.
- C) Os termos em inglês ocupam menos tokens e deixam espaço na janela para mais documentos.
- D) Os sinônimos deixam a pergunta mais curta e precisa, o que reduz os documentos irrelevantes.

## 7. Sobre reformular a pergunta para uma busca semântica, qual afirmação está INCORRETA?
- A) Corrigir "serto" para "certo" pode ajudar a busca a encontrar documentos mais relevantes no banco.
- B) Incluir os termos em inglês junto dos termos em português pode trazer documentos melhores.
- C) Citar bugs, performance e segurança deixa a pergunta mais rica para a busca no banco.
- D) Como a busca olha o sentido geral, reduzir a pergunta a poucas palavras melhora a relevância.

## 8. Um sistema reformula "Explique como desenvolver aplicações com IA e Python" para "...para quem nunca teve contato com a linguagem e, a cada exemplo, mostre um comparativo com TypeScript". O que essa reformulação pressupõe?
- A) Que o código TypeScript do usuário esteja indexado no banco de dados para a busca semântica.
- B) Que o sistema tenha informações sobre o usuário, como a experiência e a especialidade dele.
- C) Que o usuário reescreva a pergunta com mais contexto antes de o sistema responder.
- D) Que o modelo tenha sido treinado com exemplos de Python e TypeScript lado a lado.

## 9. Com o tempo, o ChatGPT passa a dar exemplos na linguagem que você mais usa e a responder perguntas de localização com base na sua cidade. Como a aula explica isso?
- A) A IA usa o que guarda sobre você na memória de longo prazo para personalizar a resposta.
- B) O modelo é retreinado de tempos em tempos com as conversas de cada usuário.
- C) O sistema deduz a sua cidade e os seus interesses pelo IP e pelo navegador a cada acesso.
- D) Uma busca semântica traz documentos sobre a cidade e a linguagem mais citadas na internet.

## 10. Um sistema de suporte recebe "meu app trava ao logar" e, antes de consultar a base de artigos, reescreve para "aplicativo trava (crash/freeze) no login (sign in): causas e soluções". Qual necessidade da aula essa reformulação atende principalmente?
- A) Personalização: adaptar a resposta ao perfil e ao histórico conhecido desse usuário.
- B) Risco de resposta incorreta: retirar uma premissa falsa embutida na pergunta.
- C) Alinhamento de formato: estruturar a saída para que outro sistema a processe.
- D) Busca semântica: termos e sinônimos a mais para achar conteúdo relevante.
