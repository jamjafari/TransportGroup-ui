import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import VendorForm from '../components/VendorForm';

import useVendor from '../hooks/useVendor';
import { AppCard } from '@/components';

const VendorCreatePage = () => {
  const navigate = useNavigate();

  const { createVendor } = useVendor();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createVendor(values);
        navigate(`/vendors/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createVendor, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن تامین کننده
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <VendorForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(VendorCreatePage);
