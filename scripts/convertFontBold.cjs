// اجرا با: node scripts/convertFontBold.cjs
const fs = require('fs');
const path = require('path');

const fontPath = path.join(__dirname, 'Vazirmatn-Bold.ttf');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'fonts');
const outputPath = path.join(outputDir, 'vazirFontBold.js');

if (!fs.existsSync(fontPath)) {
  console.error('فایل فونت پیدا نشد. مطمئن شوید Vazirmatn-Bold.ttf در پوشه‌ی scripts قرار دارد.');
  console.error('مسیر مورد انتظار:', fontPath);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const fontBuffer = fs.readFileSync(fontPath);
const base64 = fontBuffer.toString('base64');

const fileContent = `// این فایل به‌صورت خودکار توسط scripts/convertFontBold.cjs ساخته شده است.
export const VazirFontBoldBase64 = "${base64}";
`;

fs.writeFileSync(outputPath, fileContent);

console.log('✅ فونت Bold با موفقیت تبدیل شد.');
console.log('خروجی ذخیره شد در:', outputPath);
