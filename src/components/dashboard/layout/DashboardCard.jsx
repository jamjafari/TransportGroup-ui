// src/components/common/cards/DashboardCard.jsx

import React, { memo } from 'react';

import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';

const DashboardCard = ({ title, subtitle, children, height = '100%' }) => {
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 3,
        height,
      }}
    >
      {(title || subtitle) && (
        <>
          <CardContent sx={{ pb: 1 }}>
            <Stack spacing={0.5}>
              {title && (
                <Typography variant="h6" fontWeight={600}>
                  {title}
                </Typography>
              )}

              {subtitle && (
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
              )}
            </Stack>
          </CardContent>

          <Divider />
        </>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default memo(DashboardCard);
