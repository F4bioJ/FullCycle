# Quizz — Skills e subagents

**Capítulo:** 1 - Skills · **Aula:** 13
**Base:** material da aula

---

## 1. Uma skill de documentação precisa mapear cinco frentes de um repositório, só lendo arquivos e em paralelo. O dev está numa sessão do Claude Code com um Opus. Pelo que a aula descreve, que tipo de subagente lançar em cada frente, e por quê?
- A) Plan, porque herda o Opus da conversa e tem acesso a itens externos, o que rende mapas mais completos sem risco de edição.
- B) General purpose, porque cada frente envolve várias etapas de leitura, e ele conclui tarefas de múltiplas etapas com poucos problemas.
- C) Explore, porque o trabalho é busca e leitura rápida, e ele costuma rodar no modelo mais barato e rápido, sem herdar o Opus.
- D) Plan, porque é o agente do modo plan e, por ter ferramentas de leitura, mapeia o diretório sem gastar o modelo da conversa.

## 2. Um colega sugere, no passo 1 da skill de mapeamento, uma frente "camada de dados" e outra "como o serviço usa o que a camada de dados retorna", pedindo que o segundo subagente aproveite o que o primeiro descobriu. Pelo que a aula ensina, qual é o problema?
- A) Os subagentes não compartilham o mesmo contexto, então o segundo não enxerga o que o primeiro achou; cada frente precisa se sustentar sozinha.
- B) Como os subagentes são lançados na mesma mensagem, o segundo pode terminar antes do primeiro e ler um resumo ainda incompleto das descobertas.
- C) O segundo subagente herda o contexto inteiro da conversa principal, e o resumo do primeiro se perde no meio de tanta informação.
- D) Não há problema de contexto: o passo 3 já junta os resumos, então basta a segunda frente esperar a primeira terminar para usar o que ela achou.

## 3. Um dev está numa conversa com um Opus e entra no modo plan do Claude Code para planejar uma refatoração. Pelo que a aula descreve do agente Plan, o que ele deve esperar?
- A) O Plan roda no modelo mais barato e rápido, como o Explore, para que o planejamento não consuma a cota do Opus da conversa.
- B) O Plan herda o Opus e, por herdar o modelo, herda também as permissões da conversa, podendo já editar os arquivos do plano.
- C) O Plan fica restrito aos arquivos locais do projeto, sem acesso a itens externos, para que o plano reflita o código que existe.
- D) O Plan herda o Opus e pode pesquisar, inclusive em itens externos, mas usa ferramentas de leitura e tem a edição negada por padrão.

## 4. Dentro de uma skill, você quer delegar a um subagente esta tarefa: localizar todos os usos de uma função depreciada, trocá-los pela função nova e salvar os arquivos alterados. Pelo que a aula descreve, que tipo de agente combina com ela?
- A) Explore, porque a parte mais pesada é localizar os usos, e a busca rápida com o modelo barato compensa a troca simples do fim.
- B) General purpose, porque o trabalho tem várias etapas e junta exploração com uma ação de edição e escrita, que é o propósito dele.
- C) Plan, porque herda o modelo da conversa e é o agente de pesquisa, o que o torna o mais capaz de concluir a troca com segurança.
- D) Explore, em vários subagentes lançados na mesma mensagem, um por pasta, para que as trocas rodem de forma concorrente e mais rápida.

## 5. Você quer levar a skill de mapeamento, que lança subagentes Explore, para outro harness além do Claude Code. Pelo alerta do professor no começo da aula, o que conferir antes?
- A) Nada no passo 2: os tipos Explore, Plan e general purpose fazem parte do padrão aberto Agent Skills, e todo harness que lê skills os reconhece.
- B) O frontmatter, porque as propriedades do Claude Code mudam entre harnesses, enquanto o corpo, com os subagentes, roda igual nas outras CLIs.
- C) Se o harness tem agentes equivalentes, talvez com outros nomes, ou se não tem agentes; nesse caso, o passo 2 não roda do jeito que foi escrito.
- D) Se o harness usa o mesmo modelo barato do Explore, porque é a escolha do modelo, e não o tipo de agente, o que muda entre as CLIs.

