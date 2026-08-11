import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import FuelCardForm from '../components/FuelCardForm';

import useFuelCard from '../hooks/useFuelCard';
import { AppCard } from '@/components';

const FuelCardCreatePage = () => {
  const navigate = useNavigate();

  const { createFuelCard } = useFuelCard();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createFuelCard(values);
        navigate(`/fuelCards`);
      } catch (error) {
        console.error(error);
      }
    },
    [createFuelCard, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن کارت سوخت
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FuelCardForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(FuelCardCreatePage);
