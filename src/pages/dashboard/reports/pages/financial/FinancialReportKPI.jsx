import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const FinancialReportKPI = ({ kpi = {} }) => {
  const { t } = useTranslation();
  const items = [
    {
      title: "میانگین هزینه برای هر خودرو",

      value: formatNumber(kpi.costPerVehicle ?? 0),

      color: "primary",

      icon: "vehicle",
    },

    {
      title: "میانگین هزینه ماهانه",

      value: formatNumber(kpi.monthlyAverage ?? 0),

      color: "info",

      icon: "money",
    },

    {
      title: "درصد هزینه سوخت به کل هزینه",

      value: `${(kpi.fuelPercent ?? 0).toFixed(2)} %`,

      color: "warning",

      icon: "fuel",
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={4}>
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

export default memo(FinancialReportKPI);
