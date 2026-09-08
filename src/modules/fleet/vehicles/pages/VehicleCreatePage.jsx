import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import VehicleForm from '../components/VehicleForm';

import useVehicle from '../hooks/useVehicle';
import { AppCard, AppAlert } from '@/components';
import { usePlanLimits } from '@/hooks';

const VehicleCreatePage = () => {
  const { canAddVehicle, tenant } = usePlanLimits();

  const navigate = useNavigate();
  const { createVehicle } = useVehicle();

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const createdId = await createVehicle(values);
        navigate(`/fleet/vehicles/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createVehicle, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن خودرو
      </Typography>

      {!canAddVehicle && (
        <AppAlert severity="warning" sx={{ mb: 3 }}>
          به سقف مجاز {tenant?.maxVehicles} خودرو در پلن فعلی رسیده‌اید. برای
          افزودن بیشتر، اشتراک خود را ارتقا دهید.
        </AppAlert>
      )}

      <AppCard sx={{ p: 4 }}>
        <VehicleForm onSubmit={handleSubmit} disabled={!canAddVehicle} />
      </AppCard>
    </Box>
  );
};

export default memo(VehicleCreatePage);
