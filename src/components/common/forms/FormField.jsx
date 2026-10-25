import React, { memo } from 'react';

import { Box, Typography } from '@mui/material';

import useTranslatedField from './useTranslatedField';

import { FormFieldPropTypes, FormFieldDefaultProps } from './FormField.types';

const FormField = ({ label, required, helperText, error, children }) => {
  const { tr } = useTranslatedField();

  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={0.5}>
          {tr(label)}

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
          {tr(helperText)}
        </Typography>
      )}
    </Box>
  );
};

FormField.propTypes = FormFieldPropTypes;

FormField.defaultProps = FormFieldDefaultProps;

export default memo(FormField);
