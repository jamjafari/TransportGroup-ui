import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Skeleton,
  Stack,
  Box,
} from '@mui/material';

import {
  ChartSkeletonPropTypes,
  ChartSkeletonDefaultProps,
} from './ChartSkeleton.types';

const ChartSkeleton = ({ height }) => {
  return (
    <Card
      sx={{
        height,

        display: 'flex',

        flexDirection: 'column',
      }}
    >
      <CardHeader
        title={
          <Skeleton
            variant="text"

            width={170}

            height={28}
          />
        }

        subheader={
          <Skeleton
            variant="text"

            width={110}
          />
        }
      />

      <Divider />

      <CardContent
        sx={{
          flex: 1,
        }}
      >
        <Stack
          spacing={2}

          height="100%"
        >
          <Box
            display="flex"

            justifyContent="space-between"
          >
            <Skeleton variant="text" width={60} />

            <Skeleton variant="text" width={60} />
          </Box>

          <Skeleton
            variant="rounded"

            sx={{
              flex: 1,

              borderRadius: 2,
            }}
          />

          <Box
            display="flex"

            justifyContent="space-around"
          >
            <Skeleton variant="text" width={45} />

            <Skeleton variant="text" width={45} />

            <Skeleton variant="text" width={45} />

            <Skeleton variant="text" width={45} />

            <Skeleton variant="text" width={45} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

ChartSkeleton.propTypes = ChartSkeletonPropTypes;

ChartSkeleton.defaultProps = ChartSkeletonDefaultProps;

export default memo(ChartSkeleton);
