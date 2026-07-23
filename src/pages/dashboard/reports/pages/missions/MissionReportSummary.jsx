import React from 'react';
import { DashboardGrid, DashboardColumn } from '@/components';
import { Paper, Stack, Typography } from '@mui/material';

const summaryItems = [
  {
    title: 'کل مأموریت‌ها',
    value: 250,
  },
  {
    title: 'انجام شده',
    value: 190,
  },
  {
    title: 'در حال انجام',
    value: 45,
  },
  {
    title: 'لغو شده',
    value: 15,
  },
];

const MissionReportSummary = () => {
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
