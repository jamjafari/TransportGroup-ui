import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import FuelRecordForm from '../components/FuelRecordForm';

import useFuelRecord from '../hooks/useFuelRecord';
import { AppCard } from '@/components';

const FuelRecordCreatePage = () => {
  const navigate = useNavigate();

  const { createFuelRecord } = useFuelRecord();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createFuelRecord(values);
        navigate(`/fuelRecords/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createFuelRecord, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        سوختگیری جدید
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FuelRecordForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(FuelRecordCreatePage);
