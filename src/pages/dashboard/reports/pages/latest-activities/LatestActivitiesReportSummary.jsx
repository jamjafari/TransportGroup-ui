import React from 'react';

import { Paper, Stack, Typography } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import useLatestActivitiesSummary from './hooks/useLatestActivitiesSummary';

const LatestActivitiesReportSummary = () => {
  const { data } = useLatestActivitiesSummary();

  const summaryItems = [
    {
      title: 'کل فعالیت ها ',
      value: data.total,
    },
    {
      title: 'فعالیتهای ماموریت',
      value: data.mission,
    },
    {
      title: 'فعالیتهای سوخت ',
      value: data.fuel,
    },
    {
      title: 'فعالیتهای هزینه',
      value: data.expense,
    },
    {
      title: 'فعالیتهای بیمه',
      value: data.insurance,
    },
    {
      title: 'فعالیتهای سرویس',
      value: data.service,
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

export default LatestActivitiesReportSummary;
