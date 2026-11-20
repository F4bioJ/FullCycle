# Quizz — Fluxo basico e considerações importantes

**Capítulo:** 6 - Query reformulation e prompt enrichment · **Aula:** 3
**Base:** material da aula

---

## 1. No fluxo básico da aula, por que o modelo que enriquece a pergunta costuma ser diferente do modelo que gera a resposta final?
- A) O modelo que enriquece precisa consultar mais dados externos, então usa uma versão mais robusta.
- B) Enriquecer é um processamento mais simples, que um modelo menor e mais barato resolve rápido.
- C) Separar os modelos reduz a latência total, porque as duas chamadas passam a rodar ao mesmo tempo.
- D) O modelo menor guarda mais memória de longo prazo do usuário, o que favorece a personalização.

## 2. Um sistema troca o enriquecimento por LLM por uma busca em cache baseada em palavras-chave da pergunta. O que ele ganha e o que perde?
- A) Ganha refinamento na pergunta enriquecida, mas perde em custo, porque o cache precisa ser mantido.
- B) Ganha precisão nas perguntas raras, mas perde nas frequentes, que passam a ter contexto genérico.
- C) Ganha em custo e também em refinamento, porque o contexto guardado no cache já foi revisado.
- D) Ganha em custo e tempo, porque não chama um modelo, mas o resultado fica menos refinado.

## 3. Um time acostumado com APIs que respondem em dezenas de milissegundos vai adicionar IA a um serviço. Pelo raciocínio do professor, o que muda no desenho da solução?
- A) Cada chamada ao modelo custa e demora segundos, então o número de chamadas define a arquitetura.
- B) O enriquecimento roda em paralelo com a resposta, então o tempo total é o da chamada mais lenta das duas.
- C) Modelos menores respondem em milissegundos, então o tempo da resposta final é o que realmente pesa.
- D) A demora da IA vem da rede, e manter o tempo das APIs tradicionais exige servidores mais próximos.

## 4. Sobre por que vale a pena enriquecer a pergunta mesmo com o custo de uma chamada extra, qual afirmação está INCORRETA?
- A) Enriquecer ajuda a obter a resposta adequada na primeira tentativa, sem o usuário perguntar de novo.
- B) Repetir a busca ou fazer um retry por falta de informação consome mais tokens e aumenta o custo.
- C) Como o enriquecimento acontece antes da resposta, ele não acrescenta tempo de espera ao fluxo.
- D) Quem se beneficia pode ser uma pessoa, outra IA ou um sistema integrado que consome a API.

## 5. Um chatbot de suporte recebe centenas de vezes por dia variações de "como redefinir minha senha". Seguindo a aula, qual é a estratégia mais adequada para essas perguntas repetidas?
- A) Detectar o padrão da pergunta e devolver uma resposta já preparada em cache.
- B) Enriquecer cada pergunta com um modelo pequeno, barato e rápido, antes do modelo robusto.
- C) Mandar cada pergunta ao modelo robusto sem enriquecer, cortando uma camada do fluxo.
- D) Guardar as respostas em cache, mas regerar cada uma no modelo robusto para manter a qualidade.
