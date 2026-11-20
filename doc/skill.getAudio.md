# Skill get-audio

Skill que transforma cada aula numa aula falada, em MP3, para o usuário ouvir enquanto caminha com os cães: tela desligada, mãos ocupadas e sem conexão confiável. A definição executável está em `.claude/skills/get-audio/` (`SKILL.md`, `scripts/gerar_audio.py`); este documento descreve o que ela faz e por quê. O histórico fica em `.claude/skills/CHANGELOG.md`.

O objetivo é fixar o conteúdo e distinguir conceitos vizinhos que se confundem (por exemplo, bigrama × Markov × redes profundas × RNN × Transformer). Um áudio que só repete o resumo falha nisso.

## Como chamar

| Comando | Efeito |
|---|---|
| `/get-audio 2.1.3` | só essa aula |
| `/get-audio 2.1.*` | uma aula por MP3, para cada aula disponível do capítulo 1 do módulo 2 |
| `/get-audio 2.3` | aula 3 do capítulo 2 do Fundamentos (sem o módulo, é sempre o Fundamentos) |
| `/get-audio 2` | cada aula disponível do capítulo 2 do Fundamentos |

Também é chamada pela `next-class` e pela `next-episode` quando o usuário passa `/audio` (desde 2026-11-17, o áudio deixou de ser gerado por padrão).

- **Um áudio = uma aula.** Nunca concatena aulas num arquivo só.
- **Disponível** = aula com material (`summary/` ou `advanced/` não vazios). Não inventa conteúdo de aulas futuras.
- **Aulas práticas e de abertura** não ganham áudio, a não ser que o usuário peça aquela aula: as práticas dependem da tela, e as de abertura só anunciam temas. A identificação segue a `next-class` (desde 2026-11-20): título com "Hands on -", "na prática", "Demonstração" ou "Executando", ou aula que só abre o capítulo. Na dúvida, uma aula com resumo mas sem quizz costuma ser desse tipo.
- Num capítulo, gera só as aulas que ainda não têm MP3. Regenera uma existente só a pedido, ou se o material mudou.
- **Fontes, em ordem de prioridade:** o resumo gerado, o material avançado (se existir), o resumo do professor e, só para tirar dúvida, a transcrição.

## Onde salva

Numa única pasta `audio/` por capítulo, ao lado das pastas das aulas: `<módulo>/<capítulo>/audio/<nº - título>.roteiro.md` e `.mp3`. O nome mantém o número e a ordem.

## O roteiro

Um texto original, no tom de um professor conversando. Nunca lê nem parafraseia a transcrição trecho a trecho.

1. **Abertura** (~1 min): o que a aula cobre e como se liga à anterior.
2. **Um bloco por conceito,** sempre na mesma ordem: a ideia numa frase, um exemplo do dia a dia, o que resolve, onde quebra e a ponte para o próximo.
3. **Comparação explícita** com os conceitos vizinhos já vistos.
4. **Fechamento:** a frase-âncora de cada conceito e 3 a 5 perguntas faladas, cada uma com uma pausa de 5 segundos antes da resposta.

Escrito para o ouvido: frases curtas, voz ativa, nada de tabelas, fórmulas ou "veja abaixo", siglas por extenso na primeira vez e frases-âncora repetidas de propósito.

**Duração (desde 2026-10-31):** cerca de 1,5 vez a duração do vídeo, com teto de 15 minutos. O roteiro é o texto mais longo que o Opus escreve por aula, e a conta do usuário é dividida com o trabalho. Além disso, ele caminha cerca de 35 minutos por dia e quer ouvir cada aula duas vezes.

## O MP3

`gerar_audio.py` gera o arquivo com a voz `pt-BR-FranciscaNeural` (feminina, escolha do usuário), pelo edge-tts, que precisa de internet. O MP3 sai em CBR 48 kbps mono, com marcadores de capítulo (um por `##` do roteiro) e tags ID3 completas: título, artista, álbum = capítulo, faixa = nº da aula e gênero Podcast. Com essas tags, o player de música do Android mantém o áudio tocando com a tela bloqueada. O script avisa se o áudio passar de 15 minutos.

## Entrega

A lista dos MP3 gerados, com caminho e duração, e o lembrete: no WhatsApp, enviar como **Documento**, e não como áudio.
