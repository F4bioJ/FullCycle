# Exemplo com PR e outras considerações

## O agente de pull request

Com o code reviewer, o código da aplicação ficou limpo. O professor mostra um segundo agente que faz o mesmo para pull request. Há um modelo da request do PR, com as informações da mudança e os nomes dos arquivos (uma simulação). O código pega o caminho do prompt e manda o resultado para a LLM.

**Experimento:** rodar o agente de pull request. Ele carrega o prompt da pasta de prompts, executa e gera o pull request que se esperava.

## Todo prompt precisa de um ID único

A lição que fica: independentemente de como você gerencia os prompts, cada um precisa obrigatoriamente de um ID único, para poder ser carregado de qualquer lugar do sistema. Isso vale com registro local, banco de dados ou nuvem; o professor promete mostrar o LangSmith mais adiante. Sem uma forma clara de definir os prompts e de organizá-los no projeto, tudo vira bagunça e você perde o controle.

## ID em variável de ambiente e carga por versão

Quando quiser trocar o prompt usado, o ID pode virar uma variável de ambiente, por exemplo. O professor adianta que, nos próximos vídeos, também será possível carregar o prompt pela versão.

## O que vem a seguir

O próximo vídeo apresenta outra forma de gestão de prompts, diferente desta, mas com uma linha de raciocínio muito parecida.