## 6. No passo 2, o professor pede que os subagentes sejam lançados todos na mesma mensagem. O que isso traz, e o que continua igual?
- A) As chamadas rodam de forma concorrente, ao mesmo tempo; mas cada subagente segue com o próprio contexto e devolve o seu resumo.
- B) As chamadas rodam ao mesmo tempo e, por saírem da mesma mensagem, os subagentes dividem um contexto e evitam repetir arquivos.
- C) As chamadas saem em ordem, uma por vez, mas numa mensagem, o que economiza tokens porque o corpo da skill é carregado uma vez para os subagentes.
- D) As chamadas rodam ao mesmo tempo, e isso dispensa o passo 3, porque os resumos chegam juntos e já formam o mapa do repositório.

## 7. O mapa final trouxe uma ordem de ataque que cruza frentes: build quebrado, segredos e, por último, a qualidade da pipeline. Pelo desenho da skill, de onde vem essa priorização?
- A) Do subagente de segurança, que, por cuidar dos riscos, recebe os achados das demais frentes e monta a priorização geral.
- B) De cada subagente, que classifica os próprios riscos em crítica, alta ou média e já os ordena em relação aos das outras frentes.
- C) Do subagente de arquitetura, que mapeia o fluxo de dados de ponta a ponta e, por isso, consegue enxergar as outras frentes.
- D) Do passo 3, em que a conversa principal junta os resumos de todas as frentes; cada subagente só viu a sua e apontou um ou dois riscos.

## 8. Sobre os três tipos de agente que o professor descreve no Claude Code, qual afirmação está INCORRETA?
- A) O Explore costuma usar o modelo mais barato e rápido e trabalha bastante com ferramentas de leitura, para mapear e buscar depressa.
- B) O Explore herda o modelo da conversa, como o Plan, e por isso a exploração da demonstração rodou no mesmo Opus da sessão principal.
- C) O Plan tem acesso a itens externos e funciona como agente de pesquisa, com ferramentas de leitura e a edição negada por padrão.
- D) O general purpose é generalista: conduz tarefas de múltiplas etapas que em geral juntam exploração e alguma ação de edição ou escrita.

## 9. O mapa da skill aponta, como risco, uma rota que importa algo do domínio. A equipe quer garantir, a cada feature nova, que isso não volte a acontecer. Juntando esta aula e a anterior, qual é o melhor caminho?
- A) Rodar a skill de mapeamento ao fim de cada feature, porque o subagente de arquitetura, focado nessa frente, encontra toda importação proibida.
- B) Trocar o Explore pelo Plan na frente de arquitetura, porque ele herda o Opus da conversa e, com um modelo mais forte, a regra fica garantida.
- C) Pôr um script determinístico como gate, com exit 2 e a violação descrita para a autocorreção; o mapa feito pela LLM indica riscos, mas não garante.
- D) Pedir no prompt do subagente que liste cada violação com caminho e linha, porque com caminho e linha o resultado passa a ser determinístico.

## 10. O professor lembra que o Claude Code já dispara subagentes por padrão. O que se ganha ao colocar esse uso dentro de uma skill, como a de mapeamento do projeto?
- A) A skill fixa o procedimento: como dividir as frentes, que agente usar, o que cada um devolve e como sintetizar, para reusar em onboarding e documentação.
- B) Sem a skill, o Claude Code não consegue lançar subagentes em paralelo; é o passo 2 da skill que libera as chamadas concorrentes na mesma mensagem.
- C) Dentro da skill, os subagentes passam a compartilhar o contexto da conversa principal, porque leem o mesmo skill.md que ela já carregou.
- D) A skill torna a saída dos subagentes determinística, porque o mesmo prompt por frente faz cada Explore devolver o mesmo resumo a cada execução.
