# Resposta simples sem expansao na prtica

Agora quero mostrar algumas coisas na prática para você entender a ideia principal. Tenho três arquivos, mas na realidade são dois exemplos que quero trazer. Um é sobre o loop iterativo para obter uma resposta mais completa. O segundo exemplo é sobre como enriquecer uma pergunta ampla ou mal formulada, transformando-a em uma pergunta mais completa.

O Iter-RetGen tem como objetivo trazer uma resposta mais completa. O Query Enrichment tem como objetivo trazer uma pergunta mais completa. São dois objetivos completamente diferentes: um gera respostas completas a partir de perguntas vagas; o outro melhora as próprias perguntas.

Vou explicar o que fiz. Tenho um exemplo chamado "No Expansion". Basicamente, peguei um modelo GPT-4.0 (apesar de já existirem versões mais recentes) e configurei uma temperatura um pouco mais alta para ele ser mais criativo. Utilizei um prompt genérico: "Você é um assistente na área de tecnologia. Responda à seguinte questão." Criei uma chain que envia o prompt para o LLM e obtém a resposta final.

A pergunta utilizada foi: "Explain about LangChain and LangGraph". Vou executar este exemplo com "python no_expansion.py". Aguardamos um pouco, pois não estou usando streaming.

O GPT-4.0 traz informações interessantes: LangChain e LangGraph são ferramentas para facilitar o desenvolvimento, com LangChain tendo certos aspectos e LangGraph outros. Ele fornece um resumo.

Porém, dependendo da situação, poderíamos querer mais detalhes. Às vezes, estamos buscando um documento com nuances maiores para realizar uma busca mais aprofundada. O que recebemos aqui é basicamente o conteúdo de uma resposta, que poderia ser cruzado com nosso banco de dados ou servir como resposta final para o usuário, que foi o caso.

No próximo vídeo, mostrarei a utilização desses fluxos interativos para enriquecer esse tipo de resposta, e começaremos a ver as diferenças de como isso funciona.
