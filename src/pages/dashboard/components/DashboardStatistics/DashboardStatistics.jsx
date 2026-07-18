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
    <DashboardSection title="آمار ناوگان">
      <DashboardGrid>
        <DashboardColumn xl={3}>
          <AppMiniStat
            title="خودروها"

            value={statistics.vehicleCount}

            icon={<DirectionsCarIcon color="primary" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn xl={3}>
          <AppMiniStat
            title="راننده ها"

            value={statistics.driverCount}

            icon={<PersonIcon color="success" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn xl={3}>
          <AppMiniStat
            title="ماموریت "

            value={statistics.missionCount}

            icon={<RouteIcon color="warning" />}

            loading={statistics.loading}
          />
        </DashboardColumn>

        <DashboardColumn xl={3}>
          <AppMiniStat
            title="هزینه ها"

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
