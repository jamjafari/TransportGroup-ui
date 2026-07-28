import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FleetAlerts = ({
  alerts = { expiredInsurance: 0, requiredService: 0, criticalService: 0 },
}) => {
  const items = [
    {
      title: 'بیمه منقضی',

      value: alerts.expiredInsurance,

      color: '#d32f2f',
    },

    {
      title: 'سرویس ضروری',

      value: alerts.requiredService,

      color: '#ed6c02',
    },

    {
      title: 'سرویس بحرانی',

      value: alerts.criticalService,

      color: '#b71c1c',
    },
  ];

  return (
    <DashboardGrid>
      {items.map((item) => (
        <DashboardColumn key={item.title} md={4}>
          <Paper
            sx={{
              p: 2,
              borderLeft: `6px solid ${item.color}`,
            }}
          >
            <Stack>
              <Typography>{item.title}</Typography>

              <Typography variant="h4" fontWeight={700} color={item.color}>
                {item.value}
              </Typography>
            </Stack>
          </Paper>
        </DashboardColumn>
      ))}
    </DashboardGrid>
  );
};

export default FleetAlerts;
