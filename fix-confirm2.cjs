// Drops {{entity}} from the delete-confirmation body.
//
// Why: the entity nouns were reusing menu-label keys, which are plural and
// Title Case ("Fuel Cards", "Expense Types"), producing ungrammatical English
// like "delete the Fuel Cards “6274”". The ConfirmDialog *title* already names
// the entity ("Delete vehicle" / "حذف خودرو"), so the body only needs the record
// name. Reads naturally in both languages.

const fs = require('fs');
const path = require('path');

const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(js|jsx)$/.test(f)) files.push(p);
  }
})('src');

const OLD_KEY = 'آیا از حذف {{entity}} «{{name}}» مطمئن هستید؟';
const NEW_KEY = 'آیا از حذف «{{name}}» مطمئن هستید؟';

let ok = 0;
const problems = [];

for (const f of files) {
  let src = fs.readFileSync(f, 'utf8');
  if (!src.includes(OLD_KEY)) continue;

  // message={t('OLD', {\n  entity: t('X'),\n  name: EXPR,\n})}
  const re = new RegExp(
    `message=\\{t\\(\\s*'${OLD_KEY.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'\\s*,\\s*\\{[\\s\\S]*?entity:\\s*t\\('[^']*'\\)\\s*,\\s*name:\\s*([\\s\\S]*?),?\\s*\\}\\s*\\)\\}`,
  );

  const m = re.exec(src);
  if (!m) {
    problems.push(`${f}: pattern not matched`);
    continue;
  }

  const nameExpr = m[1].trim().replace(/,$/, '');

  const replacement =
    `message={t('${NEW_KEY}', {\r\n` +
    `          name: ${nameExpr},\r\n` +
    `        })}`;

  src = src.replace(re, replacement);
  fs.writeFileSync(src ? f : f, src, 'utf8');
  ok++;
}

console.log(`updated: ${ok}`);
if (problems.length) {
  console.log('problems:');
  problems.forEach((x) => console.log('  ' + x));
}
