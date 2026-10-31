import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import InboxIcon from '@mui/icons-material/Inbox';

import {
  DashboardEmptyPropTypes,
  DashboardEmptyDefaultProps,
} from './DashboardEmpty.types';

const DashboardEmpty = ({ title, description }) => {
  const { t } = useTranslation();

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

        <Typography variant="cardTitle">{t(title)}</Typography>

        <Typography
          variant="cardSubtitle"

          color="text.secondary"
        >
          {t(description)}
        </Typography>
      </Stack>
    </Box>
  );
};

DashboardEmpty.propTypes = DashboardEmptyPropTypes;

DashboardEmpty.defaultProps = DashboardEmptyDefaultProps;

export default memo(DashboardEmpty);
