import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { AppButton } from '@/components';
import i18n from '@/i18n';

const SubscriptionExpired = () => {
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
      <Typography variant="h3" fontWeight={700} color="warning.main">
        {i18n.t('اشتراک شما منقضی شده است')}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        {i18n.t('برای ادامه‌ی استفاده از سامانه، لطفاً اشتراک خود را تمدید یا ارتقا دهید.')}
      </Typography>

      <AppButton onClick={() => navigate('/login')}>
        {i18n.t('بازگشت به صفحه ورود')}
      </AppButton>
    </Box>
  );
};

export default memo(SubscriptionExpired);
