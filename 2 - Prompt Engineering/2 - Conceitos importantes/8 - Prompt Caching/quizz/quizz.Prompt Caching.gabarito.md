# Gabarito — Prompt Caching

## 1. Por que o desconto de cache da OpenAI não aplica mesmo com instruções iniciais iguais?
**Correta: A**
**Por quê:** A aula explica que o cache da OpenAI é automático e transparente, mas a engenharia de prompt deve 'estabilizar instruções, estrutura e prefixos para que os mesmos tokens reapareçam entre chamadas'. Se cada chamada varia demais, o reaproveitamento cai e o desconto desaparece.
- **B:** Contradiz a aula: na OpenAI o cache é automático e transparente, sem registro prévio nem ID de cache; criar o cache por chamada de API e referenciá-lo por ID é o modelo do Gemini.
- **C:** O cache não se restringe a few-shot; qualquer bloco fixo no início do prompt (instruções, system prompt, contexto) é elegível.
- **D:** O cache é automático e transparente; não há opção de ligar/desligar no painel.
**Conceito:** OpenAI cache automático

## 2. Qual provider sai mais barato para consultar o mesmo PDF 200 vezes por dia?
**Correta: C**
**Por quê:** Para conteúdo grande e reutilizado muitas vezes, o cache explícito do Gemini (upload único, ID, desconto em torno de 75%) compensa o custo de criação e de retenção (armazenamento e TTL). O professor: "você vai pagar também para criar um novo cache. Então, você não vai criar cache à toa"; o valor aparece quando o reuso compensa esse custo, e 200 perguntas por dia é reuso alto.
- **A:** Meia-verdade. A premissa bate com a aula (o Google cobra armazenamento e tempo; a OpenAI decide o cache sozinha), mas a conclusão não: com reuso alto, o desconto maior do Gemini dilui esses custos.
- **B:** O desconto da OpenAI vem da repetição do mesmo texto fixo do início do prompt; a parte que muda (a pergunta) não é reaproveitada.
- **D:** O cache dá um "super desconto", não gratuidade: a pergunta continua sendo processada e cobrada, usando o PDF cacheado.
**Conceito:** Escolha de provider para cache de documento recorrente

## 3. Qual o erro de manter a estratégia de prefixo fixo ao migrar de OpenAI para Gemini?
**Correta: D**
**Por quê:** A aula contrasta os dois: na OpenAI o cache é automático, e a estratégia é repetir ao máximo o texto fixo; no Gemini dá para pedir por API que um conteúdo seja cacheado e depois referenciá-lo por ID ("eu posso criar o prompt de uma forma diferente para que eu consiga fazer uma referência dele, algo que eu não consigo fazer diretamente na OpenAI"). Manter só o prefixo repetido desperdiça esse recurso e o desconto maior.
- **A:** A aula não diz nada sobre posição no final; a diferença do Gemini é o cache explícito por API, não onde o texto fica.
- **B:** O PDF é o exemplo da aula, não uma restrição: o cache explícito vale para "aquele conteúdo" que a aplicação mandar cachear.
- **C:** Quem define quanto tempo o cache fica ativo no Gemini é o TTL configurado, não o fim de uma sessão ou conversa.
**Conceito:** Adaptação de estratégia de prompt ao mecanismo de cache do provider

## 4. Vale criar cache explícito no Gemini para instruções usadas só 3 vezes?
**Correta: A**
**Por quê:** O professor: "você vai pagar também para criar um novo cache. Então, você não vai criar cache à toa". Cache explícito tem custo de criação e de retenção (armazenamento e TTL) e só compensa com reuso frequente; três usos de um bloco pequeno não pagam esse custo.
- **B:** O desconto incide nas chamadas que usam o cache, mas a criação é cobrada à parte; três reusos de 200 tokens não chegam perto de cobrir isso.
- **C:** TTL curto reduz o custo de retenção, mas o custo de criar o cache continua lá.
- **D:** Conclusão certa, causa errada: o Google cobra pelo tamanho do armazenamento e pelo tempo de disponibilidade, não pelo número de chamadas.
**Conceito:** Critério de viabilidade do cache explícito

## 5. Redis resolve o custo de tokens de um manual reenviado em toda pergunta?
**Correta: B**
**Por quê:** A aula separa os dois: o cache da aplicação (Redis) guarda dados no seu backend; o prompt caching acontece "diretamente com o modelo". Se o manual vai inteiro no prompt de cada chamada, o modelo o reprocessa toda vez, e só o cache do provider ataca isso.
- **A:** O Redis fica do lado da aplicação: o que sai dele ainda é texto enviado no prompt, e o modelo processa de novo. Guardar o "processamento" é papel do cache do provider.
- **C:** O custo de tokens vem do processamento no modelo, não da rede; o Redis não mexe nessa etapa.
- **D:** Conclusão certa, causa errada: o Redis guarda texto sem problema; o motivo é que ele não evita o reprocessamento no modelo.
**Conceito:** Cache de aplicação vs. cache do provider
