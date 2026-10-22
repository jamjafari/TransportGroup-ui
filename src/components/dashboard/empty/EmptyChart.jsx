import React from "react";
import { useTranslation } from "react-i18next";

import DashboardEmpty from "./DashboardEmpty";

const EmptyChart = () => {
  const { t } = useTranslation();

  return (
    <DashboardEmpty
      title={t("نموداری برای نمایش وجود ندارد")}
      description={t("داده‌ای برای رسم نمودار یافت نشد.")}
    />
  );
};

export default EmptyChart;
