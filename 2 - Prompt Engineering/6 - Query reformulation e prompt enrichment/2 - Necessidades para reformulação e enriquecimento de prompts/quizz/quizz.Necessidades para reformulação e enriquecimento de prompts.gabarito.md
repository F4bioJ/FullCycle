# Gabarito — Necessidades para reformulação e enriquecimento de prompts

## 1. Consulta curta "Docker e Kubernetes"
**Correta: C**
**Por quê:** É o caso da consulta vaga ou ambígua. No exemplo "Python e LangChain", o professor infere o que o usuário quer saber e reescreve como "Crie um guia completo... do básico ao avançado".
- **A:** A aula defende justamente interceptar e reformular a pergunta. Repassar o texto como veio mantém o resultado incompleto.
- **B:** Corrigir a ortografia e expandir sinônimos é a reformulação para busca semântica em banco de dados. Não resolve a falta de intenção clara.
- **D:** Alinhar o formato é outra necessidade. Pedir JSON não diz ao modelo o que o usuário quer saber.
**Conceito:** consulta vaga — inferir a intenção do usuário

## 2. Por que incluir "REST" na reformulação
**Correta: A**
**Por quê:** O professor explica que citou REST porque é possível fazer APIs em outros protocolos. Sem o protocolo, a pergunta continua genérica.
- **B:** A aula não diz que o Gin exige isso. O framework foi citado por ser muito comum, para direcionar a resposta.
- **C:** Essa é a razão de incluir "CRUD" (a API terá todos os endpoints), não "REST".
- **D:** O risco de alucinação foi tratado no caso da premissa falsa, e não tem relação com citar o protocolo.
**Conceito:** falta de contexto — cada acréscimo tira uma ambiguidade

## 3. "O que é melhor, Go ou Python?"
**Correta: D**
**Por quê:** É o clássico "depende": a resposta depende do contexto por trás da pergunta. Quando o usuário não traz esse contexto, o modelo não consegue ser assertivo.
- **A:** Não há premissa falsa. O exemplo de premissa falsa é "quem criou Python em 2012?".
- **B:** As linguagens estão claras. O que falta é para que serão usadas.
- **C:** Definir o formato é uma necessidade diferente e não resolve a falta de contexto para comparar.
**Conceito:** falta de contexto relevante

## 4. Saída consumida por outro sistema
**Correta: B**
**Por quê:** O professor diz que, embora Markdown seja muito usado, JSON e as notações de integração entre sistemas vão ser essenciais, porque nem todo sistema que não trabalha com IA entende Markdown, mas JSON ele consegue processar.
- **A:** Ler texto não é o mesmo que processar dados estruturados. É exatamente o limite do Markdown que o professor aponta.
- **C:** A aula mostra que a reformulação pode, sim, definir o formato. Esse é o caso "alinhar formato".
- **D:** Organizar módulo a módulo foi o exemplo para um leitor humano. Continua sendo Markdown, que o sistema sem IA pode não entender.
**Conceito:** alinhar formato — JSON para integração

## 5. "Quem criou o Kubernetes em 1995?"
**Correta: C**
**Por quê:** A pergunta traz uma premissa falsa (o ano), que pode confundir o modelo e fazê-lo alucinar. A aula recomenda reescrever de forma específica, como em "quem foi o criador da linguagem Python e em que ano ela foi lançada?", para que o ano seja respondido e não aceito como dado.
- **A:** Sinônimos e termos em inglês servem para a busca semântica e mantêm a premissa errada na pergunta.
- **B:** A aula diz o contrário: a pergunta com premissa errada "dá um nó" na IA e pode fazê-la alucinar.
- **D:** O formato não impede a alucinação. A premissa falsa continua na pergunta.
**Conceito:** minimizar risco de resposta incorreta — remover premissa falsa

## 6. Por que sinônimos e termos em inglês ajudam na busca
**Correta: A**
**Por quê:** A busca no banco de dados procura relevância nas palavras da pergunta. Mais termos relacionados (sinônimos, inglês e português, ortografia corrigida) trazem documentos mais relevantes.
- **B:** A reformulação não muda o treinamento do modelo. A busca existe justamente porque a informação não está no treinamento.
- **C:** A aula não fala em economizar tokens com termos em inglês. Os termos são acrescentados, não trocados.
- **D:** Os sinônimos deixam a pergunta mais longa e mais rica, e não mais curta.
**Conceito:** busca semântica — riqueza de termos

## 7. Afirmação INCORRETA sobre reformulação para busca semântica
**Correta: D**
**Por quê:** A aula diz o oposto: quanto mais informação e riqueza de palavras a pergunta tiver, melhores os documentos que a busca traz. Enxugar a pergunta reduz as chances de encontrar documentos relevantes.
- **A:** Correta. Corrigir a ortografia ("serto" → "certo") é uma das ações citadas.
- **B:** Correta. O professor cita usar termos em inglês junto dos mesmos termos em português.
- **C:** Correta. Na reformulação do exemplo em Go, citar bugs, performance e segurança foi o que enriqueceu a pergunta.
**Conceito:** busca semântica — mais termos, mais relevância

## 8. Reformulação "para quem nunca teve contato... comparativo com TypeScript"
**Correta: B**
**Por quê:** O professor explica que a reformulação só é possível porque o sistema tem informações do usuário: sabe que ele nunca trabalhou com Python e que a especialidade dele é TypeScript.
- **A:** Indexar código para busca não é o que a personalização da aula exige. O que importa é conhecer o perfil do usuário.
- **C:** A reformulação é feita pelo sistema, sem pedir nada ao usuário.
- **D:** O comparativo é pedido no prompt. Não depende de um treinamento especial.
**Conceito:** personalização — conhecer o perfil do usuário

## 9. Personalização no ChatGPT
**Correta: A**
**Por quê:** A aula diz que a IA personaliza a resposta com informações que guarda na memória de longo prazo, reformulando a pergunta para que a resposta use a linguagem que você mais pergunta, a sua cidade e até o seu nome.
- **B:** A aula não fala em retreinar o modelo com as conversas. Ela atribui a personalização à memória de longo prazo.
- **C:** A aula não atribui a personalização a dados técnicos do acesso, como IP ou navegador. Ela a atribui ao que a IA guarda na memória de longo prazo sobre o usuário, o que explica também a linguagem que você mais pergunta e o seu nome.
- **D:** A busca semântica traria o que é relevante para a pergunta, e não dados sobre o perfil do usuário.
**Conceito:** personalização com memória de longo prazo

## 10. "meu app trava ao logar" reescrito antes de consultar a base
**Correta: D**
**Por quê:** A reformulação acontece antes de consultar uma base de artigos e acrescenta termos e sinônimos, em português e inglês ("crash/freeze", "sign in"). É o caso da busca semântica: mais termos aumentam a chance de trazer artigos relevantes.
- **A:** Nada na reformulação usa dados do perfil ou do histórico do usuário.
- **B:** A pergunta original não traz premissa falsa. Ela só é informal e curta.
- **C:** "Causas e soluções" não define um formato de saída para outro sistema. O ponto da reescrita são os termos para a busca.
**Conceito:** identificar a necessidade — busca semântica
