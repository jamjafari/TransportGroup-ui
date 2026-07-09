import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useExpenseTable from './useExpenseTable';

const ExpenseTable = () => {
  const table = useExpenseTable();

  return <DashboardTable {...table} />;
};

export default memo(ExpenseTable);
