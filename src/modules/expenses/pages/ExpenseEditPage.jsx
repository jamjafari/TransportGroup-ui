import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import ExpenseForm from '../components/ExpenseForm';
import ExpenseDocumentSection from '../sections/ExpenseDocumentSection';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useExpense from '../hooks/useExpense';

const ExpenseEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getExpenseById, updateExpense } = useExpense();

  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const loadExpense = async () => {
      const data = await getExpenseById(id);

      setExpense({
        ...data,
        expenseDate: gregorianYearToJalali(data.expenseDate),
        expenseDate: data.expenseDate ? new Date(data.expenseDate) : null,
      });
    };

    loadExpense();
  }, [id, getExpenseById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateExpense(values);
        navigate('/expenses');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateExpense, navigate],
  );

  if (!expense) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش هزینه
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <ExpenseForm initialValues={expense} onSubmit={handleSubmit} />
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <ExpenseDocumentSection expenseId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseEditPage);
