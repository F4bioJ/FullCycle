# Criando prompt via interface

## O que a demonstração mostra

Depois de criar a conta, o professor entra na interface do LangSmith. A interface pode mudar, mas os conceitos permanecem. A plataforma é muito usada para observabilidade e evaluation; a aula, porém, foca só na parte de prompts.

## Preparação: API key

Para reproduzir os exemplos, crie uma chave de API (em Settings > API Keys) e coloque-a nas variáveis de ambiente.

## O experimento

1. **Criar um prompt:** na área de prompts, ainda vazia, escolher entre o formato de chat e o de instruções.
   - **Chat:** há o system prompt, a mensagem do humano, a opção de adicionar mensagens, de informar as ferramentas disponíveis e de escolher o esquema de output.
   - **Instruções:** há um template com as instruções e as variáveis de entrada. É um StringPromptTemplate, que não é baseado em conversa.
2. **Testar no playground:** escrever o template "Quanto é x mais y?", preencher os inputs com 2 e 3 e rodar. Para rodar em streaming, foi preciso trocar o modelo para o GPT-4o mini. A resposta: 2 + 3 = 5.
3. **Observar a execução:** a ferramenta mostra o tempo, se a execução terminou, os tokens de input e de output e o custo do teste. Também dá para fazer anotações. Há ainda uma área de evaluation, onde se sobem datasets, se rodam vários prompts e se veem os resultados.
4. **Salvar:** ao salvar, a ferramenta pede um nome (no exemplo, "soma"). O prompt aparece na lista de prompts e no hub, privado, com o tipo (StringPromptTemplate), a data e o último commit.

## O que isso mostra

Quem mexe nesses prompts muitas vezes não é o desenvolvedor, e sim alguém de produto ou de outra área, o que será cada vez mais comum. A plataforma dá essa flexibilidade, sem precisar dar acesso ao Git a um profissional que não tem esse foco. Isso não obriga ninguém a usá-la: na maioria dos projetos, a organização em pastas mostrada antes resolve. O próximo vídeo integra a aplicação com o LangSmith.
