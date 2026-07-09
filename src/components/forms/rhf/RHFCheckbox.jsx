import React from 'react';

import { Controller } from 'react-hook-form';

import AppCheckbox from '../../components/common/forms/AppCheckbox';

const RHFCheckbox = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppCheckbox
          {...field}

          checked={field.value}

          onChange={(e) => field.onChange(e.target.checked)}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFCheckbox;
