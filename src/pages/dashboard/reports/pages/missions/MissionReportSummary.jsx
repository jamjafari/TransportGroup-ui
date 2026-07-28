import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import useMissionSummary from './hooks/useMissionSummary';

const MissionReportSummary = () => {
  const { data } = useMissionSummary();

  const summaryItems = [
    {
      title: 'کل مأموریت‌ها',
      value: data?.total ?? 0,
    },
    {
      title: 'انجام شده',
      value: data?.completed ?? 0,
    },
    {
      title: 'در حال انجام',
      value: data?.running ?? 0,
    },
    {
      title: 'لغو شده',
      value: data?.cancelled ?? 0,
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
