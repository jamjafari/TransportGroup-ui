import React from "react";
import { useTranslation } from "react-i18next";

import DashboardEmpty from "./DashboardEmpty";

const EmptyTable = () => {
  const { t } = useTranslation();
  return (
    <DashboardEmpty
      title={t("جدولی برای نمایش وجود ندارد")}
      description={t("هیچ رکوردی یافت نشد.")}
    />
  );
};

export default EmptyTable;
