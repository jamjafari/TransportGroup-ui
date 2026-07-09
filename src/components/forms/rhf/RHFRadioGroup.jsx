import React from 'react';

import { Controller } from 'react-hook-form';

import AppRadioGroup from '../../components/common/forms/AppRadioGroup';

const RHFRadioGroup = ({ name, ...rest }) => {
  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppRadioGroup
          {...field}

          {...rest}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFRadioGroup;
