import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { useNavigate } from 'react-router-dom';

import AccidentForm from '../components/AccidentForm';
import useAccident from '../hooks/useAccident';
import { AppCard } from '@/components';
import { useState } from 'react';

const AccidentCreatePage = () => {
  const navigate = useNavigate();
  const { createAccident } = useAccident();
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');
        await createAccident(values);
        navigate('/accidents');
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [createAccident, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ثبت تصادف
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <AppCard sx={{ p: 4 }}>
        <AccidentForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(AccidentCreatePage);
