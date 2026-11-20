---
name: get-audio
description: Gera uma aula em áudio (MP3 em pt-BR, voz feminina, proporcional ao vídeo e até 15 min, com marcadores de capítulo) para cada aula do MBA Full Cycle que já tem material, para ouvir caminhando, offline e com a tela desligada. Use quando o usuário digitar "/get-audio <id da aula>" (ex.: "/get-audio 2.1.3" ou "/get-audio 2.3") ou "/get-audio <capítulo>", ou pedir "aula em áudio", "gera o áudio", "quero ouvir a aula", "MP3 da aula" ou "podcast da aula".
argument-hint: <módulo.capítulo.aula | módulo.capítulo.* | capítulo.aula | capítulo>
---

# get-audio

Transforma cada aula do MBA numa aula falada para o usuário ouvir enquanto caminha com os cães (tela desligada, mãos ocupadas, sem conexão confiável). Converse sempre em português (pt-BR).

O objetivo é **fixar o conteúdo e distinguir conceitos vizinhos que se confundem** (ex.: bigrama × Markov × redes profundas × RNN × Transformer). Um áudio que só repete o resumo falha nisso.

## Entrada

**Um áudio = uma aula.** Cada aula gera seu próprio MP3 (e seu próprio roteiro). Nunca concatene aulas num arquivo só.

