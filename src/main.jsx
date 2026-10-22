import './polyfill'; // ✅ باید دقیقاً اولین import باشد

// ✅ باید پیش از هر ماژول دیگری اجرا شود: بعضی فایل‌ها (اسکیمای اعتبارسنجی،
// عنوان پیش‌فرض نمودارها) در زمان import متن ترجمه‌شده را می‌سازند.
import i18n, { applyDocumentLocale } from './i18n';

import ReactDOM from 'react-dom/client';

import App from './App';
import { LocaleProvider } from './context/locale';
import { setDateLocale } from './utils/data/dateLocale';
import './App.css';

// lang و dir را قبل از اولین رندر روی <html> می‌گذاریم تا صفحه بدون پرش بالا بیاید.
// (index.html پیش‌فرض fa/rtl دارد؛ این خط اگر زبان ذخیره‌شده انگلیسی باشد اصلاحش می‌کند.)
const locale = applyDocumentLocale(i18n.language);

// تقویم و قالب اعداد در سطح ماژول نگه‌داری می‌شوند، چون formatJalaliDate
// یک تابع ساده است و از ~۴۴ جای مختلف داخل renderCell صدا زده می‌شود — نه از یک hook.
setDateLocale(locale);

ReactDOM.createRoot(document.getElementById('root')).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
);
