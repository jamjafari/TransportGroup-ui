import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useComplianceAlertsTable from './useComplianceAlertsTable';

const insuranceTable = () => {
  const table = useComplianceAlertsTable();

  return <DashboardTable {...table} />;
};

export default memo(insuranceTable);
