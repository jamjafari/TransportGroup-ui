import React, { memo } from 'react';

import { Box, Typography, Divider } from '@mui/material';

import {
  AppSectionPropTypes,
  AppSectionDefaultProps,
} from './AppSection.types';

const AppSection = ({ title, subtitle, children, divider, spacing }) => {
  return (
    <Box mb={spacing}>
      {(title || subtitle) && (
        <Box mb={2}>
          {title && (
            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}

          {divider && <Divider sx={{ mt: 2 }} />}
        </Box>
      )}

      {children}
    </Box>
  );
};

AppSection.propTypes = AppSectionPropTypes;

AppSection.defaultProps = AppSectionDefaultProps;

export default memo(AppSection);
