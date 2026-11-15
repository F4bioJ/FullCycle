# Conceitos básicos do ReAct — resumo

## Uma técnica que mudou o jogo

O ReAct (de *Reasoning* + *Acting*, raciocinar e agir; não é o framework JavaScript) tem uma ideia simples, mas passou a ser embutido nas próprias LLMs para que elas tomem ações a partir de raciocínio e observações. Frameworks como o LangChain têm um tipo de agente chamado ReAct por causa dessa técnica.

## O loop raciocínio → ação → observação

O modelo raciocina, toma uma ação, recebe a observação do que a ação resultou e raciocina sobre ela para decidir a próxima ação. Com ferramentas, o raciocínio vira operação: se a tarefa é pegar repositórios públicos e há uma ferramenta do GitHub, a ação é chamá-la. Sem um ponto de stop, o loop pode não parar e segue gastando tokens.

## Custo e quando usar

Por gastar muitos tokens e demorar, o ReAct raramente roda em alta escala; serve mais para exploração e desenvolvimento no dia a dia. Muitos modelos já trabalham assim, mas o prompt permite forçar essa linha de raciocínio. Casos de uso: depurar erros, criar um agente que busca informação interna, automatizar tarefa que exige decisão e execução, simular troubleshooting e integrar o modelo com ferramentas externas.

## Limitações

- É longo e verboso, e é difícil controlar quando para.
- Pode simular uma ação que não existe ou inventar uma observação falsa. Qualquer modelo pode, mas no ReAct isso pesa mais: o raciocínio seguinte se apoia num estado falso.
- É mais complexo em produção de alta escala: lento e arriscado.
