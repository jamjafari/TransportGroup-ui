import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { AppButton } from '@/components';

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h3" fontWeight={700} color="error">
        ۴۰۳
      </Typography>

      <Typography variant="h6">
        شما دسترسی لازم برای مشاهده‌ی این صفحه را ندارید
      </Typography>

      <AppButton onClick={() => navigate('/dashboard')}>
        بازگشت به داشبورد
      </AppButton>
    </Box>
  );
};

export default memo(Forbidden);
