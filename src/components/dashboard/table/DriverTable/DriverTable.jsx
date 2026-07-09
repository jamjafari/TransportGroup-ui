import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useDriverTable from './useDriverTable';

const DriverTable = () => {
  const table = useDriverTable();

  return <DashboardTable {...table} />;
};

export default memo(DriverTable);
