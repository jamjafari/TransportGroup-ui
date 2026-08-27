import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ServiceForm from '../components/ServiceForm';

import useService from '../hooks/useService';
import { AppCard } from '@/components';

const ServiceCreatePage = () => {
  const navigate = useNavigate();

  const { createService } = useService();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createService(values);
        navigate(`/services/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createService, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        سرویس جدید
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <ServiceForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ServiceCreatePage);
