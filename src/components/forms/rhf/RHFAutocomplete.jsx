import React from 'react';

import { Controller } from 'react-hook-form';

import AppAutocomplete from '../../components/common/forms/AppAutocomplete';

const RHFAutocomplete = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppAutocomplete
          {...field}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFAutocomplete;
