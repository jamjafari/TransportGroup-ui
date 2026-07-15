import React, { memo } from 'react';

import { Grid } from '@mui/material';

import { AppCard, AppLoader } from '../cards/AppCard';

import { StatisticsPanelPropTypes } from './StatisticsPanel.types';

const StatisticsPanel = ({
  items,

  loading = false,
}) => {
  if (loading) {
    return <AppLoader />;
  }

  return (
    <Grid
      container

      spacing={3}
    >
      {items.map((item) => (
        <Grid
          key={item.title}

          size={{
            xs: 12,

            sm: 6,

            md: 4,

            lg: 3,
          }}
        >
          <AppCard
            title={item.title}

            value={item.value}

            subtitle={item.subtitle}

            icon={item.icon}

            color={item.color}
          />
        </Grid>
      ))}
    </Grid>
  );
};

StatisticsPanel.propTypes = StatisticsPanelPropTypes;

export default memo(StatisticsPanel);
