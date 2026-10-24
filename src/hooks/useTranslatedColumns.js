import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// ✅ ترجمه‌ی عنوان ستون‌های جدول داده.
// متن فارسی headerName خودش کلید ترجمه است، پس همین یک hook عنوان همه‌ی
// ستون‌های یک جدول را پوشش می‌دهد و در هر صفحه فقط یک‌بار صدا زده می‌شود.
//
// نکته: columns در لیست وابستگی‌هاست؛ اگر محل استفاده آرایه‌ی ستون‌ها را
// درون useMemo نساخته باشد، در هر رندر آرایه‌ی تازه می‌سازد و این useMemo
// بی‌اثر می‌شود. پس baseColumns باید در فراخوان، memo شده باشد.
const useTranslatedColumns = (columns) => {
  const { t } = useTranslation();

  return useMemo(
    () =>
      columns.map((column) => ({
        ...column,
        ...(column.headerName ? { headerName: t(column.headerName) } : {}),
      })),
    [columns, t],
  );
};

export default useTranslatedColumns;
