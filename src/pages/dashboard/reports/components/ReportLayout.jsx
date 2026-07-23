import React from 'react';
import { Paper, Stack, Typography, Divider } from '@mui/material';

const ReportLayout = ({ title, subtitle, children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Stack>

        <Divider />

        {children}
      </Stack>
    </Paper>
  );
};

export default ReportLayout;
