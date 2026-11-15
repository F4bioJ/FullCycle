# Quizz — One e Few-shot e situações críticas

**Capítulo:** 1 - Iniciando com Prompt Engineering · **Aula:** 8
**Base:** material da aula

---

## 1. Um portal precisa que um LLM gere centenas de resumos de notícias no estilo da casa. A equipe compara um zero-shot com "resuma em 3 linhas" e um one-shot com um resumo do portal como exemplo. Qual é a troca ao escolher o one-shot?
- A) Ganha controle sobre a forma, mas paga os tokens do exemplo em toda chamada e depende da qualidade dele.
- B) Ganha pouco: a instrução "3 linhas" já dá estabilidade parecida, e o exemplo mais encarece que ajuda.
- C) Fica mais barato a partir da segunda chamada, porque o modelo guarda o estilo do exemplo da primeira.
- D) Reduz o risco de viés, porque o modelo copia um estilo pronto em vez de interpretar a instrução.

## 2. No mesmo GPT-3.5 Turbo, o one-shot da capital devolveu "Brasília" e o one-shot de logs devolveu `status`. O que explica a diferença?
- A) A capital é um fato memorizado; logs de servidor não aparecem nos dados de treino, então os rótulos eram desconhecidos.
- B) O prompt de log não pedia um formato, e sem instrução de formato o one-shot não consegue restringir a saída.
- C) Na capital, o exemplo só precisava mostrar o formato; no log, um caso só não deixava claro o critério entre rótulos.
- D) A temperatura do 3.5 Turbo varia mais em classificação; com temperatura zero, o log teria saído `warning`.

## 3. Na mensagem 3 (quatro exemplos), "API Response Time is above the threshold" saiu `warning`. Qual explicação a aula dá?
- A) O modelo segue o rótulo mais frequente entre os exemplos, e `warning` aparecia em dois dos quatro.
- B) Sem exemplo de API, o modelo usou o que já sabia sobre APIs lentas, e os exemplos pouco pesaram.
- C) Com quatro exemplos, o modelo passa a raciocinar sobre o impacto do log e deduz a severidade sozinho.
- D) A entrada era análoga ao exemplo do tempo de resposta do banco acima do threshold, rotulado `warning`.

## 4. Na mensagem 4 (15 exemplos), o mesmo log de CPU em 95% saiu `warning`, `error`, `error` e `warning` em execuções seguidas. Qual explicação a aula dá?
- A) Os 15 exemplos passaram do limite de contexto do modelo, e os primeiros foram cortados de um jeito diferente a cada execução.
- B) Exemplos parecidos com rótulos diferentes deixaram a regra ambígua, e o modelo escolhia entre padrões que competiam.
- C) Toda execução de LLM varia nessa medida, e as mensagens com menos exemplos oscilariam igual se fossem repetidas.
- D) Com muitos exemplos, o modelo passa a imitar o estilo e repete o rótulo do exemplo mais próximo do fim do prompt.

## 5. Um classificador de logs roda milhões de vezes por dia. Alguém propõe trocar o zero-shot por um few-shot com 15 exemplos. Que custo a aula aponta?
- A) Sobe principalmente a saída, porque o modelo passa a justificar cada rótulo em vez de dar uma palavra.
- B) Pequeno: os exemplos vão na primeira chamada, e o modelo os reaproveita nas chamadas seguintes.
- C) Pesa nos modelos com reasoning, que analisam cada exemplo numa linha de raciocínio; nos outros é pequeno.
- D) Toda chamada carrega os exemplos: mais tokens de entrada, mais contexto ocupado e possível latência maior.

## 6. Sobre as limitações do one-shot e do few-shot, qual afirmação está INCORRETA?
- A) Cada exemplo ocupa espaço da janela de contexto e encarece a chamada.
- B) Exemplos rígidos podem tirar a variedade da saída mesmo quando ela é desejada.
- C) Mais exemplos do mesmo domínio tendem a estabilizar a classificação, mesmo com rótulos de fronteira.
- D) Os exemplos não treinam o modelo; só valem para o contexto em que estão.

## 7. Um prompt define o papel "você é um SRE", pede "responda só com um destes rótulos: error, warning ou info" e mostra o par `DatabaseConnectionLost → error` antes do log a classificar. Como o prompt se classifica quanto aos exemplos?
- A) Few-shot, porque os três rótulos listados também mostram saídas possíveis, somando-se ao par dado.
- B) One-shot, porque há um único par de entrada e saída; o papel e o formato pedido não são exemplos.
- C) Zero-shot, porque a instrução de formato já define a saída e o par serve só como ilustração.
- D) Nenhum dos três: com um papel definido, o prompt vira role prompting e sai dessa classificação.

## 8. Um time mostra um caso de teste como exemplo e pede novos casos. Os testes gerados repetem a mesma estrutura, só trocam valores e não cobrem os casos de borda. Qual limitação da aula explica isso?
- A) Viés do exemplo: o modelo segue o exemplo à risca, imita demais e não inova.
- B) Alucinação: sem conhecer os casos de borda, o modelo inventa testes parecidos.
- C) Conflito entre exemplos: o modelo não sabe qual padrão do exemplo deve seguir.
- D) Custo de tokens: o exemplo ocupou o contexto e sobrou pouco espaço para variar.

## 9. Numa automação que abre uma issue no GitHub quando o log é `error`, a classificação de CPU em 95% oscila entre `warning` e `error`. Qual ajuste segue a conclusão da aula?
- A) Acrescentar exemplos de CPU em várias faixas de uso, para cobrir a entrada que está oscilando.
- B) Manter os 15 exemplos e fechar o prompt com "responda só error, warning ou info".
- C) Trocar por zero-shot, porque sem exemplos o modelo deixa de oscilar entre os rótulos.
- D) Deixar poucos exemplos e tirar os pares em que entradas parecidas recebem rótulos diferentes.

## 10. Dois prompts de produção falham de jeitos diferentes. P1, um one-shot, gera textos sempre com a mesma estrutura, mesmo quando a tarefa pede variedade. P2, um few-shot com 15 exemplos, dá respostas diferentes para a mesma entrada, enquanto uma versão com 4 exemplos não oscila. Qual diagnóstico segue a aula?
- A) P1 sofre com exemplos conflitantes; P2, com exemplos rígidos demais que o modelo imita.
- B) P1 tem exemplos de menos; P2 está com temperatura alta, já que os exemplos não mudam.
- C) P1 imita um exemplo rígido demais; P2 tem exemplos parecidos com rótulos diferentes.
- D) Os dois sofrem de viés: o modelo imita os exemplos, e P2 varia por imitar mais de um.
