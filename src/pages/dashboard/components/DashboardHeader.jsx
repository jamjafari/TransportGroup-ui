import React, { memo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { AppButton } from '@/components';

import RefreshIcon from '@mui/icons-material/Refresh';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  DashboardHeaderPropTypes,
  DashboardHeaderDefaultProps,
} from './DashboardHeader.types';
const DashboardHeader = ({
  title = 'Dashboard',

  subtitle = 'Fleet overview and operational status',

  onRefresh,
}) => {
  return (
    <Box>
      <Stack
        direction="row"

        justifyContent="space-between"

        alignItems="center"

        spacing={2}
      >
        <Stack spacing={0.5}>
          <Stack
            direction="row"

            spacing={1}

            alignItems="center"
          >
            <DashboardIcon color="primary" />

            <Typography
              variant="h4"

              fontWeight={700}
            >
              {title}
            </Typography>
          </Stack>

          <Typography
            variant="body2"

            color="text.secondary"
          >
            {subtitle}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <AppButton
            variant="outlined"

            startIcon={<RefreshIcon />}

            onClick={onRefresh}
          >
            Refresh
          </AppButton>
        </Stack>
      </Stack>
    </Box>
  );
};

DashboardHeader.propTypes = DashboardHeaderPropTypes;

DashboardHeader.defaultProps = DashboardHeaderDefaultProps;

export default memo(DashboardHeader);
