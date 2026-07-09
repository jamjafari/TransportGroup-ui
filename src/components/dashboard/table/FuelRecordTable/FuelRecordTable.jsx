import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useFuelRecordrTable from './useFuelRecordrTable';

const FuelRecordrTable = () => {
  const table = useFuelRecordrTable();

  return <DashboardTable {...table} />;
};

export default memo(FuelRecordrTable);
