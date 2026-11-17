# Gabarito — Dependency Auditor Agent Prompt

## 1. Por que repetir "apenas para reportar" nos critérios
**Correta: C**
**Por quê:** comparar com a última versão é exatamente o ponto em que o agente seria tentado a sugerir ou fazer o upgrade. O professor diz que reforça a frase "para garantir que ele não vai nem tentar fazer um upgrade". E, como ele mesmo diz sobre ser pontual no escopo, isso minimiza o risco, mas não garante.
- **A:** o "apenas para reportar" não é o que mantém a comparação na tabela; a comparação já é pedida pelo próprio critério e pela seção de saída. A frase acrescentada restringe o uso da comparação.
- **B:** a escala critical, high, medium e low é um critério separado de categorização de risco; a comparação de versões alimenta o status (ex.: *outdated*), não define a criticidade.
- **D:** o workflow resumido repete o passo a passo do prompt inteiro; o professor não diz que ele exclui a persona, e o motivo da repetição é o limite do escopo.
**Conceito:** reforço do escopo no ponto de tentação (minimiza, não garante)

## 2. Tirar a observação da seção condicional
**Correta: A**
**Por quê:** o professor explica que, sem a observação, o modelo provavelmente traria a seção escrevendo que nenhuma dependência deixou de ser verificada. A regra existe para a seção só aparecer quando houver casos reais.
- **B:** a seção é para dependências que não puderam ser verificadas; as desatualizadas vão para a tabela de dependências. O risco que o professor aponta é a seção aparecer dizendo que não há nada, não ela ser preenchida com outra coisa.
- **C:** omitir a seção é justamente o comportamento que a observação garante; sem ela, o professor diz que o modelo provavelmente traria a seção escrita.
- **D:** sem a observação, a seção continua existindo no esqueleto; o efeito é ela aparecer vazia, não migrar para outra.
**Conceito:** seção condicional no formato de saída

## 3. Linhas de exemplo na tabela de dependências
**Correta: D**
**Por quê:** o professor diz que pedir só "uma tabela mostrando o que está depreciado" fica ambíguo para a IA; com o exemplo, ele mostra especificamente como quer a saída.
- **A:** as linhas de exemplo não são dados de referência; os critérios mandam comparar com a última versão estável e usar MCP servers quando disponíveis para validar versões.
- **B:** o catálogo vem dos manifestos e cobre as dependências diretas; as três linhas mostram o formato, não uma lista de partida.
- **C:** a escala critical, high, medium e low vem dos critérios. O professor diz isso: quem viu a tabela de risco podia achar que ele não tinha definido a criticidade, e ela está nos critérios.
**Conceito:** exemplos concretos no formato de saída reduzem ambiguidade

## 4. Estimativas de tempo no plano de ação
**Correta: B**
**Por quê:** o professor proíbe estimativas porque os modelos colocam "um dia" ou "quatro horas" sem saber de onde tiram isso. Ele diz que, se quisesse o tempo, teria de colocar no prompt como calculá-lo.
- **A:** ler os arquivos não dá base para o modelo estimar tempo; é justamente o número sem origem que o professor critica.
- **C:** o motivo da proibição não é o escopo de "analisar e reportar" (que trata de não modificar o código), e sim a falta de base dos números; com um método, a estimativa poderia entrar no prompt.
- **D:** trocar a unidade não dá método ao modelo; o número continuaria sem base.
**Conceito:** instrução negativa contra estimativa de tempo sem método

## 5. Objetivo genérico e relatórios que variam
**Correta: D**
**Por quê:** o professor transforma o objetivo em itens (depreciadas, desatualizadas, legacy, vulnerabilidades, sem manutenção há mais de um ano, licenças, pontos de falha). Ele avisa que escrever esses itens é difícil porque muitas vezes nem quem pede tem clareza do que quer, e que essa clareza é a maior dificuldade de um bom prompt. Com o objetivo vago, cada execução decide o que verificar.
- **A:** a persona define quem o agente é e até onde vai (escopo), não a lista do que verificar; o professor detalha o objetivo justamente para não deixar isso para o modelo deduzir.
- **B:** o workflow resumido repete o passo a passo do que já está no prompt; ele não substitui um objetivo que nunca disse o que verificar.
- **C:** as linhas de exemplo calibram o formato da tabela; elas não dizem quais verificações fazer (licença, manutenção, vulnerabilidades).
**Conceito:** objetivo detalhado em itens exige clareza do que se quer

