import React from "react";
import { useTranslation } from "react-i18next";

import DashboardError from "./DashboardError";

const ErrorStat = ({ onRetry }) => {
  const { t } = useTranslation();
  return (
    <DashboardError
      title={t("خطا در بارگذاری آمار")}
      description={t("اطلاعات آماری قابل دریافت نیست.")}
      onRetry={onRetry}
    />
  );
};

export default ErrorStat;
