import React from "react";
import { useTranslation } from "react-i18next";

import DashboardError from "./DashboardError";

const ErrorTable = ({ onRetry }) => {
  const { t } = useTranslation();
  return (
    <DashboardError
      title={t("خطا در بارگذاری جدول")}
      description={t("اطلاعات جدول قابل دریافت نیست.")}
      onRetry={onRetry}
    />
  );
};

export default ErrorTable;
