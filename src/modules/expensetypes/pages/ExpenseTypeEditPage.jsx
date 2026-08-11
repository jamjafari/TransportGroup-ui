import React, { memo, useCallback, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useNavigate, useParams } from 'react-router-dom';

import ExpenseTypeForm from '../components/ExpenseTypeForm';

import { gregorianYearToJalali } from '@/utils';
import { AppCard } from '@/components';

import useExpenseType from '../hooks/useExpenseType';

const ExpenseTypeEditPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getExpenseTypeById, updateExpenseType } = useExpenseType();

  const [expenseType, setExpenseType] = useState(null);

  useEffect(() => {
    const loadExpenseType = async () => {
      const data = await getExpenseTypeById(id);

      setExpenseType({
        ...data,
      });
    };

    loadExpenseType();
  }, [id, getExpenseTypeById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        await updateExpenseType(values);
        navigate('/expenseTypes');
      } catch (error) {
        console.error(error);
      }
    },
    [id, updateExpenseType, navigate],
  );

  if (!expenseType) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        ویرایش نوع هزینه
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <ExpenseTypeForm initialValues={expenseType} onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseTypeEditPage);
