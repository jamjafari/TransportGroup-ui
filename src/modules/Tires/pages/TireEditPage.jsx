import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import TireForm from '../components/TireForm';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useTire from '../hooks/useTire';

const TireEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getTireById, updateTire } = useTire();

  const [tire, setTire] = useState(null);

  useEffect(() => {
    const loadTire = async () => {
      const data = await getTireById(id);

      setTire({
        ...data,
        purchaseDate: gregorianYearToJalali(data.purchaseDate),
        purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
      });
    };

    loadTire();
  }, [id, getTireById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateTire(values);
        navigate('/tires');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateTire, navigate],
  );

  if (!tire) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش خودرو
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <TireForm initialValues={tire} onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(TireEditPage);
