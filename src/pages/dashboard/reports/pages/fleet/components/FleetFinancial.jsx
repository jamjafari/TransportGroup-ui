import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FleetFinancial = ({
  financial = {
    totalFuel: 0,

    totalExpense: 0,

    costPerVehicle: 0,
  },
}) => {
  const items = [
    {
      title: 'هزینه سوخت',

      value: financial.totalFuel ?? 0,
    },

    {
      title: 'هزینه‌های جاری',

      value: financial.totalExpense ?? 0,
    },

    {
      title: 'هزینه هر خودرو',

      value: financial.costPerVehicle ?? 0,
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} md={4}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
            }}
          >
            <Stack>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>

              <Typography variant="h5" fontWeight={700}>
                {item.value.toLocaleString()}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FleetFinancial;
