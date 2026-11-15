# Quizz — Prompts no processo de desenvolvimento

**Capítulo:** 3 - Estrutura básica de prompts · **Aula:** 4
**Base:** material da aula

---

## 1. Um colega torce o nariz para o prompt gigante que você montou para corrigir um bug pequeno: "e a janela de contexto? e os tokens?". Qual é o argumento do professor?
- A) Em código, cortar contexto aumenta a chance de erro, e um problema pequeno não esgota a janela.
- B) Prompts grandes acionam o modo de reasoning, que dá respostas melhores mesmo em problemas pequenos.
- C) Com prompt caching, o custo do prompt gigante deixa de pesar a partir da segunda chamada igual.
- D) A janela de contexto limita a saída; a entrada pode crescer sem afetar o custo nem a latência.

## 2. Você usa uma API key no Claude Code o dia inteiro; um colega usa o plano mensal da mesma ferramenta. Pela aula, o que muda para cada um na decisão de enxugar os prompts?
- A) No plano, o limite é contado em tokens de reasoning, então enxugar pesa mais nele do que na API.
- B) Na API, cada token entra na conta e enxugar pesa; no plano, o custo é fixo e a preocupação cai.
- C) Nos dois casos o custo é por token; a diferença entre eles está no preço do milhão de tokens.
- D) Na API, prompts repetidos saem mais baratos a cada vez, então só no plano faz sentido enxugar.

## 3. A tarefa mexe em um componente de um codebase com milhares de arquivos. Qual instrução a aula sugere para a IA não ler o projeto inteiro?
- A) Ler o codebase inteiro uma vez e gerar um resumo dele para colar no início dos próximos chats.
- B) Dividir o codebase em lotes e mandar cada lote em um prompt separado, juntando as respostas.
- C) Partir de um ponto indicado e seguir o fluxo daquela ramificação de componentes, ignorando o resto.
- D) Truncar os arquivos mais antigos do repositório e manter no contexto os alterados recentemente.

## 4. Um time tenta usar a estratégia de branches e leafs num sistema em que cada componente depende de vários outros espalhados pelo código. Por que, segundo a aula, ela tende a falhar aí?
- A) Sem componentes desacoplados, a IA não entende um pedaço sem internalizar o resto do sistema.
- B) A estratégia exige janela acima de 1 milhão de tokens, que só alguns modelos oferecem hoje.
- C) O recorte por ramificação gasta mais requisições por dia do que os planos de uso permitem.
- D) Sem um arquivo central de guidelines do sistema inteiro, a IA não sabe por onde começar.

## 5. Numa aplicação modular, o professor sugere escrever documentação e instruções próprias para cada módulo. Para que serve isso?
- A) Para reduzir o custo, já que a documentação local ocupa menos tokens que ler o módulo inteiro.
- B) Para a IA levar as regras daquele módulo aos outros módulos que precisar abrir durante a tarefa.
- C) Para a IA ler cada módulo isolado e, depois, juntar sozinha o contexto do sistema inteiro.
- D) Para evitar que a IA saia do pedaço em que está trabalhando e entre em outras partes do sistema.
