# Gabarito — Role Specification como Orquestrador

## 1. Objetivo no lugar de responsabilidades core
**Correta: C**
**Por quê:** o professor diferencia as duas coisas: o objetivo dá uma visão de mais curto prazo do que vai ser feito; as responsabilidades core registram os pontos inegociáveis do papel (inicializar o manifesto, registrar, normalizar caminhos, cobrir componentes, evitar duplicação, finalizar). Trocar uma pela outra perde esse caráter de compromisso permanente.
- **A:** o professor diz explicitamente que é "um pouco diferente de objetivo".
- **B:** ele frisa que a seção não diz necessariamente o que o agente tem que fazer passo a passo; o passo a passo fica no framework operacional.
- **D:** o formato de status fica nos communication standards, não nas responsabilidades.
**Conceito:** responsabilidades core vs objetivo

## 2. Componente sem relatório
**Correta: A**
**Por quê:** no controle de cobertura, se faltar relatório para um componente, o orquestrador passa o gap ao coordenador (o Claude Code), que chama outros agentes. Pela separation of concerns, quem decide qual agente roda e quando é o coordenador; o orquestrador só garante estrutura, cobertura e registro.
- **B:** gerar agentes está entre as ações proibidas do orquestrador; manter o tracking não lhe dá o papel de disparar agentes.
- **C:** o orquestrador não produz análise; o manifesto e o papel dele se limitam a registro e cobertura.
- **D:** o prompt manda passar o gap ao coordenador; marcar "falhou" e seguir deixa o componente sem relatório e não dá a ninguém a chance de completá-lo.
**Conceito:** separation of concerns / gap de cobertura

## 3. Caminho inexistente
**Correta: D**
**Por quê:** o workflow de registro manda verificar se o caminho existe antes de gravar, e o princípio safety over convenience diz que o orquestrador recusa registrar item com caminho inválido ou duplicado.
- **A:** a fonte da verdade é o manifesto, e ele só aceita registros verificados; o aviso do coordenador não dispensa a verificação.
- **B:** o caminho padrão é o lugar onde o relatório deveria estar, não a prova de que ele existe; registrar sem verificar é a conveniência que o princípio rejeita.
- **C:** a verificação é antes da gravação; registrar primeiro e corrigir depois é exatamente a conveniência que o princípio rejeita.
**Conceito:** verificação de caminho / safety over convenience

## 4. Resumo de vulnerabilidades no manifesto
**Correta: B**
**Por quê:** pelo princípio de estado mínimo necessário e pela disciplina do manifesto, ele guarda só notas operacionais, mínimas e factuais (reports, componentes, status, timestamps). As ações proibidas incluem pôr sumário executivo, recomendações e vulnerabilidades no manifesto; esse conteúdo pertence aos relatórios dos especialistas.
- **A:** o orquestrador lê, por exemplo, o relatório de arquitetura para controlar a cobertura; a falta de acesso não é o motivo.
- **C:** a proibição de inventar CVEs vale para o comando, mas aqui as vulnerabilidades seriam as que o auditor encontrou; o problema é o lugar, não a origem.
- **D:** na fase 4 o orquestrador finaliza o manifesto; o README é salvo pelo Claude Code na fase 5 (aula anterior), e o problema aqui é o conteúdo analítico no manifesto.
**Conceito:** estado mínimo necessário / disciplina do manifesto

## 5. "Não tive race condition"
**Correta: D**
**Por quê:** o professor explica que registrar o quanto antes evita race conditions porque vários agentes podem mexer no mesmo arquivo, que não é um banco de dados com isolamento. Ele não teve o problema porque o Claude percebe arquivos abertos e altera por diff, mas isso é comportamento observado da ferramenta, não garantia ("a gente não está isento").
- **A:** a experiência dele não elimina o risco; por isso o princípio continua no prompt.
- **B:** o professor diz justamente o contrário: o arquivo não tem o isolamento de um banco de dados.
- **C:** o princípio é registrar os outputs o quanto antes; deixar tudo para o fim também aumenta o risco de perder estado se a sessão cair.
**Conceito:** parallel-safe recording

