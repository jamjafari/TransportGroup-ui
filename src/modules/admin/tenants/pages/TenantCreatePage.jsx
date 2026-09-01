import React, { memo, useCallback, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import TenantForm from '../components/TenantForm';
import useTenant from '../hooks/useTenant';

import { AppCard, AppAlert } from '@/components';

const TenantCreatePage = () => {
  const navigate = useNavigate();

  const { createTenant } = useTenant();

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        await createTenant(values);

        navigate('/admin/tenants');
      } catch (error) {
        console.error('Create tenant error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد سازمان');
      }
    },
    [createTenant, navigate],
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
        افزودن سازمان
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
        <TenantForm onSubmit={handleSubmit} isEdit={false} />
      </AppCard>
    </Box>
  );
};

export default memo(TenantCreatePage);
