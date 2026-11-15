// stdin: JSON [{id, tex}] ; stdout: JSON [{id, tex, error}]
const katex = require('../vendor/katex/katex.min.js');
let s = '';
process.stdin.on('data', d => s += d).on('end', () => {
  const items = JSON.parse(s), bad = [];
  for (const it of items) {
    try { katex.renderToString(it.tex, { throwOnError: true }); }
    catch (e) { bad.push({ id: it.id, tex: it.tex, error: String(e.message || e) }); }
  }
  process.stdout.write(JSON.stringify(bad));
});
