import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

import InboxIcon from '@mui/icons-material/Inbox';

import {
  DashboardEmptyPropTypes,
  DashboardEmptyDefaultProps,
} from './DashboardEmpty.types';

const DashboardEmpty = ({ title, description }) => {
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
        <InboxIcon
          sx={{
            fontSize: 64,

            color: 'text.disabled',
          }}
        />

        <Typography variant="h6">{title}</Typography>

        <Typography
          variant="body2"

          color="text.secondary"
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

DashboardEmpty.propTypes = DashboardEmptyPropTypes;

DashboardEmpty.defaultProps = DashboardEmptyDefaultProps;

export default memo(DashboardEmpty);
