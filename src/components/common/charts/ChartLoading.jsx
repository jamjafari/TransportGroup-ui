import React, { memo } from 'react';

import { Box, Skeleton } from '@mui/material';

import {
  ChartLoadingPropTypes,
  ChartLoadingDefaultProps,
} from './ChartLoading.types';

const ChartLoading = ({ height }) => {
  return (
    <Box
      sx={{
        width: '100%',

        height,

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'center',
      }}
    >
      <Skeleton
        variant="rounded"

        width="100%"

        height="100%"
      />
    </Box>
  );
};

ChartLoading.propTypes = ChartLoadingPropTypes;

ChartLoading.defaultProps = ChartLoadingDefaultProps;

export default memo(ChartLoading);
