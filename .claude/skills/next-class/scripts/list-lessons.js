// Uso: browser_run_code_unsafe com filename apontando para este arquivo,
// com a página de conteúdos do módulo já aberta.
// Devolve os capítulos do módulo e as aulas de cada um, na ordem da plataforma.
// Usa textContent porque capítulos recolhidos têm innerText vazio.
// O arquivo inteiro precisa ser uma única expressão (o MCP o executa como `(<arquivo>)(page)`).
async (page) => {
  const read = () =>
    page.evaluate(() => {
      const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
      const chapters = [...document.querySelectorAll('[id^="chapter-"]')].map((c) => ({
        id: c.id.replace('chapter-', ''),
        titulo: clean((c.querySelector('button') || c).textContent),
        aulas: [...c.querySelectorAll('[id^="list-content-"]')].map((li, i) => ({
          posicao: i + 1,
          id: li.id.replace('list-content-', ''),
          titulo: clean((li.querySelector('.MuiListItemText-root') || li).textContent),
          duracao: clean(li.querySelector('.contentTime')?.textContent) || null,
          vista: !!li.querySelector('.done'),
          aberta: li.getAttribute('aria-selected') === 'true',
        })),
      }));
      return { modulo: clean(document.title.split('|').pop()), url: location.href, capitulos: chapters };
    });

  // Logo após o navigate a página redireciona para ?capitulo=&conteudo= e re-renderiza a lista;
  // por isso espera até existirem aulas dentro dos capítulos, não só o primeiro capítulo.
  // Mesmo assim a re-renderização às vezes cai entre a espera e a leitura e a lista volta vazia
  // (visto em 2026-11-07); nesse caso espera de novo e relê, até 3 tentativas.
  let result;
  for (let tentativa = 1; tentativa <= 3; tentativa++) {
    await page.waitForFunction(
      () => document.querySelectorAll('[id^="chapter-"] [id^="list-content-"]').length > 0,
      null,
      { timeout: 30000 }
    );
    await page.waitForTimeout(500 * tentativa);
    result = await read();
    if (result.capitulos.some((c) => c.aulas.length > 0)) return result;
  }
  return result;
}
