# Quizz — Analisando prompt especialista em analisar arquiteturas

**Capítulo:** 4 - Prompt para execução de agentes workflows · **Aula:** 8
**Base:** material da aula

---

## 1. O Architectural Analyzer lista objetivos (mapear componentes, acoplamento, riscos) mas não diz como ler a codebase nem que ferramentas usar. Pela aula, por que esse desenho?
- A) Porque instruções sobre ferramentas ficam nos metadados do Claude Code, e repeti-las no prompt geraria conflito.
- B) Porque, sem instrução de leitura, o agente lê a codebase inteira, e isso dá um mapa mais completo da arquitetura.
- C) Porque, com o objetivo claro, cada agente escolhe com as próprias ferramentas uma leitura seletiva que cabe na janela.
- D) Porque a análise arquitetural se apoia na documentação do projeto, então a estratégia de leitura pouco importa.

## 2. Na tabela de componentes, `Billing` aparece usado por 12 componentes e usando 2. Pela definição que a aula dá aos termos, como ler esses números?
- A) Aferente alto (12 chegam a ele) e eferente baixo (2); uma mudança no Billing atinge muitos componentes.
- B) Eferente alto (ele depende de 12) e aferente baixo (2); o Billing depende bastante do resto do sistema.
- C) Aferente alto (12 chegam a ele), o que o torna frágil diante de mudanças feitas nos outros componentes.
- D) Aferente alto (12 chegam a ele) e eferente baixo (2); como depende de poucos, mudá-lo tem pouco impacto.

## 3. O mesmo agente roda num projeto Symfony (PHP) e num projeto Go. Pelo prompt, como ele decide o que conta como "componente" em cada um?
- A) Usa a classe como unidade nos dois projetos, por ser a estrutura mais comum entre as linguagens.
- B) Pede ao usuário, nos inputs do prompt, a lista de componentes, porque o termo é abstrato demais para a IA inferir.
- C) Procura uma pasta chamada `components` e, se não houver, registra a ausência como limitação no relatório.
- D) Infere pela organização real, como bundles num e packages no outro, guiado pelos exemplos que recebeu.

## 4. O agente analisa um projeto sem Dockerfile, sem docker-compose e sem arquivos de Kubernetes. Pelo prompt, o que deve sair no relatório?
- A) A seção de infraestrutura com o deploy mais comum para aquela stack, marcado como pressuposto.
- B) Nenhuma seção de infraestrutura, e a falta desses arquivos registrada como limitação da análise.
- C) A seção de infraestrutura com o título e sem conteúdo, para manter a estrutura fixa que outros agentes leem.
- D) Uma pausa na análise para perguntar ao usuário onde estão os arquivos de infraestrutura do projeto.

## 5. No output, a tabela de componentes vem com colunas e exemplos, mas o sumário executivo ficou genérico. Pela aula, o que explica essa diferença?
- A) Sumário genérico dá mais controle sobre a resposta, porque a IA não se prende a um formato rígido.
- B) O sumário é a parte que os outros agentes consomem, então fica aberto para servir a etapas diferentes.
- C) A tabela vai servir de base para outros relatórios, e o sumário genérico já dava bom resultado nos testes.
- D) Detalhar o sumário pesaria na janela de contexto, já que ele condensa a análise feita na tabela.

## 6. O relatório gerado traz os quatro trechos abaixo. Qual deles desrespeita o prompt?
- A) "O módulo de pagamentos concentra acoplamento; convém extrair uma interface para isolá-lo."
- B) "Acoplamento aferente conta quem depende do componente; o eferente, de quem ele depende."
- C) "Limitação: o projeto não tem arquivos de Kubernetes nem de docker-compose para analisar."
- D) "Dívida técnica: o módulo de pagamentos é usado por 12 componentes e acessa o banco direto."

## 7. O prompt termina com um workflow passo a passo que quase repete as seções do relatório pedidas antes. Pela aula, qual é a função dele?
- A) Listar quais seções o relatório deve ter, já que a parte de output traz exemplos de formato.
- B) Definir qual ferramenta o agente deve usar em cada passo da leitura da codebase.
- C) Garantir que o agente execute os passos na ordem exata, de forma determinística.
- D) Reforçar como trabalhar, depois que a IA já entendeu o que se quer como resultado.

## 8. Sem abrir o código que usa uma biblioteca, o Architectural Analyzer aponta que ela está numa versão desatualizada. Pelo que a aula lista como entrada, de onde vem essa evidência?
- A) Das migrações e dos schemas do banco, que registram as versões das bibliotecas usadas pela aplicação.
- B) Dos arquivos de gerenciamento de pacotes e dependências do projeto que está sendo analisado.
- C) Do relatório do Auditor de Dependências, que o Architectural Analyzer lê antes de começar.
- D) Das variáveis de ambiente, que guardam a versão de cada biblioteca carregada em produção.

## 9. Parte do projeto segue MVC e outra parte segue arquitetura hexagonal. Pela seção de ambiguidades e pressupostos, o que o agente deve fazer?
- A) Escolher o padrão predominante e tratar a outra parte como exceção no System Overview.
- B) Registrar a arquitetura como indefinida, já que não deve assumir padrão sem evidência.
- C) Documentar cada padrão separadamente, indicando onde cada um aparece no projeto.
- D) Seguir o padrão descrito na documentação do projeto, mesmo que o código mostre outro.

## 10. Ao terminar, o agente salva `ArchitectureReport` com data e hora numa pasta fixa e avisa o orquestrador ou o agente principal. Ligando com a aula anterior, por que isso importa no workflow?
- A) O relatório persiste como estado do fluxo, e a análise de componentes depende da lista que ele traz.
- B) O aviso copia a janela de contexto do agente para o orquestrador, que passa a ver toda a análise.
- C) A data e a hora no nome substituem o manifesto, porque já mostram em que ordem os agentes rodaram.
- D) O aviso entra no relatório como último passo, para quem ler saber que a análise foi concluída.
