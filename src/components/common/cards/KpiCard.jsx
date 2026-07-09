import React, { memo } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Box,
  Skeleton,
  Chip,
} from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { KpiCardPropTypes } from './KpiCard.types';

const KpiCard = ({
  title,

  value,

  subtitle,

  icon,

  color = 'primary.main',

  trend,

  loading = false,

  onClick,

  sx,
}) => {
  return (
    <Card
      onClick={onClick}

      sx={{
        cursor: onClick ? 'pointer' : 'default',

        height: '100%',

        ...sx,
      }}
    >
      <CardContent>
        {loading ? (
          <>
            <Skeleton width="60%" />

            <Skeleton
              width="40%"

              height={45}
            />
          </>
        ) : (
          <>
            <Stack
              direction="row"

              justifyContent="space-between"

              alignItems="center"
            >
              <Box>
                <Typography
                  variant="body2"

                  color="text.secondary"
                >
                  {title}
                </Typography>

                <Typography
                  variant="h4"

                  fontWeight={700}

                  mt={1}
                >
                  {value}
                </Typography>
              </Box>

              <Avatar
                sx={{
                  bgcolor: color,

                  width: 56,

                  height: 56,
                }}
              >
                {icon}
              </Avatar>
            </Stack>

            {subtitle && (
              <Typography
                variant="body2"

                color="text.secondary"

                mt={2}
              >
                {subtitle}
              </Typography>
            )}

            {trend !== undefined && (
              <Chip
                sx={{
                  mt: 2,
                }}

                size="small"

                color={trend >= 0 ? 'success' : 'error'}

                icon={trend >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}

                label={`${trend}%`}
              />
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

KpiCard.propTypes = KpiCardPropTypes;

export default memo(KpiCard);
