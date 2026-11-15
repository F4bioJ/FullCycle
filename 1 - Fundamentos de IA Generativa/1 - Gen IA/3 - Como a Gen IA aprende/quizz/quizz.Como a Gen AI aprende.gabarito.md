# Gabarito — Como a Gen AI aprende

## 1. O que o cartógrafo faz de generativo
**Correta: C**
**Por quê:** O cartógrafo "já sabe como é que a banda toca, quais são as regras" do terreno e, com elas, cria "um mapa original de uma nova cidade ilusória". O generativo está em aplicar regras aprendidas a algo que não existe.
- **A:** Escolher entre mapas conhecidos é selecionar uma saída já existente, o comportamento da IA tradicional.
- **B:** Juntar recortes é cópia. A aula fala em desenhar coisas novas a partir das regras, não em colar pedaços.
- **D:** Marcar com precisão o que já existe ("aqui é o Everest") é justamente o que o professor contrapõe à capacidade generativa.
**Conceito:** analogia do cartógrafo (regras aprendidas x cópia)

## 2. A ressalva sobre inspiração
**Correta: A**
**Por quê:** Logo depois de falar em inspiração, o professor emenda: "lógico que para inspirar, você tem que em determinado momento ver uma base de probabilidade de repetição". A criação não dispensa a estatística, apoia-se nela.
- **B:** A aula não separa texto de imagem nesse ponto. A ideia vale para os dois.
- **C:** O professor não diz que a saída reaproveita trechos. Ele fala em "ir atrás de algo novo".
- **D:** Conhecer de antemão a saída esperada é a marca da IA tradicional, que a aula contrasta com a generativa.
**Conceito:** inspiração apoiada em probabilidade

## 3. O exemplo de "encadeamento" e "cadeia"
**Correta: D**
**Por quê:** O exemplo aparece para explicar a capacidade "quase intuitiva" de saber o que faz sentido junto: "é muito importante você conseguir prever como essas palavras vão se conectar". O sentido sai da conexão com o conjunto.
- **A:** A aula liga alucinação a se perder na geração e a pouco treino, não a palavras ambíguas.
- **B:** A distância entre vetores aparece no fim da aula, com "rei" e "cachorro", e trata de palavras de contextos diferentes, não de palavras parecidas.
- **C:** A generativa não depende de rótulos explícitos. É o contexto que resolve a ambiguidade.
**Conceito:** contexto define o sentido

## 4. Com base em quê as conexões são montadas
**Correta: B**
**Por quê:** "Essas conexões neurais são montadas com base no contexto de entrada e com base no que ela já tem de treinamento inicial." Os dois juntos.
- **A:** Meia-verdade: o treino conta, mas a entrada não só dispara um caminho pronto, ela participa da montagem.
- **C:** Meia-verdade no sentido oposto: a entrada conta, mas o modelo não aprende o tema na hora, ele usa o que foi calibrado no treino.
- **D:** Categorias que indicam a saída esperada são o mecanismo da IA tradicional descrito no início da aula.
**Conceito:** entrada + treinamento inicial

## 5. Como é a saída generativa
**Correta: A**
**Por quê:** O professor diz que o modelo produz "exemplos coerentes com o que foi aprendido, mas diferentes do que foi aprendido". Novo, porém dentro das regras.
- **B:** Acerta o "diferente", mas a saída não é livre das regras: é a coerência com elas que evita o absurdo.
- **C:** Reproduzir os exemplos mais frequentes seria repetição, e a aula fala em caminhos "que até então a gente não conhecia".
- **D:** Se estrutura e conteúdo fossem iguais, não haveria nada de novo.
**Conceito:** novo, mas coerente com o aprendido

## 6. O que determina cada palavra no "livro parecido"
**Correta: D**
**Por quê:** O modelo pega "o estilo e as regras" dos livros e, além disso, "as palavras que ele vai construindo vão gerando a próxima palavra". As duas fontes atuam em cada escolha.
- **A:** Meia-verdade: o estilo conta, mas não fica tudo fixado antes. O que já foi escrito muda a escolha seguinte.
- **B:** O professor diz o oposto na analogia do escritor: ele não escreve "já sabendo o que tem lá no fim".
- **C:** Olhar só a última palavra é o bigrama, assunto da aula 6. Aqui a escolha considera as palavras anteriores, no plural.
**Conceito:** modelo autorregressivo

## 7. Como o professor descreve a própria "alucinação"
**Correta: B**
**Por quê:** "Fui pra esse caminho aqui que até tinha alguma relação, mas no momento eu me perdi" e "comecei a falar de um contexto que às vezes eu não soube ligar de volta".
- **A:** Inventar fatos é o sentido popular de alucinação, mas não é a situação que o professor descreve.
- **C:** Ele diz o contrário: "eu até sei qual era a ideia inicial e eu me perdi". A ideia inicial não foi esquecida, faltou o caminho de volta.
- **D:** Repetição em looping é o sintoma do bigrama (aula 6), não o desta analogia.
**Conceito:** alucinação como desvio na geração

## 8. A ação do self-attention em texto longo
**Correta: C**
**Por quê:** O mecanismo "mantém o foco" nas "relações importantes dentro de uma sequência longa", como lembrar do personagem do capítulo 1 "por mais que tenha coisas desconexas ao longo do caminho".
- **A:** A ideia é justamente não tratar tudo igual: manter a atenção "naquilo que é crucial".
- **B:** A aula não descreve releitura do texto. Fala em manter a conexão com o que importa.
- **D:** Aproximar vetores é assunto de embeddings, o tópico seguinte da aula.
**Conceito:** self-attention (foco seletivo)

## 9. Por que "linguagem universal"
**Correta: D**
**Por quê:** "Ela não tá olhando português ou inglês, ela tá olhando por trás cálculo matemático." Palavra, imagem e código viram vetor, e é sobre o vetor que o modelo trabalha.
- **A:** A aula não diz isso, e é falso: cada modelo tem o próprio espaço de vetores.
- **B:** "Universal" se refere ao formato numérico comum, não a traduzir entre idiomas.
- **C:** A aula não afirma isso. O ponto é que tudo vira número, não que o vetor seja fixo.
**Conceito:** embeddings como representação numérica

## 10. Por que "rei" e "cachorro" ficam distantes
**Correta: B**
**Por quê:** "Normalmente rei e cachorro não estão no mesmo contexto. Podem estar, mas normalmente não estão. A probabilidade de estar é muito baixa, então no vetor você vai deixar esses caras distantes."
- **A:** Distância aqui não é oposição de sentido. É falta de contexto em comum.
- **C:** Não há catalogação prévia: a distância sai dos contextos em que as palavras aparecem.
- **D:** O professor ressalva que podem aparecer juntos (os corgis da rainha). É raro, não inexistente.
**Conceito:** proximidade vetorial = contexto em comum
