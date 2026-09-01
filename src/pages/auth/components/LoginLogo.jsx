import React, { memo } from 'react';

import Stack from '@mui/material/Stack';
import { Avatar, Typography } from '@mui/material';

import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

const LoginLogo = () => {
  // console.log('LoginLogo Loaded');
  // console.log(Stack);
  return (
    <Stack spacing={2} alignItems="center">
      <Avatar
        sx={{
          width: 72,
          height: 72,
          bgcolor: 'primary.main',
        }}
      >
        <DirectionsCarFilledIcon
          sx={{
            fontSize: 40,
          }}
        />
      </Avatar>

      <Stack spacing={0.5} alignItems="center">
        <Typography variant="h3" fontWeight={700}>
          سامانه نوابری هوشمند
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          variant="body2"
          color="text.secondary"
        ></Typography>
      </Stack>
    </Stack>
  );
};

export default memo(LoginLogo);
