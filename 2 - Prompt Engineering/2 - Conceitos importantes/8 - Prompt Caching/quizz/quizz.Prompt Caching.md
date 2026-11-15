# Quizz — Prompt Caching

**Capítulo:** 2 - Conceitos importantes · **Aula:** 8
**Base:** material da aula

---

## 1. Uma equipe usa a API da OpenAI e percebe que o desconto de caching não está sendo aplicado, mesmo enviando prompts que compartilham as mesmas instruções iniciais. Segundo a aula, qual é a causa mais provável?
- A) Os prompts variam demais após o trecho inicial, impedindo que os mesmos tokens reapareçam de forma consistente entre as chamadas.
- B) A OpenAI só aplica o desconto quando o prefixo fixo foi registrado antes por uma chamada de API que devolve um ID de cache.
- C) A OpenAI só faz cache de prompts que contenham exemplos few-shot, não de instruções puras.
- D) O cache da OpenAI é desativado por padrão em contas de desenvolvimento e precisa ser ligado no painel de controle.

## 2. Um sistema consulta o mesmo PDF de 50 páginas em 200 perguntas por dia. Comparando OpenAI (cache automático) e Gemini (cache explícito com ID), qual tende a sair mais barato e por quê?
- A) OpenAI, porque o cache automático não cobra armazenamento nem tempo de retenção, custos que o Gemini soma ao cache explícito.
- B) OpenAI, porque o desconto de cerca de 50% vale para o prompt inteiro, inclusive a pergunta, e não só para o trecho repetido.
- C) Gemini, porque com tanto reuso o desconto de cerca de 75% sobre o PDF cacheado compensa o custo de criar e manter o cache.
- D) Gemini, porque o cache explícito dispensa o reenvio do PDF e, com isso, o provider deixa de cobrar pelas perguntas feitas sobre ele.

## 3. Ao migrar um pipeline de prompts da OpenAI para o Gemini, um engenheiro mantém a mesma estratégia: coloca todo o contexto fixo no início de cada prompt e espera que o reaproveitamento aconteça sozinho. Qual é o principal problema dessa abordagem?
- A) O Gemini reconhece o texto fixo para cache quando ele vem no final do prompt, e não no início como na OpenAI.
- B) O Gemini reaproveita apenas arquivos enviados por upload, então as instruções fixas em texto voltam a ser cobradas cheias.
- C) O Gemini descarta o cache a cada nova sessão, então o prefixo repetido só gera desconto dentro da mesma conversa.
- D) O bloco fixo segue sendo reenviado a cada chamada, quando no Gemini ele poderia ser cacheado por API e referenciado por ID.

## 4. Um desenvolvedor cria cache explícito no Gemini para um bloco de instruções de 200 tokens que será usado em 3 chamadas hoje e nunca mais. Qual é a avaliação correta?
- A) Não compensa: com tão poucos usos, o desconto não chega a cobrir o custo de criar o cache e de mantê-lo pelo TTL definido.
- B) Compensa: o desconto de cerca de 75% vale desde a primeira chamada, então três reusos já pagam a criação do cache.
- C) Compensa se o TTL for curto: com retenção de poucos minutos o custo do cache fica perto de zero e o desconto prevalece.
- D) Não compensa: o Gemini cobra o armazenamento pelo número de chamadas que usam o ID, e não pelo tamanho do conteúdo.

## 5. Um chatbot envia o mesmo manual de 20 mil tokens como contexto em toda pergunta, e as perguntas variam muito. Para cortar o custo de tokens desse manual, a equipe propõe usar Redis na aplicação. Qual avaliação está correta?
- A) Resolve: o Redis guarda o manual já processado e o entrega ao modelo no lugar do texto, que deixa de ser reprocessado.
- B) Ajuda pouco no custo de tokens: o Redis atua no backend, e o manual repetido segue sendo reprocessado pelo modelo.
- C) Resolve em parte: o Redis reduz a latência de rede até o provider, que é onde se concentra o custo de tokens do manual.
- D) Ajuda pouco: o Redis guarda só dados estruturados e não consegue armazenar o texto livre de um manual ou de uma resposta.
