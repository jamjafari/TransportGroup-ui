import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FinancialReportSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل هزینه ها',
      value: summary.total ?? 0,
    },

    {
      title: 'هزینه های سوخت',
      value: summary.totalFuel ?? 0,
    },

    {
      title: 'هزینه های بیمه ',
      value: summary.totalInsurance ?? 0,
    },

    {
      title: 'هزینه های سرویس',
      value: summary.totalService ?? 0,
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} md={2.4}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="body2">{item.title}</Typography>

              <Typography variant="h4" fontWeight={700}>
                {item.value}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FinancialReportSummary;
