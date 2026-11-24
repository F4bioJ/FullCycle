# Gabarito — O que é uma skill

## 1. Skill não é função nem endpoint
**Correta: C**
**Por quê:** A aula define a skill como uma pasta com instruções em Markdown que o CLI lê sob demanda. Ela não é código, função nem endpoint, mas pode executar código, repetir algo como uma função faz e consumir um endpoint por ferramentas bash.
- **A:** A skill não é código; ela pode executar um script, mas o que o CLI lê são as instruções em Markdown.
- **B:** É o erro que o professor corrige: a skill não é um endpoint, ela pode consumir um (inclusive coisas externas) via bash.
- **D:** A skill não é uma função; ela pode executar algo repetidas vezes, como uma função, mas é uma pasta com instruções.
**Conceito:** O que é e o que não é uma skill

## 2. Portabilidade depende da convenção de arquivos
**Correta: A**
**Por quê:** O Agent Skills é uma convenção de arquivos: o Markdown fica numa pasta com uma estrutura que, nas palavras do professor, deve ser seguida por obrigação. A skill é portátil porque todos leem do mesmo jeito e no mesmo formato; uma estrutura própria quebra isso.
- **B:** Meia-verdade: o conteúdo é Markdown, mas a portabilidade depende da estrutura da pasta seguir a convenção, não só do formato do texto.
- **C:** Ser aberto quer dizer não proprietário; a aula diz que a estrutura deve ser seguida por obrigação, não adaptada por cada time.
- **D:** A conclusão (perde portabilidade) acerta, mas a causa está errada: o professor diz que o Agent Skills não é um recurso proprietário.
**Conceito:** Agent Skills como convenção de arquivos aberta e portátil

## 3. Conhecimento que vive na cabeça de uma pessoa
**Correta: D**
**Por quê:** A aula mostra que o conhecimento de um dev ou tech lead só existe enquanto a pessoa está disponível; na skill, ele é versionado no Git e pode ser revisado numa PR. A aula também cita skills orientando quem chega (onboarding).
- **A:** A skill é lida sob demanda; leitura garantida em toda execução é o que a aula atribui ao CLAUDE.md e ao AGENTS.md.
- **B:** Skill tende a dar consistência, mas saída idêntica vem de transformar o passo exato em script; a LLM não é determinística.
- **C:** O veto de segurança da aula vale para credenciais, dados sensíveis e segredos, não para procedimentos de release.
**Conceito:** Versionar o conhecimento do time e apoiar o onboarding

## 4. Não determinismo e consistência
**Correta: B**
**Por quê:** O professor lembra que a LLM não é determinística: com o mesmo prompt, a essência se parece, mas a forma e o contexto da resposta mudam. Uma skill que padroniza faz o time tender a resultados consistentes entre processos, pessoas e sessões, sem que a redação fique idêntica.
- **A:** Meia-verdade: a skill serve para padronizar, mas a aula fala em tender a resultados consistentes, não em redação idêntica.
- **C:** A aula diz que a skill dá consistência também ao resultado, entre processos, pessoas e sessões, e não só ao jeito de pedir.
- **D:** O CLAUDE.md garante leitura, não determinismo; a variação vem da LLM, que continua não determinística com qualquer arquivo.
**Conceito:** LLM não determinística e padronização via skill

## 5. Passos determinísticos viram script
**Correta: A**
**Por quê:** Para passos determinísticos, como os de formatters e linters, a aula diz que o passo exato deve virar script (ou ser uma ferramenta tradicional como o ESLint) executado pela skill via bash. Assim a saída é idêntica, e o resultado do script orienta as ações.
- **B:** Descrever as regras no Markdown deixa a verificação a cargo do modelo, que improvisa em passos determinísticos; a aula diz que regras mecânicas não precisam estar na skill.
- **C:** O CLAUDE.md é para fatos sempre verdadeiros do projeto; ele garante a leitura, não uma verificação com saída idêntica.
- **D:** MCP é para acesso a sistemas ou a dado vivo, não para impor regras de formatação.
**Conceito:** Regras mecânicas e passos determinísticos

