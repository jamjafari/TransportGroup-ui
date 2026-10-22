import React from "react";
import { useTranslation } from "react-i18next";

import DashboardEmpty from "./DashboardEmpty";

const EmptyStat = () => {
  const { t } = useTranslation();

  return (
    <DashboardEmpty
      title={t("آماری موجود نیست")}
      description={t("اطلاعات آماری یافت نشد.")}
    />
  );
};
export default EmptyStat;
