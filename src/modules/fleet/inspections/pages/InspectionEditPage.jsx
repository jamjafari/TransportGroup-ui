import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { useNavigate, useParams } from 'react-router-dom';

import InspectionForm from '../components/InspectionForm';
import InspectionDocumentsSection from '../sections/InspectionDocumentsSection';

import useInspection from '../hooks/useInspection';
import { AppCard } from '@/components';

const InspectionEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getInspectionById, updateInspection } = useInspection();

  const [inspection, setInspection] = useState(null);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    getInspectionById(id).then((data) => {
      setInspection({
        ...data,
        inspectionDate: data.inspectionDate
          ? new Date(data.inspectionDate)
          : null,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        vendorId: data.vendorId ?? null,
        cost: data.cost ?? '',
        certificateNumber: data.certificateNumber ?? '',
        odometerKM: data.odometerKM ?? '',
        description: data.description ?? '',
      });
    });
  }, [id, getInspectionById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');
        await updateInspection({ ...values, id });
        navigate('/inspections');
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [id, updateInspection, navigate],
  );

  if (!inspection) return null;

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش معاینه فنی
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <AppCard sx={{ p: 4 }}>
        <InspectionForm initialValues={inspection} onSubmit={handleSubmit} />
      </AppCard>
      <AppCard sx={{ p: 4 }}>
        <InspectionDocumentsSection inspectionId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(InspectionEditPage);
