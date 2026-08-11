import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import DriverForm from '../components/DriverForm';
import DriverDocumentsSection from '../sections/DriverDocumentsSection';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useDriver from '../hooks/useDriver';

const DriverEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getDriverById, updateDriver } = useDriver();

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const loadDriver = async () => {
      const data = await getDriverById(id);

      setDriver({
        ...data,
        licenseExpireDate: gregorianYearToJalali(data.licenseExpireDate),
        licenseExpireDate: data.licenseExpireDate
          ? new Date(data.licenseExpireDate)
          : null,
      });
    };

    loadDriver();
  }, [id, getDriverById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateDriver(values);
        navigate('/drivers');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateDriver, navigate],
  );

  if (!driver) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش خودرو
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <DriverForm initialValues={driver} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <DriverDocumentsSection driverId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(DriverEditPage);
