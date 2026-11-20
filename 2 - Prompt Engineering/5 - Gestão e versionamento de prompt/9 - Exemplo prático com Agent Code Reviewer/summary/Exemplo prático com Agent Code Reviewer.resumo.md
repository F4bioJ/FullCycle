# Exemplo prático com Agent Code Reviewer

## O que a demonstração mostra

Depois de organizar os arquivos YAML dos prompts, o professor mostra como usar essa estrutura no código, com um agente de code review.

## `prompt_registry.py`

O arquivo `prompt_registry.py` carrega o `registry.yaml` e devolve o caminho e os metadados de cada prompt. Ele também ajuda a estruturar como a aplicação trabalha com as variáveis do prompt. Para isso, há uma classe clara para a request, que poderia ser uma dataclass ou um modelo Pydantic. Segundo o professor, ter um modelo de dados do prompt, e também de como pegar os resultados da LLM, vai ser cada vez mais importante.

## O passo a passo do agente

1. **Request tipada:** uma dataclass com todas as inputs que o prompt precisa: o `diff` (por ser um code review), a linguagem (Python), as regras do repositório, o nível de segurança e o foco da revisão.
2. **Achar o prompt:** `registry.get_prompt(<id do prompt>)` devolve as informações do prompt.
3. **Carregar o template:** o `load_prompt` do LangChain pega o caminho do YAML, faz o parsing e gera um `PromptTemplate` do LangChain.
4. **Modelo:** a LLM é instanciada. No exemplo é o GPT-4, mas o modelo não importa.
5. **Chain:** o prompt template, depois a LLM, depois um parser que transforma a resposta em output.
6. **Invoke:** a request é convertida em dicionário, e as variáveis dela são passadas ao `invoke`.

## O experimento

Rodar o script do agente de code reviewer (`python src/agent/code_reviewer…`). Ele pega o caminho do prompt no registry, carrega o template, preenche as variáveis da request, chama a LLM e devolve o resultado do code review.

## O que isso mostra

Com o registry e o template em YAML, o código não carrega o texto do prompt: ele só busca o prompt pelo ID e passa as variáveis. É a estrutura dos vídeos anteriores funcionando de ponta a ponta numa aplicação.
