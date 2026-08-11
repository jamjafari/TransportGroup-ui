import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import ServiceTypeForm from '../components/ServiceTypeForm';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useServiceType from '../hooks/useServiceType';

const ServiceTypeEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getServiceTypeById, updateServiceType } = useServiceType();

  const [serviceType, setServiceType] = useState(null);

  useEffect(() => {
    const loadServiceType = async () => {
      const data = await getServiceTypeById(id);

      setServiceType({
        ...data,
      });
    };

    loadServiceType();
  }, [id, getServiceTypeById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateServiceType(values);
        navigate('/serviceTypes');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateServiceType, navigate],
  );

  if (!serviceType) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش نوع سرویس
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <ServiceTypeForm initialValues={serviceType} onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ServiceTypeEditPage);
