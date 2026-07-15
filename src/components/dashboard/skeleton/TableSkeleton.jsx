import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Skeleton,
  Box,
} from '@mui/material';

import Stack from '@mui/system/Stack';

import {
  TableSkeletonPropTypes,
  TableSkeletonDefaultProps,
} from './TableSkeleton.types';

const TableSkeleton = ({
  rows,

  columns,

  height,
}) => {
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

            width={130}
          />
        }
      />

      <Divider />

      <CardContent
        sx={{
          flex: 1,

          overflow: 'hidden',
        }}
      >
        {/* Header */}

        <Stack
          direction="row"

          spacing={2}

          mb={2}
        >
          {[...Array(columns)].map((_, index) => (
            <Skeleton
              key={index}

              variant="rounded"

              height={32}

              sx={{
                flex: 1,
              }}
            />
          ))}
        </Stack>

        <Divider />

        {/* Rows */}

        {[...Array(rows)].map((_, rowIndex) => (
          <Box
            key={rowIndex}

            py={1.5}
          >
            <Stack
              direction="row"

              spacing={2}
            >
              {[...Array(columns)].map((_, colIndex) => (
                <Skeleton
                  key={colIndex}

                  variant="text"

                  height={28}

                  sx={{
                    flex: 1,
                  }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

TableSkeleton.propTypes = TableSkeletonPropTypes;

TableSkeleton.defaultProps = TableSkeletonDefaultProps;

export default memo(TableSkeleton);
