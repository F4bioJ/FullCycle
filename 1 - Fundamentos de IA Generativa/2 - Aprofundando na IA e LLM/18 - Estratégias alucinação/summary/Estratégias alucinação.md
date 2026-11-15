# Estratégias alucinação

## Pedido de evidências e restrição de fontes

Reduzir alucinação começa por restringir o espaço de resposta do modelo. Em vez de pedir apenas uma resposta final, peça fontes confiáveis, autores, estudos e delimite onde a busca deve ocorrer, como jornais específicos ou publicações acadêmicas. Isso força o modelo a ancorar a resposta em referências verificáveis e facilita a auditoria humana. Quando há enriquecimento com dados externos e o domínio de busca é bem nichado, a chance de invenção tende a cair.

## Instruções explícitas de cautela

LLMs tendem a completar lacunas de forma plausível, especialmente quando o prompt induz uma postura excessivamente prestativa. Por isso, instruções como “se não tiver certeza, diga que não sabe” e “não invente informações ausentes” funcionam como restrições comportamentais objetivas. Esse tipo de comando reduz a pressão implícita por sempre responder e diminui inferências criativas indevidas. O efeito prático é trocar respostas confiantes e erradas por respostas mais conservadoras.

## Explicitação do raciocínio para inspeção

Uma forma de detectar saltos indevidos é pedir que o modelo apresente o passo a passo antes da conclusão, aqui referido como Chain of Truth Proofing. O valor dessa técnica não está em assumir que toda cadeia intermediária é verdadeira, mas em expor a estrutura lógica usada para chegar ao resultado. Se a conclusão aparece sem apoio em fontes ou sem transições justificadas, fica mais fácil identificar onde houve extrapolação. No exemplo da Amazônia, uma afirmação extrema sem base explícita já sinaliza alucinação.

## Persona, escopo e contexto persistente

Outra estratégia útil é declarar previamente o papel e os limites operacionais do modelo. Em ferramentas como ChatGPT, Copilot, Gemini, Llama ou Manus, isso pode aparecer como contexto de conversa, pasta, instruções persistentes ou configuração semelhante a um agente. Definir que o assistente só usa dados até certo ano, não prevê o futuro e deve agir dentro de um escopo específico reduz respostas fora de domínio. A vantagem adicional é não precisar repetir as mesmas restrições em toda interação.

## Few-shot Prompting como calibração comportamental

Few-shot Prompting reduz ambiguidade ao mostrar exemplos do que deve ser considerado correto e incorreto. Em vez de depender apenas de instruções abstratas, o modelo passa a inferir padrões de aceitação a partir de casos concretos fornecidos pelo usuário. Isso ajuda a calibrar o nível de inferência tolerado e os limites esperados da resposta. O custo é operacional: preparar bons exemplos dá trabalho, por isso a técnica nem sempre é a mais conveniente no uso cotidiano.

## Ajuste progressivo pelo uso recorrente

O uso contínuo da mesma ferramenta pode produzir uma sensação de maior alinhamento ao estilo e às expectativas do usuário. Na prática, isso significa que um assistente usado por mais tempo tende a parecer mais “afinado” do que outro recém-adotado, especialmente quando há histórico, contexto persistente ou personalizações acumuladas. Essa observação não substitui validação factual, mas sugere que alternar constantemente entre plataformas pode reduzir consistência operacional. Para tarefas recorrentes, estabilidade de ambiente pode ser mais útil do que testar tudo o tempo todo.

## Casos jurídicos mostram o custo real da alucinação

Em contexto jurídico, uma alucinação não é apenas um erro de redação: ela pode introduzir fatos, precedentes ou citações inexistentes em documentos formais. Os casos citados mostram consequências concretas como retratação formal, multas, dano reputacional e até impacto financeiro milionário quando o erro afeta processos sensíveis. O problema central não é só incoerência argumentativa, mas a fabricação de referências que parecem legítimas. Em domínios regulados, plausibilidade textual não tem valor sem verificabilidade documental.

## IA como assistente que exige validação

A postura correta diante de uma LLM é tratá-la como apoio produtivo, não como autoridade final. A analogia com um estagiário é útil: ela acelera trabalho, sugere caminhos e produz rascunhos, mas exige revisão antes de qualquer uso crítico. Isso vale ainda mais em áreas como direito e medicina, nas quais uma resposta errada pode gerar dano material, institucional ou humano. Ganho de produtividade sem verificação vira risco operacional.
