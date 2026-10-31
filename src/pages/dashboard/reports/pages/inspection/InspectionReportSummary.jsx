import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const InspectionReportSummary = ({ summary = {} }) => {
  const { t } = useTranslation();
  const total = summary.total ?? 0;
  const pct = (value) => (total ? (value / total) * 100 : 0);

  const items = [
    {
      title: "کل معاینه فنیها",
      value: total,
      color: "primary",
      icon: "insurance",
    },
    {
      title: "معتبر",
      value: summary.valid ?? 0,
      color: "success",
      icon: "check",
      percent: pct(summary.valid ?? 0),
    },
    {
      title: "نزدیک به انقضا (۱۵ روز)",
      value: summary.expiringSoon ?? 0,
      color: "warning",
      icon: "warning",
      percent: pct(summary.expiringSoon ?? 0),
    },
    {
      title: "منقضی‌شده",
      value: summary.expired ?? 0,
      color: "error",
      icon: "expired",
      percent: pct(summary.expired ?? 0),
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
          <KpiCard
            title={t(item.title)}
            value={formatNumber(item.value)}
            color={item.color}
            icon={item.icon}
            percent={item.percent}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default memo(InspectionReportSummary);
