import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { useNavigate, useParams } from 'react-router-dom';

import AccidentForm from '../components/AccidentForm';
import AccidentDocumentsSection from '../sections/AccidentDocumentsSection';
import useAccident from '../hooks/useAccident';
import { AppCard } from '@/components';

const AccidentEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAccidentById, updateAccident } = useAccident();

  const [accident, setAccident] = useState(null);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    getAccidentById(id).then((data) => {
      setAccident({
        ...data,
        accidentDate: data.accidentDate ? new Date(data.accidentDate) : null,
      });
    });
  }, [id, getAccidentById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');
        await updateAccident({ ...values, id });
        navigate('/accidents');
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [id, updateAccident, navigate],
  );

  if (!accident) return null;

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش تصادف
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <AppCard sx={{ p: 4 }}>
        <AccidentForm initialValues={accident} onSubmit={handleSubmit} />
      </AppCard>
      <AppCard sx={{ p: 4 }}>
        <AccidentDocumentsSection accidentId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(AccidentEditPage);
