import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import DriverForm from '../components/DriverForm';

import useDriver from '../hooks/useDriver';
import { AppCard } from '@/components';

const DriverCreatePage = () => {
  const navigate = useNavigate();

  const { createDriver } = useDriver();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createDriver(values);
        navigate(`/drivers/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createDriver, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن راننده
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <DriverForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(DriverCreatePage);
