import React, { memo, useCallback, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import UserForm from '../components/UserForm';
import useUser from '../hooks/useUser';

import { AppCard, AppAlert } from '@/components';

const UserCreatePage = () => {
  const navigate = useNavigate();

  const { createUser } = useUser();

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        await createUser(values);

        navigate('/admin/users');
      } catch (error) {
        console.error('Create user error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد کاربر');
      }
    },
    [createUser, navigate],
  );

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        py: 3,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن کاربر
      </Typography>

      {submitError && (
        <AppAlert
          open={!!submitError}
          severity="error"
          title="خطا"
          onClose={() => setSubmitError('')}
        >
          {submitError}
        </AppAlert>
      )}

      <AppCard sx={{ p: 4 }}>
        <UserForm onSubmit={handleSubmit} isEdit={false} />
      </AppCard>
    </Box>
  );
};

export default memo(UserCreatePage);
