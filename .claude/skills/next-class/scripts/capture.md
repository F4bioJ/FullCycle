# capture.js

Documentação do `capture.js`. Os comentários ficam aqui, e não no script, porque o Playwright MCP devolve o arquivo inteiro na saída de cada `browser_run_code_unsafe`. Comentário no script vira contexto repetido a cada aula capturada (2026-11-20).

**Uso:** `browser_run_code_unsafe` com `filename` apontando para o script, com a aula já aberta (URL com `?conteudo=<id>`). O arquivo inteiro precisa ser uma única expressão, porque o MCP o executa como `(<arquivo>)(page)`.

**O que faz:** abre a transcrição, extrai a transcrição e o resumo do professor e guarda tudo em `window.__fcCapture`. O retorno traz só as contagens. O texto completo sai da página pelo `browser_evaluate` com `filename`, sem passar pela conversa.

**Detalhes que o código assume:**

1. O resumo e o botão de transcrição chegam depois da lista de aulas, e algumas aulas não têm nenhum dos dois. Por isso a espera inicial tem `catch` vazio.
2. O botão "Mostrar Transcrição" pode surgir depois do resumo. O script espera por ele (8 s) antes de concluir que não existe.
3. Depois do clique, o bloco da transcrição nasce só com um indicador de carregamento, e o texto chega depois. Por isso a espera é por texto não vazio no bloco irmão do botão.
4. **Transcrição:** fica no bloco irmão do botão. Cada trecho é `<span>horário</span><span>texto</span>`, e o script fica com o último `span`, sem o horário.
5. **Resumo do professor:** fica no elemento `#transcricao` (o id é esse mesmo, apesar do nome). É convertido em Markdown: títulos (mínimo `##`), parágrafos, listas, `pre`, citações e tabelas, com negrito, itálico, código e links dentro do texto. Botões e imagens são ignorados.
6. O título vem do item da lista (`#list-content-<id>`), para conferir se é a aula certa.
