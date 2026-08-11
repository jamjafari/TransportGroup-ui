import { useCallback, useState } from 'react';

import * as expenseTypeApi from '@/modules/expenseTypes/api/expenseTypeApi';
const useFuelRecordExpenseTypes = () => {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getExpenseTypes = useCallback(async () => {
    try {
      setLoading(true);

      const response = await expenseTypeApi.getExpenseTypes();
      console.log('ExpenseType API response:', response);
      console.log('ExpenseType data:', response?.data);

      if (response?.success) {
        setExpenseTypes(response.data || []);
      } else {
        setExpenseTypes([]);
      }

      return response?.data || [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    expenseTypes,
    loading,
    getExpenseTypes,
  };
};

export default useFuelRecordExpenseTypes;
