import React, { memo, useCallback, useState } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import TireForm from '../components/TireForm';

import useTire from '../hooks/useTire';
import { AppCard, AppAlert } from '@/components';

const TireCreatePage = () => {
  const navigate = useNavigate();

  const { createTire } = useTire();
  const [submitError, setSubmitError] = useState('');

  // const handleSubmit = useCallback(
  //   async (values) => {
  //     // console.log('Submit clicked');
  //     // console.log(values);
  //     try {
  //       const createdId = await createTire(values);
  //       navigate(`/tires`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [createTire, navigate],
  // );
  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        const createdId = await createTire(values);

        navigate(`/tires`);
      } catch (error) {
        console.error('Create user error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد کاربر');
      }
    },
    [createTire, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن تایر
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
        <TireForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(TireCreatePage);
