import React, { memo } from 'react';

import { Card, CardContent, Skeleton, Box } from '@mui/material';
import Stack from '@mui/system/Stack';

import {
  StatSkeletonPropTypes,
  StatSkeletonDefaultProps,
} from './StatSkeleton.types';

const StatSkeleton = ({ height }) => {
  return (
    <Card
      sx={{
        height,

        display: 'flex',

        alignItems: 'center',

        justifyContent: 'center',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
        }}
      >
        <Stack spacing={2}>
          <Skeleton
            variant="text"

            width={90}

            height={20}
          />

          <Skeleton
            variant="text"

            width={120}

            height={46}
          />

          <Box
            display="flex"

            justifyContent="space-between"

            alignItems="center"
          >
            <Skeleton
              variant="text"

              width={70}
            />

            <Skeleton
              variant="circular"

              width={32}

              height={32}
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

StatSkeleton.propTypes = StatSkeletonPropTypes;

StatSkeleton.defaultProps = StatSkeletonDefaultProps;

export default memo(StatSkeleton);
