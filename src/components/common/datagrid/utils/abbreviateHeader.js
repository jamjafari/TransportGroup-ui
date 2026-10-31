// ✅ حرف اول هر کلمه‌ی عنوان ستون: «کارکرد روی خودرو (KM)» ← «ک.ر.خ»، "Distance on vehicle (km)" ← "D.O.V".
// متن داخل پرانتز (واحد) و نشانه‌های بدون حرف (مثل &) حذف می‌شوند؛ نیم‌فاصله جداکننده‌ی کلمه نیست.
// جداکننده‌ی نقطه لازم است، وگرنه حروف فارسی به هم می‌چسبند و یک کلمه‌ی بی‌معنا می‌سازند.
// اگر کمتر از دو کلمه بماند null برمی‌گرداند (یک کلمه را نمی‌شود خلاصه کرد؛ با «…» کوتاه می‌شود).
const abbreviateHeader = (text) => {
  const words = String(text)
    .replace(/\([^)]*\)/g, ' ')
    .split(/[\s/]+/)
    .filter((word) => /\p{L}/u.test(word));

  if (words.length < 2) return null;

  return words.map((word) => [...word.match(/\p{L}/u)[0]][0].toUpperCase()).join('.');
};

export default abbreviateHeader;
