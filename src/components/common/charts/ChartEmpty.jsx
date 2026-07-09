import React, { memo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

import {
  ChartEmptyPropTypes,
  ChartEmptyDefaultProps,
} from './ChartEmpty.types';

const ChartEmpty = ({
  title,

  height,
}) => {
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
      <Stack
        spacing={2}

        alignItems="center"
      >
        <InsertChartOutlinedIcon
          color="disabled"

          sx={{
            fontSize: 56,
          }}
        />

        <Typography
          variant="body2"

          color="text.secondary"
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};

ChartEmpty.propTypes = ChartEmptyPropTypes;

ChartEmpty.defaultProps = ChartEmptyDefaultProps;

export default memo(ChartEmpty);
