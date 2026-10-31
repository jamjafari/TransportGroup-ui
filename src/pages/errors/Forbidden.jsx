import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { AppButton } from '@/components';
import i18n from '@/i18n';

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
        {i18n.t('۴۰۳')}
      </Typography>

      <Typography variant="h6">
        {i18n.t('شما دسترسی لازم برای مشاهده‌ی این صفحه را ندارید')}
      </Typography>

      <AppButton onClick={() => navigate('/dashboard')}>
        {i18n.t('بازگشت به داشبورد')}
      </AppButton>
    </Box>
  );
};

export default memo(Forbidden);
