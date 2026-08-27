import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import InsuranceForm from '../components/InsuranceForm';

import useInsurance from '../hooks/useInsurance';
import { AppCard } from '@/components';

const InsuranceCreatePage = () => {
  const navigate = useNavigate();

  const { createInsurance } = useInsurance();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createInsurance(values);
        navigate(`/insurances/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createInsurance, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        بیمه جدید
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <InsuranceForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(InsuranceCreatePage);
