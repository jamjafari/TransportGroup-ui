import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

const FleetSummary = ({ summary = {} }) => {
  const items = [
    {
      title: 'کل خودروها',
      value: summary.totalVehicles ?? 0,
    },

    {
      title: 'فعال',
      value: summary.active ?? 0,
    },

    {
      title: 'در مأموریت',
      value: summary.mission ?? 0,
    },

    {
      title: 'تعمیرگاه',
      value: summary.repair ?? 0,
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

export default FleetSummary;
