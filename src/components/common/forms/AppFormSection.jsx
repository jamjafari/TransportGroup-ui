import React, { memo } from 'react';

import { Box, Typography, Divider } from '@mui/material';

import {
  AppFormSectionPropTypes,
  AppFormSectionDefaultProps,
} from './AppFormSection.types';

const AppFormSection = ({ title, subtitle, children, divider }) => {
  return (
    <Box
      dir="rtl"
      sx={{
        width: '100%',
      }}
    >
      {(title || subtitle) && (
        <Box
          mb={2}
          sx={{
            width: '100%',
            textAlign: 'right',
          }}
        >
          {title && (
            <Typography variant="subtitle1" fontWeight={700} align="right">
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="body2" color="text.secondary" align="right">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {children}

      {divider && (
        <Box mt={2}>
          <Divider />
        </Box>
      )}
    </Box>
  );
};

AppFormSection.propTypes = AppFormSectionPropTypes;

AppFormSection.defaultProps = AppFormSectionDefaultProps;

export default memo(AppFormSection);
