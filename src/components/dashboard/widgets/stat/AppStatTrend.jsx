import React from 'react';

import { Card, CardContent, Box, Typography, Chip } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import {
  AppStatTrendPropTypes,
  AppStatTrendDefaultProps,
} from './AppStat.types';

const AppStatTrend = ({
  title,

  value,

  trend,

  trendLabel,

  icon,
}) => {
  const positive = trend >= 0;

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            <Typography variant="h4" fontWeight={600}>
              {value}
            </Typography>
          </Box>

          {icon}
        </Box>

        <Box mt={2} display="flex" alignItems="center" gap={1}>
          <Chip
            size="small"

            color={positive ? 'success' : 'error'}

            icon={positive ? <TrendingUpIcon /> : <TrendingDownIcon />}

            label={`${trend}%`}
          />

          {trendLabel && (
            <Typography variant="caption" color="text.secondary">
              {trendLabel}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
AppStatTrend.propTypes = AppStatTrendPropTypes;

AppStatTrend.defaultProps = AppStatTrendDefaultProps;

export default React.memo(AppStatTrend);
