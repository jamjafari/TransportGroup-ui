import { useMemo, useState } from 'react';
import ExpenseTypeContext from './ExpenseTypeContext';

const ExpenseTypeProvider = ({ children }) => {
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [selectedExpenseType, setSelectedExpenseType] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: '',
    status: null,
  });

  const value = useMemo(
    () => ({
      expenseTypes,
      setExpenseTypes,

      selectedExpenseType,
      setSelectedExpenseType,

      loading,
      setLoading,

      filters,
      setFilters,
    }),
    [expenseTypes, selectedExpenseType, loading, filters],
  );

  return (
    <ExpenseTypeContext.Provider value={value}>
      {children}
    </ExpenseTypeContext.Provider>
  );
};

export default ExpenseTypeProvider;
