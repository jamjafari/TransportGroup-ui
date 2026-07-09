import React, { memo } from 'react';

import { DashboardTable } from '../widgets';

import useServiceReminderTable from './useServiceReminderTable';

const ServiceReminderTable = () => {
  const table = useServiceReminderTable();

  return <DashboardTable {...table} />;
};

export default memo(ServiceReminderTable);
