"""Gera um MP3 com capítulos a partir de um roteiro em Markdown.

Formato do roteiro:
  # Título do episódio          -> título (tag ID3), não é falado
  ## Nome do capítulo           -> início de capítulo, não é falado
  texto corrido                 -> falado
  [pausa 5]                     -> 5 segundos de silêncio

Uso:
  python gerar_audio.py <roteiro.md> <saida.mp3> [--voz pt-BR-FranciscaNeural] [--velocidade +0%]
                        [--album "2 - Aprofundando na IA e LLM"] [--faixa 3]

Tags ID3: título, artista, álbum, faixa, gênero "Podcast" e marcadores de capítulo, para o
player de música do Android tratar o arquivo como mídia e tocar com a tela bloqueada.
"""

import argparse
import asyncio
import hashlib
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import edge_tts
import imageio_ffmpeg
from mutagen.id3 import CHAP, CTOC, ID3, TCON, TIT2, TALB, TPE1, TRCK, CTOCFlags, ID3NoHeaderError
from mutagen.mp3 import MP3

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
LIMITE_MIN = 45
PAUSA_RE = re.compile(r"^\[pausa\s+(\d+(?:\.\d+)?)\]$", re.IGNORECASE)


def parse(roteiro: str):
    titulo = "Aula em áudio"
    capitulos = []  # [(nome, [("fala", texto) | ("pausa", segundos)])]
    atual = None
    paragrafo = []

    def fecha_paragrafo():
        if paragrafo and atual is not None:
            atual[1].append(("fala", " ".join(paragrafo)))
        paragrafo.clear()

    for linha in roteiro.splitlines():
        linha = linha.strip()
        if linha.startswith("# "):
            titulo = linha[2:].strip()
        elif linha.startswith("## "):
            fecha_paragrafo()
            atual = (linha[3:].strip(), [])
            capitulos.append(atual)
        elif PAUSA_RE.match(linha):
            fecha_paragrafo()
            if atual is not None:
                atual[1].append(("pausa", float(PAUSA_RE.match(linha).group(1))))
        elif not linha:
            fecha_paragrafo()
        else:
            if atual is None:
                atual = ("Abertura", [])
                capitulos.append(atual)
            paragrafo.append(linha.lstrip("-* ").replace("**", "").replace("*", ""))
    fecha_paragrafo()
    return titulo, capitulos


CACHE = Path(tempfile.gettempdir()) / "get-audio-cache"


async def falar(texto: str, voz: str, velocidade: str) -> Path:
    # cada trecho falado fica em cache: se a geração cair no meio, a próxima execução retoma dali
    CACHE.mkdir(exist_ok=True)
    destino = CACHE / (hashlib.sha1(f"{voz}|{velocidade}|{texto}".encode()).hexdigest() + ".mp3")
    if destino.exists():
        return destino
    parcial = destino.with_suffix(".part")
    # o serviço às vezes devolve vazio ou estoura o tempo; tenta de novo com espera crescente
    for tentativa in range(6):
        try:
            await edge_tts.Communicate(texto, voz, rate=velocidade).save(str(parcial))
            parcial.replace(destino)
            return destino
        except Exception:
            if tentativa == 5:
                raise
            await asyncio.sleep(5 * (tentativa + 1))


def ffmpeg(*args):
    subprocess.run([FFMPEG, "-y", "-loglevel", "error", *args], check=True)


def silencio(segundos: float, destino: Path):
    ffmpeg("-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", str(segundos),
           "-c:a", "libmp3lame", "-b:a", "48k", str(destino))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("roteiro")
    ap.add_argument("saida")
    ap.add_argument("--voz", default="pt-BR-FranciscaNeural")
    ap.add_argument("--velocidade", default="+0%")
    ap.add_argument("--album", default="MBA Full Cycle - Aulas em áudio", help="álbum (use o capítulo)")
    ap.add_argument("--faixa", help="número da faixa (use o número da aula)")
    ap.add_argument("--limite", type=int, default=LIMITE_MIN, help="aviso se passar de N minutos")
    a = ap.parse_args()
    sys.stdout.reconfigure(encoding="utf-8")

    titulo, capitulos = parse(Path(a.roteiro).read_text(encoding="utf-8"))
    if not capitulos:
        sys.exit("Roteiro sem conteúdo.")

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        partes_cap = []  # um mp3 por capítulo
        for i, (nome, itens) in enumerate(capitulos):
            pedacos = []
            for j, (tipo, valor) in enumerate(itens):
                if tipo == "fala":
                    p = asyncio.run(falar(valor, a.voz, a.velocidade))
                else:
                    p = tmp / f"c{i:02d}_{j:03d}.mp3"
                    silencio(valor, p)
                pedacos.append(p)
            pedacos.append(tmp / f"c{i:02d}_fim.mp3")
            silencio(1.2, pedacos[-1])  # respiro entre capítulos
            lista = tmp / f"c{i:02d}.txt"
            lista.write_text("".join(f"file '{p.as_posix()}'\n" for p in pedacos), encoding="utf-8")
            cap = tmp / f"cap{i:02d}.mp3"
            ffmpeg("-f", "concat", "-safe", "0", "-i", str(lista),
                   "-ar", "24000", "-ac", "1", "-c:a", "libmp3lame", "-b:a", "48k", str(cap))
            partes_cap.append(cap)
            print(f"  capítulo {i + 1}/{len(capitulos)}: {nome}", flush=True)

        duracoes = [MP3(p).info.length for p in partes_cap]
        lista = tmp / "tudo.txt"
        lista.write_text("".join(f"file '{p.as_posix()}'\n" for p in partes_cap), encoding="utf-8")
        saida = Path(a.saida)
        saida.parent.mkdir(parents=True, exist_ok=True)
        ffmpeg("-f", "concat", "-safe", "0", "-i", str(lista), "-c", "copy", str(saida))

    try:
        tags = ID3(saida)
    except ID3NoHeaderError:
        tags = ID3()
    tags.add(TIT2(encoding=3, text=titulo))
    tags.add(TALB(encoding=3, text=a.album))
    tags.add(TPE1(encoding=3, text="MBA Full Cycle"))
    tags.add(TCON(encoding=3, text="Podcast"))
    if a.faixa:
        tags.add(TRCK(encoding=3, text=str(a.faixa)))
    ids, inicio = [], 0.0
    for i, ((nome, _), dur) in enumerate(zip(capitulos, duracoes)):
        cid = f"ch{i}"
        ids.append(cid)
        tags.add(CHAP(element_id=cid, start_time=int(inicio * 1000), end_time=int((inicio + dur) * 1000),
                      sub_frames=[TIT2(encoding=3, text=nome)]))
        inicio += dur
    tags.add(CTOC(element_id="toc", flags=CTOCFlags.TOP_LEVEL | CTOCFlags.ORDERED,
                  child_element_ids=ids, sub_frames=[TIT2(encoding=3, text="Capítulos")]))
    tags.save(saida)

    total = sum(duracoes)
    print(f"\nOK: {saida}\nDuração: {int(total // 60)} min {int(total % 60)} s")
    if total > a.limite * 60:
        print(f"AVISO: passou de {a.limite} minutos.")


if __name__ == "__main__":
    main()
