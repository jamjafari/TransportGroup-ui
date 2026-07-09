import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useVehicleTable from './useVehicleTable';

const VehicleTable = () => {
  const table = useVehicleTable();

  return <DashboardTable {...table} />;
};

export default memo(VehicleTable);
