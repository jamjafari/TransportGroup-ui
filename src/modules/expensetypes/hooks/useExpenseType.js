import { useCallback } from 'react';

import { useExpenseTypeContext } from '../context';
import * as expenseTypeApi from '../api/expenseTypeApi';

const useExpenseType = () => {
  const {
    expenseTypes,
    setExpenseTypes,
    selectedExpenseType,
    setSelectedExpenseType,
    loading,
    setLoading,
    filters,
    setFilters,
  } = useExpenseTypeContext();

  const unwrap = (response) => {
    if (!response.success) {
      throw new Error(response.errors?.[0] || 'خطا در ارتباط با سرور');
    }
    return response.data;
  };

  const getExpenseTypes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await expenseTypeApi.getExpenseTypes(filters);
      const data = unwrap(response);
      setExpenseTypes(data);
      return data;
    } finally {
      setLoading(false);
    }
  }, [filters, setLoading, setExpenseTypes]);

  const getExpenseTypeById = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await expenseTypeApi.getExpenseTypeById(id);
        const data = unwrap(response);
        setSelectedExpenseType(data);
        return data;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setSelectedExpenseType],
  );

  const createExpenseType = useCallback(
    async (expenseType) => {
      try {
        setLoading(true);
        const response = await expenseTypeApi.createExpenseType(expenseType);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const updateExpenseType = useCallback(
    async (expenseType) => {
      console.log('UPDATE expenseType:', expenseType);
      try {
        setLoading(true);
        const response = await expenseTypeApi.updateExpenseType(expenseType);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  const deleteExpenseType = useCallback(
    async (id) => {
      try {
        setLoading(true);
        const response = await expenseTypeApi.deleteExpenseType(id);
        return unwrap(response);
      } finally {
        setLoading(false);
      }
    },
    [setLoading],
  );

  return {
    expenseTypes,
    selectedExpenseType,
    loading,
    filters,
    setFilters,
    getExpenseTypes,
    getExpenseTypeById,
    createExpenseType,
    updateExpenseType,
    deleteExpenseType,
  };
};

export default useExpenseType;
