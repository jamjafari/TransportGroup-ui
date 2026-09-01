import React, { memo } from 'react';

import { Box } from '@mui/material';

import { AppStack } from '@/components/common/layout/AppStack';
import { AppContainer } from '@/components/common/layout/AppContainer';
import { AppCard } from '@/components/common/cards';

import LoginLogo from './components/LoginLogo';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';

import loginBackground from '@/assets/images/fleet-login-bg.png';

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* لایه مات روی تصویر */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.20)',
        }}
      />

      <AppContainer
        maxWidth="sm"
        sx={{
          position: 'relative',
          zIndex: 1,

          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AppCard
          sx={{
            width: '100%',
            maxWidth: 460,

            px: 5,
            py: 5,

            // کارت نیمه‌شفاف
            backgroundColor: 'rgba(255, 255, 255, 0.2)',

            // ایجاد حس شیشه‌ای
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(5px)',

            // کنتراست و عمق بیشتر
            border: '1px solid rgba(211, 208, 208, 0.65)',

            boxShadow: `
      0 10px 35px rgba(30, 1, 1, 0.18),
      0 2px 8px rgba(0, 0, 0, 0.08)
    `,
          }}
        >
          <AppStack spacing={4}>
            <LoginLogo />

            <LoginHeader />

            <LoginForm />
          </AppStack>
        </AppCard>
      </AppContainer>
    </Box>
  );
};

export default memo(LoginPage);
