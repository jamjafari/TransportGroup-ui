import React from "react";
import { useTranslation } from "react-i18next";

import DashboardError from "./DashboardError";

const ErrorChart = ({ onRetry }) => {
  const { t } = useTranslation();
  return (
    <DashboardError
      title={t("خطا در بارگذاری نمودار")}
      description={t("اطلاعات نمودار قابل دریافت نیست.")}
      onRetry={onRetry}
    />
  );
};

export default ErrorChart;
