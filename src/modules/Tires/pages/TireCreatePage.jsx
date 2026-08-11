import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import TireForm from '../components/TireForm';

import useTire from '../hooks/useTire';
import { AppCard } from '@/components';

const TireCreatePage = () => {
  const navigate = useNavigate();

  const { createTire } = useTire();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createTire(values);
        navigate(`/tires`);
      } catch (error) {
        console.error(error);
      }
    },
    [createTire, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن راننده
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <TireForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(TireCreatePage);
