import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useDriverSummary from "./hooks/useDriverSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const DriverReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useDriverSummary();

  const summaryItems = [
    {
      title: "کل رانندگان",
      value: formatNumber(data.total ?? 0),
      color: "primary",
      icon: "vehicle",
      subtitle: "ثبت‌شده در سیستم",
    },
    {
      title: "فعال",
      value: formatNumber(data.active ?? 0),
      color: "success",
      icon: "check",
      percent: data.total ? (data.active / data.total) * 100 : 0,
    },
    {
      title: "غیرفعال",
      value: formatNumber(data.inactive ?? 0),
      color: "secondary",
      icon: "expired",
      percent: data.total ? (data.inactive / data.total) * 100 : 0,
    },
  ];
  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
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

export default memo(DriverReportSummary);
