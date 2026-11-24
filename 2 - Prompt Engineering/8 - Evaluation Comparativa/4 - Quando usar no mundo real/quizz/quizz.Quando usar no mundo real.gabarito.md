# Gabarito — Quando usar no mundo real

## 1. Escolha de métrica por tipo de tarefa
**Correta: B**
**Por quê:** Precision, recall e F1 servem quando há como medir de forma objetiva, normalmente numa classificação com resposta esperada, como "usuário bravo". Qualidade de código é um dos exemplos subjetivos que o professor cita, sem conta exata.
- **A:** a fórmula é a mesma, mas sem critério objetivo para rotular a métrica deixa de fazer sentido.
- **C:** o professor diz que, na parte qualitativa, essas métricas nem fazem sentido no dataset.
- **D:** o professor diz que essa classificação já existe há muito tempo e não nasceu com IA generativa.
**Conceito:** Quando usar métricas objetivas

## 2. Leitura de F1 baixo
**Correta: C**
**Por quê:** O professor diz que F1 baixo é desequilíbrio: o prompt perde muitos casos ou inventa casos. O F1 sozinho não diz qual dos dois, por isso se olham precision e recall.
- **A:** perder casos reais (recall baixo) também derruba o F1; não é só inventar.
- **B:** as métricas dependem mesmo do rótulo, mas nada no cenário indica rótulo ruim; F1 baixo é desequilíbrio do prompt e pede revisá-lo.
- **D:** precision baixa pesa tanto quanto recall baixo no F1, que penaliza o desequilíbrio entre as duas.
**Conceito:** Leitura do F1

## 3. Por que fazer evaluation
**Correta: D**
**Por quê:** O professor compara evaluation a testes de software: sem eles não há como garantir o sistema ao longo do tempo, e o prompt é muito sensível. Medir acertos e erros num dataset mostra se ele acerta mais coisas certas do que erradas.
- **A:** conferir poucos casos à mão não substitui medir num dataset, e o professor não limita evaluation à produção.
- **B:** o F1 resume mesmo acertos e erros, mas de uma versão do prompt; cada mudança exige medir de novo, como rodar testes a cada alteração.
- **C:** a sensibilidade do prompt é justamente a razão para avaliar a cada mudança, não para evitá-las.
**Conceito:** Evaluation como teste
