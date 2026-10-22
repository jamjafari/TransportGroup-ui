import React from "react";
import { useTranslation } from "react-i18next";

import DashboardError from "./DashboardError";

const ErrorCard = ({ onRetry }) => {
  const { t } = useTranslation();
  return (
    <DashboardError
      title={t("خطا در بارگذاری کارت")}
      description={t("اطلاعات کارت قابل دریافت نیست.")}
      onRetry={onRetry}
    />
  );
};

export default ErrorCard;
