// Uso: browser_run_code_unsafe com filename apontando para este arquivo.
// Faz login na plataforma Full Cycle lendo USR e PWD do .env da raiz do projeto.
// O .env é lido por um <input type="file"> em uma aba descartável porque o
// sandbox do Playwright MCP não tem acesso a fs; assim a senha nunca aparece
// na conversa nem no retorno deste script.
async (page) => {
  const LOGIN_URL = 'https://plataforma.fullcycle.com.br/login';
  const email = page.getByRole('textbox', { name: 'Email' });

  await page.goto(LOGIN_URL);
  // Com sessão ativa, /login redireciona para /courses e o campo nunca aparece.
  try {
    await email.waitFor({ timeout: 8000 });
  } catch {
    if (!page.url().includes('/login')) return { status: 'ja-logado', url: page.url() };
    throw new Error('Tela de login não carregou: campo "Email" não encontrado.');
  }

  const tmp = await page.context().newPage();
  await tmp.setContent('<input type="file" id="f">');
  await tmp.setInputFiles('#f', '.env');
  const text = await tmp.evaluate(() => document.getElementById('f').files[0].text());
  await tmp.close();

  const env = {};
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  if (!env.USR || !env.PWD) {
    throw new Error('O .env precisa definir USR e PWD. Variáveis encontradas: ' + Object.keys(env).join(', '));
  }

  await page.bringToFront();
  await email.fill(env.USR);
  await page.getByRole('textbox', { name: 'Senha' }).fill(env.PWD);
  await page.getByRole('button', { name: 'Entrar' }).click();
  try {
    await page.waitForURL((u) => !u.toString().includes('/login'), { timeout: 20000 });
  } catch {
    throw new Error('Login não concluiu em 20s: confira USR/PWD no .env ou se a plataforma pediu algo a mais.');
  }
  return { status: 'logado', url: page.url() };
}
