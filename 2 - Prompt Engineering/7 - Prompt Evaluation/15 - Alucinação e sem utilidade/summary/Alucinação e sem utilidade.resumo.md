# Alucinação e sem utilidade

## Do revisor verboso ao que alucina

Depois do revisor verboso, a aula mostra mais dois prompts degradados de propósito no mesmo cenário de revisão de código: um que alucina (Bad Hallucination) e um que não ajuda (Bad Not Helpful). Os dois rodam com evaluators sem referência.

## Os evaluators do caso de alucinação

O Bad Hallucination usa quatro critérios: faithfulness, com a descrição de que a resposta precisa estar grounded e não pode inventar problemas que não existem no contexto; helpfulness; coherence; e detail. Todos sem referência.

## O prompt que manda inventar

Para o professor, o mais importante é o prompt. Ele pede um especialista em segurança que deve reportar problemas críticos e manda inventar e listar problemas que não estão no código, criar vulnerabilidades fictícias e assumir SQL Injection, Buffer Overflow e Memory Leaks mesmo que o código não mostre isso. Pede ainda criatividade e um JSON com findings inventados e um summary dramático. O professor admite que está extrapolando ao máximo, só para que se entenda o impacto do prompt.

## O caso sem utilidade

O Bad Not Helpful avalia helpfulness, detail, depth, coherence e conciseness (o quanto a resposta é objetiva), também sem referência. O prompt define um revisor preguiçoso: responder só com uma frase genérica, como "Código analisado. Parece ok", sem comentários, sem detalhes, findings ou análise real, ser o mínimo útil possível e devolver um JSON com findings vazio e um summary de no máximo três palavras.

## Execução em paralelo

O professor roda os dois exemplos ao mesmo tempo, para ver tudo junto sem gravar outro vídeo, e depois compara os resultados no LangSmith.

## Resultados do Bad Hallucination

Coherence 0.32, detail 0.33, helpfulness 0.21 e faithfulness 0.14. Para o professor, o modelo provavelmente começou a alucinar e a "fazer um monte de besteira", e por isso as notas ficaram muito ruins. A nota mais baixa ficou no faithfulness, o critério que pune a invenção; as outras também caíram, porque uma revisão sobre problemas que não existem não tem valor prático.

## Resultados do Bad Not Helpful

Coherence 0.4, detail 0.12, conciseness 0.13, helpfulness 0.12 e depth 0.12. Aqui não há invenção, há ausência de análise: quase nenhum conteúdo, profundidade ou utilidade. Pelo resumo do professor, a coherence cai menos porque uma frase genérica ainda pode ser consistente em si, mesmo sem ajudar. Nos dois casos, o professor atribui a queda a uma mudança forte no prompt.

## O caminho das pedras

O professor fecha dizendo que, a partir daqui, o aluno tem um caminho para fazer os primeiros testes de avaliação de prompts. Não é preciso usar a mesma ferramenta, os mesmos exemplos, o mesmo provider ou o mesmo modelo: o que ele reforça é pegar o conceito.
