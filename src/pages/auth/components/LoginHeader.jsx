import React, { memo } from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LoginHeader = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h5" fontWeight={700}>
        {t('ورود به سامانه')}
      </Typography>

      <Typography variant="body1" color="text.secondary" align="center">
        {t('لطفاً نام کاربری و رمز عبور خود را وارد نمایید')}
      </Typography>
    </Stack>
  );
};

export default memo(LoginHeader);