Módulo é a pasta de primeiro nível em `D:\FullCycle\` (`1 - Fundamentos de IA Generativa`...); capítulo é a pasta dentro dele (`1 - Gen IA`, `2 - Aprofundando na IA e LLM`...); aula é a subpasta dentro do capítulo (`1 - Cadeias de Markov`, `2 - Redes neurais profundas`...). Os números de capítulo recomeçam em cada módulo, então vá primeiro à pasta do módulo e nunca procure um capítulo em todos eles. Argumentos sem o módulo são sempre do Fundamentos.

- `/get-audio 2.1.3` → só a aula 3 do capítulo 1 do módulo 2.
- `/get-audio 2.1.*` → um áudio para cada aula **disponível** do capítulo 1 do módulo 2, na ordem das pastas.
- `/get-audio 2.3` → só a aula 3 do capítulo 2 do Fundamentos.
- `/get-audio 2` → um áudio para cada aula **disponível** do capítulo 2 do Fundamentos, na ordem das pastas.
- Sem número: pergunte o capítulo.
- Disponível = subpasta de aula com material (`summary/` ou `advanced/` não vazios). O usuário só tem material das aulas que já estudou com a skill `next-class`, então não invente conteúdo de aulas futuras.
- Aulas práticas e de abertura não têm áudio: as práticas dependem da tela, e as de abertura só anunciam temas. Use as regras de "Aulas práticas" e "Aulas de abertura" da `next-class`: título começando com "Hands on -" ou, no Prompt Engineering, com "na prática", "Demonstração" ou "Executando"; aula que só abre o capítulo ou anuncia temas. Na dúvida, uma aula com resumo gerado mas sem `quizz/quizz.<título>.md` costuma ser prática ou de abertura (confira o resumo; o `/noquizz` também deixa uma aula conceitual sem quizz). Pule-as em `/get-audio <capítulo>`, e gere só se o usuário pedir aquela aula. Alinhado com a `next-class` em 2026-11-20: antes, só "Hands on -" contava, e um `/get-audio 2.6.*` geraria áudio das demonstrações em código 2.6.7 a 2.6.10.
- Se o usuário não pedir uma aula específica, gere só as que ainda não têm MP3 na pasta `audio/`; regenere uma existente apenas se ele pedir (ou se o material da aula mudou).
- Para cada aula, leia nessa ordem de prioridade: `summary/*.resumo.md`, `advanced/*.adv.md` (só existe se o usuário rodou a `next-class-adv` para a aula), `summary/*.md` e, só para tirar dúvida, `transcription/*.txt`.
- Pode citar a aula anterior em uma ou duas frases como ponto de partida ("na aula passada vimos o bigrama..."), sem reexplicar.

## Onde salvar

**Uma única pasta `audio` por capítulo**, ao lado das pastas das aulas. Não crie pasta `audio` dentro de cada aula.

```
D:\FullCycle\1 - Fundamentos de IA Generativa\2 - Aprofundando na IA e LLM\
  1 - Cadeias de Markov\
  2 - Redes neurais profundas\
  audio\
    1 - Cadeias de Markov.roteiro.md
    1 - Cadeias de Markov.mp3
    2 - Redes neurais profundas.roteiro.md
    2 - Redes neurais profundas.mp3
```

O nome do arquivo é o nome da pasta da aula (mantém o número e a ordem alfabética). Roteiro e MP3 ficam juntos na `audio/`. Crie a pasta se não existir.

## 1. Escrever o roteiro (um por aula)

Escreva um roteiro **original**: uma explicação sua do assunto da aula, no tom de um professor conversando. Nunca leia nem parafraseie a transcrição trecho a trecho, e não copie frases do material.

Estrutura:

1. **Abertura** (~1 min): o que a aula cobre e como se liga à aula anterior.
2. **Um bloco (`##`) por conceito** da aula, sempre na mesma ordem interna:
   - a ideia numa frase;
   - um exemplo do dia a dia (concreto, visualizável sem tela);
   - o que ele resolve;
   - onde ele quebra;
   - a ponte para o próximo.
3. **Comparação explícita** com os vizinhos já vistos ("a diferença entre Markov e RNN é..."), num bloco próprio antes do fechamento. Na primeira aula do capítulo, compare com o que veio do capítulo anterior ou com ideias que o aluno tende a confundir.
4. **Fechamento**: a frase-âncora de cada conceito da aula, repetida em sequência, e depois 3 a 5 perguntas faladas, cada uma seguida de `[pausa 5]` e da resposta.

Escrita para o ouvido:
- frases curtas, voz ativa, uma ideia por frase;
- nada de tabelas, listas visuais, fórmulas, emojis, "veja abaixo" ou "no slide";
- siglas por extenso na primeira vez ("RNN, rede neural recorrente");
- números e símbolos por extenso quando a leitura ficar ambígua ("dois-grama", não "2-gram");
- repetir de propósito a frase-âncora de cada conceito ao entrar e ao sair do bloco.

**Duração:** cerca de 1,5 vez a duração do vídeo da aula, com teto de 15 minutos (~2.250 palavras a 150 palavras por minuto). Sem a duração do vídeo, estime pela transcrição: o roteiro tem no máximo 1,5 vez o número de palavras dela. Uma aula de 4 minutos dá um áudio de cerca de 6 minutos; numa aula curta, junte conceitos num bloco só e faça 3 perguntas no fechamento. Não encha linguiça.

O motivo, em 2026-10-31: o roteiro é o texto mais longo que o Opus escreve em cada aula, e a conta do usuário é dividida com o trabalho. Além disso, ele tem cerca de 35 minutos de caminhada por dia e quer ouvir cada aula duas vezes.

### Formato do arquivo

```markdown
# Cadeias de Markov

## Abertura
Texto corrido. Parágrafos separados por linha em branco.

## Bigrama
...

## Revisão
Primeira pergunta: ...?

[pausa 5]

Resposta: ...
```

`#` é o título (não é falado), `##` abre um capítulo do MP3 (não é falado; vira marcador) e `[pausa N]` numa linha sozinha gera N segundos de silêncio.

## 2. Gerar o MP3 (um por aula)

```bash
python "D:/FullCycle/.claude/skills/get-audio/scripts/gerar_audio.py" "D:/FullCycle/<módulo>/<capítulo>/audio/<aula>.roteiro.md" "D:/FullCycle/<módulo>/<capítulo>/audio/<aula>.mp3" --limite 15 --album "<capítulo>" --faixa <nº da aula>
```

- O script grava um MP3 que o player de música do Android reconhece e mantém tocando com a tela bloqueada: MP3 CBR 48 kbps mono, tags ID3 completas (título, artista, álbum = capítulo, faixa = número da aula, gênero "Podcast") e marcadores de capítulo. Passe `--album "<nº - capítulo>"` e `--faixa <nº da aula>` em toda geração; sem eles o arquivo fica sem álbum/faixa e o player pode tratá-lo como arquivo solto. O roteiro precisa ter o `#` de título.
- Voz padrão: `pt-BR-FranciscaNeural` (feminina, escolha do usuário). `--velocidade +10%` acelera.
- Precisa de internet (edge-tts). Dependências: `pip install edge-tts mutagen imageio-ffmpeg`. Não rode com `python -I`, porque as libs estão no site-packages do usuário.
- Rode uma aula por vez, em background, e espere a notificação (alguns minutos por aula).
- Se o script avisar que passou de 15 minutos, enxugue o roteiro e gere de novo.

## 3. Entregar

Responda com a lista dos MP3 gerados (caminho e duração de cada um) e o lembrete:

> No WhatsApp, envie como **Documento** (📎 → Documento), não como áudio. No Android, ao tocar no arquivo ele abre no player de música e continua tocando com a tela bloqueada.