## 6. Dependência transitiva com vulnerabilidade
**Correta: C**
**Por quê:** o critério manda catalogar só as dependências diretas e ignorar as transitivas. O professor diz que elas são importantes, mas incluí-las levaria a uma árvore gigante, e esse relatório quer só as diretas.
- **A:** o prompt não abre exceção para vulnerabilidades; a regra das diretas define o que é catalogado.
- **B:** a seção de não verificadas é para dependências do catálogo que o agente não conseguiu checar, não para as que ficaram fora do escopo.
- **D:** single point of failure, na aula, é uma dependência que impacta várias features do software; B nem entra no catálogo, então não é analisada assim.
**Conceito:** dependências diretas vs. transitivas (escopo)

## 7. MCP servers: afirmação INCORRETA
**Correta: D**
**Por quê:** é a incorreta. Sem acesso a MCP ou bancos de vulnerabilidade, a checagem fica mesmo mais limitada, mas o prompt manda mostrar essa limitação e trabalhar com as informações dos arquivos do projeto. O formato de erro é para quando a auditoria não pode ser feita, como sem arquivos de dependência ou sem permissão de leitura.
- **A:** correta: o uso é condicional, "quando disponível", e só se o MCP estiver ativo.
- **B:** correta: o professor dá Context7 e Firecrawl como exemplos e diz que não está dizendo quais usar, porque outro servidor pode fazer o mesmo.
- **C:** correta: é exatamente o critério de limitação do prompt.
**Conceito:** MCP servers como fonte condicional; limitação declarada ≠ erro

## 8. Dois ecossistemas, sem pasta indicada e sem lockfile
**Correta: B**
**Por quê:** as premissas do prompt cobrem os três pontos: sem pasta indicada, auditar o projeto inteiro; vários ecossistemas, auditar separado e dizer isso no resumo; sem lockfile, avisar que o risco de reproduzir em produção é maior.
- **A:** o prompt já decide o caso: sem pasta indicada, audita o projeto inteiro; não precisa perguntar.
- **C:** a falta de lockfile vira um aviso de risco, não um motivo para deixar o ecossistema de fora; as versões declaradas no `requirements.txt` continuam comparáveis.
- **D:** os ecossistemas são auditados separados; o nível de confiança é para versão faltando, não para juntar tabelas.
**Conceito:** ambiguidades e premissas (assumptions)

## 9. Emojis mesmo com a instrução negativa
**Correta: C**
**Por quê:** o professor admite que, às vezes, a IA coloca emojis mesmo assim, e que ele tenta minimizar isso. A aula reforça que o resultado é probabilístico: ser pontual e testar reduz o risco, mas não garante.
- **A:** nenhuma forma de escrever a regra faz ela "passar a ser cumprida" com certeza; o professor trata o resultado como probabilidade, com risco minimizado.
- **B:** a aula não atribui os emojis ao lugar da regra no prompt; a causa é o resultado ser probabilístico, e por isso eles podem aparecer mesmo com a regra bem colocada.
- **D:** o modelo não ignora a instrução: ela reduz bastante os emojis. O professor mantém a instrução negativa justamente por isso.
**Conceito:** instrução negativa minimiza, não garante (resultado probabilístico)

## 10. Leitura dos arquivos bloqueada
**Correta: A**
**Por quê:** o tratamento de erro do prompt cobre a auditoria que não pode ser feita, inclusive quando o agente não consegue acessar os arquivos. A resposta vem num formato fixo: status de erro, razão e próximos passos, como dar permissão de leitura ao workspace.
- **B:** o critério de limitação vale quando faltam fontes externas (registros, MCP, bancos de vulnerabilidade) e manda trabalhar com os arquivos do projeto; aqui são os próprios arquivos que estão inacessíveis.
- **C:** a seção de não verificadas é para casos pontuais dentro de uma auditoria feita; sem ler os arquivos, não há auditoria a reportar.
- **D:** essa regra da entrada vale quando nenhum arquivo de dependência é detectado; aqui os manifestos foram encontrados, o problema é o acesso.
**Conceito:** tratamento de erro com formato fixo
