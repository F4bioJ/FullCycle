# Analisando prompt especialista em analisar arquiteturas

## Abertura
Na aula passada, você viu o mapa do workflow que gera o estado de um projeto. Tem um agente principal, um orquestrador com o manifesto e vários especialistas trabalhando em paralelo. Um desses especialistas analisa a arquitetura, e o relatório dele traz a lista de componentes que alimenta a etapa seguinte.

Hoje a gente abre o prompt desse especialista. O nome dele é Architectural Analyzer. A estrutura você já conhece do Auditor de Dependências: persona, objetivo, entradas, saída, critérios, ambiguidades, instruções negativas e um workflow no final. O que muda é o problema. Agora o agente precisa entender um sistema inteiro sem ler o sistema inteiro.

Um detalhe antes de começar. O exemplo roda no Claude Code, mas a ferramenta não é o ponto. O arquivo começa com metadados da ferramenta, como o modelo, a cor e exemplos de quando acionar o agente. Isso muda de ferramenta para ferramenta. O núcleo do prompt é o que você leva para qualquer lugar.

## Persona e escopo
A frase-âncora é: a persona dá o olhar, o escopo dá o limite.

A persona diz que o agente é um arquiteto de software, com experiência em padrões arquiteturais, system design e boas práticas. Quanto mais rico esse papel, mais filtros a IA recebe para entrar no assunto certo.

Pense num médico chamado para dar um laudo. Ele examina, descreve e assina. Ele não opera o paciente durante o exame. O escopo do agente é esse: estritamente analisar e reportar. Não modifica arquivo, não refatora, não mexe na base de código.

Isso resolve uma mistura perigosa. Sem esse limite, o modelo tende a começar a consertar o que encontra. E aí você não tem mais um diagnóstico, tem uma mudança que ninguém pediu.

Onde isso quebra? O escopo só funciona se for repetido depois, nas instruções negativas. A gente volta a isso daqui a pouco. Repetindo: a persona dá o olhar, o escopo dá o limite.

## Objetivo em vez de leitura exaustiva
A frase-âncora é: diga aonde chegar, não como ler.

O problema é de tamanho. Um projeto real pode ter centenas de milhares de linhas. A janela de contexto do modelo, segundo o professor, fica perto de duzentos mil tokens no Claude. Ler tudo não cabe.

Pense num arquiteto que chega a uma empresa nova. Ele não lê cada arquivo do repositório. Ele olha as pastas, os pontos de entrada e as integrações, e em poucas horas já desenha o sistema. O prompt pede essa postura.

Por isso ele lista objetivos, e não instruções de leitura. Mapear a arquitetura e os componentes. Achar os componentes críticos e o acoplamento entre eles. Entender integrações externas, bancos de dados, infraestrutura e deploy. Apontar pontos únicos de falha, dívidas técnicas e riscos de segurança em alto nível.

E tem um motivo a mais para não ditar a leitura. Cada agente tem as próprias ferramentas e o próprio jeito de explorar uma base de código. O Claude tem as dele, o Gemini tem as dele. Se você amarra o passo a passo da leitura, você atrapalha a ferramenta de fazer o que ela faz melhor.

Onde quebra? Se o resultado não agradar, o professor sugere rodar o mesmo prompt em outro modelo, como o GPT-5 ou o Gemini, que tem janela grande. O prompt não garante a qualidade da exploração; ele só aponta o destino. De novo: diga aonde chegar, não como ler.

## Entradas que contam a história
A frase-âncora é: alguns arquivos falam pelo sistema inteiro.

As entradas listam o que vale a pena olhar. O código-fonte, claro. Mas também o Dockerfile, o docker-compose, os arquivos de Kubernetes, as variáveis de ambiente, os makefiles, os arquivos do gerenciador de pacotes, os schemas de banco e as migrações.

O exemplo do professor é ótimo. Para saber que uma biblioteca está numa versão desatualizada, o agente não precisa abrir o código que a usa. Basta ler o arquivo de dependências. É como saber a idade de um carro pelo documento, sem desmontar o motor.

Repetindo: alguns arquivos falam pelo sistema inteiro.

## A saída e a tabela de componentes
A frase-âncora é: quanto mais alguém vai consumir a saída, mais ela precisa ser fixa.

