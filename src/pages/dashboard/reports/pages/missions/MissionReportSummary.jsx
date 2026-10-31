import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useMissionSummary from "./hooks/useMissionSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const MissionReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useMissionSummary();

  const summaryItems = [
    {
      title: "کل مأموریت‌ها",
      value: formatNumber(data.total ?? 0),
      color: "primary",
      icon: "report",
      subtitle: "در بازه‌ی انتخاب‌شده",
    },
    {
      title: "انجام شده",
      value: formatNumber(data.completed ?? 0),
      color: "success",
      icon: "check",
      percent: data.total ? (data.completed / data.total) * 100 : 0,
    },
    {
      title: "در حال انجام",
      value: formatNumber(data.running ?? 0),
      color: "info",
      icon: "vehicle",
      percent: data.total ? (data.running / data.total) * 100 : 0,
    },
    {
      title: "لغو شده",
      value: formatNumber(data.cancelled ?? 0),
      color: "error",
      icon: "expired",
      percent: data.total ? (data.cancelled / data.total) * 100 : 0,
    },
  ];
  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
          <KpiCard
            title={t(item.title)}
            value={item.value}
            color={item.color}
            icon={item.icon}
            subtitle={t(item.subtitle)}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(MissionReportSummary);
