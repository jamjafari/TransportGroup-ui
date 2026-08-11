import { useContext } from 'react';
import ExpenseTypeContext from './ExpenseTypeContext';

const useExpenseTypeContext = () => {
  const context = useContext(ExpenseTypeContext);

  if (!context) {
    throw new Error(
      'useExpenseTypeContext must be used inside ExpenseTypeProvider.',
    );
  }

  return context;
};

export default useExpenseTypeContext;
