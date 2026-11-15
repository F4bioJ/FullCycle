// Uso: browser_run_code_unsafe com filename apontando para este arquivo,
// com a aula já aberta (URL com ?conteudo=<id>).
// Abre a transcrição, extrai transcrição e resumo do professor e guarda tudo em
// window.__fcCapture. O retorno traz só as contagens: o texto completo sai da
// página pelo browser_evaluate com filename, sem passar pela conversa.
async (page) => {
  const id = new URL(page.url()).searchParams.get('conteudo');
  if (!id) throw new Error('A URL não tem ?conteudo=<id>: abra a aula antes de capturar.');
  await page.locator('#list-content-' + id).waitFor({ state: 'attached', timeout: 30000 });

  // Resumo e botão de transcrição chegam depois da lista; algumas aulas não têm nenhum dos dois.
  await page
    .waitForFunction(
      () =>
        document.querySelector('#transcricao') ||
        [...document.querySelectorAll('main button')].some((b) => /Transcri/.test(b.textContent)),
      null,
      { timeout: 15000 }
    )
    .catch(() => {});

  // O botão pode surgir depois do resumo, então espera por ele antes de concluir que não existe.
  const show = page.getByRole('button', { name: 'Mostrar Transcrição' });
  await show.first().waitFor({ timeout: 8000 }).catch(() => {});
  if (await show.count()) {
    await show.first().click();
    await page
      .waitForFunction(
        () => {
          const b = [...document.querySelectorAll('main button')].find((x) => /Transcri/.test(x.textContent));
          const box = b && b.parentElement.nextElementSibling;
          // O bloco nasce só com um indicador de carregamento; o texto chega depois.
          return box && box.textContent.trim().length > 0;
        },
        null,
        { timeout: 15000 }
      )
      .catch(() => {});
  }

  return await page.evaluate((id) => {
    const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();

    // Transcrição: bloco irmão do botão; cada trecho é <span>horário</span><span>texto</span>.
    let transcricao = '';
    let trechos = 0;
    const btn = [...document.querySelectorAll('main button')].find((x) => /Transcri/.test(x.textContent));
    const box = btn && btn.parentElement.nextElementSibling;
    if (box) {
      const parts = [...box.children]
        .map((seg) => {
          const spans = seg.querySelectorAll('span');
          return clean(spans.length > 1 ? spans[spans.length - 1].textContent : seg.textContent);
        })
        .filter(Boolean);
      trechos = parts.length;
      transcricao = parts.join('\n');
    }

    // Resumo do professor: o id do elemento é "transcricao" mesmo, apesar do nome.
    const inline = (n) =>
      [...n.childNodes]
        .map((c) => {
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
        })
        .join('');
    const out = [];
    const walk = (n) => {
      for (const c of n.children) {
        const t = c.tagName;
        if (t === 'BUTTON' || t === 'IMG' || c.querySelector(':scope > button')) continue;
        if (/^H[1-6]$/.test(t) && !c.querySelector('h1,h2,h3,h4,h5,h6,p,ul,ol,pre,table')) {
          out.push('#'.repeat(Math.max(2, +t[1])) + ' ' + clean(inline(c)));
        } else if (t === 'P') out.push(inline(c).trim());
        else if (t === 'PRE') out.push('```\n' + c.textContent.replace(/\n$/, '') + '\n```');
        else if (t === 'UL' || t === 'OL') {
          out.push([...c.children].map((li, i) => (t === 'OL' ? i + 1 + '. ' : '- ') + clean(inline(li))).join('\n'));
        } else if (t === 'BLOCKQUOTE') out.push('> ' + clean(inline(c)));
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
