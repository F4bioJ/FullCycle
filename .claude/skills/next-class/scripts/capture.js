// Documentação em capture.md (comentários aqui são repetidos pelo MCP a cada chamada).
async (page) => {
  const id = new URL(page.url()).searchParams.get('conteudo');
  if (!id) throw new Error('A URL não tem ?conteudo=<id>: abra a aula antes de capturar.');
  await page.locator('#list-content-' + id).waitFor({ state: 'attached', timeout: 30000 });
  await page.waitForFunction(() => document.querySelector('#transcricao') || [...document.querySelectorAll('main button')].some((b) => /Transcri/.test(b.textContent)), null, { timeout: 15000 }).catch(() => {});
  const show = page.getByRole('button', { name: 'Mostrar Transcrição' });
  await show.first().waitFor({ timeout: 8000 }).catch(() => {});
  if (await show.count()) {
    await show.first().click();
    await page.waitForFunction(() => { const b = [...document.querySelectorAll('main button')].find((x) => /Transcri/.test(x.textContent)); const box = b && b.parentElement.nextElementSibling; return box && box.textContent.trim().length > 0; }, null, { timeout: 15000 }).catch(() => {});
  }
  return await page.evaluate((id) => {
    const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
    let transcricao = '', trechos = 0;
    const btn = [...document.querySelectorAll('main button')].find((x) => /Transcri/.test(x.textContent));
    const box = btn && btn.parentElement.nextElementSibling;
    if (box) {
      const parts = [...box.children].map((seg) => { const s = seg.querySelectorAll('span'); return clean(s.length > 1 ? s[s.length - 1].textContent : seg.textContent); }).filter(Boolean);
      trechos = parts.length;
      transcricao = parts.join('\n');
    }
    const inline = (n) => [...n.childNodes].map((c) => {
      if (c.nodeType === 3) return c.textContent;
      if (c.nodeType !== 1) return '';
      const t = c.tagName;
      if (t === 'CODE') return '`' + c.textContent + '`';
      if (t === 'BR') return '\n';
      const s = inline(c);
      if (t === 'STRONG' || t === 'B') return '**' + s + '**';
      if (t === 'EM' || t === 'I') return '*' + s + '*';
      if (t === 'A') return '[' + s + '](' + c.href + ')';
      return s;
    }).join('');
    const out = [];
    const walk = (n) => {
      for (const c of n.children) {
        const t = c.tagName;
        if (t === 'BUTTON' || t === 'IMG' || c.querySelector(':scope > button')) continue;
        if (/^H[1-6]$/.test(t) && !c.querySelector('h1,h2,h3,h4,h5,h6,p,ul,ol,pre,table')) out.push('#'.repeat(Math.max(2, +t[1])) + ' ' + clean(inline(c)));
        else if (t === 'P') out.push(inline(c).trim());
        else if (t === 'PRE') out.push('```\n' + c.textContent.replace(/\n$/, '') + '\n```');
        else if (t === 'UL' || t === 'OL') out.push([...c.children].map((li, i) => (t === 'OL' ? i + 1 + '. ' : '- ') + clean(inline(li))).join('\n'));
        else if (t === 'BLOCKQUOTE') out.push('> ' + clean(inline(c)));
        else if (t === 'TABLE') out.push(c.innerText.trim());
        else walk(c);
      }
    };
    const resumoEl = document.querySelector('#transcricao');
    if (resumoEl) walk(resumoEl);
    const resumo = out.filter(Boolean).join('\n\n');
    const li = document.querySelector('#list-content-' + id);
    const titulo = clean((li.querySelector('.MuiListItemText-root') || li).textContent);
    window.__fcCapture = { id, titulo, transcricao, resumo };
    return { id, titulo, trechos, caracteresTranscricao: transcricao.length, caracteresResumo: resumo.length };
  }, id);
}
