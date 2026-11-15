# Alucinação

## Alucinação e factualidade

Alucinação e factualidade são problemas próximos, mas não idênticos. O ponto central é que a LLM produz respostas linguisticamente plausíveis sem necessariamente estar ancorada em fatos corretos. Como o modelo foi pré-treinado para prever tokens e não para garantir verdade factual, ele pode gerar saídas convincentes mesmo quando o conteúdo está errado. Isso torna perigosa a suposição de que “se parece certo, então está certo”.

## Por que a LLM erra com confiança

Retomando o pré-treinamento por previsão do próximo token, a LLM opera por composição probabilística de sequências, não por compreensão semântica equivalente à humana. Ela transforma texto em representações numéricas e estima quais tokens têm maior probabilidade de aparecer em seguida. Por isso, a mesma mecânica usada para responder sobre física quântica também é usada para responder sobre bolo de cenoura: o mecanismo é textual, não uma checagem interna de verdade. O resultado é uma resposta fluente que pode soar correta sem ser.

## Alucinação factual

Alucinação factual ocorre quando o modelo afirma algo objetivamente incorreto como se fosse verdadeiro. Um exemplo é dizer que Marie Curie ganhou três prêmios Nobel, quando na realidade ganhou dois. Esse tipo de erro é especialmente perigoso porque costuma aparecer em frases bem escritas e plausíveis, o que reduz a chance de o usuário suspeitar do problema. Em contextos triviais o impacto pode ser pequeno, mas em medicina, direito ou engenharia o erro pode ser crítico.

## Alucinação de fonte e citação

O modelo também pode inventar referências, artigos, frases atribuídas a pessoas conhecidas ou fontes que nunca existiram. Isso acontece quando ele completa o padrão esperado de uma resposta com elementos que parecem compatíveis com o pedido, mas não foram verificados factualmente. Pedidos enviesados ou indutivos, como solicitar artigos que “comprovem” uma premissa falsa, aumentam a chance de o modelo fabricar citações inexistentes. Sempre que a resposta depender de autoridade externa, a fonte precisa ser validada fora da LLM.

## Alucinação estrutural

Alucinação estrutural aparece quando a saída tem forma técnica correta, mas conteúdo inválido. Isso inclui fórmulas matemáticas inexistentes, instruções erradas e código que compila mal, usa APIs incorretas ou referencia elementos que não existem. Retomando o uso de IA para desenvolvimento, isso exige revisão humana efetiva: trate a geração como apoio de pair programming, não como substituto de validação. A fluidez sintática do código não garante correção lógica nem aderência ao ambiente real.

## Alucinação contextual

Na alucinação contextual, a resposta começa coerente e se desvia ao longo da geração. Esse desvio tende a aumentar em interações longas, quando o modelo perde consistência com premissas estabelecidas no início e passa a introduzir trechos incompatíveis com o próprio contexto. O mesmo padrão pode aparecer em texto e imagem: a geração começa alinhada ao pedido e degrada no final. O problema não é apenas um fato isolado errado, mas a quebra progressiva do raciocínio local.

## Causas comuns

A alucinação surge com mais frequência quando falta conhecimento específico no treinamento, quando a pergunta exige inferências que o modelo não consegue sustentar ou quando o prompt induz o preenchimento de lacunas com suposições. Como o modelo tem uma “intuição estatística” sobre o que deveria vir a seguir, ele tende a completar padrões mesmo sem base factual suficiente. Além disso, modelos ajustados para interação natural podem preferir responder de forma convincente em vez de admitir incerteza. Isso aumenta a taxa de respostas plausíveis, porém falsas.

## Como reduzir o risco

Prompts diretos, específicos e com exemplos do formato esperado reduzem espaço para preenchimento especulativo. Em tarefas técnicas, a saída deve passar por verificação humana, especialmente quando envolve código, cálculo, decisão médica, jurídica ou qualquer resposta de alto impacto. Se o usuário não domina o assunto, não deve reutilizar a resposta como se fosse conhecimento validado. LLM é útil como acelerador de trabalho, mas não substitui checagem factual nem julgamento especializado.

## Impacto prático e confiança

O dano mais imediato da alucinação é operacional: decisões podem ser tomadas com base em informação falsa. O dano sistêmico é a erosão de confiança, porque usuários que encontram erros recorrentes passam a desconfiar do modelo mesmo em tarefas onde ele seria útil. Como não é viável validar manualmente cada resposta em fluxos rápidos, o uso responsável depende de selecionar bem os casos de uso e aplicar validação proporcional ao risco. Quanto maior a criticidade do domínio, menor deve ser a tolerância a saídas não verificadas.
