import React, { memo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import {
  ChartLegendPropTypes,
  ChartLegendDefaultProps,
} from './ChartLegend.types';

const ChartLegend = ({ items }) => {
  return (
    <Stack spacing={1}>
      {items.map((item) => (
        <Box
          key={item.label}

          display="flex"

          alignItems="center"

          justifyContent="space-between"
        >
          <Box
            display="flex"

            alignItems="center"

            gap={1}
          >
            <Box
              sx={{
                width: 12,

                height: 12,

                borderRadius: '50%',

                backgroundColor: item.color,
              }}
            />

            <Typography variant="body2">{item.label}</Typography>
          </Box>

          <Box
            display="flex"

            gap={2}
          >
            {item.percent !== undefined && (
              <Typography
                variant="body2"

                color="text.secondary"
              >
                {item.percent}%
              </Typography>
            )}

            <Typography
              variant="body2"

              fontWeight={600}
            >
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

ChartLegend.propTypes = ChartLegendPropTypes;

ChartLegend.defaultProps = ChartLegendDefaultProps;

export default memo(ChartLegend);
