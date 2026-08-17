import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import LocationForm from '../components/LocationForm';

import useLocation from '../hooks/useLocation';
import { AppCard } from '@/components';

const LocationCreatePage = () => {
  const navigate = useNavigate();

  const { createLocation } = useLocation();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createLocation(values);
        navigate(`/locations`);
      } catch (error) {
        console.error(error);
      }
    },
    [createLocation, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن مکان
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <LocationForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(LocationCreatePage);
