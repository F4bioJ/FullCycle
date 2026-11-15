# Quizz — Uma simples correção de Bug

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 2
**Base:** material da aula

---

## 1. Um desenvolvedor pede à IA para corrigir um bug de uma linha (trocar `>` por `>=`). A IA corrige o bug, refatora funções próximas, melhora testes e adiciona documentação. Todos os testes passam e nenhum bug novo é introduzido. Ainda assim, o *workflow* da equipe é prejudicado. Por quê?
- A) O *code review* deixa de ser uma validação rápida da correção e vira uma revisão de refatoração não solicitada, atrasando o deploy do *bugfix* urgente.
- B) A refatoração introduz dívida técnica oculta que só aparece em produção semanas depois.
- C) O modelo gasta *tokens* desnecessários, estourando o orçamento de custo da equipe para a tarefa.
- D) A documentação gerada pela IA costuma conter alucinações sobre a regra de negócio, exigindo verificação manual linha a linha.

## 2. No exemplo da aula, o prompt 'valide essa função, entenda o problema e faça a correção' resultou em alterações em 500 linhas e 5 arquivos. Qual mecanismo do modelo explica por que a liberdade no prompt vira 'permissão para melhorar'?
- A) Modelos probabilísticos otimizam para utilidade percebida; na ausência de fronteiras explícitas, o espaço vazio é preenchido com melhorias colaterais que o modelo julga positivas.
- B) Versões recentes (ex: Sonnet 4) têm um parâmetro *temperature* fixo alto que força a criatividade além do escopo pedido.
- C) A instrução 'entenda o problema' ativa um modo de *reasoning* profundo que obriga o modelo a refatorar todo o módulo para garantir consistência lógica.
- D) O modelo acessa a base de código completa e aplica automaticamente padrões de *Clean Code* configurados no *system prompt* global da IDE.

## 3. O professor define 'barreira de comportamento' como parte essencial do prompt para correção de bug. Qual das seguintes instruções melhor exemplifica uma barreira eficaz nesse contexto?
- A) Use as melhores práticas de Clean Code e SOLID para garantir que o código fique elegante.
- B) Corrija apenas o bug reportado. Não refatore, não altere arquivos fora do escopo, não reescreva testes além do necessário para validar a correção.
- C) Analise o histórico do arquivo para entender o contexto antes de mexer.
- D) Seja proativo e melhore tudo o que encontrar de errado no módulo, pois isso evita bugs futuros.

## 4. Além das barreiras, a aula exige definir o 'formato da saída esperada'. Se o desenvolvedor omite essa definição, qual é o risco operacional direto descrito?
- A) O modelo pode responder em linguagem natural em vez de código, exigindo cópia manual.
- B) O modelo pode gerar um *diff* binário em vez de texto, quebrando a ferramenta de *code review*.
- C) O modelo pode escolher uma formatação de *patch* incompatível com o *CI/CD* da empresa.
- D) O modelo pode inventar a forma de entrega e, ao fazer isso, embutir mudanças extras que considera úteis, pois não há contrato que as impeça.

## 5. O relato da troca do Claude Sonnet 3 (centrado) pelo 4 (proativo) ilustra um limite fundamental de prompts sem barreiras. Qual conclusão operacional correta se tira disso?
- A) Deve-se fixar a versão do modelo em produção para nunca ser surpreendido por mudanças de comportamento.
- B) Prompts com barreiras explícitas e saída definida reduzem a dependência do 'temperamento' da versão do modelo, estabilizando o resultado ao longo do tempo.
- C) Modelos mais novos são intrinsecamente piores para correção de bug porque priorizam refatoração; deve-se usar apenas modelos antigos.
- D) A solução é adicionar ao prompt: 'Comporte-se como o Sonnet 3', forçando a persona da versão anterior.

## 6. Sobre a consequência prática de PRs pequenas e previsíveis, segundo a aula, qual afirmação está **INCORRETA**?
- A) A estruturação não elimina o comportamento probabilístico da IA, mas melhora a previsibilidade entre execuções e versões.
- B) Limites de atuação e saída definida diminuem a chance de mudanças laterais, alinhando o *code review* ao objetivo original.
- C) Uma PR pequena é principalmente uma preferência estética de times que gostam de histórico limpo no Git.
- D) PRs pequenas preservam a capacidade de revisão rápida e reduzem o custo cognitivo do revisor.

## 7. A aula propõe uma estrutura intencional para o prompt de correção de bug em três blocos. Qual a ordem e o conteúdo corretos desses blocos?
- A) 1. Descrição objetiva do bug (função, condição falha, esperado). 2. Barreiras de comportamento (escopo, proibições). 3. Formato da resposta (patch mínimo, arquivos, justificativa).
- B) 1. Contexto geral do projeto e arquitetura. 2. Descrição do bug. 3. Pedido de refatoração opcional se houver tempo.
- C) 1. Formato da resposta. 2. Barreiras de comportamento. 3. Descrição do bug (para o modelo já saber como responder antes de ler o problema).
- D) 1. Barreiras de comportamento genéricas para qualquer tarefa. 2. Descrição do bug. 3. Formato da resposta livre para o modelo decidir.

## 8. O professor afirma: 'A IA trabalha de forma probabilística, você nunca vai conseguir garantir absolutamente nada'. Mesmo assim, ele defende a estruturação rigorosa. Qual o ganho real que justifica o esforço?
- A) Eliminação total da necessidade de *code review* humano para *bugfixes* triviais.
- B) Melhora drástica na previsibilidade do escopo da PR entre execuções e versões, reduzindo atrito no pipeline de engenharia.
- C) Transformação do modelo em um sistema determinístico para a tarefa de correção de bug.
- D) Garantia matemática de que o modelo nunca tocará em arquivos fora do escopo.

## 9. A aula retoma o conceito de ambiguidade (visto anteriormente) mas o reenquadra como 'falha operacional'. Qual a diferença prática dessa nova ótica?
- A) Ambiguidade operacional só acontece em código; ambiguidade semântica só acontece em linguagem natural.
- B) A falha operacional é corrigida baixando o *temperature* para 0; a falha semântica exige *few-shot*.
- C) Ambiguidade semântica é quando o modelo não entende; ambiguidade operacional é quando o modelo entende mas o *output* é muito verboso.
- D) Ambiguidade semântica gera respostas erradas; ambiguidade operacional gera respostas tecnicamente certas, mas que quebram o processo de entrega.

## 10. Um desenvolvedor usa um prompt estruturado com barreiras e formato de saída. Mesmo assim, em 1 de 10 execuções, a IA altera um arquivo de configuração adjacente não listado no escopo. Segundo a aula, como interpretar esse evento?
- A) As barreiras falharam; deve-se reescrever o prompt do zero com linguagem mais agressiva ('NUNCA TOQUE EM OUTROS ARQUIVOS').
- B) O modelo está com *bug*; deve-se reportar à provedora da API e travar a versão até corrigirem.
- C) É o comportamento probabilístico residual; a estruturação reduziu a frequência de 90% (sem barreiras) para 10%, ganho operacional válido mesmo sem perfeição.
- D) A estruturação é inútil se não garante 100%; deve-se voltar a revisar manualmente todo código gerado sem confiar no prompt.
