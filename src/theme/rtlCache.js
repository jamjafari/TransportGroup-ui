import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

// ✅ قرینه‌ی ltrCache.js — قبلاً داخل main.jsx ساخته می‌شد.
// rtlPlugin (از طریق cssjanus) خصوصیت‌های فیزیکی CSS را برمی‌گرداند:
// marginLeft ⇄ marginRight، left ⇄ right، text-align و translateX و ... .
// به همین دلیل استایل‌هایی که برای RTL نوشته شده‌اند، در LTR هم درست کار می‌کنند.
const rtlCache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default rtlCache;
