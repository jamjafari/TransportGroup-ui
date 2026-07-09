import React from 'react';

import { Controller } from 'react-hook-form';

import AppTextField from '../../components/common/forms/AppTextField';

const RHFTextField = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppTextField
          {...field}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFTextField;
