import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn, KpiCard } from '@/components';
import useDateRangeFinancialSummary from './hooks/useDateRangeFinancialSummary';
const DateRangeFinancialSummary = () => {
  const { data = {} } = useDateRangeFinancialSummary();
  console.log('data summary in daterange:', data);
  const items = [
    {
      title: ' تعداد هزینه ها  ',
      value: data?.total ?? 0,
      color: 'primary',
    },
    {
      title: '  تعداد هزینه های تایید شده',
      value: data?.Approved ?? 0,
      color: 'success',
    },
    {
      title: ' تعداد هزینه های رد شده ',
      value: data?.Rejected ?? 0,
      color: 'error',
    },

    {
      title: '  تعداد هزینه های در حال رسیدگی',
      value: data?.Pending ?? 0,
      color: 'info',
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

export default DateRangeFinancialSummary;
