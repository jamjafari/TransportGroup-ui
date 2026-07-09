import React from 'react';

import { Controller } from 'react-hook-form';

import AppSwitch from '../../components/common/forms/AppSwitch';

const RHFSwitch = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppSwitch
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

export default RHFSwitch;
