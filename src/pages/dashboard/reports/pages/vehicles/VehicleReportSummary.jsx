import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import useVehicleSummary from './hooks/useVehicleSummary';

const MissionReportSummary = () => {
  const { data } = useVehicleSummary();

  const summaryItems = [
    {
      title: 'کل خودروها',
      value: data?.total ?? 0,
    },
    {
      title: ' فعال',
      value: data?.active ?? 0,
    },
    {
      title: 'غیر فعال  ',
      value: data?.inactive ?? 0,
    },
    {
      title: ' در مامورت',
      value: data?.mission ?? 0,
    },
    {
      title: ' در تعمیرگاه',
      value: data?.repair ?? 0,
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

export default MissionReportSummary;
