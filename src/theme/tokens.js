// ✅ تنها جایی که رنگ‌های برنامه تعریف می‌شوند.
// برای تغییر هر رنگ، فقط همین فایل را ویرایش کنید — هیچ رنگی نباید در کامپوننت‌ها نوشته شود.
//
// هر دو حالت (روشن و تیره) کنار هم تعریف شده‌اند تا مقایسه و هم‌سوسازی‌شان ساده باشد.
// کلیدهای استاندارد MUI (primary، background، text، divider، ...) به‌صورت خودکار
// در همه‌ی کامپوننت‌های MUI اعمال می‌شوند.
// کلیدهای سفارشی (sidebar، surface) برای بخش‌هایی است که MUI جای آماده‌ای برایشان ندارد؛
// در کامپوننت‌ها با رشته‌هایی مثل sx={{ bgcolor: 'sidebar.main' }} استفاده می‌شوند.

const light = {
  mode: 'light',

  primary: {
    main: '#1565C0',
    dark: '#0D47A1',
    light: '#5E92F3',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#26A69A',
    contrastText: '#FFFFFF',
  },

  success: { main: '#2E7D32' },

  warning: { main: '#F9A825' },

  error: { main: '#D32F2F' },

  info: { main: '#0288D1' },

  background: {
    default: '#F4F6F9',
    paper: '#FFFFFF',
  },

  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    disabled: '#9CA3AF',
  },

  divider: '#EBEAE5',

  // ---- منوی کناری ----
  sidebar: {
    main: '#A1A3A9', // پس‌زمینه‌ی Drawer
    hover: '#124597', // رنگ آیتم زیر نشانگر ماوس
    active: '#2563EB', // پس‌زمینه‌ی آیتم فعال
    text: '#FFFFFF', // متن آیتم‌ها
    icon: '#FBD6B7', // آیکن آیتم‌ها
    activeText: '#F9A825', // متن آیتم فعال
  },

  // ---- سطوح و لایه‌های خاص ----
  surface: {
    header: '#A1A3A9', // نوار بالای صفحه
    headerText: '#FFFFFF',
    gridHeader: '#F4F6F9', // سر‌ستون جدول داده
    scrim: 'rgba(255, 255, 255, 0.65)', // لایه‌ی مات پشت لودر
    glass: 'rgba(255, 255, 255, 0.20)', // کارت شیشه‌ای صفحه‌ی ورود
    glassBorder: 'rgba(211, 208, 208, 0.65)',
  },
};

const dark = {
  mode: 'dark',

  // روشن‌تر از نسخه‌ی روشن، تا روی پس‌زمینه‌ی تیره کنتراست کافی (WCAG AA) داشته باشد
  primary: {
    main: '#4DA3FF',
    dark: '#1565C0',
    light: '#80C2FF',
    contrastText: '#06090D',
  },

  secondary: {
    main: '#4DD0C4',
    contrastText: '#06090D',
  },

  success: { main: '#4CAF50' },

  warning: { main: '#FFB300' },

  error: { main: '#FF5252' },

  info: { main: '#29B6F6' },

  background: {
    default: '#0B0F14',
    paper: '#121821',
  },

  text: {
    primary: '#F2F5F8',
    secondary: '#9AA7B4',
    disabled: '#5B6672',
  },

  divider: '#1E2630',

  // ---- منوی کناری ----
  sidebar: {
    main: '#06090D', // تیره‌تر از پس‌زمینه، برای جداشدن از محتوا
    hover: '#16202B',
    active: '#1D4ED8',
    text: '#E6EDF3',
    icon: '#FFC89B',
    activeText: '#FFB300',
  },

  // ---- سطوح و لایه‌های خاص ----
  surface: {
    header: '#06090D',
    headerText: '#E6EDF3',
    gridHeader: '#16202B',
    scrim: 'rgba(6, 9, 13, 0.65)', // در حالت تیره لایه‌ی مات هم تیره می‌شود
    glass: 'rgba(18, 24, 33, 0.55)',
    glassBorder: 'rgba(255, 255, 255, 0.12)',
  },
};

const tokens = { light, dark };

export default tokens;
