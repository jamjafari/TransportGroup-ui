import { useCallback } from 'react';

import { useExpenseContext } from '../context';
import * as expenseApi from '../api/expenseApi';

const useExpense = () => {
  const {
    expenses,
    setExpenses,
    selectedExpense,
    setSelectedExpense,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useExpenseContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getExpenses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await expenseApi.getExpenses(filters);
      const data = unwrap(response);
      setExpenses(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setExpenses]);

  const getExpenseById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await expenseApi.getExpenseById(id);
        const data = unwrap(response);
        setSelectedExpense(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedExpense],
  );

  const createExpense = useCallback(
    async (expense) => {
      try {
        setLoading(true);
        const response = await expenseApi.createExpense(expense);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateExpense = useCallback(
    async (expense) => {
      console.log('UPDATE expense:', expense);
      try {
        setLoading(true);
        const response = await expenseApi.updateExpense(expense);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteExpense = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await expenseApi.deleteExpense(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    expenses,
    selectedExpense,
    loading,
    filters,
    setFilters,
    getExpenses,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense,
  };
};

export default useExpense;
