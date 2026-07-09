import React, { memo } from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import RefreshIcon from '@mui/icons-material/Refresh';

import {
  DashboardErrorPropTypes,
  DashboardErrorDefaultProps,
} from './DashboardError.types';

const DashboardError = ({ title, description, onRetry }) => {
  return (
    <Box
      display="flex"

      justifyContent="center"

      alignItems="center"

      height="100%"

      width="100%"
    >
      <Stack
        spacing={2}

        alignItems="center"
      >
        <ErrorOutlineIcon
          color="error"

          sx={{
            fontSize: 64,
          }}
        />

        <Typography variant="h6">{title}</Typography>

        <Typography
          variant="body2"

          color="text.secondary"

          align="center"
        >
          {description}
        </Typography>

        {onRetry && (
          <Button
            variant="contained"

            startIcon={<RefreshIcon />}

            onClick={onRetry}
          >
            تلاش مجدد
          </Button>
        )}
      </Stack>
    </Box>
  );
};

DashboardError.propTypes = DashboardErrorPropTypes;

DashboardError.defaultProps = DashboardErrorDefaultProps;

export default memo(DashboardError);
