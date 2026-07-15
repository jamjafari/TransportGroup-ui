import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useLatestActivitiesTable from './useLatestActivitiesTable';

const LatestActivitiesTable = () => {
  const table = useLatestActivitiesTable();

  return <DashboardTable {...table} />;
};

export default memo(LatestActivitiesTable);
