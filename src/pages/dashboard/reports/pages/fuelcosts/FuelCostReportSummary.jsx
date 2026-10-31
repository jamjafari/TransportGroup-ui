import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';
const FuelCostReportSummary = ({ summary = {} }) => {
  const { t } = useTranslation();
  const items = [
    {
      title: "کل سوخت مصرف شده",

      value: formatNumber(summary.totalFuel ?? 0),

      color: "primary",

      icon: "fuel",
    },

    {
      title: "کل پرداختی‌های سوخت",

      value: formatNumber(summary.totalFuelCost ?? 0),

      color: "warning",

      icon: "money",
    },

    {
      title: "میانگین مصرف سوخت در هر ماه",

      value: Number(summary.averageFuel ?? 0).toFixed(2),

      color: "info",

      icon: "fuel",
    },

    {
      title: "میانگین هزینه سوخت در هر ماه",

      value: formatNumber(summary.averageCost ?? 0),

      color: "secondary",

      icon: "report",
    },

    {
      title: "تعداد تراکنش‌های سوخت",

      value: formatNumber(summary.transactionCount ?? 0),

      color: "success",

      icon: "report",
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={2.4}>
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

export default memo(FuelCostReportSummary);
