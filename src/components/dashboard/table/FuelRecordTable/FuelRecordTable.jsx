import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useFuelRecordTable from './useFuelRecordTable';

const FuelRecordrTable = () => {
  const table = useFuelRecordTable();

  return <DashboardTable {...table} />;
};

export default memo(FuelRecordrTable);
