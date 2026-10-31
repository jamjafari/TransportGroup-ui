const typography = {
  fontFamily: 'B Mitra, sans-serif',

  h1: {
    fontSize: 36,

    fontWeight: 700,
  },

  h2: {
    fontSize: 30,

    fontWeight: 700,
  },

  h3: {
    fontSize: 24,

    fontWeight: 600,
  },

  h4: {
    fontSize: 20,

    fontWeight: 600,
  },

  body1: {
    fontSize: 16,
  },

  body2: {
    fontSize: 14,
  },

  // ✅ مقیاس معنایی صفحه‌های داشبورد و گزارش (خلاصه، هشدار، نمودار، جدول).
  //
  // قبلاً هر کامپوننت اندازه و وزن خودش را داشت (h4/h5/h6 و fontSize دستی) و
  // سلسله‌مراتب به هم ریخته بود: سرستون جدول از عنوان بخش بزرگ‌تر بود و عنوان
  // کارت‌های نمودار داشبورد از عنوان صفحه.
  //
  // قاعده‌ها:
  //   ۱) اندازه‌ی هر نقش از بزرگ‌ترین اندازه‌ی قبلی همان نقش کمتر نیست.
  //   ۲) فقط سه وزن: 700 عنوان‌ها و اعداد، 600 برچسب‌ها و سرستون، 400 متن.
  //      (B Mitra فقط Regular و Bold دارد؛ در فارسی 600 و 700 یکسان دیده می‌شوند
  //       و سلسله‌مراتب از اندازه می‌آید. فونت انگلیسی هر سه وزن را دارد.)
  //   ۳) عنصر HTML هر گونه در components.js (MuiTypography.variantMapping) تعیین می‌شود.
  pageTitle: { fontSize: 30, fontWeight: 700, lineHeight: 1.3 },
  pageSubtitle: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },

  sectionTitle: { fontSize: 26, fontWeight: 700, lineHeight: 1.3 },

  cardTitle: { fontSize: 24, fontWeight: 700, lineHeight: 1.35 },
  cardSubtitle: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },

  statValue: { fontSize: 28, fontWeight: 700, lineHeight: 1.25 },
  statLabel: { fontSize: 20, fontWeight: 600, lineHeight: 1.4 },

  alertTitle: { fontSize: 18, fontWeight: 700, lineHeight: 1.4 },

  tableHeader: { fontSize: 21, fontWeight: 600, lineHeight: 1.4 },

  bodyText: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },

  meta: { fontSize: 13, fontWeight: 400, lineHeight: 1.5 },
};

export default typography;
