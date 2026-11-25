# Orquestração com script deterministico — resumo

O professor continua no projeto de granularidade da aula anterior, em que a skill orquestradora `implement feature` delegava cada camada do código a uma subskill. Agora ele acrescenta um **script determinístico** às skills, para que elas consigam executar uma **autocorreção**.

## O fluxo das camadas

O ponto de partida é o caminho do dado na arquitetura do projeto. A rota chama o caso de uso, o `CreateService`. Dentro do serviço estão o domínio, o repositório de produto e as dependências: o serviço acessa o domínio, cria o que precisa (no exemplo, um novo produto) e manda o resultado para o repositório. Ou seja, o serviço orquestra as camadas de domínio e de repositório.

Existe uma sequência e um padrão claros de entrada e saída do dado, e o caminho de volta é o mesmo. Por isso, diz o professor, o domínio nunca deve aparecer dentro de uma rota: isso seria uma quebra arquitetural.

## Por que uma trava determinística

O problema, quando se trabalha com inteligência artificial, é que ela não é determinística, e a pipeline da aula anterior foi feita só com Markdown e inferência. A proposta agora é adicionar uma **trava determinística via script, no nível arquitetural**, para manter esse fluxo correto: o script garante que a quebra não aconteça e, se acontecer, dispara uma proposta de *self-correction*.

## O pedido do script check-layers

Numa nova sessão do Claude Code, o professor pede um script `scripts/check-layers` que:

- será usado via **ESLint**: o modelo verifica se o projeto já tem o ESLint, instala e configura se preciso para receber regras customizadas, e cria um comando em `scripts` no `package.json`;
- **resolve a camada de cada arquivo pelo path** (com os paths especificados, como repository, adapter e shared), resolve os imports relativos e **barra as fronteiras proibidas**, definidas no próprio script.

Ele não escreve todas as regras: demonstra a principal e deixa o resto para cada um acrescentar. A regra diz que:

- uma rota não pode importar nada de `src/domain`;
- o domínio não importa nada para fora, exceto a dependência Zod;
- uma rota não importa repositório;
- de forma geral, as dependências **sempre apontam para dentro**, na ideia da clean architecture.

Quando houver violação, o script sai com **exit 2** e mostra **um bloco por violação** com a regra, o arquivo e a linha, o import ofensor, o porquê da violação e como consertar. Isso serve para **um agente se autocorrigir**.

## O gate de arquitetura na skill implement feature

No mesmo pedido, ele manda editar o `skill.md` da `implement feature` com um novo passo 5, o **gate de arquitetura**, que deve ser rodado sempre, ao final da pipeline, com autocorreção:

1. depois que todas as camadas forem implementadas e passarem nos testes, rodar via Bash o `npm run` do check layers;
2. se houver erro (na saída de erro), autocorrigir cada violação, **delegando para a subskill da camada ofensora**;
3. repetir o processo. O professor pensa em um *max retry*, mas, para o exemplo, prefere repetir até o exit ser zero e, se as tentativas passarem de 10, consultar o usuário com a tool `AskUserQuestion`;
4. a feature só está pronta com o **gate verde**.

## O resultado

A execução levou quase oito minutos. O script foi criado e resolve as camadas pelo path, o ESLint foi configurado com as regras customizadas, e a skill ganhou o passo 5, um **loop de autocorreção**. (O Claude Code ainda sugeriu um `npm audit fix`, que o professor deixa para depois.)

## A regra no CLAUDE.md e no AGENTS.md

Em seguida, ele pede para adicionar o projeto de granularidade aos arquivos `CLAUDE.md` e `AGENTS.md`. O `CLAUDE.md` é específico do Claude Code, mas é possível usar o `AGENTS.md`, e também deixar o `AGENTS.md` só como referência ao `CLAUDE.md`, que ele lê sem problema. Como o professor já tinha dito, esses arquivos são **obrigatoriamente lidos a todo momento**.

A regra criada diz que, ao concluir qualquer feature ou ao terminar de editar qualquer arquivo dentro de `src`, o **último passo obrigatório**, antes de dizer se a tarefa foi realmente finalizada, é rodar o gate determinístico (o check layers, via Bash). O `AGENTS.md` saiu como um link para o `CLAUDE.md`.

Ele pede ainda que o `CLAUDE.md` traga os comandos da aplicação e uma breve informação sobre a arquitetura, o que, segundo ele, ajuda a gastar menos tokens. A dica dele é sempre ter esses arquivos, mesmo que, num ambiente controlado como o da demonstração, não fossem necessários.

## Exit 0 e exit 2

O professor esclarece os dois códigos:

| Código | Significado |
|---|---|
| exit 0 | Deu tudo certo, e a tarefa pode ser classificada como pronta |
| exit 2 | Gate vermelho: algo deu errado, e é preciso trabalhar na autocorreção |

## O teste do gate

Para testar, ele não roda a pipeline completa, só o nível de edição: pede ao próprio Claude que faça, em algum arquivo de `src`, uma edição fora das barreiras arquiteturais impostas.

- **O comportamento:** o gate detectou duas violações e devolveu exit 2. Cada bloco trouxe o que foi pedido (as camadas e o local), e o agente passou automaticamente para a autocorreção, até concluir o teste.
- **Como conferir:** para tirar a dúvida se a LLM rodou mesmo o script, o professor abre o registro dos comandos de shell. Lá aparece o check layers agora com exit 0 e, mais acima, a execução automática logo depois da edição, com o que foi passado à autocorreção: o fluxo das camadas, o tipo de erro, a regra, o arquivo, o import, a direção, o porquê, como consertar e a camada afetada com a sua subskill. As violações estavam na rota, porque foram programadas.
- **A conclusão:** a própria LLM disparou o processo de autocorreção.

## Um começo

O professor reconhece que o exemplo é sucinto: o ideal é continuar usando o projeto e gerar novas features para validar integralmente se tudo ocorre como deveria. Para ele, a demonstração é um excelente começo para criar coisas novas.
