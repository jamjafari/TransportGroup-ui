import React, { memo } from 'react';

import { Box, Grid } from '@mui/material';

import { AppChartCard, StatusChip } from '@/components';
import {
  DashboardKpiCardsPropTypes,
  DashboardKpiCardsDefaultProps,
} from './DashboardKpiCards.types';
const DashboardKpiCards = ({
  loading,

  data,
}) => {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid
          key={item.id}

          size={{
            xs: 12,

            sm: 6,

            md: 3,
          }}
        >
          <AppChartCard
            title={item.title}

            loading={loading}
          >
            <Grid container spacing={2}>
              <Grid size={12}>
                <StatusChip
                  label={item.status}

                  color={item.statusColor}
                />
              </Grid>

              <Grid size={12}>
                <h2
                  style={{
                    margin: 0,

                    fontWeight: 700,
                  }}
                >
                  {item.value}
                </h2>
              </Grid>

              <Grid size={12}>
                <Box
                  component="span"
                  sx={{
                    color: 'text.secondary',

                    fontSize: 14,
                  }}
                >
                  {item.description}
                </Box>
              </Grid>
            </Grid>
          </AppChartCard>
        </Grid>
      ))}
    </Grid>
  );
};
DashboardKpiCards.propTypes = DashboardKpiCardsPropTypes;

DashboardKpiCards.defaultProps = DashboardKpiCardsDefaultProps;
export default memo(DashboardKpiCards);
