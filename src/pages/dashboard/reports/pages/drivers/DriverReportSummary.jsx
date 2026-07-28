import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import useDriverSummary from './hooks/useDriverSummary';

const DriverReportSummary = () => {
  const { data } = useDriverSummary();

  const summaryItems = [
    {
      title: 'کل رانندگان',
      value: data.total,
    },
    {
      title: 'فعال',
      value: data.active,
    },
    {
      title: 'در مأموریت',
      value: data.mission,
    },
    {
      title: 'غیرفعال',
      value: data.inactive,
    },
    {
      title: 'در تعمیرگاه',
      value: data.repair,
    },
  ];
  return (
    <DashboardGrid>
      {summaryItems.map((item) => (
        <DashboardColumn key={item.title} md={3}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="body2">
                {item.title}
              </Typography>

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

export default DriverReportSummary;
