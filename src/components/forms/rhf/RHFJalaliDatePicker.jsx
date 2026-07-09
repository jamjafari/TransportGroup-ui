import React from 'react';

import { Controller } from 'react-hook-form';

import AppJalaliDatePicker from '../../components/common/forms/AppJalaliDatePicker';

const RHFJalaliDatePicker = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppJalaliDatePicker
          {...field}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFJalaliDatePicker;
