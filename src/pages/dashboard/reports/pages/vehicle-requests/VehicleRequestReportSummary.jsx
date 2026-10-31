import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useVehicleRequestSummary from "./hooks/useVehicleRequestSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const VehicleRequestReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useVehicleRequestSummary();

  const percentOf = (value) => (data.total ? ((value ?? 0) / data.total) * 100 : 0);

  const summaryItems = [
    {
      title: "کل درخواست‌ها",
      value: formatNumber(data.total ?? 0),
      color: "primary",
      icon: "report",
      subtitle: "در بازه‌ی انتخاب‌شده",
    },
    {
      title: "در انتظار تایید",
      value: formatNumber(data.pending ?? 0),
      color: "warning",
      icon: "warning",
      percent: percentOf(data.pending),
    },
    {
      title: "تایید شده",
      value: formatNumber(data.approved ?? 0),
      color: "success",
      icon: "check",
      percent: percentOf(data.approved),
    },
    {
      title: "رد شده",
      value: formatNumber(data.rejected ?? 0),
      color: "error",
      icon: "error",
      percent: percentOf(data.rejected),
    },
    {
      title: "لغو شده",
      value: formatNumber(data.cancelled ?? 0),
      color: "secondary",
      icon: "expired",
      percent: percentOf(data.cancelled),
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
            subtitle={item.subtitle ? t(item.subtitle) : undefined}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(VehicleRequestReportSummary);
