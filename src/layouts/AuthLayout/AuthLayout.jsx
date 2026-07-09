import React, { memo } from 'react';

import { Box, Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

import { AppCard } from '@/components';

import {
  AuthLayoutPropTypes,
  AuthLayoutDefaultProps,
} from './AuthLayout.types';

const AuthLayout = ({
  maxWidth,

  children,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'center',

        backgroundColor: 'background.default',

        px: 2,
      }}
    >
      <Container maxWidth={maxWidth}>
        <AppCard>{children || <Outlet />}</AppCard>
      </Container>
    </Box>
  );
};

AuthLayout.propTypes = AuthLayoutPropTypes;

AuthLayout.defaultProps = AuthLayoutDefaultProps;

export default memo(AuthLayout);
