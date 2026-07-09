import React, { memo } from 'react';

import { Typography } from '@mui/material';

import {
  FormHelperTextPropTypes,
  FormHelperTextDefaultProps,
} from './FormHelperText.types';

const FormHelperText = ({ children, error, color }) => {
  return (
    <Typography
      variant="caption"
      color={error ? 'error' : color}
      display="block"
      mt={0.5}
    >
      {children}
    </Typography>
  );
};

FormHelperText.propTypes = FormHelperTextPropTypes;

FormHelperText.defaultProps = FormHelperTextDefaultProps;

export default memo(FormHelperText);