O professor diz que o output é sempre a parte que dá mais trabalho num prompt. Aqui ele pede um relatório em Markdown com seções definidas. Um sumário executivo. Uma visão geral do sistema, com pastas e padrões. Uma análise crítica dos componentes, em tabela. Um mapa de dependências, do tipo controller chama service, que chama repositório, que chama o banco. As tecnologias, os pontos de segurança e, se houver evidência, a infraestrutura.

Repare na diferença de tratamento. O sumário executivo ficou genérico de propósito. Isso dá menos controle, mas nos testes do professor ele saiu bom. Se não sair, é só detalhar. Já a tabela de componentes vem com colunas e exemplos. Por quê? Porque esse relatório vai servir de base para outros relatórios. Outro agente vai ler aquela tabela. Se cada execução inventasse um formato, a etapa seguinte quebraria.

É como um formulário de hospital. A anotação livre do médico pode variar. Mas o campo de tipo sanguíneo tem lugar fixo, porque alguém vai procurar exatamente ali.

Repetindo: quanto mais alguém vai consumir a saída, mais ela precisa ser fixa.

## Componente é o que o projeto diz que é
A frase-âncora é: a IA define o componente olhando a organização real.

Componente é uma ideia abstrata. Em Java, você tem pacotes. No Go, também pacotes, mas de outro jeito. No Symfony, um framework PHP, você tem bundles. Num projeto com DDD, o design orientado a domínio, você tem domínios e subdomínios. Num projeto só de classes, as próprias classes podem virar a unidade.

Então o prompt não fixa uma definição. Ele dá exemplos, como um serviço de usuários, um gerenciador de banco, um serviço de cobrança, um componente de mensageria do tipo RabbitMQ. E autoriza a IA a decidir a melhor granularidade para aquele projeto.

Isso resolve a portabilidade. O mesmo agente funciona em Java, em .NET, em Go, em PHP e em JavaScript. Onde quebra? A decisão é da IA, então dois projetos parecidos podem sair com granularidades diferentes. Repetindo: a IA define o componente olhando a organização real.

## Acoplamento aferente e eferente
A frase-âncora é: aferente é quem chega, eferente é quem sai.

Para cada componente, a tabela pede as ligações. Quantos componentes usam este, e quantos este usa.

Aferente conta as dependências que chegam. Pense no caixa de um supermercado. Todo cliente passa por ele. Muita coisa depende dele. Se ele para, a loja inteira para. Um componente com aferente alto é assim: mudar nele atinge muita gente.

Eferente conta as dependências que saem. Pense num cozinheiro que precisa de dez fornecedores para fazer um prato. Se qualquer um falhar, o prato falha. Um componente com eferente alto é sensível ao que acontece nos outros.

O prompt ainda pede que o relatório explique esses dois termos num parágrafo, antes de mostrar os números. Quem ler o relatório entende a tabela sem precisar de outra fonte.

O erro clássico é trocar a consequência. Muitos dependerem de você é aferente, e significa impacto amplo de mudança. Você depender de muitos é eferente, e significa fragilidade. Repetindo: aferente é quem chega, eferente é quem sai.

## Sem evidência, sem seção
A frase-âncora é: a ausência de evidência vira limitação, não chute.

A seção de infraestrutura tem uma condição escrita no próprio prompt: só inclua se houver arquivos ou documentação; caso contrário, não inclua a seção. E a parte de ambiguidades completa: se faltarem arquivos de infraestrutura, registre isso como limitação.

Imagine um projeto sem Dockerfile e sem nada de Kubernetes. Um modelo sem essa regra faria o que faz bem: completaria com o deploy mais comum para aquela stack. Ficaria plausível e seria inventado.

A mesma seção de ambiguidades trata outro caso. Se o projeto tem mais de um padrão, como uma parte em MVC e outra em arquitetura hexagonal, o agente documenta cada um separadamente. Ele não escolhe o vencedor nem declara a arquitetura indefinida.

Repetindo: a ausência de evidência vira limitação, não chute.

## Snapshot, não consultoria
A frase-âncora é: o relatório descreve o presente, não receita o futuro.

As instruções negativas são longas. Nunca modificar arquivos. Não criar diagramas. Não assumir padrão sem evidência. Nada de otimizações, sugestões de performance ou estimativas de tempo. O professor cita aquele vício conhecido: "na primeira semana melhore isto, uma tarefa de duas horas". Sem estilização e sem emojis. Não fabricar informação e dizer quando ela faltar. Não dar recomendações de melhoria.

