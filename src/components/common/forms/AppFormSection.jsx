import React, { memo } from 'react';

import { Box, Typography, Divider } from '@mui/material';

import {
  AppFormSectionPropTypes,
  AppFormSectionDefaultProps,
} from './AppFormSection.types';

const AppFormSection = ({ title, subtitle, children, divider }) => {
  return (
    <Box direction="row-reverse">
      {(title || subtitle) && (
        <Box mb={2} direction="row-reverse">
          {title && (
            <Typography variant="subtitle1" fontWeight={700}>
              {title}
            </Typography>
          )}

          {subtitle && (
            <Typography variant="body2" color="text.secondary">
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
