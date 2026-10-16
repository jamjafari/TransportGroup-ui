import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useComplianceAlertsTable from './useComplianceAlertsTable';

const InsuranceTable = () => {
  const table = useComplianceAlertsTable();

  return <DashboardTable {...table} />;
};

export default memo(InsuranceTable);
