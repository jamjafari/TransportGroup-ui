import React, { memo } from 'react';

import { AppStack } from '@/components/common/layout/AppStack';
import { AppContainer } from '@/components/common/layout/AppContainer';
import { AppCard } from '@/components/common/cards';

import LoginLogo from './components/LoginLogo';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <AppContainer
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <AppCard
        sx={{
          width: '100%',
          maxWidth: 460,
          px: 5,
          py: 5,
        }}
      >
        <AppStack spacing={4}>
          <LoginLogo />

          <LoginHeader />

          <LoginForm />
        </AppStack>
      </AppCard>
    </AppContainer>
  );
};

export default memo(LoginPage);
