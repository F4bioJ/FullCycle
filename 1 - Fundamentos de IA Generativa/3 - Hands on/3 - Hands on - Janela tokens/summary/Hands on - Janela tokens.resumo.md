# Hands on - Janela tokens — resumo

## O que a aula testa

O alvo é o **máximo de tokens**, o controle que limita quanto texto o modelo gera. Antes de chegar nele, o professor passeia pelo Hugging Face e tenta o teste em um Space.

## O passeio pelo Hugging Face

Nada disso exige conta paga. Para cada área, a orientação é onde vale gastar tempo agora:

- **Pricing:** planos Pro, de grupo e Enterprise. Não é necessário neste momento.
- **Docs:** documentação de bibliotecas (Transformers, difusores, conjuntos de dados, tokenização) e guias, como implantar na AWS. É mais avançado: consulte quando surgir uma necessidade.
- **Comunidade, artigos:** funciona como um grande blog e, para o professor, é onde vale investir mais tempo.
- **Comunidade, parte social:** seguir pessoas, ler postagens e trocar mensagens.
- **Daily Papers:** artigos mais acadêmicos, com filtro por período. É mais técnico e serve para acompanhar a pesquisa.
- **Spaces:** o que a comunidade está testando, por tipo de tarefa (imagem, vídeo, texto, tradução, fala, 3D).
- **Datasets e Models:** conjuntos de dados e modelos. A página de um modelo traz descrição, downloads e o código para copiar. A aula não aprofunda nessas áreas.

Para navegar, ele prefere entrar por `/welcome`, que reúne as mesmas áreas de forma mais organizada que o menu do topo.

## Testar em um Space

**O que testar:** um Space de geração de texto com DeepSeek, publicado por outra pessoa, que expõe temperatura, máximo de tokens e top-p em "Additional Inputs".

**O que aconteceu:** deu erro, mesmo baixando o número de tokens, e um segundo Space também estava fora do ar. O professor voltou ao Playground.

**O que isso mostra:** Spaces servem para explorar, mas dependem de quem os publicou. Podem estar fora do ar e muitas vezes têm descrições ruins, por isso a dica dele é descrever bem o seu, se criar um. Criar Spaces fica para o módulo mais avançado.

## O experimento: reduzir o máximo de tokens

**Como montar:** no Playground, com DeepSeek R1, temperatura 0,5 e top-p em 1, o prompt é sempre o mesmo: explicar um buraco negro de forma simplificada, com abstrações. O campo de máximo de tokens fica fechado até você clicar nele para definir um valor. Só esse valor muda entre as rodadas.

| Máximo de tokens | Resultado |
|---|---|
| Aberto | Texto muito longo |
| Intermediário | Texto ainda grande e completo |
| Cerca de 500 (ele cita 500 e 512) | Resposta cortada no meio do caminho |

**O que observar:** se a resposta termina, não só o tamanho dela. Um fim abrupto indica um corte pela configuração, não falta de conhecimento do modelo. Essa distinção evita culpar o modelo ao depurar uma aplicação.

**O que isso mostra:** a temperatura muda como a resposta se abre; o máximo de tokens muda até onde ela chega. O professor às vezes diz "máximo de palavras", mas o limite é em tokens, que nem sempre são palavras inteiras. A "janela" fechada aqui é a da saída.

## Top-p no teste

Top-p restringe a escolha do próximo token ao menor conjunto de candidatos cuja probabilidade acumulada atinge um limiar, cortando a cauda menos provável. Neste teste ele fica aberto em 1, para não atrapalhar a observação do corte. O professor deixa o assunto para outro vídeo.

## Por que limitar, e o que fazer quando corta

Gerar mais tokens consome mais processamento e custa mais. Por isso, uma aplicação pode limitar a saída para controlar o gasto, além de reduzir a latência. O custo disso é o que o experimento mostrou: com limite baixo demais, a resposta chega incompleta.

A saída indicada não é só aumentar o limite, e sim **ajustar o prompt** para caber nele, pedindo menos itens, menos detalhes ou um formato mais compacto.

## O que fazer por conta própria

1. Fixe o prompt, o modelo, a temperatura e o top-p.
2. Rode com o máximo de tokens aberto, depois com um valor intermediário e depois com cerca de 500.
3. Compare onde cada resposta termina.
