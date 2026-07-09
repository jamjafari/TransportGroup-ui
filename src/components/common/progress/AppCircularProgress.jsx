import React, { memo } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import {
  AppCircularProgressPropTypes,
  AppCircularProgressDefaultProps,
} from './AppCircularProgress.types';

const AppCircularProgress = ({ value, size, thickness, color, showValue }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={thickness}
        color={color}
      />

      {showValue && (
        <Box
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" fontWeight={700}>
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

AppCircularProgress.propTypes = AppCircularProgressPropTypes;

AppCircularProgress.defaultProps = AppCircularProgressDefaultProps;

export default memo(AppCircularProgress);
