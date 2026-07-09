import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useinsuranceTable from './useinsuranceTable';

const insuranceTable = () => {
  const table = useinsuranceTable();

  return <DashboardTable {...table} />;
};

export default memo(insuranceTable);
