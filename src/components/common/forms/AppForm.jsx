import React, { memo } from 'react';

import { Box } from '@mui/material';

import { AppFormPropTypes, AppFormDefaultProps } from './AppForm.types';

const AppForm = ({ children, onSubmit, spacing, noValidate }) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate={noValidate}>
      <Box display="flex" flexDirection="column" gap={spacing}>
        {children}
      </Box>
    </Box>
  );
};

AppForm.propTypes = AppFormPropTypes;

AppForm.defaultProps = AppFormDefaultProps;

export default memo(AppForm);
