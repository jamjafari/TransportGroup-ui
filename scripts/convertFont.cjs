// این فایل باید در مسیر scripts/convertFont.cjs (در ریشه‌ی پروژه) قرار بگیرد
// اجرا با: node scripts/convertFont.cjs
//
// این اسکریپت فایل Vazirmatn-Regular.ttf را (که باید کنار همین فایل در پوشه‌ی scripts قرار داشته باشد)
// به یک رشته‌ی Base64 تبدیل کرده و در src/assets/fonts/vazirFont.js ذخیره می‌کند.

const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, 'Vazirmatn-Regular.ttf');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'fonts');
const outputPath = path.join(outputDir, 'vazirFont.js');

if (!fs.existsSync(fontPath)) {
  console.error(
    'فایل فونت پیدا نشد. مطمئن شوید Vazirmatn-Regular.ttf در پوشه‌ی scripts قرار دارد.',
  );
  console.error('مسیر مورد انتظار:', fontPath);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const fontBuffer = fs.readFileSync(fontPath);
const base64 = fontBuffer.toString('base64');

const fileContent = `// این فایل به‌صورت خودکار توسط scripts/convertFont.cjs ساخته شده است.
// در صورت نیاز به تغییر فونت، فایل ttf را در پوشه‌ی scripts جایگزین کرده و دوباره اسکریپت را اجرا کنید.
export const VazirFontBase64 = "${base64}";
`;

fs.writeFileSync(outputPath, fileContent);

console.log('✅ فونت با موفقیت تبدیل شد.');
console.log('خروجی ذخیره شد در:', outputPath);
console.log(
  'حجم فایل خروجی (Base64):',
  (fileContent.length / 1024).toFixed(1),
  'KB',
);
