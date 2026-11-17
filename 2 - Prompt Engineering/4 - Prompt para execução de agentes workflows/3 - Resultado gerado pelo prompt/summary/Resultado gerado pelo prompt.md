# Resultado gerado pelo prompt

## Validação do resultado do prompt

Validar a saída de um prompt operacional significa comparar o que foi pedido com o que apareceu no relatório. A verificação não depende de a resposta parecer “boa”, mas de ela cobrir os blocos esperados com utilidade técnica para decisão. Retomando o agente auditor de dependências, o relatório confirma a eficácia do prompt quando entrega seções acionáveis como sumário, achados principais, issues críticas, análise de risco e plano de ação. Se a saída vier genérica, sem evidência de leitura dos arquivos do projeto, o prompt não cumpriu bem seu objetivo.

## Idioma do prompt e idioma da saída

O idioma do prompt e o idioma da resposta não precisam ser os mesmos. Em muitos casos, prompts em inglês produzem respostas mais consistentes porque o modelo costuma ter mais dados de treinamento nesse idioma, mas isso não elimina o uso de português no trabalho diário. Uma estratégia prática é escrever o prompt no idioma em que você formula melhor a instrução e, se necessário, traduzir depois com revisão humana para evitar perda de nuance. Outra opção é manter o prompt em um idioma e explicitar no final que o relatório deve ser gerado em outro.

## Sumário e Key Findings

O sumário é a primeira prova de que o agente entendeu o contexto do projeto, porque ele sintetiza stack, objetivo do sistema, quantidade de dependências e condição geral da base. Já `Key Findings` concentra os achados mais relevantes, funcionando como uma triagem executiva do relatório. Quando essas seções mencionam elementos concretos como `Python`, `Google ADK`, `requirements.txt`, ausência de lockfile e vulnerabilidades específicas, a saída deixa de ser abstrata e passa a refletir a codebase analisada. Isso reduz o esforço de leitura e acelera a decisão sobre prioridade técnica.

## Lockfiles

Lockfiles registram a resolução exata das versões instaladas, não apenas a intenção declarada no manifesto. Sem esse arquivo, o mesmo projeto pode instalar versões diferentes em momentos distintos, o que aumenta risco de inconsistência entre desenvolvimento, CI e produção. No caso de `requirements.txt`, a ausência de lockfile indica menor reprodutibilidade do ambiente e dificulta auditoria confiável do que realmente foi instalado. Por isso, a menção explícita a `no lockfiles present` é um achado operacional importante, não um detalhe cosmético.

## Dependências pinadas e não pinadas

Uma dependência pinada fixa uma versão exata, como `1.0.2`, impedindo upgrades implícitos durante nova instalação. Isso aumenta previsibilidade e ajuda a evitar que uma atualização externa quebre o software sem mudança no código do projeto. Já dependências não pinadas deixam margem para resolver versões mais novas no futuro, o que pode introduzir incompatibilidades, regressões ou mudanças de comportamento. Quando o relatório aponta mistura entre dependências pinadas e não pinadas, ele está sinalizando risco de estabilidade e dificuldade de reprodução.

## Critical Issues

`Critical Issues` é a seção em que o relatório transforma achados dispersos em problemas que exigem atenção imediata. Vulnerabilidades em pacotes centrais como LiteLLM, Pydantic ou Pandas ganham prioridade porque afetam partes relevantes do sistema e podem comprometer segurança, compatibilidade ou manutenção. A presença de dependências depreciadas e possíveis typos também entra aqui quando o impacto operacional é alto. Essa seção só é útil quando aponta o problema de forma específica, sem inflar severidade com afirmações vagas.

## Análise de risco

Análise de risco não é apenas repetir que existe uma vulnerabilidade; é explicar a consequência provável para o projeto. O relatório agrega valor quando relaciona dependências problemáticas a cenários como quebra em produção, exposição de credenciais, falhas de autenticação ou ingestão de conteúdo malicioso. Esse vínculo entre pacote e impacto permite priorizar correções pelo dano potencial, e não apenas pela existência do problema. Em auditoria técnica, risco bem descrito é o que transforma inventário em decisão.

## Arquivos críticos

Arquivos críticos são os pontos da codebase mais sensíveis aos problemas encontrados nas dependências. Quando o relatório destaca `agent.py` e `.env`, ele não está apenas listando arquivos: está indicando onde o impacto operacional tende a se concentrar, seja no core do workflow, seja em configuração e credenciais. Essa leitura é especialmente útil em agentes que interagem com GitHub, Discord ou logs externos, porque combina dependências vulneráveis com superfícies reais de execução. O resultado esperado é uma investigação mais direcionada, em vez de uma revisão difusa da base inteira.

## Integration Notes

`Integration Notes` resume como os pacotes se conectam ao sistema e quais integrações merecem atenção adicional. Essa seção ajuda a entender por que determinada dependência importa além do número da versão, mostrando seu papel no fluxo do agente e nas integrações externas. Em vez de tratar bibliotecas como itens isolados, o relatório passa a enxergá-las como parte de um circuito de execução. Isso melhora a leitura arquitetural do risco.

## Aplicação prática da leitura do relatório

A leitura prática do relatório segue uma ordem simples: confirmar o contexto no sumário, verificar os achados prioritários em `Key Findings`, inspecionar `Critical Issues`, interpretar a análise de risco e localizar os arquivos críticos afetados. Retomando o prompt estruturado já definido antes, cada uma dessas seções corresponde a um bloco que foi explicitamente solicitado, então a validação consiste em checar se o agente realmente materializou esse contrato. O plano de ação entra no final como consequência da leitura, não como ponto de partida. Se ele recomenda corrigir typo, atualizar LiteLLM, Pydantic e Pandas, adicionar lockfile, forçar versões e revisar `.env`, então a saída está conectando achado, impacto e próxima ação de forma coerente.
