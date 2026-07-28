import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FBVReportKPI = ({ kpi = {} }) => {
  const items = [
    {
      title: 'میانگین هزینه برای هر خودرو ',

      value: kpi.averageCostPerVehicle ?? 0,
    },

    {
      title: '  میانگین هزینه در هر ماموریت',

      value: kpi.averageCostPerMission ?? 0,
    },

    {
      title: ' پرهزینه ترین خودرو ',

      value: kpi.mostExpensiveVehicle ?? 0,
    },
    {
      title: ' هزینه پرمصرف ترین خودرو',

      value: kpi.mostExpensiveVehicleCost ?? 0,
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

export default FBVReportKPI;
