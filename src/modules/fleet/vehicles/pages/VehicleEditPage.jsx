import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import VehicleForm from '../components/VehicleForm';
import VehicleDocumentsSection from '../sections/VehicleDocumentsSection';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useVehicle from '../hooks/useVehicle';

const VehicleEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getVehicleById, updateVehicle } = useVehicle();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const loadVehicle = async () => {
      const data = await getVehicleById(id);

      setVehicle({
        ...data,
        productionYear: gregorianYearToJalali(data.productionYear),
        purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
      });
    };

    loadVehicle();
  }, [id, getVehicleById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateVehicle(id, values);
        navigate('/fleet/vehicles');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateVehicle, navigate],
  );

  if (!vehicle) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش خودرو
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <VehicleForm initialValues={vehicle} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <VehicleDocumentsSection vehicleId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(VehicleEditPage);
