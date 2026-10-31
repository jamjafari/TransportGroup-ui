import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useVehicleSummary from "./hooks/useVehicleSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const VehicleReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useVehicleSummary();
  const total = data.total ?? 0;

  const pct = (value) => (total ? (value / total) * 100 : 0);

  const summaryItems = [
    {
      title: "کل خودروها",
      value: formatNumber(total),
      color: "primary",
      icon: "vehicle",
      subtitle: "ثبت‌شده در سیستم",
    },
    {
      title: "فعال",
      value: formatNumber(data.active ?? 0),
      color: "success",
      icon: "check",
      percent: pct(data.active ?? 0),
    },
    {
      title: "در حال تعمیر",
      value: formatNumber(data.inRepair ?? 0),
      color: "warning",
      icon: "service",
      percent: pct(data.inRepair ?? 0),
    },
    {
      title: "غیرفعال",
      value: formatNumber(data.inactive ?? 0),
      color: "secondary",
      icon: "expired",
      percent: pct(data.inactive ?? 0),
    },
    {
      title: "فروخته‌شده",
      value: formatNumber(data.sold ?? 0),
      color: "error",
      icon: "warning",
      percent: pct(data.sold ?? 0),
    },
  ];

  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={2.4}>
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

export default memo(VehicleReportSummary);
