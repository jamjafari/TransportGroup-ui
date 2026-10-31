import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useLatestActivitiesSummary from "./hooks/useLatestActivitiesSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const LatestActivitiesReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useLatestActivitiesSummary();

  const summaryItems = [
    {
      title: "کل فعالیت‌ها",
      value: formatNumber(data.total ?? 0),
      color: "primary",
      icon: "report",
    },

    {
      title: "فعالیت‌های مأموریت",
      value: formatNumber(data.mission ?? 0),
      color: "info",
      icon: "report",
    },

    {
      title: "فعالیت‌های سوخت",
      value: formatNumber(data.fuel ?? 0),
      color: "warning",
      icon: "fuel",
    },

    {
      title: "فعالیت‌های هزینه",
      value: formatNumber(data.expense ?? 0),
      color: "secondary",
      icon: "money",
    },

    {
      title: "فعالیت‌های بیمه",
      value: formatNumber(data.insurance ?? 0),
      color: "success",
      icon: "insurance",
    },

    {
      title: "فعالیت‌های سرویس",
      value: formatNumber(data.service ?? 0),
      color: "error",
      icon: "service",
    },
  ];

  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
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

export default memo(LatestActivitiesReportSummary);
