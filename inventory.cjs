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
const PROPS = ['headerName', 'label', 'title', 'subtitle', 'placeholder', 'tooltip'];

// value -> Set(files)
const vals = new Map();

for (const f of files) {
  if (f.includes('dashboard.mock')) continue;
  const src = fs.readFileSync(f, 'utf8');
  for (const prop of PROPS) {
    const re = new RegExp(
      `\\b${prop}\\s*[:=]\\s*(?:\\{\\s*)?(['"])((?:(?!\\1)[^\\\\\\n])*)\\1`,
      'g',
    );
    let m;
    while ((m = re.exec(src))) {
      const v = m[2];
      if (!persian(v)) continue;
      if (!vals.has(v)) vals.set(v, new Set());
      vals.get(v).add(f);
    }
  }
}

const missing = [...vals.entries()].filter(([k]) => !(k in en));

// group by top module dir so translations stay coherent
const groups = new Map();
for (const [val, fileSet] of missing) {
  const f = [...fileSet][0];
  const parts = f.split(path.sep);
  let key;
  if (parts[1] === 'modules') key = `modules/${parts[2]}`;
  else if (parts[1] === 'pages') key = `pages/${parts[2]}${parts[3] ? '/' + parts[3] : ''}`;
  else key = parts.slice(1, 3).join('/');
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(val);
}

console.log('total distinct Persian label values :', vals.size);
console.log('  already in en.json                :', vals.size - missing.length);
console.log('  MISSING                           :', missing.length);
console.log('');

const sorted = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [group, items] of sorted) {
  console.log(`\n### ${group}  (${items.length})`);
  items.sort().forEach((v) => console.log(`  ${JSON.stringify(v)}`));
}
