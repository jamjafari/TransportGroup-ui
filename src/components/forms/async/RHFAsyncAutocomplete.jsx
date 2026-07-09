import React from 'react';

import { Controller } from 'react-hook-form';

import AppAutocomplete from '../../components/common/forms/AppAutocomplete';

import { useAsyncOptions } from './useAsyncOptions';

const RHFAsyncAutocomplete = ({ name, label, fetcher, params, ...rest }) => {
  const { options, loading } = useAsyncOptions({
    fetcher,
    params,
  });

  return (
    <Controller
      name={name}

      render={({ field, fieldState }) => (
        <AppAutocomplete
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

export default RHFAsyncAutocomplete;
