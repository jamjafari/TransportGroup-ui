import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Skeleton,
  Stack,
} from '@mui/material';

import {
  CardSkeletonPropTypes,
  CardSkeletonDefaultProps,
} from './CardSkeleton.types';

const CardSkeleton = ({ height }) => {
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

            width={180}

            height={28}
          />
        }

        subheader={
          <Skeleton
            variant="text"

            width={120}
          />
        }
      />

      <Divider />

      <CardContent
        sx={{
          flex: 1,
        }}
      >
        <Stack spacing={2}>
          <Skeleton
            variant="rounded"

            height={24}
          />

          <Skeleton
            variant="rounded"

            height={24}
          />

          <Skeleton
            variant="rounded"

            height={24}
          />

          <Skeleton
            variant="rounded"

            height={24}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

CardSkeleton.propTypes = CardSkeletonPropTypes;

CardSkeleton.defaultProps = CardSkeletonDefaultProps;

export default memo(CardSkeleton);
