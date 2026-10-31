import { memo } from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import { BatoroCar } from '@/components/layout/BatoroLogo';
import i18n from '@/i18n';

const LoginLogo = () => {
  return (
    <Stack spacing={2} alignItems="center">
      {/* ✅ لوگوی پروژه (همان پیکان سایدبار) */}
      <BatoroCar height={96} />

      <Stack spacing={0.5} alignItems="center">
        <Typography variant="h3" fontWeight={800} textAlign="center" lineHeight={1.2}>
          {i18n.t('باتورو')}
        </Typography>
        {/* ✅ textAlign: عنوان انگلیسی بلند است و دو خط می‌شود؛ بدون آن خط‌ها چپ‌چین می‌شدند */}
        <Typography variant="h6" fontWeight={600} color="text.secondary" textAlign="center">
          {i18n.t('سامانه ناوبری هوشمند')}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default memo(LoginLogo);
