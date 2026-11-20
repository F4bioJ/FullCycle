# Quizz — Prompts utilizados por projetos de IA

**Capítulo:** 5 - Gestão e versionamento de prompt · **Aula:** 5
**Base:** material da aula

---

## 1. Um dev diz que o prompt que gera testes no seu dia a dia e o prompt que classifica pedidos de reembolso dentro da aplicação merecem o mesmo cuidado, já que ambos são texto e podem errar do mesmo jeito. Pelo raciocínio da aula, o que torna o segundo mais arriscado?
- A) Ele roda num modelo maior que o de testes, e por isso cada erro custa bem mais em tokens e latência.
- B) Ele tem inputs e metadados, e prompts com variáveis erram com mais frequência que os de texto livre.
- C) Ele muda o comportamento do sistema no ar, sem alguém acompanhando para parar e entender o erro.
- D) Ele é usado por menos pessoas que o de testes, e por isso um erro nele demora mais a ser notado.

## 2. Sobre o registry de prompts de uma aplicação, qual afirmação está INCORRETA?
- A) Ele funciona como um índice com os prompts da aplicação e as versões que serão usadas por ela.
- B) Ele precisa ficar num banco de dados, porque arquivos não permitem marcar a versão em produção.
- C) Cada entrada pode indicar se aquela versão está em produção e qual modelo o prompt utiliza.
- D) Além do prompt e da versão, ele pode guardar metadados que ajudam a organizar cada item.

## 3. Na aula 2.5.3, os prompts de uso geral ficavam num repositório central, ligados aos projetos por links simbólicos. Segundo esta aula, onde podem ficar os arquivos de prompt de uma aplicação com IA?
- A) No controle de versão do próprio projeto, indexados pelo registry da aplicação.
- B) No repositório central de uso geral, ligados à aplicação por links simbólicos.
- C) Na pasta `.prompts` da aplicação, com `.gitignore` para ficarem fora do histórico.
- D) Num repositório de prompts à parte, clonado inteiro dentro da pasta do projeto.

## 4. Uma aplicação sem agentes é organizada por subdomínios, seguindo Domain Driven Design. Como a aula orienta a categorização dos prompts dela?
- A) Criar a categoria de agentes mesmo assim, por ser o padrão que o registry usa para achar os prompts.
- B) Usar as categorias do repositório de produtividade: exploração e planejamento, implementação, utils.
- C) Agrupar os prompts pelo modelo que cada um usa, já que o modelo é o que mais muda o comportamento.
- D) Categorizar por subdomínio, com lógica clara, porque é a partir dela que o software chama os prompts.

## 5. A equipe muda o prompt de triagem: a saída deixa de ser texto livre e passa a ser JSON, e o código que consome a resposta precisa ser alterado. Com semantic versioning, que tipo de versão essa mudança pede?
- A) Patch, porque o que mudou foi o texto do prompt, e o arquivo segue no mesmo lugar do registry.
- B) Major, porque quebra o contrato esperado por quem depende da saída gerada pelo prompt.
- C) Minor, porque acrescenta um formato de saída e o objetivo central do prompt continua igual.
- D) Não pede versão nova: a versão do prompt acompanha a troca de modelo, não o formato.

## 6. Por que a aula diz que o `prompt.md`, mesmo sendo o formato mais comum, pode ser um problema numa aplicação?
- A) Porque os modelos interpretam Markdown pior que YAML, e a qualidade das respostas cai em produção.
- B) Porque arquivos Markdown não aceitam número de versão no padrão de semantic versioning.
- C) Porque facilita a leitura mas não segue um padrão, e uma aplicação precisa de padronização.
- D) Porque o LangSmith não aceita prompts em Markdown, o que impede a observabilidade da aplicação.

## 7. Uma aplicação pequena tem dois prompts simples, e nenhuma ferramenta precisa ler metadados deles. O dev pergunta se é obrigatório migrar de `prompt.md` para `prompt.yml`. O que a aula responde?
- A) Não é obrigatório: YAML ajuda quando se quer mais estrutura; sem essa necessidade, Markdown funciona.
- B) É obrigatório: sem YAML, o registry não consegue indexar os prompts nem marcar a versão em produção.
- C) É obrigatório: o teste de compilação depende de um arquivo YAML para comparar inputs e template.
- D) Não é obrigatório por enquanto; a partir de certo número de prompts, o YAML passa a ser exigido.

## 8. Os metadados de um prompt declaram as inputs `name` e `product`, mas o texto do prompt só usa `{product}`. O que o teste de compilação deve apontar?
- A) Nada: a input extra é ignorada na execução e não afeta a resposta, então o teste passa.
- B) Uma queda de qualidade da resposta, que precisa ser medida comparando versões do prompt.
- C) Uma falha se `name` for obrigatória; sendo opcional, ela pode ficar sem uso no prompt.
- D) Uma falha: ou a input `name` sobra, ou o prompt esqueceu de usá-la, e é preciso decidir.

## 9. Um prompt passou em todos os testes de compilação. O que dá para concluir?
- A) Que ele está pronto para produção, já que a compilação é o ponto mais importante da aula.
- B) Que as respostas têm qualidade, porque a compilação também confere a saída esperada.
- C) Que as inputs declaradas e o texto estão consistentes, mas nada sobre a qualidade das respostas.
- D) Que a evaluation pode ser dispensada, porque ela mede o mesmo que a compilação, de outro jeito.

## 10. Depois de uma troca de versão do prompt de pagamento, aparece uma regressão. O time precisa responder duas perguntas: qual versão está rodando agora e o que mudou nela em relação à anterior. Pela abordagem da aula, onde fica cada resposta?
- A) A versão que está rodando, no registry; o que mudou, no changelog do README do prompt.
- B) A versão que está rodando, no changelog do README; o que mudou, no número semver da versão.
- C) As duas no número semver: ele indica a versão atual e se a mudança foi major, minor ou patch.
- D) As duas nos metadados do `prompt.yml`, que trazem a versão e a descrição de cada prompt.
