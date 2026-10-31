import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const FBVReportKPI = ({ kpi = {} }) => {
  const { t } = useTranslation();
  const items = [
    {
      title: "میانگین هزینه برای هر خودرو",

      value: formatNumber(kpi.averageCostPerVehicle ?? 0),

      color: "primary",

      icon: "vehicle",
    },

    {
      title: "میانگین هزینه در هر مأموریت",

      value: formatNumber(kpi.averageCostPerMission ?? 0),

      color: "info",

      icon: "report",
    },

    {
      title: "پرهزینه‌ترین خودرو",

      value: kpi.mostExpensiveVehicle ?? "-",

      color: "warning",

      icon: "vehicle",
    },

    {
      title: "هزینه پرهزینه‌ترین خودرو",

      value: formatNumber(kpi.mostExpensiveVehicleCost ?? 0),

      color: "error",

      icon: "money",
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
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

export default memo(FBVReportKPI);
