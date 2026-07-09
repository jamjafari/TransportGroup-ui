import React, { memo } from 'react';

import { Box, LinearProgress, Typography } from '@mui/material';

import {
  AppLinearProgressPropTypes,
  AppLinearProgressDefaultProps,
} from './AppLinearProgress.types';

const AppLinearProgress = ({ value, label, showValue, color }) => {
  return (
    <Box width="100%">
      {label && (
        <Box display="flex" justifyContent="space-between" mb={0.5}>
          <Typography variant="body2">{label}</Typography>

          {showValue && <Typography variant="body2">{`${value}%`}</Typography>}
        </Box>
      )}

      <LinearProgress variant="determinate" value={value} color={color} />
    </Box>
  );
};

AppLinearProgress.propTypes = AppLinearProgressPropTypes;

AppLinearProgress.defaultProps = AppLinearProgressDefaultProps;

export default memo(AppLinearProgress);
