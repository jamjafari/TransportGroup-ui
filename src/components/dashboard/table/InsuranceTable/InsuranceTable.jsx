import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useInsuranceTable from './useInsuranceTable';

const insuranceTable = () => {
  const table = useInsuranceTable();

  return <DashboardTable {...table} />;
};

export default memo(insuranceTable);
