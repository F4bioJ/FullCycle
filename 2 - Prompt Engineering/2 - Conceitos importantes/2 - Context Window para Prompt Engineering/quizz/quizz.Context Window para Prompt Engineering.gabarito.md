# Gabarito — Context Window para Prompt Engineering

## 1. Agente com system prompt + histórico + documento > 128k tokens — consequência segundo a aula?
**Correta: A**
**Por quê:** A aula ensina que a janela de contexto é um limite duro: system prompt + histórico + documento + resposta competem pelo mesmo espaço. Quando o total ultrapassa o limite, 'a informação começa a ser perdida' e 'o modelo deixa de considerar partes da conversa ou dos dados enviados', sem especificar qual parte nem mecanismo de truncamento.
- **B:** A aula não descreve nenhum mecanismo de truncamento (meio, início, fim, priorização). Apenas afirma que há perda genérica de informação.
- **C:** A aula não menciona compressão automática pelo tokenizer; tokens são a unidade de contagem e o limite é absoluto.
- **D:** A aula não diz que o modelo retorna erro; diz que passa a operar 'com perda de contexto'.
**Conceito:** Perda de informação ao exceder janela de contexto

## 2. Chatbot interno com histórico 2k: escolher modelo 8k barato ou 1M caro?
**Correta: B**
**Por quê:** A escolha do modelo deve resolver o problema com o menor desperdício. Se 8k tokens já comportam system prompt, histórico médio (2k) e resposta, a janela de 1M do Modelo Y traz custo e latência extras sem benefício prático — janela maior não melhora raciocínio nem dispensa engenharia de contexto.
- **A:** Janela maior não elimina necessidade de gerenciar contexto; só move o limite. Engenharia de prompt continua necessária para priorizar o que entra.
- **C:** Capacidade de contexto e qualidade de raciocínio são eixos independentes; janela maior não confere melhor desempenho em tarefas que não a usam.
- **D:** 8k tokens suportam muitas rodadas de conversa (system + 2k histórico + resposta). RAG é para conhecimento externo, não para histórico de chat.
**Conceito:** Escolha de modelo por custo-benefício real

## 3. Pipeline com system prompt (1,5k) + doc (50k) em modelo 32k — explicação da aula para perda de informação?
**Correta: C**
**Por quê:** A aula ensina que 'tudo o que entra na chamada compete pelo mesmo espaço' — 'mensagem de sistema, mensagem do usuário, respostas anteriores e trechos adicionais de dados ocupam a mesma janela'. 1,5k + 50k = 51,5k > 32k, logo o limite é excedido e 'parte da informação deixa de ser considerada'. A aula não especifica qual parte (início, meio, fim) nem menciona heurísticas de prioridade.
- **A:** A aula não menciona regra de '50% da janela' nem prioridade fixa de system prompt; apenas diz que o limite é absoluto e a perda ocorre ao excedê-lo.
- **B:** A aula é explícita: 'existe uma única janela de contexto por chamada; todos os componentes somam para o mesmo limite'.
- **D:** O problema descrito é estouro de janela de contexto, não falha de retrieval. A aula foca no limite da chamada ao modelo.
**Conceito:** Soma de componentes estoura janela única
