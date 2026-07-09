import React from 'react';

import { Card, CardContent, Typography, Box, Skeleton } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { AppStatCardPropTypes, AppStatCardDefaultProps } from './AppStat.types';

const AppStatCard = ({
  title,

  value,

  subtitle,

  icon,

  trend,

  loading,
}) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            {loading ? (
              <Skeleton width={80} />
            ) : (
              <Typography variant="h4">{value}</Typography>
            )}

            {subtitle && <Typography variant="caption">{subtitle}</Typography>}
          </Box>

          {icon}
        </Box>

        {trend !== null && (
          <Box mt={2} display="flex" alignItems="center" gap={1}>
            {trend >= 0 ? (
              <TrendingUpIcon color="success" />
            ) : (
              <TrendingDownIcon color="error" />
            )}

            <Typography variant="body2">{trend}%</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

AppStatCard.propTypes = AppStatCardPropTypes;

AppStatCard.defaultProps = AppStatCardDefaultProps;

export default AppStatCard;
