import React, { memo } from 'react';

import { DashboardSection } from '@/components';
import { DashboardGrid } from '@/components';
import { DashboardColumn } from '@/components';

import { FuelConsumptionChart } from '@/components';
import { MonthlyDistanceChart } from '@/components';
import { VehicleUsageChart } from '@/components';
import { MissionChart } from '@/components';
import { DriverPerformanceChart } from '@/components';
import { ExpenseChart } from '@/components';

const DashboardCharts = () => {
  return (
    <DashboardSection title="Analytics">
      <DashboardGrid>
        <DashboardColumn md={6}>
          <FuelConsumptionChart />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <ExpensesChart />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <MonthlyDistanceChart />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <VehicleUsageChart />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <MissionChart />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <DriverPerformanceChart />
        </DashboardColumn>
      </DashboardGrid>
    </DashboardSection>
  );
};

export default memo(DashboardCharts);
