import React, { memo, useCallback, useState } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import VendorForm from '../components/VendorForm';

import useVendor from '../hooks/useVendor';
import { AppCard, AppAlert } from '@/components';

const VendorCreatePage = () => {
  const navigate = useNavigate();

  const { createVendor } = useVendor();

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        const createdId = await createVendor(values);

        navigate(`/vendors/edit/${createdId}`);
      } catch (error) {
        console.error('Create user error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد کاربر');
      }
    },
    [createVendor, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن تامین کننده
      </Typography>
      {submitError && (
        <AppAlert
          open={!!submitError}
          severity="error"
          title="خطا"
          onClose={() => setSubmitError('')}
        >
          {submitError}
        </AppAlert>
      )}
      <AppCard sx={{ p: 4 }}>
        <VendorForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(VendorCreatePage);
