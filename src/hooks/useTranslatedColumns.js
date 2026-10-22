import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useTranslatedColumns = (columns, namespace) => {
  const { t, i18n } = useTranslation(namespace);

  return useMemo(
    () =>
      columns.map((column) => ({
        ...column,
        ...(column.headerName ? { headerName: t(column.headerName) } : {}),
      })),
    [columns, t, i18n.resolvedLanguage],
  );
};

export default useTranslatedColumns;
