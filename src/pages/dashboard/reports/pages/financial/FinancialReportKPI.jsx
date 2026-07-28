import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FinancialReportKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'میانگین هزینه برای هر خودرو ',

      value: kpi.costPerVehicle ?? 0,
    },

    {
      title: '  میانگین هزینه ماهانه',

      value: kpi.monthlyAverage ?? 0,
    },

    {
      title: ' درصد هزینه سوخت به کل هزینه',

      value: `${kpi.fuelPercent ?? 0} %`,
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn md={4} key={item.title}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>

              <Typography variant="h5" fontWeight={700}>
                {item.value}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FinancialReportKPI;
