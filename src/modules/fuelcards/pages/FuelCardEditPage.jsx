import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import FuelCardForm from '../components/FuelCardForm';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useFuelCard from '../hooks/useFuelCard';

const FuelCardEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getFuelCardById, updateFuelCard } = useFuelCard();

  const [fuelCard, setFuelCard] = useState(null);

  useEffect(() => {
    const loadFuelCard = async () => {
      const data = await getFuelCardById(id);

      setFuelCard({
        ...data,
      });
    };

    loadFuelCard();
  }, [id, getFuelCardById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateFuelCard(values);
        navigate('/fuelCards');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateFuelCard, navigate],
  );

  if (!fuelCard) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش کارت سوخت
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FuelCardForm initialValues={fuelCard} onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(FuelCardEditPage);
