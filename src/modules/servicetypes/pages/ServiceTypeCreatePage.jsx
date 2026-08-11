import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ServiceTypeForm from '../components/ServiceTypeForm';

import useServiceType from '../hooks/useServiceType';
import { AppCard } from '@/components';

const ServiceTypeCreatePage = () => {
  const navigate = useNavigate();

  const { createServiceType } = useServiceType();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createServiceType(values);
        navigate(`/serviceTypes`);
      } catch (error) {
        console.error(error);
      }
    },
    [createServiceType, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن نوع سرویس
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <ServiceTypeForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ServiceTypeCreatePage);
