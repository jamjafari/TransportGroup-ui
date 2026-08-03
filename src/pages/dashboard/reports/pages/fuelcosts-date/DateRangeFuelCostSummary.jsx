import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';
import useDateRangeFuelCostSummary from './hooks/useDateRangeFuelCostSummary';
const DateRangeFuelCostSummary = () => {
  const { summary = {} } = useDateRangeFuelCostSummary();
  // console.log('data summary in daterange:', data);
  const items = [
    {
      title: 'کل سوخت مصرف شده',

      value: Number(summary?.totalFuel ?? 0).toLocaleString('en-US'),

      color: 'primary',

      icon: 'fuel',
    },

    {
      title: 'کل پرداختی‌های سوخت',

      value: Number(summary?.totalFuelCost ?? 0).toLocaleString('en-US'),

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

      value: Number(summary?.averageCost ?? 0).toLocaleString('en-US'),

      color: 'secondary',

      icon: 'report',
    },

    {
      title: 'تعداد تراکنش‌های سوخت',

      value: Number(summary.transactionCount ?? 0).toLocaleString('en-US'),

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
