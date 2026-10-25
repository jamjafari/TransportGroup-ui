const fs = require('fs');
const path = require('path');
const en = require('./src/i18n/locales/en.json');

const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(js|jsx)$/.test(f)) files.push(p);
  }
})('src');

const persian = (s) => /[؀-ۿ]/.test(s);

// ---- A. tables with Persian headerName: wired vs not ----
const wired = [];
const unwired = [];
for (const f of files) {
  if (f.includes('dashboard.mock')) continue;
  const src = fs.readFileSync(f, 'utf8');
  const headers = [...src.matchAll(/headerName:\s*(['"])((?:(?!\1)[^\\\n])*)\1/g)]
    .map((m) => m[2])
    .filter(persian);
  if (!headers.length) continue;
  const inEn = headers.filter((h) => h in en).length;
  const row = { f, n: headers.length, inEn };
  if (/useTranslatedColumns/.test(src)) wired.push(row);
  else unwired.push(row);
}

console.log('=== A. DataGrid header translation wiring ===');
console.log(`wired:   ${wired.length} files`);
console.log(`UNWIRED: ${unwired.length} files  <- headers stay Persian in EN`);
console.log('\n--- unwired files (headers / already-in-en.json) ---');
unwired
  .sort((a, b) => b.n - a.n)
  .forEach((r) => console.log(`  ${r.n.toString().padStart(3)} / ${r.inEn.toString().padStart(3)}  ${r.f}`));

// ---- B. Persian JSX body text ----
const bodyText = new Map();
for (const f of files) {
  if (f.includes('dashboard.mock')) continue;
  const src = fs.readFileSync(f, 'utf8');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!persian(trimmed)) return;
    if (/^(\/\/|\/\*|\*)/.test(trimmed)) return; // comments
    // a bare JSX text line: no JSX tag chars, no quotes, no = sign
    if (/[<>="'`{}]/.test(trimmed)) return;
    if (!(trimmed in en)) {
      if (!bodyText.has(trimmed)) bodyText.set(trimmed, []);
      bodyText.get(trimmed).push(`${f}:${i + 1}`);
    }
  });
}
console.log('\n=== B. bare Persian JSX text lines missing from en.json ===');
console.log('distinct:', bodyText.size);
[...bodyText.entries()].slice(0, 40).forEach(([v, where]) =>
  console.log(`  ${JSON.stringify(v)}  (${where[0]})`),
);

// ---- C. template literals with Persian + interpolation ----
const tpl = new Map();
for (const f of files) {
  if (f.includes('dashboard.mock')) continue;
  const src = fs.readFileSync(f, 'utf8');
  const re = /`([^`]*)`/g;
  let m;
  while ((m = re.exec(src))) {
    const body = m[1];
    if (!persian(body)) continue;
    if (!body.includes('${')) continue;
    if (!tpl.has(body)) tpl.set(body, []);
    tpl.get(body).push(f);
  }
}
console.log('\n=== C. Persian template literals with ${} interpolation ===');
console.log('distinct:', tpl.size);
[...tpl.entries()].forEach(([v, where]) =>
  console.log(`  ${JSON.stringify(v)}\n      ${where[0]}`),
);
