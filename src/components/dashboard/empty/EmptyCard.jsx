import React from "react";
import { useTranslation } from "react-i18next";

import DashboardEmpty from "./DashboardEmpty";

const EmptyCard = () => {
  const { t } = useTranslation();
  return (
    <DashboardEmpty
      title={t("اطلاعاتی وجود ندارد")}
      description={t("کارت فاقد اطلاعات است.")}
    />
  );
};

export default EmptyCard;
