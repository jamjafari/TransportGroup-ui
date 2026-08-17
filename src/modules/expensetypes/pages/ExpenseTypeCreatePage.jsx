import React, { memo, useCallback, useState } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ExpenseTypeForm from '../components/ExpenseTypeForm';

import useExpenseType from '../hooks/useExpenseType';
import { AppCard, AppAlert } from '@/components';

const ExpenseTypeCreatePage = () => {
  const navigate = useNavigate();

  const { createExpenseType } = useExpenseType();

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError('');

        const createdId = await createExpenseType(values);

        navigate(`/expenseTypes`);
      } catch (error) {
        console.error('Create user error:', error);

        setSubmitError(error?.message || 'خطا در ایجاد کاربر');
      }
    },
    [createExpenseType, navigate],
  );
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن نوع هزینه
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
        <ExpenseTypeForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseTypeCreatePage);
