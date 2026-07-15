import React, { memo } from 'react';

import { DashboardSection } from '@/components';
import { DashboardGrid } from '@/components';
import { DashboardColumn } from '@/components';

import { LatestActivitiesTable } from '@/components';
import { VehicleTable } from '@/components';
import { DriverTable } from '@/components';
import { FuelRecordTable } from '@/components';
import { ExpenseTable } from '@/components';
import { MissionTable } from '@/components';
import { InsuranceTable } from '@/components';
import { ServiceReminderTable } from '@/components';

const DashboardTables = () => {
  return (
    <>
      <DashboardSection title="Latest Activities">
        <LatestActivitiesTable />
      </DashboardSection>

      <DashboardSection title="Fleet Information">
        <DashboardGrid>
          <DashboardColumn lg={6}>
            <VehicleTable />
          </DashboardColumn>

          <DashboardColumn lg={6}>
            <DriverTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="Operations">
        <DashboardGrid>
          <DashboardColumn lg={6}>
            <MissionTable />
          </DashboardColumn>

          <DashboardColumn lg={6}>
            <FuelRecordTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="Expenses">
        <ExpenseTable />
      </DashboardSection>

      <DashboardSection title="Insurance Reminder">
        <InsuranceTable />
      </DashboardSection>

      <DashboardSection title="Service Reminder">
        <ServiceReminderTable />
      </DashboardSection>
    </>
  );
};

export default memo(DashboardTables);
