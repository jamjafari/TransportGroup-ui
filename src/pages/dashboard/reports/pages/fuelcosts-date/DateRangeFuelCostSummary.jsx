import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';
import useDateRangeFuelCostSummary from './hooks/useDateRangeFuelCostSummary';
import { formatNumber } from '@/utils';
const DateRangeFuelCostSummary = () => {
  const { summary = {} } = useDateRangeFuelCostSummary();
  // console.log('data summary in daterange:', data);
  const items = [
    {
      title: 'کل سوخت مصرف شده',

      value: formatNumber(summary?.totalFuel ?? 0),

      color: 'primary',

      icon: 'fuel',
    },

    {
      title: 'کل پرداختی‌های سوخت',

      value: formatNumber(summary?.totalFuelCost ?? 0),

      color: 'warning',

      icon: 'money',
    },

    {
      title: 'میانگین مصرف سوخت در هر ماه',

      value: Number(summary?.averageFuel ?? 0).toFixed(2),

      color: 'info',

      icon: 'fuel',
    },

    {
      title: 'میانگین هزینه سوخت در هر ماه',

      value: formatNumber(summary?.averageCost ?? 0),

      color: 'secondary',

      icon: 'report',
    },

    {
      title: 'تعداد تراکنش‌های سوخت',

      value: formatNumber(summary.transactionCount ?? 0),

      color: 'success',

      icon: 'report',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} xs={12} md={6} lg={3}>
          <KpiCard
            title={item.title}
            value={item.value}
            color={item.color}
            icon={item.icon}
          />
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default DateRangeFuelCostSummary;
