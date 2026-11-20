# Executando testes automatizados

## O que os testes querem garantir

Prompt é software, então precisa de testes mínimos, "entre aspas" de unidade (testes usando uma LLM também podem ajudar). O objetivo não é verificar a qualidade, e sim a consistência entre o que entra e o que sai do prompt. De quebra, os testes validam o registry.

## Os testes da suíte (PyTest)

O professor mostra um arquivo de testes em Python, com PyTest, que roda nesta ordem:

1. **Sintaxe do registry:** carrega o YAML do registry e verifica se ele é válido.
2. **YAML dos prompts:** todos os arquivos de prompt precisam ter YAML válido.
3. **Caminhos:** cada arquivo apontado no registry precisa existir de fato na pasta de prompts.
4. **Estrutura do prompt:** carrega todos os prompts e confere se cada um tem `id`, `version`, `template` e `input_variables`. Se faltar algum, o teste dá erro.
5. **Consistência das variáveis:** as variáveis declaradas na input precisam bater com as usadas no template, que em Python são substituídas como f-string. O teste aponta variável que falta, com nome errado ou declarada sem uso. Segundo o professor, isso é mais comum do que parece e pode ser uma "catástrofe": uma letra errada faz o prompt deixar de levar à LLM uma informação importante.
6. **Casos de teste:** para cada caso do `prompt.tests.yml`, pega o prompt e as variáveis do caso, renderiza o template com elas e verifica se o resultado contém o que está no `expectContains`.

"Compilar o prompt" é isso: pegar a input de um caso de teste, fazer o parsing do template e conferir se as informações esperadas estão lá. Não garante tudo, mas minimiza erros bobos.

## O experimento

- Rodar `pytest` sobre os testes: tudo passa.
- Remover do template o uso da variável de linguagem e rodar de novo: o teste falha, avisando que há uma input declarada e não usada.
- Pôr "Wesley" no `expectContains` e rodar: o caso de teste falha, porque a palavra não aparece no prompt renderizado.

## O que isso mostra

Só de entrar na suíte de testes automatizados, essa verificação já dá "paz de espírito" de que os prompts declarados estão estruturados. Se você não organizar, rastrear e testar os prompts desde o início, vai perder o controle quando eles e as mudanças se multiplicarem. Por isso, defina o padrão no dia zero. Pode ser com arquivos, como no exemplo, ou com banco de dados: o importante é ter uma prática clara de gestão.
