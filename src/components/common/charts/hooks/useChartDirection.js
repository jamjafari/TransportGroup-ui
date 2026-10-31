import { useMemo } from 'react';

import { useLocale } from '@/context/locale';

// ✅ جهت نمودارها بر اساس زبان صفحه.
//
// SVG نمودارها عمداً داخل LtrScope رسم می‌شوند (Recharts با RTL درست کار نمی‌کند)،
// پس آینه‌کردن را خودمان و با تنظیمات خود Recharts انجام می‌دهیم:
//   محور افقی  → از سمت شروع خواندن: فارسی از راست، انگلیسی از چپ
//   محور عمودی → فارسی سمت راست، انگلیسی سمت چپ
//   لجند/تولتیپ → HTML هستند و جهت متنشان باید با زبان یکی باشد
//   پای/دونات   → از بالا؛ انگلیسی ساعت‌گرد، فارسی پادساعت‌گرد
const useChartDirection = () => {
  const { isRtl } = useLocale();

  return useMemo(
    () => ({
      isRtl,

      xReversed: isRtl,

      yOrientation: isRtl ? 'right' : 'left',

      textDirection: isRtl ? 'rtl' : 'ltr',

      startAngle: 90,

      endAngle: isRtl ? 450 : -270,
    }),
    [isRtl],
  );
};

export default useChartDirection;