## 6. Critérios de quando criar uma skill
**Correta: C**
**Por quê:** O critério de estabilidade diz que uma regra que muda diariamente provavelmente não precisa de skill. As outras três são repetidas, não óbvias para o modelo e estáveis, o perfil de skill.
- **A:** Estável há meses e não óbvia (o modelo erra a ordem sozinho): bom candidato.
- **B:** Repetida em vários projetos e não óbvia: atende aos critérios de reutilização e de procedimento não óbvio.
- **D:** Estável há um ano, repetida e que o modelo não segue sozinho: bom candidato.
**Conceito:** Reutilização, procedimento não óbvio e estabilidade

## 7. Segredos não viram skill, nem dentro de script
**Correta: D**
**Por quê:** O professor trata segurança como ponto-chave: credenciais, dados sensíveis e segredos não devem de modo algum entrar numa skill, e a ideia deve ser vetada na hora. Um script dentro da pasta da skill faz parte dela, então o token continua na skill.
- **A:** Meia-verdade: o Markdown fica limpo, mas a skill é a pasta inteira, e o script com o token está nela.
- **B:** A aula associa DisableModelInvocation a ações com efeito colateral, como o deploy; ela não libera credenciais.
- **C:** A aula diz que regras mecânicas podem virar script dentro da skill; o problema aqui é o segredo, não o script.
**Conceito:** Segurança: credenciais e segredos

## 8. Repetitivo, mas precisa valer sempre
**Correta: B**
**Por quê:** A repetição é critério de skill, mas a aula separa o fato sempre verdadeiro do projeto (um padrão imposto): ele vai para o CLAUDE.md ou o AGENTS.md, que têm leitura garantida durante a execução, enquanto a skill é lida sob demanda.
- **A:** Meia-verdade: reutilização é critério de skill, mas a aula manda o que precisa valer sempre para o arquivo de leitura garantida.
- **C:** A aula associa DisableModelInvocation a ações com efeito colateral, como o deploy, não a regras que valem em toda execução.
- **D:** MCP é para acesso a sistemas e a dado vivo; uma regra fixa do projeto não é dado vivo.
**Conceito:** Skill versus CLAUDE.md/AGENTS.md

## 9. Fatos voláteis
**Correta: C**
**Por quê:** Versões de bibliotecas são fatos voláteis; o professor prefere buscá-las via tool ou na web. A skill pode usar uma tool de web search para consultar e montar o plano, usando o recurso em vez de criá-lo.
- **A:** Versionar a skill é uma vantagem, mas fato volátil gravado na skill fica desatualizado; a aula prefere a busca na hora.
- **B:** O CLAUDE.md é para fatos sempre verdadeiros do projeto, e versões de bibliotecas são justamente voláteis.
- **D:** A aula diz que a skill usa tools, web search e MCPs, mas não os cria.
**Conceito:** Fatos voláteis e busca via tool

## 10. Ação explícita com efeito colateral
**Correta: A**
**Por quê:** Para o deploy, a aula põe a skill como uso principal, com o passo a passo de instruções automatizado por ela e a propriedade DisableModelInvocation no front matter; as partes mecânicas podem ficar em outras ferramentas.
- **B:** O CLAUDE.md é para fatos sempre verdadeiros do projeto, não para um procedimento com efeito colateral como o deploy.
- **C:** MCP é o protocolo para acesso a sistemas e dado vivo, e a skill pode chamá-lo; mas, para o deploy, a aula indica a skill como uso principal.
- **D:** Meia-verdade: o deploy vira skill, mas acesso a sistemas e dado vivo é papel de MCP e tools, que a skill pode chamar; a aula não manda embutir esses dados na skill.
**Conceito:** Ação com efeito colateral e DisableModelInvocation
