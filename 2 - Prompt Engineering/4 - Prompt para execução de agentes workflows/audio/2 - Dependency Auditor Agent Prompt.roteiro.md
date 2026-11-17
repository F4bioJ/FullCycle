# Dependency Auditor Agent Prompt

## Abertura

Nesta aula, a estrutura de prompt que você já conhece sai do papel e vira um agente de verdade. Um agente que audita as dependências de um projeto.

Na aula passada, o professor só anunciou o exemplo. Agora ele abre o prompt inteiro e passa por cada bloco: persona e escopo, objetivo, entrada, saída, critérios, premissas, instruções negativas e tratamento de erro.

A ideia que atravessa tudo é uma só. Cada bloco existe para tirar do modelo uma decisão que ele tomaria sozinho, e talvez mal.

Guarde essa frase. Vamos voltar a ela no fim.

## Persona e escopo

Persona e escopo dizem quem o agente é e até onde ele vai.

Aqui, o agente é um engenheiro de software sênior, especialista em dependências de várias linguagens. E o escopo é curto e duro: ele só analisa e reporta. Não edita código, não faz upgrade e nem propõe upgrade.

Pense num inspetor de imóveis. Você o contrata para dizer o que está errado na casa. Você não quer chegar em casa e descobrir que ele trocou o encanamento por conta própria.

O que isso resolve? Um agente com acesso ao código é tentado a consertar o que encontra. O escopo fecha essa porta.

Onde quebra? O professor é honesto: não é garantido. Ser pontual reduz bastante o risco de o modelo fazer mais ou menos do que você pediu, mas não zera. Por isso, mais adiante, ele vai repetir esse limite em outros pontos do prompt.

Então, persona e escopo: quem é o agente e até onde ele vai. Agora, o que exatamente ele deve fazer.

## Objetivo em itens

O objetivo bom não é uma frase. É uma lista do que verificar.

O professor não escreve só "faça uma auditoria". Ele lista: dependências desatualizadas, depreciadas, legadas, que vão ser descontinuadas. Vulnerabilidades conhecidas. Bibliotecas sem manutenção há mais de um ano. Licenças e riscos legais. Pontos de falha de manutenção. E recomendações, sem tocar no código.

Imagine pedir a alguém "dá uma olhada no carro". Cada mecânico vai olhar uma coisa. Agora imagine pedir "confira freio, óleo, pneus e bateria". Todo mundo volta com as mesmas quatro respostas.

O que isso resolve? Com o objetivo em itens, cada execução verifica as mesmas coisas, e os relatórios ficam comparáveis.

Onde quebra? Na sua cabeça, não no modelo. O professor faz questão de dizer que escrever essa lista é difícil, porque muitas vezes nem quem pede sabe direito o que quer. A clareza é a parte mais trabalhosa de um bom prompt.

Objetivo bom é uma lista do que verificar. E, para verificar, o agente precisa saber o que ler.

## Entrada

A entrada diz ao agente onde olhar.

O prompt aponta os arquivos de dependências e os lockfiles: o package ponto json, os arquivos de lock do npm, do pnpm e do yarn, o requirements ponto txt do Python, e os equivalentes de Rust e de Go. É nesses arquivos que mora a lista de dependências de um projeto.

Além disso, o agente detecta a linguagem, o framework e as ferramentas do repositório. E aceita instruções opcionais do usuário, como "foque em segurança" ou "foque em licenças".

E tem uma regra para quando não há nada para ler. Se nenhum arquivo de dependências aparece, o agente diz isso claramente e pede o caminho, perguntando se deve seguir com informação limitada.

O que isso resolve? Foco. Em vez de varrer o repositório inteiro sem rumo, o agente vai direto ao manifesto.

Onde quebra? Se o projeto guarda as dependências num lugar fora do comum, a entrada precisa ser ajustada. Por isso existe a pergunta de volta ao usuário.

A entrada diz onde olhar. Agora, o que entregar.

## Saída como esqueleto

A saída é um esqueleto pronto de relatório. Você define as seções antes de o modelo escrever uma linha.

O professor liga isso ao esqueleto de pensamento, o skeleton of thoughts, que você viu no primeiro capítulo. O relatório é um Markdown com seções fixas: um resumo geral, os problemas críticos, uma tabela de dependências, a análise de risco, as dependências que não deu para verificar, os arquivos mais críticos, notas de integração e um plano de ação.