Aqui mora a distinção mais fina da aula. Identificar uma dívida técnica é objetivo do agente. Recomendar como pagar essa dívida é proibido. "O módulo de pagamentos é usado por doze componentes e acessa o banco direto" é diagnóstico. "Convém extrair uma interface" já é consultoria.

O professor resume assim: é um relatório, um retrato do momento. Ele não quer um consultor. E se o agente não conseguir fazer a análise, isso também deve aparecer como resultado. Repetindo: o relatório descreve o presente, não receita o futuro.

## Salvar, avisar e o workflow final
A frase-âncora é: o relatório salvo é estado do fluxo.

No fim, o agente salva o arquivo com um nome fixo, ArchitectureReport, seguido de data e hora até os segundos, numa pasta dos agentes dentro de docs. Uma instrução posterior pode trocar essa pasta. Depois ele avisa o orquestrador, ou o agente principal, que o relatório foi salvo. Esse aviso não entra no relatório.

Liga com a aula passada. O orquestrador mantém o tracking no manifesto, e a análise de componentes só começa quando a lista de componentes existe. Sem esse arquivo salvo e sem esse aviso, o fluxo não sabe que pode seguir.

E por último vem o workflow resumido. Ele quase repete as seções do relatório. Parece redundante, mas é um reforço: depois que a IA entendeu o que você quer, você diz como trabalhar, na ordem. Como a IA é probabilística, isso aumenta a aderência, sem garantir exatidão. Um detalhe do workflow: se o usuário passar o caminho e o nome do arquivo, o agente gera o relatório sem pedir confirmação.

Repetindo: o relatório salvo é estado do fluxo.

## Comparando com o que você já viu
Vale separar algumas coisas que se misturam fácil.

Primeiro, o Auditor de Dependências e o Analisador de Arquitetura. Os dois usam a mesma estrutura de prompt e rodam em paralelo no workflow. O auditor olha as bibliotecas e as versões. O analisador olha componentes e relações. E só o relatório do analisador traz a lista que libera a análise de componentes.

Segundo, aferente e eferente. Aferente é quem depende de você: impacto de mudança. Eferente é de quem você depende: fragilidade.

Terceiro, seção ausente e seção vazia. Sem evidência de infraestrutura, a seção some e a falta vira limitação. Deixar um título vazio para manter a estrutura não é o que o prompt pede.

Quarto, identificar e recomendar. Apontar a dívida técnica é objetivo. Sugerir a correção é proibido.

E um cuidado do próprio professor: ele rodou esse prompt várias vezes até ficar bom, e ele ainda pode crescer. Se você usar na sua empresa, respeite as políticas internas e não mande código sensível para uma IA que não foi homologada.

## Revisão
As frases-âncora da aula, em sequência. A persona dá o olhar, o escopo dá o limite. Diga aonde chegar, não como ler. Alguns arquivos falam pelo sistema inteiro. Quanto mais alguém vai consumir a saída, mais ela precisa ser fixa. A IA define o componente olhando a organização real. Aferente é quem chega, eferente é quem sai. A ausência de evidência vira limitação, não chute. O relatório descreve o presente, não receita o futuro. O relatório salvo é estado do fluxo.

Primeira pergunta: por que o prompt lista objetivos em vez de dizer como ler a base de código?

[pausa 5]

Resposta: porque ler tudo não cabe na janela de contexto, e porque cada agente tem as próprias ferramentas de exploração. Com o objetivo claro, ele escolhe uma leitura seletiva.

Segunda pergunta: um componente é usado por doze outros e usa dois. Qual acoplamento é alto, e o que isso significa?

[pausa 5]

Resposta: o aferente é alto. Muitos dependem dele, então qualquer mudança nele tem impacto amplo.

Terceira pergunta: o projeto não tem nenhum arquivo de infraestrutura. O que sai no relatório?

[pausa 5]

Resposta: a seção de infraestrutura não aparece, e a falta desses arquivos é registrada como limitação. Nada de deploy presumido.

Quarta pergunta: por que a tabela de componentes tem formato fixo, e o sumário executivo não?

[pausa 5]

Resposta: porque a tabela vai ser lida por outros agentes, como base de outros relatórios. O sumário ficou genérico e, nos testes, já saiu bom.
