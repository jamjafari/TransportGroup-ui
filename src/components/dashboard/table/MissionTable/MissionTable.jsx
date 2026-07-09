import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useMissionTable from './useMissionTable';

const MissionTable = () => {
  const table = useMissionTable();

  return <DashboardTable {...table} />;
};

export default memo(MissionTable);
