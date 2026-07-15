import React, { memo } from 'react';

import Stack from '@mui/system/Stack';

import { AppCard, Alerts } from '@/components';

import {
  DashboardAlertsPropTypes,
  DashboardAlertsDefaultProps,
} from './DashboardAlerts.types';

const DashboardAlerts = ({
  loading,

  data,
}) => {
  return (
    <AppCard title="Operational Alerts">
      <Stack spacing={2}>
        {data.map((item) => (
          <Alerts
            key={item.id}

            severity={item.severity}

            title={item.title}

            description={item.description}

            loading={loading}
          />
        ))}
      </Stack>
    </AppCard>
  );
};

DashboardAlerts.propTypes = DashboardAlertsPropTypes;

DashboardAlerts.defaultProps = DashboardAlertsDefaultProps;

export default memo(DashboardAlerts);