## 6. Um orquestrador por tarefa
**Correta: A**
**Por quê:** subir um orquestrador a cada tarefa concluída mantém o tracking mais próximo do tempo real, então uma queda no meio não obriga a refazer o processo inteiro; o custo é que o resultado demora mais, porque cada vez é preciso subir o orquestrador e dar baixa no arquivo.
- **B:** o professor diz que essa opção é mais lenta, não mais rápida; e o manifesto continua sendo a fonte da verdade.
- **C:** o professor diz que essa opção tem custo: o resultado demora mais, porque é preciso subir um orquestrador a cada tarefa.
- **D:** a troca é outra: subir um orquestrador por tarefa custa tempo de execução, não o paralelismo da fase 3, e o manifesto já era consistente por ter um único escritor.
**Conceito:** trade-off tracking em tempo real vs desempenho

## 7. Instruções para o master coordinator
**Correta: C**
**Por quê:** o orquestrador fala com o Claude Code, que é quem executa as tarefas e chama os outros agentes. As instruções para o coordenador criam uma espécie de protocolo de comunicação em linguagem natural: o Claude Code recebe respostas precisas, e o orquestrador recebe as informações (diretório no padrão, resultado de cada especialista) de forma precisa.
- **A:** é o contrário: o coordenador invoca os especialistas; o orquestrador não gera agentes.
- **B:** pela separation of concerns, quem decide qual agente roda e quando é o coordenador; as instruções tratam do diretório de saída e da devolução do resultado, não da ordem.
- **D:** o orquestrador nunca se comunica diretamente com os especialistas.
**Conceito:** communication standards / protocolo com o coordenador

## 8. Prompt do orquestrador mais extenso
**Correta: B**
**Por quê:** o professor diz que conseguiria portar o orquestrador para outra estrutura, mas que ele não tem complexidade para precisar de tanta coisa, e que quanto maior o prompt, maior a ambiguidade e a chance de as coisas darem errado. O prompt deve ser o mais assertivo possível.
- **A:** é a intuição que a aula contraria: mais texto aumenta a ambiguidade em vez de reduzi-la.
- **C:** as estruturas são recomendações e podem ser adaptadas; não há erro de estrutura em acrescentar seções.
- **D:** o professor diz que o resultado depende do modelo de qualquer forma; e aumentar o prompt aumenta a ambiguidade, não a previsibilidade.
**Conceito:** prompt enxuto reduz ambiguidade

## 9. Afirmação INCORRETA sobre o manifesto
**Correta: D**
**Por quê:** a entrega final é o README com o índice dos relatórios (aula anterior), montado a partir do manifesto. O manifesto é o arquivo de estado, e sumário executivo está entre o que o orquestrador não pode pôr nele.
- **A:** correta: só o orquestrador escreve no `manifesto.md`.
- **B:** correta: o registro traz título, caminho absoluto, nome do agente e timestamp.
- **C:** correta: o manifesto mantém o estado do workflow e mostra de onde se parou.
**Conceito:** papel do manifesto vs README final

## 10. Caminhos determinísticos e cobertura
**Correta: A**
**Por quê:** o princípio de caminhos determinísticos existe para saber com certeza onde cada relatório vai estar. Com isso, o orquestrador consegue verificar se o caminho existe, comparar os componentes com os relatórios registrados e apontar o que falta, sem inventar pastas.
- **B:** o paralelismo da fase 3 é decidido e disparado pelo coordenador; caminhos fixos não dispensam o coordenador.
- **C:** o prompt manda não inventar nomes de pasta nem criar pastas de saída; registrar como pendente não torna isso permitido.
- **D:** o prompt manda não inventar nomes de pasta nem criar pastas de saída; o orquestrador verifica caminhos, não os cria.
**Conceito:** caminhos determinísticos / controle de cobertura
