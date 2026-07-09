import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';

import {
  AppLinearStatPropTypes,
  AppLinearStatDefaultProps,
} from './AppStat.types';

const AppLinearStat = ({
  title,

  value,

  subtitle,

  color,

  showPercent,
}) => {
  const progress = Math.max(0, Math.min(100, Number(value)));

  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>

          {showPercent && (
            <Typography variant="subtitle2" fontWeight={700}>
              {progress}%
            </Typography>
          )}
        </Box>

        <LinearProgress
          variant="determinate"
          value={progress}
          color={color}
          sx={{
            height: 10,
            borderRadius: 5,
          }}
        />

        {subtitle && (
          <Typography
            variant="caption"
            color="text.secondary"
            mt={1}
            display="block"
          >
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

AppLinearStat.propTypes = AppLinearStatPropTypes;

AppLinearStat.defaultProps = AppLinearStatDefaultProps;

export default React.memo(AppLinearStat);
