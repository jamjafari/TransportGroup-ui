import { useMemo, useState } from 'react';
import ExpenseContext from './ExpenseContext';

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      expenses,
      setExpenses,

      selectedExpense,
      setSelectedExpense,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [expenses, selectedExpense, loading, filters],
  );

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
