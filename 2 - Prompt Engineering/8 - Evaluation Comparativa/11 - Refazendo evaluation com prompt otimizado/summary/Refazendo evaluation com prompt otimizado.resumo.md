# Refazendo evaluation com prompt otimizado — resumo

Aula prática: o professor altera o prompt A e roda de novo o mesmo experimento pairwise da aula anterior, em que A tinha vencido B por 5,5 a 4,5.

## O que muda

- **Antes:** o prompt A era o `Security Expert V1`, focado só em segurança; o B, só em performance.
- **Agora:** com um update, o A vira o `Security Expert V2`, que verifica vulnerabilidades de segurança e também problemas de performance.
- O professor não criou um prompt novo: alterou o que já estava no LangSmith. Na tela do prompt aparecem dois commits, e dá para ver a versão anterior e a atual.
- **Hipótese:** em tese, o A deve vencer com uma vantagem ainda maior.

## O que fazer

Rodar exatamente o mesmo script, já que só o prompt mudou.

## O que observar

Em pairwise experiments, passam a existir quatro experimentos, e a nova comparação mostra o A vencendo por 8 a 2, contra o 5,5 a 4,5 anterior, que estava muito parecido.

## O que isso mostra

Para o professor, a melhor forma de comparar prompts é colocá-los lado a lado, com a mesma entrada. Mas há outros aspectos a verificar: quantos tokens o prompt gastou, quanto custou tudo e se a melhoria valeu a pena financeiramente. Às vezes, um prompt menos preciso resolve o problema e sai bem mais barato.
