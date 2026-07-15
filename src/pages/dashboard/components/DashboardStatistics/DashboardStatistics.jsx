import React, { memo } from 'react';

import { DashboardSection } from '@/components';

import { DashboardGrid } from '@/components';

import { DashboardColumn } from '@/components';

import { AppMiniStat } from '@/components';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import PersonIcon from '@mui/icons-material/Person';

import RouteIcon from '@mui/icons-material/Route';

import PaymentsIcon from '@mui/icons-material/Payments';

import useDashboardStatistics from '../../hooks/useDashboardStatistics';

const DashboardStatistics = () => {
  const statistics = useDashboardStatistics();

  return (
    <DashboardSection title="Statistics">
      <DashboardGrid>
        <DashboardColumn>
          <AppMiniStat
            title="Vehicles"

            value={statistics.vehicleCount}

            icon={<DirectionsCarIcon color="primary" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn>
          <AppMiniStat
            title="Drivers"

            value={statistics.driverCount}

            icon={<PersonIcon color="success" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn>
          <AppMiniStat
            title="Missions"

            value={statistics.missionCount}

            icon={<RouteIcon color="warning" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn>
          <AppMiniStat
            title="Expenses"

            value={statistics.expenseCount}

            icon={<PaymentsIcon color="error" />}

            loading={statistics.loading}
          />
        </DashboardColumn>
      </DashboardGrid>
    </DashboardSection>
  );
};

export default memo(DashboardStatistics);
