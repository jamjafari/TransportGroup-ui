import React from 'react';

import { Controller } from 'react-hook-form';

import AppSelect from '../../components/common/forms/AppSelect';

const RHFSelect = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppSelect
          {...field}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFSelect;
