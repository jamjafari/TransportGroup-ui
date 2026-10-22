import { createTheme } from '@mui/material/styles';

import tokens from './tokens';
import typography from './typography';
import components from './components';
import radius from './radius';

// ✅ یک تم با دو طرح رنگ (روشن و تیره) و دو جهت (راست‌به‌چپ و چپ‌به‌راست).
//
// colorSchemeSelector اجباری است: اگر تعیین نشود، MUI وقتی هر دو طرح تعریف شده باشند
// به‌طور پیش‌فرض 'media' را انتخاب می‌کند و در آن حالت فقط تنظیم سیستم‌عامل اثر دارد
// و دکمه‌ی تغییر حالت کار نمی‌کند.
// مقدار 'data-mui-color-scheme' باعث تولید [data-mui-color-scheme="dark"] می‌شود.
//
// با فعال بودن cssVariables، رشته‌هایی مثل sx={{ bgcolor: 'sidebar.main' }}
// به var(--mui-palette-sidebar-main) تبدیل می‌شوند؛ پس تغییر حالت فقط
// متغیرهای CSS را عوض می‌کند و نیازی به رندر دوباره‌ی کامپوننت‌ها نیست.
//
// جهت و فونت به زبان وابسته‌اند، پس تم به‌جای یک شیء ثابت، از یک سازنده می‌آید.
// تغییر زبان صفحه را بازگذاری می‌کند، بنابراین این سازنده یک‌بار در هر بارگذاری اجرا می‌شود.
export const createAppTheme = ({ direction = 'rtl', fontFamily } = {}) =>
  createTheme({
    direction,

    cssVariables: {
      colorSchemeSelector: 'data-mui-color-scheme',
    },

    colorSchemes: {
      light: { palette: tokens.light },

      dark: { palette: tokens.dark },
    },

    typography: {
      ...typography,

      // فونت فارسی و لاتین متفاوت است؛ بقیه‌ی مقیاس تایپوگرافی مشترک می‌ماند
      ...(fontFamily ? { fontFamily } : null),
    },

    shape: {
      borderRadius: radius.md,
    },

    components,
  });

export default createAppTheme;
