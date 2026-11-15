# Resumo: Introdução às diferenças de IA

*MBA em Engenharia de Software com IA. Módulo: Fundamentos de IA Generativa. Aula 2*

---

## 1. IA tradicional: aprendizado supervisionado

Antes do boom da IA generativa, o modelo dominante era a **IA tradicional**, que é basicamente **supervisionada** e focada em **classificação** e **regressão** a partir de dados conhecidos.

- O modelo é treinado com **exemplos rotulados**: as entradas (*inputs*) e as saídas (*outputs*) esperadas já são conhecidas.
- Com base nesses dados, ele devolve a **saída mais provável**.

### Exemplo do Titanic
Já sabemos quem sobreviveu e quem morreu no naufrágio. Com esses dados é possível treinar um modelo para prever quem sobreviveria em um "Titanic 2".
- **Entradas rotuladas:** idade, altura, posição da cabine (esquerda/direita, frente/fundo), classe (primeira/segunda).
- **Saída já definida:** vive ou morre.

### Exemplo da praia
Prever quantas pessoas vão à praia no próximo feriado com base no movimento da estrada nos feriados anteriores. É análise estatística de grandes volumes de dados, com IA fazendo a previsão.

### Características principais
- Faz **previsão ou ajuda na decisão** a partir de **padrões observados**.
- Precisa de **dados rotulados e consistentes**. Se cachorros forem rotulados como seres humanos, o modelo vai "aprender" que são humanos e não conseguirá separar uma coisa da outra.

### Usos típicos (estão no nosso dia a dia há anos)
| Tarefa | Como funciona |
|---|---|
| **Detecção de fraude** | Aprende o comportamento normal do cliente no banco e sinaliza ações muito diferentes, gerando um *score* de risco |
| **Classificação de e-mails** | Separa spam de e-mail legítimo com base no que já conhece como spam |
| **Reconhecimento de imagem/som** | Identifica o animal de uma foto ou a música a partir de um trecho |
| **Previsão de demanda** | Marketplaces como a Amazon preveem o comportamento de compra e recomendam produtos |

### Limitação
**Não cria nada novo. Só generaliza o que já aprendeu.** A IA tradicional prevê, direciona e compreende, mas nunca cria.

---

## 2. IA generativa: aprender padrões e gerar

A IA generativa é treinada para **entender e estruturar os padrões internos dos dados de entrada** e, a partir deles, **gerar novos exemplos que seguem as mesmas regras implícitas**.

Duas mudanças em relação à IA tradicional:
1. **Classificação de dados:** ela deixa de depender de dados já preparados para ela e passa a **compreender e interpretar** a entrada.
2. **Geração:** ela deixa de só separar ou prever e passa a **criar**.

### Características principais
- **Saídas originais.** A saída não é conhecida de antemão. Ela é definida no momento em que você envia a entrada (o prompt). O ChatGPT "não sabia" a resposta até você perguntar.
- Saídas em vários formatos: **texto, imagem, som** etc.
- Treinada com **muitos dados, sem necessidade de rótulos explícitos**.
- Pode ser supervisionada ou não. O comum é aprender por **tentativa e erro, como uma criança**: o modelo roda e o aprendizado é **reforçado** como positivo ou negativo, criando algo parecido com "sinapses" que ligam os caminhos e dados que fazem mais sentido.
- Lida com **contexto longo e mantém coerência** graças à arquitetura **Transformer**.

> 📌 **Guarde o nome Transformer.** Segundo o professor, é "o segredo do sucesso" das IAs generativas e vai aparecer muito ao longo do curso.

### Usos típicos
- Criação de conteúdo original (vídeos, posts para redes sociais, apresentações, materiais de apoio, orçamentos)
- Geração de imagens e escrita automatizada
- Geração de código. Ferramentas citadas como mais promissoras no uso corporativo: **Manus** e **Devin**
- **Tradução automática sofisticada**, inclusive em tempo real, já embarcada em dispositivos vestíveis (óculos do Google e da Meta, anéis inteligentes)

---

## 3. A analogia da aula

| IA tradicional | IA generativa |
|---|---|
| 🎓 **Aluno fazendo prova de múltipla escolha**: escolhe a melhor resposta entre opções que já existem, com base no que aprendeu. As saídas possíveis já são conhecidas. | ✍️ **Escritor que leu muitos livros**: escreve uma história nova, com começo, meio e fim originais, sem copiar nenhuma anterior. Só depois de absorver o conhecimento ele decide para onde ir. |

---

## 4. Quadro comparativo

| | IA tradicional | IA generativa |
|---|---|---|
| **Objetivo** | Prever, classificar, decidir | Criar conteúdo novo |
| **Dados de treino** | Rotulados e consistentes | Muito volume, sem rótulos explícitos |
| **Saída** | Conhecida e pré-definida (ex.: vive/morre) | Original, definida na hora pela entrada |
| **Aprendizado** | Supervisionado | Supervisionado ou não, com reforço por tentativa e erro |
| **Exemplos** | Antifraude, filtro de spam, recomendação | ChatGPT, geradores de imagem/vídeo, Devin |
| **Limitação** | Só generaliza o que já aprendeu | (próximas aulas) |

---

## 🎯 Para levar da aula

1. A IA tradicional é **supervisionada**: entrada e saída rotuladas, e o objetivo é **prever** (exemplo do Titanic).
2. A qualidade dos **rótulos** define a qualidade do modelo tradicional. Rótulo errado gera aprendizado errado.
3. A IA generativa aprende os **padrões internos** dos dados e **gera** exemplos novos que seguem as mesmas regras.
4. **Transformer** é a peça-chave para lidar com contexto longo e coerência. Vai aparecer muito no curso.
5. Analogia para lembrar: **aluno de múltipla escolha × escritor**.
