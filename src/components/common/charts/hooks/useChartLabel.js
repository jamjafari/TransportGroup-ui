import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

// ✅ برچسب‌های نمودار (نام سری‌ها، نام ماه‌ها، وضعیت‌ها) هم از فرانت و هم از بک‌اند می‌آیند،
// پس همین‌جا هنگام رندر ترجمه می‌شوند. مقادیر غیرمتنی (اعداد) و کلیدهای ناشناخته
// (پلاک، عنوان‌هایی که کاربر وارد کرده) دست‌نخورده برمی‌گردند.
const useChartLabel = () => {
  const { t } = useTranslation();

  return useCallback(
    (value) => (typeof value === 'string' ? t(value) : value),
    [t],
  );
};

export default useChartLabel;
