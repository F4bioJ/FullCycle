# Resultado — Raciocínio simbólico

## Tentativa 1 — 2026-11-01
**Pontuação:** 7/10

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | C | C | ✅ |
| 2 | A | A | ✅ |
| 3 | C | D | ❌ |
| 4 | B | B | ✅ |
| 5 | C | C | ✅ |
| 6 | A | A | ✅ |
| 7 | D | D | ✅ |
| 8 | C | B | ❌ |
| 9 | D | D | ✅ |
| 10 | B | A | ❌ |

### Para refazer
- **Q3 — falta de consistência entre etapas + respostas plausíveis:** achou que os últimos tokens pesam mais e corrigem a conclusão; o erro inicial contamina as etapas seguintes e o texto continua plausível.
- **Q8 — híbrido x neurossimbólico:** inverteu a maturidade; LangChain e AutoGPT são híbridos, já em uso, e o neurossimbólico (que também prova o caminho) ainda está em estudo.
- **Q10 — inversão de quantificadores:** aceitou "todo pago é aprovado" a partir de "todo aprovado é pago"; o pagamento não permite concluir sobre a aprovação.

### Pontos para revisar
- Propagação de erro entre etapas dependentes e respostas plausíveis (resumo, seção sobre falta de consistência).
- Raciocínio híbrido com ferramentas x modelos neurossimbólicos (exemplos e maturidade de cada um).
- Inversão de quantificadores como falha de lógica da LLM e a necessidade de validação.