Três detalhes merecem atenção.

O primeiro é o exemplo dentro da tabela. O prompt mostra linhas preenchidas: Express com a versão atual, a última versão e o status desatualizado; o mesmo para Lodash e LangChain. Por quê? Porque pedir só "uma tabela mostrando o que está depreciado" é ambíguo. A linha de exemplo mostra o formato. Ela não ensina o domínio ao modelo.

O segundo é a seção condicional. A seção de dependências não verificadas só aparece se houver alguma. Sem essa observação, o modelo cria a seção do mesmo jeito, só para escrever "nenhuma". Ruído no relatório.

O terceiro nasceu de teste. Nos arquivos críticos, o agente às vezes mostrava o caminho completo do computador do professor. Ele acrescentou: use sempre o caminho relativo. Prompt bom se ajusta depois de rodar.

E tem duas regras de comportamento no fim da saída. O plano de ação não traz estimativa de tempo. Os modelos adoram escrever "isso leva um dia" ou "quatro horas", sem base nenhuma. Se você quiser estimativa, precisa dizer no prompt como calculá-la. E, se o usuário não disse onde salvar o relatório, o agente pergunta. Num terminal, como o Claude Code ou o Gemini, um relatório longo na tela é ruim de ler e se perde.

A saída é um esqueleto pronto de relatório. Mas esqueleto não garante conteúdo bom. Para isso vêm os critérios.

## Critérios

Os critérios dizem como preencher o esqueleto.

O primeiro critério é de escopo: catalogar só as dependências diretas. As transitivas, que são as dependências das suas dependências, ficam de fora. Não porque não importem. Importam. Mas incluí-las vira uma árvore gigante, e esse relatório quer só o que o projeto declarou.

Pense numa lista de compras. Você declara "farinha". A farinha veio de um moinho, que usa uma máquina, que usa uma peça. Você audita a farinha, não a peça da máquina do moinho.

Outro critério: comparar cada dependência com a última versão estável, apenas para reportar. Repare no "apenas". É o mesmo limite do escopo, repetido justo no ponto em que o upgrade parece o passo natural.

E a escala de risco também mora aqui: crítico, alto, médio e baixo. Quem viu a tabela de risco na saída podia achar que o professor esqueceu de definir a criticidade. Não esqueceu. Ela está nos critérios.

Os critérios pedem ainda que o agente aponte os pontos únicos de falha, os single points of failure, que são dependências que, se quebram, derrubam várias funcionalidades. E as breaking changes das versões novas.

E tem a parte das ferramentas. Quando houver servidores MCP disponíveis, como o Context7, que dá acesso a documentação, ou o Firecrawl, que lê páginas da web, o agente deve usá-los para validar versões e vulnerabilidades. São exemplos, não obrigação. Outro servidor que faça o mesmo papel serve.

E se não houver acesso a nada externo? O agente declara a limitação e trabalha com os arquivos do projeto. Ele não para.

Os critérios dizem como preencher o esqueleto. Mas sempre sobra algum caso duvidoso.

## Premissas

As premissas são decisões tomadas de antemão para os casos ambíguos.

Se houver vários ecossistemas na mesma pasta, por exemplo um back-end em Python e um front-end em Node, o agente audita cada um separadamente e diz isso no resumo.

Se uma versão estiver faltando, ele documenta e informa o nível de confiança.

Se faltar o lockfile, o arquivo que trava as versões exatas, ele avisa que reproduzir aquele ambiente em produção fica mais arriscado.

Se o usuário não indicar uma pasta, ele audita o projeto inteiro. Se indicar, só aquela pasta. Isso cobre monorepos e a auditoria de uma funcionalidade isolada.

E aqui entra uma sigla: CVE, de Common Vulnerabilities and Exposures. É o catálogo público de vulnerabilidades conhecidas. Cada uma recebe um identificador único, que empresas e ferramentas de segurança usam para falar da mesma falha.

O que as premissas resolvem? Elas evitam que o agente decida no improviso. O que quebra? Nenhuma lista de premissas cobre tudo. Mas cada uma que você escreve é um improviso a menos.

## Instruções negativas e tratamento de erro

As instruções negativas fecham as portas que o modelo costuma abrir sozinho.

