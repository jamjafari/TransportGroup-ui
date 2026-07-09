import React from 'react';

import { Controller } from 'react-hook-form';

import AppSelect from '../../components/common/forms/AppSelect';

import { useAsyncOptions } from './useAsyncOptions';

const RHFAsyncSelect = ({ name, label, fetcher, params, ...rest }) => {
  const { options, loading } = useAsyncOptions({
    fetcher,
    params,
  });

  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppSelect
          {...field}

          label={label}

          options={options}

          loading={loading}

          error={!!fieldState.error}

          helperText={fieldState.error?.message}

          {...rest}
        />
      )}
    />
  );
};

export default RHFAsyncSelect;
