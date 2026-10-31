import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";

import useTireSummary from "./hooks/useTireSummary";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const TireReportSummary = () => {
  const { t } = useTranslation();
  const { data = {} } = useTireSummary();
  const total = data.total ?? 0;

  const pct = (value) => (total ? (value / total) * 100 : 0);

  const summaryItems = [
    {
      title: "کل تایرها",
      value: formatNumber(total),
      color: "primary",
      icon: "report",
      subtitle: "ثبت‌شده در سیستم",
    },
    {
      title: "نصب‌شده روی خودرو",
      value: formatNumber(data.mounted ?? 0),
      color: "success",
      icon: "vehicle",
      percent: pct(data.mounted ?? 0),
    },
    {
      title: "در انبار",
      value: formatNumber(data.inStock ?? 0),
      color: "info",
      icon: "check",
      percent: pct(data.inStock ?? 0),
    },
    {
      title: "غیرفعال",
      value: formatNumber(data.inactive ?? 0),
      color: "secondary",
      icon: "expired",
      percent: pct(data.inactive ?? 0),
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
            subtitle={item.subtitle ? t(item.subtitle) : undefined}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(TireReportSummary);
