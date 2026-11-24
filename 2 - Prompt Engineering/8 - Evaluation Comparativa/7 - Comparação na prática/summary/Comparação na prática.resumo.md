# Comparação na prática — resumo

Aula prática: o professor roda no LangSmith os três prompts de code review (conservador, agressivo e balanceado) sobre o mesmo dataset de 10 exemplos e compara precision, recall e F1 de cada um.

## O script do experimento

São três arquivos com o mesmo código; muda só o prompt carregado. Cada script:

- carrega o prompt e usa uma função compartilhada (pacote `shared`) que junta prompt, inputs e conexão com o LLM, com o cliente da OpenAI "embrulhado" pelo LangSmith, e indica a chave do JSON a ser lida na resposta;
- extrai do ground truth os findings esperados (tipo e severidade) com `extractExpected`, que alimenta a função de precision, recall e F1 vista na aula anterior;
- chama `evaluate`, com um prefixo para o experimento e concorrência para rodar mais rápido.

## Summary Evaluator

- **O que observar:** o campo Evaluators aparece em branco.
- **O que mostra:** aqui se usa um **Summary Evaluator**, um dos tipos de evaluator já vistos (junto com LLM as a Judge, avaliação por código e pairwise): ele pega vários registros e agrega uma métrica só. Os números do experimento resumem os 10 exemplos, sem precisar abrir registro por registro.

## Experimento 1: conservador

- **O que observar:** precision 1, recall 0,13 e F1 0,22.
- **O que mostra:** o prompt foi muito seletivo: tudo o que apontou estava certo, mas deixou passar a maior parte dos problemas esperados. (Na fala, o professor descreve esse caso como "pegou quase todos os bugs, mas trouxe muito bug que não era bug", que é o retrato de recall alto e precision baixa; os números indicam o contrário.)

## Experimento 2: agressivo

- **O que observar:** com o mesmo código, só o prompt trocado, a precision cai muito (na comparação final, o professor fala em 0,1) e o recall sobe (0,38); o F1 continua baixo.
- **O que mostra:** é o perfil inverso do conservador. Os dois ficam com F1 baixo, mas com prioridades contrárias: um favorece a precision, o outro o recall.

## Experimento 3: balanceado

- **O que observar:** precision 0,64 e recall 0,29; o F1 foi praticamente o dobro do F1 dos outros dois.
- **O que mostra:** o prompt equilibrou melhor as duas métricas, ainda com a precision bem acima do recall. É esse equilíbrio que o F1 premia.

## Cuidados com o resultado

O professor lembra que, com IA, o resultado depende do momento, do modelo e de tudo o que se está fazendo: em outras execuções, os números saíram diferentes, às vezes mais parecidos entre si. Por isso, recomenda:

- repetir o mesmo experimento várias vezes, para ter um resultado mais apurado;
- usar um dataset grande, que permite explorar muito mais opções do que os 10 exemplos da demonstração.

O objetivo da aula era mostrar, com três prompts, como o prompt muda claramente a precision e o recall e, com isso, o F1.
