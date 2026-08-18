import React, { memo } from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { Button, FormControl, FormHelperText, Typography } from '@mui/material';

import Stack from '@mui/material/Stack';

import UploadFileIcon from '@mui/icons-material/UploadFile';

import {
  AppFileUploadFieldPropTypes,
  AppFileUploadFieldDefaultProps,
} from './AppFileUploadField.types';

const AppFileUploadField = ({ field }) => {
  const { control } = useFormContext();

  if (field.state.hidden) {
    return null;
  }

  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={field.state.defaultValue}
      render={({ field: rhfField, fieldState }) => (
        <FormControl error={!!fieldState.error}>
          <Stack spacing={1}>
            <Typography variant="body2">{field.ui.label}</Typography>

            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadFileIcon />}
              disabled={field.state.disabled}
              {...field.props}
            >
              Select File
              <input
                hidden
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0] ?? null;

                  rhfField.onChange(file);
                }}
              />
            </Button>

            {rhfField.value && (
              <Typography variant="caption">{rhfField.value.name}</Typography>
            )}

            <FormHelperText>
              {fieldState.error?.message ?? field.ui.helperText}
            </FormHelperText>
          </Stack>
        </FormControl>
      )}
    />
  );
};

AppFileUploadField.propTypes = AppFileUploadFieldPropTypes;

AppFileUploadField.defaultProps = AppFileUploadFieldDefaultProps;

export default memo(AppFileUploadField);
