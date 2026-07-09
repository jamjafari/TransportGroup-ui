import React, { memo } from 'react';

import { Typography } from '@mui/material';

import { FormLabelPropTypes, FormLabelDefaultProps } from './FormLabel.types';

const FormLabel = ({ children, required, color }) => {
  return (
    <Typography variant="body2" fontWeight={600} color={color}>
      {children}

      {required && ' *'}
    </Typography>
  );
};

FormLabel.propTypes = FormLabelPropTypes;

FormLabel.defaultProps = FormLabelDefaultProps;

export default memo(FormLabel);
