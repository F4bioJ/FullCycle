# Gabarito — Framework de decisão - vira ou não skill

## 1. Skill de code review levada do projeto X para o projeto Y
**Correta: C**
**Por quê:** o professor diz que é bem provável ter uma base de skill reaproveitável, mas que essa base será customizada, gerando uma nova skill por projeto, porque cada projeto tem as suas convenções, configurações e arquitetura.
- **A:** a portabilidade do Agent Skills (aula 3.1.1) é sobre os harnesses lerem o mesmo formato; não garante que a skill siga as convenções de outro projeto, e o professor diz o contrário.
- **B:** o professor fala em reaproveitar a base e adequá-la, não em escrever do zero.
- **D:** o professor diz que é preciso adequar a skill para garantir que ela siga as convenções do projeto; contar que o modelo se adapte sozinho contraria o próprio critério do procedimento não óbvio.
**Conceito:** base reutilizável customizada por projeto

## 2. As duas partes da frase de triagem
**Correta: B**
**Por quê:** "isso é conhecimento procedural reutilizável?" é uma análise daquilo que se quer executar; "é estável o bastante para valer um arquivo versionado?" é, segundo o professor, uma questão de design: compensa ter e versionar mais um arquivo no projeto só para ter aquele ganho?
- **A:** inverte os papéis das duas partes.
- **C:** a segurança é uma análise à parte, feita depois da frase ou dos três SIMs; não é o que a segunda parte avalia.
- **D:** a escolha entre N2 e N3 vem na etapa de decisão, depois da triagem; a frase não trata do nível.
**Conceito:** frase de triagem (análise × design)

## 3. Resumo de PR que o modelo já faz bem
**Correta: D**
**Por quê:** o critério "procedimento não óbvio" pergunta se há um como específico que o harness não acerta sozinho. O professor diz que, se o modelo já faz bem sem nenhuma instrução a mais, provavelmente não precisa de skill.
- **A:** a aula não define um placar de dois de três; o caso falha justamente no critério que justifica a skill.
- **B:** estabilidade de meses é um SIM, não um motivo para descartar; a causa está trocada.
- **C:** a consistência entre sessões é um benefício citado na aula 3.1.1, mas aqui o professor é claro: se o modelo já acerta, provavelmente não precisa de skill.
**Conceito:** procedimento não óbvio (três SIMs)

## 4. Convenção de branch que muda a cada poucos dias
**Correta: A**
**Por quê:** a estabilidade pergunta se a regra dura dias, semanas, meses; se não, diz o professor, é bem provável que não precise de skill. Uma regra ainda em teste, ajustada a cada poucos dias, falha nesse critério.
- **B:** a aula não trata a estabilidade como desempate; ela é um dos três SIMs e, se falha, indica que a skill provavelmente não é necessária.
- **C:** versionar no Git registra as mudanças, mas não torna a regra estável; a segunda parte da frase pergunta justamente se é estável o bastante para valer um arquivo versionado.
- **D:** a estabilidade avalia a regra em si, não onde ela fica; mover para o nível 3 não muda o fato de ela mudar toda hora.
**Conceito:** estabilidade (três SIMs)

## 5. Checagem de segurança (INCORRETA)
**Correta: C**
**Por quê:** é a incorreta. Se o candidato envolve segredo, credencial ou token, o professor diz que não se faz skill, mesmo com os três SIMs. Mover o token para uma referência do nível 3 não muda nada: o segredo continua dentro da skill.
- **A:** correta: o professor diz que a segurança é válida para as duas formas de pensamento, a frase e os três SIMs.
- **B:** correta: além de segredo, credencial e token, o professor inclui na pergunta de segurança algo que depende de estado em tempo real.
- **D:** correta: a segurança funciona como veto; descarta mesmo que o resultado da triagem mental tenha sido positivo.
**Conceito:** segurança como veto

