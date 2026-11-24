# Quizz — Framework de decisão - vira ou não skill

**Capítulo:** 1 - Skills · **Aula:** 6
**Base:** material da aula

---

## 1. Um time tem uma skill de code review que funciona bem no projeto X e quer usá-la no projeto Y, que tem outra arquitetura e outras convenções. O que o professor diz que é mais provável acontecer?
- A) A skill roda igual no projeto Y, porque segue o padrão aberto Agent Skills e é portátil entre projetos e harnesses.
- B) A skill precisa ser escrita do zero no projeto Y, porque a base de outro projeto carrega convenções que confundem o modelo.
- C) A base da skill é reaproveitada, mas customizada para o projeto Y, gerando uma nova skill que siga as convenções dele.
- D) A skill é usada como está, e o modelo adapta as instruções às convenções do projeto Y no momento em que a executa.

## 2. Na frase de triagem, o professor acrescenta à pergunta "isso é conhecimento procedural reutilizável?" uma segunda: "é estável o bastante para valer um arquivo versionado?". Como ele diferencia o que cada parte avalia?
- A) A primeira trata do design da skill; a segunda analisa o que se quer executar, ou seja, se o procedimento se repete.
- B) A primeira analisa o que se quer executar; a segunda é de design: se compensa ter e versionar mais um arquivo no projeto por aquele ganho.
- C) A primeira analisa o que se quer executar; a segunda confere a segurança, ou seja, se o arquivo versionado não expõe segredos no Git.
- D) A primeira decide se vira skill; a segunda decide o nível, já que um arquivo versionado à parte é o que marca uma skill de nível 3.

## 3. Um time pensa em criar uma skill para gerar o resumo de cada PR. Isso se repete todo dia e o formato não muda há meses, mas o Claude Code já gera um bom resumo sem nenhuma instrução a mais. Pela técnica dos três SIMs, qual é a leitura mais coerente com a aula?
- A) Vira skill, porque reutilização e estabilidade já somam dois SIMs, e dois de três bastam para a triagem dar positivo.
- B) Não vira, pela estabilidade: uma regra que já dura meses tende a estar incorporada ao modelo e dispensa instrução.
- C) Vira skill, porque ela daria resultados consistentes entre sessões, e isso vale a pena mesmo quando o modelo já acerta.
- D) Falta o SIM do procedimento não óbvio: se o modelo já faz bem sem instrução a mais, provavelmente não precisa de skill.

## 4. Um tech lead está testando uma convenção nova de nomes de branch, que ele ajusta a cada poucos dias. Ela vale para todas as PRs e o modelo não acerta sozinho. Pela técnica dos três SIMs, o que a aula indica?
- A) A estabilidade não fecha: se a regra ainda muda com frequência, é bem provável que não precise de uma skill por enquanto.
- B) Vira skill, porque reutilização e procedimento não óbvio pesam mais que a estabilidade, que é um critério de desempate.
- C) Vira skill, e o versionamento no Git resolve a instabilidade, já que cada ajuste da convenção fica registrado numa PR.
- D) Vira skill de nível 3, porque a estabilidade pesa sobre o corpo, e a convenção pode ficar num arquivo de referência.

## 5. Sobre a checagem de segurança que o professor acrescenta à triagem, qual afirmação está INCORRETA?
- A) Ela vale tanto para quem usa a frase de triagem quanto para quem usa a técnica dos três SIMs.
- B) Ela pergunta se o candidato envolve segredo, credencial, token ou algo que depende de estado em tempo real.
- C) Com três SIMs, um candidato com token ainda vira skill se o token ficar numa referência do nível 3.
- D) Ela descarta um candidato mesmo quando a triagem mental já tinha dado positivo para criar a skill.

## 6. Um time criou uma skill com a instrução "responda em português do Brasil", mas às vezes as respostas saem em inglês. Pelo que a aula explica sobre a zona cinzenta, qual é a causa e o destino certo dessa regra?
- A) A regra é algo sempre verdadeiro no projeto, e a skill pode ou não ser lida; o destino certo é o CLAUDE.md, que o harness sempre lê.
- B) A description da skill está vaga; com gatilhos específicos em terceira pessoa, a skill passa a ser acionada em toda resposta.
- C) A regra ficou no corpo, no nível 2; movida para um arquivo de referência do nível 3, ela passa a ser carregada com mais peso.
- D) A regra é mecânica, como as de formatação; o destino certo é um linter, que confere o idioma de cada resposta gerada.

## 7. Um dev quer criar uma skill para garantir que o projeto use espaços em vez de tab na indentação. Qual decisão segue o que a aula mostrou?
- A) Criar a skill, porque o modelo às vezes erra a indentação, e isso conta como um SIM de procedimento não óbvio.
- B) Levar a regra para uma MCP tool, porque formatar arquivos do projeto é um caso de acesso a um sistema externo.
- C) Criar uma skill de nível 2, porque a regra é curta, cabe no corpo e não precisa de referências nem de scripts.
- D) Não criar uma skill para isso: a regra é mecânica, e já existe uma ferramenta que a cobre, o linter.

## 8. Um time quer uma skill que consulte o status atual dos pedidos no banco de produção sempre que alguém perguntar por um pedido. Pela zona cinzenta da aula, qual é o encaminhamento?
- A) Vira skill, porque a consulta se repete todo dia e o modelo não sabe sozinho em que tabela procurar o status.
- B) Vai para o CLAUDE.md, porque o status dos pedidos é um fato do projeto que o harness precisa ter carregado em cada conversa.
- C) Fica com tools ou MCP, que dão acesso ao dado vivo; uma skill pode usá-las, mas não precisa ser criada para isso.
- D) Vira skill de nível 3, com o último status gravado num arquivo de referência que o corpo manda ler quando preciso.

## 9. A triagem indicou que um checklist de code review vira skill. Ele usa arquivos com as convenções de segurança e de nomes do time e um script que coleta o diff em stage. Na etapa de decisão da aula, qual nível faz sentido e por quê?
- A) Nível 1, porque a description já classifica o pedido e é ela que decide quando o checklist deve ser aplicado.
- B) Nível 3, porque a partir dele entram as referências, os arquivos externos e os scripts, e não só as instruções do corpo.
- C) Nível 2, porque os arquivos de convenção são citados no corpo e, por isso, fazem parte das instruções desse nível.
- D) Nível 2, porque o script roda pelo Bash fora da skill, e o que conta para o nível é o que o modelo lê do corpo.

## 10. Um time quer automatizar a preparação de cada PR: rodar o formatter, depois os testes na ordem que o time combinou e, por fim, escrever a descrição no padrão do time. A sequência se repete em toda PR, o modelo erra a ordem sozinho e o processo não muda há meses. Qual decisão segue a aula?
- A) Vira skill, pelo procedimento repetível e não óbvio, e a etapa de formatação fica com o formatter, que a skill executa.
- B) Não vira, porque a formatação é regra mecânica, e a zona cinzenta manda o procedimento inteiro para o formatter.
- C) Não vira, porque a ordem combinada é uma convenção fixa do projeto, e por isso o procedimento vai para o CLAUDE.md.
- D) Vira skill, e as regras de formatação são descritas no corpo, para o modelo aplicá-las sem chamar uma ferramenta.
