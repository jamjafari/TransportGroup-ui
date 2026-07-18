import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

import DashboardSpacing from './DashboardSpacing';

import DashboardRow from './DashboardRow';

import {
  DashboardSectionPropTypes,
  DashboardSectionDefaultProps,
} from './DashboardSection.types';

const DashboardSection = ({
  title,

  subtitle,

  children,

  spacing,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {(title || subtitle) && (
        <Stack
          spacing={0.5}

          mb={DashboardSpacing.section}
        >
          {title && <Typography variant="h6">{title}</Typography>}

          {subtitle && (
            <Typography
              variant="h6"

              color="text.secondary"

              sx={{
                textAlign: 'right',
                width: '100%',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Stack>
      )}

      <DashboardRow spacing={spacing}>{children}</DashboardRow>
    </Box>
  );
};

DashboardSection.propTypes = DashboardSectionPropTypes;

DashboardSection.defaultProps = DashboardSectionDefaultProps;

export default memo(DashboardSection);
