import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { FormFieldPropTypes, FormFieldDefaultProps } from './FormField.types';

const FormField = ({ label, required, helperText, error, children }) => {
  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={0.5}>
          {label}

          {required && ' *'}
        </Typography>
      )}

      {children}

      {helperText && (
        <Typography
          variant="caption"
          color={error ? 'error' : 'text.secondary'}
          mt={0.5}
          display="block"
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

FormField.propTypes = FormFieldPropTypes;

FormField.defaultProps = FormFieldDefaultProps;

export default memo(FormField);
