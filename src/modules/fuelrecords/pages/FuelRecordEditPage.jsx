import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import FuelRecordForm from '../components/FuelRecordForm';
import FuelRecordDocumentSection from '../sections/FuelRecordDocumentSection';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useFuelRecord from '../hooks/useFuelRecord';

const FuelRecordEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getFuelRecordById, updateFuelRecord } = useFuelRecord();

  const [fuelRecord, setFuelRecord] = useState(null);

  useEffect(() => {
    const loadFuelRecord = async () => {
      const data = await getFuelRecordById(id);

      setFuelRecord({
        ...data,
        fuelDate: gregorianYearToJalali(data.fuelDate),
        fuelDate: data.fuelDate ? new Date(data.fuelDate) : null,
      });
    };

    loadFuelRecord();
  }, [id, getFuelRecordById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateFuelRecord(values);
        navigate('/fuelRecords');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateFuelRecord, navigate],
  );

  if (!fuelRecord) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش سوختگیری
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FuelRecordForm initialValues={fuelRecord} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <FuelRecordDocumentSection fuelRecordId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(FuelRecordEditPage);
