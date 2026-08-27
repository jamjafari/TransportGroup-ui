import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FinancialReportSummary = ({ summary = {} }) => {
  const items = [
    { title: 'کل هزینه‌ها', value: summary.total ?? 0 },
    { title: 'هزینه‌های سوخت', value: summary.totalFuel ?? 0 },
    { title: 'سایر هزینه‌ها', value: summary.totalExpense ?? 0 },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} md={4}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Stack spacing={1}>
              <Typography variant="body2">{item.title}</Typography>
              <Typography variant="h4" fontWeight={700}>
                {Number(item.value).toLocaleString('fa-IR')}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FinancialReportSummary;
