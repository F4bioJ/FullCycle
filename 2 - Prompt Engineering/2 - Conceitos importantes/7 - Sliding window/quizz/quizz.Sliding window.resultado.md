# Resultado — Sliding window

## Tentativa 1 — 2026-11-08
**Pontuação:** 2/3

| # | Resposta | Correta | |
|---|---|---|---|
| 1 | D | A | ❌ |
| 2 | D | D | ✅ |
| 3 | B | B | ✅ |

### Para refazer
- **Q1 — Descarte vs arquivamento:** atribuiu ao descarte um efeito (o modelo perde os fatos iniciais) que a janela produz com ou sem arquivamento; o que o descarte tira é a possibilidade de recuperar, sumarizar ou retomar a conversa depois.

### Refação 1 — 2026-11-08
- **Q1:** ✅ (cenário novo: duas equipes com a mesma janela, uma descarta e outra arquiva; só quem arquiva pode revisitar ou sumarizar depois).

### Pontos para revisar
- Descartar ou arquivar o que sai da janela (resumo gerado da aula 2.2.7, seção sobre o destino do conteúdo antigo).
