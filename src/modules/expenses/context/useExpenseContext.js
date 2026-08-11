import { useContext } from 'react';
import ExpenseContext from './ExpenseContext';

const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error('useExpenseContext must be used inside ExpenseProvider.');
  }

  return context;
};

export default useExpenseContext;
