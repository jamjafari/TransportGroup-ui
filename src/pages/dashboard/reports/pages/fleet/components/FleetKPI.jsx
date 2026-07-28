import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FleetKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'ضریب بهره‌وری',

      value: `${kpi.utilization ?? 0}%`,
    },

    {
      title: 'آماده به کار',

      value: `${kpi.availability ?? 0}%`,
    },

    {
      title: 'میانگین مصرف',

      value: `${kpi.averageFuel ?? 0} L`,
    },

    {
      title: 'میانگین کارکرد',

      value: `${kpi.averageKm ?? 0} Km`,
    },

    // {
    //   title: 'هزینه هر خودرو',

    //   value: kpi.costPerVehicle ?? 0,
    // },

    {
      title: 'هزینه در هر 1000 کیلومتر',

      value: kpi.costPerKm ?? 0,
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

export default FleetKPI;
