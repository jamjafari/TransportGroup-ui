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
import { Grid } from '@mui/material';

const DashboardTables = () => {
  return (
    <>
      <DashboardSection title=" آخرین فعالیت ها و هزینه ها">
        <DashboardGrid>
          <DashboardColumn xl={6}>
            <LatestActivitiesTable />
          </DashboardColumn>
          <DashboardColumn xl={6}>
            <ExpenseTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="اطلاعات ناوگان">
        <DashboardGrid>
          <DashboardColumn xl={6}>
            <VehicleTable />
          </DashboardColumn>

          <DashboardColumn xl={6}>
            <DriverTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="ماموریت ها">
        <DashboardGrid>
          <DashboardColumn xl={6}>
            <MissionTable />
          </DashboardColumn>

          <DashboardColumn xl={6}>
            <FuelRecordTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>

      <DashboardSection title="یادآوری بیمه و سرویس">
        <DashboardGrid>
          <DashboardColumn xl={6}>
            <InsuranceTable />
          </DashboardColumn>
          <DashboardColumn xl={6}>
            <ServiceReminderTable />
          </DashboardColumn>
        </DashboardGrid>
      </DashboardSection>
    </>
  );
};

export default memo(DashboardTables);
