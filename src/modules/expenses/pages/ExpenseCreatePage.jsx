import React, { memo, useCallback } from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

import ExpenseForm from '../components/ExpenseForm';

import useExpense from '../hooks/useExpense';
import { AppCard } from '@/components';

const ExpenseCreatePage = () => {
  const navigate = useNavigate();

  const { createExpense } = useExpense();

  const handleSubmit = useCallback(
    async (values) => {
      console.log('Submit clicked');
      console.log(values);
      try {
        const createdId = await createExpense(values);
        navigate(`/expenses/edit/${createdId}`);
      } catch (error) {
        console.error(error);
      }
    },
    [createExpense, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        هزینه جدید
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <ExpenseForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseCreatePage);
