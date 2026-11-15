// Snapshot da plataforma (só leitura). Uso, com a página de conteúdos do módulo aberta e logada:
//   browser_evaluate com `function` = o conteúdo deste arquivo (a arrow function abaixo)
//   e `filename: dados/plataforma.json` — o resultado é gravado direto nesse arquivo.
// Cada item: id do conteúdo, título, tipo (video | link), duração em segundos, visto, iniciado.
() => {
  const p = n => String(n).padStart(2, '0');
  const d = new Date();
  const itens = [...document.querySelectorAll('[id^="list-content-"]')].map(e => {
    const cls = e.querySelector('main')?.className || '';
    const t = (e.querySelector('.contentTime')?.textContent || '').trim();
    const m = t.match(/^(?:(\d+):)?(\d+):(\d+)$/);
    const seg = m ? (+(m[1] || 0)) * 3600 + (+m[2]) * 60 + (+m[3]) : 0;
    return {
      id: e.id.replace('list-content-', ''),
      titulo: e.querySelector('.MuiListItemText-primary')?.textContent.trim(),
      tipo: /link/i.test(cls) ? 'link' : 'video',
      seg,
      visto: /\bdone\b/.test(cls),
      iniciado: /\bstarted\b/.test(cls),
    };
  });
  return { modulo: 'Fundamentos de IA Generativa', capturadoEm: `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`, itens };
}
