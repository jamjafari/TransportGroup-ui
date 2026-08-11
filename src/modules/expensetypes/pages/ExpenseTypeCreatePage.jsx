import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ExpenseTypeForm from '../components/ExpenseTypeForm';

import useExpenseType from '../hooks/useExpenseType';
import { AppCard } from '@/components';

const ExpenseTypeCreatePage = () => {
  const navigate = useNavigate();

  const { createExpenseType } = useExpenseType();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createExpenseType(values);
        navigate(`/expenseTypes`);
      } catch (error) {
        console.error(error);
      }
    },
    [createExpenseType, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        افزودن نوع هزینه
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <ExpenseTypeForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseTypeCreatePage);
