import React, { memo } from 'react';

import { AppCard, Timeline } from '@/components';

import {
  DashboardTimelinePropTypes,
  DashboardTimelineDefaultProps,
} from './DashboardTimeline.types';

const DashboardTimeline = ({
  loading,

  data,
}) => {
  return (
    <AppCard title="Recent Activities">
      <Timeline
        loading={loading}

        items={data}

        emptyMessage="No recent activities."
      />
    </AppCard>
  );
};

DashboardTimeline.propTypes = DashboardTimelinePropTypes;

DashboardTimeline.defaultProps = DashboardTimelineDefaultProps;

export default memo(DashboardTimeline);
