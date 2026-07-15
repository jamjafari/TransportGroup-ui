import React, { memo } from 'react';

import Stack from '@mui/system/Stack';
import { Typography } from '@mui/material';

const LoginHeader = () => {
  return (
    <Stack spacing={1} alignItems="center">
      <Typography variant="h5" fontWeight={700}>
        ورود به سامانه
      </Typography>

      <Typography variant="body2" color="text.secondary" align="center">
        لطفاً نام کاربری و رمز عبور خود را وارد نمایید.
      </Typography>
    </Stack>
  );
};

export default memo(LoginHeader);
