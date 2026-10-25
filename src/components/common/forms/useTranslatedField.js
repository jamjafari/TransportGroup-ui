import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// ✅ ترجمه‌ی متن‌های یک فیلد فرم در یک نقطه.
//
// همه‌ی کامپوننت‌های خانواده‌ی فرم (AppTextField، AppSelectform، ...) متن‌های
// label و placeholder و helperText را از مصرف‌کننده می‌گیرند. چون متن فارسی
// خودش کلید ترجمه است، کافی است همین‌جا ترجمه شوند — نه در صدها محل استفاده.
//
// نکته: label می‌تواند یک گره‌ی React باشد (مثلاً <span> با ستاره‌ی الزامی)،
// پس فقط رشته‌های غیرخالی ترجمه می‌شوند و بقیه دست‌نخورده رد می‌شوند.
const useTranslatedField = () => {
  const { t } = useTranslation();

  const tr = useCallback(
    (value) => (typeof value === 'string' && value ? t(value) : value),
    [t],
  );

  // گزینه‌های Select/Autocomplete/RadioGroup: فقط برچسب هر گزینه ترجمه می‌شود،
  // مقدار (value) دست‌نخورده می‌ماند چون کلید داده است، نه متن نمایشی.
  const trOptions = useCallback(
    (options) =>
      Array.isArray(options)
        ? options.map((option) =>
            option && typeof option.label === 'string' && option.label
              ? { ...option, label: t(option.label) }
              : option,
          )
        : options,
    [t],
  );

  return useMemo(() => ({ t, tr, trOptions }), [t, tr, trOptions]);
};

export default useTranslatedField;
