# Gabarito — Analisando prompt especialista em analisar arquiteturas

## 1. Por que objetivos em vez de instruções de leitura e de ferramentas
**Correta: C**
**Por quê:** o professor diz que, entendendo o objetivo, a ferramenta decide como ler a codebase; ninguém precisa ler 100% do código para entender a arquitetura, e projetos grandes estourariam a janela de contexto. Ele também evita ditar o uso das ferramentas, porque cada agente (Claude, Gemini) tem as suas e a sua "manha".
- **A:** os metadados trazem modelo, cor e exemplos de acionamento; a aula não fala em instruções de ferramenta neles nem em conflito.
- **B:** é o oposto: a ideia é justamente não ler 100%, o que estouraria a janela em projetos grandes.
- **D:** os inputs incluem código-fonte, Dockerfile, pacotes, migrações; a documentação é só uma das fontes, e a estratégia de leitura importa.
**Conceito:** objetivo claro guia a leitura seletiva

## 2. Billing usado por 12 e usando 2
**Correta: A**
**Por quê:** aferente são as dependências que chegam ao componente (quantos apontam para ele): 12. Eferente são as dependências que ele tem em relação aos outros: 2. Muitos dependem do Billing, então mudar nele tem impacto amplo.
- **B:** lê o 12 como dependências do Billing; quem depende são os 12 outros, não ele.
- **C:** o número do aferente está certo, mas a consequência está trocada: ser frágil a mudanças dos outros vem do eferente alto (depender de muitos), não do aferente.
- **D:** os números estão lidos certo, mas a consequência está invertida: o impacto de mudar o Billing vem de quantos dependem dele (12), não de quantos ele usa.
**Conceito:** acoplamento aferente e eferente

## 3. O que é componente em Symfony e em Go
**Correta: D**
**Por quê:** a aula diz que componente é abstrato e depende da linguagem e da arquitetura; por isso o prompt dá exemplos (User Service, Database Manager, Billing, Message) e deixa a IA definir o que entende como componente, buscando módulos, features, bundles (Symfony), packages (Go), domínios e subdomínios.
- **A:** classes são uma possibilidade só quando o software tem apenas classes; não é a regra para todos os projetos.
- **B:** o prompt não pede a lista ao usuário; ele autoriza a IA a inferir.
- **C:** não há essa regra; a IA procura a organização que o projeto realmente usa.
**Conceito:** componente como conceito flexível

## 4. Projeto sem arquivos de infraestrutura
**Correta: B**
**Por quê:** a seção de infraestrutura tem a condição "only if files/documentation present, otherwise do not include this section", e a seção de ambiguidades manda registrar como limitação a falta de arquivos de infraestrutura.
- **A:** as instruções negativas proíbem assumir padrão sem evidência e fabricar informação.
- **C:** o prompt manda não incluir a seção, e não deixá-la vazia; a estrutura fixa não pede seção sem conteúdo.
- **D:** a aula não prevê pausa para pedir arquivos; a falta vira limitação no relatório.
**Conceito:** seção condicional e ausência de evidência como limitação

## 5. Tabela detalhada x sumário genérico
**Correta: C**
**Por quê:** o professor detalha a tabela porque o relatório será base para outros relatórios e não pode sair no formato que a IA quiser. O sumário ficou genérico, o que dá menos controle, mas nos testes dele ficou bom; se não satisfizer, é só detalhá-lo.
- **A:** inverte: o professor diz que, deixando genérico, terá menos controle sobre a resposta.
- **B:** inverte os papéis: é a tabela de componentes (o relatório estruturado) que serve de base para as etapas seguintes; por isso ela é a parte detalhada.
- **D:** a aula não liga o grau de detalhe do sumário à janela de contexto; o motivo dado é o controle sobre a resposta e o resultado dos testes.
**Conceito:** grau de especificação do output conforme o uso do relatório

## 6. Qual trecho do relatório desrespeita o prompt
**Correta: A**
**Por quê:** "convém extrair uma interface" é uma recomendação de melhoria, e as instruções negativas proíbem recomendações e sugestões. O relatório é um snapshot do estado atual, não consultoria.
- **B:** os critérios de qualidade mandam explicar aferente e eferente num parágrafo antes de apresentar o acoplamento.
- **C:** a seção de ambiguidades manda registrar como limitação a falta de arquivos de infraestrutura.
- **D:** identificar dívidas técnicas é um dos objetivos; o trecho descreve o estado, com evidência, sem sugerir correção.
**Conceito:** relatório como snapshot (instruções negativas)

## 7. Função do workflow resumido
**Correta: D**
**Por quê:** o professor chama o workflow de reforço: quase um resumo de cada item do relatório que, depois que a IA entendeu o que se quer, diz como ela deve trabalhar.
- **A:** as seções já estão definidas no output (sumário, overview, tabela, dependency mapping etc.); o workflow as repete como reforço, não é ele que as define.
- **B:** a aula evita justamente ditar o uso das ferramentas, que cada agente escolhe.
- **C:** a IA é probabilística (aula anterior); o reforço aumenta a aderência, mas não garante execução exata.
**Conceito:** workflow resumido como reforço

## 8. Biblioteca desatualizada sem ler o código
**Correta: B**
**Por quê:** os inputs incluem os arquivos de gerenciamento de pacotes e dependências; o professor dá exatamente esse exemplo: não é preciso ler todos os arquivos para saber que uma biblioteca X está numa versão desatualizada.
- **A:** schemas e migrações mostram a estrutura do banco, não a versão das bibliotecas.
- **C:** na aula anterior, arquitetura e dependências rodam em paralelo, e o prompt não manda ler o relatório do auditor.
- **D:** variáveis de ambiente guardam configuração, não a versão das bibliotecas.
**Conceito:** inputs que revelam a arquitetura sem leitura completa

## 9. MVC e hexagonal no mesmo projeto
**Correta: C**
**Por quê:** a seção de ambiguidades e pressupostos diz: se múltiplos padrões estiverem presentes, documente cada um separadamente.
- **A:** escolher o predominante esconde o outro padrão, contra a regra.
- **B:** há evidência dos dois padrões; o caso não é falta de evidência, e a regra manda documentar ambos.
- **D:** seguir a documentação contra o código seria assumir um padrão sem evidência.
**Conceito:** ambiguidade: múltiplos padrões

## 10. Salvar e avisar o orquestrador
**Correta: A**
**Por quê:** o relatório salvo é estado útil do fluxo: o orquestrador faz o tracking do que foi concluído, e a análise de componentes só começa com a lista que o relatório de arquitetura traz (aula anterior).
- **B:** o orquestrador não acessa a janela de contexto dos agentes; eles se comunicam por input e output.
- **C:** o tracking fica no manifesto do orquestrador; o nome com data e hora não o substitui.
- **D:** o prompt manda não incluir esse passo no relatório.
**Conceito:** relatório salvo como estado do workflow
