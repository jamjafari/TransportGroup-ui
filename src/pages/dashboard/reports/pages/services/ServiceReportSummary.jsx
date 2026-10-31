import React, { memo } from "react";

import { DashboardGrid, DashboardColumn, KpiCard } from "@/components";
import { useTranslation } from "react-i18next";
import { formatNumber } from '@/utils';

const ServiceReportSummary = ({ summary = {} }) => {
  const { t } = useTranslation();
  const items = [
    {
      title: "کل سرویس‌ها",

      value: formatNumber(summary.totalServices ?? 0),

      color: "primary",

      icon: "service",
    },

    {
      title: "کل هزینه سرویس‌ها",

      value: formatNumber(summary.totalServiceCost ?? 0),

      color: "warning",

      icon: "money",
    },

    // {
    //   title: 'میانگین هزینه سرویس',

    //   value: Number(summary.averageServiceCost ?? 0).toLocaleString('en-US'),

    //   color: 'info',

    //   icon: 'report',
    // },

    {
      title: "سرویس‌های فعال",

      value: formatNumber(summary.activeCount ?? 0),

      color: "success",

      icon: "check",
    },

    {
      title: "سرویس‌های معوق",

      value: formatNumber(summary.overdueCount ?? 0),

      color: "error",

      icon: "expired",
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

export default memo(ServiceReportSummary);
