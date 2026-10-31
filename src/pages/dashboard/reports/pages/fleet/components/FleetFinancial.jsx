import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';
const FleetFinancial = ({
  financial = {
    totalFuel: 0,

    totalExpense: 0,

    costPerVehicle: 0,
  },
}) => {
  const { t } = useTranslation();
  const items = [
    {
      title: "هزینه سوخت",

      value: formatNumber(financial.totalFuel ?? 0),

      color: "warning",

      icon: "fuel",
    },

    {
      title: "هزینه‌های جاری",

      value: formatNumber(financial.totalExpense ?? 0),

      color: "info",

      icon: "money",
    },

    {
      title: "هزینه هر خودرو",

      value: formatNumber(financial.costPerVehicle ?? 0),

      color: "primary",

      icon: "vehicle",
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={4}>
          <KpiCard
            title={t(item.title)}
            value={item.value}
            color={item.color}
            icon={item.icon}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(FleetFinancial);
