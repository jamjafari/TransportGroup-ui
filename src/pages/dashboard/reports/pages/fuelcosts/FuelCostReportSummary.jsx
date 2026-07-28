import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FuelCostReportSummary = ({ summary = {} }) => {
  const items = [
    {
      title: '  کل سوخت مصرف شده',
      value: summary.totalFuel ?? 0,
    },
    {
      title: '  کل پرداختی های سوخت',
      value: summary.totalFuelCost ?? 0,
    },
    {
      title: '    میانگین مصرف سوخت در هر ماه ',
      value: summary.averageFuel ?? 0,
    },

    {
      title: ' میانگین هزینه های سوخت در هر ماه ',
      value: summary.averageCost ?? 0,
    },

    {
      title: ' تعداد تراکنش های سوخت ',
      value: summary.transactionCount ?? 0,
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

export default FuelCostReportSummary;
