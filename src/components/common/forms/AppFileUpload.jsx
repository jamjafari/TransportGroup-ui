import React, { memo } from 'react';

import { Box, Button, Typography } from '@mui/material';

import {
  AppFileUploadPropTypes,
  AppFileUploadDefaultProps,
} from './AppFileUpload.types';

const AppFileUpload = ({
  label,
  accept,
  multiple,
  disabled,
  error,
  helperText,
  onChange,
  value,
}) => {
  return (
    <Box>
      {label && (
        <Typography variant="body2" fontWeight={600} mb={1}>
          {label}
        </Typography>
      )}

      <Button
        variant="outlined"

        component="label"

        disabled={disabled}

        color={error ? 'error' : 'primary'}
      >
        Upload File
        <input
          hidden

          type="file"

          accept={accept}

          multiple={multiple}

          onChange={onChange}
        />
      </Button>

      {helperText && (
        <Typography
          variant="caption"
          color={error ? 'error' : 'text.secondary'}
          display="block"
          mt={1}
        >
          {helperText}
        </Typography>
      )}

      {value && (
        <Box mt={1}>
          <Typography variant="caption">Selected:</Typography>

          <Typography variant="body2">
            {multiple ? `${value.length} files` : value?.name || value}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

AppFileUpload.propTypes = AppFileUploadPropTypes;

AppFileUpload.defaultProps = AppFileUploadDefaultProps;

export default memo(AppFileUpload);
