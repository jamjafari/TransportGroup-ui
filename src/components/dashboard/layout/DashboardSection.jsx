import React, { memo } from 'react';

import { Box, Stack, Typography } from '@mui/material';

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
    <Box>
      {(title || subtitle) && (
        <Stack
          spacing={0.5}

          mb={DashboardSpacing.section}
        >
          {title && <Typography variant="h6">{title}</Typography>}

          {subtitle && (
            <Typography
              variant="body2"

              color="text.secondary"
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