Não modificar nem sugerir edição no código. Não rodar comando de upgrade. Não inventar CVE nem assumir vulnerabilidade, porque um identificador falso parece rastreável e destrói a confiança no relatório inteiro. Não usar frases vagas como "provavelmente seguro". Não usar emojis. E, de novo, nada de estimativa de tempo.

Sobre os emojis, o professor confessa: às vezes eles aparecem mesmo assim. A instrução diminui o problema, mas não o elimina. É probabilidade, não comando.

E o tratamento de erro define como o agente falha. Se ele não consegue fazer a auditoria, porque não encontrou arquivos de dependência ou não tem permissão para ler os arquivos, ele responde num formato fixo: o status de erro, a razão e os próximos passos. Por exemplo: informe o caminho dos manifestos, dê permissão de leitura ao workspace, confirme o ecossistema.

O que isso resolve? A falha vira uma resposta útil, em vez de um relatório meio inventado.

## Workflow resumido

O workflow resumido é o passo a passo repetido no fim, em poucas linhas.

Detectar a stack, inventariar as dependências, comparar versões, sinalizar riscos, verificar licenças, categorizar, identificar os arquivos críticos e gerar o relatório.

Tudo isso já estava espalhado pelo prompt. Por que repetir? Porque, em sequência, fica mais fácil para o agente seguir a ordem. E mais fácil para você reler e conferir.

E o professor fecha com humildade. Não é o melhor prompt possível, nem funciona cem por cento. O resultado muda com o modelo e com a codebase. Mas um prompt assim já entrega algo muito mais estruturado.

## Comparando os vizinhos

Algumas peças desta aula se parecem e confundem. Vamos separá-las.

Objetivo e critérios. O objetivo diz o que verificar. Os critérios dizem como verificar e como classificar. A escala de risco, crítico, alto, médio e baixo, é critério, não objetivo.

Exemplo na saída e few-shot. No primeiro capítulo, você viu o few-shot, em que exemplos ensinam a tarefa. Aqui, as linhas de Express e Lodash mostram o formato da tabela. Elas não dizem quais bibliotecas verificar nem substituem os critérios.

Limitação e erro. Sem acesso a MCP ou a bancos externos, o agente declara a limitação e continua com os arquivos. Sem conseguir ler os arquivos do projeto, aí sim ele usa o formato de erro. A pergunta-chave é: ainda dá para auditar alguma coisa?

Escopo e instruções negativas. As duas dizem "não modifique". O escopo define o papel do agente. As instruções negativas listam os comportamentos específicos a evitar. A repetição é proposital: reforço reduz o risco.

Dependência direta e transitiva. Direta é a que o projeto declarou. Transitiva é a que veio junto. Este relatório audita só as diretas, por escolha de escopo.

## Revisão

Recapitulando as frases-âncora.

Persona e escopo: quem é o agente e até onde ele vai.

Objetivo bom é uma lista do que verificar.

A entrada diz onde olhar.

A saída é um esqueleto pronto de relatório.

Os critérios dizem como preencher o esqueleto.

As premissas são decisões tomadas de antemão para os casos ambíguos.

As instruções negativas fecham as portas que o modelo costuma abrir sozinho.

E o fio de tudo: cada bloco tira do modelo uma decisão que ele tomaria sozinho.

Agora, algumas perguntas.

Primeira pergunta: por que o prompt manda incluir a seção de dependências não verificadas só quando houver alguma?

[pausa 5]

Resposta: porque, sem essa observação, o modelo cria a seção mesmo assim, só para dizer que não há nada. A regra evita ruído no relatório.

Segunda pergunta: o time quer estimativa de tempo no plano de ação. O que precisa entrar no prompt?

[pausa 5]

Resposta: o método de cálculo. Sem ele, o modelo escreve números sem base nenhuma, como "um dia" ou "quatro horas".

Terceira pergunta: o agente não tem acesso a nenhum servidor MCP. Ele responde com erro?

[pausa 5]

Resposta: não. Ele declara a limitação e segue com os arquivos do projeto. O formato de erro é para quando a auditoria não pode ser feita, como quando não há arquivos de dependência ou não há permissão para lê-los.

Quarta pergunta: uma biblioteca que você usa depende de outra com uma vulnerabilidade conhecida. Ela entra no catálogo deste relatório?

[pausa 5]

Resposta: não. O relatório cataloga só as dependências diretas. A transitiva fica de fora por escolha de escopo, embora seja importante.