## 6. Regra "responder em pt-BR" numa skill
**Correta: A**
**Por quê:** o que é sempre verdade para o projeto é uma fonte de verdade e vai para o CLAUDE.md ou o AGENTS.md, porque há garantia de que o harness sempre os lê; a skill pode ou não ser lida. Na demonstração, esse candidato teve o CLAUDE.md como destino certo.
- **B:** melhorar a description (aula 3.1.5) ajuda o disparo, mas a skill continuaria podendo ou não ser lida; a aula manda essa regra para o CLAUDE.md.
- **C:** levar a regra para o nível 3 a deixa ainda mais condicional; não há garantia de leitura.
- **D:** a aula trata linters e formatters como regras mecânicas, como a indentação; o idioma da resposta é a regra que o professor manda para o CLAUDE.md.
**Conceito:** zona cinzenta: fonte de verdade no CLAUDE.md

## 7. Espaços em vez de tab
**Correta: D**
**Por quê:** na demonstração, o veredito foi "não vira", porque já existe algo que faz isso, o linter. Na zona cinzenta, o professor diz que regras mecânicas, como as de linters e formatters, não precisam ser separadas numa skill.
- **A:** mesmo que o modelo erre, a regra é mecânica e já tem ferramenta própria; o veredito da aula foi não virar skill.
- **B:** MCP e tools são para acesso a dados externos ou vivos; a indentação é regra mecânica, coberta pelo linter.
- **C:** caber no corpo não é o critério; antes da escolha do nível, a triagem já indica que isso não vira skill.
**Conceito:** zona cinzenta: regra mecânica no linter

## 8. Status atual dos pedidos em produção
**Correta: C**
**Por quê:** para acesso a dados externos ou vivos, o professor indica tools ou MCP: não é preciso criar uma skill para isso, mesmo que uma skill possa usar uma MCP tool via linha de comando. A checagem de segurança aponta para o mesmo lado, porque inclui o que depende de estado em tempo real.
- **A:** repetição e falta de conhecimento do modelo são SIMs, mas a zona cinzenta manda o acesso a dado vivo para tools ou MCP.
- **B:** o CLAUDE.md é para o que é sempre verdade no projeto; o status de um pedido muda o tempo todo.
- **D:** gravar o status numa referência congelaria um dado vivo; a aula manda buscá-lo com tools ou MCP.
**Conceito:** zona cinzenta: dado vivo em tools ou MCP

## 9. Nível do checklist de code review
**Correta: B**
**Por quê:** na decisão, a dúvida real é entre N2 e N3. A partir do N3 entram as referências, os arquivos externos e os scripts; o professor lembra que a skill não é só as instruções do corpo. Com arquivos de convenção e um script de coleta, o checklist é N3.
- **A:** o professor diz que provavelmente você não vai trabalhar com o nível 1; a description decide o disparo, mas não contém o checklist.
- **C:** os arquivos de referência podem ser citados no corpo, mas pertencem ao nível 3 (aulas 3.1.2 e 3.1.3).
- **D:** o script faz parte da pasta da skill e é justamente o que caracteriza o nível 3.
**Conceito:** decisão do nível (N2 × N3)

## 10. Preparação de PR com formatter e ordem de testes
**Correta: A**
**Por quê:** o caso passa nos três SIMs (repete em toda PR, tem uma ordem que o modelo não acerta sozinho, é estável) e não tem segredo. Pela zona cinzenta, procedimento repetível e não óbvio é "skill 100%"; a parte mecânica, a formatação, não precisa ser descrita na skill, e o professor diz que a skill pode usar o linter, que ele cita junto com os formatters como regra mecânica.
- **B:** a zona cinzenta separa a regra mecânica, não o procedimento inteiro; a ordem dos testes e a descrição no padrão do time não são tarefa do formatter.
- **C:** o CLAUDE.md é para o que é sempre verdade no projeto, uma fonte de verdade; uma sequência de passos com ordem específica é o procedimento não óbvio que vira skill.
- **D:** descrever no corpo uma regra mecânica que o formatter já cobre vai contra a zona cinzenta, que manda essas regras para linters e formatters.
**Conceito:** zona cinzenta: procedimento na skill, regra mecânica na ferramenta
