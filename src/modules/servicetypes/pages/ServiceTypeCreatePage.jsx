import React, { memo, useCallback, useState } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ServiceTypeForm from '../components/ServiceTypeForm';

import useServiceType from '../hooks/useServiceType';
import { AppCard, AppAlert } from '@/components';

const ServiceTypeCreatePage = () => {
  const navigate = useNavigate();

  const { createServiceType } = useServiceType();

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        const createdId = await createServiceType(values);

        navigate(`/serviceTypes`);
      } catch (error) {
        console.error('Create user error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد کاربر');
      }
    },
    [createServiceType, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن نوع سرویس
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
        <ServiceTypeForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ServiceTypeCreatePage);
